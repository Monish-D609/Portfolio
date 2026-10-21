'use client';

import React, { useState } from 'react';
import AllProjects from '@/components/projects/AllProjects';
import Skills from '@/components/skills';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  BriefcaseBusiness,
  Sparkles,
  Code,
  TrendingUp,
  FolderGit2,
} from 'lucide-react';

interface ProjectsSkillsProps {
  initialTab?: 'projects' | 'skills' | 'all';
}

export default function ProjectsSkills({
  initialTab = 'projects',
}: ProjectsSkillsProps) {
  const [tab, setTab] = useState<'projects' | 'skills' | 'all'>(initialTab);

  return (
    <div className="mx-auto w-full max-w-5xl py-4 font-sans">
      {/* Top Banner Navigation */}
      <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 shadow-xs backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              Projects &amp; Skills
            </h2>
            <p className="text-xs text-muted-foreground">
              Production AI architectures, research pipelines, and dual-engine technical &amp; growth competencies.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 self-start rounded-xl border border-border bg-accent/40 p-1 sm:self-auto">
          <button
            type="button"
            onClick={() => setTab('projects')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              tab === 'projects'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Projects</span>
          </button>
          <button
            type="button"
            onClick={() => setTab('skills')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              tab === 'skills'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Skills &amp; Mastery</span>
          </button>
          <button
            type="button"
            onClick={() => setTab('all')}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
              tab === 'all'
                ? 'bg-primary text-primary-foreground shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>All</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-8">
        {(tab === 'projects' || tab === 'all') && (
          <div className="w-full">
            <AllProjects />
          </div>
        )}

        {(tab === 'skills' || tab === 'all') && (
          <div className="w-full">
            <Skills />
          </div>
        )}
      </div>
    </div>
  );
}
