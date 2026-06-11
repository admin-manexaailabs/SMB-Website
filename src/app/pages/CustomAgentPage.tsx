import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { 
  Code, 
  ArrowRight, 
  Play,
  CheckCircle,
  ChevronDown,
  Star,
  Workflow,
  Database,
  Globe,
  Settings,
  Zap,
  GitBranch,
  Layers,
  TrendingUp,
  Users,
  Activity,
  Target,
  Network,
  Blocks,
  Puzzle,
  Wrench,
  BarChart3
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function CustomAgentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeNode, setActiveNode] = useState(0);

  // FAQ Data
  const faqs = [
    {
      question: "What is a Custom Agent?",
      answer: "A Custom Agent is an AI agent you build from scratch using visual building blocks — flows, logic, data, actions, and integrations. Unlike template-based agents, Custom Agents let you design exactly how the agent behaves, makes decisions, and responds across all channels."
    },
    {
      question: "How is it different from Workflow Agents?",
      answer: "Workflow Agents are pre-configured for specific multi-step automation patterns. Custom Agents give you complete control to build any logic, behavior, or workflow from the ground up — perfect when your use case doesn't fit existing templates."
    },
    {
      question: "Do I need coding skills?",
      answer: "No! Custom Agents are built using SMB Flow's visual Flow Builder. You configure logic, conditions, and actions using drag-and-drop blocks — no coding required. However, advanced users can add custom code if needed."
    },
    {
      question: "Can custom agents scale across channels?",
      answer: "Yes! Custom Agents work seamlessly across all channels — chat, email, voice, WhatsApp, SMS, web forms, and more. One agent, unlimited deployment flexibility."
    },
    {
      question: "What can I customize?",
      answer: "Everything! You control the agent's decision logic, conversation flows, data sources, integrations, response behavior, escalation rules, and channel deployment. Custom Agents adapt to your business, not the other way around."
    },
    {
      question: "How do Custom Agents handle complex workflows?",
      answer: "Custom Agents can combine multiple flows, conditional logic, data lookups, API calls, and multi-step processes into a single intelligent agent. They handle complex business rules and edge cases that template agents can't address."
    }
  ];

  // Flow animation nodes
  const flowNodes = [
    { label: 'Request', color: 'blue' },
    { label: 'Logic', color: 'purple' },
    { label: 'Data', color: 'green' },
    { label: 'Action', color: 'orange' },
    { label: 'Response', color: 'red' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % flowNodes.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6 shadow-sm">
                <Code className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Fully Custom AI Agents
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Custom Agents — Build Agents Exactly Your Way
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Create AI agents with your own logic, behavior, flows, and actions — fully tailored to how your business works.
              </p>

              {/* Trust Metrics */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Blocks className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">No-code configuration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Fully customizable logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">Scales across channels</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="shadow-lg shadow-purple-500/30 text-base px-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                    }}
                  >
                    Create Custom Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-[#9B51E0] border-2 border-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-base px-10 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  View Examples
                </Button>
              </div>
            </motion.div>

            {/* Right: Hero Visual - Canvas-Style Agent Builder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                {/* Flow Visualization */}
                <div className="space-y-6">
                  {flowNodes.map((node, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: activeNode === idx ? 1.05 : 1
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: idx * 0.1,
                        scale: { duration: 0.3 }
                      }}
                      className={`relative bg-white rounded-xl p-4 border-2 ${
                        activeNode === idx ? `border-${node.color}-400 shadow-lg` : 'border-gray-200'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-${node.color}-100 flex items-center justify-center`}>
                          {idx === 0 && <Target className={`w-5 h-5 text-${node.color}-600`} />}
                          {idx === 1 && <GitBranch className={`w-5 h-5 text-${node.color}-600`} />}
                          {idx === 2 && <Database className={`w-5 h-5 text-${node.color}-600`} />}
                          {idx === 3 && <Zap className={`w-5 h-5 text-${node.color}-600`} />}
                          {idx === 4 && <CheckCircle className={`w-5 h-5 text-${node.color}-600`} />}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {node.label}
                          </div>
                          <div className="text-xs text-gray-500">Custom logic node</div>
                        </div>
                        <div className={`w-2 h-2 rounded-full bg-${node.color}-500 ${activeNode === idx ? 'animate-pulse' : ''}`} />
                      </div>

                      {/* Connection Line */}
                      {idx < flowNodes.length - 1 && (
                        <div className="absolute left-9 -bottom-6 w-0.5 h-6 bg-gray-200" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-3 -right-3 px-3 py-2 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-xl"
                  animate={{
                    y: [-3, 3, -3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-white text-center">
                    <div className="text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>Custom Build</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ How Custom Agents Work */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How Custom Agents Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Design agents from scratch using building blocks that fit your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: Puzzle,
                title: 'Start from a Blank Agent',
                description: 'Create an agent without predefined behavior or limitations',
                color: 'blue'
              },
              {
                step: '2',
                icon: GitBranch,
                title: 'Define Logic & Behavior',
                description: 'Add flows, conditions, actions, and responses as needed',
                color: 'purple'
              },
              {
                step: '3',
                icon: Database,
                title: 'Connect Data & Tools',
                description: 'Use databases, files, APIs, and integrations inside the agent',
                color: 'green'
              },
              {
                step: '4',
                icon: Globe,
                title: 'Deploy Across Channels',
                description: 'Run the same custom agent on chat, email, voice, WhatsApp, and more',
                color: 'orange'
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group">
                  {/* Step Number Badge */}
                  <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-${step.color}-100 flex items-center justify-center`}>
                    <span className={`text-sm text-${step.color}-600`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.step}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 
                    className="text-xl mb-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Powerful Features of Custom Agents */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Powerful Features of Custom Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: 'Full Custom Control',
                description: 'Design agents without being limited to templates or presets.',
                features: ['Unlimited flexibility', 'Custom business rules', 'Unique workflows'],
                color: 'purple'
              },
              {
                icon: Workflow,
                title: 'Visual Flow Configuration',
                description: 'Build logic visually using the Flow Builder — no code required.',
                features: ['Drag-and-drop interface', 'Conditional branching', 'Real-time testing'],
                color: 'blue'
              },
              {
                icon: Database,
                title: 'Data-Driven Decisions',
                description: 'Use real-time data and knowledge to control agent behavior.',
                features: ['Live data connections', 'API integrations', 'Knowledge base access'],
                color: 'green'
              },
              {
                icon: Globe,
                title: 'Multi-Channel Ready',
                description: 'One custom agent works seamlessly across all supported channels.',
                features: ['Chat, email, voice', 'WhatsApp, SMS, web', 'Unified deployment'],
                color: 'orange'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 
                    className="text-2xl mb-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-500`} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ What Your Custom Agent Can Do */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              What Your Custom Agent Can Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Layers,
                title: 'Combine multiple agent behaviors into one',
                description: 'Unified intelligent system'
              },
              {
                icon: Network,
                title: 'Handle complex, unique workflows',
                description: 'Custom business processes'
              },
              {
                icon: GitBranch,
                title: 'Execute custom business rules',
                description: 'Your logic, your way'
              },
              {
                icon: TrendingUp,
                title: 'Adapt to evolving processes',
                description: 'Flexible and scalable'
              },
              {
                icon: Wrench,
                title: 'Replace multiple tools with one agent',
                description: 'Consolidated automation'
              },
              {
                icon: Activity,
                title: 'Build solutions templates can\'t handle',
                description: 'Unlimited possibilities'
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  
                  <h3 
                    className="text-lg mb-2" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {capability.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Perfect For Advanced & Unique Needs */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Perfect For Advanced & Unique Needs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Growing SMBs',
                description: 'When standard agents are not enough'
              },
              {
                icon: Users,
                title: 'Operations & Admin Teams',
                description: 'Automate internal processes and workflows'
              },
              {
                icon: GitBranch,
                title: 'Complex Customer Journeys',
                description: 'Build agents that follow real business logic'
              },
              {
                icon: Settings,
                title: 'Custom Business Models',
                description: 'Design agents that match how you operate'
              }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-7 h-7 text-gray-700" />
                  </div>
                  
                  <h3 
                    className="text-lg mb-2" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ See It in Action */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              See Custom Agents in Action
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {[
                  { label: 'Incoming request', icon: Target, color: 'blue' },
                  { label: 'Conditional logic', icon: GitBranch, color: 'purple' },
                  { label: 'Data lookup', icon: Database, color: 'green' },
                  { label: 'Multiple actions', icon: Zap, color: 'orange' },
                  { label: 'Channel response', icon: CheckCircle, color: 'red' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                    className="flex flex-col items-center relative"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center shadow-lg mb-3`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="text-sm text-center text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.label}
                    </span>
                    
                    {idx < 4 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute" style={{ left: 'calc(100% + 1rem)', top: '30px' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  One agent. Unlimited flexibility.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Why SMBs Choose Custom Agents */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Why SMBs Choose Custom Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "We finally built an agent that fits our exact process — no workarounds or compromises.",
                author: "Michael Chen",
                role: "Operations Director",
                company: "TechCore Solutions"
              },
              {
                quote: "No templates forced on us. We control everything and it works exactly the way we want.",
                author: "Sarah Martinez",
                role: "Founder",
                company: "Apex Consulting"
              },
              {
                quote: "Everything works the way we want. Custom Agents gave us the flexibility we needed.",
                author: "David Johnson",
                role: "COO",
                company: "StreamLine Services"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 shadow-sm h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <p className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Final CTA Section */}
      <section 
        className="py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
        }}
      >
        {/* Floating Orbs */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-6 text-white" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Build an Agent That Matches Your Business
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Design custom AI agents that adapt to your workflows — not the other way around.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 shadow-2xl text-base px-10 rounded-full"
                >
                  Create Custom Agent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              <Link to="/templates">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-[#9B51E0] border-2 border-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-base px-10 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  View Examples
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Blocks className="w-4 h-4" />
                <span>No-code</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span>Flexible</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/40" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Built for scale</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ FAQ Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span 
                      className="text-lg pr-8" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-gray-600 border-t border-gray-100">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}