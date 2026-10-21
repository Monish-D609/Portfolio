import { formatDataStreamPart } from 'ai';

export interface CachedResponse {
  toolName: string;
  text: string;
  toolResult?: string;
}

/**
 * Normalizes user queries by trimming, lowercasing, and stripping
 * punctuation/extra whitespace for robust matching.
 */
export function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Helper to match triggers with whole-phrase / word-boundary accuracy.
 */
function matchesTrigger(normalizedQuery: string, trigger: string): boolean {
  const normTrigger = normalizeQuery(trigger);
  if (!normTrigger || !normalizedQuery) return false;

  // Exact full query match
  if (normalizedQuery === normTrigger) return true;

  // Word-boundary phrase match
  const paddedQuery = ` ${normalizedQuery} `;
  const paddedTrigger = ` ${normTrigger} `;
  return paddedQuery.includes(paddedTrigger);
}

/**
 * Pre-cached responses for all generic/suggested questions across all sections.
 * Guarantees instant 0ms response, zero LLM credit burn, and 100% deterministic
 * tool rendering.
 */
export const GENERIC_PRESETS: Array<{
  category: string;
  toolName: string;
  text: string;
  triggers: string[];
}> = [
  {
    category: 'age',
    toolName: 'getPresentation',
    text: "Monish is 19 years old. He is currently an undergraduate student in his pre-final year, living and based in Bangalore, India.",
    triggers: [
      "what is monish's age",
      'what is monishs age',
      'what is his age',
      'what is your age',
      'how old are you',
      'how old is monish',
      'how old is monish d',
      "monish's age",
      'monish age',
      'your age',
      'age of monish',
      'tell me your age',
    ],
  },
  {
    category: 'education',
    toolName: 'getEducation',
    text: "Monish is currently in his pre-final year pursuing a B.Tech in Computer Science Engineering (Data Science) from VIT Chennai, alongside a concurrent B.S. in Data Science and Applications from IIT Madras. While his university is in Chennai, he is based and living in Bangalore. Check out his verified academic details below!",
    triggers: [
      "what is monish's education status",
      'what is monishs education status',
      'what is your education status',
      'what is his education status',
      'education status',
      'educational background',
      'educational qualification',
      'what is your education',
      'where do you study',
      'where does monish study',
      'where did you study',
      'what degree are you pursuing',
      'what is your degree',
      'which college',
      'which university',
      'vit chennai',
      'iit madras',
    ],
  },
  {
    category: 'resume',
    toolName: 'getResume',
    text: "Here is my resume! You can view it directly online via Google Drive by clicking the card below.",
    triggers: [
      'resume',
      'cv',
      'curriculum vitae',
      'can i see your resume',
      'see your resume',
      'show me your resume',
      'view resume',
      'download resume',
      'can i get your resume',
    ],
  },
  {
    category: 'skills',
    toolName: 'getSkills',
    text: "Here is an overview of my technical skills and competencies across GenAI & Agentic AI, Machine Learning, Backend, Frontend, and Core CS Fundamentals. What specific area are you interested in?",
    triggers: [
      'skills',
      'technical skills',
      'tech stack',
      'technologies',
      'soft and hard skills',
      'what are your skills',
      'what are your skills give me a list of your soft and hard skills',
      'what is your tech stack',
      'give me a list of your soft and hard skills',
      'what tools do you use',
      'programming languages',
      'audio engineering',
    ],
  },
  {
    category: 'video-agent',
    toolName: 'getProjects',
    text: "AI Video Agent (https://github.com/Monish-D609/Video-Agent) is my multimodal video intelligence platform! It ingests YouTube URLs or local audio/video files, transcribes speech with local Whisper (English) and Sarvam AI (Hinglish with real-time translation), automatically extracts structured summaries, action items, decisions, and open questions via Cloudflare Workers AI, and lets you chat with the video using grounded RAG. Check out the project card below!",
    triggers: [
      'video agent',
      'video-agent',
      'ai video agent',
      'tell me about video agent',
      'video agent project',
      'video analysis',
      'video intelligence',
    ],
  },
  {
    category: 'projects-skills',
    toolName: 'getProjects',
    text: "Here is my combined Projects & Skills showcase! You can explore my featured production AI platforms (Continuum, Meridian, AI Video Agent) as well as my dual-engine skills matrix covering both Coding & AI engineering and Beside's Coding growth & leadership. Check out the interactive showcase below!",
    triggers: [
      'what are your projects and skills show me your work technical stack and capabilities',
      'what are your projects and skills',
      'projects and skills',
      'skills and projects',
      'projects skills',
      'skills projects',
      'show me your projects and skills',
      'show me your work technical stack and capabilities',
      'what are your projects and skills show me your work and technical expertise',
    ],
  },
  {
    category: 'projects',
    toolName: 'getProjects',
    text: "Here are my featured projects! You can explore details about AI Video Agent (Multimodal Video Intelligence & RAG), Continuum (Decision Archaeology Agent), Meridian (LLM Benchmarking Platform), and my LLMVS research at IIT Mandi VIML Lab. Which one would you like to know more about?",
    triggers: [
      'projects',
      'featured projects',
      'what are your projects',
      'what projects have you worked on',
      'what are your projects what are you working on right now',
      'what projects are you most proud of',
      'show me your projects',
      'tell me about your projects',
      'portfolio projects',
      'what are you working on right now',
      'what are you working on',
      'show projects',
    ],
  },
  {
    category: 'contact',
    toolName: 'getContact',
    text: "I'd love to connect with you! You can reach me directly via email at monishpersonal609@gmail.com, connect on LinkedIn at linkedin.com/in/monish-d07, or find my code on GitHub at github.com/Monish-D609.",
    triggers: [
      'contact',
      'how can i contact you',
      'how can i reach you',
      'reach you',
      'email',
      'phone',
      'where are you located',
      'linkedin',
      'github',
      'social links',
      'say yes immediately',
    ],
  },
  {
    category: 'sports',
    toolName: 'getSports',
    text: "Staying active keeps my mind clear and energized! On campus, my favorite sports are Cricket and Badminton, which I love playing with my hostel friends. Check out my sports highlights below!",
    triggers: [
      'what sports do you like',
      'sports',
      'sport',
      'cricket',
      'badminton',
      'sports you play',
    ],
  },
  {
    category: 'crazy',
    toolName: 'getCrazy',
    text: "When I'm not coding or training AI models, life is all about the little joys and great games! I love brewing my own coffee on a Friday evening, tuning into favorite tracks on Spotify, and staring at the horizon to unwind. You'll also frequently find me playing my favorite sports — Cricket and Badminton — along with my hostel friends! And of course, building an interactive AI avatar of myself might just be the craziest tech project I've pulled off. Check out my hobbies and rituals below!",
    triggers: [
      'what s the craziest thing you ve ever done what are your hobbies and favorite sports',
      'whats the craziest thing youve ever done what are your hobbies and favorite sports',
      'what the craziest thing you ve ever done mb what are your hobbies',
      'what the craziest thing you ve ever done what are your hobbies',
      'whats the craziest thing youve ever done what are your hobbies',
      'what s the craziest thing you ve ever done what are your hobbies',
      'craziest thing',
      'what the craziest thing you ve ever done',
      'whats the craziest thing youve ever done',
      'what is the craziest thing you have ever done',
      'what are your hobbies',
      'hobbies',
      'crazy',
      'coffee',
      'friday evening',
      'adventures',
    ],
  },
  {
    category: 'internship',
    toolName: 'getInternship',
    text: "I am currently an AI Intern at Wubble AI — a Singapore-based startup building the world's first B2B AI Music platform (backed by Antler, Google, and NVIDIA · Top 5 in Asia). Here are the details about my current role, engineering responsibilities, and experience!",
    triggers: [
      'what is your work experience tell me about your internships and roles',
      'what is your work experience',
      'tell me about your internships and roles',
      'internships and roles',
      'internship',
      'internships',
      'wubble',
      'wubble ai',
      'wubble.ai',
      'where do you work',
      'where do you currently work',
      'where are you working now',
      'what is your current role',
      'current role',
      'current job',
      'current company',
      'current internship',
      'work experience',
      'experience',
      'experience and background',
      'valuable team member',
      'what makes you a valuable team member',
      'why should i hire you',
      'hiring',
      'hire',
      'job opportunity',
      'work opportunities',
      'availability',
    ],
  },
  {
    category: 'presentation',
    toolName: 'getPresentation',
    text: "Hey there! I'm Monish D — a pre-final year B.Tech CSE (Data Science) student at VIT Chennai, based and living in Bangalore. I build agentic workflows, LLM evaluation platforms, audio engineering and computer vision systems, and multimodal AI. Explore my presentation card below to learn more about my background!",
    triggers: [
      'who are you',
      'who are you i want to know more about you',
      'tell me about yourself',
      'who is monish',
      'who is monish d',
      'about you',
      'presentation',
      'introduce yourself',
      'introduction',
      'passions',
      'what are your passions',
      'how did you get started in tech',
      'where do you see yourself in 5 years',
    ],
  },
  {
    category: 'certificates',
    toolName: 'getCertificates',
    text: "Here are all my verified certifications and credentials! You can view cards for each certificate covering Deep Learning, Scalable RAG, Machine Learning with Scikit-Learn, SEO, and Social Media Marketing below, or open the full Google Drive folder to inspect any document online.",
    triggers: [
      'certificates',
      'certificate',
      'certifications',
      'certification',
      'my certificates',
      'show certificates',
      'show your certificates',
      'show me your certificates',
      'what certificates do you have',
      'what certificates do you have show me your certifications',
      'view certificates',
      'licenses and certifications',
      'credentials',
      'courses and certificates',
      'degrees and certificates',
      'scikit learn certificate',
      'deep learning certificate',
      'rag certificate',
      'seo certificate',
    ],
  },
  {
    category: 'others',
    toolName: 'getOthers',
    text: "Here is the Others section! It includes all additional highlights: verified professional certificates, fun rituals & sports highlights, online resume, and personal milestones.",
    triggers: [
      'what else can you share show me others fun sports and additional highlights',
      'what else can you share show me others and additional highlights',
      'what else can you share show me others fun and sports and additional highlights',
      'what else can you share',
      'show me others and additional highlights',
      'show me others fun sports and additional highlights',
      'others and fun',
      'others fun',
      'fun and others',
      'others',
      'other',
      'other contents',
      'other sections',
      'show me other sections',
      'show me others',
      'what else',
      'more about you',
      'more sections',
      'highlights',
      'additional highlights',
    ],
  },
  {
    category: 'besides-coding',
    toolName: 'getBesidesCoding',
    text: "Here is the Beside's Coding section! Apart from pure engineering, I lead product growth, community building, and cross-functional operations. Check out my work as Founding Head of Reddit Growth at Nexie.ai (1,000+ active users & organic post run rate, affiliate platform), growth marketing at Runable AI ($21M Series A, awarded Best Affiliate), campus leadership at Techno VIT and Vibrance, and my growth engineering projects below!",
    triggers: [
      'besides coding',
      'beside coding',
      "beside's coding",
      "besides' coding",
      'tell me about what you do beside coding',
      'tell me about what you do besides coding',
      'what do you do beside coding',
      'what do you do besides coding',
      'what do you do apart from coding',
      'apart from coding',
      'non coding',
      'non-coding',
      'non coding resume',
      'non coding experience',
      'growth',
      'growth marketing',
      'nexie',
      'nexie ai',
      'nexie.ai',
      'runable',
      'runable ai',
      'best affiliate',
      'affiliate marketing',
      'reddit growth',
      'community building',
      'marketing attribution',
      'conversion funnel',
      'lead nurturing',
      'techno vit',
      'vitsion',
      'android club',
      'android club techno vit',
      'vitsion vibrance',
      'vitsion vitc',
      'vibrance',
      'campus leadership',
      'college clubs',
      'clubs',
    ],
  },
];

