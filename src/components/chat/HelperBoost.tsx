import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
import {
  Award,
  BriefcaseBusiness,
  BriefcaseIcon,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleEllipsis,
  CodeIcon,
  Compass,
  GraduationCapIcon,
  Laugh,
  Layers,
  MailIcon,
  PartyPopper,
  Sparkles,
  TrendingUp,
  UserRoundSearch,
  UserSearch,
} from 'lucide-react';
import { useState } from 'react';
import { Drawer } from 'vaul';

interface HelperBoostProps {
  submitQuery?: (query: string) => void;
  setInput?: (value: string) => void;
}

const questions = {
  Me: 'Who are you? I want to know more about you.',
  Experience: 'What is your work experience? Tell me about your internships and roles.',
  'Projects & Skills': 'What are your projects and skills? Show me your work, technical stack, and capabilities.',
  "Beside's Coding": "Tell me about what you do beside coding. Show me your growth, leadership, and non-coding achievements.",
  Others: 'What else can you share? Show me others, fun & sports, and additional highlights.',
  Contact:
    'How can I reach you? What kind of project would make you say "yes" immediately?',
};

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Experience', color: '#0284C7', icon: BriefcaseBusiness },
  { key: 'Projects & Skills', color: '#856ED9', icon: Layers },
  { key: "Beside's Coding", color: '#10B981', icon: TrendingUp },
  { key: 'Others', color: '#E07A5F', icon: Compass },
];

// Helper drawer data
const specialQuestions = [
  'What is your work experience at Wubble AI?',
  'What are your projects and skills?',
  'Where do you currently work?',
  'What do you do beside coding?',
  'Who are you?',
  'Can I see your resume?',
  'What certificates do you have?',
  'How can I reach you?',
  'What else can you share? Show me others, fun & sports, and additional highlights.',
];

const questionsByCategory = [
  {
    id: 'me',
    name: 'Me',
    icon: UserSearch,
    questions: [
      'Who are you?',
      'What are your passions?',
      'How did you get started in tech?',
      'Where do you see yourself in 5 years?',
    ],
  },
  {
    id: 'experience',
    name: 'Experience (MVP)',
    icon: BriefcaseIcon,
    questions: [
      'What is your work experience? Tell me about your internships and roles.',
      'Tell me about your role as AI Intern at Wubble AI',
      'What did you do during your research internship at IIT Mandi VIML Lab?',
      'What makes you a valuable team member?',
      'Where are you working now?',
      'Can I see your resume?',
    ],
  },
  {
    id: 'projects-skills',
    name: 'Projects & Skills',
    icon: CodeIcon,
    questions: [
      'What are your projects and skills? Show me your work, technical stack, and capabilities.',
      'What projects are you most proud of?',
      'Tell me about Continuum and Meridian',
      'What are your technical coding and GenAI skills?',
      'What are your beside coding growth and leadership skills?',
    ],
  },
  {
    id: 'besides-coding',
    name: "Beside's Coding",
    icon: TrendingUp,
    questions: [
      'What do you do beside coding?',
      'Tell me about your growth roles at Nexie.ai and Runable AI',
      'What are your non-coding projects and achievements?',
      'Tell me about your campus leadership at Techno VIT and Vibrance',
    ],
  },
  {
    id: 'others',
    name: 'Others & Fun',
    icon: Compass,
    questions: [
      'What else can you share? Show me others, fun & sports, and additional highlights.',
      'What are your hobbies, coffee ritual, and favorite sports?',
      'Can I see your certificates and credentials?',
      'Tell me about your background and personal milestones',
    ],
  },
  {
    id: 'contact',
    name: 'Contact & Future',
    icon: MailIcon,
    questions: [
      'How can I reach you?',
      "What kind of project would make you say 'yes' immediately?",
      'Where are you located?',
    ],
  },
];

// Animated Chevron component
const AnimatedChevron = () => {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0], // Subtle up and down motion
      }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      }}
      className="text-primary mb-1.5"
    >
      <ChevronUp size={16} />
    </motion.div>
  );
};

