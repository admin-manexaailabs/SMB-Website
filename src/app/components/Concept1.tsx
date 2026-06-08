import { motion } from 'motion/react';
import { ArrowRight, Play, Zap, Clock, Users, Star } from 'lucide-react';
import { Button } from './ui/button';

export default function Concept1() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center gap-1.5">
                  <Star className="w-4 h-4" />
                  Perfect for busy small business owners
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl mb-6 text-gray-900">
                Build AI agents <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">visually.</span>
              </h1>
              
              <h2 className="text-5xl lg:text-6xl mb-6 text-gray-900">
                Small business automation made <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">simple.</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Create powerful AI flows without developers, engineers, or IT teams.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: Zap, text: 'Automate customer responses instantly' },
                  { icon: Clock, text: 'Save hours of repetitive work' },
                  { icon: Users, text: 'Support your business 24/7' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8">
                  Start Building Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                ✓ No credit card required  ✓ No tech skills needed  ✓ Free forever plan
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Visual Flow Canvas</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Anyone can build — no tech skills required
                  </span>
                </div>
                
                <div className="space-y-6">
                  {/* Start Node */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Trigger</div>
                        <div>Customer Message</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-8 h-8 text-[#7D4DFF] rotate-90" />
                    </motion.div>
                  </div>
                  
                  {/* AI Agent Node */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] rounded-xl p-6 text-white shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-90">AI Agent</div>
                        <div>Process & Understand</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                      <ArrowRight className="w-8 h-8 text-[#7D4DFF] rotate-90" />
                    </motion.div>
                  </div>
                  
                  {/* Response Node */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-90">Action</div>
                        <div>Send Smart Reply</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for SMBs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Enterprise-quality automation made accessible for <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">small businesses</span>
            </h2>
            <p className="text-xl text-gray-600">
              AI automation for SMBs — no developers required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: 'No Coding Required',
                title: 'Visual Builder',
                description: 'Drag, drop, connect. Build AI agents as easily as drawing a flowchart.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                badge: 'Affordable for Small Teams',
                title: 'Budget-Friendly',
                description: 'Enterprise features at small business prices. Start free, scale when ready.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                badge: 'One Person Can Run It',
                title: 'Solo-Friendly',
                description: 'No IT department? No problem. Anyone on your team can manage it.',
                color: 'from-emerald-500 to-green-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs mb-4">
                  {item.badge}
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-8">
            Join 1,000+ small businesses automating their operations with OmniAgent
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-300 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Sparkles } from 'lucide-react';
