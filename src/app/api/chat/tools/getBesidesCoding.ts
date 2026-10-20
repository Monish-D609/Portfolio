import { tool } from 'ai';
import { z } from 'zod';

export const getBesidesCoding = tool({
  description:
    'Shows Monish\'s non-coding accomplishments, growth marketing leadership, affiliate traction at Runable AI ($21M Series A), Founding Head of Reddit Growth at Nexie.ai (AI ESP for Shopify), campus event management at Techno VIT & Vibrance, and business certifications.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here is the Beside\'s Coding section showcasing my growth leadership at Nexie.ai (1,000+ subreddit users in a month, affiliate platform), Runable AI (Awarded Best Affiliate, converted Europe/US paid subscribers), campus operations at Techno VIT & Vibrance, and growth engineering systems!';
  },
});
