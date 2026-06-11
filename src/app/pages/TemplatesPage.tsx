import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { 
  MessageSquare,
  Phone,
  Mail,
  Globe,
  Instagram,
  ShoppingCart,
  Calendar,
  Users,
  Bot,
  Zap,
  ArrowRight,
  CheckCircle,
  Send,
  UserCheck,
  Package,
  Clock,
  Target,
  Sparkles,
  Workflow,
  Code,
  Edit3,
  Play,
  Lightbulb,
  Building2,
  Store,
  TrendingUp,
  FileText
  ,
  Truck,
  Plane,
  Wrench,
  Bell
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function TemplatesPage() {
  const [assemblyStep, setAssemblyStep] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeTemplate, setActiveTemplate] = useState(0);

  // Flow assembly nodes
  const flowNodes = [
    { label: 'Book', icon: Calendar, color: '#2F80ED' },
    { label: 'Track Order', icon: Package, color: '#9B51E0' },
    { label: 'Follow Up', icon: Send, color: '#F2994A' }
  ];

  // Template explanation cards
  const explanationCards = [
    {
      title: 'Intent',
      desc: 'What the customer wants to do',
      icon: Target,
      color: '#2F80ED'
    },
    {
      title: 'Logic',
      desc: 'How the agent decides and responds',
      icon: Workflow,
      color: '#9B51E0'
    },
    {
      title: 'Action',
      desc: 'What happens next automatically',
      icon: Zap,
      color: '#F2994A'
    }
  ];

  // Template types
  const templateTypes = [
    {
      group: 'Customer Conversations',
      color: '#2F80ED',
      templates: [
        { name: 'Chat Agent', icon: MessageSquare },
        { name: 'Support Agent', icon: UserCheck },
        { name: 'Voice Agent', icon: Phone }
      ]
    },
    {
      group: 'Growth & Revenue',
      color: '#10B981',
      templates: [
        { name: 'Lead Capture', icon: Target },
        { name: 'Follow-Up Agent', icon: Send },
        { name: 'Order Assistant', icon: ShoppingCart }
      ]
    },
    {
      group: 'Operations',
      color: '#9B51E0',
      templates: [
        { name: 'Booking Agent', icon: Calendar },
        { name: 'Scheduling', icon: Clock },
        { name: 'Email Automation', icon: Mail }
      ]
    }
    ,
    {
      group: 'Industry Templates',
      color: '#2F80ED',
      templates: [
        { name: 'Real Estate Lead Qualifier', icon: Building2, href: '/solutions/real-estate' },
        { name: 'Property Viewing Scheduler', icon: Calendar, href: '/solutions/real-estate' },
        { name: 'Student Enrollment Agent', icon: GraduationCap, href: '/solutions/education' },
        { name: 'Fee Reminder Campaign Agent', icon: Mail, href: '/solutions/education' },
        { name: 'Service Appointment Agent', icon: Calendar, href: '/solutions/automotive' },
        { name: 'Legal Client Intake Agent', icon: FileText, href: '/solutions/legal' },
        { name: 'Financial Consultation Booking Agent', icon: CheckCircle, href: '/solutions/financial' },
        { name: 'Home Job Booking Agent', icon: Wrench, href: '/solutions/home-services' },
        { name: 'Patient Appointment Agent', icon: Calendar, href: '/solutions/healthcare' },
        { name: 'Health Reminder Agent', icon: Bell, href: '/solutions/healthcare' },
        { name: 'Class Booking Agent', icon: Calendar, href: '/solutions/fitness' },
        { name: 'Member Re-Engagement Campaign', icon: Zap, href: '/solutions/fitness' },
        { name: 'Travel Inquiry Agent', icon: Plane, href: '/solutions/travel' },
        { name: 'Booking Confirmation Agent', icon: Send, href: '/solutions/travel' },
        { name: 'Event Registration Agent', icon: Calendar, href: '/solutions/events' },
        { name: 'Post-Event Follow-Up Agent', icon: Mail, href: '/solutions/events' },
        { name: 'Shipment Tracking Agent', icon: Truck, href: '/solutions/logistics' },
        { name: 'Dispatch Notification Agent', icon: Truck, href: '/solutions/logistics' }
      ]
    }
  ];

  // Real scenarios
  const scenarios = [
    {
      title: 'Appointment booking with reminders',
      customer: 'Book a haircut for tomorrow?',
      agent: 'Available at 2pm or 4pm. Which works?',
      action: 'Reminder sent 2h before'
    },
    {
      title: 'Order tracking with fallback to human',
      customer: 'Where is my order #1234?',
      agent: 'Your order is out for delivery',
      action: 'Escalates if issue detected'
    },
    {
      title: 'Support queries routed by intent',
      customer: 'How do I return this?',
      agent: 'I can help with that. Send me order number',
      action: 'Creates return ticket'
    },
    {
      title: 'Campaign follow-ups at scale',
      customer: 'What\'s this offer about?',
      agent: 'Get 20% off your next order',
      action: 'Tracks engagement automatically'
    }
  ];

  // Channels
  const channels = [
    { name: 'WhatsApp', icon: MessageSquare, color: '#25D366' },
    { name: 'Email', icon: Mail, color: '#6B7280' },
    { name: 'Voice', icon: Phone, color: '#9B51E0' },
    { name: 'Web Chat', icon: Globe, color: '#2F80ED' },
    { name: 'SMS', icon: MessageSquare, color: '#F2994A' },
    { name: 'Instagram', icon: Instagram, color: '#E1306C' }
  ];

  // Who templates are for
  const targetUsers = [
    { label: 'First-time builders', icon: Lightbulb, color: '#F2C94C' },
    { label: 'Busy SMB owners', icon: Store, color: '#2F80ED' },
    { label: 'Teams scaling fast', icon: TrendingUp, color: '#10B981' },
    { label: 'Anyone who hates starting from blank screens', icon: FileText, color: '#9B51E0' }
  ];

  // Animations
  useEffect(() => {
    const assemblyInterval = setInterval(() => {
      setAssemblyStep((prev) => (prev + 1) % flowNodes.length);
    }, 2500);
    return () => clearInterval(assemblyInterval);
  }, []);

  useEffect(() => {
    const cardInterval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % explanationCards.length);
    }, 3000);
    return () => clearInterval(cardInterval);
  }, []);

  useEffect(() => {
    const scenarioInterval = setInterval(() => {
      setActiveScenario((prev) => (prev + 1) % scenarios.length);
    }, 4000);
    return () => clearInterval(scenarioInterval);
  }, []);

  useEffect(() => {
    const templateInterval = setInterval(() => {
      setActiveTemplate((prev) => (prev + 1) % templateTypes.length);
    }, 3500);
    return () => clearInterval(templateInterval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section — Smart Hint */}
      <section className="pt-32 pb-24 overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Short, Intriguing Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 
                  className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Templates that Think Like Your Business
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Pre-built agent flows designed from real customer interactions — ready to adapt, not just deploy.
                </p>

                <Link to="#browse">
                  <Button 
                    size="lg"
                    className="shadow-lg text-base px-8 rounded-lg bg-blue-600 hover:bg-blue-700"
                  >
                    Browse Templates
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right: Animated Flow Fragments Assembling */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-96"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {flowNodes.map((node, idx) => {
                    const positions = [
                      { x: -100, y: -60 },
                      { x: 0, y: 0 },
                      { x: 100, y: -60 }
                    ];
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: idx <= assemblyStep ? 1 : 0.3,
                          scale: idx <= assemblyStep ? 1 : 0.9,
                          x: positions[idx].x,
                          y: positions[idx].y
                        }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute"
                      >
                        <div
                          className="w-32 h-32 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 bg-white shadow-lg"
                          style={{ 
                            borderColor: idx <= assemblyStep ? node.color : '#E5E7EB'
                          }}
                        >
                          <node.icon 
                            className="w-8 h-8"
                            style={{ color: idx <= assemblyStep ? node.color : '#9CA3AF' }}
                          />
                          <span 
                            className="text-sm"
                            style={{ 
                              fontFamily: 'DM Sans, sans-serif',
                              color: idx <= assemblyStep ? node.color : '#9CA3AF'
                            }}
                          >
                            {node.label}
                          </span>
                        </div>

                        {/* Connection lines */}
                        {idx < flowNodes.length - 1 && idx < assemblyStep && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute top-1/2 left-full w-20 h-0.5 origin-left"
                            style={{ 
                              backgroundColor: node.color,
                              transform: idx === 0 ? 'translateY(-50%) rotate(25deg)' : 'translateY(-50%) rotate(-25deg)'
                            }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ What Is a Template Here? */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {explanationCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: activeCard === idx ? -8 : 0,
                      scale: activeCard === idx ? 1.02 : 1
                    }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl p-8 border-2 h-full"
                    style={{
                      borderColor: activeCard === idx ? card.color : '#E5E7EB'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <card.icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>

                    <h3 
                      className="text-xl mb-3"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {card.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-base text-gray-600 border-t border-gray-300 pt-6">
                Templates are working conversations, not static blueprints.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Types of Templates */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Templates Grouped by Outcome
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {templateTypes.map((group, groupIdx) => (
                <motion.div
                  key={groupIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: groupIdx * 0.15 }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                    <h3 
                      className="text-lg mb-6 pb-4 border-b border-gray-300"
                      style={{ 
                        fontFamily: 'DM Sans, sans-serif',
                        color: group.color
                      }}
                    >
                      {group.group}
                    </h3>

                    <div className="space-y-3">
                      {group.templates.map((template, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 4 }}
                          className="relative group cursor-pointer"
                        >
                          <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
                            <div 
                              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: `${group.color}15` }}
                            >
                              <template.icon className="w-5 h-5" style={{ color: group.color }} />
                            </div>
                            <span className="text-sm">{template.name}</span>
                          </div>

                          {/* Mini flow on hover */}
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            whileHover={{ opacity: 1, height: 'auto' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 ml-13 flex items-center gap-1 text-xs text-gray-500">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                              <ArrowRight className="w-3 h-3" />
                              <div className="w-2 h-2 rounded-full bg-gray-300" />
                              <ArrowRight className="w-3 h-3" />
                              <div className="w-2 h-2 rounded-full bg-gray-300" />
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ How Templates Are Used */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Visual Sequence */}
              <div className="flex items-center justify-between mb-12">
                {[
                  { icon: Target, label: 'Pick a template', color: '#2F80ED' },
                  { icon: Workflow, label: 'See the full flow instantly', color: '#9B51E0' },
                  { icon: Edit3, label: 'Edit logic, messages, channels', color: '#F2994A' },
                  { icon: Play, label: 'Deploy across channels', color: '#10B981' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.8 }}
                    className="flex flex-col items-center flex-1"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm text-center max-w-32">{step.label}</p>

                    {idx < 3 && (
                      <ArrowRight 
                        className="absolute w-6 h-6 text-gray-400"
                        style={{ 
                          left: `${(idx + 1) * 25 - 5}%`,
                          top: '30px'
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <p className="text-lg text-gray-600">
                  Start with structure. Customize with intent.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Templates + Flow Builder */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Templates are starting points —<br />
                Flow Builder is where they become yours
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Template Preview (Locked) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300 relative">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                    Template
                  </div>

                  <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Booking Agent
                  </h3>

                  <div className="space-y-3">
                    {[
                      { label: 'Greeting', locked: true },
                      { label: 'Collect Service', locked: true },
                      { label: 'Check Availability', locked: true },
                      { label: 'Confirm Booking', locked: true }
                    ].map((node, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span className="text-sm flex-1">{node.label}</span>
                        {node.locked && (
                          <div className="text-xs text-gray-500">Locked structure</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Flow Builder (Editable) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-300 relative">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                    Editable
                  </div>

                  <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Your Custom Flow
                  </h3>

                  <div className="space-y-3">
                    {[
                      { label: 'Greeting', editable: true },
                      { label: 'Collect Service', editable: true },
                      { label: 'Check Availability', editable: true },
                      { label: 'Confirm Booking', editable: true }
                    ].map((node, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors cursor-pointer"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        <span className="text-sm flex-1">{node.label}</span>
                        {node.editable && (
                          <Edit3 className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-xs text-blue-900">
                      <Code className="w-4 h-4" />
                      <span>Edit messages, logic, conditions, channels</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Built for Real Scenarios */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Built for Real Scenarios
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {scenarios.map((scenario, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.8 }}
                    animate={{
                      scale: activeScenario === idx ? 1.02 : 1,
                      borderColor: activeScenario === idx ? '#2F80ED' : '#E5E7EB'
                    }}
                    className="bg-white rounded-2xl p-6 border-2 transition-all"
                  >
                    <h3 className="text-base mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {scenario.title}
                    </h3>

                    <div className="space-y-3">
                      {/* Customer message */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="text-sm text-gray-900">{scenario.customer}</div>
                        </div>
                      </div>

                      {/* Agent response */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="text-sm text-gray-900">{scenario.agent}</div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex items-center gap-2 ml-11 text-sm text-gray-600">
                        <ArrowRight className="w-4 h-4" />
                        <span>{scenario.action}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Channel-Ready by Default */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                One Template. Every Channel.
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Center Agent Node */}
              <div className="flex justify-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl"
                >
                  <Bot className="w-16 h-16 text-white" />
                </motion.div>
              </div>

              {/* Channels */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {channels.map((channel, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="relative"
                  >
                    <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200 hover:border-gray-300 transition-all text-center">
                      <div 
                        className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                        style={{ backgroundColor: `${channel.color}20` }}
                      >
                        <channel.icon className="w-5 h-5" style={{ color: channel.color }} />
                      </div>
                      <div className="text-xs">{channel.name}</div>
                    </div>

                    {/* Connection line to center */}
                    <div 
                      className="absolute bottom-full left-1/2 w-0.5 h-12 -translate-x-1/2 opacity-20"
                      style={{ backgroundColor: channel.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Who Templates Are For */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetUsers.map((user, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all h-full text-center">
                    <div 
                      className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${user.color}20` }}
                    >
                      <user.icon className="w-6 h-6" style={{ color: user.color }} />
                    </div>
                    <p className="text-sm text-gray-700">{user.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ CTA — Calm Confidence */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl lg:text-5xl mb-12 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Start with a Template. End with a Custom Agent.
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="#browse">
                  <Button 
                    size="lg"
                    className="shadow-lg text-base px-10 rounded-lg bg-blue-600 hover:bg-blue-700"
                  >
                    Browse Templates
                  </Button>
                </Link>
                
                <Link to="/product/flow-builder">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-10 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Build from Template
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}