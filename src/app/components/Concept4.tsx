import { motion } from 'motion/react';
import { ArrowRight, Search, Star, MessageSquare, BarChart3, Sparkles, Mail, MessageCircle, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Concept4() {
  const components = [
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Help customers find answers fast',
      details: 'AI-powered search that understands natural language questions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Smart Recommendations',
      description: 'Upsell your products automatically',
      details: 'Personalized product suggestions based on customer behavior',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Customer Support',
      description: 'Handle questions while you sleep',
      details: '24/7 AI support agent that never takes a break',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: BarChart3,
      title: 'Business Reports',
      description: 'Know what\'s working instantly',
      details: 'Real-time analytics and insights about your AI agents',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Sparkles,
      title: 'Lead Scoring',
      description: 'Focus on your best prospects',
      details: 'AI automatically ranks leads by conversion potential',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: MessageCircle,
      title: 'Chat Widget',
      description: 'Add AI chat to any page',
      details: 'Beautiful, customizable chat for your website',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'Email Automation',
      description: 'Smart follow-ups that convert',
      details: 'AI-powered email sequences that feel personal',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  const campaigns = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Campaigns',
      subtitle: 'Perfect for small retail & services',
      description: 'Send personalized WhatsApp broadcasts to your customers',
      features: ['Bulk messaging', 'Rich media', 'Click tracking', 'Auto-responses'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      subtitle: 'Better follow-ups for small sales teams',
      description: 'Automated email sequences that nurture leads',
      features: ['Drag-drop builder', 'A/B testing', 'Smart segmentation', 'Analytics'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'SMS Campaigns',
      subtitle: 'Affordable & fast outreach for SMBs',
      description: 'Reach customers instantly with text messages',
      features: ['2-way SMS', 'Scheduled sends', 'Link shortening', 'Delivery reports'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Badge className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] text-white px-4 py-2">
                No developers needed • Built for SMBs
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl mb-6 text-gray-900"
            >
              AI tools your <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">small business</span> can actually use.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Search, recommendations, reporting, chatbots, campaigns — all without developers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8">
                Explore All Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Book a Demo
              </Button>
            </motion.div>
          </div>

          {/* AI Components Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-3 text-gray-900">
                7 AI Components Ready to Deploy
              </h2>
              <p className="text-gray-600">
                Pick what you need, customize in minutes, launch instantly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <component.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg mb-2 text-gray-900">{component.title}</h3>
                  <p className="text-sm text-purple-600 mb-3">{component.description}</p>
                  <p className="text-xs text-gray-500">{component.details}</p>
                  
                  <Button variant="ghost" className="w-full mt-4 text-[#7D4DFF] hover:bg-purple-50">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm mb-4">
              Small business? Big automation.
            </div>
            <h2 className="text-4xl mb-4 text-gray-900">
              Multi-Channel <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">Campaign Tools</span>
            </h2>
            <p className="text-xl text-gray-600">
              Reach customers wherever they are — with AI-powered campaigns
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-2xl transition-shadow border border-gray-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${campaign.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <campaign.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-2 text-gray-900">{campaign.title}</h3>
                <p className="text-sm text-purple-600 mb-4">{campaign.subtitle}</p>
                <p className="text-gray-600 mb-6">{campaign.description}</p>
                
                <div className="space-y-2 mb-6">
                  {campaign.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-[#7D4DFF] rounded-full" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90">
                  Launch Campaign
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm mb-6">
                Built for SMBs
              </div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Everything a small business needs to <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">compete</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Enterprise-quality automation made accessible for small businesses. No coding, no complexity, no enterprise price tag.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Zero IT Staff Needed',
                    description: 'Visual tools anyone can use. No technical background required.'
                  },
                  {
                    title: 'Affordable for Small Teams',
                    description: 'Pricing that makes sense for SMBs. Start free, pay as you grow.'
                  },
                  {
                    title: 'One Person Can Run It',
                    description: 'Manage all your AI tools from one simple dashboard.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Button size="lg" className="mt-8 bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90">
                Start Building for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Dashboard Preview</div>
                  <div className="text-2xl text-gray-900">Simple. Powerful. Yours.</div>
                </div>
                
                {/* Mock Dashboard */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">Active AI Agents</span>
                      <span className="text-2xl text-green-600">12</span>
                    </div>
                    <div className="text-xs text-gray-500">↑ 3 new this week</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">Conversations Handled</span>
                      <span className="text-2xl text-blue-600">2,847</span>
                    </div>
                    <div className="text-xs text-gray-500">Last 30 days</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">Time Saved</span>
                      <span className="text-2xl text-purple-600">127h</span>
                    </div>
                    <div className="text-xs text-gray-500">That's 3+ weeks!</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-700">Customer Satisfaction</span>
                      <span className="text-2xl text-orange-600">94%</span>
                    </div>
                    <div className="text-xs text-gray-500">↑ 12% improvement</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              Join 1,000+ small businesses automating their operations
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">
              Give your small team <span className="underline decoration-wavy">superpowers</span> with AI
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              OmniAgent gives small businesses enterprise-level automation without enterprise complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#7D4DFF] hover:bg-gray-100 text-lg px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-6">
              ✓ No credit card  ✓ 5-minute setup  ✓ Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
