import { KNOWLEDGE_CHUNKS, KnowledgeChunk } from './knowledge-base';

export interface RetrievalResult {
  query: string;
  matchedChunks: KnowledgeChunk[];
  topChunk: KnowledgeChunk | null;
  confidenceScore: number;
  isConfident: boolean;
  intent: 'age' | 'education' | 'experience' | 'projects' | 'skills' | 'certifications' | 'hobbies' | 'contact' | 'seeking' | 'general';
  directAnswer?: string;
  fallbackToContact: boolean;
  groundedContextText: string;
}

/**
 * Normalizes query string for robust retrieval
 */
export function cleanQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Advanced Hybrid Retriever for Monish's Knowledge Base
 */
export function retrieveContext(rawQuery: string): RetrievalResult {
  const query = cleanQuery(rawQuery);
  const queryTokens = new Set(query.split(' ').filter((t) => t.length > 1));

  // Intent classification
  let detectedIntent: RetrievalResult['intent'] = 'general';

  if (/\b(age|how old|years old|birth|when born|born in|dob)\b/.test(query)) {
    detectedIntent = 'age';
  } else if (/\b(education|educational|degree|college|university|study|studying|vit|iit|undergraduate|btech|b tech|cgpa|courses)\b/.test(query)) {
    detectedIntent = 'education';
  } else if (/\b(internship|job|experience|work|nexie|runable|company|career)\b/.test(query)) {
    detectedIntent = 'experience';
  } else if (/\b(projects|project|continuum|video agent|meridian|github repo|built)\b/.test(query)) {
    detectedIntent = 'projects';
  } else if (/\b(skills|tech stack|technologies|languages|frameworks|tools|python|pytorch)\b/.test(query)) {
    detectedIntent = 'skills';
  } else if (/\b(contact|email|phone|reach|linkedin|github link|touch)\b/.test(query)) {
    detectedIntent = 'contact';
  } else if (/\b(coffee|spotify|horizon|cricket|badminton|sports|fun|hobbies|craziest)\b/.test(query)) {
    detectedIntent = 'hobbies';
  } else if (/\b(looking for|seeking|roles|hire|full stack)\b/.test(query)) {
    detectedIntent = 'seeking';
  }

  // Score each chunk
  const scoredChunks = KNOWLEDGE_CHUNKS.map((chunk) => {
    let score = 0;

    // Intent match
    if (chunk.category === detectedIntent) {
      score += 15.0;
    }

    // Keyword matching
    for (const kw of chunk.keywords) {
      const cleanKw = cleanQuery(kw);
      if (query.includes(cleanKw)) {
        score += 8.0;
      } else {
        const kwTokens = cleanKw.split(' ');
        const matches = kwTokens.filter((t) => queryTokens.has(t)).length;
        if (matches > 0) {
          score += (matches / kwTokens.length) * 4.0;
        }
      }
    }

    // Content token overlap
    const contentTokens = chunk.content.toLowerCase().split(/\W+/);
    let overlap = 0;
    for (const token of queryTokens) {
      if (token.length > 3 && contentTokens.includes(token)) {
        overlap++;
      }
    }
    score += overlap * 1.2;

    return { chunk, score };
  });

  // Sort by score descending
  scoredChunks.sort((a, b) => b.score - a.score);

  const topMatch = scoredChunks[0];
  const maxScore = topMatch ? topMatch.score : 0;

  // Confidence threshold
  const isConfident = maxScore >= 6.0;
  const fallbackToContact = !isConfident;

  const relevantChunks = scoredChunks
    .filter((sc) => sc.score >= 5.0)
    .slice(0, 3)
    .map((sc) => sc.chunk);

  // If top match was confident, ensure it is included
  if (isConfident && topMatch && !relevantChunks.includes(topMatch.chunk)) {
    relevantChunks.unshift(topMatch.chunk);
  }

  // Construct grounded context text
  let groundedContextText = '';
  if (relevantChunks.length > 0) {
    groundedContextText = relevantChunks
      .map((c) => `### ${c.title}\n${c.content}`)
      .join('\n\n');
  }

  // Direct targeted answers for high-stakes specific facts
  let directAnswer: string | undefined = undefined;
  if (detectedIntent === 'age' && isConfident) {
    directAnswer = KNOWLEDGE_CHUNKS.find((c) => c.id === 'age')?.directAnswer;
  } else if (detectedIntent === 'education' && isConfident) {
    directAnswer = KNOWLEDGE_CHUNKS.find((c) => c.id === 'education-overview')?.directAnswer;
  }

  return {
    query: rawQuery,
    matchedChunks: relevantChunks,
    topChunk: topMatch?.chunk || null,
    confidenceScore: maxScore,
    isConfident,
    intent: detectedIntent,
    directAnswer,
    fallbackToContact,
    groundedContextText,
  };
}

/**
 * Standard fallback message with direct contact card callout
 */
export const RAG_FALLBACK_MESSAGE =
  "I don't have enough verified context in my knowledge base to answer that specific question accurately about Monish. To make sure you get 100% accurate information without any errors, please contact my real self directly!";
