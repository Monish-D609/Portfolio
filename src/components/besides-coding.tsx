'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  TrendingUp,
  Award,
  Users,
  Target,
  BarChart3,
  Workflow,
  Sparkles,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Building2,
  Briefcase,
  Compass,
  Layers,
  GraduationCap,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Share2,
  FileCode2,
  HeartHandshake,
  BadgeCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

/* Runable Official Vector Mark */
export function RunableLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 737 665"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M499.61 664.89C558.43 664.89 606.11 617.2 606.11 558.38C606.11 499.56 558.43 451.88 499.61 451.88C460.55 451.88 426.39 472.91 407.86 504.26L405.4 507.19C385.81 530.54 349.86 530.47 330.36 507.05L327.19 503.25C308.53 472.46 274.69 451.88 236.05 451.88C177.23 451.88 129.55 499.56 129.55 558.38C129.55 617.2 177.23 664.89 236.05 664.89C274.17 664.89 307.62 644.86 326.44 614.75L330.69 609.74C350.18 586.86 385.5 586.79 405.06 609.61L408.59 613.72C427.28 644.4 461.05 664.89 499.61 664.89Z"
        fill="currentColor"
      />
      <path
        d="M331.5 160.67C360.91 109.73 343.46 44.59 292.52 15.18C241.58 -14.23 176.44 3.22 147.03 54.16C127.5 87.99 128.64 128.09 146.53 159.82L147.83 163.4C158.26 192.04 140.22 223.14 110.19 228.32L105.31 229.17C69.31 229.94 34.57 248.95 15.25 282.41C-14.16 333.35 3.3 398.49 54.24 427.9C105.18 457.31 170.31 439.86 199.72 388.92C218.78 355.91 218.16 316.94 201.5 285.59L199.29 279.38C189.21 251.06 206.82 220.44 236.36 214.91L241.68 213.91C277.6 213.06 312.23 194.06 331.5 160.67Z"
        fill="currentColor"
      />
      <path
        d="M537.28 388.92C566.7 439.86 631.83 457.31 682.77 427.9C733.71 398.49 751.17 333.35 721.76 282.41C702.22 248.58 666.93 229.52 630.51 229.15L626.76 228.48C596.74 223.19 578.82 192.03 589.35 163.42L591.07 158.77C608.39 127.21 609.29 87.62 589.98 54.16C560.57 3.22 495.43 -14.23 444.49 15.18C393.55 44.59 376.1 109.73 405.51 160.67C424.56 193.68 458.63 212.63 494.11 213.87L500.59 215.06C530.15 220.49 547.86 251.05 537.89 279.4L536.09 284.5C518.86 316.03 518 355.52 537.28 388.92Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Nexie Official Brand Logo */
export function NexieLogo({ className = 'h-6 w-auto' }: { className?: string }) {
  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 p-1 ring-1 ring-emerald-500/20">
        <Image
          src="/nexie-icon.png"
          alt="Nexie Icon"
          width={28}
          height={28}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-base font-bold text-foreground">
        Nexie.ai
      </span>
    </div>
  );
}

