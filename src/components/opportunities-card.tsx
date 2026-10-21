'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Code2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Rocket,
  CheckCircle2,
  Users,
} from 'lucide-react';

interface OpportunitiesCardProps {
  onSeeFullStack?: () => void;
  onContact?: () => void;
}

export default function OpportunitiesCard({
  onSeeFullStack,
  onContact,
}: OpportunitiesCardProps) {
  const handleTalk = () => {
    if (onContact) {
      onContact();
    } else {
      window.location.href =
        '/chat?query=' + encodeURIComponent('How can I contact you?');
    }
  };

  const handleSeeFullStack = () => {
    if (onSeeFullStack) {
      onSeeFullStack();
    } else {
      window.location.href =
        '/chat?query=' +
        encodeURIComponent(
          'What are your projects and skills? Show me your work, technical stack, and capabilities.'
        );
    }
  };

  const openCategories = [
    {
      label: 'Internships',
      icon: Briefcase,
      desc: 'High-impact AI/ML & Agentic engineering',
    },
    {
      label: 'Full-time opportunities',
      icon: Rocket,
      desc: 'Fast-moving frontier AI teams',
    },
    {
      label: 'Interesting collaborations',
      icon: Sparkles,
      desc: 'Multimodal research & open-source AI',
    },
    {
      label: 'Early-stage startups',
      icon: Users,
      desc: '0-to-1 building, growth & product velocity',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto my-4 w-full max-w-3xl rounded-3xl border border-neutral-200/90 bg-white/80 p-6 font-sans text-neutral-800 shadow-lg backdrop-blur-xl transition-all sm:p-8 md:p-9 dark:border-white/10 dark:bg-[#18181B]/95 dark:text-[#EDEDED]"
    >
      {/* Top Header: Avatar, Name, Title, and Available Badge */}
      <div className="flex flex-col gap-4 border-b border-neutral-200/70 pb-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-neutral-200 shadow-md dark:border-white/20">
            <img
              src="/profile-monish.jpg"
              alt="Monish D"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight text-neutral-900 dark:text-[#EDEDED]">
              Monish D
            </h3>
            <p className="font-sans text-sm text-neutral-600 dark:text-[#9A9A9A]">
              AI Intern · Open to Opportunities
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-600 shadow-xs dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>

      {/* AN OPEN INVITATION Hero Banner */}
      <div className="my-6 rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-neutral-100/50 to-primary/5 p-6 dark:from-emerald-950/20 dark:via-neutral-900/60 dark:to-neutral-900/40">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-[11px] font-bold tracking-[0.15em] text-emerald-600 uppercase dark:text-emerald-400">
          <Sparkles className="h-3 w-3" />
          <span>AN OPEN INVITATION</span>
        </div>

        <h4 className="font-heading mt-3 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl dark:text-[#EDEDED]">
          Looking for someone who gets things moving?
        </h4>

        <p className="font-sans mt-2 text-sm leading-relaxed text-neutral-700 sm:text-base dark:text-[#D1D5DB]">
          I build, solve problems, and turn ideas into things that work. If you&apos;re building something ambitious, let&apos;s see what we can make happen together.
        </p>

        {/* 4 Opportunity Categories */}
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {openCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl border border-neutral-200/80 bg-white/90 p-3 shadow-xs transition-all hover:border-emerald-500/40 hover:bg-white dark:border-white/10 dark:bg-neutral-900/80 dark:hover:border-white/20"
              >
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
                    {item.label}
                  </div>
                  <div className="font-sans text-xs text-neutral-500 dark:text-[#9A9A9A]">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role & Location Grid */}
      <div className="grid grid-cols-1 gap-6 border-b border-neutral-200/70 py-6 sm:grid-cols-2 dark:border-white/10">
        {/* Role */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-sky-500/10 p-2 text-sky-500 dark:text-sky-400">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
              Role
            </h4>
            <p className="font-sans mt-0.5 text-sm leading-relaxed text-neutral-600 dark:text-[#9A9A9A]">
              AI / ML Engineer &amp; Researcher — open to Agentic AI, Multimodal &amp; Full-Stack AI roles
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-emerald-500/10 p-2 text-emerald-500 dark:text-emerald-400">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
              Location
            </h4>
            <p className="font-sans mt-0.5 text-sm leading-relaxed text-neutral-600 dark:text-[#9A9A9A]">
              Bangalore, India · Open to Relocate / Hybrid / Remote
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="border-b border-neutral-200/70 py-6 dark:border-white/10">
        <div className="mb-3 flex items-center gap-2">
          <div className="rounded-lg bg-purple-500/10 p-1.5 text-purple-500 dark:text-purple-400">
            <Code2 className="h-4 w-4" />
          </div>
          <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
            Tech Stack
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-2 pl-7 text-sm text-neutral-700 sm:grid-cols-2 dark:text-[#D1D5DB]">
          <ul className="list-inside list-disc space-y-1.5">
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">Python, PyTorch, C++</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">FastAPI, Docker, Linux, Git</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">LangChain, LangGraph, Multi-Agent Systems</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">LLaVA, Video-LLaVA, OpenCV, Whisper</span></li>
          </ul>
          <ul className="list-inside list-disc space-y-1.5">
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">React, Next.js, TypeScript, Tailwind CSS</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">PostgreSQL, ChromaDB, FAISS, Redis</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">HuggingFace, vLLM, DeepSpeed</span></li>
            <li className="list-none pt-1">
              <button
                type="button"
                onClick={handleSeeFullStack}
                className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-sky-600 transition-all hover:underline dark:text-sky-400"
              >
                See full stack →
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing Callout: Have something in mind? Tell me what you're building. */}
      <div className="pt-6 pb-4 text-center">
        <h4 className="font-heading text-lg font-bold text-neutral-900 sm:text-xl dark:text-[#EDEDED]">
          Have something in mind?
        </h4>
        <p className="font-sans mt-1 text-sm text-neutral-600 dark:text-[#9A9A9A]">
          Tell me what you&apos;re building.
        </p>

        {/* "Let's talk" CTA button */}
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={handleTalk}
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-neutral-800 active:scale-95 dark:bg-[#EDEDED] dark:text-neutral-950 dark:hover:bg-white"
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span>Let&apos;s talk</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
