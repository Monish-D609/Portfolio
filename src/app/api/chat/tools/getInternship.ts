import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows Monish's current employment, internships, work experience, tech stack, and contact info. Use this tool when the user asks about his current role, Wubble AI, work experience, internship, or job opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here is my current experience and background 👇

- 🚀 **Current Role**: **AI Intern** at **Wubble AI** (Singapore-based, remote internship)
  - *About Wubble.ai*: World's first B2B AI Music platform, backed by Antler, Google, and NVIDIA (Top 5 startup in Asia).
  - *Responsibilities*: Designing core agentic loops (planning, memory, tool integration), system-prompt engineering, building CLI tooling & micro-services, FastAPI/OpenAPI hardening, reproducible agent simulation testing rigs, and Docker/Cloud Run deployments.
- 🔬 **Research Experience**: Research Intern at **IIT Mandi VIML Lab** (implemented Multimodal LLM-based Video Summarization with visual semantic understanding, Kendall’s τ = 0.253).
- 💻 **AI Web Development**: AI Web Development Intern at **InAmigos Foundation** (responsive web design, latency reduction, mobile optimization).
- 🛠️ **Core Tech Stack**: Agentic AI, FastAPI, OpenAPI, Python, PyTorch, LangChain, LangGraph, MCP, Docker, GKE, Cloud Run.
- 📬 **Reach me at**: monishpersonal609@gmail.com | LinkedIn: [monish-d07](https://www.linkedin.com/in/monish-d07/)
    `;
  },
});
