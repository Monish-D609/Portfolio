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
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: 'AI & Machine Learning' | 'Digital Marketing & Strategy';
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
    category: 'AI & Machine Learning',
    driveUrl:
      'https://drive.google.com/file/d/1Rz5sEJlzfX4KgGs9rF2NajB7amqUwsLj/view?usp=sharing',
    description:
      'Foundational deep learning certification taught by Andrew Ng covering deep neural architectures, forward and backward propagation, loss optimization, vectorization, and parameter tuning.',
    skills: ['Deep Learning', 'Neural Networks', 'Backpropagation', 'Python', 'Vectorization'],
    icon: <Brain className="h-5 w-5 text-indigo-500" />,
    accentColor: 'border-indigo-500/30 hover:border-indigo-500/60 dark:hover:border-indigo-400/50',
  },
  {
    id: 'rag-pipelines',
    title: 'Designing Scalable RAG Pipelines Masterclass',
    issuer: 'Scaler Masterclass',
    category: 'AI & Machine Learning',
    driveUrl:
      'https://drive.google.com/file/d/14W4-GTPs8H7vvySxEzdYQEKE812SB6DK/view?usp=sharing',
    description:
      'Production-grade Retrieval-Augmented Generation (RAG) system design, vector embedding indices, semantic search chunking, context reranking, and scalable LLM orchestration.',
    skills: ['RAG Pipelines', 'Vector Databases', 'LLM Architectures', 'Semantic Retrieval'],
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    accentColor: 'border-emerald-500/30 hover:border-emerald-500/60 dark:hover:border-emerald-400/50',
  },
  {
    id: 'scikit-learn',
    title: 'Introduction to Machine Learning with scikit-learn',
    issuer: 'Data School',
    category: 'AI & Machine Learning',
    driveUrl:
      'https://drive.google.com/file/d/1WqW_aNFe9CDHoYgZ7tBkJqnLjJaZ55KB/view?usp=sharing',
    description:
      'Comprehensive hands-on machine learning workflow with Scikit-Learn: supervised learning, classification, linear/logistic regression, cross-validation, and model evaluation metrics.',
    skills: ['scikit-learn', 'Machine Learning', 'Model Evaluation', 'Supervised Learning'],
    icon: <Layers className="h-5 w-5 text-blue-500" />,
    accentColor: 'border-blue-500/30 hover:border-blue-500/60 dark:hover:border-blue-400/50',
  },
  {
    id: 'hubspot-seo',
    title: 'SEO',
    issuer: 'HubSpot Academy',
    category: 'Digital Marketing & Strategy',
    driveUrl:
      'https://drive.google.com/file/d/17DhmVmslNYWada3lFVC6ad9calcIbCCt/view?usp=sharing',
    description:
      'Search engine optimization strategy covering keyword research, content architecture, technical crawlability optimization, backlink acquisition, and organic traffic growth.',
    skills: ['Technical SEO', 'Keyword Strategy', 'Organic Growth', 'Content Optimization'],
    icon: <Search className="h-5 w-5 text-amber-500" />,
    accentColor: 'border-amber-500/30 hover:border-amber-500/60 dark:hover:border-amber-400/50',
  },
  {
    id: 'hubspot-smm',
    title: 'Social Media Management',
    issuer: 'HubSpot Academy',
    category: 'Digital Marketing & Strategy',
    driveUrl:
      'https://drive.google.com/file/d/1C413JRgPtJelvMZ9iX7ycHsHDRAl1Rb_/view?usp=sharing',
    description:
      'Social media marketing, inbound strategy, digital brand positioning, performance analytics, campaign measurement, and audience retention.',
    skills: ['Social Media Marketing', 'Inbound Strategy', 'Brand Growth', 'Digital Marketing'],
    icon: <Share2 className="h-5 w-5 text-rose-500" />,
    accentColor: 'border-rose-500/30 hover:border-rose-500/60 dark:hover:border-rose-400/50',
  },
];

const DRIVE_FOLDER_URL =
  'https://drive.google.com/drive/folders/1gKqvhlMR5ASkN1-41gCcSnsK8R79X40V';

export function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Digital Marketing & Strategy',
  ];

  const filteredCertificates =
    selectedCategory === 'All'
      ? certificatesData
      : certificatesData.filter((c) => c.category === selectedCategory);

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      {/* Header section */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Certificates & Credentials
            </h2>
          </div>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
            Professional certifications in Deep Learning, Scalable RAG, Machine Learning, and Growth.
          </p>
        </div>

        {/* Drive Folder Button */}
        <a
          href={DRIVE_FOLDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-lg border border-border bg-accent/70 px-3.5 py-2 text-xs font-medium text-foreground transition-all hover:border-primary/40 hover:bg-accent sm:self-auto"
        >
          <FolderOpen className="h-4 w-4 text-primary" />
          <span>View Drive Folder</span>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
        </a>
      </div>

      {/* Category filter pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === 'All'
              ? certificatesData.length
              : certificatesData.filter((c) => c.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-accent/60 text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className={`group flex flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md ${cert.accentColor}`}
            >
              <div>
                {/* Card Top: Category */}
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent">
                    {cert.icon}
                  </span>
                  <Badge variant="outline" className="text-[11px] font-normal">
                    {cert.category}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="mt-3.5 text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="mt-1 text-xs text-muted-foreground font-medium text-foreground/80">
                  {cert.issuer}
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: View button */}
              <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-end">
                <a
                  href={cert.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span>View</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Certificates;
