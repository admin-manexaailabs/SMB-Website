import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Code,
  ArrowRight,
  Zap,
  MessageSquare,
  Bot,
  Database,
  Activity,
  Shield,
  Lock,
  Key,
  FileText,
  BookOpen,
  Terminal,
  Webhook,
  CheckCircle,
  Workflow,
  Globe,
  Inbox,
  BarChart3,
  Server,
  GitBranch,
  Radio,
  TrendingUp,
  Users,
  Settings
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function ApiAccessPage() {
  const capabilities = [
    {
      icon: Zap,
      title: 'Trigger Flows',
      description: 'Start workflows from external systems',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Send & Receive Messages',
      description: 'Push conversations into SMB Flow',
      color: 'green'
    },
    {
      icon: Bot,
      title: 'Manage Agents',
      description: 'Create, update, or assign agents programmatically',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'Access Conversations & Events',
      description: 'Read messages, responses, and outcomes',
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Sync Business Data',
      description: 'Keep systems in sync in real time',
      color: 'indigo'
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: 'Custom CRM Sync',
      description: 'Update customer records automatically when conversations complete'
    },
    {
      icon: Server,
      title: 'Internal System Triggers',
      description: 'Start flows based on business events in your own systems'
    },
    {
      icon: Radio,
      title: 'Advanced Campaign Control',
      description: 'Trigger campaigns programmatically based on your own logic'
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Pull analytics into internal tools and reporting systems'
    }
  ];

  const securityPoints = [
    {
      icon: Key,
      title: 'Token-based authentication',
      description: 'Secure API keys for each integration'
    },
    {
      icon: Lock,
      title: 'Scoped access per API key',
      description: 'Control exactly what each key can access'
    },
    {
      icon: Shield,
      title: 'Permissions aligned with roles',
      description: 'API access follows your team permissions'
    },
    {
      icon: FileText,
      title: 'Full audit visibility',
      description: 'Track all API activity in your logs'
    }
  ];

  const performanceFeatures = [
    {
      icon: TrendingUp,
      label: 'High request volumes',
      description: 'Designed for high request volumes'
    },
    {
      icon: Zap,
      label: 'Low-latency execution',
      description: 'Reliable, low-latency execution'
    },
    {
      icon: Server,
      label: 'Enterprise-scale',
      description: 'Supports enterprise-scale usage'
    }
  ];

  const developerResources = [
    {
      icon: BookOpen,
      title: 'API Documentation',
      description: 'Complete reference for all endpoints',
      href: '/docs/api'
    },
    {
      icon: Key,
      title: 'Authentication Guide',
      description: 'How to authenticate and manage keys',
      href: '/docs/auth'
    },
    {
      icon: Webhook,
      title: 'Webhooks Overview',
      description: 'Receive real-time event notifications',
      href: '/docs/webhooks'
    },
    {
      icon: Code,
      title: 'Example Requests',
      description: 'Sample code and common patterns',
      href: '/docs/examples'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Intro Section — What API Access Means */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 
              className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Programmatic access to SMB Flow
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Use APIs to connect SMB Flow with your systems, trigger workflows, manage agents, and access data programmatically.
            </p>

            {/* Important reassurance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full"
            >
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-900">
                APIs are optional — most businesses never need to write code.
              </span>
            </motion.div>
          </motion.div>

          {/* Visual: SMB Flow Core with API Operations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-12 lg:p-16 border border-gray-200 shadow-xl">
              <div className="flex flex-col items-center">
                {/* Central SMB Flow Core */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative mb-12"
                >
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      SMB Flow API
                    </span>
                  </div>
                </motion.div>

                {/* API Operations Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
                  {[
                    { label: 'Create', icon: Zap, color: 'blue', delay: 0.8 },
                    { label: 'Trigger', icon: Radio, color: 'green', delay: 0.9 },
                    { label: 'Read', icon: BookOpen, color: 'purple', delay: 1.0 },
                    { label: 'Update', icon: Settings, color: 'orange', delay: 1.1 }
                  ].map((operation, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: operation.delay }}
                      className="relative"
                    >
                      <div className={`bg-${operation.color}-50 rounded-2xl p-6 border border-${operation.color}-200 text-center`}>
                        <div className={`w-12 h-12 rounded-lg bg-${operation.color}-600 flex items-center justify-center mx-auto mb-3`}>
                          <operation.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 
                          className="text-sm" 
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {operation.label}
                        </h3>
                      </div>
                      
                      {/* Connection line to center */}
                      <div className={`hidden md:block absolute top-0 left-1/2 -translate-y-12 h-12 w-0.5 bg-${operation.color}-300`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ What You Can Do with the API */}
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
              What API access enables
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-${capability.color}-100 flex items-center justify-center mb-4`}>
                    <capability.icon className={`w-6 h-6 text-${capability.color}-600`} />
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

      {/* 3️⃣ How API Fits into the Platform */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              APIs work with everything else
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg"
          >
            {/* Visual Flow */}
            <div className="flex flex-col items-center gap-6">
              {/* External Systems */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 inline-flex items-center gap-3">
                  <Globe className="w-6 h-6 text-gray-600" />
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    External Systems
                  </span>
                </div>
              </motion.div>

              {/* Arrow down */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="w-0.5 h-12 bg-gradient-to-b from-gray-400 to-blue-500" />
              </motion.div>

              {/* API Access */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-300 inline-flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    API Access
                  </span>
                </div>
              </motion.div>

              {/* Arrow down */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-gray-400" />
              </motion.div>

              {/* Platform Components */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-4xl"
              >
                {[
                  { icon: Workflow, label: 'Flows', color: 'purple' },
                  { icon: Bot, label: 'Agents', color: 'blue' },
                  { icon: MessageSquare, label: 'Channels', color: 'green' },
                  { icon: Inbox, label: 'Inbox', color: 'orange' },
                  { icon: BarChart3, label: 'Analytics', color: 'indigo' }
                ].map((component, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + idx * 0.1 }}
                  >
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
                      <div className={`w-10 h-10 rounded-lg bg-${component.color}-100 flex items-center justify-center mx-auto mb-2`}>
                        <component.icon className={`w-5 h-5 text-${component.color}-600`} />
                      </div>
                      <span className="text-xs text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {component.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-center mt-12"
            >
              <p className="text-gray-700">
                APIs extend what you already build visually.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ API Usage Scenarios */}
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
              Common use cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 
                        className="text-lg mb-2" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Security & Access Control */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              Secure by design
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 
                        className="text-base mb-1" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to Security page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link 
              to="/product/security"
              className="text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              Learn more about security
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Performance & Scale */}
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
              Built to scale
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {performanceFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-lg mb-2" 
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

      {/* 7️⃣ Developer Resources */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
              Developer resources
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {developerResources.map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={resource.href}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 h-full group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center flex-shrink-0 transition-colors">
                        <resource.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 
                            className="text-lg group-hover:text-blue-600 transition-colors" 
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {resource.title}
                          </h3>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <p className="text-sm text-gray-600">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ When to Use API vs No-Code */}
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
              No-code or API — your choice
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* No-Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
                  <Workflow className="w-7 h-7 text-white" />
                </div>
                
                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  No-code
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Build flows visually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Best for most use cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No technical knowledge required</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* API */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-200 h-full">
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-white" />
                </div>
                
                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  API
                </h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Extend and customize</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Best for advanced needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Connect with existing systems</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Final reassurance */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most businesses start with no-code and only use APIs when they need to connect custom systems or build advanced integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
