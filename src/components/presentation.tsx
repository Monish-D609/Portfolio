'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Briefcase, ExternalLink, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export function Presentation() {
  // Personal information
  const profile = {
    name: 'Monish D',
    education: 'B.Tech in CSE (Data Science) · Pre-final Year, VIT Chennai',
    location: 'Bangalore, India (College: VIT Chennai)',
    currentRole: 'AI Intern @ Wubble AI',
    // Add a newline character after the emoji
    description:
      "Hey 👋\nI'm Monish, a pre-final year B.Tech in CSE (Data Science) student at VIT Chennai, based in Bangalore. I am currently an AI Intern at Wubble AI (Singapore-based, world's first B2B AI Music platform backed by Antler, Google, and NVIDIA). I build agentic workflows, LLM evaluation platforms, audio engineering and computer vision systems, leveraging multimodal deep learning to solve real-world challenges.",
    src: '/profile-monish.jpg',
    fallbackSrc:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackSrc;
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-2 flex flex-col gap-1.5 text-sm md:flex-row md:items-center md:gap-3">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <GraduationCap className="h-4 w-4 shrink-0 text-purple-500" />
                <span>{profile.education}</span>
              </div>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-500" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Current Position Banner */}
            <div className="mt-3.5 rounded-xl border border-primary/25 bg-primary/5 p-3.5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                  <Briefcase className="h-3.5 w-3.5" />
                  Currently Employed
                </span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Internship
                </span>
              </div>
              <div className="mt-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 className="text-sm font-semibold text-foreground">
                  AI Intern @{' '}
                  <a
                    href="https://wubble.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-primary/40 underline-offset-2 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    Wubble AI
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </h4>
                <span className="text-[11px] text-muted-foreground">Singapore</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                World&apos;s first B2B AI Music platform · Backed by Antler, Google, NVIDIA (Top 5 in Asia)
              </p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Tags/Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {['GenAI & Agents', 'Multimodal Deep Learning', 'LLM Systems', 'Data Science'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
