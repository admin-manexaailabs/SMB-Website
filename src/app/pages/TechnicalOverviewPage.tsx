import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Layers,
  Bot,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  Server,
  Cpu,
  Database,
  GitBranch,
  TrendingUp,
  Shield,
  Workflow,
  BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/button';

export default function TechnicalOverviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1 key="slide1" />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />,
    <Slide5 key="slide5" />,
    <Slide6 key="slide6" />,
    <Slide7 key="slide7" />,
    <Slide8 key="slide8" />,
    <Slide9 key="slide9" />,
    <Slide10 key="slide10" />,
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Minimal Header - Only visible on hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-b border-white/10 z-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <div className="max-w-full mx-auto px-12 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <X className="w-5 h-5" />
            <span className="text-sm font-medium">Close</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <span className="text-sm text-white/70 font-mono">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            
            {/* Elegant Slide Dots */}
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-indigo-400 w-8' 
                      : 'bg-white/20 hover:bg-white/40 w-1.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="disabled:opacity-20 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="disabled:opacity-20 text-white/70 hover:text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Persistent Navigation Arrows - Always Visible */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <Button
          variant="ghost"
          size="lg"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="disabled:opacity-20 disabled:cursor-not-allowed bg-black/60 backdrop-blur-xl border border-white/20 text-white hover:bg-black/80 hover:border-white/40 hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full shadow-2xl"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      </div>

      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <Button
          variant="ghost"
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="disabled:opacity-20 disabled:cursor-not-allowed bg-black/60 backdrop-blur-xl border border-white/20 text-white hover:bg-black/80 hover:border-white/40 hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full shadow-2xl"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

      {/* Full Screen Slide Container */}
      <div className="h-screen w-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="h-full w-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle Keyboard Helper */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 text-xs text-white/60 shadow-2xl"
      >
        Use arrow keys to navigate
      </motion.div>
    </div>
  );
}

// SLIDE 1 — TITLE (Enhanced)
function Slide1() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-12 shadow-2xl shadow-indigo-500/50 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-3xl blur-xl opacity-50 animate-pulse" />
          <Layers className="w-16 h-16 text-white relative z-10" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-8xl font-extralight mb-8 text-white tracking-wider">
          SMB FLOW
        </h1>
        
        <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mx-auto mb-8" />
        
        <p className="text-4xl text-indigo-200 mb-6 font-light">
          Agentic AI for SMB Customer Operations
        </p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '12rem' }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto my-12"
        />
        
        <p className="text-2xl text-white/60 font-light tracking-wide">
          Build once. Deploy everywhere.
        </p>
      </motion.div>
    </div>
  );
}

