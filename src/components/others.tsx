'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  FolderOpen,
  Brain,
  Cpu,
  Layers,
  Search,
  Share2,
  Calendar,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  Trophy,
  Sparkles,
  Bot,
  Compass,
  FileCode2,
  TrendingUp,
  Coffee,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import BesidesCoding from './besides-coding';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  driveUrl: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  accentColor: string;
}

const certificatesData: Certificate[] = [
  {
    id: 'nn-dl',
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI · Coursera',
    driveUrl:
      'https://drive.google.com/file/d/1Rz5sEJlzfX4KgGs9rF2NajB7amqUwsLj/view?usp=sharing',
    description:
      'Foundational deep learning taught by Andrew Ng covering deep neural architectures, forward/backward propagation, loss optimization, vectorization, and parameter tuning.',
    skills: ['Deep Learning', 'Neural Networks', 'Backpropagation', 'Python'],
    icon: <Brain className="h-5 w-5 text-indigo-500" />,
    accentColor: 'border-indigo-500/30 hover:border-indigo-500/60',
  },
  {
    id: 'rag-pipelines',
    title: 'Designing Scalable RAG Pipelines Masterclass',
    issuer: 'Scaler Masterclass',
    driveUrl:
      'https://drive.google.com/file/d/14W4-GTPs8H7vvySxEzdYQEKE812SB6DK/view?usp=sharing',
    description:
      'Production-grade Retrieval-Augmented Generation (RAG) system design, vector embedding indices, semantic search chunking, context reranking, and scalable LLM orchestration.',
    skills: ['RAG Pipelines', 'Vector Databases', 'LLM Architectures', 'Semantic Retrieval'],
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    accentColor: 'border-emerald-500/30 hover:border-emerald-500/60',
  },
  {
    id: 'scikit-learn',
    title: 'Introduction to Machine Learning with scikit-learn',
    issuer: 'Data School',
    driveUrl:
      'https://drive.google.com/file/d/1WqW_aNFe9CDHoYgZ7tBkJqnLjJaZ55KB/view?usp=sharing',
    description:
      'Comprehensive hands-on machine learning workflow with Scikit-Learn: supervised learning, classification, regression, cross-validation, and model evaluation metrics.',
    skills: ['scikit-learn', 'Machine Learning', 'Model Evaluation', 'Supervised Learning'],
    icon: <Layers className="h-5 w-5 text-blue-500" />,
    accentColor: 'border-blue-500/30 hover:border-blue-500/60',
  },
  {
    id: 'hubspot-seo',
    title: 'SEO',
    issuer: 'HubSpot Academy',
    driveUrl:
      'https://drive.google.com/file/d/17DhmVmslNYWada3lFVC6ad9calcIbCCt/view?usp=sharing',
    description:
      'Search engine optimization strategy covering keyword research, content architecture, technical crawlability optimization, backlink acquisition, and organic traffic growth.',
    skills: ['Technical SEO', 'Keyword Strategy', 'Organic Growth', 'Content Optimization'],
    icon: <Search className="h-5 w-5 text-amber-500" />,
    accentColor: 'border-amber-500/30 hover:border-amber-500/60',
  },
  {
    id: 'hubspot-smm',
    title: 'Social Media Management',
    issuer: 'HubSpot Academy',
    driveUrl:
      'https://drive.google.com/file/d/1C413JRgPtJelvMZ9iX7ycHsHDRAl1Rb_/view?usp=sharing',
    description:
      'Social media marketing, inbound strategy, digital brand positioning, performance analytics, campaign measurement, and audience retention.',
    skills: ['Social Media Marketing', 'Inbound Strategy', 'Brand Growth', 'Digital Marketing'],
    icon: <Share2 className="h-5 w-5 text-rose-500" />,
    accentColor: 'border-rose-500/30 hover:border-rose-500/60',
  },
];

const funHighlights = [
  {
    title: 'Friday Evening Coffee & Horizon ☕ 🌅',
    category: 'Weekly Ritual & Reset',
    desc: 'My favorite way to end the week: brewing fresh coffee on a Friday evening, tuning into favorite tracks on Spotify, and staring out at the horizon to reflect and recharge.',
    icon: <Coffee className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Cricket & Badminton with Friends 🏏 🏸',
    category: 'Favorite Sports & Hostel Squad',
    desc: 'My all-time favorite sports to play. Nothing beats heading out onto the turf or court for high-energy Cricket and Badminton matches with my hostel buddies to decompress.',
    icon: <Trophy className="h-5 w-5 text-emerald-500" />,
  },
  {
    title: 'Interactive AI-Native Avatar Portfolio 🤖 ✨',
    category: 'Creative Tech & Craziest Project',
    desc: 'Built this AI-native portfolio avatar of myself that answers visitors in real-time, renders custom components on the fly, and knows my coffee preferences and passions!',
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
  },
];

const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1gKqvhlMR5ASkN1-41gCcSnsK8R79X40V';
const RESUME_URL =
  'https://drive.google.com/file/d/1Xa0RcooQG9duH5mv4zHOCNlkXVfoz4HE/view?usp=drive_link';

