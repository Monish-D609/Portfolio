'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Coffee,
  Music,
  Sunset,
  Trophy,
  Bot,
  Sparkles,
  Gamepad2,
  Bike,
  Heart,
  Flame,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const Crazy = () => {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-semibold text-pink-600 dark:text-pink-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Fun, Hobbies &amp; Life Outside Code</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Good Vibes, Great Games &amp; Friday Coffee
        </h2>
        <p className="max-w-xl mx-auto text-xs md:text-sm text-muted-foreground leading-relaxed">
          Beyond building agentic AI and training models, here is what keeps me energized, grounded, and smiling.
        </p>
      </div>

      {/* Featured Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Friday Coffee & Horizon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card to-card p-5 transition-all hover:border-amber-500/60 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
              <Coffee className="h-5 w-5" />
            </span>
            <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
              <Music className="h-3.5 w-3.5" />
              <span>Spotify Vibes</span>
            </div>
          </div>

          <h3 className="mt-4 text-base font-bold text-foreground flex items-center gap-2">
            <span>Friday Evening Coffee &amp; The Horizon</span>
            <Sunset className="h-4 w-4 text-amber-500" />
          </h3>

          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            My absolute favorite weekly ritual: making my own coffee on a Friday evening, putting on some music on Spotify, and staring out at the horizon as the week winds down. It&apos;s pure peace, mindfulness, and the best way to reset.
          </p>

          <div className="mt-3.5 pt-3 border-t border-border/50 flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              ☕ Fresh Brew
            </span>
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              🎵 Spotify
            </span>
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              🌅 Horizon Watcher
            </span>
          </div>
        </motion.div>

        {/* Cricket & Badminton with Hostel Friends */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-card to-card p-5 transition-all hover:border-emerald-500/60 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <Trophy className="h-5 w-5" />
            </span>
            <Badge variant="secondary" className="text-[10px]">
              Hostel Squad
            </Badge>
          </div>

          <h3 className="mt-4 text-base font-bold text-foreground flex items-center gap-2">
            <span>Cricket &amp; Badminton with Friends</span>
            <span className="text-sm">🏏 🏸</span>
          </h3>

          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            When it comes to active sports, nothing beats heading out to the ground with my hostel friends! Whether it&apos;s a high-stakes cricket chase under the floodlights or fast-paced badminton rallies, it&apos;s where the best banter and memories happen.
          </p>

          <div className="mt-3.5 pt-3 border-t border-border/50 flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              🏏 Cricket
            </span>
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              🏸 Badminton
            </span>
            <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-foreground">
              🤝 Hostel Life
            </span>
          </div>
        </motion.div>
      </div>

      {/* The Craziest Thing Done */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 via-card to-pink-500/10 p-5 text-center"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Bot className="h-7 w-7" />
        </div>
        <h4 className="mt-3 text-base font-bold text-foreground">
          The Craziest Thing I&apos;ve Done?
        </h4>
        <p className="mx-auto mt-2 max-w-lg text-xs leading-relaxed text-muted-foreground">
          I built an AI-native portfolio avatar of myself that answers visitors&apos; questions in real-time, renders custom interactive components on the fly, and even knows my coffee preferences and favorite sports better than my actual resume does!
        </p>
      </motion.div>
    </div>
  );
};

export default Crazy;