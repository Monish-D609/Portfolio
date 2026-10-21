'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import { GithubButton } from '@/components/ui/github-button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleEllipsis,
  Laugh,
  Layers,
  Mail,
  TrendingUp,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle'; // Import the theme toggle

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Experience: 'What is your work experience? Tell me about your internships and roles.',
  'Projects & Skills': 'What are your projects and skills? Show me your work, technical stack, and capabilities.',
  "Beside's Coding": "Tell me about what you do beside coding. Show me your growth, leadership, and non-coding achievements.",
  Others: 'What else can you share? Show me others, fun & sports, and additional highlights.',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Experience', color: '#0284C7', icon: BriefcaseBusiness },
  { key: 'Projects & Skills', color: '#856ED9', icon: Layers },
  { key: "Beside's Coding", color: '#10B981', icon: TrendingUp },
  { key: 'Others', color: '#E07A5F', icon: CircleEllipsis },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);

  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Précharger les assets du chat en arrière-plan
    const img = new window.Image();
    img.src = '/monish-memoji.png';

    // Précharger les vidéos aussi
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload'; // Note: prefetch au lieu de preload
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">
      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Monish
        </div>
      </div>

      {/* Top right actions */}
      <div className="absolute top-6 right-8 z-20 flex items-center gap-2">
        <button
          suppressHydrationWarning
          onClick={() => goToChat('How can I contact you?')}
          className="flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-accent hover:text-primary"
        >
          <Mail className="h-3.5 w-3.5 text-primary" />
          <span>Contact</span>
        </button>
        <ThemeToggle />
        <GithubButton
          //targetStars={69}
          animationDuration={1.5}
          label="Star"
          size={'sm'}
          repoUrl="https://github.com/Monish-D609"
        />
      </div>

      <div className="absolute top-6 left-6 z-20">
        <button
          suppressHydrationWarning
          onClick={() => goToChat('Are you open to new opportunities?')}
          className="relative flex cursor-pointer items-center gap-2 rounded-full border bg-white/30 px-4 py-1.5 text-sm font-medium text-black shadow-md backdrop-blur-lg transition hover:bg-white/60 dark:border-white dark:text-white dark:hover:bg-neutral-800"
        >
          {/* Green pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          Looking for a talent?
        </button>
      </div>

      {/* header */}
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        variants={topElementVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="z-100">
          <WelcomeModal />
        </div>

        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Monish D 👋
        </h2>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          AI Portfolio
        </h1>
      </motion.div>

      {/* centre avatar */}
      <div className="relative z-10 h-60 w-60 sm:h-80 sm:w-80 flex items-center justify-center">
        <Image
          src="/monish-memoji.png"
          alt="Monish D 3D Memoji"
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* input + quick buttons */}
      <motion.div
        variants={bottomElementVariants}
        initial="hidden"
        animate="visible"
        className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0"
      >
        {/* free-form question */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) goToChat(input.trim());
          }}
          className="relative w-full max-w-lg"
        >
          <div className="mx-auto flex items-center rounded-full border border-neutral-300/80 bg-white/80 py-2.5 pr-2 pl-6 shadow-md backdrop-blur-lg transition-all hover:border-neutral-400/80 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 dark:border-neutral-700/90 dark:bg-neutral-800/90 dark:shadow-lg dark:shadow-black/50 dark:hover:border-neutral-600 dark:focus-within:border-primary/60 dark:focus-within:ring-primary/30">
            <input
              ref={inputRef}
              type="text"
              value={input}
              suppressHydrationWarning
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-base font-medium text-neutral-900 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-100 dark:placeholder:text-neutral-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              suppressHydrationWarning
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2.5 text-white shadow-sm transition-colors hover:bg-blue-600 disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* quick-question grid */}
        <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {questionConfig.map(({ key, color, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => goToChat(questions[key])}
              variant="outline"
              className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
                <Icon size={22} strokeWidth={2} color={color} />
                <span className="text-xs font-medium sm:text-sm">{key}</span>
              </div>
            </Button>
          ))}
        </div>
      </motion.div>
      <FluidCursor />
    </div>
  );
}
