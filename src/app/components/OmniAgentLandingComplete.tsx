import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, MessageCircle, Mail, Globe, CheckCircle, Users, Zap, BarChart3, BookOpen, Network, ChevronDown, Star, Database, Search, FileText, TrendingUp, Smartphone, Instagram, Facebook, Phone, Shield, Eye, Bell, Box, LineChart, Clock, Percent, Award } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import agentCentricImage from 'figma:asset/8d19dea7b173a594240a1e54b6115c22d2152ad6.png';

export default function OmniAgentLandingComplete() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#strengths" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">Features</a>
              <a href="#templates" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">Templates</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">Pricing</a>
              <Button variant="outline" className="border-gray-300">Sign In</Button>
              <Button className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* SECTION 1 - HERO */}
      <HeroSection />

      {/* SECTION 2 - OMNIAGENT STRENGTHS */}
      <StrengthsSection />

      {/* SECTION 3 - WHY THIS MARKET NOW */}
      <MarketContextSection />

      {/* SECTION 4 - KEY DEPLOYMENT CHANNELS */}
      <DeploymentChannelsSection />

      {/* SECTION 5 - WHAT YOU CAN BUILD */}
      <WhatYouCanBuildSection />

      {/* SECTION 6 - AGENT TEMPLATES */}
      <TemplatesGallerySection />

      {/* SECTION 7 - ANALYTICS */}
      <AnalyticsSection />

      {/* SECTION 8 - LIVE TESTING & HUMAN HANDOFF */}
      <LiveTestingSection />

      {/* SECTION 9 - PRICING */}
      <PricingSection />

      {/* SECTION 10 - FAQ */}
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* SECTION 11 - FINAL CTA */}
      <FinalCTASection />

      {/* FOOTER */}
      <FooterSection />
    </div>
  );
}