/**
 * Checks if the last user message matches any generic question preset.
 */
export function matchGenericPreset(messages: Array<{ role: string; content?: string }>): CachedResponse | null {
  if (!messages || messages.length === 0) return null;

  // Look at the latest user message
  const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
  if (!lastUserMsg || typeof lastUserMsg.content !== 'string') return null;

  const normalized = normalizeQuery(lastUserMsg.content);
  if (!normalized) return null;

  // 1. First pass: exact matches
  for (const preset of GENERIC_PRESETS) {
    for (const trigger of preset.triggers) {
      if (normalizeQuery(trigger) === normalized) {
        return {
          toolName: preset.toolName,
          text: preset.text,
          toolResult: `Loaded ${preset.toolName}`,
        };
      }
    }
  }

  // 2. Second pass: longest trigger phrase matches first
  const allTriggers: Array<{ trigger: string; preset: (typeof GENERIC_PRESETS)[number] }> = [];
  for (const preset of GENERIC_PRESETS) {
    for (const trigger of preset.triggers) {
      allTriggers.push({ trigger, preset });
    }
  }
  allTriggers.sort((a, b) => b.trigger.length - a.trigger.length);

  for (const { trigger, preset } of allTriggers) {
    if (matchesTrigger(normalized, trigger)) {
      return {
        toolName: preset.toolName,
        text: preset.text,
        toolResult: `Loaded ${preset.toolName}`,
      };
    }
  }

  return null;
}

