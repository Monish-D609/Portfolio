import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { google } from '@ai-sdk/google';
import { streamText, type StreamTextResult } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import {
  logProviderError,
  SAFE_CHAT_ERROR,
  shouldUseFallback,
} from './provider-fallback';
import {
  matchGenericPreset,
  buildCachedDataStreamResponse,
  getDynamicCachedResponse,
} from './generic-cache';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getInternship';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSports';
import { getWeather } from './tools/getWeather';
import { getCertificates } from './tools/getCertificates';
import { getOthers } from './tools/getOthers';
import { getBesidesCoding } from './tools/getBesidesCoding';
import { getEducation } from './tools/getEducation';
import { getOpportunities } from './tools/getOpportunities';
import { retrieveContext, RAG_FALLBACK_MESSAGE } from '@/lib/rag/retriever';

export const maxDuration = 30;

/* ── Provider: Cloudflare Workers AI (default, free 10k neurons/day) ── */
const CF_MODEL =
  process.env.CF_MODEL ?? '@cf/meta/llama-3.1-8b-instruct-fp8';

const cloudflare = createOpenAICompatible({
  name: 'cloudflare',
  apiKey: process.env.CF_API_TOKEN ?? '',
  baseURL: `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/ai/v1`,
});

/* ── Provider: OpenRouter (fallback 1, 100% free model router) ── */
const OPENROUTER_MODEL =
  process.env.OPENROUTER_MODEL ?? 'openrouter/free';

const openrouter = createOpenAICompatible({
  name: 'openrouter',
  apiKey: process.env.OPENROUTER_API_KEY ?? '',
  baseURL: 'https://openrouter.ai/api/v1',
});

/* ── Provider: Google Gemini (fallback 2, free tier) ── */
const GOOGLE_MODEL = process.env.GOOGLE_MODEL ?? 'gemini-3.5-flash-lite';

const tools = {
  getProjects,
  getPresentation,
  getResume,
  getContact,
  getSkills,
  getSports,
  getCrazy,
  getInternship,
  getWeather,
  getCertificates,
  getOthers,
  getBesidesCoding,
  getEducation,
  getOpportunities,
};

function startChat(
  model: Parameters<typeof streamText>[0]['model'],
  messages: Parameters<typeof streamText>[0]['messages'],
) {
  return streamText({
    model,
    messages,
    tools,
    toolCallStreaming: true,
    maxSteps: 2,
    // Fail over instead of retrying the same provider.
    maxRetries: 0,
  });
}

/**
 * Continue a stream after the first chunk has already been read from `reader`.
 * A second `fullStream` access would tee() and replay the first chunk
 * (AI SDK 4 StreamTextResult.teeStream).
 */
function continueFromPeekedChunk(
  result: StreamTextResult<typeof tools, never>,
  reader: ReadableStreamDefaultReader<unknown>,
  first: ReadableStreamReadResult<unknown>,
): StreamTextResult<typeof tools, never> {
  const reconstructed = new ReadableStream({
    async start(controller) {
      if (!first.done && first.value !== undefined) {
        controller.enqueue(first.value);
      }
    },
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }
      controller.enqueue(value);
    },
    cancel(reason) {
      return reader.cancel(reason);
    },
  });

  Object.defineProperty(result, 'fullStream', {
    get: () => reconstructed,
    configurable: true,
  });

  return result;
}

