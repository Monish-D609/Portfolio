'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Code2,
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react';

interface OpportunitiesCardProps {
  onSeeFullStack?: () => void;
}

export default function OpportunitiesCard({ onSeeFullStack }: OpportunitiesCardProps) {
  const handleEmail = () => {
    window.open('mailto:monishpersonal609@gmail.com', '_blank');
  };

  const handleSeeFullStack = () => {
    if (onSeeFullStack) {
      onSeeFullStack();
    } else {
      window.location.href = '/chat?query=' + encodeURIComponent('What are your projects and skills? Show me your work, technical stack, and capabilities.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto w-full max-w-3xl rounded-3xl border border-neutral-200/90 dark:border-white/10 bg-white/80 dark:bg-[#18181B]/95 p-6 sm:p-8 md:p-9 shadow-lg backdrop-blur-xl text-neutral-800 dark:text-[#EDEDED] font-sans my-4"
    >
      {/* Top Header: Avatar, Name, Title, and Available Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-neutral-200/70 dark:border-white/10">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-neutral-200 dark:border-white/20 shadow-md">
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
            <p className="font-sans text-sm text-neutral-600 dark:text-[#9A9A9A] mt-0.5">
              AI Intern · Open to Opportunities
            </p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available
          </span>
        </div>
      </div>

      {/* Role & Location Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-neutral-200/70 dark:border-white/10">
        {/* Role */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-sky-500/10 p-2 text-sky-500 dark:text-sky-400">
            <Briefcase className="h-4 w-4" />
          </div>
          <div>
            <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
              Role
            </h4>
            <p className="font-sans text-sm text-neutral-600 dark:text-[#9A9A9A] mt-0.5 leading-relaxed">
              AI / ML Engineer & Researcher — open to Agentic AI, Multimodal & Full-Stack AI roles
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
            <p className="font-sans text-sm text-neutral-600 dark:text-[#9A9A9A] mt-0.5 leading-relaxed">
              Bangalore, India · Open to Relocate / Hybrid / Remote
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-6 border-b border-neutral-200/70 dark:border-white/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="rounded-lg bg-purple-500/10 p-1.5 text-purple-500 dark:text-purple-400">
            <Code2 className="h-4 w-4" />
          </div>
          <h4 className="font-sans text-sm font-semibold text-neutral-900 dark:text-[#EDEDED]">
            Tech Stack
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-neutral-700 dark:text-[#D1D5DB] pl-7">
          <ul className="space-y-1.5 list-disc list-inside">
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">Python, PyTorch, C++</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">FastAPI, Docker, Linux, Git</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">LangChain, LangGraph, Multi-Agent Systems</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">LLaVA, Video-LLaVA, OpenCV, Whisper</span></li>
          </ul>
          <ul className="space-y-1.5 list-disc list-inside">
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">React, Next.js, TypeScript, Tailwind CSS</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">PostgreSQL, ChromaDB, FAISS, Redis</span></li>
            <li><span className="font-mono text-xs text-neutral-900 dark:text-[#EDEDED]">HuggingFace, vLLM, DeepSpeed</span></li>
            <li className="list-none pt-1">
              <button
                type="button"
                onClick={handleSeeFullStack}
                className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline transition-all"
              >
                See full stack →
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* What I bring */}
      <div className="py-6 border-b border-neutral-200/70 dark:border-white/10">
        <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-[#EDEDED] mb-3">
          What I bring
        </h4>
        <div className="space-y-2 text-sm text-neutral-600 dark:text-[#9A9A9A] leading-relaxed">
          <p>
            Real-world production Agentic AI experience at Wubble AI.
          </p>
          <p>
            Hands-on Multimodal LLM video summarization research from IIT Mandi VIML Lab.
          </p>
          <p>
            Blending deep AI engineering with GTM, product strategy, and high-velocity shipping.
          </p>
          <p>
            I ship fast, and love building useful things that actually work.
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="py-6">
        <h4 className="font-heading text-lg font-bold text-neutral-900 dark:text-[#EDEDED] mb-3">
          Goal
        </h4>
        <p className="text-sm text-neutral-600 dark:text-[#9A9A9A] leading-relaxed">
          Join a bold, innovative team building AI-powered tools that matter. I want to improve fast, contribute hard, and leave a mark. I&apos;m fast, flexible, and HUNGRYYYY 🔥
        </p>
      </div>

      {/* Call to action button */}
      <div className="pt-2 flex justify-center">
        <button
          type="button"
          onClick={handleEmail}
          className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-neutral-800 hover:scale-105 active:scale-95 dark:bg-[#EDEDED] dark:text-neutral-950 dark:hover:bg-white"
        >
          <Mail className="h-4 w-4" />
          <span>Get in Touch</span>
        </button>
      </div>
    </motion.div>
  );
}
