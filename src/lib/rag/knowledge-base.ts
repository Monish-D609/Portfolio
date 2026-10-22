import { MONISH_PROFILE } from '@/data/monish-profile';

export interface KnowledgeChunk {
  id: string;
  category: 'age' | 'education' | 'experience' | 'projects' | 'skills' | 'certifications' | 'leadership' | 'hobbies' | 'contact' | 'seeking';
  title: string;
  keywords: string[];
  content: string;
  directAnswer?: string;
}

export const KNOWLEDGE_CHUNKS: KnowledgeChunk[] = [
  {
    id: 'age',
    category: 'age',
    title: "Monish's Age and Demographics",
    keywords: ['age', 'how old', 'old is monish', 'what is his age', 'years old', 'birth', 'when born', 'born in', 'dob'],
    content: `Monish D is 19 years old. He is a pre-final year college undergraduate student based in Bangalore, India. (Do not mention specific birth year dates or months, just state his age as 19 years old).`,
    directAnswer: 'Monish is 19 years old. He is currently an undergraduate student in his pre-final year, living and based in Bangalore, India.',
  },
  {
    id: 'education-overview',
    category: 'education',
    title: "Education Status & Academic Degrees",
    keywords: [
      'education',
      'education status',
      'educational background',
      'degree',
      'college',
      'university',
      'where does he study',
      'where do you study',
      'what is his degree',
      'which year',
      'pre final year',
      'vit',
      'vit chennai',
      'iit madras',
      'undergraduate',
      'study',
      'studying',
      'school',
    ],
    content: `Monish is pursuing two degrees concurrently:
1. B.Tech in Computer Science Engineering (Data Science) from Vellore Institute of Technology, Chennai (VIT Chennai), currently in his pre-final year (July 2024 – Present). While his university is located in Chennai, Monish lives and is based in Bangalore.
2. B.S. in Data Science and Applications from the Indian Institute of Technology, Madras (IIT Madras) (August 2024 – Present).
His coursework and research focus on data science, machine learning, systems, and artificial intelligence.`,
    directAnswer: 'Monish is currently in his pre-final year pursuing a B.Tech in Computer Science Engineering (Data Science) at VIT Chennai. In parallel, he is also pursuing a B.S. in Data Science and Applications at IIT Madras. While his college is in Chennai, he is based and lives in Bangalore.',
  },
  {
    id: 'employment-status',
    category: 'experience',
    title: 'Current Employment Status & Availability',
    keywords: [
      'current role',
      'current company',
      'where do you work',
      'current job',
      'employment',
      'open to work',
      'available',
      'internship status',
      'are you working',
      'where are you working',
    ],
    content: `Monish is currently not actively employed and is open to work! He is actively seeking new opportunities in AI/ML Engineering, Autonomous Agentic Systems, and Multimodal Deep Learning, including full-time roles and high-impact internships.`,
    directAnswer:
      'Monish is currently not actively employed and is open to work! He is actively seeking roles and internships in AI/ML Engineering, Agentic AI Systems, and Multimodal Deep Learning.',
  },
  {
    id: 'experience-nexie',
    category: 'experience',
    title: 'Nexie.ai (Founding Head of Reddit Growth & Developer)',
    keywords: ['nexie', 'nexie ai', 'nexie.ai', 'reddit growth', 'affiliate platform', 'affiliate tracking', 'ecommerce esp', 'shopify'],
    content: `Monish is the Founding Head of Reddit Growth & Software Developer at Nexie.ai (an AI-native ESP for Ecommerce brands on Shopify).
Key Achievements:
- Owned Nexie's Reddit presence end-to-end: grew brand subreddit to 1,000+ active users within 1 month and reached a 1,000+ organic post run rate in 2 months.
- Built and deployed Nexie's full-stack affiliate activity tracking dashboard with real-time analytics using Next.js, React, Vercel, and Claude, complete with automated Reddit scraping pipelines.`,
    directAnswer: "At Nexie.ai (AI-native ESP for Shopify), Monish serves as Founding Head of Reddit Growth & Software Developer. He scaled a dedicated subreddit to 1,000+ active users in a month, hit a 1,000+ monthly post run rate, and built their full-stack affiliate tracking platform.",
  },
  {
    id: 'experience-runable',
    category: 'experience',
    title: 'Runable AI (Growth & Affiliate Marketing)',
    keywords: ['runable', 'runable ai', 'best affiliate', 'series a', 'runable.com', 'affiliate marketing'],
    content: `At Runable AI (an autonomous AI agent platform that raised a $21M Series A), Monish handled Growth & Affiliate Marketing from March 2026 to July 2026.
Key Achievements:
- Built Reddit and Discord developer communities during the company's pre-revenue stage ahead of Series A.
- Converted international developers across Europe and the US into paid recurring subscribers.
- Was recognized and awarded as the #1 Best Affiliate at Runable AI.`,
    directAnswer: 'At Runable AI ($21M Series A autonomous agent platform), Monish spearheaded growth marketing in the pre-revenue stage, acquired paid recurring developer subscribers across the US and Europe, and won the Best Affiliate Award.',
  },
  {
    id: 'experience-research',
    category: 'experience',
    title: 'IIT Mandi VIML Lab Research Internship (Multimodal LLM Video Summarization)',
    keywords: ['iit mandi', 'viml', 'research', 'video summarization', 'llmvs', 'cvpr', 'multimodal', 'vision'],
    content: `During his research internship at the Visual Intelligence and Machine Learning (VIML) Lab at IIT Mandi, Monish implemented a Multimodal LLM-based Video Summarization architecture.
Unlike traditional caption- or text-based summarization systems that fail to grasp visual semantics and temporal transitions, this solution bridged deep semantic language reasoning directly with visual understanding. He implemented frozen LLaVA-1.5-7B for dense visual frame perception, Llama-2-13B for sliding-window event scoring, and a trained lightweight self-attention aggregator, achieving Kendall’s τ of 0.253 and Spearman’s ρ of 0.282 on SumMe and TVSum datasets.`,
    directAnswer: 'Monish was a Research Intern at IIT Mandi VIML Lab, where he implemented Multimodal LLM-based Video Summarization—solving the limitations of text/caption-based methods through rich semantic understanding grounded in vision, achieving Kendall’s τ = 0.253 and Spearman’s ρ = 0.282.',
  },
  {
    id: 'projects-overview',
    category: 'projects',
    title: 'Key Engineering & AI Projects',
    keywords: ['projects', 'featured projects', 'portfolio projects', 'video agent', 'continuum', 'meridian', 'retail demand'],
    content: `Monish's featured engineering projects:
1. AI Video Agent (GitHub: Monish-D609/Video-Agent): Multimodal video intelligence with Whisper & Sarvam AI transcription, structured action extraction, and conversational RAG.
2. Continuum (GitHub: Monish-D609/continuum-decision-archaeology): Decision archaeology agent recovering historical code rationale with 95.8% hybrid retrieval recall (BM25 + pgvector).
3. Meridian (GitHub: Monish-D609/Meridian): LLM benchmarking platform across 7 capability axes with automated PDF exports.
4. Nexie Reddit Affiliate Platform: Full-stack Next.js affiliate tracking and scraping pipeline.
5. Marketing Attribution & Conversion Funnel Analyzer: Multi-touch attribution (first-touch vs last-touch, CAC, ROAS).
6. Marketing Automation & Lead Nurturing Engine: n8n workflow engine for lead scoring and routing.
7. Retail Demand Intelligence: Time-series forecasting on 99K e-commerce orders in R.`,
    directAnswer: 'Monish has built production AI platforms including AI Video Agent (multimodal video RAG), Continuum (decision archaeology agent with hybrid search), Meridian (LLM evaluation framework), and full-stack growth systems.',
  },
  {
    id: 'skills-overview',
    category: 'skills',
    title: 'Technical Skills & Proficiencies',
    keywords: ['skills', 'tech stack', 'technologies', 'programming languages', 'tools', 'frameworks', 'python', 'pytorch', 'numpy', 'pandas', 'tableau'],
    content: `Technical Skills Breakdown:
- Languages: Python, SQL, R, TypeScript, JavaScript, C++, Java
- GenAI & Agentic AI: LangChain, LangGraph, CrewAI, AutoGen, OpenAI API, Gemini, RAG, Vector DBs, Prompt Engineering, Audio Engineering, Computer Vision
- ML & Data Science: PyTorch, TensorFlow, Scikit-learn, HuggingFace Transformers, NumPy, Pandas, XGBoost, OpenCV, Model Evaluation
- Backend & Systems: FastAPI, Node.js, Express, React, Next.js, REST APIs, WebSockets, Supabase (PostgreSQL), MySQL
- Tools & Deployment: Docker, Git, GitHub, Linux, Vite, Tableau, n8n`,
    directAnswer: 'Monish specializes in Python, GenAI & Agentic AI (LangChain, LangGraph, RAG, prompt engineering), Machine Learning (PyTorch, scikit-learn, NumPy, Pandas, OpenCV, XGBoost), backend engineering (FastAPI, React, Next.js, Supabase), and Tableau/Docker.',
  },
  {
    id: 'hobbies-fun',
    category: 'hobbies',
    title: 'Personal Hobbies, Friday Ritual & Sports',
    keywords: ['fun', 'hobbies', 'friday evening', 'coffee', 'spotify', 'horizon', 'sports', 'cricket', 'badminton', 'hostel'],
    content: `Life outside coding:
- Friday Evening Ritual: Making his own coffee on a Friday evening, putting on music on Spotify, and watching the horizon to unwind and reflect.
- Favorite Sports: Cricket and Badminton along with his hostel friends on campus.
- Craziest Project: Building an AI-native portfolio avatar that talks to visitors.`,
    directAnswer: 'Outside of tech, Monish loves making fresh coffee on Friday evenings while listening to music on Spotify and watching the horizon. His favorite sports are Cricket and Badminton, which he loves playing with his hostel friends on campus!',
  },
  {
    id: 'contact-details',
    category: 'contact',
    title: 'Contact Information & Socials',
    keywords: ['contact', 'email', 'phone', 'reach', 'linkedin', 'github', 'how to contact', 'hire', 'get in touch'],
    content: `Monish D Contact Details:
- Location: Bangalore, India
- Email: monishpersonal609@gmail.com
- Phone: +91 7676607637
- LinkedIn: https://linkedin.com/in/monish-d07
- GitHub: https://github.com/Monish-D609`,
    directAnswer: 'You can reach Monish directly via Email (monishpersonal609@gmail.com), Phone (+91 7676607637), LinkedIn (linkedin.com/in/monish-d07), or GitHub (github.com/Monish-D609). He is based in Bangalore, India.',
  },
  {
    id: 'seeking-roles',
    category: 'seeking',
    title: 'Target Roles & Opportunities Sought',
    keywords: ['looking for', 'seeking', 'open to', 'hire', 'roles', 'full-stack', 'internships'],
    content: `What Monish is looking for:
- AI/ML Engineering internships and full-time roles
- GenAI and Autonomous Agentic AI systems development
- Multimodal AI and Computer Vision / Audio research collaborations
Important: Monish is explicitly NOT looking for generic full-stack development roles.`,
    directAnswer: 'Monish is seeking opportunities in AI/ML Engineering, GenAI & Autonomous Agentic Systems, and Multimodal AI research. He is explicitly not looking for generic full-stack development roles.',
  },
];
