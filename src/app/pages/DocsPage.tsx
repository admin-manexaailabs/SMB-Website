import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Sparkles, 
  BookOpen,
  Code,
  Zap,
  MessageSquare,
  FileText,
  Play,
  ArrowRight,
  Search
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';

export default function DocsPage() {
  const docSections = [
    {
      title: 'Getting Started',
      icon: Play,
      color: 'from-green-400 to-green-600',
      docs: [
        { title: 'Quick Start Guide', desc: 'Get up and running in 5 minutes' },
        { title: 'Core Concepts', desc: 'Understanding agents, workflows, and channels' },
        { title: 'Your First Agent', desc: 'Step-by-step tutorial' },
        { title: 'Deploying to Channels', desc: 'Multi-channel deployment guide' }
      ]
    },
    {
      title: 'Building Agents',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      docs: [
        { title: 'Visual Builder Guide', desc: 'Drag-and-drop workflow creation' },
        { title: 'Using Templates', desc: 'Customize pre-built agents' },
        { title: 'Prompt Engineering', desc: 'Best practices for AI prompts' },
        { title: 'Conditional Logic', desc: 'Building smart workflows' }
      ]
    },
    {
      title: 'Integrations',
      icon: Code,
      color: 'from-blue-400 to-blue-600',
      docs: [
        { title: 'Database Connections', desc: 'MySQL, PostgreSQL, BigQuery' },
        { title: 'API Integration', desc: 'Connect to external services' },
        { title: 'Shopify Integration', desc: 'E-commerce automation' },
        { title: 'Custom Webhooks', desc: 'Real-time event handling' }
      ]
    },
    {
      title: 'Channels',
      icon: MessageSquare,
      color: 'from-cyan-400 to-cyan-600',
      docs: [
        { title: 'WhatsApp Setup', desc: 'Business API configuration' },
        { title: 'Voice AI Setup', desc: 'Phone call automation' },
        { title: 'Email Configuration', desc: 'SMTP and email routing' },
        { title: 'Web Chat Widget', desc: 'Embedding on your website' }
      ]
    },
    {
      title: 'API Reference',
      icon: FileText,
      color: 'from-orange-400 to-orange-600',
      docs: [
        { title: 'REST API Overview', desc: 'Authentication and endpoints' },
        { title: 'Agent API', desc: 'Create and manage agents' },
        { title: 'Conversation API', desc: 'Message handling' },
        { title: 'Webhooks', desc: 'Event subscriptions' }
      ]
    },
    {
      title: 'Best Practices',
      icon: BookOpen,
      color: 'from-pink-400 to-pink-600',
      docs: [
        { title: 'Security Guidelines', desc: 'Protecting customer data' },
        { title: 'Performance Optimization', desc: 'Building fast agents' },
        { title: 'Testing Strategies', desc: 'QA and testing workflows' },
        { title: 'Monitoring & Analytics', desc: 'Tracking agent performance' }
      ]
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-6 text-sm text-purple-700">
              Documentation
            </div>
            <h1 className="text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-[#7D4DFF] via-[#6B5FFF] to-[#5E00FF] bg-clip-text text-transparent">
                Build with SMB Flow
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Comprehensive guides, API references, and tutorials to help you succeed
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docSections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-purple-300 transition-all"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.docs.map((doc, di) => (
                    <li key={di}>
                      <a
                        href="#"
                        className="group flex items-start gap-2 text-sm hover:text-purple-600 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-purple-600">
                            {doc.title}
                          </div>
                          <div className="text-gray-500 text-xs">
                            {doc.desc}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Popular Guides
            </h2>
            <p className="text-xl text-gray-600">
              Most viewed documentation and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Building Your First Restaurant Booking Agent',
                time: '10 min read',
                level: 'Beginner'
              },
              {
                title: 'Integrating WhatsApp Business API',
                time: '15 min read',
                level: 'Intermediate'
              },
              {
                title: 'Advanced Multi-Agent Workflows',
                time: '20 min read',
                level: 'Advanced'
              },
              {
                title: 'Setting Up Voice AI for Appointment Booking',
                time: '12 min read',
                level: 'Intermediate'
              }
            ].map((guide, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-medium group-hover:text-purple-600 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {guide.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{guide.time}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    guide.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                    guide.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {guide.level}
                  </span>
                </div>
              </motion.a>
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
              Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 rounded-full shadow-xl">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-10 rounded-full transition-all duration-300">
                Join Community
              </Button>
            </div>
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