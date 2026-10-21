import { tool } from 'ai';
import { z } from 'zod';

export const getOpportunities = tool({
  description:
    "Shows Monish's open invitation for new opportunities, roles, internships, collaborations, and startups. Use this tool when the user asks 'Are you open to new opportunities?', 'Looking for a talent?', if Monish is open to work, hiring inquiries, or looking for high-impact AI/ML talent.",
  parameters: z.object({}),
  execute: async () => {
    return `Looking for someone who gets things moving? 🚀

I build, solve problems, and turn ideas into things that work. If you're building something ambitious, let's see what we can make happen together.

- 🎯 **Internships**
- 💼 **Full-time opportunities**
- 🤝 **Interesting collaborations**
- 🚀 **Early-stage startups**

Have something in mind? Tell me what you're building—let's talk!`;
  },
});
