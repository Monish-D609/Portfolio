'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Sparkles, Building } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { MONISH_PROFILE } from '@/data/monish-profile';

export default function EducationCard() {
  const { degrees, summary } = MONISH_PROFILE.education;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {/* Header Badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base md:text-lg font-bold text-foreground">
              Education &amp; Academic Background
            </h3>
            <p className="text-xs text-muted-foreground">
              Concurrent Engineering &amp; Data Science Degrees
            </p>
          </div>
        </div>
        <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary text-xs">
          Pre-final Year
        </Badge>
      </div>

      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {degrees.map((degree, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                  <Building className="h-3 w-3 text-primary" />
                  {index === 0 ? 'Primary Degree' : 'Concurrent Degree'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {degree.timeline}
                </span>
              </div>

              <h4 className="mt-3 text-base font-bold text-foreground">
                {degree.degree}
              </h4>
              <p className="text-xs font-semibold text-primary mt-0.5">
                {degree.major}
              </p>

              <p className="mt-2 text-xs font-medium text-foreground/90">
                {degree.institution}
              </p>

              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <MapPin className="h-3 w-3 shrink-0 text-muted-foreground/70" />
                <span>{degree.location}</span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {degree.highlights}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px]">
              <span className="font-medium text-muted-foreground">Status:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                {degree.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Note */}
      <div className="rounded-xl border border-border/60 bg-accent/40 p-3.5 text-xs text-muted-foreground flex items-start gap-2.5">
        <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-foreground">Location note:</strong> Monish lives and is based in Bangalore, while attending VIT Chennai for his on-campus curriculum and IIT Madras for concurrent advanced data science studies.
        </p>
      </div>
    </div>
  );
}
