import { motion } from 'motion/react';
import { ArrowRight, Play, MessageCircle, Mail, Instagram, Facebook, Smartphone, Globe, CheckCircle, Star, Sparkles, Heart, Smile } from 'lucide-react';
import { Button } from './ui/button';

export default function Design2Playful() {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full text-white shadow-lg">
                <span className="mr-2">🎉</span>
                Multi-Channel Agentic AI Platform
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl mb-6 text-gray-900"
            >
              Build AI Agents for<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  Every Channel 🚀
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 rounded-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Drag-and-drop AI agents with 13 templates, 7 widgets, multi-channel deployment. 
              <br />It's as easy as playing with building blocks! 🎨
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 text-lg px-8 shadow-xl rounded-full">
                Start Free 🎯
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 rounded-full">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Cute Chat Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-2xl">
                  <Smile className="w-12 h-12 text-white" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Platform Bubbles */}
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {[
                { icon: MessageCircle, name: 'WhatsApp', color: 'bg-green-400' },
                { icon: Instagram, name: 'Instagram', color: 'bg-pink-400' },
                { icon: Facebook, name: 'Facebook', color: 'bg-blue-400' },
                { icon: Smartphone, name: 'SMS', color: 'bg-purple-400' },
                { icon: Mail, name: 'Email', color: 'bg-orange-400' }
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', bounce: 0.6 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`${platform.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                >
                  <platform.icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Playful Flow Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-[3rem] p-8 shadow-2xl border-4 border-purple-200"
          >
            <div className="flex items-center justify-around gap-6 flex-wrap">
              {/* Start Bubble */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-[2rem] flex flex-col items-center justify-center text-white shadow-xl">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm">Start</div>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full animate-pulse" />
              </motion.div>

              {/* Connector */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 text-pink-400" />
              </motion.div>

              {/* AI Bubble */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-[2rem] flex flex-col items-center justify-center text-white shadow-xl">
                  <div className="text-4xl mb-2">🤖</div>
                  <div className="text-sm">AI Agent</div>
                </div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </motion.div>
              </motion.div>

              {/* Connector */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <ArrowRight className="w-8 h-8 text-orange-400" />
              </motion.div>

              {/* Response Bubble */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-[2rem] flex flex-col items-center justify-center text-white shadow-xl">
                  <div className="text-4xl mb-2">💬</div>
                  <div className="text-sm">Response</div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-pink-400 rounded-full animate-bounce" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Playful Feature Pills */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-3 text-gray-900">
              Features You'll <Heart className="inline w-10 h-10 text-pink-500" /> Love
            </h2>
            <p className="text-gray-600">Everything you need in one happy place 🎨</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎨', title: 'Visual Builder', desc: 'Drag & drop fun', color: 'from-pink-200 to-pink-300' },
              { emoji: '🌍', title: 'Multi-Channel', desc: 'Deploy everywhere', color: 'from-green-200 to-green-300' },
              { emoji: '✨', title: 'AI Powered', desc: 'Smart automation', color: 'from-purple-200 to-purple-300' },
              { emoji: '🔌', title: 'Integrations', desc: '50+ platforms', color: 'from-blue-200 to-blue-300' },
              { emoji: '📋', title: 'Templates', desc: '13 ready agents', color: 'from-orange-200 to-orange-300' },
              { emoji: '📊', title: 'Analytics', desc: 'Real-time insights', color: 'from-indigo-200 to-indigo-300' },
              { emoji: '🧩', title: 'Widgets', desc: '7 AI components', color: 'from-cyan-200 to-cyan-300' },
              { emoji: '📧', title: 'Campaigns', desc: 'Automated outreach', color: 'from-rose-200 to-rose-300' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring', bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`bg-gradient-to-br ${feature.color} rounded-3xl p-6 shadow-lg cursor-pointer`}
              >
                <div className="text-5xl mb-3">{feature.emoji}</div>
                <h3 className="text-lg text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Carousel */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-3 text-gray-900">
              Ready-to-Use Templates 🎯
            </h2>
            <p className="text-gray-600">Pick one and start in minutes!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: '💬', name: 'Support Bot', desc: 'Answer FAQs instantly', color: 'from-blue-300 to-cyan-300' },
              { emoji: '🛍️', name: 'Sales Agent', desc: 'Qualify leads 24/7', color: 'from-pink-300 to-rose-300' },
              { emoji: '📅', name: 'Booking Bot', desc: 'Schedule appointments', color: 'from-purple-300 to-indigo-300' },
              { emoji: '📧', name: 'Email Agent', desc: 'Smart auto-replies', color: 'from-orange-300 to-amber-300' },
              { emoji: '🎯', name: 'Lead Gen', desc: 'Capture & nurture', color: 'from-green-300 to-emerald-300' },
              { emoji: '🤝', name: 'Onboarding', desc: 'Welcome new users', color: 'from-violet-300 to-purple-300' }
            ].map((template, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${template.color} rounded-3xl p-8 shadow-xl cursor-pointer border-4 border-white`}
              >
                <div className="text-6xl mb-4">{template.emoji}</div>
                <h3 className="text-xl text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-700 mb-4">{template.desc}</p>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full w-full shadow-md">
                  Use Template
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-3 text-gray-900">
              Simple Pricing 💰
            </h2>
            <p className="text-gray-600">No surprises, just smiles!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '$0', emoji: '🎉', features: ['1 Agent', '100 messages', 'Basic templates', 'Community'] },
              { name: 'Pro', price: '$49', emoji: '🚀', features: ['Unlimited agents', '10K messages', 'All templates', 'Priority support'], popular: true },
              { name: 'Enterprise', price: 'Custom', emoji: '⭐', features: ['Custom agents', 'Unlimited', 'White-label', 'Dedicated'] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                className={`bg-white rounded-[2.5rem] p-8 shadow-xl ${
                  plan.popular ? 'ring-4 ring-pink-400 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full text-sm shadow-lg">
                      Most Popular! 🔥
                    </span>
                  </div>
                )}
                <div className="text-6xl mb-4 text-center">{plan.emoji}</div>
                <h3 className="text-2xl text-gray-900 mb-2 text-center">{plan.name}</h3>
                <div className="text-5xl text-gray-900 mb-6 text-center">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full rounded-full text-lg shadow-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t-4 border-purple-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© 2025 OmniAgent. Made with <Heart className="inline w-5 h-5 text-pink-500" /> for small businesses.</p>
        </div>
      </footer>
    </div>
  );
}