export function Others() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'besides' | 'certificates' | 'fun' | 'resume' | 'story'
  >('all');

  const tabs = [
    { id: 'all', label: 'All Highlights' },
    { id: 'besides', label: "Beside's Coding" },
    { id: 'certificates', label: 'Certificates (5)' },
    { id: 'fun', label: 'Fun & Sports' },
    { id: 'resume', label: 'Resume' },
    { id: 'story', label: 'Origin Story' },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED] sm:text-2xl">
              Others &amp; Additional Highlights
            </h2>
          </div>
          <p className="mt-1 font-sans text-xs sm:text-sm text-[#71717A] dark:text-[#9A9A9A]">
            Verified certifications, fun rituals &amp; sports, non-coding growth leadership, and resume.
          </p>
        </div>

        {/* Action shortcuts */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <a
            href={DRIVE_FOLDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-accent/70 px-3 py-1.5 font-sans text-xs font-medium tracking-[0.02em] text-foreground transition-all hover:border-primary/40 hover:bg-accent"
          >
            <FolderOpen className="h-3.5 w-3.5 text-primary" />
            <span>Drive Folder</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-accent/70 px-3 py-1.5 font-sans text-xs font-medium tracking-[0.02em] text-foreground transition-all hover:border-primary/40 hover:bg-accent"
          >
            <FileCode2 className="h-3.5 w-3.5 text-primary" />
            <span>Resume</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-full px-3.5 py-1.5 font-sans text-xs font-medium tracking-[0.02em] transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-accent/60 text-[#71717A] hover:bg-accent hover:text-foreground dark:text-[#9A9A9A] dark:hover:text-[#EDEDED]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="space-y-8">
        {/* Beside's Coding Section */}
        {activeTab === 'besides' && (
          <div className="w-full">
            <BesidesCoding />
          </div>
        )}

        {activeTab === 'all' && (
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-card to-indigo-500/10 p-5 transition-all hover:border-emerald-500/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3 w-3" />
                  <span>Featured Section</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                  Beside&apos;s Coding — Growth, Startups &amp; Leadership
                </h3>
                <p className="max-w-xl font-sans text-xs sm:text-sm leading-[1.6] text-[#71717A] dark:text-[#9A9A9A]">
                  Head of Reddit Growth at <strong>Nexie.ai</strong> (1,000+ active users &amp; affiliate platform), <strong>Runable AI</strong>{' '}Best Affiliate Award winner ($21M Series A), campus operations at Techno VIT &amp; Vibrance, and full growth engineering funnels.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('besides')}
                className="inline-flex items-center gap-1.5 self-start rounded-lg bg-primary px-3.5 py-2 font-sans text-xs font-medium tracking-[0.02em] text-primary-foreground transition-all hover:opacity-90 sm:self-auto shrink-0"
              >
                <span>Explore Section</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Section 1: Certificates */}
        {(activeTab === 'all' || activeTab === 'certificates') && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                  Verified Certifications
                </h3>
              </div>
              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-medium text-primary hover:underline inline-flex items-center gap-1"
              >
                <span>Google Drive Folder</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className={`flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md ${cert.accentColor}`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent">
                        {cert.icon}
                      </span>
                      <span className="font-mono text-xs text-[#71717A] dark:text-[#9A9A9A]">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="mt-3 font-sans text-base font-bold tracking-[-0.01em] text-foreground dark:text-[#EDEDED]">
                      {cert.title}
                    </h4>

                    <p className="mt-2.5 font-sans text-xs sm:text-sm leading-[1.6] text-[#71717A] dark:text-[#9A9A9A]">
                      {cert.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-secondary/80 px-2 py-0.5 font-mono text-[0.8rem] font-medium tracking-[-0.01em] text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-end">
                    <a
                      href={cert.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3.5 py-1.5 font-sans text-xs font-semibold tracking-[0.02em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      <span>View</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Fun & Beyond Tech */}
        {(activeTab === 'all' || activeTab === 'fun') && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-500" />
              <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                Fun &amp; Life Outside Code
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {funHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-bold tracking-[-0.01em] text-foreground dark:text-[#EDEDED]">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[11px] text-[#71717A] dark:text-[#9A9A9A]">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2.5 font-sans text-xs sm:text-sm leading-[1.6] text-[#71717A] dark:text-[#9A9A9A]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Online Resume Card */}
        {(activeTab === 'all' || activeTab === 'resume') && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FileCode2 className="h-5 w-5 text-emerald-500" />
              <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                Resume &amp; Academic Profile
              </h3>
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 rounded-xl border border-border bg-accent/40 p-5 transition-all hover:border-primary/40 hover:bg-accent sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-sans text-base font-bold tracking-[-0.01em] text-foreground dark:text-[#EDEDED]">
                      Monish&apos;s Resume
                    </h4>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                      Verified
                    </span>
                  </div>
                  <p className="mt-0.5 font-sans text-xs sm:text-sm text-[#71717A] dark:text-[#9A9A9A]">
                    B.Tech CSE (Data Science) · VIT Chennai | AI Intern @ Wubble AI
                  </p>
                  <span className="mt-1 inline-block font-mono text-[11px] text-[#71717A] dark:text-[#9A9A9A]">
                    Click to view directly in browser tab
                  </span>
                </div>
              </div>

              <div className="flex items-center self-start gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-sans text-xs font-semibold tracking-[0.02em] text-primary-foreground sm:self-auto">
                <span>View</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </div>
            </a>
          </div>
        )}

        {/* Section 4: Origin Story */}
        {(activeTab === 'all' || activeTab === 'story') && (
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-purple-500" />
              <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                The Bot That Started It All
              </h3>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Bot className="h-8 w-8" />
              </div>
              <h4 className="mt-3 font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
                Driven by Autonomous AI Systems
              </h4>
              <p className="mx-auto mt-2 max-w-lg font-sans text-xs sm:text-sm leading-[1.6] text-[#71717A] dark:text-[#9A9A9A]">
                What began with building simple conversational scripts turned into engineering multi-agent loops, multimodal video analysis, and generative music foundation pipelines. This portfolio is both my interactive workspace and my living proof of shipping production-grade agentic AI.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Others;
