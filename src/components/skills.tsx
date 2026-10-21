'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Cpu,
  Brain,
  Server,
  Code2,
  Terminal,
  Layers,
  Rocket,
  Award,
  Search,
  Users,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Flame,
} from 'lucide-react';

export interface SkillsProps {
  initialTab?: 'all' | 'coding' | 'besides';
}

export default function Skills({ initialTab = 'all' }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'coding' | 'besides'>(
    initialTab,
  );

  /* ---------------- 1. CODING & TECHNICAL SKILLS ---------------- */
  const codingCategories = [
    {
      category: 'GenAI & Agentic AI',
      icon: <Cpu className="h-5 w-5 text-emerald-500" />,
      accentColor: 'border-emerald-500/30 bg-emerald-500/5',
      badgeColor:
        'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40',
      skills: [
        'Autonomous LLM Agents',
        'RAG (Retrieval-Augmented Generation)',
        'Model Context Protocol (MCP)',
        'Vision-Language Models (VLM)',
        'LangChain',
        'LangGraph',
        'Prompt Engineering & Evaluation',
        'Audio & Speech Pipelines',
        'Multimodal Video Intelligence',
        'Vector Databases (pgvector)',
      ],
    },
    {
      category: 'Machine Learning & Deep Learning',
      icon: <Brain className="h-5 w-5 text-purple-500" />,
      accentColor: 'border-purple-500/30 bg-purple-500/5',
      badgeColor:
        'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20 hover:border-purple-500/40',
      skills: [
        'PyTorch',
        'Hugging Face Transformers',
        'TensorFlow',
        'scikit-learn',
        'CVPR Video Summarization (LLMVS)',
        'Model Benchmarking & Profiling',
        'NumPy & Pandas',
        'OpenCV',
        'XGBoost',
      ],
    },
    {
      category: 'Backend, APIs & Distributed Systems',
      icon: <Server className="h-5 w-5 text-blue-500" />,
      accentColor: 'border-blue-500/30 bg-blue-500/5',
      badgeColor:
        'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20 hover:border-blue-500/40',
      skills: [
        'FastAPI',
        'RESTful API Architecture',
        'OpenAPI Schema Design',
        'Supabase (PostgreSQL)',
        'Node.js',
        'Micro-services',
        'Docker Containerization',
        'CI/CD Deployment Pipelines',
      ],
    },
    {
      category: 'Frontend & Modern Web',
      icon: <Code2 className="h-5 w-5 text-cyan-500" />,
      accentColor: 'border-cyan-500/30 bg-cyan-500/5',
      badgeColor:
        'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20 hover:border-cyan-500/40',
      skills: [
        'React 19',
        'Next.js 15 (App Router)',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Core Web Vitals Optimization',
        'Responsive UI/UX Systems',
      ],
    },
    {
      category: 'Programming Languages',
      icon: <Terminal className="h-5 w-5 text-amber-500" />,
      accentColor: 'border-amber-500/30 bg-amber-500/5',
      badgeColor:
        'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 hover:border-amber-500/40',
      skills: [
        'Python (Production)',
        'TypeScript',
        'JavaScript',
        'SQL',
        'C++',
        'Java',
        'R',
      ],
    },
    {
      category: 'Cloud, DevOps & Foundations',
      icon: <Layers className="h-5 w-5 text-rose-500" />,
      accentColor: 'border-rose-500/30 bg-rose-500/5',
      badgeColor:
        'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20 hover:border-rose-500/40',
      skills: [
        'Docker',
        'Linux / Shell Scripting',
        'Git & GitHub',
        'GKE / Cloud Run',
        'Cloudflare Workers AI',
        'Data Structures & Algorithms',
        'System Design',
      ],
    },
  ];

  /* ---------------- 2. BESIDES CODING SKILLS ---------------- */
  const besidesCodingCategories = [
    {
      category: 'Reddit Growth Engineering & Community',
      highlightBadge: 'Nexie.ai (1,000+ Active Users)',
      icon: <Rocket className="h-5 w-5 text-orange-500" />,
      accentColor: 'border-orange-500/30 bg-orange-500/5',
      badgeColor:
        'bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-500/20 hover:border-orange-500/40',
      skills: [
        'Subreddit Distribution Strategy',
        'Organic Virality & Post Architecture',
        'Community Flywheels',
        'Anti-Spam Authentic Engagement',
        'User Onboarding Loops',
        'Narrative-Driven Product Launches',
      ],
    },
    {
      category: 'Performance Marketing & Affiliate Growth',
      highlightBadge: 'Best Affiliate Award · Runable AI ($21M Series A)',
      icon: <Award className="h-5 w-5 text-emerald-500" />,
      accentColor: 'border-emerald-500/30 bg-emerald-500/5',
      badgeColor:
        'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 hover:border-emerald-500/40',
      skills: [
        'Affiliate Platform Architecture',
        'High-Converting Funnel Design',
        'Conversion Rate Optimization (CRO)',
        'B2B Referral Marketing',
        'Marketing Attribution & Analytics',
        'Lead Nurturing Automations',
      ],
    },
    {
      category: 'Product Marketing, SEO & Positioning',
      highlightBadge: 'HubSpot Certified (Technical SEO & Social)',
      icon: <Search className="h-5 w-5 text-indigo-500" />,
      accentColor: 'border-indigo-500/30 bg-indigo-500/5',
      badgeColor:
        'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20 hover:border-indigo-500/40',
      skills: [
        'Technical SEO & Crawlability',
        'Keyword Search Intent Architecture',
        'Content Strategy & Growth',
        'Competitive Positioning & Value Props',
        'Inbound Strategy',
        'Social Media Brand Growth',
      ],
    },
    {
      category: 'Campus Leadership & Operations',
      highlightBadge: 'Techno VIT (6,000+ Attendees) & Vibrance',
      icon: <Users className="h-5 w-5 text-rose-500" />,
      accentColor: 'border-rose-500/30 bg-rose-500/5',
      badgeColor:
        'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20 hover:border-rose-500/40',
      skills: [
        'Cross-Functional Team Leadership (40+ Members)',
        '₹15L+ Budget & Finance Oversight',
        'Large-Scale Event Logistics',
        'Corporate Sponsorship Negotiation',
        'High-Pressure Crisis Management',
        'Stakeholder & Vendor Management',
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Skills &amp; Capabilities
            </h2>
          </div>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Dual-engine expertise: Deep technical AI engineering alongside real-world startup growth &amp; leadership.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            All Skills
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('coding')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'coding'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span>Coding &amp; AI</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('besides')}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
              activeTab === 'besides'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Beside&apos;s Coding</span>
          </button>
        </div>
      </div>

      <div className="space-y-10">
        {/* ================= SECTION 1: CODING & TECHNICAL ================= */}
        {(activeTab === 'all' || activeTab === 'coding') && (
          <div className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Code className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    1. Coding &amp; Technical Engineering
                  </h3>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    Agentic loops, multimodal ML, scalable backend microservices, and modern frontend systems.
                  </p>
                </div>
              </div>
              <span className="self-start rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 sm:self-auto">
                6 Focus Areas
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {codingCategories.map((cat) => (
                <div
                  key={cat.category}
                  className={`rounded-xl border p-4 transition-all duration-200 hover:shadow-sm ${cat.accentColor}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background shadow-xs">
                      {cat.icon}
                    </span>
                    <h4 className="text-sm font-bold text-foreground">
                      {cat.category}
                    </h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-transform hover:scale-[1.03] ${cat.badgeColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SECTION 2: BESIDE'S CODING & GROWTH ================= */}
        {(activeTab === 'all' || activeTab === 'besides') && (
          <div className="space-y-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    2. Beside&apos;s Coding, Growth &amp; Leadership
                  </h3>
                  <p className="text-[11px] text-muted-foreground sm:text-xs">
                    Proven startup distribution, organic Reddit acquisition, affiliate growth, and large-scale leadership.
                  </p>
                </div>
              </div>
              <span className="self-start rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 sm:self-auto">
                4 Growth Domains
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {besidesCodingCategories.map((cat) => (
                <div
                  key={cat.category}
                  className={`rounded-xl border p-4 transition-all duration-200 hover:shadow-sm ${cat.accentColor}`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background shadow-xs">
                        {cat.icon}
                      </span>
                      <h4 className="text-sm font-bold text-foreground">
                        {cat.category}
                      </h4>
                    </div>
                  </div>

                  <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-0.5 text-[11px] font-semibold text-foreground border border-border/60">
                    <Flame className="h-3 w-3 text-amber-500" />
                    <span>{cat.highlightBadge}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-transform hover:scale-[1.03] ${cat.badgeColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
