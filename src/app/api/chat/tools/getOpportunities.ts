import { tool } from 'ai';
import { z } from 'zod';

export const getOpportunities = tool({
  description:
    "Shows Monish's openness to new opportunities, target roles, location preferences, key technical skills, what he brings to a team, his goals, and contact CTA. Use this tool when the user asks 'Are you open to new opportunities?', 'Looking for a talent?', if Monish is open to work, hiring inquiries, or looking for high-impact AI/ML talent.",
  parameters: z.object({}),
  execute: async () => {
    return `Absolutely! I'm on the lookout for fresh challenges—especially production Agentic AI systems, Multimodal Deep Learning, and frontier AI engineering. 🚀

- **Status**: Available for AI/ML Engineer, Agentic AI, and Multimodal roles
- **Location**: Bangalore, India (Open to Relocate / Hybrid / Remote)
- **What I bring**: Production Agentic AI engineering at Wubble AI, Multimodal Deep Learning research at IIT Mandi, and high-velocity shipping across full-stack AI.
- **Contact**: monishpersonal609@gmail.com`;
  },
});