/** Peek at the first chunk; return the error if it's an error chunk. */
async function peekForError(result: StreamTextResult<typeof tools, never>) {
  const reader = result.fullStream.getReader();
  const firstChunk = await reader.read();

  const error =
    !firstChunk.done &&
    firstChunk.value != null &&
    typeof firstChunk.value === 'object' &&
    'type' in firstChunk.value &&
    firstChunk.value.type === 'error'
      ? (firstChunk.value as { type: 'error'; error: unknown }).error
      : undefined;

  return { reader, firstChunk, error };
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // ── Layer 1: Check Pre-cached Generic Questions Across All Sections ──
    const genericPreset = matchGenericPreset(messages);
    if (genericPreset) {
      console.log('[CHAT-API] Cache HIT (generic preset):', genericPreset.toolName);
      return buildCachedDataStreamResponse(genericPreset);
    }

    // ── Layer 2: Check Dynamic Response Cache ──
    const lastUserQuery = [...(messages || [])].reverse().find((m: any) => m.role === 'user')?.content;
    if (typeof lastUserQuery === 'string') {
      const dynamicCached = getDynamicCachedResponse(lastUserQuery);
      if (dynamicCached) {
        console.log('[CHAT-API] Cache HIT (dynamic query):', lastUserQuery);
        return dynamicCached;
      }

      // ── Layer 3: RAG Intent & Grounded Retrieval Engine ──
      const retrieval = retrieveContext(lastUserQuery);
      console.log('[CHAT-API] RAG Intent:', retrieval.intent, 'Score:', retrieval.confidenceScore, 'Confident:', retrieval.isConfident);

      // Rule: If question is beyond context / unanswerable, directly display fallback message with contact cards
      if (retrieval.fallbackToContact) {
        console.log('[CHAT-API] RAG Fallback triggered -> invoking getContact with RAG_FALLBACK_MESSAGE');
        return buildCachedDataStreamResponse({
          toolName: 'getContact',
          text: RAG_FALLBACK_MESSAGE,
          toolResult: 'Contact details displayed.',
        });
      }

      // Direct grounded answers for specific deterministic queries (e.g. Age, Education)
      if (retrieval.directAnswer) {
        const toolName =
          retrieval.intent === 'education'
            ? 'getEducation'
            : retrieval.intent === 'contact'
            ? 'getContact'
            : 'getPresentation';

        return buildCachedDataStreamResponse({
          toolName,
          text: retrieval.directAnswer,
          toolResult: `Grounded answer for ${retrieval.intent}`,
        });
      }

      // If proceeding to LLM generation, inject grounded context into system prompt
      const groundedPrompt = {
        role: 'system',
        content: `${SYSTEM_PROMPT.content}

## Grounded Knowledge Base Context (Source of Truth):
${retrieval.groundedContextText}

## Grounding & Anti-Hallucination Instructions:
1. Base your answer strictly on the facts in the Grounded Knowledge Base Context above.
2. If asked a specific question (e.g. about education, age, or background), answer the specific question directly. Do NOT dump unrelated work experience cards.
3. If the knowledge base does not contain enough information to answer the question with 100% certainty, state: "${RAG_FALLBACK_MESSAGE}" and call the getContact tool.
`,
      };
      messages.unshift(groundedPrompt);
    } else {
      messages.unshift(SYSTEM_PROMPT);
    }

    let lastError: unknown = undefined;

    /* ── Attempt 1: Cloudflare Workers AI (default) ── */
    if (process.env.CF_API_TOKEN && process.env.CF_ACCOUNT_ID) {
      try {
        const cfResult = startChat(cloudflare(CF_MODEL), messages);
        const cfPeek = await peekForError(cfResult);

        if (cfPeek.error === undefined) {
          console.log('[CHAT-API] Primary: Cloudflare', CF_MODEL);
          return continueFromPeekedChunk(
            cfResult,
            cfPeek.reader,
            cfPeek.firstChunk,
          ).toDataStreamResponse({ getErrorMessage: () => SAFE_CHAT_ERROR });
        }

        lastError = cfPeek.error;
        await cfPeek.reader.cancel();
        logProviderError('cloudflare', CF_MODEL, cfPeek.error, {
          fallbackAttempted: true,
        });
      } catch (err) {
        lastError = err;
        logProviderError('cloudflare', CF_MODEL, err, {
          fallbackAttempted: true,
        });
      }
    } else {
      lastError = new Error('Cloudflare credentials not configured');
    }

    /* ── Attempt 2: OpenRouter (fallback 1) ── */
    if (
      shouldUseFallback(lastError) &&
      Boolean(process.env.OPENROUTER_API_KEY)
    ) {
      try {
        console.log('[CHAT-API] Falling back to OpenRouter', OPENROUTER_MODEL);
        const orResult = startChat(openrouter(OPENROUTER_MODEL), messages);
        const orPeek = await peekForError(orResult);

        if (orPeek.error === undefined) {
          return continueFromPeekedChunk(
            orResult,
            orPeek.reader,
            orPeek.firstChunk,
          ).toDataStreamResponse({ getErrorMessage: () => SAFE_CHAT_ERROR });
        }

        lastError = orPeek.error;
        await orPeek.reader.cancel();
        logProviderError('openrouter', OPENROUTER_MODEL, orPeek.error, {
          fallbackAttempted: true,
        });
      } catch (err) {
        lastError = err;
        logProviderError('openrouter', OPENROUTER_MODEL, err, {
          fallbackAttempted: true,
        });
      }
    }

    /* ── Attempt 3: Google Gemini (fallback 2) ── */
    if (
      shouldUseFallback(lastError) &&
      Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY)
    ) {
      try {
        console.log('[CHAT-API] Falling back to Google Gemini', GOOGLE_MODEL);
        const geminiResult = startChat(google(GOOGLE_MODEL), messages);
        const geminiPeek = await peekForError(geminiResult);

        if (geminiPeek.error === undefined) {
          return continueFromPeekedChunk(
            geminiResult,
            geminiPeek.reader,
            geminiPeek.firstChunk,
          ).toDataStreamResponse({ getErrorMessage: () => SAFE_CHAT_ERROR });
        }

        await geminiPeek.reader.cancel();
        logProviderError('google', GOOGLE_MODEL, geminiPeek.error, {
          fallbackAttempted: false,
        });
      } catch (err) {
        logProviderError('google', GOOGLE_MODEL, err, {
          fallbackAttempted: false,
        });
      }
    }

    // None of the fallbacks worked or weren't eligible — return error
    return new Response(SAFE_CHAT_ERROR, { status: 500 });
  } catch (err) {
    console.error(
      '[CHAT-API] Global error:',
      err instanceof Error ? err.message : 'unknown',
    );
    return new Response(SAFE_CHAT_ERROR, { status: 500 });
  }
}
