import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  MessageCircle, 
  Mail, 
  Globe, 
  CheckCircle, 
  Users, 
  Zap, 
  BarChart3, 
  Network, 
  Database, 
  Eye, 
  Phone, 
  Instagram,
  Smartphone,
  Clock,
  TrendingUp,
  Shield,
  Star,
  Award,
  Code2,
  Box,
  FileText,
  Bell,
  Workflow,
  Layers,
  Bot,
  Send,
  BookOpen,
  UserPlus,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';

export default function OmniAgentBotpress() {
  return (
    <div className="bg-[#0D0D0F] text-white overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30" 
           style={{ 
             backgroundImage: 'linear-gradient(#202022 1px, transparent 1px), linear-gradient(90deg, #202022 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Funding Strip */}
      <FundingStrip />

      {/* Core Value Section */}
      <CoreValueSection />

      {/* Feature Highlights */}
      <FeatureHighlights />

      {/* Engine Section */}
      <EngineSection />

      {/* Modules Section */}
      <ModulesSection />

      {/* Statistics */}
      <StatisticsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Community */}
      <CommunitySection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0D0D0F]/80 backdrop-blur-xl border-b border-[#1F1F22]">
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8C52FF] to-[#4A5CFF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">OmniAgent</span>
            </div>
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <a href="#product" className="text-gray-400 hover:text-white transition-colors">Product</a>
              <a href="#templates" className="text-gray-400 hover:text-white transition-colors">Templates</a>
              <a href="#channels" className="text-gray-400 hover:text-white transition-colors">Channels</a>
              <a href="#components" className="text-gray-400 hover:text-white transition-colors">Components</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm text-gray-300 hover:text-white">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] hover:opacity-90 text-sm shadow-lg shadow-purple-500/30">
              Start Free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #8C52FF 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl lg:text-8xl mb-8 leading-tight tracking-tight">
              The Complete<br />
              <span className="bg-gradient-to-r from-[#8C52FF] via-[#6B5FFF] to-[#4A5CFF] bg-clip-text text-transparent">
                Multi-Channel
              </span><br />
              AI Agent Platform
            </h1>

            <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
              Build, deploy, and scale no-code AI agents for your business.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] hover:opacity-90 text-lg px-10 shadow-2xl shadow-purple-500/40">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#1F1F22] bg-transparent hover:bg-white/5 text-lg px-10">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Hero Animation */}
        <HeroAnimation />
      </div>
    </section>
  );
}

