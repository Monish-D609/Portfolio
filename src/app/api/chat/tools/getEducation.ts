import { tool } from 'ai';
import { z } from 'zod';

export const getEducation = tool({
  description:
    'Displays Monish\'s verified academic degrees and education status: pre-final year B.Tech in CSE (Data Science) at VIT Chennai and concurrent B.S. in Data Science & Applications at IIT Madras. Use this whenever the user asks about education, college, university, degrees, or studies.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here is Monish\'s academic background: pre-final year B.Tech in CSE (Data Science) from VIT Chennai and concurrent B.S. in Data Science and Applications from IIT Madras. He is based in Bangalore.';
  },
});
