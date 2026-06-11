import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { 
  Zap, 
  Calendar, 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Database,
  ChevronDown,
  Star,
  TrendingUp,
  Clock,
  Users,
  ShoppingCart,
  MessageSquare,
  Settings,
  Activity,
  Bell,
  RefreshCw,
  Send,
  Target,
  Radio,
  GitBranch,
  Layers,
  Phone,
  Globe
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function AutomationAgentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // FAQ Data
  const faqs = [
    {
      question: "What is an Automation Agent?",
      answer: "An Automation Agent is a task-execution agent that automatically runs repetitive, time-based, and rule-based operations without human intervention. It handles follow-ups, reminders, status updates, data syncing, and internal workflows — all on autopilot."
    },
    {
      question: "How is it different from Workflow Agents?",
      answer: "Workflow Agents orchestrate complex multi-step processes with decision logic, while Automation Agents focus on executing specific tasks automatically based on triggers and schedules. Think of Workflow Agents as the brain coordinating processes, and Automation Agents as the hands executing repetitive actions."
    },
    {
      question: "Can it work across channels?",
      answer: "Yes! Automation Agents can send messages and notifications across WhatsApp, Email, SMS, Voice, Web Chat, and integrate with your internal tools and systems. One automation can trigger actions across multiple channels simultaneously."
    },
    {
      question: "Is coding required?",
      answer: "No coding required! Our visual no-code builder lets you set up automation triggers, configure actions, and define schedules through a simple interface. Just point, click, and your automations are live."
    },
    {
      question: "What can trigger an automation?",
      answer: "Automations can be triggered by: scheduled times/dates, incoming events (messages, form submissions), data changes in connected systems, API calls from external tools, or manually when needed."
    },
    {
      question: "How reliable is automated execution?",
      answer: "Automation Agents run on enterprise-grade infrastructure with 99.9% uptime. They execute tasks reliably at scale with real-time monitoring, automatic retries on failures, and detailed execution logs for full visibility."
    }
  ];

  // Timeline animation steps
  const timelineSteps = [
    { label: 'Trigger', color: 'blue', icon: Zap },
    { label: 'Delay', color: 'purple', icon: Clock },
    { label: 'Action', color: 'orange', icon: Target },
    { label: 'Update', color: 'green', icon: Database },
    { label: 'Notify', color: 'indigo', icon: Bell }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % timelineSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full mb-6 shadow-sm">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Automation Agent
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Run Tasks Automatically, 24/7
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Automate repetitive business actions like follow-ups, reminders, updates, and workflows — without human intervention.
              </p>

              {/* Trust Metrics */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">No-code setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">Event & schedule driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm text-gray-700">Scales to millions of tasks</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="shadow-lg shadow-blue-500/30 text-base px-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                    }}
                  >
                    Create Automation Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-8 border-2 border-gray-300 rounded-full hover:bg-gray-50"
                  onClick={() => toast.info("Coming soon!")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Right: Hero Visual - Automation Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-6">
                  {timelineSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: currentStep === idx ? 1.05 : 1
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: idx * 0.1,
                        scale: { duration: 0.3 }
                      }}
                      className="relative"
                    >
                      <div className={`p-6 rounded-2xl bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 shadow-lg ${
                        currentStep === idx ? 'ring-4 ring-white ring-offset-2' : ''
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              {step.label}
                            </h3>
                            {currentStep === idx && (
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 2 }}
                                className="h-1 bg-white/40 rounded-full mt-2"
                              >
                                <motion.div
                                  className="h-full bg-white rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: '100%' }}
                                  transition={{ duration: 2 }}
                                />
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection arrow */}
                      {idx < timelineSteps.length - 1 && (
                        <motion.div 
                          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-400"
                          style={{ top: '100%' }}
                          animate={{
                            opacity: currentStep === idx ? [0.5, 1, 0.5] : 0.5
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center gap-2 shadow-xl"
                  animate={{
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Running
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ How Automation Agents Work */}
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
              How Automation Agents Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to automate business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                icon: Zap,
                title: 'Define Trigger',
                description: 'Start automations from time, events, data updates, or API calls',
                color: 'blue'
              },
              {
                step: '2',
                icon: Settings,
                title: 'Configure Actions',
                description: 'Set what happens — send messages, update records, call APIs',
                color: 'purple'
              },
              {
                step: '3',
                icon: Activity,
                title: 'Run Automatically',
                description: 'Agents execute tasks reliably at scale, without manual effort',
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

      {/* 3️⃣ Powerful Features of Automation Agents */}
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
              Powerful Features of Automation Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Calendar,
                title: 'Event & Schedule Based Automation',
                description: 'Trigger actions based on time or system events',
                features: ['Scheduled tasks', 'Delayed actions', 'Conditional execution'],
                color: 'blue'
              },
              {
                icon: Layers,
                title: 'Multi-Action Execution',
                description: 'Run multiple actions from a single automation',
                features: ['Messages', 'Data updates', 'API calls', 'Notifications'],
                color: 'purple'
              },
              {
                icon: Globe,
                title: 'Works Across Channels',
                description: 'Automation runs across WhatsApp, Email, SMS, Voice, Web & Internal tools',
                features: ['One automation, many outputs'],
                color: 'green'
              },
              {
                icon: TrendingUp,
                title: 'Built to Scale',
                description: 'Designed for high-volume execution',
                features: ['Millions of tasks', 'Reliable delivery', 'Real-time monitoring'],
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

      {/* 4️⃣ What Your Automation Agent Can Do */}
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
              What Your Automation Agent Can Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Send,
                title: 'Send follow-up messages',
                description: 'Automatic follow-ups across all channels'
              },
              {
                icon: Bell,
                title: 'Trigger reminders & alerts',
                description: 'Timely notifications for you and your customers'
              },
              {
                icon: Database,
                title: 'Update CRM or databases',
                description: 'Keep your data fresh and synchronized'
              },
              {
                icon: Radio,
                title: 'Execute campaign actions',
                description: 'Launch campaigns and track responses'
              },
              {
                icon: RefreshCw,
                title: 'Sync data between tools',
                description: 'Bi-directional data synchronization'
              },
              {
                icon: GitBranch,
                title: 'Run internal workflows',
                description: 'Automate team tasks and approvals'
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-6 h-6 text-blue-600" />
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

      {/* 5️⃣ Perfect for Every Business */}
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
              Perfect for Every Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Users,
                title: 'Small Businesses',
                description: 'Automate customer follow-ups and appointment reminders'
              },
              {
                icon: Activity,
                title: 'Healthcare',
                description: 'Patient reminders, prescription alerts, and check-ins'
              },
              {
                icon: ShoppingCart,
                title: 'E-commerce',
                description: 'Order updates, shipping notifications, review requests'
              },
              {
                icon: Settings,
                title: 'Local Services',
                description: 'Booking confirmations, service reminders, feedback collection'
              },
              {
                icon: Users,
                title: 'Service Providers',
                description: 'Client communications, project updates, invoicing'
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
              See Automation Agents in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch a simple customer onboarding automation flow
            </p>
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
                  { label: 'Customer signup', icon: Users, color: 'blue' },
                  { label: 'Wait 1 day', icon: Clock, color: 'purple' },
                  { label: 'Send WhatsApp reminder', icon: MessageSquare, color: 'green' },
                  { label: 'Update CRM', icon: Database, color: 'orange' },
                  { label: 'Notify team', icon: Bell, color: 'indigo' }
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Why SMBs Love Automation Agents */}
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
              Why SMBs Love Automation Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Automation Agents eliminated 15 hours of manual follow-up work per week. It just runs perfectly.",
                author: "David Kim",
                role: "Owner",
                company: "Elite Fitness Studio"
              },
              {
                quote: "We never miss a reminder or follow-up anymore. Everything happens automatically and on time.",
                author: "Jennifer Martinez",
                role: "Operations Lead",
                company: "Martinez Dental Care"
              },
              {
                quote: "Our team focuses on real work now. Automation handles all the repetitive tasks flawlessly.",
                author: "Alex Thompson",
                role: "Founder",
                company: "Thompson Services"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm h-full">
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
              Ready to Automate Your Daily Operations?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let Automation Agents handle repetitive work — so your team can focus on growth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 shadow-2xl text-base px-10 rounded-full"
                >
                  Create Automation Agent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              
              <Link to="/templates">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-[#9B51E0] border-2 border-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-base px-10 rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  View Templates
                </Button>
              </Link>
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