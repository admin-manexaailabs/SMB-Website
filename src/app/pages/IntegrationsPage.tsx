import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Calendar,
  Users,
  Mail,
  CreditCard,
  Settings,
  Database,
  Zap,
  ArrowRight,
  Shield,
  TrendingUp,
  RefreshCw,
  Check,
  Bot,
  Workflow,
  MessageSquare,
  Layers,
  GitBranch,
  Link2,
  Boxes,
  ShoppingCart,
  Phone,
  Globe,
  Clock,
  BarChart3,
  FileText,
  Send,
  Package
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function IntegrationsPage() {
  const integrationCategories = [
    {
      icon: Calendar,
      title: 'Business & Scheduling',
      subtitle: 'Google Calendar, Appointment systems, Booking tools',
      description: 'Used for scheduling, availability, reminders',
      color: 'from-blue-500 to-blue-600',
      examples: ['Google Calendar', 'Calendly', 'Acuity']
    },
    {
      icon: Users,
      title: 'CRM & Customer Data',
      subtitle: 'CRM systems, Customer databases, Lead tools',
      description: 'Used for personalization, follow-ups, history',
      color: 'from-purple-500 to-purple-600',
      examples: ['Salesforce', 'HubSpot', 'Pipedrive']
    },
    {
      icon: Mail,
      title: 'Marketing & Campaigns',
      subtitle: 'Email platforms, SMS providers, WhatsApp / messaging tools',
      description: 'Used for campaigns, broadcasts, surveys',
      color: 'from-orange-500 to-orange-600',
      examples: ['Mailchimp', 'SendGrid', 'Twilio']
    },
    {
      icon: CreditCard,
      title: 'Payments & Orders',
      subtitle: 'Payment gateways, Order systems, Invoices',
      description: 'Used for order status, confirmations, refunds',
      color: 'from-green-500 to-green-600',
      examples: ['Stripe', 'PayPal', 'Square']
    },
    {
      icon: Settings,
      title: 'Internal Systems',
      subtitle: 'Internal APIs, External APIs, Custom services',
      description: 'Used for advanced automation',
      color: 'from-pink-500 to-pink-600',
      examples: ['REST API', 'GraphQL', 'Webhooks']
    }
  ];

  const useCases = [
    {
      icon: Calendar,
      emoji: '📅',
      title: 'Booking Agent',
      flow: 'Agent checks Google Calendar → confirms slot → sends reminder',
      color: 'blue'
    },
    {
      icon: Package,
      emoji: '📦',
      title: 'Order Assistant',
      flow: 'Agent pulls order status → updates CRM → notifies customer',
      color: 'purple'
    },
    {
      icon: Send,
      emoji: '📣',
      title: 'Campaign Agent',
      flow: 'Agent triggers email/SMS campaign → tracks responses',
      color: 'orange'
    }
  ];

  const scaleFeatures = [
    {
      icon: RefreshCw,
      label: 'Real-Time Sync',
      description: 'Actions happen instantly'
    },
    {
      icon: Shield,
      label: 'Secure by Design',
      description: 'Scoped access per agent'
    },
    {
      icon: TrendingUp,
      label: 'Scales with Growth',
      description: 'Millions of actions across channels'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Top Section: What Integrations Mean in SMB Flow */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Connect SMB Flow to the tools you already use
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Integrations let your AI agents talk to your systems, trigger actions, fetch data, and update records automatically.
            </p>
          </motion.div>

          {/* Central Hub Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-12 lg:p-16 border border-gray-200 shadow-2xl relative overflow-hidden">
              {/* Background grid */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} />

              {/* Central SMB Flow Hub */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative z-10"
                >
                  {/* Central Hub */}
                  <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 flex items-center justify-center shadow-2xl relative">
                    <div className="absolute inset-[3px] bg-white rounded-[22px] flex items-center justify-center">
                      <div className="text-center">
                        <Boxes className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          SMB Flow
                        </span>
                      </div>
                    </div>
                    
                    {/* Pulse animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-400"
                    />
                  </div>

                  {/* Surrounding Integration Icons */}
                  {[
                    { icon: Users, label: 'CRM', angle: 0, color: 'purple', delay: 0.6 },
                    { icon: Calendar, label: 'Calendar', angle: 72, color: 'blue', delay: 0.7 },
                    { icon: CreditCard, label: 'Payments', angle: 144, color: 'green', delay: 0.8 },
                    { icon: Mail, label: 'Marketing', angle: 216, color: 'orange', delay: 0.9 },
                    { icon: Database, label: 'Support', angle: 288, color: 'cyan', delay: 1.0 }
                  ].map((item, idx) => {
                    const radius = 200;
                    const angleRad = (item.angle * Math.PI) / 180;
                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        {/* Connection Line */}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: item.delay + 0.2 }}
                          className={`absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-${item.color}-400 to-transparent origin-left`}
                          style={{
                            width: `${radius - 60}px`,
                            transform: `translate(-100%, -50%) rotate(${item.angle + 180}deg)`,
                            transformOrigin: 'right center'
                          }}
                        />

                        {/* Icon Container */}
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-${item.color}-100 to-${item.color}-50 border-2 border-${item.color}-200 flex flex-col items-center justify-center gap-2 shadow-lg hover:scale-110 transition-transform cursor-pointer`}>
                          <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                          <span className="text-xs text-gray-700">{item.label}</span>
                        </div>

                        {/* Animated sync indicator */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0, 0.8]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: item.delay + idx * 0.4
                          }}
                          className={`absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-${item.color}-400 -translate-x-1/2 -translate-y-1/2`}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Two-way sync indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
              >
                <RefreshCw className="w-4 h-4 text-blue-600" />
                <span>Two-way sync</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Integration Categories */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Integration categories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  {/* Icon Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg mb-1" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-700 mb-4">
                    {category.description}
                  </p>

                  {/* Example tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, exIdx) => (
                      <span
                        key={exIdx}
                        className="text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  {/* Hint */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-600">Used by agents & flows</span>
                  </div>

                  {/* Gradient accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color} mt-4 origin-left group-hover:w-full transition-all duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ How Integrations Work */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
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
              Built once. Used everywhere.
            </h2>
          </motion.div>

          {/* Visual Flow */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Connect an Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full relative overflow-hidden">
                {/* Step number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm shadow-lg">
                  1
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4">
                    <Link2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 
                    className="text-2xl mb-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Connect an Integration
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Secure credentials</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>One-time setup</span>
                  </div>
                </div>

                {/* Connection indicator */}
                <div className="mt-6 p-3 bg-green-50 rounded-lg flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span className="text-sm text-green-700">Connected</span>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
              >
                <ArrowRight className="w-8 h-8 text-blue-400" />
              </motion.div>
            </motion.div>

            {/* Step 2: Use in Flow Builder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full relative overflow-hidden">
                {/* Step number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-lg">
                  2
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4">
                    <Workflow className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 
                    className="text-2xl mb-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Use in Flow Builder
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <GitBranch className="w-4 h-4 text-purple-600" />
                    <span>As action nodes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Database className="w-4 h-4 text-purple-600" />
                    <span>As lookup nodes</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Zap className="w-4 h-4 text-purple-600" />
                    <span>As triggers</span>
                  </div>
                </div>

                {/* Visual node representation */}
                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-center text-xs text-gray-700">
                    <Calendar className="w-3 h-3 mr-1" />
                    Calendar
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-center text-xs text-gray-700">
                    <Users className="w-3 h-3 mr-1" />
                    CRM
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
              >
                <ArrowRight className="w-8 h-8 text-purple-400" />
              </motion.div>
            </motion.div>

            {/* Step 3: Power AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full relative overflow-hidden">
                {/* Step number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm shadow-lg">
                  3
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-4 relative">
                    <Bot className="w-8 h-8 text-orange-600 relative z-10" />
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-xl bg-orange-300"
                    />
                  </div>
                  <h3 
                    className="text-2xl mb-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Power AI Agents
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Database className="w-4 h-4 text-orange-600" />
                    <span>Agents read data</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <RefreshCw className="w-4 h-4 text-orange-600" />
                    <span>Agents update systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span>Agents trigger workflows</span>
                  </div>
                </div>

                {/* Active indicator */}
                <div className="mt-6 p-3 bg-orange-50 rounded-lg flex items-center gap-2">
                  <motion.div
                    animate={{ 
                      rotate: 360
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Zap className="w-4 h-4 text-orange-600" />
                  </motion.div>
                  <span className="text-sm text-orange-700">Active in 5 agents</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Examples: Real SMB Use Cases */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Real SMB use cases
            </h2>
          </motion.div>

          <div className="space-y-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <div className={`bg-gradient-to-r from-${useCase.color}-50 to-white rounded-2xl p-6 lg:p-8 border border-${useCase.color}-100 shadow-sm hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${useCase.color}-500 to-${useCase.color}-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      {useCase.emoji}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 
                        className="text-2xl mb-3" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {useCase.title}
                      </h3>

                      {/* Flow visualization */}
                      <div className="flex items-center gap-3 flex-wrap">
                        {useCase.flow.split(' → ').map((step, stepIdx, arr) => (
                          <div key={stepIdx} className="flex items-center gap-3">
                            <div className={`px-4 py-2 bg-white rounded-lg border border-${useCase.color}-200 text-sm text-gray-700 shadow-sm`}>
                              {step}
                            </div>
                            {stepIdx < arr.length - 1 && (
                              <ArrowRight className={`w-5 h-5 text-${useCase.color}-400 flex-shrink-0`} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Built for Scale & Reliability */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-2xl p-8 lg:p-12 border border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {scaleFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-xl mb-2" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {feature.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ How Integrations Fit Into the Platform */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How integrations fit into the platform
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Platform Map */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
                {/* Integrations */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Integrations
                    </span>
                  </div>
                </motion.div>

                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

                {/* Data & Knowledge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Data & Knowledge
                    </span>
                  </div>
                </motion.div>

                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

                {/* Flow Builder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Flow Builder
                    </span>
                  </div>
                </motion.div>

                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

                {/* AI Agents */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      AI Agents
                    </span>
                  </div>
                </motion.div>

                <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

                {/* Channels */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Channels
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-700">
                  Integrations connect your business systems to intelligent automation.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Soft cross-links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <Link 
              to="/product/data"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              Explore Data & Knowledge
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/product/flow-builder"
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 text-sm"
            >
              See Flow Builder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
