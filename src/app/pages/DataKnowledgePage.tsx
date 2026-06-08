import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Database,
  FileText,
  Globe,
  Zap,
  Lock,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle,
  Workflow,
  Bot,
  MessageSquare,
  Link2,
  Shield,
  RefreshCw,
  Cloud,
  HardDrive,
  FileSpreadsheet,
  Code,
  BookOpen,
  GitBranch,
  Activity
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function DataKnowledgePage() {
  const connectors = [
    {
      icon: Database,
      name: 'Databases',
      subtitle: 'MySQL, BigQuery',
      description: 'Live structured business data',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      name: 'APIs',
      subtitle: 'Internal & External APIs',
      description: 'Real-time system access',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      name: 'Files & Documents',
      subtitle: 'PDFs, CSVs, Docs',
      description: 'Policies, FAQs, product info',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      name: 'Websites',
      subtitle: 'Website Scraper',
      description: 'Public pages as knowledge',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Cloud,
      name: 'Cloud Storage',
      subtitle: 'Google Drive, Dropbox',
      description: 'Documents and files in the cloud',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FileSpreadsheet,
      name: 'Spreadsheets',
      subtitle: 'Excel, Google Sheets',
      description: 'Live pricing, inventory, schedules',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const scaleFeatures = [
    {
      icon: RefreshCw,
      label: 'Live Sync',
      description: 'Data updates reflect instantly in conversations'
    },
    {
      icon: Shield,
      label: 'Secure Access',
      description: 'Credentials protected, scoped per agent'
    },
    {
      icon: TrendingUp,
      label: 'Scales with You',
      description: 'Millions of queries across channels'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ What is Data & Knowledge (Top Section) */}
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
              Your business knowledge, ready for your AI agents
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-2">
              <p className="text-xl text-gray-700">
                Connect your databases, documents, APIs, and websites.
              </p>
              <p className="text-xl text-gray-700">
                Turn them into live knowledge your agents can use instantly.
              </p>
            </div>
          </motion.div>

          {/* Visual Diagram: Data Sources → Knowledge Layer → AI Agent */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
              {/* Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
                {/* Data Sources */}
                <div className="space-y-3">
                  <div className="text-center mb-4">
                    <span className="text-xs uppercase tracking-wide text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Data Sources
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Database, label: 'Database', color: 'blue' },
                      { icon: Code, label: 'API', color: 'purple' },
                      { icon: FileText, label: 'Files', color: 'orange' },
                      { icon: Globe, label: 'Website', color: 'green' }
                    ].map((source, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className={`p-4 rounded-xl bg-gradient-to-br from-${source.color}-50 to-${source.color}-100/50 border border-${source.color}-200 flex flex-col items-center gap-2`}
                      >
                        <source.icon className={`w-6 h-6 text-${source.color}-600`} />
                        <span className="text-xs text-gray-700">{source.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Arrow 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-8 h-8 text-blue-400" />
                </motion.div>

                {/* Knowledge Layer */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="relative"
                >
                  <div className="text-center mb-4">
                    <span className="text-xs uppercase tracking-wide text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Knowledge Layer
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-200 shadow-lg">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-700 mb-1">Organized</p>
                        <p className="text-xs text-gray-500">Ready to use</p>
                      </div>
                      {/* Pulse animation */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Arrow 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="hidden md:block"
                >
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </motion.div>

                {/* AI Agent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="relative"
                >
                  <div className="text-center mb-4">
                    <span className="text-xs uppercase tracking-wide text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      AI Agent
                    </span>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg relative overflow-hidden">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg relative z-10">
                        <Bot className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-700 mb-1">Querying</p>
                        <p className="text-xs text-gray-500">In real-time</p>
                      </div>
                      {/* Glow effect */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ What You Can Connect */}
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
              What you can connect
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectors.map((connector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${connector.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <connector.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 
                    className="text-lg mb-1" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {connector.name}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-3">
                    {connector.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-700">
                    {connector.description}
                  </p>

                  {/* Gradient accent on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                    className={`h-1 w-12 rounded-full bg-gradient-to-r ${connector.color} mt-4 origin-left group-hover:w-full transition-all duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ How Data Becomes Knowledge */}
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
              From raw data to agent-ready knowledge
            </h2>
          </motion.div>

          {/* 3-Step Visual Pipeline */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Connect Data */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <span className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>1</span>
                </div>

                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Connect Data
                </h3>

                {/* Visual elements */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Link2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Secure connectors</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Credentials & sync status</span>
                  </div>
                </div>

                {/* Connection status indicator */}
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span>Connected</span>
                </div>
              </div>

              {/* Arrow to next step */}
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

            {/* Step 2: Organize Knowledge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <span className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>2</span>
                </div>

                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Organize Knowledge
                </h3>

                {/* Visual elements */}
                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-gray-500">Name</span>
                    </div>
                    <div className="text-sm text-gray-900">Customer Database</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-gray-500">Description</span>
                    </div>
                    <div className="text-sm text-gray-900">Order history & preferences</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-xs text-gray-500">Usage scope</span>
                    </div>
                    <div className="text-sm text-gray-900">Support & Sales agents</div>
                  </div>
                </div>
              </div>

              {/* Arrow to next step */}
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

            {/* Step 3: Use in Flows */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
                {/* Step number */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <span className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>3</span>
                </div>

                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Use in Flows
                </h3>

                {/* Visual elements */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Workflow className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Drag as nodes inside Flow Builder</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <Activity className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">Agents query knowledge in real time</span>
                  </div>
                </div>

                {/* Active status */}
                <div className="flex items-center gap-2 text-sm text-orange-600">
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
                    <Zap className="w-4 h-4" />
                  </motion.div>
                  <span>In use by 3 agents</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Use Inside Flow Builder */}
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
              Use your data directly inside agent flows
            </h2>
          </motion.div>

          {/* Flow Builder Canvas Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-2xl"
          >
            <div className="bg-white rounded-2xl p-8 shadow-inner border border-gray-200">
              {/* Flow canvas */}
              <div className="relative min-h-[400px] flex items-center justify-center">
                {/* Grid background */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />

                {/* Flow nodes */}
                <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-center">
                  {/* Data Node */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 shadow-lg border-2 border-blue-400 min-w-[180px]">
                      <div className="flex items-center gap-3 mb-2">
                        <Database className="w-5 h-5 text-white" />
                        <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          Customer Database
                        </span>
                      </div>
                      <div className="text-xs text-blue-100">Query customer data</div>
                    </div>
                    {/* Connection dot */}
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full border-2 border-white" />
                  </motion.div>

                  {/* Connector line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-blue-400 to-purple-400 origin-left"
                  />

                  {/* Decision Node */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 shadow-lg border-2 border-purple-400 min-w-[180px]">
                      <div className="flex items-center gap-3 mb-2">
                        <GitBranch className="w-5 h-5 text-white" />
                        <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          Decision Node
                        </span>
                      </div>
                      <div className="text-xs text-purple-100">Check order status</div>
                    </div>
                    {/* Connection dots */}
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-white" />
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-white" />
                  </motion.div>

                  {/* Connector line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-purple-400 to-orange-400 origin-left"
                  />

                  {/* Reply Node */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 shadow-lg border-2 border-orange-400 min-w-[180px]">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="w-5 h-5 text-white" />
                        <span className="text-white text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          Reply Node
                        </span>
                      </div>
                      <div className="text-xs text-orange-100">Send personalized response</div>
                    </div>
                    {/* Connection dot */}
                    <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-orange-400 rounded-full border-2 border-white" />
                  </motion.div>
                </div>

                {/* Additional data nodes */}
                <div className="absolute top-8 left-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-lg p-3 shadow-md border border-blue-200 flex items-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-700">Pricing Policy</span>
                  </motion.div>
                </div>

                <div className="absolute bottom-8 right-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-white rounded-lg p-3 shadow-md border border-green-200 flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-green-600" />
                    <span className="text-xs text-gray-700">FAQ Knowledge Base</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-lg text-gray-600 mt-8"
          >
            Every connected data source becomes a reusable node inside your agent flows.
          </motion.p>
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

      {/* 6️⃣ Relationship to Other Products */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Product Map */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
                {/* Data & Knowledge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
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
                  transition={{ duration: 0.5, delay: 0.15 }}
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
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-center"
                >
                  <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
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
                className="text-center mt-12 space-y-2"
              >
                <p className="text-lg text-gray-700">
                  Data powers decisions.
                </p>
                <p className="text-lg text-gray-700">
                  Flows define logic.
                </p>
                <p className="text-lg text-gray-700">
                  Agents deliver conversations.
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
              to="/product/flow-builder"
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 text-sm"
            >
              Explore Flow Builder
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/product/agents"
              className="text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-2 text-sm"
            >
              See AI Agents
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
