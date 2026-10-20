import { tool } from 'ai';
import { z } from 'zod';

export const getOthers = tool({
  description:
    'This tool shows Monish\'s other highlights, including all 5 verified certificates, sports (Cricket and Badminton with hostel friends), Friday coffee ritual, resume, and personal milestones.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here is the Others section containing my verified certificates (Deep Learning, Scalable RAG, ML with Scikit-Learn, SEO, Social Media Management), sports & fun rituals (Cricket, Badminton, Friday coffee & horizon), resume, and origin story!';
  },
});
