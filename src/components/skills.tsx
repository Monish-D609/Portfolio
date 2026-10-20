'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, PenTool, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'Python',
        'R',
        'SQL',
        'JavaScript',
        'TypeScript',
        'C++',
        'Java',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'GenAI & Agentic AI',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'LLMs',
        'RAG (Retrieval-Augmented Generation)',
        'LLM Agents',
        'Vision-Language Models (VLM)',
        'Model Context Protocol (MCP)',
        'LangChain',
        'LangGraph',
        'Prompt Engineering',
        'Audio Engineering',
        'Multimodal Pipelines',
      ],
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    },
    {
      category: 'ML & Data Science',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Hugging Face Transformers',
        'scikit-learn',
        'NumPy',
        'Pandas',
        'Model Evaluation & Benchmarking',
        'XGBoost',
        'OpenCV',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'Backend, Frontend & Data Systems',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'FastAPI',
        'REST APIs',
        'React',
        'Next.js',
        'Node.js',
        'Supabase (PostgreSQL)',
        'MySQL',
      ],
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-200',
    },
    {
      category: 'Tools & DevOps',
      icon: <PenTool className="h-5 w-5" />,
      skills: [
        'Docker',
        'Git',
        'GitHub',
        'Linux',
        'Vite',
        'Tableau',
      ],
      color: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
    },
    {
      category: 'Core Foundations',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'System Design',
        'Multimodal AI Research',
        'Scientific Evaluation',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none bg-transparent px-0 pb-12 text-black shadow-none dark:text-white">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
