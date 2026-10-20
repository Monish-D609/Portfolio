import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool shows my resume online.',
  parameters: z.object({}),
  execute: async () => {
    return "You can view my resume online directly on Google Drive by clicking the card above: https://drive.google.com/file/d/1Xa0RcooQG9duH5mv4zHOCNlkXVfoz4HE/view?usp=drive_link";
  },
});
