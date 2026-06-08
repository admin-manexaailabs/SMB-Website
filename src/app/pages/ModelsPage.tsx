import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Brain,
  MessageSquare,
  Lightbulb,
  BookOpen,
  Zap,
  ArrowRight,
  Shield,
  TrendingUp,
  CheckCircle,
  Settings,
  Sliders,
  Gauge,
  Bot,
  Workflow,
  Users,
  GitBranch,
  Volume2,
  Mail,
  Target,
  Layers,
  Lock,
  Activity
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function ModelsPage() {
  const modelTypes = [
    {
      icon: MessageSquare,
      title: 'Conversational Models',
      subtitle: 'Natural language understanding, Context-aware replies',
      bestFor: 'Best for chat, voice, inbox agents',
      color: 'blue',
      features: ['Natural conversations', 'Context retention', 'Multi-turn dialogue']
    },
    {
      icon: Lightbulb,
      title: 'Reasoning Models',
      subtitle: 'Decision making, Flow routing, Conditional logic',
      bestFor: 'Best for complex agent workflows',
      color: 'purple',
      features: ['Smart decisions', 'Flow routing', 'Conditional logic']
    },
    {
      icon: BookOpen,
      title: 'Knowledge Models',
      subtitle: 'Grounded on your data, Reduces hallucinations',
      bestFor: 'Best for accurate, data-driven responses',
      color: 'orange',
      features: ['Data-grounded', 'Fact-based replies', 'Reduced errors']
    },
    {
      icon: Zap,
      title: 'Fast Response Models',
      subtitle: 'Optimized for speed, High-volume capable',
      bestFor: 'Best for SMS, WhatsApp, notifications',
      color: 'green',
      features: ['Ultra-fast', 'High throughput', 'Low latency']
    }
  ];

  const reliabilityFeatures = [
    {
      icon: CheckCircle,
      label: 'Consistent Responses',
      description: 'Predictable behavior across conversations'
    },
    {
      icon: TrendingUp,
      label: 'Scales Automatically',
      description: 'Millions of messages without tuning'
    },
    {
      icon: Lock,
      label: 'Secure & Isolated',
      description: 'Each business, each agent stays separate'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Intro Section – What Models Mean Here */}
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
              The intelligence behind every agent
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Models determine how your agents understand messages, make decisions, and respond across channels.
            </p>
          </motion.div>

          {/* Visual: Understand → Decide → Respond */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-12 lg:p-16 border border-gray-200 shadow-xl">
              <div className="flex flex-col items-center">
                {/* Central AI Brain/Core */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative mb-12"
                >
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-2xl relative">
                    <Brain className="w-16 h-16 text-white" />
                    
                    {/* Subtle thinking pulse */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-2xl bg-gray-500"
                    />
                  </div>
                  
                  <div className="text-center mt-4">
                    <span className="text-sm text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      AI Model
                    </span>
                  </div>
                </motion.div>

                {/* Three branches */}
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-4xl">
                  {/* Understand */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="relative"
                  >
                    {/* Connection line */}
                    <div className="hidden md:block absolute bottom-full left-1/2 h-12 w-0.5 bg-gradient-to-b from-transparent to-blue-300 -translate-x-1/2" />
                    
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-200 shadow-md text-center">
                      <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
                        <Volume2 className="w-7 h-7 text-white" />
                      </div>
                      <h3 
                        className="text-lg mb-2" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Understand
                      </h3>
                      <p className="text-sm text-gray-600">
                        Parse messages and extract intent
                      </p>
                    </div>
                  </motion.div>

                  {/* Decide */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="relative"
                  >
                    {/* Connection line */}
                    <div className="hidden md:block absolute bottom-full left-1/2 h-12 w-0.5 bg-gradient-to-b from-transparent to-purple-300 -translate-x-1/2" />
                    
                    <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 border border-purple-200 shadow-md text-center">
                      <div className="w-14 h-14 rounded-xl bg-purple-600 flex items-center justify-center mx-auto mb-4">
                        <GitBranch className="w-7 h-7 text-white" />
                      </div>
                      <h3 
                        className="text-lg mb-2" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Decide
                      </h3>
                      <p className="text-sm text-gray-600">
                        Route and choose next actions
                      </p>
                    </div>
                  </motion.div>

                  {/* Respond */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="relative"
                  >
                    {/* Connection line */}
                    <div className="hidden md:block absolute bottom-full left-1/2 h-12 w-0.5 bg-gradient-to-b from-transparent to-orange-300 -translate-x-1/2" />
                    
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-200 shadow-md text-center">
                      <div className="w-14 h-14 rounded-xl bg-orange-600 flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-7 h-7 text-white" />
                      </div>
                      <h3 
                        className="text-lg mb-2" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Respond
                      </h3>
                      <p className="text-sm text-gray-600">
                        Generate contextual replies
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Model Types Supported */}
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
              Choose the right model for the job
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {modelTypes.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${model.color}-600 flex items-center justify-center flex-shrink-0`}>
                      <model.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-lg mb-1" 
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {model.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {model.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {model.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${model.color}-500`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className={`mt-4 p-3 bg-${model.color}-50 rounded-lg border border-${model.color}-100`}>
                    <p className={`text-sm text-${model.color}-900`}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif' }}>Best for:</span> {model.bestFor.replace('Best for ', '')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ How Models Are Used in SMB Flow */}
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
              Models work inside your flows and agents
            </h2>
          </motion.div>

          {/* Visual Flow: Model → Agent → Flow → Channel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-lg mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-4 items-center">
              {/* Model */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Model
                  </span>
                </div>
              </motion.div>

              <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

              {/* Agent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center gap-3 bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Agent
                  </span>
                </div>
              </motion.div>

              <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

              {/* Flow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center gap-3 bg-purple-50 rounded-2xl p-6 border border-purple-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Flow
                  </span>
                </div>
              </motion.div>

              <ArrowRight className="hidden md:block w-6 h-6 text-gray-400" />

              {/* Channel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="text-center"
              >
                <div className="inline-flex flex-col items-center gap-3 bg-orange-50 rounded-2xl p-6 border border-orange-200">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Channel
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-gray-700 mb-2">
              You don't chat with models directly.
            </p>
            <p className="text-lg text-gray-700">
              You assign them to agents, and agents do the work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4️⃣ Model Configuration */}
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
              Control without complexity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Model Selector Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <h3 
                  className="text-lg" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Select model per agent
                </h3>
              </div>
              
              {/* Mock Dropdown */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Conversational Model</span>
                  <Settings className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </motion.div>

            {/* Tone Selector Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Sliders className="w-5 h-5 text-purple-600" />
                </div>
                <h3 
                  className="text-lg" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Adjust tone
                </h3>
              </div>
              
              {/* Mock Tone Options */}
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">
                  Professional
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  Friendly
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  Concise
                </button>
              </div>
            </motion.div>

            {/* Response Length Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <h3 
                  className="text-lg" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Control response length
                </h3>
              </div>
              
              {/* Mock Length Slider */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Brief</span>
                  <span className="text-xs text-gray-500">Detailed</span>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full">
                  <div className="absolute left-0 top-0 h-2 w-2/3 bg-orange-500 rounded-full" />
                  <div className="absolute left-2/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-2 border-white shadow" />
                </div>
              </div>
            </motion.div>

            {/* Speed vs Accuracy Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-green-600" />
                </div>
                <h3 
                  className="text-lg" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Enable safety & accuracy settings
                </h3>
              </div>
              
              {/* Mock Toggle */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-sm text-gray-700">Fact checking</span>
                  <div className="w-10 h-6 bg-green-600 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <span className="text-sm text-gray-700">Safety filters</span>
                  <div className="w-10 h-6 bg-green-600 rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Built for Reliability & Scale */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-md"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {reliabilityFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-gray-700" />
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

      {/* 6️⃣ How Models Fit Into the Platform */}
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
              How models fit into the platform
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
              <div className="flex flex-col items-center gap-6">
                {[
                  { icon: Brain, label: 'Models', color: 'gray', delay: 0 },
                  { icon: Bot, label: 'AI Agents', color: 'blue', delay: 0.1 },
                  { icon: Workflow, label: 'Flow Builder', color: 'purple', delay: 0.2 },
                  { icon: MessageSquare, label: 'Channels', color: 'orange', delay: 0.3 },
                  { icon: Users, label: 'Customers', color: 'green', delay: 0.4 }
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      className="text-center"
                    >
                      <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                          item.color === 'gray' ? 'from-gray-700 to-gray-900' : 
                          `from-${item.color}-500 to-${item.color}-600`
                        } flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {item.label}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Arrow between items */}
                    {idx < arr.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: item.delay + 0.2 }}
                        className="my-2"
                      >
                        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-gray-400" />
                      </motion.div>
                    )}
                  </div>
                ))}
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
                  Models power intelligence. Agents apply it. Flows control it.
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
              to="/product/agents"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              Explore AI Agents
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
