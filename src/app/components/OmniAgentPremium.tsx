import { motion, useScroll, useTransform } from 'motion/react';
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
  MousePointer,
  Workflow,
  Layers,
  LineChart,
  UserPlus,
  Bot,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { Button } from './ui/button';
import { useState, useRef } from 'react';

export default function OmniAgentPremium() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className="bg-[#0A0A0F] text-white overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} 
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection scrollYProgress={scrollYProgress} />

      {/* Trust Badges */}
      <TrustBadgesSection />

      {/* OmniAgent Strengths */}
      <StrengthsSection />

      {/* Market Shift */}
      <MarketShiftSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Templates */}
      <TemplatesSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Real-Time Testing */}
      <TestingSection />

      {/* Analytics */}
      <AnalyticsSection />

      {/* HITL */}
      <HITLSection />

      {/* Workspaces */}
      <WorkspacesSection />

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />

      {/* Floating Particles */}
      <FloatingParticles />
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#templates" className="text-sm text-gray-400 hover:text-white transition-colors">Templates</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 text-sm">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection({ scrollYProgress }: { scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated Mesh Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          >
            <h1 className="text-6xl lg:text-7xl mb-6 leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Build Multi-Channel<br />
              <span className="bg-gradient-to-r from-[#7D4DFF] via-purple-400 to-teal-400 bg-clip-text text-transparent">
                AI Agents.
              </span><br />
              No Code Needed.
            </h1>

            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              OmniAgent empowers small businesses to create reusable AI agents, deploy them across every channel, and automate workflows — visually, instantly, and without technical skills.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8 shadow-lg shadow-purple-500/30">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Users, label: 'Built for SMBs' },
                { icon: Code2, label: 'No-Code Friendly' },
                { icon: Zap, label: 'Enterprise Performance' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                  <badge.icon className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Wave + Nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AnimatedWaveAndNodes />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Animated Wave and Nodes
function AnimatedWaveAndNodes() {
  return (
    <div className="relative h-[600px]">
      {/* 3D Waveform */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="500" height="400" viewBox="0 0 500 400">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7D4DFF" />
              <stop offset="50%" stopColor="#9D6DFF" />
              <stop offset="100%" stopColor="#5ECFFF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Animated Wave Path */}
          <motion.path
            d="M 50 200 Q 100 150, 150 200 T 250 200 T 350 200 T 450 200"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            animate={{
              d: [
                "M 50 200 Q 100 150, 150 200 T 250 200 T 350 200 T 450 200",
                "M 50 200 Q 100 250, 150 200 T 250 200 T 350 200 T 450 200",
                "M 50 200 Q 100 150, 150 200 T 250 200 T 350 200 T 450 200",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Inner Glow */}
          <motion.circle
            cx="250"
            cy="200"
            r="100"
            fill="url(#waveGradient)"
            opacity="0.1"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        {/* Particle Sparks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${50 + i * 15}%`,
              top: '50%'
            }}
            animate={{
              y: [-20, -60],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating Nodes */}
      <FloatingNode 
        icon={Play} 
        label="Start Node" 
        color="from-blue-500 to-cyan-500" 
        position={{ top: '10%', left: '20%' }}
        delay={0}
      />
      <FloatingNode 
        icon={Sparkles} 
        label="Agent Node" 
        color="from-purple-500 to-pink-500" 
        position={{ top: '30%', right: '15%' }}
        delay={0.5}
      />
      <FloatingNode 
        icon={MessageCircle} 
        label="Responder" 
        color="from-green-500 to-emerald-500" 
        position={{ bottom: '25%', left: '15%' }}
        delay={1}
      />

      {/* Orbiting Channel Icons */}
      <OrbitingChannels />
    </div>
  );
}

// Floating Node Component
function FloatingNode({ icon: Icon, label, color, position, delay }: any) {
  return (
    <motion.div
      className="absolute"
      style={position}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className={`relative bg-gradient-to-br ${color} rounded-2xl p-4 shadow-2xl`}
        animate={{
          boxShadow: [
            '0 0 20px rgba(125, 77, 255, 0.3)',
            '0 0 40px rgba(125, 77, 255, 0.6)',
            '0 0 20px rgba(125, 77, 255, 0.3)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Icon className="w-6 h-6 text-white" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-gray-400">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Orbiting Channels
function OrbitingChannels() {
  const channels = [
    { Icon: Mail, delay: 0 },
    { Icon: MessageCircle, delay: 1 },
    { Icon: Globe, delay: 2 },
    { Icon: Smartphone, delay: 3 }
  ];

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
      {channels.map((channel, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: channel.delay * 5
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <channel.Icon className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Floating Particles
function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

// Trust Badges Section
function TrustBadgesSection() {
  const logos = ['Stripe', 'Shopify', 'Salesforce', 'HubSpot', 'Zendesk', 'Slack', 'Notion', 'Airtable', 'Mailchimp'];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl text-gray-400 mb-8">
            Trusted by teams, creators, and SMBs everywhere
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="text-gray-600 hover:text-gray-400 transition-colors text-sm">
                {logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Strengths Section
function StrengthsSection() {
  const features = [
    {
      icon: Network,
      title: 'Agent-Centric Architecture',
      description: 'Reusable AI agents deployed anywhere'
    },
    {
      icon: Workflow,
      title: 'Visual Canvas Builder',
      description: 'Drag-and-drop multi-step agent flows'
    },
    {
      icon: Globe,
      title: 'Multi-Channel Deployment',
      description: 'Web, Email, WhatsApp, Instagram, SMS, Voice'
    },
    {
      icon: Database,
      title: '31+ Data Integrations',
      description: 'Connect CRMs, DBs, files, APIs'
    },
    {
      icon: Sparkles,
      title: 'Multi-LLM Support',
      description: 'GPT-4, Claude, Gemini & more'
    },
    {
      icon: Zap,
      title: 'One-Click Publishing',
      description: 'Deploy instantly to all channels'
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            OmniAgent Strengths
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale AI agents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                <motion.div
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Market Shift Section
function MarketShiftSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why Agentic AI is Transforming Modern SMBs
            </h2>

            <div className="space-y-6">
              {[
                {
                  from: 'chatbots',
                  to: 'autonomous agents',
                  desc: 'Agents plan, reason, execute tasks'
                },
                {
                  from: 'single-channel',
                  to: 'multi-channel',
                  desc: 'One agent, everywhere your customers are'
                },
                {
                  from: 'complex setup',
                  to: 'no-code creation',
                  desc: 'Build like a pro, no technical skills needed'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <ChevronRight className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-lg mb-2">
                      From <span className="text-gray-500 line-through">{item.from}</span> → <span className="text-purple-400">{item.to}</span>
                    </div>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Animated Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatedInfographic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Animated Infographic
function AnimatedInfographic() {
  return (
    <div className="relative h-[400px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7D4DFF" />
            <stop offset="100%" stopColor="#5ECFFF" />
          </linearGradient>
        </defs>

        {/* Workflow Line */}
        <motion.path
          d="M 50 150 L 150 150 L 200 100 L 250 150 L 350 150"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />

        {/* Nodes */}
        {[50, 150, 250, 350].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={150}
            r="8"
            fill="#7D4DFF"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3 }}
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            style={{
              transformOrigin: `${x}px 150px`
            }}
          />
        ))}
      </svg>

      {/* Channel Icons */}
      <div className="absolute top-4 right-4 flex gap-2">
        {[Mail, MessageCircle, Globe, Phone].map((Icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center"
          >
            <Icon className="w-5 h-5 text-white" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { icon: Workflow, title: 'Create Agent', desc: 'Build visually using drag-and-drop canvas' },
    { icon: Network, title: 'Connect Channels & Data', desc: 'Add WhatsApp, Email, knowledge base, CRM, etc.' },
    { icon: Zap, title: 'Publish Everywhere', desc: 'Deploy with one click' }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How OmniAgent Works
          </h2>
          <p className="text-xl text-gray-400">Three simple steps to go live</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 hidden lg:block" style={{ width: 'calc(100% - 200px)', left: '100px' }}>
            <motion.div
              className="h-full bg-white"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center relative"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(125, 77, 255, 0.5)',
                      '0 0 50px rgba(125, 77, 255, 0.8)',
                      '0 0 30px rgba(125, 77, 255, 0.5)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
                >
                  <step.icon className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black text-sm">
                    {i + 1}
                  </div>
                </motion.div>
                <h3 className="text-2xl mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Templates Section
function TemplatesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const templates = [
    { icon: MessageCircle, title: 'Customer Support Agent', color: 'from-blue-500 to-cyan-500' },
    { icon: UserPlus, title: 'Lead Qualification Agent', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, title: 'Sales Assistant', color: 'from-green-500 to-emerald-500' },
    { icon: Bot, title: 'FAQ Bot', color: 'from-orange-500 to-red-500' },
    { icon: MessageCircle, title: 'WhatsApp Business Agent', color: 'from-teal-500 to-blue-500' },
    { icon: Phone, title: 'Voicemail Detection Agent', color: 'from-indigo-500 to-purple-500' },
    { icon: FileText, title: 'Content Writer Agent', color: 'from-pink-500 to-rose-500' },
    { icon: Box, title: 'Order Tracking Agent', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section id="templates" className="py-32 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Prebuilt Templates
          </h2>
          <p className="text-xl text-gray-400">Start fast with ready-to-use agent templates</p>
        </motion.div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 320}px` }}
              transition={{ duration: 0.5 }}
            >
              {templates.map((template, i) => (
                <motion.div
                  key={i}
                  whileHover={{ 
                    rotateY: 5, 
                    rotateX: -5,
                    scale: 1.05
                  }}
                  className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <template.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{template.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">Pre-configured agent ready to deploy</p>
                  <Button variant="outline" className="w-full border-white/20 hover:bg-white/10">
                    Use Template
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="border-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentIndex(Math.min(templates.length - 3, currentIndex + 1))}
              disabled={currentIndex >= templates.length - 3}
              className="border-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Integrations Section
function IntegrationsSection() {
  const integrations = [
    { name: 'Stripe', icon: Database },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'BigQuery', icon: Database },
    { name: 'Airtable', icon: Database },
    { name: 'HubSpot', icon: Users },
    { name: 'CRM APIs', icon: Network },
    { name: 'File Loaders', icon: FileText },
    { name: 'PDF Loader', icon: FileText },
    { name: 'Web Scraper', icon: Globe },
    { name: 'Salesforce', icon: Users },
    { name: 'Zendesk', icon: MessageCircle }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            31+ Integrations
          </h2>
          <p className="text-xl text-gray-400">Connect to your favorite tools and data sources</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ 
                y: -8,
                borderColor: 'rgba(125, 77, 255, 0.5)'
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:bg-white/10 transition-all"
            >
              <integration.icon className="w-8 h-8 text-purple-400" />
              <span className="text-sm text-gray-300 text-center">{integration.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testing Section
function TestingSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Test Your AI Agents in Real Time
            </h2>

            <div className="space-y-4">
              {[
                { icon: Eye, text: 'Debug agent behavior' },
                { icon: Database, text: 'View memory & logs' },
                { icon: CheckCircle, text: 'Validate workflow logic' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-purple-400" />
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TestChatWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Test Chat Window
function TestChatWindow() {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">Test Agent</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div className="bg-gray-800/50 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
            <p className="text-sm">Hi! I need help with my order</p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
            <p className="text-sm">I'd be happy to help! Can you provide your order number?</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4" />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div className="bg-gray-800/50 rounded-2xl rounded-tl-none p-4 flex gap-2">
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Analytics Section  
function AnalyticsSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Powerful Analytics
          </h2>
          <p className="text-xl text-gray-400">Track performance and optimize your agents</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Conversations', value: '12.4K', change: '+23%', color: 'from-blue-500 to-cyan-500' },
            { label: 'Leads Generated', value: '847', change: '+18%', color: 'from-purple-500 to-pink-500' },
            { label: 'Avg Response', value: '2.3s', change: '-12%', color: 'from-green-500 to-emerald-500' },
            { label: 'CSAT Score', value: '4.8', change: '+5%', color: 'from-orange-500 to-red-500' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
              <div className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {stat.value}
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// HITL Section
function HITLSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Smart Escalation to Humans When Needed
            </h2>

            <div className="space-y-4">
              {[
                { icon: Bell, text: 'Sentiment alerts' },
                { icon: Clock, text: 'Time-based triggers' },
                { icon: MessageCircle, text: 'Keywords' },
                { icon: Users, text: 'Operator assignment' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-sm">Sarah Johnson</div>
                    <div className="text-xs text-gray-400">Available</div>
                  </div>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Assign
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div>
                    <div className="text-sm">Mike Chen</div>
                    <div className="text-xs text-gray-400">Available</div>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="border-white/20">
                  Assign
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Workspaces Section
function WorkspacesSection() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Workspaces for Teams
          </h2>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8">
            <div className="space-y-3 mb-6">
              {['Production Workspace', 'Staging Environment', 'Client Portal'].map((ws, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-purple-400" />
                    <span>{ws}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>

            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90">
              <Sparkles className="w-5 h-5 mr-2" />
              Create Workspace
            </Button>
          </div>

          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Perfect for Agencies · Multi-Tenant · Role-Based Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      features: ['1 Agent', '100 messages/mo', 'Basic analytics', 'Community support']
    },
    {
      name: 'Starter',
      price: isYearly ? 24 : 29,
      popular: true,
      features: ['5 Agents', '5,000 messages/mo', 'Advanced analytics', 'Email support', 'All channels']
    },
    {
      name: 'Pro',
      price: isYearly ? 79 : 99,
      features: ['Unlimited agents', 'Unlimited messages', 'Premium analytics', 'Priority support', 'Custom integrations']
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Simple, Transparent Pricing
          </h2>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={!isYearly ? 'text-white' : 'text-gray-400'}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-white/10 rounded-full relative transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full absolute top-0.5"
                animate={{ left: isYearly ? '28px' : '2px' }}
              />
            </button>
            <span className={isYearly ? 'text-white' : 'text-gray-400'}>
              Yearly <span className="text-green-400 text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 ${
                plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl mb-4">{plan.name}</h3>
                <div className="text-5xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  ${plan.price}
                </div>
                <div className="text-sm text-gray-400">per month</div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Get Started
              </Button>
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
      quote: "OmniAgent transformed our customer support. We're now handling 3x more inquiries with the same team.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      rating: 5
    },
    {
      quote: "The visual builder is incredibly intuitive. We built our first agent in under 30 minutes.",
      author: "Michael Chen",
      role: "CTO, GrowthCo",
      rating: 5
    },
    {
      quote: "Multi-channel deployment is a game changer. One agent, everywhere our customers are.",
      author: "Emily Rodriguez",
      role: "VP Operations, RetailHub",
      rating: 5
    }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Loved by Teams Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
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
    <section className="py-32 relative overflow-hidden">
      {/* Background Wave */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <motion.path
            d="M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z"
            fill="url(#ctaGradient)"
            opacity="0.1"
            animate={{
              d: [
                "M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z",
                "M 0 200 Q 250 300, 500 200 T 1000 200 L 1000 400 L 0 400 Z",
                "M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7D4DFF" />
              <stop offset="100%" stopColor="#5ECFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Build Your First AI Agent<br />
            in Minutes — No Code Required
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-lg px-10">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-10">
              Join Community
            </Button>
          </div>

          <p className="text-gray-400">14-day free trial · No credit card required · Cancel anytime</p>
        </motion.div>
      </div>

      {/* Floating AI Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = {
    Product: ['Features', 'Templates', 'Integrations', 'Pricing', 'Changelog'],
    Solutions: ['Customer Support', 'Lead Generation', 'Sales', 'Marketing', 'E-commerce'],
    Resources: ['Documentation', 'API Reference', 'Guides', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Contact', 'Privacy', 'Terms']
  };

  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
            </div>
            <p className="text-sm text-gray-400">
              The no-code agentic AI platform for SMBs.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm mb-4">{category}</h3>
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

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 OmniAgent. All rights reserved.</p>
          <div className="flex gap-6">
            {[Network, MessageCircle, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
