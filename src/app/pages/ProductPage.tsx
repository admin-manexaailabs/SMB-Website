import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  ArrowRight, 
  Sparkles, 
  Bot,
  Workflow,
  Network,
  Users,
  Database,
  Zap,
  CheckCircle,
  Code2,
  Eye,
  MessageSquare,
  FileText,
  Send,
  Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';

export default function ProductPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-6 text-sm text-purple-700">
              Product Overview
            </div>
            <h1 className="text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The Complete{' '}
              <span className="bg-gradient-to-r from-[#7D4DFF] via-[#6B5FFF] to-[#5E00FF] bg-clip-text text-transparent">
                Agentic AI Platform
              </span>
              <br />
              for Small Businesses
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Build, deploy, and scale AI agents across every customer channel — all without writing code.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-10 shadow-2xl shadow-purple-500/40 rounded-full">
                  Start Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-lg px-10 rounded-full">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to automate, assist, and scale your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: 'Agentic AI Performance',
                description: 'AI agents that reason, plan, and execute multi-step tasks autonomously without human intervention.'
              },
              {
                icon: Workflow,
                title: 'Visual No-Code Builder',
                description: 'Drag-and-drop interface for building complex workflows with prompts, tasks, conditions, and routing logic.'
              },
              {
                icon: Network,
                title: 'Multi-Channel Deployment',
                description: 'Deploy to WhatsApp, voice calls, SMS, email, web chat, Instagram DM, and custom APIs with one click.'
              },
              {
                icon: Users,
                title: 'Unified Inbox + Human Handoff',
                description: 'Manage all conversations in one place with seamless AI-to-human escalation when needed.'
              },
              {
                icon: Database,
                title: 'Knowledge & Data Integrations',
                description: 'Connect to your existing systems: Shopify, MySQL, BigQuery, REST APIs, and upload PDFs for context.'
              },
              {
                icon: Sparkles,
                title: 'Multi-LLM Support',
                description: 'Choose the best AI model for each task: GPT-4, Claude, Gemini, or Llama — all in one platform.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How SMB Flow Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From idea to deployed AI agent in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Design Your Agent',
                description: 'Use our visual builder to create workflows. No coding required — just drag, drop, and configure.',
                icon: Workflow
              },
              {
                step: '02',
                title: 'Connect Your Data',
                description: 'Link your databases, APIs, and knowledge bases. Upload documents or connect to existing systems.',
                icon: Database
              },
              {
                step: '03',
                title: 'Deploy Everywhere',
                description: 'Launch your AI agent across all channels with one click. Monitor performance and optimize in real-time.',
                icon: Network
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="text-7xl font-bold text-purple-100 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.step}
                </div>
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl mb-4 mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-8 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Build Your First AI Agent?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of businesses automating with SMB Flow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 rounded-full shadow-xl">
                  Start Free →
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-10 rounded-full">
                Schedule Demo
              </Button>
            </div>
            <p className="text-white/80 mt-6">No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center gap-2 justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>SMB Flow</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm mb-8">
              {[
                { label: 'Product', to: '/product' },
                { label: 'Templates', to: '/templates' },
                { label: 'Pricing', to: '/pricing' },
                { label: 'Channels', to: '/channels' },
                { label: 'Docs', to: '/docs' },
                { label: 'Careers', to: '#' },
                { label: 'Contact', to: '#' }
              ].map((link, i, arr) => (
                <div key={link.label} className="flex items-center">
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {i < arr.length - 1 && <span className="mx-2 text-gray-600">|</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">© 2025 SMB Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}