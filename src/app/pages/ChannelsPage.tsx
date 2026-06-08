import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Sparkles, 
  MessageCircle,
  Phone,
  Smartphone,
  Mail,
  Globe,
  Instagram,
  Code2,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';

export default function ChannelsPage() {
  const channels = [
    {
      icon: MessageCircle,
      name: 'WhatsApp Business',
      description: 'Reach customers on their favorite messaging app with automated conversations',
      features: [
        'Rich media support (images, videos, PDFs)',
        'Template message approval',
        'Business API integration',
        'Two-way conversations'
      ],
      color: 'from-green-400 to-green-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Phone,
      name: 'Voice AI (Phone Calls)',
      description: 'Handle inbound and outbound calls with natural voice AI automation',
      features: [
        'Natural language understanding',
        'Multilingual support',
        'Call routing and transfers',
        'Recording and transcription'
      ],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Smartphone,
      name: 'SMS',
      description: 'Send and receive text messages for quick customer interactions',
      features: [
        'Global SMS coverage',
        'Two-way messaging',
        'Delivery tracking',
        'Campaign automation'
      ],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Mail,
      name: 'Email',
      description: 'Automate email responses and workflows with intelligent AI agents',
      features: [
        'Smart inbox management',
        'Auto-reply with context',
        'Thread tracking',
        'Rich HTML formatting'
      ],
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-orange-50'
    },
    {
      icon: Globe,
      name: 'Web Chat',
      description: 'Embed AI chat directly on your website for instant customer support',
      features: [
        'Customizable widget design',
        'Proactive chat triggers',
        'File sharing support',
        'Analytics dashboard'
      ],
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'from-cyan-50 to-blue-50'
    },
    {
      icon: Instagram,
      name: 'Instagram DM',
      description: 'Automate Instagram direct message responses for social engagement',
      features: [
        'Auto-respond to DMs',
        'Story mention tracking',
        'Comment management',
        'Link sharing'
      ],
      color: 'from-pink-400 to-pink-600',
      bgColor: 'from-pink-50 to-purple-50'
    },
    {
      icon: Code2,
      name: 'API & Custom Channels',
      description: 'Connect to any platform via REST API for unlimited integration options',
      features: [
        'RESTful API endpoints',
        'Webhook support',
        'Custom authentication',
        'Developer documentation'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'from-gray-50 to-slate-50'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-6 text-sm text-purple-700">
              Multi-Channel Deployment
            </div>
            <h1 className="text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              One Agent.{' '}
              <span className="bg-gradient-to-r from-[#7D4DFF] via-[#6B5FFF] to-[#5E00FF] bg-clip-text text-transparent">
                Every Channel.
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Build once, deploy everywhere. Your AI agents automatically adapt to each channel's format and rules.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-10 shadow-2xl shadow-purple-500/40 rounded-full">
                  Start Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No separate setups</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No repeated work</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No developers needed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${channel.bgColor} border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-purple-300 transition-all`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-6`}>
                  <channel.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl mb-3 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {channel.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {channel.description}
                </p>

                <ul className="space-y-2">
                  {channel.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Deploy to All Channels in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Build Your Agent',
                description: 'Create your AI agent once using our visual no-code builder'
              },
              {
                step: '2',
                title: 'Select Channels',
                description: 'Choose which channels you want to deploy to with simple checkboxes'
              },
              {
                step: '3',
                title: 'Go Live',
                description: 'Your agent automatically adapts and goes live on all selected channels'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.step}
                </div>
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
              Ready to Go Multi-Channel?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start building AI agents that work everywhere your customers are
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 rounded-full shadow-xl">
                Start Free →
              </Button>
            </a>
            <p className="text-white/80 mt-6">No credit card required. All channels included.</p>
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