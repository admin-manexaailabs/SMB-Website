import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  MessageCircle,
  CheckCircle,
  X,
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageSquare,
  Bell,
  ArrowRight,
  Workflow,
  Bot,
  Inbox,
  BarChart3,
  Users,
  Tag,
  Zap,
  Clock,
  TrendingUp,
  UserCheck,
  AlertCircle,
  ArrowUpRight,
  History,
  Filter,
  Shield
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function CustomerSupportPage() {
  const [activeConversationStep, setActiveConversationStep] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);

  // Conversation lifecycle animation
  const conversationSteps = [
    { label: 'Customer question', message: 'How do I track my order?', icon: MessageCircle, color: 'blue' },
    { label: 'Instant reply', message: 'Let me check that for you!', icon: Bot, color: 'purple' },
    { label: 'Resolution', message: 'Your order is arriving today at 2PM', icon: CheckCircle, color: 'green' },
    { label: 'Feedback', message: 'Thank you for the quick help!', icon: MessageSquare, color: 'blue' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveConversationStep((prev) => (prev + 1) % conversationSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const escalationTimer = setInterval(() => {
      setShowEscalation((prev) => !prev);
    }, 4000);
    return () => clearInterval(escalationTimer);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Opening Context (Chaos → Control) */}
      <section className="pt-20 pb-20">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Solution
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Customer Support, Without the Overload
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Answer questions, resolve issues, and escalate only when needed — automatically, across every channel.
              </p>

              <Link to="/templates#support">
                <Button 
                  size="lg"
                  className="shadow-lg text-base px-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Support Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: Conversation Lifecycle Animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                    S
                  </div>
                  <div>
                    <h4 className="text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>Support Chat</h4>
                    <p className="text-xs text-gray-500">Live</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-600">Active</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {conversationSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className={`${idx % 2 === 0 ? 'mr-6' : 'ml-6'}`}
                    >
                      <motion.div
                        className={`p-3 rounded-xl ${
                          idx % 2 === 0 
                            ? 'bg-blue-50 border border-blue-200 rounded-bl-none' 
                            : 'bg-white border border-gray-200 rounded-br-none'
                        } transition-all duration-300`}
                        animate={{
                          scale: activeConversationStep === idx ? [1, 1.02, 1] : 1,
                          borderColor: activeConversationStep === idx 
                            ? (idx % 2 === 0 ? '#3B82F6' : '#9B51E0')
                            : (idx % 2 === 0 ? '#BFDBFE' : '#E5E7EB')
                        }}
                        transition={{
                          duration: 0.5
                        }}
                      >
                        <div className="flex items-start gap-2">
                          <div className={`w-6 h-6 rounded-lg ${
                            idx % 2 === 0 ? 'bg-blue-200' : `bg-${step.color}-100`
                          } flex items-center justify-center flex-shrink-0`}>
                            <step.icon className={`w-3 h-3 ${
                              idx % 2 === 0 ? 'text-blue-600' : `text-${step.color}-600`
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-500 mb-0.5">{step.label}</p>
                            <p className="text-sm text-gray-900">{step.message}</p>
                          </div>
                        </div>
                      </motion.div>
                      
                      {idx < conversationSteps.length - 1 && (
                        <div className="flex items-center justify-center py-1.5">
                          <ArrowRight className="w-3 h-3 text-gray-400" style={{ transform: 'rotate(90deg)' }} />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ What This Solves (Very Relatable) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Why customer support feels overwhelming
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                problem: 'Slow replies',
                solution: 'Instant responses',
                icon: Zap,
                color: 'yellow'
              },
              {
                problem: 'Repeated questions',
                solution: 'Automated answers',
                icon: Bot,
                color: 'purple'
              },
              {
                problem: 'Missed messages',
                solution: 'One unified inbox',
                icon: Inbox,
                color: 'blue'
              },
              {
                problem: 'Burnt-out teams',
                solution: 'AI + human balance',
                icon: Users,
                color: 'green'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  {/* Problem */}
                  <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{item.problem}</span>
                  </div>

                  {/* Solution */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <span className="text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.solution}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Customer Support Experience (Customer POV) */}
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
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How customers get help
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                {[
                  { 
                    label: 'Starts message', 
                    icon: MessageCircle, 
                    sublabel: 'WhatsApp / Web / Email / DM / Call' 
                  },
                  { 
                    label: 'Gets instant response', 
                    icon: Zap, 
                    sublabel: 'AI-powered reply' 
                  },
                  { 
                    label: 'Issue resolved or escalated', 
                    icon: CheckCircle, 
                    sublabel: 'Complete or human takeover' 
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-4 border border-gray-200">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-sm max-w-[160px] mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-500 max-w-[160px]">{step.sublabel}</span>
                    
                    {idx < 2 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute" style={{ left: 'calc(100% + 1rem)', top: '35px' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center pt-6 border-t border-blue-200"
              >
                <p className="text-lg text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Customers don't wait. They get answers.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ How Support Actually Runs (Business POV) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How support works behind the scenes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Bot, label: 'AI answers common questions', color: 'purple' },
                { icon: MessageSquare, label: 'Context-aware replies', color: 'blue' },
                { icon: Tag, label: 'Automatic tagging & routing', color: 'orange' },
                { icon: UserCheck, label: 'Human takeover when needed', color: 'green' },
                { icon: History, label: 'Conversation history preserved', color: 'gray' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow text-center h-full">
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                AI handles volume. Humans handle exceptions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Channels That Power Support */}
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
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Support across all channels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: MessageCircle,
                name: 'WhatsApp',
                description: 'High-volume support',
                color: 'green'
              },
              {
                icon: Instagram,
                name: 'Instagram & Facebook',
                description: 'DM inquiries',
                color: 'pink'
              },
              {
                icon: Mail,
                name: 'Email',
                description: 'Structured support threads',
                color: 'red'
              },
              {
                icon: MessageSquare,
                name: 'Webchat',
                description: 'Website visitors',
                color: 'blue'
              },
              {
                icon: Phone,
                name: 'Phone',
                description: 'Call-based support',
                color: 'purple'
              },
              {
                icon: MessageSquare,
                name: 'SMS',
                description: 'Short, urgent updates',
                color: 'orange'
              }
            ].map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all h-full">
                  <div className={`w-12 h-12 rounded-xl bg-${channel.color}-100 flex items-center justify-center mb-4`}>
                    <channel.icon className={`w-6 h-6 text-${channel.color}-600`} />
                  </div>
                  
                  <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {channel.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {channel.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Customers choose the channel. Support stays consistent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Escalation, Not Replacement */}
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
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              AI when possible. Humans when necessary.
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              <div className="space-y-6">
                {/* AI Responding */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-none p-4 border border-gray-200">
                    <p className="text-sm text-gray-700 mb-2">I can help you with that! Let me pull up your account details...</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Bot className="w-3 h-3" />
                      <span>AI Assistant</span>
                      <span className="ml-auto">Responding instantly</span>
                    </div>
                  </div>
                </motion.div>

                {/* Escalation Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: showEscalation ? 1 : 0.3,
                    scale: showEscalation ? 1 : 0.95
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center py-4"
                >
                  <div className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all ${
                    showEscalation 
                      ? 'bg-orange-50 border-orange-300' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <AlertCircle className={`w-5 h-5 ${
                      showEscalation ? 'text-orange-600' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm ${
                      showEscalation ? 'text-orange-900' : 'text-gray-500'
                    }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {showEscalation ? 'Escalating to human...' : 'Monitoring conversation'}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${
                      showEscalation ? 'text-orange-600' : 'text-gray-400'
                    }`} />
                  </div>
                </motion.div>

                {/* Human Takes Over */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-1 bg-blue-50 rounded-2xl rounded-tr-none p-4 border border-blue-200">
                    <p className="text-sm text-gray-700 mb-2">Hi! I'm Sarah from the support team. I can help you with this special request.</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <UserCheck className="w-3 h-3" />
                      <span>Sarah • Support Team</span>
                      <span className="ml-auto">Human support</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                You stay in control. AI never goes rogue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Built for Growing Support Needs */}
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
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Support that scales with you
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, label: 'Handles spikes automatically', color: 'blue' },
              { icon: Shield, label: 'Consistent replies at scale', color: 'purple' },
              { icon: Clock, label: 'Works 24/7', color: 'green' },
              { icon: Users, label: 'No extra headcount', color: 'orange' }
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all h-full text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-${highlight.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className={`w-8 h-8 text-${highlight.color}-600`} />
                  </div>
                  
                  <h3 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {highlight.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Powered by SMB Flow (Platform Tie-In) */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Customer support is powered by:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="text-sm">AI Agents</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Inbox className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Unified Inbox</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="text-sm">Channels</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <BarChart3 className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Analytics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ Soft CTA */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-12 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Give customers better support — without adding staff
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/templates#support">
                <Button 
                  size="lg"
                  className="text-base px-10 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Support Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/templates#support">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-10 border-2 border-gray-300 rounded-full hover:bg-gray-50"
                >
                  See Support Templates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}