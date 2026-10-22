import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows Monish's employment status, internships, work experience, tech stack, and contact info. Use this tool when the user asks about his current role, work experience, internship, or employment status.",
  parameters: z.object({}),
  execute: async () => {
    return `Here is my experience and background 👇

- 🟢 **Current Status**: **Open to Work** — Actively seeking high-impact AI/ML engineering roles, agentic AI systems positions, and internships (available immediately)!
- 🔬 **Research Experience**: Research Intern at **IIT Mandi VIML Lab** (implemented Multimodal LLM-based Video Summarization with visual semantic understanding, Kendall’s τ = 0.253).
- 💻 **AI Web Development**: AI Web Development Intern at **InAmigos Foundation** (responsive web design, latency reduction, mobile optimization).
- 🚀 **Growth & Leadership**: Founding Head of Reddit Growth at **Nexie.ai** (scaled to 1,000+ active members in 30 days) and Best Affiliate Award winner at **Runable AI** ($21M Series A).
- 🛠️ **Core Tech Stack**: Agentic AI, FastAPI, OpenAPI, Python, PyTorch, LangChain, LangGraph, MCP, Docker, GKE, Cloud Run.
- 📬 **Reach me at**: monishpersonal609@gmail.com | LinkedIn: [monish-d07](https://www.linkedin.com/in/monish-d07/)
    `;
  },
});
