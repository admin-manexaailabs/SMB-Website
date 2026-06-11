import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { 
  Users, 
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
  ShoppingCart,
  MessageSquare,
  Settings,
  Activity,
  Bell,
  Send,
  Target,
  Phone,
  Globe,
  AlertCircle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Layers,
  Languages,
  UserCheck,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function SupportAgentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTicket, setActiveTicket] = useState(0);

  // FAQ Data
  const faqs = [
    {
      question: "What is a Support Agent?",
      answer: "A Support Agent is an AI-powered customer support teammate that automatically handles customer questions, complaints, and support requests across all channels — chat, email, voice, WhatsApp, and web. It resolves issues instantly when possible and escalates to your team only when needed."
    },
    {
      question: "How is it different from Chat Agents?",
      answer: "Chat Agents focus on conversations and engagement, while Support Agents are specifically designed for issue resolution and customer support workflows. Support Agents include ticket management, smart escalation, priority routing, and support-specific features like issue tracking and resolution confirmation."
    },
    {
      question: "Can it escalate to humans?",
      answer: "Yes! Support Agents intelligently detect when an issue requires human attention and seamlessly escalate to the right team member. They provide full conversation context, priority level, and issue summary to ensure smooth handoffs."
    },
    {
      question: "Which channels are supported?",
      answer: "Support Agents work across all customer communication channels: WhatsApp, SMS, Email, Web Chat, Instagram DMs, Facebook Messenger, and Voice. One agent handles support requests from all channels with consistent quality."
    },
    {
      question: "How does it learn from past conversations?",
      answer: "Support Agents continuously improve by analyzing resolved tickets, customer feedback, and successful resolutions. Every conversation is logged, tagged, and used to enhance future responses — making your agent smarter over time."
    },
    {
      question: "Can it handle multiple languages?",
      answer: "Yes! Support Agents can communicate in multiple languages automatically, detecting the customer's language and responding appropriately. This ensures consistent support quality for your global customer base."
    }
  ];

  // Support ticket states animation
  const ticketStates = [
    { status: 'Open', color: 'blue', icon: AlertCircle, label: 'New support request' },
    { status: 'In Progress', color: 'purple', icon: Activity, label: 'Agent analyzing issue' },
    { status: 'Resolved', color: 'green', icon: CheckCircle2, label: 'Issue resolved automatically' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTicket((prev) => (prev + 1) % ticketStates.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full mb-6 shadow-sm">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Support Agent
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Resolve Customer Issues Instantly
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Handle customer questions, complaints, and support requests automatically — across chat, email, voice, and messaging channels.
              </p>

              {/* Trust Metrics */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">24/7 availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">Multi-channel support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">Human handoff when needed</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="shadow-lg shadow-green-500/30 text-base px-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                    }}
                  >
                    Create Support Agent
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

            {/* Right: Hero Visual - Support Inbox UI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-4">
                  {ticketStates.map((ticket, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        scale: activeTicket === idx ? 1.02 : 1
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: idx * 0.1,
                        scale: { duration: 0.3 }
                      }}
                      className={`relative bg-white rounded-2xl p-6 border-2 ${
                        activeTicket === idx ? `border-${ticket.color}-400` : 'border-gray-200'
                      } shadow-sm transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-${ticket.color}-100 flex items-center justify-center`}>
                            <ticket.icon className={`w-5 h-5 text-${ticket.color}-600`} />
                          </div>
                          <div>
                            <h4 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              Ticket #{1000 + idx}
                            </h4>
                            <p className="text-xs text-gray-500">{ticket.label}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs bg-${ticket.color}-100 text-${ticket.color}-700`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {ticket.status}
                        </span>
                      </div>

                      {activeTicket === idx && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2.5 }}
                          className={`h-1 bg-${ticket.color}-200 rounded-full mt-3`}
                        >
                          <motion.div
                            className={`h-full bg-${ticket.color}-500 rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2.5 }}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Stats Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl"
                  animate={{
                    y: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-white text-center">
                    <div className="text-2xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>98%</div>
                    <div className="text-xs opacity-90">Resolved</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ How Support Agents Work */}
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
              How Support Agents Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to automate customer support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                icon: Bell,
                title: 'Receive Requests',
                description: 'Customer messages arrive from chat, WhatsApp, email, voice, or web',
                color: 'blue'
              },
              {
                step: '2',
                icon: Target,
                title: 'Understand the Issue',
                description: 'Agent identifies intent, urgency, and context automatically',
                color: 'purple'
              },
              {
                step: '3',
                icon: CheckCircle,
                title: 'Resolve or Route',
                description: 'Agent answers instantly or escalates to the right team',
                color: 'green'
              },
              {
                step: '4',
                icon: Database,
                title: 'Close & Learn',
                description: 'Conversations are logged, tagged, and improved over time',
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

      {/* 3️⃣ Powerful Features of Support Agents */}
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
              Powerful Features of Support Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'Instant Issue Resolution',
                description: 'Answer FAQs, order questions, appointment queries, and policy questions',
                features: ['Context-aware responses', 'Multi-language support', 'Brand-trained replies'],
                color: 'green'
              },
              {
                icon: UserCheck,
                title: 'Smart Escalation',
                description: 'Escalate only when needed',
                features: ['Priority-based routing', 'Human handoff', 'Internal notifications'],
                color: 'purple'
              },
              {
                icon: Globe,
                title: 'Unified Support Experience',
                description: 'One agent across all channels',
                features: ['Chat', 'WhatsApp', 'Email', 'Voice', 'Web'],
                color: 'blue'
              },
              {
                icon: TrendingUp,
                title: 'Scales with Your Business',
                description: 'Built for high-volume support',
                features: ['Thousands of conversations', 'Consistent responses', 'No downtime'],
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

      {/* 4️⃣ What Your Support Agent Can Do */}
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
              What Your Support Agent Can Do
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Answer customer questions',
                description: 'Instant responses to common inquiries'
              },
              {
                icon: CheckCircle2,
                title: 'Resolve common issues',
                description: 'Handle routine problems automatically'
              },
              {
                icon: BarChart3,
                title: 'Track and update ticket status',
                description: 'Real-time issue tracking and updates'
              },
              {
                icon: Target,
                title: 'Route complex cases',
                description: 'Smart escalation to the right team'
              },
              {
                icon: Send,
                title: 'Send follow-ups',
                description: 'Proactive customer communication'
              },
              {
                icon: ThumbsUp,
                title: 'Collect feedback',
                description: 'Gather insights and satisfaction scores'
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <capability.icon className="w-6 h-6 text-green-600" />
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
                description: 'Reduce support workload, respond faster'
              },
              {
                icon: ShoppingCart,
                title: 'E-commerce',
                description: 'Order support, returns, product questions'
              },
              {
                icon: Activity,
                title: 'Healthcare',
                description: 'Patient inquiries, appointment support'
              },
              {
                icon: ShoppingCart,
                title: 'Restaurants',
                description: 'Reservations, menu questions, delivery'
              },
              {
                icon: Settings,
                title: 'Local Services',
                description: 'Service inquiries, booking support'
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
              See Support Agents in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how a support request flows from complaint to resolution
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
                  { label: 'Customer complaint', icon: AlertCircle, color: 'red' },
                  { label: 'Issue identified', icon: Target, color: 'purple' },
                  { label: 'Instant reply', icon: MessageCircle, color: 'blue' },
                  { label: 'Escalation (if needed)', icon: UserCheck, color: 'orange' },
                  { label: 'Resolution confirmation', icon: CheckCircle2, color: 'green' }
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

      {/* 7️⃣ Why SMBs Love Support Agents */}
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
              Why SMBs Love Support Agents
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Our response time went from hours to seconds. Customers are happier and our team has more time for complex issues.",
                author: "Emily Rodriguez",
                role: "Customer Success Manager",
                company: "TechFlow Solutions"
              },
              {
                quote: "Support Agents resolved 85% of tickets automatically. The pressure on our team dropped significantly.",
                author: "James Wu",
                role: "Operations Director",
                company: "Urban Wellness Spa"
              },
              {
                quote: "We handle 3x more support requests with the same team size. The ROI was immediate.",
                author: "Maria Santos",
                role: "Owner",
                company: "Santos E-commerce"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 shadow-sm h-full">
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
              Ready to Upgrade Your Customer Support?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let AI Support Agents handle customer issues — while your team focuses on what matters.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-50 shadow-2xl text-base px-10 rounded-full"
                >
                  Create Support Agent
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
                        initial={{ height: 0 }}
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