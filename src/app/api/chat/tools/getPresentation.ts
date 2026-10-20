import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Monish D. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "Here is a little bit about me, you can see it above!",
    };
  },
});