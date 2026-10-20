'use client';

import {
  ChatBubble,
  ChatBubbleMessage,
} from '@/components/ui/chat/chat-bubble';
import { ChatRequestOptions } from 'ai';
import { Message } from 'ai/react';
import { motion } from 'framer-motion';
import ChatMessageContent from './chat-message-content';
import ToolRenderer from './tool-renderer';

interface SimplifiedChatViewProps {
  message: Message;
  isLoading: boolean;
  reload: (
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
}

const MOTION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    duration: 0.3,
    ease: 'easeOut',
  },
};

export function SimplifiedChatView({
  message,
  isLoading,
  reload,
  addToolResult,
}: SimplifiedChatViewProps) {
  if (message.role !== 'assistant') return null;

  // Extract tool invocations from parts or top-level toolInvocations
  const toolInvocations =
    message.parts
      ?.filter((part) => part.type === 'tool-invocation' && Boolean(part.toolInvocation))
      .map((part) => (part.type === 'tool-invocation' ? part.toolInvocation : null))
      .filter(Boolean) || [];

  if (toolInvocations.length === 0 && Array.isArray((message as any).toolInvocations)) {
    toolInvocations.push(...(message as any).toolInvocations);
  }

  // Fallback: If model returned raw JSON tool call string instead of structured tool call
  if (toolInvocations.length === 0 && message.content) {
    const toolMatch = message.content.match(
      /"name"\s*:\s*"(getProjects|getPresentation|getResume|getContact|getSkills|getSports|getCrazy|getInternship|getCertificates|getOthers|getBesidesCoding|getEducation|getWeather)"/
    );
    if (toolMatch) {
      toolInvocations.push({
        toolCallId: `detected-${toolMatch[1]}`,
        toolName: toolMatch[1],
        args: {},
        state: 'result',
        result: 'Success',
      });
    }
  }

  // Only display the first tool (if any)
  const currentTool = toolInvocations.length > 0 ? [toolInvocations[0]] : [];
  const hasTools = currentTool.length > 0;

  // Clean raw JSON tool calls from text display if a tool was detected
  const isRawJsonToolString =
    hasTools &&
    message.content.trim().startsWith('{') &&
    message.content.includes('"name"') &&
    message.content.trim().endsWith('}');

  const displayMessage = isRawJsonToolString
    ? { ...message, content: '' }
    : message;

  const hasTextContent = displayMessage.content.trim().length > 0;

  console.log('currentTool', currentTool);

  return (
    <motion.div {...MOTION_CONFIG} className="flex h-full w-full flex-col px-4">
      {/* Single scrollable container for both tool and text content */}
      <div className="custom-scrollbar flex h-full w-full flex-col overflow-y-auto">
        {/* Tool invocation result - displayed at the top */}
        {hasTools && (
          <div className="mb-4 w-full">
            <ToolRenderer
              toolInvocations={currentTool}
              messageId={message.id || 'current-msg'}
            />
          </div>
        )}

        {/* Text content */}
        {hasTextContent && (
          <div className="w-full">
            <ChatBubble variant="received" className="w-full">
              <ChatBubbleMessage className="w-full">
                <ChatMessageContent
                  message={displayMessage}
                  isLast={true}
                  isLoading={isLoading}
                  reload={reload}
                  addToolResult={addToolResult}
                  skipToolRendering={true}
                />
              </ChatBubbleMessage>
            </ChatBubble>
          </div>
        )}

        {/* Add generous padding at the bottom so cards are never obscured by bottom bar */}
        <div className="pb-28 md:pb-36"></div>
      </div>
    </motion.div>
  );
}