/**
 * Builds an AI SDK v4 Data Stream Protocol response from a cached entry.
 */
export function buildCachedDataStreamResponse(cached: CachedResponse): Response {
  const toolCallId = `cached_${cached.toolName}_${Date.now()}`;

  // Stream text in small chunks for a natural fluid animation
  const chunkSize = 15;
  const textChunks: string[] = [];
  for (let i = 0; i < cached.text.length; i += chunkSize) {
    textChunks.push(cached.text.slice(i, i + chunkSize));
  }

  const parts: string[] = [
    // Tool call invocation
    formatDataStreamPart('tool_call', {
      toolCallId,
      toolName: cached.toolName,
      args: {},
    }),
    // Tool execution result
    formatDataStreamPart('tool_result', {
      toolCallId,
      result: cached.toolResult ?? `Success for ${cached.toolName}`,
    }),
    // Streamed text chunks
    ...textChunks.map((chunk) => formatDataStreamPart('text', chunk)),
    // Finish stream message
    formatDataStreamPart('finish_message', {
      finishReason: 'stop',
      usage: { promptTokens: 0, completionTokens: cached.text.length },
    }),
  ];

  return new Response(parts.join(''), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  });
}

/**
 * Runtime memory cache for repeated non-preset questions.
 */
const dynamicResponseCache = new Map<string, string>();
const MAX_CACHE_SIZE = 100;

export function getDynamicCachedResponse(query: string): Response | null {
  const key = normalizeQuery(query);
  const cachedStream = dynamicResponseCache.get(key);
  if (!cachedStream) return null;

  return new Response(cachedStream, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Vercel-AI-Data-Stream': 'v1',
    },
  });
}

export function setDynamicCachedResponse(query: string, rawStreamText: string): void {
  const key = normalizeQuery(query);
  if (!key || !rawStreamText) return;

  if (dynamicResponseCache.size >= MAX_CACHE_SIZE) {
    // Delete oldest entry
    const firstKey = dynamicResponseCache.keys().next().value;
    if (firstKey) dynamicResponseCache.delete(firstKey);
  }

  dynamicResponseCache.set(key, rawStreamText);
}