// SECTION 1 - HERO
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      {/* Floating Background Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `linear-gradient(135deg, #7D4DFF, #5E00FF)`,
              left: `${10 + (i * 10)}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="px-4 py-2 bg-white rounded-full shadow-md border border-purple-200 text-sm text-gray-700">
                No-code · Agentic AI · Built for SMBs
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Build Agentic AI<br />
              Chatbots & Workflows –<br />
              <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">
                No Code Needed
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              OmniAgent is a multi-channel, agent-centric AI platform for small and medium businesses. Design reusable AI agents on a visual canvas, connect your data, and deploy across web, email, SMS, social, and messaging apps.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8 shadow-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch a Demo
              </Button>
            </div>

            {/* Sub-metrics */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'No-code Visual Builder', icon: Network },
                { label: '20+ Pre-Built Templates', icon: Box },
                { label: '31+ Data Integrations', icon: Database }
              ].map((metric, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
                    <metric.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Visual - Flow Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">Visual Workflow Canvas</span>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">Live</div>
                </div>
              </div>

              {/* Channel Icons at Top */}
              <div className="flex justify-center gap-2 mb-6">
                {[
                  { icon: Globe, color: 'bg-blue-500', label: 'Web' },
                  { icon: Mail, color: 'bg-purple-500', label: 'Email' },
                  { icon: MessageCircle, color: 'bg-green-500', label: 'WhatsApp' },
                  { icon: Instagram, color: 'bg-pink-500', label: 'IG' },
                  { icon: Smartphone, color: 'bg-cyan-500', label: 'SMS' },
                  { icon: Phone, color: 'bg-orange-500', label: 'Voice' }
                ].map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                    className={`${channel.color} w-8 h-8 rounded-lg flex items-center justify-center shadow-sm`}
                    title={channel.label}
                  >
                    <channel.icon className="w-4 h-4 text-white" />
                  </motion.div>
                ))}
              </div>

              {/* Main Flow Nodes */}
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-center gap-4">
                  {[
                    { label: 'Start', color: 'from-green-500 to-emerald-500', icon: Play },
                    { label: 'Agent', color: 'from-[#7D4DFF] to-[#5E00FF]', icon: Sparkles },
                    { label: 'Responder', color: 'from-blue-500 to-cyan-500', icon: MessageCircle }
                  ].map((node, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className={`w-16 h-16 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center shadow-lg relative`}
                      >
                        <node.icon className="w-7 h-7 text-white" />
                        {i < 2 && (
                          <ArrowRight className="absolute -right-8 w-6 h-6 text-gray-400" />
                        )}
                      </motion.div>
                      <span className="text-xs text-gray-600">{node.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Node Types */}
              <div className="flex justify-center gap-2 flex-wrap">
                {['Action', 'Store', 'Notify', 'Detector', 'End'].map((label, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg text-xs text-gray-700 border border-gray-300"
                  >
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// SECTION 2 - STRENGTHS
function StrengthsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const strengths = [
    {
      icon: Users,
      title: 'Agent-Centric Architecture',
      desc: 'Build reusable AI agents that can run across multiple channels and workflows.',
      color: 'from-blue-500 to-cyan-500',
      hasImage: true
    },
    {
      icon: Network,
      title: 'Visual Canvas Builder',
      desc: 'Design complex agent workflows with intuitive drag-and-drop nodes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Deployment',
      desc: 'One agent, everywhere: web chat, email, social, SMS, and voice.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: '31+ Data Integrations',
      desc: 'Connect to your CRMs, databases, knowledge bases, APIs, and business tools.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Sparkles,
      title: 'Multi-LLM Support',
      desc: 'Use multiple AI models and choose the best for performance and cost.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Eye,
      title: 'Real-Time Testing',
      desc: 'Test agents live in the browser before publishing.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      desc: 'Deploy agents instantly with automated infrastructure and embed widgets.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Analytics',
      desc: 'Monitor usage, performance, funnel drop-offs, and sentiment in one place.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="strengths" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Why OmniAgent Stands Out
          </h2>
          <p className="text-gray-600 text-lg">Core differentiators that make us unique</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${strength.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                <strength.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{strength.title}</h3>
              <p className="text-sm text-gray-600">{strength.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Overlay for Agent-Centric Architecture */}
      {hoveredCard === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setHoveredCard(null)}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="relative max-w-5xl w-full mx-6"
          >
            <img 
              src={agentCentricImage} 
              alt="Agent-Centric Architecture" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setHoveredCard(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-gray-700 text-xl">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

// SECTION 3 - MARKET CONTEXT
function MarketContextSection() {
  const contexts = [
    {
      icon: Sparkles,
      title: 'Agentic AI Evolution',
      desc: 'Move beyond simple chatbots to autonomous agents that can plan, reason, and execute multi-step workflows.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Demand',
      desc: 'Customers expect you to be available on web, mobile, voice, and messaging apps. OmniAgent unifies all channels.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'SMB Accessibility',
      desc: 'No-code visual builders make AI automation accessible to small businesses – without developers or data scientists.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'Integration Ecosystems',
      desc: 'Deep integrations with CRMs, knowledge bases, and back-office tools are no longer optional – they\'re essential.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background floating nodes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/30 rounded-2xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Agentic AI for the Next Wave of Automation
          </h2>
          <p className="text-purple-200 text-lg">Why this market is transforming now</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contexts.map((context, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${context.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                <context.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-white">{context.title}</h3>
              <p className="text-purple-100">{context.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 4 - DEPLOYMENT CHANNELS
function DeploymentChannelsSection() {
  const channels = [
    {
      icon: Globe,
      title: 'Web Chat',
      desc: 'Website widget with embedded agents.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      desc: 'Automate replies and ticket creation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Social & Messaging',
      desc: 'WhatsApp, Messenger, Instagram DMs.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Voice/SMS',
      desc: 'Phone & text automation.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Internal Tools',
      desc: 'Use agents inside dashboards and portals.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Deploy agents wherever your customers are
          </h2>
          <p className="text-gray-600 text-lg">Multi-channel deployment made simple</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md`}>
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{channel.title}</h3>
              <p className="text-sm text-gray-600">{channel.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600">
          Design once, reuse agents across multiple channels with unified analytics.
        </p>
      </div>
    </section>
  );
}

// SECTION 5 - WHAT YOU CAN BUILD
function WhatYouCanBuildSection() {
  const features = [
    { icon: Network, title: 'No-code Visual Builder', desc: 'Node-based canvas with drag-and-drop' },
    { icon: Globe, title: 'Multi-Channel Support', desc: 'Email, WhatsApp, Messenger, IG, SMS, Phone' },
    { icon: Users, title: 'Reusable AI Agents', desc: 'Deploy across channels and workspaces' },
    { icon: Database, title: 'Knowledge Integration', desc: 'PDFs, websites, docs, CSV, databases' },
    { icon: Box, title: 'Pre-Built Templates', desc: 'Support, sales, lead gen templates' },
    { icon: Sparkles, title: 'Multi-LLM Support', desc: 'OpenAI, Anthropic, Gemini, and more' },
    { icon: Search, title: 'AI Components', desc: 'Search bar, recommendations, smart text' },
    { icon: Zap, title: 'Widget Publishing', desc: 'Embed codes, plugins, one-click deploy' },
    { icon: Eye, title: 'Real-Time Testing', desc: 'Test and debug before going live' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track performance and insights' },
    { icon: MessageCircle, title: 'Human Handoff', desc: 'Seamless escalation to live agents' },
    { icon: Network, title: '31+ Integrations', desc: 'CRM, email, third-party tools' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Everything You Need in One Agentic Platform
          </h2>
          <p className="text-gray-600 text-lg">A complete toolkit for building autonomous AI agents</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm mb-1 text-gray-900">{feature.title}</h3>
                  <p className="text-xs text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Canvas Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="text-xs text-gray-500 mb-3">Visual Canvas</div>
            <div className="flex gap-2 items-center">
              {[
                { color: 'from-green-500 to-emerald-500' },
                { color: 'from-purple-500 to-pink-500' },
                { color: 'from-blue-500 to-cyan-500' }
              ].map((node, i) => (
                <div key={i} className={`w-12 h-12 bg-gradient-to-br ${node.color} rounded-lg`} />
              ))}
            </div>
          </motion.div>

          {/* Chat Widget Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="text-xs text-gray-500 mb-3">Chat Widget</div>
            <div className="space-y-2">
              <div className="bg-blue-50 rounded-lg p-3 text-xs text-gray-700">
                Hi! How can I help you?
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-700 ml-6">
                I need help with my order
              </div>
            </div>
          </motion.div>

          {/* Analytics Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="text-xs text-gray-500 mb-3">Analytics</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-2 text-white">
                <div className="text-lg">1.2k</div>
                <div className="text-xs opacity-80">Chats</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg p-2 text-white">
                <div className="text-lg">94%</div>
                <div className="text-xs opacity-80">Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-2 text-white">
                <div className="text-lg">1.8s</div>
                <div className="text-xs opacity-80">Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// SECTION 6 - TEMPLATES GALLERY
function TemplatesGallerySection() {
  const templates = [
    { icon: MessageCircle, name: 'Customer Support Agent', workflows: ['Ticket creation', 'Order status lookup'], color: 'from-blue-500 to-cyan-500' },
    { icon: MessageCircle, name: 'WhatsApp Support Agent', workflows: ['Auto-reply', 'Escalation handling'], color: 'from-green-500 to-emerald-500' },
    { icon: Mail, name: 'Email Triage Agent', workflows: ['Email classification', 'Auto-response'], color: 'from-purple-500 to-pink-500' },
    { icon: Globe, name: 'Website Lead Capture', workflows: ['Lead qualification', 'Calendar booking'], color: 'from-orange-500 to-red-500' },
    { icon: CheckCircle, name: 'Appointment Booking', workflows: ['Schedule management', 'Reminders'], color: 'from-indigo-500 to-purple-500' },
    { icon: Users, name: 'Onboarding Agent', workflows: ['User onboarding', 'Document collection'], color: 'from-cyan-500 to-blue-500' },
    { icon: Shield, name: 'KYC / Verification', workflows: ['Identity verification', 'Compliance checks'], color: 'from-violet-500 to-purple-500' },
    { icon: Star, name: 'Feedback & Survey', workflows: ['Collect feedback', 'NPS surveys'], color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <section id="templates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Start fast with agent templates
          </h2>
          <p className="text-gray-600 text-lg">Pre-built agents for common business workflows</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                <template.icon className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg mb-3 text-gray-900">{template.name}</h3>
                <ul className="space-y-2 mb-4">
                  {template.workflows.map((workflow, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {workflow}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-gray-300 text-sm">
                  Use Template
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 7 - ANALYTICS
function AnalyticsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Analytics that show you what's working
          </h2>
          <p className="text-gray-600 text-lg">Real-time insights into your AI agents' performance</p>
        </div>

        {/* Analytics Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden"
        >
          {/* KPI Cards */}
          <div className="grid md:grid-cols-4 gap-6 p-8 border-b border-gray-200">
            {[
              { label: 'Conversations', value: '14,287', icon: MessageCircle, color: 'from-blue-500 to-cyan-500' },
              { label: 'Resolution rate', value: '94%', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
              { label: 'Avg. response time', value: '1.8s', icon: Clock, color: 'from-purple-500 to-pink-500' },
              { label: 'Lead conversions', value: '23%', icon: TrendingUp, color: 'from-orange-500 to-red-500' }
            ].map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${kpi.color} rounded-xl p-6 text-white`}
              >
                <kpi.icon className="w-8 h-8 mb-3 opacity-80" />
                <div className="text-3xl mb-1">{kpi.value}</div>
                <div className="text-sm opacity-90">{kpi.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-gray-900">Performance Over Time</h3>
              <div className="flex gap-3">
                {['By Channel', 'By Agent', 'By Campaign'].map((tab, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg text-sm ${
                      i === 0
                        ? 'bg-[#7D4DFF] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 bg-gradient-to-br from-slate-50 to-purple-50 rounded-xl border border-gray-200 flex items-center justify-center">
              <LineChart className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        </motion.div>

        {/* Analytics Features */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {[
            'Track performance by agent, channel, and workflow',
            'Understand user sentiment and feedback',
            'Export reports to CSV or PDF',
            'Optimize flows with real-time data'
          ].map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 8 - LIVE TESTING & HUMAN HANDOFF
function LiveTestingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Test in real time. Step in when needed.
          </h2>
          <p className="text-gray-600 text-lg">Full control over your AI agents</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-6">
            {[
              { icon: Play, text: 'Live simulation of conversations before production' },
              { icon: Eye, text: 'Trace execution step-by-step in the visual canvas' },
              { icon: Users, text: 'Hand over to human agents seamlessly when needed' },
              { icon: MessageCircle, text: 'Let support or sales teams take over any chat' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8 border border-gray-200 shadow-xl"
          >
            {/* Chat Window */}
            <div className="bg-white rounded-xl p-6 mb-6 shadow-md">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-gray-700">AI Agent</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs">Active</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700">
                      Hi! How can I help you today?
                    </div>
                  </div>
                </div>

                <div className="text-center py-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs">
                    <ArrowRight className="w-3 h-3" />
                    Transferring to Human Agent
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-row-reverse">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex-shrink-0" />
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-2 justify-end mb-2">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Human</span>
                      <span className="text-sm text-gray-700">Sarah (Support)</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 text-sm text-gray-700 inline-block">
                      I'll help you with that right away!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Trace Panel */}
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-xs text-gray-500 mb-3">Execution Trace</div>
              <div className="space-y-2">
                {['Start node executed', 'Agent: Customer Support', 'Confidence: Low → Escalate', 'Human takeover initiated'].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// SECTION 9 - PRICING
function PricingSection() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        '1 workspace',
        '2 agents',
        '1 channel',
        '100 conversations / month',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited agents',
        '3 channels',
        '10,000 conversations / month',
        'Templates & AI components',
        'Standard email support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Pro',
      price: '$79',
      period: '/month',
      features: [
        'Unlimited workspaces',
        'Unlimited channels',
        '50,000 conversations / month',
        'Advanced analytics & reporting',
        'Priority support',
        'Team roles & permissions'
      ],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Start free. Scale as you grow.
          </h2>
          <p className="text-gray-600 text-lg">Simple, transparent pricing for SMBs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-lg border-2 transition-all ${
                plan.popular
                  ? 'border-[#7D4DFF] scale-105 shadow-2xl'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] text-white rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl mb-2 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className={`w-full ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 10 - FAQ
function FAQSection({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (i: number | null) => void }) {
  const faqs = [
    {
      question: "What is agentic AI?",
      answer: "Agentic AI refers to autonomous agents that can plan, reason, and execute multi-step workflows without constant human supervision. Unlike simple chatbots that follow scripts, agentic AI can make decisions, use tools, and adapt to complex scenarios."
    },
    {
      question: "Do I need to know how to code to use OmniAgent?",
      answer: "No! OmniAgent is completely no-code. Our visual canvas builder lets you design complex agent workflows using drag-and-drop nodes. Everything is visual and intuitive – perfect for non-technical teams."
    },
    {
      question: "Which channels does OmniAgent support today?",
      answer: "Currently, we support web chat widgets, email, WhatsApp Business, Facebook Messenger, Instagram DMs, SMS, and phone/voice automation. We're constantly adding new channels based on customer demand."
    },
    {
      question: "Can I connect my CRM / database / email tools?",
      answer: "Yes! OmniAgent offers 31+ data integrations including popular CRMs, databases (MySQL, BigQuery), knowledge bases, and business tools. You can connect your existing data sources and APIs easily."
    },
    {
      question: "How does pricing work for small teams?",
      answer: "We offer a generous free plan to get started with 2 agents and 100 conversations/month. Our Starter plan at $29/month is perfect for small teams, and you can scale to Pro as your business grows."
    },
    {
      question: "Does OmniAgent support human handoff?",
      answer: "Absolutely! You can set up seamless handover to human agents based on triggers like keywords, sentiment, confidence levels, or user requests. Your support team can take over any conversation when needed."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Questions? We've got answers.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-600 border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 11 - FINAL CTA
function FinalCTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#7D4DFF] via-purple-600 to-[#5E00FF]">
      {/* Floating nodes and channel icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl mb-6 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Ready to hire your first AI agent?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Give your small business an AI workforce that runs across all your channels — without writing a single line of code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-white text-[#7D4DFF] hover:bg-gray-100 text-lg px-10 shadow-2xl">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white/20 text-lg px-10">
              Talk to Our Team
            </Button>
          </div>

          <p className="text-purple-200 text-sm">
            ✓ No credit card required  ✓ Free forever plan  ✓ 20+ templates included
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// FOOTER
function FooterSection() {
  const footerLinks = {
    Product: ['Features', 'Templates', 'Pricing', 'Integrations', 'API Docs', 'Changelog'],
    'Use Cases': ['Customer Support', 'Sales Automation', 'Lead Generation', 'E-commerce', 'Healthcare', 'Finance'],
    Resources: ['Documentation', 'Help Center', 'Blog', 'Community', 'Guides', 'Video Tutorials'],
    Company: ['About', 'Careers', 'Contact', 'Partners', 'Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              The no-code agentic AI platform for small and medium businesses.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors text-xs text-gray-400"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 OmniAgent. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}