'use client';
import { useChat } from '@ai-sdk/react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';

// Component imports
import ChatBottombar from '@/components/chat/chat-bottombar';
import ChatLanding from '@/components/chat/chat-landing';
import ChatMessageContent from '@/components/chat/chat-message-content';
import { SimplifiedChatView } from '@/components/chat/simple-chat-view';
import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import WelcomeModal from '@/components/welcome-modal';
import { Info, Mail } from 'lucide-react';
import { GithubButton } from '../ui/github-button';
import { ThemeToggle } from '../ui/ThemeToggle';
import HelperBoost from './HelperBoost';

// ClientOnly component for client-side rendering
//@ts-ignore
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

// Define Avatar component props interface
interface AvatarProps {
  hasActiveTool: boolean;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isTalking: boolean;
}

// Dynamic import of Avatar component
const Avatar = dynamic<AvatarProps>(
  () =>
    Promise.resolve(({ hasActiveTool, isTalking }: AvatarProps) => {
      return (
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            hasActiveTool ? 'h-20 w-20' : 'h-28 w-28'
          }`}
        >
          <div
            className={`relative cursor-pointer transition-all duration-300 ${
              isTalking
                ? 'scale-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse'
                : 'hover:scale-105 drop-shadow-lg'
            } ${hasActiveTool ? 'h-16 w-16' : 'h-24 w-24'}`}
            onClick={() => (window.location.href = '/')}
          >
            <img
              src="/monish-memoji.png"
              alt="Monish D 3D Avatar"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      );
    }),
  { ssr: false }
);

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

const Chat = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('query');
  const [autoSubmitted, setAutoSubmitted] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [isTalking, setIsTalking] = useState(false);

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    setMessages,
    setInput,
    reload,
    addToolResult,
    append,
  } = useChat({
    onResponse: (response) => {
      if (response) {
        setLoadingSubmit(false);
        setIsTalking(true);
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.error('Failed to play video:', error);
          });
        }
      }
    },
    onFinish: () => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    },
    onError: (error) => {
      setLoadingSubmit(false);
      setIsTalking(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
      console.error('Chat error:', error.message, error.cause);
      toast.error(`Error: ${error.message}`);
    },
    onToolCall: (tool) => {
      const toolName = tool.toolCall.toolName;
      console.log('Tool call:', toolName);
    },
  });

  const { currentAIMessage, latestUserMessage, hasActiveTool } = useMemo(() => {
    const latestAIMessageIndex = messages.findLastIndex(
      (m) => m.role === 'assistant'
    );
    const latestUserMessageIndex = messages.findLastIndex(
      (m) => m.role === 'user'
    );

    const result = {
      currentAIMessage:
        latestAIMessageIndex !== -1 ? messages[latestAIMessageIndex] : null,
      latestUserMessage:
        latestUserMessageIndex !== -1 ? messages[latestUserMessageIndex] : null,
      hasActiveTool: false,
    };

    if (result.currentAIMessage) {
      result.hasActiveTool =
        result.currentAIMessage.parts?.some(
          (part) =>
            part.type === 'tool-invocation' &&
            part.toolInvocation?.state === 'result'
        ) || false;
    }

    if (latestAIMessageIndex < latestUserMessageIndex) {
      result.currentAIMessage = null;
    }

    return result;
  }, [messages]);

  const isToolInProgress = messages.some(
    (m) =>
      m.role === 'assistant' &&
      m.parts?.some(
        (part) =>
          part.type === 'tool-invocation' &&
          part.toolInvocation?.state !== 'result'
      )
  );

  //@ts-ignore
  const submitQuery = (query) => {
    if (!query.trim() || isToolInProgress) return;
    setLoadingSubmit(true);
    append({
      role: 'user',
      content: query,
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      videoRef.current.pause();
    }

    if (initialQuery && !autoSubmitted) {
      setAutoSubmitted(true);
      setInput('');
      submitQuery(initialQuery);
    }
  }, [initialQuery, autoSubmitted]);

  useEffect(() => {
    if (videoRef.current) {
      if (isTalking) {
        videoRef.current.play().catch((error) => {
          console.error('Failed to play video:', error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isTalking]);

  //@ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isToolInProgress) return;
    submitQuery(input);
    setInput('');
  };

  const handleStop = () => {
    stop();
    setLoadingSubmit(false);
    setIsTalking(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Check if this is the initial empty state (no messages)
  const isEmptyState =
    !currentAIMessage && !latestUserMessage && !loadingSubmit;

  const submitContactQuery = () => {
    append({
      role: 'user',
      content: 'How can I contact you?',
    });
  };

  // Calculate header height based on hasActiveTool
  const headerHeight = hasActiveTool ? 100 : 180;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Top Left: Return to Home Screen (M Logo) */}
      <div className="absolute top-6 left-6 md:left-8 z-51">
        <Link
          href="/"
          className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-border bg-background/80 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:border-primary/40 hover:bg-accent hover:shadow-md"
          title="Return to Home Screen"
          aria-label="Home Screen"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-4 h-4 fill-current text-foreground transition-transform group-hover:scale-110 group-hover:text-primary"
            aria-hidden="true"
          >
            <path d="M16 82V20L50 54L84 20V82H70V40L50 60L30 40V82H16Z" />
          </svg>
        </Link>
      </div>

      <div className="absolute top-6 right-8 z-51 flex items-center justify-center gap-2">
        <button
          onClick={submitContactQuery}
          className="flex cursor-pointer items-center gap-1.5 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:border-primary/40 hover:bg-accent hover:text-primary"
        >
          <Mail className="h-3.5 w-3.5 text-primary" />
          <span>Contact</span>
        </button>
        <ThemeToggle />
        <WelcomeModal
          trigger={
            <div className="hover:bg-accent cursor-pointer rounded-2xl px-2.5 py-1.5">
              <Info className="text-accent-foreground h-5 w-5" />
            </div>
          }
        />
        <div className="">
          <GithubButton
            animationDuration={1.5}
            label="Star"
            size={'sm'}
            repoUrl="https://github.com/Monish-D609"
          />
        </div>
      </div>

      {/* Fixed Avatar Header with Gradient */}
      <div
        className="fixed top-0 right-0 left-0 z-50 bg-gradient-to-b from-white via-white/95 via-50% to-transparent dark:from-black dark:via-black/95 dark:via-50% dark:to-transparent"
      >
        <div
          className={`transition-all duration-300 ease-in-out ${hasActiveTool ? 'pt-6 pb-0' : 'py-6'}`}
        >
          <div className="flex justify-center">
            <ClientOnly>
              <Avatar
                hasActiveTool={hasActiveTool}
                videoRef={videoRef}
                isTalking={isTalking}
              />
            </ClientOnly>
          </div>

          <AnimatePresence>
            {latestUserMessage && !currentAIMessage && (
              <motion.div
                {...MOTION_CONFIG}
                className="mx-auto flex max-w-3xl px-4"
              >
                <ChatBubble variant="sent">
                  <ChatBubbleMessage>
                    <ChatMessageContent
                      message={latestUserMessage}
                      isLast={true}
                      isLoading={false}
                      reload={() => Promise.resolve(null)}
                    />
                  </ChatBubbleMessage>
                </ChatBubble>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto flex h-full max-w-3xl flex-col">
        {/* Scrollable Chat Content */}
        <div
          className="flex-1 overflow-y-auto px-2 pb-16"
          style={{ paddingTop: `${headerHeight}px` }}
        >
          <AnimatePresence mode="wait">
            {isEmptyState ? (
              <motion.div
                key="landing"
                className="flex min-h-full items-center justify-center"
                {...MOTION_CONFIG}
              >
                <ChatLanding submitQuery={submitQuery} />
              </motion.div>
            ) : currentAIMessage ? (
              <div className="pb-4">
                <SimplifiedChatView
                  message={currentAIMessage}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                />
              </div>
            ) : (
              loadingSubmit && (
                <motion.div
                  key="loading"
                  {...MOTION_CONFIG}
                  className="px-4 pt-18"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

{/* Fixed Bottom Bar */}
<div
  className="sticky bottom-0 px-2 pt-3 md:px-0 md:pb-4 transition-colors duration-300 bg-white dark:bg-black"
>
  <div className="relative flex flex-col items-center gap-3">
    <HelperBoost submitQuery={submitQuery} setInput={setInput} />
    <ChatBottombar
      input={input}
      handleInputChange={handleInputChange}
      handleSubmit={onSubmit}
      isLoading={isLoading}
      stop={handleStop}
      isToolInProgress={isToolInProgress}
    />
  </div>
</div>

        <a
          href="https://linkedin.com/in/monish-d07"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-3 bottom-0 z-10 mb-4 hidden cursor-pointer items-center gap-2 rounded-xl px-4 py-2 text-sm hover:underline md:block"
        >
          @monish-d
        </a>
      </div>
    </div>
  );
};

export default Chat;