// Hero Animation
function HeroAnimation() {
  return (
    <div className="relative max-w-5xl mx-auto h-[500px]">
      {/* Center Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#1A1A1D]/40 backdrop-blur-sm border border-[#2A2A2D] rounded-3xl overflow-hidden"
      >
        {/* Flow Nodes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-20">
          <div className="flex items-center justify-center gap-8">
            {/* Start Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/50">
                <Play className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                Start
              </div>
            </motion.div>

            {/* Connection Line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-purple-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Agent Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#8C52FF] to-[#4A5CFF] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                Agent
              </div>
            </motion.div>

            {/* Connection Line */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full absolute top-1/2 -translate-y-1/2"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            </motion.div>

            {/* Responder Node */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
              className="relative"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400 whitespace-nowrap">
                Responder
              </div>
            </motion.div>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating Channel Icons */}
      {[
        { Icon: MessageCircle, label: 'WhatsApp', color: 'from-green-500 to-emerald-500', position: { top: '10%', left: '5%' } },
        { Icon: Globe, label: 'Web', color: 'from-blue-500 to-cyan-500', position: { top: '15%', right: '8%' } },
        { Icon: Smartphone, label: 'SMS', color: 'from-purple-500 to-pink-500', position: { bottom: '15%', left: '10%' } },
        { Icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-rose-500', position: { top: '50%', right: '2%' } },
        { Icon: Mail, label: 'Email', color: 'from-orange-500 to-red-500', position: { bottom: '20%', right: '12%' } },
        { Icon: Phone, label: 'Voice', color: 'from-indigo-500 to-purple-500', position: { top: '40%', left: '3%' } }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
          className="absolute"
          style={item.position}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
            className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-2xl`}
          >
            <item.Icon className="w-7 h-7 text-white" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// Funding Strip
function FundingStrip() {
  const logos = ['WhatsApp', 'Meta', 'Shopify', 'Twilio', 'Zapier', 'Stripe'];

  return (
    <section className="py-20">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#8C52FF]/10 via-[#4A5CFF]/10 to-[#8C52FF]/10 border border-[#8C52FF]/30 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl mb-2">
                Trusted by <span className="bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] bg-clip-text text-transparent">14,000+</span> businesses
              </h3>
              <p className="text-gray-400">across the world</p>
            </div>
            <div className="flex items-center gap-8 flex-wrap">
              {logos.map((logo, i) => (
                <div key={i} className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Core Value Section
function CoreValueSection() {
  return (
    <section className="py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl mb-6 leading-tight max-w-5xl mx-auto">
            OmniAgent provides the full infrastructure to build and run AI agents on any channel.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Card 1 - Chat Interfaces */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2D] rounded-[14px] p-8 hover:border-[#8C52FF]/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md px-8">
                <div className="bg-[#0D0D0F] rounded-lg p-4 border border-[#2A2A2D]">
                  <Globe className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-xs text-gray-400">Website Chat</div>
                </div>
                <div className="bg-[#0D0D0F] rounded-lg p-4 border border-[#2A2A2D]">
                  <MessageCircle className="w-6 h-6 text-green-400 mb-2" />
                  <div className="text-xs text-gray-400">WhatsApp</div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl mb-3">Multi-Channel Deployment</h3>
            <p className="text-gray-400">Deploy your agents across web, WhatsApp, SMS, email, and voice channels instantly.</p>
          </motion.div>

          {/* Card 2 - Visual Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2D] rounded-[14px] p-8 hover:border-[#8C52FF]/50 transition-all"
          >
            <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl flex items-center justify-center mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-600" />
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-600" />
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Send className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl mb-3">Visual Canvas Builder</h3>
            <p className="text-gray-400">Design complex workflows with our intuitive drag-and-drop canvas. No coding required.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Feature Highlights
function FeatureHighlights() {
  const features = [
    {
      icon: Network,
      title: 'Agent-Centric Architecture',
      description: 'Build reusable agents that work across all channels'
    },
    {
      icon: FileText,
      title: '13 Ready-to-Use Templates',
      description: 'Start fast with pre-built agent templates'
    },
    {
      icon: Box,
      title: '7 AI Components',
      description: 'Widgets for forms, buttons, carousels, and more'
    },
    {
      icon: Globe,
      title: 'Full Multi-Channel',
      description: 'Web, Email, WhatsApp, Instagram, SMS, Voice'
    }
  ];

  return (
    <section className="py-32 border-y border-[#1F1F22]">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1A1D]/50 border border-[#2A2A2D] rounded-[14px] p-8 hover:border-[#8C52FF]/50 transition-all"
            >
              <feature.icon className="w-12 h-12 text-[#8C52FF] mb-6" />
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Engine Section
function EngineSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-8xl bg-gradient-to-r from-[#8C52FF] via-[#6B5FFF] to-[#4A5CFF] bg-clip-text text-transparent mb-4">
            OmniAgent Engine
          </h2>
          <p className="text-2xl text-gray-400">Powerful infrastructure for AI agents</p>
        </motion.div>

        {/* Floating Screenshots */}
        <div className="relative h-[600px]">
          {/* Center Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] bg-[#1A1A1D] border border-[#2A2A2D] rounded-2xl p-8 shadow-2xl"
            style={{ transform: 'translate(-50%, -50%) perspective(1000px) rotateY(-5deg)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-500">workflow.canvas</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl flex items-center justify-center">
              <Workflow className="w-20 h-20 text-gray-700" />
            </div>
          </motion.div>

          {/* Agent Settings - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute left-0 top-0 w-80 bg-[#1A1A1D] border border-[#2A2A2D] rounded-xl p-6 shadow-xl"
            style={{ transform: 'perspective(1000px) rotateY(10deg)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm">Agent Settings</div>
                <div className="text-xs text-gray-500">Support Bot</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-800 rounded w-3/4" />
              <div className="h-2 bg-gray-800 rounded w-1/2" />
              <div className="h-2 bg-gray-800 rounded w-5/6" />
            </div>
          </motion.div>

          {/* WhatsApp Flow - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute right-0 bottom-0 w-72 bg-[#1A1A1D] border border-[#2A2A2D] rounded-xl p-6 shadow-xl"
            style={{ transform: 'perspective(1000px) rotateY(-10deg)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-green-400" />
              <div className="text-sm">WhatsApp Flow</div>
            </div>
            <div className="space-y-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div className="h-2 bg-green-500/50 rounded w-2/3" />
              </div>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 ml-8">
                <div className="h-2 bg-purple-500/50 rounded w-3/4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Modules Section
function ModulesSection() {
  const modules = ['Agents', 'Channels', 'Campaigns', 'Knowledge Base', 'Analytics', 'Human-in-the-Loop'];

  return (
    <section className="py-32 bg-gradient-to-br from-teal-500/5 via-green-500/5 to-emerald-500/5">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Modules List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl mb-12">Platform Modules</h2>
            <div className="space-y-4">
              {modules.map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-[#1A1A1D]/50 border border-[#2A2A2D] rounded-xl hover:border-teal-500/50 transition-all cursor-pointer"
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                  <span className="text-lg">{module}</span>
                  <ChevronRight className="w-5 h-5 ml-auto text-gray-600" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1A1D] border border-[#2A2A2D] rounded-2xl p-8"
          >
            <div className="aspect-square bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-xl flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="w-16 h-16 bg-teal-500/20 border border-teal-500/30 rounded-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Statistics Section
function StatisticsSection() {
  const stats = [
    { value: '42,483', label: 'agents created' },
    { value: '480M', label: 'messages processed' },
    { value: '757.8K', label: 'active users' }
  ];

  return (
    <section className="py-32">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-7xl mb-2 bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
              {i < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-[#2A2A2D]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "OmniAgent transformed how we handle customer support. Response times dropped by 70%.",
      author: "Sarah Chen",
      role: "Head of Support, TechCorp",
      rating: "98%",
      color: 'from-green-400/20 to-emerald-400/20',
      border: 'border-green-400/30'
    },
    {
      quote: "The visual builder is incredibly intuitive. We built our first agent in under an hour.",
      author: "Mike Rodriguez",
      role: "CTO, StartupXYZ",
      rating: "95%",
      color: 'from-purple-400/20 to-pink-400/20',
      border: 'border-purple-400/30'
    },
    {
      quote: "Multi-channel deployment is seamless. One agent, everywhere our customers are.",
      author: "Emily Watson",
      role: "VP Operations, RetailCo",
      rating: "97%",
      color: 'from-yellow-400/20 to-orange-400/20',
      border: 'border-yellow-400/30'
    }
  ];

  return (
    <section className="py-32 bg-[#F6F7F5]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl text-gray-900 mb-4">
            Trusted by businesses across the world.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${testimonial.color} border ${testimonial.border} rounded-2xl p-8`}
            >
              <div className="text-4xl text-gray-900 mb-6">
                {testimonial.rating}
                <span className="text-lg text-gray-600 ml-2">satisfaction</span>
              </div>
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Community Section
function CommunitySection() {
  return (
    <section className="py-32 bg-[#0D0D0F]">
      <div className="max-w-[1600px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl mb-6">
            Join the fastest-growing AI agent community.
          </h2>
          <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-lg px-10">
            <MessageSquare className="w-5 h-5 mr-2" />
            Join Discord
          </Button>
        </motion.div>

        {/* Community Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#1A1A1D] border border-[#2A2A2D] rounded-xl p-6 hover:border-[#8C52FF]/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <div className="text-sm">User {i + 1}</div>
                  <div className="text-xs text-gray-500">Community Member</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Just built my first AI agent with OmniAgent! Amazing platform 🚀
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-32 bg-[#0D0D0F]">
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl mb-8 leading-tight">
              Build better with<br />
              <span className="bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] bg-clip-text text-transparent">
                OmniAgent
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Start building AI agents for your business today. No credit card required.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-[#8C52FF] to-[#4A5CFF] hover:opacity-90 text-lg px-10 shadow-2xl shadow-purple-500/40">
              Start Building
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              {/* 3D Illustration Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-32 h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl border border-purple-500/30"
                      style={{
                        left: `${i * 30}px`,
                        top: `${i * 40}px`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotateZ: [0, 5, 0, -5, 0]
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Product: ['Features', 'Templates', 'Channels', 'Integrations', 'Pricing'],
    Templates: ['Support Bot', 'Sales Agent', 'Lead Gen', 'FAQ Bot', 'All Templates'],
    Channels: ['Web Chat', 'WhatsApp', 'Instagram', 'Email', 'SMS', 'Voice'],
    Developers: ['Documentation', 'API Reference', 'SDKs', 'Webhooks', 'Community'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'Cookies']
  };

  return (
    <footer className="border-t border-[#1F1F22] py-16 px-8 bg-[#0D0D0F]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#8C52FF] to-[#4A5CFF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">OmniAgent</span>
            </div>
            <p className="text-sm text-gray-500">
              The multi-channel AI agent platform for modern businesses.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm mb-4 text-gray-400">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#1F1F22] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 OmniAgent. All rights reserved.</p>
          <div className="flex gap-6">
            {[MessageCircle, Mail, Network].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-[#1A1A1D] border border-[#2A2A2D] rounded-lg flex items-center justify-center hover:border-[#8C52FF]/50 transition-all">
                <Icon className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
