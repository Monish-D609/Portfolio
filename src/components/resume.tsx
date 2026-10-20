'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

export function Resume() {
  // Resume details
  const resumeDetails = {
    title: "Monish's Resume",
    description: 'B.Tech in CSE (Data Science) · Pre-final Year, VIT Chennai',
    status: 'Verified',
    viewUrl:
      'https://drive.google.com/file/d/1Xa0RcooQG9duH5mv4zHOCNlkXVfoz4HE/view?usp=drive_link',
  };

  return (
    <div className="mx-auto w-full py-4 font-sans">
      <motion.a
        href={resumeDetails.viewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-xl border border-border bg-accent/60 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:shadow-md"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-foreground md:text-lg">
                  {resumeDetails.title}
                </h3>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  {resumeDetails.status}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                {resumeDetails.description}
              </p>
              <div className="mt-1 text-xs text-muted-foreground">
                <span>Click to view directly in browser</span>
              </div>
            </div>
          </div>

          {/* Open link indicator */}
          <div className="flex items-center self-start gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-transform group-hover:scale-105 sm:self-auto">
            <span>View</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </div>
        </div>
      </motion.a>
    </div>
  );
}

export default Resume;