import { tool } from 'ai';
import { z } from 'zod';

export const getCertificates = tool({
  description:
    'This tool shows all of Monish\'s verified certificates and credentials from Google Drive.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here are my verified certifications in Deep Learning, Scalable RAG, Machine Learning with Scikit-Learn, SEO, and Social Media Marketing. You can view each one directly online or browse the full folder on Google Drive: https://drive.google.com/drive/folders/1gKqvhlMR5ASkN1-41gCcSnsK8R79X40V';
  },
});
