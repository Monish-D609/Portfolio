
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Monish D",
  parameters: z.object({}),
  execute: async () => {
    return "Here are all my projects! Don't hesitate to ask me more about them!";
  },
});