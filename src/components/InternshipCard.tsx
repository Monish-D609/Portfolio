'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:monishpersonal609@gmail.com', '_blank');
  };

  const wubbleResponsibilities = [
    {
      title: 'Agent Architecture & Development',
      desc: 'Design, build, and iterate on core agentic loops, including autonomous planning, memory management, and tool integration for Wubble’s generative music platform.',
    },
    {
      title: 'System-Prompt Engineering',
      desc: 'Design and execute rigorous experiments to improve helpfulness, safety, persona consistency, and inference latency of production AI agents.',
    },
    {
      title: 'Custom Tooling & Micro-services',
      desc: 'Craft CLI utilities and micro-services that streamline developer workflows and expand agent capabilities.',
    },
    {
      title: 'API Development & Hardening',
      desc: 'Design, version, document, and test production-grade RESTful APIs using FastAPI, enforcing rigorous schemas via OpenAPI.',
    },
    {
      title: 'Agent Validation & Simulation Testing',
      desc: 'Build reproducible, data-driven test rigs (unit + simulation) to guarantee agent reliability and correctness across edge cases.',
    },
    {
      title: 'Cloud & CI/CD Deployment',
      desc: 'Package components into multi-stage Docker containers, automate CI/CD pipelines, and manage scalable deployments on GKE / Cloud Run.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card mx-auto mt-6 w-full max-w-4xl rounded-2xl border border-border p-6 font-sans shadow-md sm:p-8 md:p-10"
    >
      {/* Top Header */}
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full border border-primary/20 shadow-sm sm:h-16 sm:w-16">
            <img
              src="/profile-monish.jpg"
              alt="Monish's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-heading text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
                Monish D
              </h2>
              <span className="font-mono rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                ● Currently Interning
              </span>
            </div>
            <p className="font-sans mt-0.5 text-xs text-[#71717A] dark:text-[#9A9A9A] sm:text-sm">
              AI/ML Intern: Agentic AI Systems @ Wubble AI · Pre-final Year B.Tech CSE (Data Science)
            </p>
          </div>
        </div>

        {/* Location badge */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="font-mono flex items-center gap-1.5 py-1 text-xs text-[#71717A] dark:text-[#9A9A9A]">
            <MapPin className="h-3.5 w-3.5 text-emerald-500" />
            <span>Bangalore, India</span>
          </Badge>
        </div>
      </div>

      {/* Featured Current Role: Wubble AI */}
      <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/95 p-1.5 shadow-sm ring-1 ring-border">
              <img
                src="/wubble-logo.svg"
                alt="Wubble AI Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono rounded bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                  Current Role
                </span>
                <span className="font-mono text-xs text-[#71717A] dark:text-[#9A9A9A]">
                  Singapore · Remote (Internship)
                </span>
              </div>
              <h3 className="font-sans mt-1 text-lg font-bold tracking-[-0.01em] text-foreground sm:text-xl">
                AI/ML Intern: Agentic AI Systems
              </h3>
              <p className="font-sans mt-0.5 text-sm font-medium text-primary">
                <a
                  href="https://wubble.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:opacity-80"
                >
                  Wubble AI (wubble.ai)
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </p>
            </div>
          </div>

          <span className="font-mono self-start rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 sm:self-auto">
            Active Employment
          </span>
        </div>

        {/* Company Overview */}
        <p className="font-sans mt-4 text-xs leading-[1.6] text-muted-foreground sm:text-sm">
          <strong>About Wubble.ai:</strong> World’s first B2B AI Music platform, redefining music generation with foundation models for enterprise leaders worldwide (Disney, Starbucks, Microsoft, HP). Backed by <strong>Antler, Google, NVIDIA</strong>, and recognized as one of the <strong>Top 5 startups in Asia</strong>.
        </p>

        {/* Responsibilities Grid */}
        <div className="mt-4 pt-4 border-t border-primary/15">
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Key Responsibilities & Engineering Focus
          </h4>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {wubbleResponsibilities.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border/60 bg-background/60 p-3"
              >
                <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Engineering & Research Internships */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Research at IIT Mandi */}
        <div className="rounded-xl border border-border bg-accent/40 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-purple-500" />
              <h4 className="font-sans text-sm font-bold tracking-[-0.01em] text-foreground">
                Research Internship: IIT Mandi VIML Lab
              </h4>
            </div>
            <span className="font-mono text-[11px] text-[#71717A] dark:text-[#9A9A9A]">May – Jun 2026</span>
          </div>
          <p className="font-sans mt-2 text-xs leading-[1.6] text-muted-foreground">
            Implemented a Multimodal LLM-based Video Summarization architecture that solved critical limitations of conventional text- or caption-based summarization by embedding true semantic understanding with respect to visual features. Achieved Kendall’s τ benchmark of 0.253 and Spearman’s ρ of 0.282 on SumMe.
          </p>
        </div>

        {/* AI Web Development Intern at InAmigos */}
        <div className="rounded-xl border border-border bg-accent/40 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-blue-500" />
              <h4 className="font-sans text-sm font-bold tracking-[-0.01em] text-foreground">
                AI Web Development Intern: InAmigos
              </h4>
            </div>
            <span className="font-mono text-[11px] text-[#71717A] dark:text-[#9A9A9A]">Apr – May 2026</span>
          </div>
          <p className="font-sans mt-2 text-xs leading-[1.6] text-muted-foreground">
            Engineered responsive high-converting hero sections, optimized core web vitals, reduced site latency, eliminated mobile layout shifts, and fixed UI/UX bugs.
          </p>
        </div>
      </div>

      {/* Tech Stack Summary */}
      <div className="mt-6 rounded-xl border border-border bg-accent/30 p-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-emerald-500" />
          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
            Core Production Tech Stack
          </h4>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {[
            'Agentic AI',
            'FastAPI',
            'OpenAPI',
            'LangChain',
            'LangGraph',
            'MCP Protocol',
            'Docker',
            'GKE / Cloud Run',
            'Python',
            'PyTorch',
            'Hugging Face',
            'OpenRouter',
            'Cloudflare AI',
            'Gemini API',
            'TypeScript / React',
          ].map((tech) => (
            <span
              key={tech}
              className="font-mono rounded-md border border-border/80 bg-background/80 px-2.5 py-1 text-[0.8rem] font-medium text-foreground tracking-[-0.01em]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Goal & CTA */}
      <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
        <div>
          <p className="font-sans text-xs font-semibold text-foreground">
            Looking to collaborate on cutting-edge Agentic AI or Multimodal Systems?
          </p>
          <p className="font-sans text-xs text-[#71717A] dark:text-[#9A9A9A]">
            Open to future roles, research collaborations, and tech discussions.
          </p>
        </div>
        <button
          onClick={openMail}
          className="font-sans cursor-pointer inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium tracking-[0.02em] text-primary-foreground shadow transition-transform hover:scale-105"
        >
          <span>Get in Touch</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
