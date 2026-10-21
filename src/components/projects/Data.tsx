// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project by Monish D.
const PROJECT_CONTENT = [
  {
    title: 'Continuum',
    tagline: 'Decision Archaeology Agent — Recovering the "why" behind engineering decisions.',
    description:
      'Continuum is an LLM agent that recovers the historical rationale and architectural context behind code decisions from PR threads, issues, and git commits. It labels answers with verifiable certainty levels (Confirmed / Inferred / Unknown), indexes repositories with hybrid retrieval (BM25 + pgvector), and features an Architectural Drift Radar that alerts on silent violations of engineering invariants.',
    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'MCP (Model Context Protocol)',
      'FastAPI',
      'TypeScript',
      'Supabase',
      'pgvector',
      'Docker',
    ],
    date: '2026',
    links: [
      {
        name: 'Live Demo',
        url: 'https://continuum-decision-archaeology.onrender.com/',
      },
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Monish-D609/continuum-decision-archaeology',
      },
    ],
    images: [
      { src: '/projects/continuum-preview.jpg', alt: 'Continuum Decision Archaeology Dashboard' },
      { src: '/projects/continuum-cover.jpg', alt: 'Architectural Drift Radar & Decision Timeline' },
    ],
  },
  {
    title: 'Meridian',
    tagline: 'Enterprise-grade LLM evaluation and benchmarking platform.',
    description:
      'Meridian is a reproducible LLM benchmarking and evaluation platform that provides multi-dimensional model assessment, 7-axis capability profiling (Reasoning, Truthfulness, Instruction Following, Coding, Safety, Robustness, Coherence), industry baseline percentile ranking, and publication-ready automated PDF exports. Built with a high-throughput async FastAPI backend and interactive Vite React frontend.',
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'PyTorch',
      'Plotly',
      'ReportLab',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Monish-D609/Meridian',
      },
    ],
    images: [
      { src: '/projects/meridian-preview.jpg', alt: 'Meridian 7-Axis Capability Profile & Benchmark Dashboard' },
      { src: '/projects/meridian-cover.jpg', alt: 'Model Comparison & Percentile Rankings' },
    ],
  },
  {
    title: 'AI Video Agent',
    tagline: 'Turn any video into searchable transcripts, structured insights, and grounded chat.',
    description:
      'AI Video Agent ingests YouTube URLs or local video/audio files, transcribing speech with local Whisper for English and Sarvam AI for Hinglish (with real-time translation). It automatically generates summaries, action items (with assignees and deadlines), key decisions, and open questions using Cloudflare Workers AI. An integrated RAG system allows conversational Q&A strictly grounded in the video transcript with query rewriting for context-aware follow-ups.',
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'Vite',
      'Whisper',
      'Sarvam AI',
      'Cloudflare Workers AI',
      'RAG',
      'yt-dlp',
      'FFmpeg',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Monish-D609/Video-Agent',
      },
    ],
    images: [
      { src: '/projects/video-agent-preview.jpg', alt: 'AI Video Agent Video Player, Transcript & Grounded Chat' },
      { src: '/projects/video-agent-cover.jpg', alt: 'Structured AI Insights and Action Items' },
    ],
  },
  {
    title: 'LLMVS',
    tagline: 'Multimodal Video Summarization with LLMs — IIT Mandi VIML Research.',
    description:
      'Replication and extension of CVPR 2025 research developed during a Summer Research Internship at IIT Mandi (SCEE) under Dr. Dinesh Singh. LLMVS identifies key video frames by reading events using multimodal foundation models: frozen LLaVA-1.5-7B generates dense frame captions, frozen Llama-2-13B scores frame importance over a 7-caption sliding window, and a trained lightweight global context aggregator (~91M parameters) predicts final frame importance. Achieved Kendall’s τ of 0.253 and Spearman’s ρ of 0.282 on SumMe, surpassing previous state-of-the-art methods.',
    techStack: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'LLaVA-1.5-7B',
      'Llama-2-13B',
      'OpenCV',
      'Computer Vision',
      'SumMe / TVSum',
    ],
    date: 'May – Jun 2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Monish-D609/LLMVS',
      },
    ],
    images: [
      { src: '/projects/llmvs-preview.jpg', alt: 'LLMVS Attention Score Heatmap & Sliding Window Importance' },
      { src: '/projects/llmvs-cover.jpg', alt: 'LLaVA Frame Captioning & Correlation Metrics' },
    ],
  },
  {
    title: 'Retail Demand Intelligence',
    tagline: 'Hierarchical forecasting, customer lifetime value, and churn analytics in R.',
    description:
      'An end-to-end time-series demand forecasting and customer retention analytics pipeline built on 99K Olist e-commerce orders across 9 relational tables. Formatted as a reproducible R package using `targets` and `renv`. Reached 15.5% MAPE on weekly demand (~55% improvement over naive baseline). Implemented repeat-purchase classification for highly imbalanced customer behavior (96.9% single-purchase rate), where threshold tuning delivered a 12x lift over random targeting.',
    techStack: [
      'R',
      'tidyverse',
      'ggplot2',
      'forecast',
      'XGBoost',
      'Shiny',
      'targets',
      'renv',
      'SQL',
    ],
    date: '2026',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/Monish-D609/retailDemandIntelligence',
      },
    ],
    images: [
      { src: '/projects/retail-preview.jpg', alt: 'Retail Demand Intelligence Forecasting Chart & Cohort Heatmap' },
      { src: '/projects/retail-cover.jpg', alt: 'Repeat Purchase 12x Lift and Demand Accuracy' },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10 font-sans">
      {/* Tagline */}
      {projectData.tagline && (
        <p className="font-heading text-base font-semibold tracking-[-0.02em] text-[#71717A] dark:text-[#9A9A9A] md:text-lg">
          {projectData.tagline}
        </p>
      )}

      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717A] dark:text-[#9A9A9A]">
            <span>{projectData.date}</span>
          </div>

          <p className="font-sans text-[1.05rem] leading-[1.6] text-foreground dark:text-[#EDEDED]">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A] dark:text-[#9A9A9A]">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="font-mono rounded-md border border-border/70 bg-neutral-200/70 px-2.5 py-1 text-[0.8rem] font-medium tracking-[-0.01em] text-foreground dark:bg-neutral-800/80 dark:text-[#EDEDED]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#71717A] dark:text-[#9A9A9A]">
              Links
            </h3>
            <Link className="h-4 w-4 text-[#71717A] dark:text-[#9A9A9A]" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-neutral-200 dark:bg-[#1D1D1F] dark:hover:bg-neutral-800"
              >
                <span className="font-sans text-sm font-medium tracking-[0.02em] text-foreground dark:text-[#EDEDED]">
                  {link.name}
                </span>
                <ChevronRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <h3 className="px-6 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            Project Visuals
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-md dark:bg-neutral-900"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
export const data = [
  // 1. AI Video Agent
  {
    category: 'Multimodal Video Intelligence & RAG',
    title: 'AI Video Agent',
    src: '/projects/video-agent-preview.jpg',
    coverSrc: '/projects/video-agent-cover.jpg',
    content: <ProjectContent project={{ title: 'AI Video Agent' }} />,
  },
  // 2. Continuum
  {
    category: 'Agentic AI & Engineering Intelligence',
    title: 'Continuum',
    src: '/projects/continuum-preview.jpg',
    coverSrc: '/projects/continuum-cover.jpg',
    content: <ProjectContent project={{ title: 'Continuum' }} />,
  },
  // 3. Meridian
  {
    category: 'LLM Benchmarking & Evaluation',
    title: 'Meridian',
    src: '/projects/meridian-preview.jpg',
    coverSrc: '/projects/meridian-cover.jpg',
    content: <ProjectContent project={{ title: 'Meridian' }} />,
  },
  // 4. LLMVS
  {
    category: 'Computer Vision & Foundation Models (IIT Mandi)',
    title: 'LLMVS',
    src: '/projects/llmvs-preview.jpg',
    coverSrc: '/projects/llmvs-cover.jpg',
    content: <ProjectContent project={{ title: 'LLMVS' }} />,
  },
  // 5. Retail Demand Intelligence
  {
    category: 'Time-Series Forecasting & ML in R',
    title: 'Retail Demand Intelligence',
    src: '/projects/retail-preview.jpg',
    coverSrc: '/projects/retail-cover.jpg',
    content: <ProjectContent project={{ title: 'Retail Demand Intelligence' }} />,
  },
];