export default function HelperBoost({
  submitQuery,
  setInput,
}: HelperBoostProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const handleQuestionClick = (questionKey: string) => {
    if (submitQuery) {
      submitQuery(questions[questionKey as keyof typeof questions]);
    }
  };

  const handleDrawerQuestionClick = (question: string) => {
    if (submitQuery) {
      submitQuery(question);
    }
    setOpen(false);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Drawer.Root open={open} onOpenChange={setOpen}>
        <div className="w-full">
          {/* Toggle Button */}
          <div
            className={
              isVisible
                ? 'mb-2 flex justify-center'
                : 'mb-0 flex justify-center'
            }
          >
            <button
              onClick={toggleVisibility}
              className="flex items-center gap-1 px-3 py-1 font-mono text-xs text-[#71717A] dark:text-[#9A9A9A] transition-colors hover:text-foreground dark:hover:text-[#EDEDED]"
            >
              {isVisible ? (
                <>
                  <ChevronDown size={14} />
                  Hide quick questions
                </>
              ) : (
                <>
                  <ChevronUp size={14} />
                  Show quick questions
                </>
              )}
            </button>
          </div>

          {/* HelperBoost Content */}
          {isVisible && (
            <div className="w-full">
              <div
                className="flex w-full flex-wrap gap-1 md:gap-3"
                style={{ justifyContent: 'safe center' }}
              >
                {questionConfig.map(({ key, color, icon: Icon }) => (
                <Button
                  key={key}
                  onClick={() => handleQuestionClick(key)}
                  variant="outline"
                  className="border border-border/80 hover:bg-accent h-auto min-w-[100px] flex-shrink-0 cursor-pointer rounded-xl bg-card/80 px-4 py-3 shadow-none backdrop-blur-sm transition-none active:scale-95"
                >
                  <div className="flex items-center gap-3 text-foreground dark:text-[#EDEDED]">
                    <Icon size={18} strokeWidth={2} color={color} />
                    <span className="font-sans text-xs sm:text-sm font-medium tracking-[0.02em]">{key}</span>
                  </div>
                </Button>
                ))}

                {/* Need Inspiration Button */}
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Drawer.Trigger className="group relative flex flex-shrink-0 items-center justify-center">
                      <motion.div
                        className="hover:bg-accent flex h-auto cursor-pointer items-center space-x-1 rounded-xl border border-border/80 bg-card/80 px-4 py-3 text-sm backdrop-blur-sm transition-all duration-200"
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3 text-foreground dark:text-[#EDEDED]">
                          <CircleEllipsis
                            className="h-[20px] w-[18px] text-primary"
                            strokeWidth={2}
                          />
                          {/* <span className="text-sm font-medium">More</span> */}
                        </div>
                      </motion.div>
                      </Drawer.Trigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <AnimatedChevron />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Content */}
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-100 bg-black/60 backdrop-blur-xs" />

          <Drawer.Content className="fixed right-0 bottom-0 left-0 z-100 mt-24 flex h-[80%] flex-col rounded-t-[10px] bg-background outline-none lg:h-[60%]">
            <div className="flex-1 overflow-y-auto rounded-t-[10px] bg-card p-4">
              <div className="mx-auto max-w-md space-y-4">
                <div
                  aria-hidden
                  className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted"
                />
                <div className="mx-auto w-full max-w-md">
                  <div className="space-y-8 pb-16">
                    {questionsByCategory.map((category) => (
                      <CategorySection
                        key={category.id}
                        name={category.name}
                        Icon={category.icon}
                        questions={category.questions}
                        onQuestionClick={handleDrawerQuestionClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

// Component for each category section
interface CategorySectionProps {
  name: string;
  Icon: React.ElementType;
  questions: string[];
  onQuestionClick: (question: string) => void;
}

function CategorySection({
  name,
  Icon,
  questions,
  onQuestionClick,
}: CategorySectionProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5 px-1">
        <Icon className="h-5 w-5 text-primary" />
        <Drawer.Title className="font-heading text-xl md:text-2xl font-semibold tracking-[-0.02em] text-foreground dark:text-[#EDEDED]">
          {name}
        </Drawer.Title>
      </div>

      <Separator className="my-4" />

      <div className="space-y-3">
        {questions.map((question, index) => (
          <QuestionItem
            key={index}
            question={question}
            onClick={() => onQuestionClick(question)}
            isSpecial={specialQuestions.includes(question)}
          />
        ))}
      </div>
    </div>
  );
}

// Component for each question item with animated chevron
interface QuestionItemProps {
  question: string;
  onClick: () => void;
  isSpecial: boolean;
}

function QuestionItem({ question, onClick, isSpecial }: QuestionItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className={cn(
        'flex w-full items-center justify-between rounded-xl',
        'px-5 py-3.5 text-left font-sans text-sm md:text-base font-normal tracking-[0.01em]',
        'transition-colors duration-200 border border-border/60',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        isSpecial
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'bg-card text-foreground dark:text-[#EDEDED] hover:bg-accent'
      )}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-2.5">
        {isSpecial && <Sparkles className="h-4 w-4 shrink-0" />}
        <span className={cn('leading-relaxed', isSpecial ? 'font-medium' : '')}>
          {question}
        </span>
      </div>
      <motion.div
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <ChevronRight
          className={cn(
            'h-5 w-5 shrink-0',
            isSpecial ? 'text-primary-foreground' : 'text-muted-foreground'
          )}
        />
      </motion.div>
    </motion.button>
  );
}