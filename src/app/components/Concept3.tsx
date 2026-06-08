import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Mail, Instagram, Facebook, Globe, Smartphone, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Concept3() {
  const channels = [
    { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-500 to-emerald-500', position: 'top-0 left-1/2 -translate-x-1/2' },
    { icon: Globe, name: 'Website Chat', color: 'from-blue-500 to-cyan-500', position: 'top-1/4 right-0' },
    { icon: Mail, name: 'Email', color: 'from-orange-500 to-red-500', position: 'bottom-1/4 right-0' },
    { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-500', position: 'bottom-0 left-1/2 -translate-x-1/2' },
    { icon: Facebook, name: 'Facebook', color: 'from-indigo-500 to-blue-500', position: 'bottom-1/4 left-0' },
    { icon: Smartphone, name: 'SMS', color: 'from-violet-500 to-purple-500', position: 'top-1/4 left-0' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Badge className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] text-white px-4 py-2 text-sm">
                Designed for small teams with big ambitions
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl mb-6 text-gray-900"
            >
              One AI agent for all your <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">small business</span> channels.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              WhatsApp, Website Chat, Email, Instagram — automate your small business communication everywhere.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8">
                Connect Your Channels
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>

          {/* Multi-Channel Visualization */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative aspect-square max-w-2xl mx-auto">
              {/* Central AI Agent */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] rounded-full opacity-20 blur-2xl scale-150"
                  />
                  <div className="relative bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-3xl p-8 shadow-2xl w-48 h-48 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Zap className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">AI Agent</div>
                      <div className="text-xs opacity-80 mt-1">for Small Business</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Channel Nodes */}
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className={`absolute ${channel.position} w-32`}
                >
                  <div className={`bg-gradient-to-br ${channel.color} rounded-2xl p-4 shadow-xl text-white`}>
                    <channel.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-xs text-center">{channel.name}</div>
                  </div>
                  
                  {/* Connection Lines */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className="absolute top-1/2 left-1/2"
                    style={{ transformOrigin: 'center' }}
                  >
                    <svg className="absolute" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                      <motion.line
                        x1="0"
                        y1="0"
                        x2={index === 0 ? '0' : index === 1 || index === 2 ? '-100' : index === 3 ? '0' : '100'}
                        y2={index === 0 ? '-150' : index === 1 ? '-80' : index === 2 ? '80' : index === 3 ? '150' : index === 4 ? '80' : '-80'}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#7D4DFF" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#5E00FF" stopOpacity="0.5" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Why small businesses love <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">multi-channel</span> automation
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Reply to customers faster',
                description: 'Never leave a customer waiting. AI responds instantly across all channels, even when you\'re sleeping.',
                stat: '10x faster response time'
              },
              {
                icon: MessageCircle,
                title: 'Handle more leads without hiring',
                description: 'Scale your customer conversations without adding headcount. One AI agent = unlimited capacity.',
                stat: '5x more conversations'
              },
              {
                icon: Mail,
                title: 'Stop missing messages',
                description: 'Centralized inbox for all channels. No more juggling between apps or missing important messages.',
                stat: '100% message capture'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="inline-block px-3 py-1 bg-white text-purple-700 rounded-full text-sm">
                  {benefit.stat}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Connect the channels your <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">customers</span> use
            </h2>
            <p className="text-xl text-gray-600">
              One-click integrations. No IT department required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: MessageCircle,
                name: 'WhatsApp Business',
                description: 'Connect your WhatsApp Business account and automate customer conversations.',
                features: ['Auto-replies', 'Product catalogs', 'Order updates', 'Broadcast messages'],
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Globe,
                name: 'Website Live Chat',
                description: 'Add AI chat to your website in 2 minutes with a simple code snippet.',
                features: ['24/7 availability', 'Instant answers', 'Lead capture', 'Custom branding'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Mail,
                name: 'Email Support',
                description: 'Connect your Gmail or Outlook to automate email responses.',
                features: ['Auto-categorize', 'Smart replies', 'Follow-ups', 'Priority inbox'],
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Instagram,
                name: 'Instagram DMs',
                description: 'Automate Instagram direct messages and comments for your business.',
                features: ['DM automation', 'Comment replies', 'Story responses', 'Link sharing'],
                color: 'from-pink-500 to-purple-500'
              }
            ].map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">{channel.name}</h3>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {channel.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#7D4DFF] rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90">
                  Connect {channel.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section className="py-20 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              Join 1,000+ small businesses
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">
              Start automating your customer conversations today
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Connect unlimited channels. No coding. No IT staff. No complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#7D4DFF] hover:bg-gray-100 text-lg px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                See Live Demo
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-6">
              ✓ Free forever plan available  ✓ Connect your first channel in 5 minutes
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
