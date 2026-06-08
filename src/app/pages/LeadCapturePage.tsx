import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Target,
  Zap,
  CheckCircle,
  X,
  MessageCircle,
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
  Clock,
  UserPlus,
  Filter,
  Tag,
  TrendingUp,
  MousePointer,
  Send,
  ThumbsUp,
  Home,
  Briefcase,
  Building,
  ShoppingBag,
  Stethoscope,
  DollarSign,
  FileText,
  AlertCircle,
  Users
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function LeadCapturePage() {
  const [activeLeadStep, setActiveLeadStep] = useState(0);
  const [activeFollowUp, setActiveFollowUp] = useState(0);

  // Lead journey animation
  const leadSteps = [
    { label: 'Visitor', icon: MousePointer, color: 'gray', message: 'Browsing website' },
    { label: 'Message / Form / Call', icon: MessageCircle, color: 'blue', message: 'I need pricing info' },
    { label: 'Lead created', icon: UserPlus, color: 'purple', message: 'Lead #1234 added' },
    { label: 'Follow-up sent', icon: Send, color: 'orange', message: 'Auto-reply sent' },
    { label: 'Conversion', icon: ThumbsUp, color: 'green', message: 'Lead qualified!' }
  ];

  // Follow-up timeline
  const followUpSteps = [
    { label: 'Lead captured', time: 'Day 1', icon: UserPlus },
    { label: 'Follow-up sent', time: '5 mins later', icon: Send },
    { label: 'Reminder triggered', time: 'Day 3', icon: Bell },
    { label: 'Escalation if no response', time: 'Day 7', icon: AlertCircle }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLeadStep((prev) => (prev + 1) % leadSteps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFollowUp((prev) => (prev + 1) % followUpSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Opening Context (Missed Leads → Controlled Pipeline) */}
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
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Solution
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Capture Every Lead. Follow Up Instantly.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Turn messages, forms, calls, and DMs into qualified leads — automatically, across every channel.
              </p>

              <Link to="/templates#leads">
                <Button 
                  size="lg"
                  className="shadow-lg text-base px-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Lead Capture
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: Lead Journey Animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-xl max-w-md mx-auto">
                <h3 className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Lead Journey
                </h3>
                
                <div className="space-y-3">
                  {leadSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="relative"
                    >
                      <motion.div
                        className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                          activeLeadStep === idx 
                            ? `border-${step.color}-400 bg-${step.color}-50 shadow-md` 
                            : 'border-gray-200 bg-white'
                        }`}
                        animate={{
                          scale: activeLeadStep === idx ? [1, 1.02, 1] : 1
                        }}
                        transition={{
                          duration: 0.5
                        }}
                      >
                        <motion.div 
                          className={`w-10 h-10 rounded-lg ${
                            activeLeadStep === idx 
                              ? `bg-${step.color}-500` 
                              : `bg-${step.color}-100`
                          } flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                          animate={{
                            rotate: activeLeadStep === idx ? [0, 5, -5, 0] : 0
                          }}
                          transition={{
                            duration: 0.5
                          }}
                        >
                          <step.icon className={`w-5 h-5 ${
                            activeLeadStep === idx ? 'text-white' : `text-${step.color}-600`
                          }`} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-sm mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {step.label}
                          </h4>
                          {activeLeadStep === idx && (
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-gray-600"
                            >
                              {step.message}
                            </motion.p>
                          )}
                        </div>

                        {activeLeadStep >= idx && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className={`w-4 h-4 text-${step.color}-500`} />
                          </motion.div>
                        )}
                      </motion.div>

                      {/* Arrow between steps */}
                      {idx < leadSteps.length - 1 && (
                        <div className="flex justify-center py-1.5">
                          <ArrowRight 
                            className={`w-3 h-3 transition-colors duration-300 ${
                              activeLeadStep > idx ? `text-${leadSteps[idx + 1].color}-400` : 'text-gray-300'
                            }`} 
                            style={{ transform: 'rotate(90deg)' }} 
                          />
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

      {/* 2️⃣ What This Solves (Pain, Very Direct) */}
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
              Why leads slip through the cracks
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: 'Missed enquiries',
                solution: 'Instant lead capture',
                icon: Target,
                color: 'red'
              },
              {
                problem: 'Late follow-ups',
                solution: 'Automated replies',
                icon: Zap,
                color: 'yellow'
              },
              {
                problem: 'Scattered leads',
                solution: 'One lead inbox',
                icon: Inbox,
                color: 'blue'
              },
              {
                problem: 'No tracking',
                solution: 'Clear lead status',
                icon: BarChart3,
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

      {/* 3️⃣ Where Leads Come From (Very Clear) */}
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
              Capture leads from everywhere
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Globe,
                name: 'Website forms & webchat',
                description: 'Instant form capture',
                color: 'blue'
              },
              {
                icon: MessageCircle,
                name: 'WhatsApp & messaging apps',
                description: 'Chat-based leads',
                color: 'green'
              },
              {
                icon: Instagram,
                name: 'Instagram & Facebook DMs',
                description: 'Social media enquiries',
                color: 'pink'
              },
              {
                icon: Phone,
                name: 'Phone calls',
                description: 'Voice call capture',
                color: 'purple'
              },
              {
                icon: Mail,
                name: 'Email enquiries',
                description: 'Inbox lead detection',
                color: 'red'
              },
              {
                icon: Send,
                name: 'Campaign responses',
                description: 'Marketing follow-ups',
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
              If someone shows interest, it becomes a lead.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Instant Responses That Convert */}
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
              Respond while interest is high
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                {[
                  { label: 'Lead arrives', icon: UserPlus, sublabel: 'New enquiry detected' },
                  { label: 'Instant reply sent', icon: Zap, sublabel: 'Within seconds' },
                  { label: 'Questions answered', icon: MessageSquare, sublabel: 'AI responds' },
                  { label: 'Next step suggested', icon: ArrowRight, sublabel: 'Book call / get quote' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg mb-4 border border-blue-200">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-sm max-w-[140px] mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-500">{step.sublabel}</span>
                    
                    {idx < 3 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute" style={{ left: 'calc(100% + 0.75rem)', top: '35px' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center pt-6 border-t border-gray-200"
              >
                <p className="text-lg text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Fast responses win deals. Automation makes it instant.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Lead Qualification (Without Manual Work) */}
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
              Automatically qualify your leads
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: MessageCircle, label: 'Ask follow-up questions', color: 'blue' },
                { icon: Filter, label: 'Capture intent & requirements', color: 'purple' },
                { icon: TrendingUp, label: 'Route high-value leads', color: 'green' },
                { icon: Tag, label: 'Tag and score leads', color: 'orange' }
              ].map((method, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow text-center h-full">
                    <div className={`w-12 h-12 rounded-xl bg-${method.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className={`w-6 h-6 text-${method.color}-600`} />
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {method.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Your team talks only to serious leads.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Smart Follow-Ups & Nurturing */}
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
              Never forget to follow up again
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
              {/* Timeline */}
              <div className="relative">
                {followUpSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative flex items-center gap-6 mb-12 last:mb-0"
                  >
                    {/* Timeline Line */}
                    {idx < followUpSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200" />
                    )}

                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-12 h-12 rounded-full ${
                        activeFollowUp === idx 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-gray-200'
                      } flex items-center justify-center shadow-lg flex-shrink-0 z-10 transition-all duration-300`}
                      animate={{
                        scale: activeFollowUp === idx ? [1, 1.15, 1] : 1
                      }}
                      transition={{
                        duration: 0.6
                      }}
                    >
                      <step.icon className={`w-6 h-6 ${
                        activeFollowUp === idx ? 'text-white' : 'text-gray-400'
                      }`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {step.label}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Consistent follow-ups, without chasing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Perfect for Lead-Driven Businesses */}
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
              Built for businesses that rely on enquiries
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Briefcase, label: 'Service businesses', color: 'blue' },
              { icon: Stethoscope, label: 'Clinics & consultants', color: 'red' },
              { icon: Building, label: 'Real estate & brokers', color: 'purple' },
              { icon: Home, label: 'Local businesses', color: 'green' },
              { icon: ShoppingBag, label: 'Online sellers', color: 'orange' }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all h-full text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-${industry.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`w-8 h-8 text-${industry.color}-600`} />
                  </div>
                  
                  <h3 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {industry.label}
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
              Lead capture works with:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="text-sm">AI Agents</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Workflow className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Automation & Workflows</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Inbox className="w-5 h-5 text-green-600" />
                <span className="text-sm">Unified Inbox</span>
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
              Stop losing leads before they respond
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/templates#leads">
                <Button 
                  size="lg"
                  className="text-base px-10 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Lead Capture
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/templates#leads">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-10 border-2 border-gray-300 rounded-full hover:bg-gray-50"
                >
                  See Lead Templates
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