export default function BesidesCoding() {
  const [activeTab, setActiveTab] = useState<
    'all' | 'experience' | 'projects' | 'leadership' | 'skills'
  >('all');

  const stats = [
    {
      label: 'Subreddit Growth',
      value: '1,000+',
      sub: 'Active users in 30 days',
      icon: Users,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      label: 'Organic Post Run Rate',
      value: '1,000+',
      sub: 'Within 2 months at Nexie',
      icon: TrendingUp,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      label: 'Affiliate Marketing',
      value: 'Awarded #1',
      sub: 'Best Affiliate at Runable AI',
      icon: Award,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      label: 'Global Subscriptions',
      value: 'US & Europe',
      sub: 'Recurring paid user acquisition',
      icon: Globe,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-1">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card/90 to-accent/20 p-6 md:p-8 shadow-sm">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Growth, Strategy & Leadership</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-foreground">
              Beside&apos;s Coding
            </h2>
            <p className="font-sans max-w-xl text-sm leading-[1.6] text-muted-foreground">
              Beyond engineering, I drive user acquisition, product growth, community building, and cross-functional operations. From pre-revenue zero-to-one traction to scaling subreddits and managing campus flagship festivals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:flex-col sm:items-end">
            <Badge variant="outline" className="font-mono border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              <Building2 className="mr-1.5 h-3.5 w-3.5 text-primary" /> Nexie.ai &amp; Runable AI
            </Badge>
            <Badge variant="secondary" className="font-mono px-3 py-1 text-xs">
              <HeartHandshake className="mr-1.5 h-3.5 w-3.5 text-emerald-500" /> GTM &amp; Operations
            </Badge>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-background/60 p-3.5 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#71717A] dark:text-[#9A9A9A]">
                    {stat.label}
                  </span>
                  <div className={`rounded-lg p-1.5 border ${stat.color}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                </div>
                <div className="font-heading mt-2 text-lg md:text-xl font-bold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <p className="font-sans text-[11px] text-[#71717A] dark:text-[#9A9A9A] truncate mt-0.5">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-border/60 pb-3">
        {[
          { id: 'all', label: 'All Highlights' },
          { id: 'experience', label: 'Growth Leadership' },
          { id: 'projects', label: 'Growth Engineering' },
          { id: 'leadership', label: 'Campus Leadership' },
          { id: 'skills', label: 'Toolkit & Certs' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Experience / Growth Leadership */}
      {(activeTab === 'all' || activeTab === 'experience') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-primary" />
              Growth &amp; Startup Roles
            </h3>
            <span className="text-xs text-muted-foreground">Pre-revenue to Series A</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Nexie.ai Card */}
            <div className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-card p-5 md:p-6 transition-all hover:border-emerald-500/60 hover:shadow-md">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <NexieLogo className="h-7 w-auto" />
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Current Role
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mt-2">
                    Founding Head of Reddit Growth &amp; Software Developer
                  </h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span>Nexie.ai · AI Native ESP for Ecommerce (Shopify Ecosystem)</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>July 2026 – Present</span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Full End-to-End Reddit Presence:</strong> Built, bootstrapped, and scaled a dedicated brand subreddit to <strong className="text-emerald-600 dark:text-emerald-400">1,000+ active users</strong> within 30 days and scaled to a <strong className="text-emerald-600 dark:text-emerald-400">1,000+ organic post run rate</strong> within two months.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Custom Affiliate Platform &amp; Analytics:</strong> Architected and deployed Nexie&apos;s full-stack affiliate activity tracking dashboard with live telemetry; built automated subreddit scraping pipeline to surface target discussions for organic outreach.
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'React', 'Claude', 'Codex', 'KPI Tracking', 'Channel Analysis', 'Community Building'].map((tag) => (
                    <span key={tag} className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://nexie.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>nexie.ai</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Runable AI Card */}
            <div className="group relative overflow-hidden rounded-xl border border-indigo-500/30 bg-card p-5 md:p-6 transition-all hover:border-indigo-500/60 hover:shadow-md">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500 ring-1 ring-indigo-500/20">
                      <RunableLogo className="h-5 w-5" />
                    </div>
                    <span className="text-base font-bold text-foreground">
                      Runable AI
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      <Award className="h-3 w-3" /> Best Affiliate Award
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mt-2">
                    Growth &amp; Affiliate Marketing
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Autonomous AI Agent Platform (Raised $21M Series A)
                  </p>
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>March 2026 – July 2026</span>
                </div>
              </div>

              <div className="mt-4 space-y-2.5 text-xs text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Pre-Revenue to Series A Trajectory:</strong> Bootstrapped Runable&apos;s Reddit &amp; Discord communities prior to their institutional Series A round; engaged developer communities across Europe and the US.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Revenue &amp; Conversion Driver:</strong> Converted genuine international developers into recurring paid subscribers through targeted technical copywriting and competitor differentiation; recognized and rewarded as the top affiliate partner.
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {['Affiliate Marketing', 'GTM Strategy', 'Market Research', 'Competitor Analysis', 'Copywriting'].map((tag) => (
                    <span key={tag} className="rounded-md bg-accent px-2 py-0.5 text-[10px] font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://runable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>runable.com</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Growth Engineering Projects */}
      {(activeTab === 'all' || activeTab === 'projects') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Workflow className="h-4 w-4 text-emerald-500" />
              Growth Engineering &amp; Funnel Systems
            </h3>
            <span className="text-xs text-muted-foreground">Data-backed acquisition</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Project 1 */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between transition-all hover:border-emerald-500/40 hover:shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Target className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    Full-Stack
                  </Badge>
                </div>
                <h4 className="mt-3 text-sm font-bold text-foreground">
                  Nexie Reddit Affiliate Platform
                </h4>
                <p className="mt-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  Next.js · React · Vercel · Claude
                </p>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  Full-stack portal where affiliates log in, track Reddit engagement metrics, follow persona scripts, and receive automated payouts with real-time scraping.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/50 text-[11px] text-muted-foreground">
                Real-time attribution &amp; scraper
              </div>
            </div>

            {/* Project 2 */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between transition-all hover:border-cyan-500/40 hover:shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    Attribution
                  </Badge>
                </div>
                <h4 className="mt-3 text-sm font-bold text-foreground">
                  Marketing Funnel &amp; Attribution Analyzer
                </h4>
                <p className="mt-1 text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                  Python · SQL · Power BI · GA4
                </p>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  Evaluates paid, organic, email, and social traffic. Compares First-Touch vs. Last-Touch attribution, monitors CAC/ROAS, and models dynamic budget reallocation.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/50 text-[11px] text-muted-foreground">
                Multi-touch CAC &amp; ROAS optimization
              </div>
            </div>

            {/* Project 3 */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col justify-between transition-all hover:border-purple-500/40 hover:shadow-sm">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <Zap className="h-4 w-4" />
                  </span>
                  <Badge variant="outline" className="text-[10px]">
                    Automation
                  </Badge>
                </div>
                <h4 className="mt-3 text-sm font-bold text-foreground">
                  Marketing Automation &amp; Lead Engine
                </h4>
                <p className="mt-1 text-[11px] font-mono text-purple-600 dark:text-purple-400">
                  n8n · MySQL · Python
                </p>
                <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                  End-to-end n8n orchestration for inbound capture, intent scoring, drip sequences, error-handled routing, and conversion lifecycle tracking.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-border/50 text-[11px] text-muted-foreground">
                Automated lead scoring &amp; nurturing
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Campus Leadership & Extracurriculars */}
      {(activeTab === 'all' || activeTab === 'leadership') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-amber-500" />
              Leadership &amp; Campus Operations
            </h3>
            <span className="text-xs text-muted-foreground">Events at scale</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Android Club */}
            <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-amber-500/40 hover:shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-white p-1.5 shadow-xs">
                  <img
                    src="/android-club-logo.png"
                    alt="Android Club Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                      Android Club · 2025–2026
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      Techno VIT
                    </Badge>
                  </div>
                  <h4 className="mt-1 text-base font-bold text-foreground">
                    Core Management Member
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Spearheaded the planning and execution of Techno VIT: coordinated multi-track event schedules, managed cross-functional team assignments, aligned faculty coordinators, and directed on-ground execution for hundreds of participants.
                  </p>
                </div>
              </div>
            </div>

            {/* VITSION */}
            <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-indigo-500/40 hover:shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/80 bg-neutral-950 p-1.5 shadow-xs">
                  <img
                    src="/vitsion-logo.webp"
                    alt="VITSION Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                      VITSION · 2025–2026
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      Vibrance Festival
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <h4 className="text-base font-bold text-foreground truncate">
                      Core Operations Member
                    </h4>
                    <a
                      href="https://www.vitsionvitc.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-primary hover:underline"
                    >
                      <span>vitsionvitc.in</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Managed end-to-end event logistics, crowd control, and volunteer coordination for VITSION&apos;s flagship events during Vibrance (one of South India&apos;s largest university cultural and technical festivals).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: GTM, Marketing & Strategy */}
      {(activeTab === 'all' || activeTab === 'skills') && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base sm:text-lg font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED] flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-500" />
              GTM, Marketing &amp; Strategy
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Skills Group */}
            <div className="space-y-3 rounded-xl border border-border bg-card p-4.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Growth &amp; Analytical Competencies
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-foreground">Data &amp; Reporting:</span>
                  <p className="text-muted-foreground mt-0.5">
                    Excel, Google Sheets, Pivot Tables, XLOOKUP/VLOOKUP, KPI Dashboards
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Research &amp; Analysis:</span>
                  <p className="text-muted-foreground mt-0.5">
                    Competitor Intelligence, Channel Performance, Market Sizing, Opportunity Discovery
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Marketing &amp; Growth:</span>
                  <p className="text-muted-foreground mt-0.5">
                    GTM Strategy, Affiliate Marketing, Community Building, SEO, Google Analytics
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Automation &amp; Viz:</span>
                  <p className="text-muted-foreground mt-0.5">
                    n8n Workflow Automation, Power BI, Tableau, Matplotlib, Presentation Deck Crafting
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Group */}
            <div className="space-y-3 rounded-xl border border-border bg-card p-4.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Business &amp; Marketing Certifications
              </h4>

              <div className="space-y-2.5">
                {[
                  {
                    title: 'New Product Development',
                    issuer: 'IIM Ahmedabad',
                    sub: 'Product strategy, market positioning, and lifecycle execution',
                  },
                  {
                    title: 'SEO & Social Media Marketing',
                    issuer: 'HubSpot Academy',
                    sub: 'Inbound organic discovery, technical SEO, and viral community loops',
                  },
                  {
                    title: 'Digital Marketing Specialist',
                    issuer: 'Great Learning',
                    sub: 'Paid channels, performance funnels, and retention modeling',
                  },
                  {
                    title: 'Introduction to LLMs',
                    issuer: 'Microsoft',
                    sub: 'Enterprise generative AI applications and prompt patterns',
                  },
                ].map((cert, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs">
                    <BadgeCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {cert.title}{' '}
                        <span className="text-[11px] font-normal text-muted-foreground">
                          · {cert.issuer}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground">{cert.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
