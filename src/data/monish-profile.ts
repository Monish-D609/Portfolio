/**
 * Canonical Knowledge Profile for Monish D
 * Single Source of Truth for grounded RAG and conversational responses.
 */

export const MONISH_PROFILE = {
  personal: {
    fullName: 'Monish D',
    shortName: 'Monish',
    age: 19, // Calculated from birth year (Jan 2007)
    location: 'Bangalore, India',
    currentResidence: 'Bangalore, Karnataka, India',
    email: 'monishpersonal609@gmail.com',
    phone: '+91 7676607637',
    linkedin: 'https://linkedin.com/in/monish-d07',
    github: 'https://github.com/Monish-D609',
    personality: 'Curious, persistent, pragmatic builder with deep passion for AI and systems.',
    fridayRitual: 'Making his own coffee on a Friday evening, tuning into music on Spotify, and watching the horizon to unwind.',
    favoriteSports: ['Cricket', 'Badminton'],
    sportsBuddies: 'Plays Cricket and Badminton with his hostel friends on campus.',
    craziestProject: 'Building an interactive AI-native avatar portfolio that chats with visitors in real-time!',
  },

  education: {
    degrees: [
      {
        institution: 'Vellore Institute of Technology, Chennai (VIT Chennai)',
        degree: 'Bachelor of Technology (B.Tech)',
        major: 'Computer Science and Engineering (Data Science)',
        status: 'Pre-final Year (Current Undergraduate)',
        timeline: 'July 2024 – Present',
        location: 'Chennai, Tamil Nadu, India (Monish lives in Bangalore)',
        highlights: 'Core computer science fundamentals, data structures, algorithms, machine learning, and data science.',
      },
      {
        institution: 'Indian Institute of Technology, Madras (IIT Madras)',
        degree: 'Bachelor of Science (B.S.)',
        major: 'Data Science and Applications',
        status: 'Enrolled & Pursuing (Concurrent Degree)',
        timeline: 'August 2024 – Present',
        location: 'Chennai / Online Hybrid',
        highlights: 'Rigorous mathematics, statistical foundations, applied machine learning, and data engineering.',
      },
    ],
    summary: 'Monish is a pre-final year undergraduate student pursuing a B.Tech in CSE (Data Science) from VIT Chennai alongside a concurrent B.S. in Data Science and Applications from IIT Madras. While his college is in Chennai, he is based and lives in Bangalore.',
  },

  workExperience: [
    {
      company: 'Nexie.ai',
      role: 'Founding Head of Reddit Growth & Software Developer',
      timeline: 'July 2026 – Present',
      type: 'Growth & Development',
      companyDescription: 'AI-native ESP (Email Service Provider) for Ecommerce brands on Shopify.',
      responsibilities: [
        'Grew brand subreddit to 1,000+ active users in 30 days and reached a 1,000+ monthly organic post run rate in 2 months.',
        'Built and deployed full-stack affiliate activity tracking dashboard with real-time analytics and subreddit scraping pipelines using Next.js, React, Vercel, and Claude.',
      ],
    },
    {
      company: 'Runable AI',
      role: 'Growth & Affiliate Marketing',
      timeline: 'March 2026 – July 2026',
      type: 'Growth',
      companyDescription: 'Autonomous AI agent platform (raised $21M Series A).',
      responsibilities: [
        'Bootstrapped Reddit and Discord developer communities in pre-revenue stage ahead of Series A.',
        'Converted genuine international developers across US and Europe into paid recurring subscribers.',
        'Awarded #1 Best Affiliate at Runable AI.',
      ],
    },
    {
      company: 'InAmigos Foundation',
      role: 'AI Web Development Intern',
      timeline: 'April – May 2026',
      type: 'Internship',
      responsibilities: [
        'Optimized core web vitals, eliminated mobile layout shifts, and engineered responsive high-converting hero sections.',
      ],
    },
    {
      company: 'IIT Mandi (Visual Intelligence & Machine Learning Lab)',
      role: 'VIML Research Intern',
      timeline: 'May – June 2026',
      type: 'Research Internship',
      responsibilities: [
        'Implemented Multimodal LLM-based Video Summarization, solving fundamental shortcomings of traditional text- or caption-based methods by establishing deep semantic understanding grounded in visual features.',
        'Engineered a multi-stage architecture using frozen LLaVA-1.5-7B for dense visual perception, Llama-2-13B for cross-frame event reasoning via sliding window, and a trained lightweight self-attention aggregator.',
        'Achieved Kendall’s τ of 0.253 and Spearman’s ρ of 0.282 on SumMe and TVSum benchmarks.',
      ],
    },
  ],

  projects: [
    {
      title: 'AI Video Agent',
      github: 'https://github.com/Monish-D609/Video-Agent',
      tech: ['Python', 'FastAPI', 'React', 'Vite', 'Whisper', 'Sarvam AI', 'Cloudflare Workers AI', 'yt-dlp', 'FFmpeg'],
      description: 'Multimodal video intelligence platform transcribing YouTube or local files with Whisper (English) and Sarvam AI (Hinglish), extracting structured action items, and enabling grounded RAG chat.',
    },
    {
      title: 'Continuum',
      github: 'https://github.com/Monish-D609/continuum-decision-archaeology',
      tech: ['Python', 'LangChain', 'LangGraph', 'MCP', 'FastAPI', 'TypeScript', 'Supabase', 'pgvector', 'Docker'],
      description: 'Decision Archaeology Agent that recovers historical context behind code decisions with Confirmed/Inferred/Unknown certainty tags and 95.8% hybrid retrieval recall.',
    },
    {
      title: 'Meridian',
      github: 'https://github.com/Monish-D609/Meridian',
      tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite', 'PyTorch', 'Plotly', 'ReportLab'],
      description: 'Enterprise-grade LLM benchmarking platform evaluating models across 7 capability axes with automated PDF report exports.',
    },
    {
      title: 'Nexie Reddit Affiliate Platform & Dashboard',
      tech: ['Next.js', 'React', 'Vercel', 'Claude'],
      description: 'Full-stack platform where affiliates log in, track Reddit engagement metrics, follow persona scripts, and receive real-time analytics.',
    },
    {
      title: 'Marketing Attribution & Conversion Funnel Analyzer',
      tech: ['Python', 'SQL', 'Power BI', 'Google Analytics 4'],
      description: 'Multi-touch attribution system comparing first-touch vs. last-touch models, calculating CAC and ROAS, and optimizing marketing budget allocation.',
    },
    {
      title: 'Marketing Automation & Lead Nurturing Engine',
      tech: ['n8n', 'MySQL', 'Python'],
      description: 'Automated workflow engine for lead scoring, personalized email nurture sequences, error-handled routing, and conversion tracking.',
    },
    {
      title: 'Retail Demand Intelligence',
      github: 'https://github.com/Monish-D609/retailDemandIntelligence',
      tech: ['R', 'tidyverse', 'ggplot2', 'forecast', 'XGBoost', 'Shiny', 'SQL'],
      description: 'Hierarchical demand forecasting and customer retention analytics pipeline on 99K e-commerce orders, achieving 15.5% MAPE.',
    },
  ],

  certifications: [
    { title: 'Neural Networks and Deep Learning', issuer: 'DeepLearning.AI / Coursera' },
    { title: 'Designing Scalable RAG Pipelines Masterclass', issuer: 'Scaler Masterclass' },
    { title: 'Introduction to Machine Learning with scikit-learn', issuer: 'Data School' },
    { title: 'SEO', issuer: 'HubSpot Academy' },
    { title: 'Social Media Management', issuer: 'HubSpot Academy' },
    { title: 'New Product Development', issuer: 'IIM Ahmedabad' },
    { title: 'Digital Marketing Specialist', issuer: 'Great Learning' },
    { title: 'Introduction to LLMs', issuer: 'Microsoft' },
  ],

  campusLeadership: [
    {
      club: 'Android Club',
      role: 'Core Management Member (2025–2026)',
      event: 'Techno VIT',
      logo: '/android-club-logo.png',
      details: 'Organized Techno VIT schedule, coordinated cross-functional member teams and faculty, and ran day-of event execution.',
    },
    {
      club: 'VITSION',
      role: 'Core Operations Member (2025–2026)',
      event: 'Vibrance Festival',
      logo: '/vitsion-logo.webp',
      url: 'https://www.vitsionvitc.in/',
      details: 'Managed volunteer coordination, crowd logistics, and operations for flagship festival events.',
    },
  ],

  targetRoles: {
    seeking: [
      'AI/ML Engineering roles & internships',
      'GenAI & Autonomous Agentic Systems development',
      'Multimodal AI & Computer Vision / Audio research',
    ],
    notSeeking: [
      'Full-stack development roles',
      'Generic web development',
    ],
  },
} as const;
