import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Shield,
  Lock,
  Key,
  Layers,
  Eye,
  UserCheck,
  Database,
  Server,
  CheckCircle,
  ArrowRight,
  FileText,
  Settings,
  Globe,
  Bot,
  Workflow,
  MessageSquare,
  Zap,
  Activity,
  ShieldCheck,
  AlertCircle,
  Users
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function SecurityPage() {
  const dataProtection = [
    {
      icon: Lock,
      title: 'Data Isolation',
      points: [
        'Each business runs in an isolated environment',
        'No data shared across customers',
        'Agents only access assigned data'
      ]
    },
    {
      icon: Shield,
      title: 'Encryption',
      points: [
        'Data encrypted in transit and at rest',
        'Secure API communication',
        'Protected credentials and secrets'
      ]
    },
    {
      icon: Eye,
      title: 'Privacy Controls',
      points: [
        'Control what agents can see',
        'Limit access by role and use case',
        'Safe handling of customer conversations'
      ]
    }
  ];

  const platformReliability = [
    {
      icon: Activity,
      label: 'High-Volume Traffic',
      description: 'Designed to handle high-volume traffic'
    },
    {
      icon: Shield,
      label: 'Continuous Monitoring',
      description: 'Continuous monitoring'
    },
    {
      icon: CheckCircle,
      label: 'Fail-Safe Execution',
      description: 'Fail-safe execution'
    },
    {
      icon: Zap,
      label: 'Graceful Degradation',
      description: 'Graceful degradation during spikes'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Intro Section – Security First */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50/50 to-white">
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
              Security built into every layer
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From conversations to data sources, SMB Flow is designed to keep your business information safe by default.
            </p>
          </motion.div>

          {/* Layered Shield Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-12 lg:p-16 border border-gray-200 shadow-xl">
              <div className="flex flex-col items-center">
                {/* Layered Security Visualization */}
                <div className="relative w-full max-w-md">
                  {[
                    { label: 'Channels', size: 'w-full h-20', delay: 0.5, opacity: 0.15 },
                    { label: 'Agents', size: 'w-5/6 h-20', delay: 0.65, opacity: 0.25 },
                    { label: 'Data', size: 'w-4/6 h-20', delay: 0.8, opacity: 0.35 },
                    { label: 'Infrastructure', size: 'w-3/6 h-20', delay: 0.95, opacity: 0.5 }
                  ].map((layer, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: layer.delay }}
                      className={`${layer.size} mx-auto mb-4 relative`}
                    >
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl"
                        style={{ opacity: layer.opacity }}
                      >
                        {/* Animated protection glow */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.3
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-2xl blur-sm"
                        />
                      </div>
                      
                      <div className="relative flex items-center justify-center h-full">
                        <span 
                          className="text-sm text-gray-700 z-10"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {layer.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Central Shield Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Data Protection & Privacy */}
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
              Your data stays yours
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {dataProtection.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  
                  <h3 
                    className="text-xl mb-4" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Secure Access & Permissions */}
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
              Controlled access, always
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-lg mb-2" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Role-based access
                    </h3>
                    <p className="text-sm text-gray-600">
                      Admin, Operator, Viewer roles with appropriate permissions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Key className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-lg mb-2" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Permission-based controls
                    </h3>
                    <p className="text-sm text-gray-600">
                      Fine-grained access for agents, flows, and data sources
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-lg mb-2" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Audit-friendly structure
                    </h3>
                    <p className="text-sm text-gray-600">
                      Clear access logs and permission tracking
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Permission Tree Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm h-full flex items-center justify-center">
                <div className="w-full max-w-sm">
                  {/* User */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      User
                    </span>
                  </motion.div>

                  {/* Connection line */}
                  <div className="ml-6 h-8 w-0.5 bg-gray-300 mb-2" />

                  {/* Role */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Role (Admin, Operator, Viewer)
                    </span>
                  </motion.div>

                  {/* Connection line */}
                  <div className="ml-6 h-8 w-0.5 bg-gray-300 mb-2" />

                  {/* Access Scope */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Access Scope
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Secure Integrations & APIs */}
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
              Safe connections to your tools
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Key,
                title: 'OAuth and token-based authentication',
                description: 'Industry-standard secure authentication'
              },
              {
                icon: Settings,
                title: 'Scoped API access',
                description: 'Integrations access only what they need'
              },
              {
                icon: Zap,
                title: 'Automatic token rotation',
                description: 'Tokens refreshed automatically where supported'
              },
              {
                icon: ShieldCheck,
                title: 'No hard-coded credentials',
                description: 'Secrets stored securely, never in flows'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 
                        className="text-base mb-1" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector Cards Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Database, label: 'Database' },
                { icon: Globe, label: 'API' },
                { icon: Settings, label: 'CRM' },
                { icon: Server, label: 'Cloud' }
              ].map((connector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex flex-col items-center gap-3">
                    <connector.icon className="w-8 h-8 text-gray-600" />
                    <span className="text-xs text-gray-700">{connector.label}</span>
                    
                    {/* Lock Badge Overlay */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                      <Lock className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ Agent Safety & Reliability */}
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
              Agents that behave responsibly
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Guardrails to prevent unintended actions',
                  description: 'Built-in safety controls for agent behavior'
                },
                {
                  icon: Database,
                  title: 'Controlled responses using assigned knowledge',
                  description: 'Agents only use data they have access to'
                },
                {
                  icon: Lock,
                  title: 'No unauthorized data access',
                  description: 'Strict boundaries on what agents can read'
                },
                {
                  icon: CheckCircle,
                  title: 'Predictable behavior across channels',
                  description: 'Consistent rules regardless of where agents run'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 
                      className="text-base mb-1" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center pt-6 border-t border-gray-200"
            >
              <p className="text-gray-700">
                Agents act only within the rules you define.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Platform Reliability & Monitoring */}
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
              Built for uptime and scale
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformReliability.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full text-center">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 
                    className="text-base mb-2" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Compliance-Ready by Design */}
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
              Ready for compliance needs
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-md"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-7 h-7 text-green-600" />
                </div>
                <h3 
                  className="text-lg mb-2" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Industry Best Practices
                </h3>
                <p className="text-sm text-gray-600">
                  Secure architecture aligned with industry standards
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <AlertCircle className="w-7 h-7 text-blue-600" />
                </div>
                <h3 
                  className="text-lg mb-2" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Regulated Industries
                </h3>
                <p className="text-sm text-gray-600">
                  Supports healthcare, finance, and professional services
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-purple-600" />
                </div>
                <h3 
                  className="text-lg mb-2" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Audit Documentation
                </h3>
                <p className="text-sm text-gray-600">
                  Documentation available for audits and reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ How Security Fits Into SMB Flow */}
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
              How security fits into SMB Flow
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Security Layer Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
              <div className="relative">
                {/* Security layer wrapping around */}
                <div className="absolute inset-0 border-2 border-blue-300 rounded-2xl" 
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)'
                  }}
                />

                {/* Platform components inside */}
                <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
                  {[
                    { icon: Layers, label: 'Models', color: 'gray' },
                    { icon: Bot, label: 'Agents', color: 'blue' },
                    { icon: Workflow, label: 'Flows', color: 'purple' },
                    { icon: MessageSquare, label: 'Channels', color: 'orange' },
                    { icon: Database, label: 'Data & Integrations', color: 'green' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="text-center"
                    >
                      <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                        <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center mx-auto mb-2`}>
                          <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <span className="text-xs text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Security Shield Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full border-2 border-blue-300 shadow-md">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-blue-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Security Layer
                    </span>
                  </div>
                </div>
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
                  Security isn't a feature. It's the foundation.
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
              to="/product/integrations"
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 text-sm"
            >
              See Integrations
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