// SLIDE 2 — THE PROBLEM (Enhanced)
function Slide2() {
  const problems = [
    { text: 'Customer conversations spread across chat, email, voice, and social', icon: MessageCircle },
    { text: 'Manual handling of repetitive workflows', icon: Workflow },
    { text: 'Missed after-hours inquiries and slow responses', icon: AlertCircle },
    { text: 'Existing tools are too technical, limited, or expensive', icon: TrendingUp }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-1 bg-red-500 rounded-full" />
            <span className="text-sm text-red-400 font-semibold uppercase tracking-widest">
              The Problem
            </span>
          </div>
          <h2 className="text-6xl font-extralight text-white leading-tight">
            Fragmented Customer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">
              Operations
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-5">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-rose-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start gap-5 p-6 bg-black/40 backdrop-blur-xl border border-red-500/30 rounded-2xl hover:border-red-500/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/30">
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-white/90 leading-relaxed pt-2">
                  {problem.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// SLIDE 3 — CORE IDEA (Enhanced with Better Diagram)
function Slide3() {
  const channels = [
    { icon: MessageCircle, label: 'Chat', color: 'from-green-500 to-emerald-600', position: 'top-0 left-1/2 -translate-x-1/2' },
    { icon: Phone, label: 'Voice', color: 'from-blue-500 to-cyan-600', position: 'top-1/4 right-0' },
    { icon: Mail, label: 'Email', color: 'from-red-500 to-rose-600', position: 'bottom-1/4 right-0' },
    { icon: Globe, label: 'Web', color: 'from-purple-500 to-violet-600', position: 'bottom-0 left-1/2 -translate-x-1/2' },
    { icon: Instagram, label: 'Social', color: 'from-pink-500 to-fuchsia-600', position: 'bottom-1/4 left-0' },
    { icon: Zap, label: 'API', color: 'from-amber-500 to-orange-600', position: 'top-1/4 left-0' },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-1 bg-indigo-500 rounded-full" />
            <span className="text-sm text-indigo-400 font-semibold uppercase tracking-widest">
              Core Idea
            </span>
          </div>
          <h2 className="text-6xl font-extralight text-white leading-tight mb-12">
            Agent-First
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Architecture
            </span>
          </h2>

          <div className="space-y-6">
            {[
              'AI agents are the core building block',
              'Agents are channel-agnostic and reusable',
              'Channels act as delivery layers, not logic containers'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl text-white/80 leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Enhanced Circular Diagram */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central Agent - Larger and More Prominent */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            className="absolute"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-60 animate-pulse" />
              {/* Main Container */}
              <div className="relative w-48 h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl">
                <Bot className="w-20 h-20 text-white mb-2" />
                <span className="text-white font-semibold text-lg">Agent Core</span>
              </div>
            </div>
          </motion.div>

          {/* Channels in Circle with Connection Lines */}
          {channels.map((channel, index) => {
            const angle = (index * 60) - 90; // Start from top
            const radius = 240;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: 'spring' }}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                }}
              >
                {/* Connection Line */}
                <svg className="absolute inset-0 pointer-events-none" style={{ width: '600px', height: '600px', left: '-250px', top: '-250px' }}>
                  <motion.line
                    x1="300"
                    y1="300"
                    x2={300 + x}
                    y2={300 + y}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(99, 102, 241, 0.5)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.5)" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Channel Node */}
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${channel.color} rounded-2xl flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-10 h-10 text-white mb-1" />
                    <span className="text-xs text-white font-semibold">{channel.label}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// SLIDE 4 — HOW AGENTS WORK (Enhanced Flow)
function Slide4() {
  const agentSteps = [
    { label: 'Input from chat, voice, or events', icon: MessageCircle, color: 'from-blue-500 to-cyan-600' },
    { label: 'Reasoning layer powered by LLMs', icon: Cpu, color: 'from-indigo-500 to-purple-600' },
    { label: 'Tool and API execution', icon: Zap, color: 'from-purple-500 to-pink-600' },
    { label: 'Short-term and long-term memory', icon: Database, color: 'from-pink-500 to-rose-600' },
    { label: 'Human fallback when confidence is low', icon: Users, color: 'from-orange-500 to-red-600' },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20 py-16">
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-16 h-1 bg-purple-500 rounded-full" />
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-widest">
              Architecture
            </span>
            <div className="w-16 h-1 bg-purple-500 rounded-full" />
          </div>
          <h2 className="text-4xl font-extralight text-white">
            Inside an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SMB FLOW Agent</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Flow Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 -translate-x-1/2 rounded-full" />

          <div className="space-y-5">
            {agentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`} />
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-4 hover:border-white/40 transition-all">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-11 h-11 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-base text-white/90 font-light flex-1">
                          {step.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Number Badge */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-900`}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// SLIDE 5 — EXAMPLE WORKFLOW (Enhanced)
function Slide5() {
  const workflowSteps = [
    { step: 'Capture inquiry', desc: 'Customer reaches out via any channel', icon: MessageCircle, color: 'from-blue-500 to-cyan-600' },
    { step: 'Ask qualifying questions', desc: 'Agent collects context and requirements', icon: GitBranch, color: 'from-indigo-500 to-purple-600' },
    { step: 'Detect urgency or intent', desc: 'LLM analyzes sentiment and priority', icon: Cpu, color: 'from-purple-500 to-pink-600' },
    { step: 'Route to human or auto-schedule', desc: 'Decision based on confidence threshold', icon: Calendar, color: 'from-pink-500 to-rose-600' },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-blue-500 rounded-full" />
            <span className="text-sm text-blue-400 font-semibold uppercase tracking-widest">
              Example Workflow
            </span>
            <div className="w-16 h-1 bg-blue-500 rounded-full" />
          </div>
          <h2 className="text-6xl font-extralight text-white">
            Lead Qualification <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">&</span> Scheduling
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-4 gap-6">
          {workflowSteps.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Connection Arrow */}
              {index < workflowSteps.length - 1 && (
                <div className="absolute top-24 -right-3 z-20">
                  <ArrowRight className="w-6 h-6 text-white/40" />
                </div>
              )}

              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${workflow.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${workflow.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl mx-auto`}>
                    <workflow.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white/60 font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {workflow.step}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-center text-sm">
                    {workflow.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm italic">
            Visual drag-and-drop flow canvas allows non-technical users to build this
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// SLIDE 6 — MULTI-CHANNEL DEPLOYMENT (Enhanced)
function Slide6() {
  const channels = [
    { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-emerald-600', stat: '2B+ users' },
    { name: 'Web Chat', icon: Globe, color: 'from-blue-500 to-cyan-600', stat: 'Universal' },
    { name: 'Email', icon: Mail, color: 'from-red-500 to-rose-600', stat: '4B+ users' },
    { name: 'SMS', icon: Phone, color: 'from-purple-500 to-violet-600', stat: '99% reach' },
    { name: 'Voice', icon: Phone, color: 'from-indigo-500 to-blue-600', stat: 'Real-time' },
    { name: 'Social', icon: Instagram, color: 'from-pink-500 to-fuchsia-600', stat: '3B+ users' },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-emerald-500 rounded-full" />
              <span className="text-sm text-emerald-400 font-semibold uppercase tracking-widest">
                Multi-Channel
              </span>
            </div>
            <h2 className="text-6xl font-extralight text-white leading-tight mb-12">
              Build Once,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Deploy Everywhere
              </span>
            </h2>

            <div className="space-y-6">
              {[
                'WhatsApp, Web Chat, Email, SMS, Voice, Social',
                'Same agent behavior across all channels',
                'Channel-specific adapters handle formatting and delivery'
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xl text-white/80 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - 3D-style Channel Grid */}
          <div className="relative">
            {/* Central Core with Orbiting Channels */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Center Agent */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
                className="absolute z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-3xl blur-2xl opacity-60 animate-pulse" />
                  <div className="relative w-40 h-40 bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl">
                    <Bot className="w-16 h-16 text-white mb-2" />
                    <span className="text-white font-semibold">Core Agent</span>
                  </div>
                </div>
              </motion.div>

              {/* Channels Grid */}
              <div className="grid grid-cols-3 gap-6 p-12">
                {channels.map((channel, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6, type: 'spring' }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity`} />
                    <div className={`relative bg-gradient-to-br ${channel.color} rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 h-32`}>
                      <channel.icon className="w-12 h-12 text-white mb-2" />
                      <span className="text-white font-semibold text-sm">{channel.name}</span>
                      <span className="text-white/60 text-xs mt-1">{channel.stat}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SLIDE 7 — HUMAN-IN-THE-LOOP (Enhanced)
function Slide7() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
            <span className="text-sm text-orange-400 font-semibold uppercase tracking-widest">
              Production Reality
            </span>
            <div className="w-16 h-1 bg-orange-500 rounded-full" />
          </div>
          <h2 className="text-6xl font-extralight text-white">
            Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Human-in-the-Loop</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Left - Features List */}
          <div className="col-span-1 space-y-4">
            {[
              { title: 'Confidence thresholds', icon: TrendingUp },
              { title: 'Sentiment triggers', icon: AlertCircle },
              { title: 'Seamless escalation', icon: ArrowRight },
              { title: 'Unified inbox', icon: Mail },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex items-center gap-3 hover:border-orange-400/60 transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-rose-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{item.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Large Diagram */}
          <div className="col-span-2 relative h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Flow Diagram */}
              <div className="flex items-center justify-center gap-12 w-full">
                {/* AI Agent */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-60" />
                  <div className="relative w-48 h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl">
                    <Bot className="w-20 h-20 text-white mb-3" />
                    <span className="text-white font-bold text-xl">AI Agent</span>
                    <span className="text-white/60 text-sm mt-1">Auto Mode</span>
                  </div>
                </motion.div>

                {/* Decision Flow */}
                <div className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="bg-black/60 backdrop-blur-xl border-2 border-dashed border-orange-400 rounded-2xl p-6 text-center"
                  >
                    <div className="text-orange-400 font-mono text-3xl mb-2">
                      &lt; 70%
                    </div>
                    <div className="text-white/60 text-sm">
                      Confidence Threshold
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="flex items-center gap-3 mt-6"
                  >
                    <ArrowRight className="w-8 h-8 text-orange-400" />
                    <div className="text-white/40 text-xs uppercase tracking-wider">
                      Escalate
                    </div>
                    <ArrowRight className="w-8 h-8 text-orange-400" />
                  </motion.div>
                </div>

                {/* Human Operator */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-600 rounded-3xl blur-2xl opacity-60" />
                  <div className="relative w-48 h-48 bg-gradient-to-br from-orange-500 via-rose-500 to-red-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl">
                    <Users className="w-20 h-20 text-white mb-3" />
                    <span className="text-white font-bold text-xl">Human</span>
                    <span className="text-white/60 text-sm mt-1">Operator</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SLIDE 8 — PRODUCT STATUS (Enhanced)
function Slide8() {
  const statusItems = [
    { item: 'High-fidelity UI and design system complete', status: 'complete', icon: Shield },
    { item: 'Visual agent builder implemented', status: 'complete', icon: Workflow },
    { item: 'Multi-channel architecture designed', status: 'complete', icon: Server },
    { item: 'MVP development in progress', status: 'progress', icon: TrendingUp },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      <div className="max-w-5xl w-full relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 h-0.5 bg-teal-500 rounded-full" />
            <span className="text-xs text-teal-400 font-semibold uppercase tracking-widest">
              Current Stage
            </span>
            <div className="w-12 h-0.5 bg-teal-500 rounded-full" />
          </div>
          <h2 className="text-4xl font-extralight text-white">
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Status</span>
          </h2>
        </motion.div>
        
        <div className="space-y-3 mb-6">
          {statusItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className={`absolute inset-0 ${
                item.status === 'complete' 
                  ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' 
                  : 'bg-gradient-to-r from-amber-500/20 to-orange-500/20'
              } rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`relative flex items-center justify-between p-4 rounded-xl border ${
                item.status === 'complete' 
                  ? 'bg-green-500/10 border-green-500/40 hover:border-green-500/60' 
                  : 'bg-amber-500/10 border-amber-500/40 hover:border-amber-500/60'
              } backdrop-blur-xl transition-all`}>
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 ${
                    item.status === 'complete'
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                      : 'bg-gradient-to-br from-amber-500 to-orange-600'
                  } rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-base text-white font-light">
                    {item.item}
                  </p>
                </div>
                
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold flex-shrink-0 ${
                  item.status === 'complete'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                }`}>
                  {item.status === 'complete' ? '✓ Complete' : '⟳ In Progress'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-60" />
          <div className="relative p-5 bg-black/40 backdrop-blur-xl border border-teal-500/40 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-teal-400 font-semibold text-sm mb-1">Next Milestone</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Beta launch with 5-10 pilot SMBs to validate agent workflows and multi-channel deployment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// SLIDE 9 — VISION (Enhanced)
function Slide9() {
  const visionItems = [
    { text: 'Deeper agent intelligence', icon: Cpu },
    { text: 'Advanced orchestration and analytics', icon: BarChart3 },
    { text: 'Multi-workspace scale for agencies', icon: Layers },
    { text: 'Becoming the default AI automation layer for SMBs', icon: TrendingUp }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 flex items-center justify-center relative overflow-hidden px-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-10 h-0.5 bg-violet-500 rounded-full" />
            <span className="text-xs text-violet-400 font-semibold uppercase tracking-widest">
              Vision
            </span>
            <div className="w-10 h-0.5 bg-violet-500 rounded-full" />
          </div>
          <h2 className="text-3xl font-extralight text-white">
            Where We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Going</span>
          </h2>
        </motion.div>
        
        <div className="space-y-2.5 mb-5">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-3 p-3 bg-black/40 backdrop-blur-xl border border-white/20 rounded-lg hover:border-violet-500/60 transition-all">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white/90 font-light leading-snug">
                    {item.text}
                  </p>
                </div>
                <div className="w-7 h-7 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white/40 font-bold text-xs">{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative p-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 rounded-xl shadow-2xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-white font-light leading-relaxed">
                SMB Flow becomes the <strong className="font-semibold">orchestration layer</strong> that connects AI reasoning, business tools, and customer channels — so SMBs can compete at enterprise scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// SLIDE 10 — CLOSE (Enhanced)
function Slide10() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-60 animate-pulse" />
            <div className="relative w-32 h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Layers className="w-16 h-16 text-white" />
            </div>
          </div>
        </motion.div>

        <h2 className="text-7xl font-extralight text-white mb-8">
          Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Architecture</span>
        </h2>
        
        <p className="text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
          If this aligns with what you're building, we're happy to walk through architecture decisions and explore how we can add engineering bandwidth.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 text-white text-xl px-16 py-8 rounded-2xl shadow-2xl shadow-indigo-500/50 border border-white/20"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Schedule a Technical Walkthrough
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '16rem' }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto my-16"
        />

        <div className="text-sm text-white/40 font-light tracking-wider">
          SMB FLOW — Agentic AI for SMB Customer Operations
        </div>
      </motion.div>
    </div>
  );
}