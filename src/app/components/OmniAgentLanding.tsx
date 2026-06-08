import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Mail, 
  Globe, 
  CheckCircle, 
  Users, 
  Zap, 
  BarChart3, 
  Network, 
  ChevronDown, 
  Database, 
  Eye, 
  Phone, 
  Instagram,
  Smartphone,
  Clock,
  TrendingUp,
  Shield,
  Play,
  Star,
  Award,
  Code2
} from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function OmniAgentLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Scale Section */}
      <ScaleSection />

      {/* Visual Workflow Section */}
      <VisualWorkflowSection />

      {/* Multi-Channel Section */}
      <MultiChannelSection />

      {/* Features Grid */}
      <FeaturesGridSection />

      {/* Trust Section */}
      <TrustSection />

      {/* Use Cases */}
      <UseCasesSection />

      {/* Integration Section */}
      <IntegrationSection />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection openFaq={openFaq} setOpenFaq={setOpenFaq} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
            <a href="#use-cases" className="text-gray-400 hover:text-white transition-colors text-sm">Use Cases</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
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
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(125,77,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,77,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">No-code Agentic AI Platform for SMBs</span>
            </div>

            <h1 className="text-5xl lg:text-7xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Build AI Agents<br />
              That Work Across<br />
              <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">
                Every Channel
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              OmniAgent is a multi-channel, agent-centric AI platform. Design reusable AI agents on a visual canvas and deploy across web, email, SMS, social, and voice.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                20+ templates included
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                31+ integrations
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Globe, label: 'Web Chat', color: 'from-blue-500 to-cyan-500' },
                { icon: Mail, label: 'Email', color: 'from-purple-500 to-pink-500' },
                { icon: MessageCircle, label: 'WhatsApp', color: 'from-green-500 to-emerald-500' },
                { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-rose-500' },
                { icon: Smartphone, label: 'SMS', color: 'from-cyan-500 to-blue-500' },
                { icon: Phone, label: 'Voice', color: 'from-orange-500 to-red-500' }
              ].map((channel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`bg-gradient-to-br ${channel.color} rounded-xl p-6 flex flex-col items-center justify-center gap-3`}
                >
                  <channel.icon className="w-8 h-8 text-white" />
                  <span className="text-sm text-white/90">{channel.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Scale Section
function ScaleSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Scale without limits
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build once, deploy everywhere. Your AI agents work 24/7 across all your channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              stat: '10,000+',
              label: 'Conversations per month',
              description: 'Handle unlimited customer interactions'
            },
            {
              stat: '99.9%',
              label: 'Uptime guarantee',
              description: 'Enterprise-grade reliability'
            },
            {
              stat: '<2s',
              label: 'Response time',
              description: 'Lightning-fast AI responses'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="text-5xl mb-3 bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {item.stat}
              </div>
              <div className="text-lg mb-2">{item.label}</div>
              <div className="text-sm text-gray-400">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Visual Workflow Section
function VisualWorkflowSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6 text-sm text-purple-300">
              Visual Canvas Builder
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Design workflows visually
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              No coding required. Build complex agent workflows with our intuitive drag-and-drop canvas. Connect nodes, add logic, and test in real-time.
            </p>
            
            <div className="space-y-4">
              {[
                'Drag-and-drop node-based editor',
                'Pre-built workflow templates',
                'Real-time testing and debugging',
                'Version control and rollback'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm text-gray-400">workflow_canvas.flow</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Flow Nodes */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap pt-4">
                  {['Action', 'Condition', 'Loop', 'API Call', 'Database'].map((node, i) => (
                    <div key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                      {node}
                    </div>
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

// Multi-Channel Section
function MultiChannelSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: 'Website', users: '5.2k' },
                  { icon: Mail, label: 'Email', users: '3.1k' },
                  { icon: MessageCircle, label: 'WhatsApp', users: '8.7k' },
                  { icon: Instagram, label: 'Instagram', users: '2.4k' },
                  { icon: Smartphone, label: 'SMS', users: '1.9k' },
                  { icon: Phone, label: 'Voice', users: '892' }
                ].map((channel, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
                  >
                    <channel.icon className="w-6 h-6 text-purple-400 mb-3" />
                    <div className="text-sm text-gray-400 mb-1">{channel.label}</div>
                    <div className="text-xl">{channel.users}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6 text-sm text-blue-300">
              Omnichannel Deployment
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              One agent,<br />every channel
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Deploy your AI agents across web, email, WhatsApp, Instagram, SMS, and voice. Manage everything from a single dashboard with unified analytics.
            </p>
            
            <div className="space-y-4">
              {[
                'Deploy to 6+ channels instantly',
                'Unified conversation history',
                'Cross-channel analytics',
                'One-click integrations'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Features Grid
function FeaturesGridSection() {
  const features = [
    {
      icon: Network,
      title: 'Agent-Centric Architecture',
      description: 'Build reusable AI agents that work across all channels'
    },
    {
      icon: Database,
      title: '31+ Integrations',
      description: 'Connect to CRMs, databases, and business tools'
    },
    {
      icon: Sparkles,
      title: 'Multi-LLM Support',
      description: 'Use OpenAI, Anthropic, Gemini, and more'
    },
    {
      icon: Eye,
      title: 'Real-Time Testing',
      description: 'Test and debug agents before going live'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance, sentiment, and conversions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 compliant with role-based access'
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Everything you need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A complete platform for building, deploying, and managing AI agents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why SMBs choose<br />OmniAgent
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Built specifically for small and medium businesses. No coding required, enterprise features included.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'No-code platform',
                  desc: 'Visual builder anyone can use'
                },
                {
                  icon: TrendingUp,
                  title: 'Scale as you grow',
                  desc: 'From 100 to 100k conversations'
                },
                {
                  icon: Users,
                  title: 'Human handoff',
                  desc: 'Seamless escalation to your team'
                },
                {
                  icon: Clock,
                  title: 'Launch in minutes',
                  desc: '20+ pre-built templates'
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1762341118883-13bbd9d79927?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0MTE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Use Cases
function UseCasesSection() {
  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automate FAQs, ticket creation, and escalation',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Sales Automation',
      description: 'Qualify leads and book meetings automatically',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Built for your business
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From customer support to sales automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <div className={`h-48 bg-gradient-to-br ${useCase.color} flex items-center justify-center`}>
                <useCase.icon className="w-20 h-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Integration Section
function IntegrationSection() {
  const integrations = [
    'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'Zendesk', 'Slack',
    'Google Sheets', 'Airtable', 'Notion', 'Intercom', 'Mailchimp', 'Twilio'
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Integrate with your stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            31+ integrations with your favorite tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center hover:bg-white/10 transition-all"
            >
              <span className="text-sm text-gray-400">{integration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-purple-600/30 rounded-full blur-[150px]" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Ready to automate<br />with AI agents?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of SMBs using OmniAgent to automate customer interactions across every channel.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-10">
              Start Building Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-10">
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-gray-500">
            ✓ No credit card required  ✓ Free forever plan  ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (i: number | null) => void }) {
  const faqs = [
    {
      question: 'What is agentic AI?',
      answer: 'Agentic AI refers to autonomous agents that can plan, reason, and execute multi-step workflows without constant human supervision.'
    },
    {
      question: 'Do I need coding skills?',
      answer: 'No! OmniAgent is completely no-code. Our visual canvas builder lets you design complex workflows using drag-and-drop.'
    },
    {
      question: 'Which channels are supported?',
      answer: 'We support web chat, email, WhatsApp, Instagram, Facebook Messenger, SMS, and voice calls.'
    },
    {
      question: 'Can I integrate with my existing tools?',
      answer: 'Yes! We offer 31+ integrations including popular CRMs, databases, and business tools.'
    },
    {
      question: 'What about pricing?',
      answer: 'We offer a free plan to get started, with paid plans starting at $29/month for growing businesses.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! You can start for free with no credit card required. Our free plan includes 2 agents and 100 conversations per month.'
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Frequently asked questions
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
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-400 border-t border-white/10">
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

// Footer
function Footer() {
  const footerLinks = {
    Product: ['Features', 'Templates', 'Integrations', 'Pricing', 'Changelog'],
    Resources: ['Documentation', 'API Reference', 'Guides', 'Blog', 'Community'],
    Company: ['About', 'Careers', 'Contact', 'Privacy', 'Terms']
  };

  return (
    <footer className="border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>OmniAgent</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              The no-code agentic AI platform for SMBs.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm">{category}</h3>
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2025 OmniAgent. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
