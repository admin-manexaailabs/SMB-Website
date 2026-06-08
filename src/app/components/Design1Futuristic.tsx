import { motion } from 'motion/react';
import { ArrowRight, Play, Zap, MessageCircle, Mail, Instagram, Facebook, Smartphone, Globe, CheckCircle, Star, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function Design1Futuristic() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm">
                ✨ Multi-Channel Agentic AI Platform
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl mb-6 text-white"
            >
              Build AI Agents for <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Every Channel
              </span>
              <br />
              No Code.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto"
            >
              Drag-and-drop AI agents with 13 templates, 7 widgets, multi-channel deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-lg px-8 shadow-lg shadow-purple-500/50">
                Start Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Integration Icons */}
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {[
                { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-400 to-emerald-400' },
                { icon: Instagram, name: 'Instagram', color: 'from-pink-400 to-purple-400' },
                { icon: Facebook, name: 'Facebook', color: 'from-blue-400 to-indigo-400' },
                { icon: Smartphone, name: 'SMS', color: 'from-cyan-400 to-blue-400' },
                { icon: Mail, name: 'Email', color: 'from-orange-400 to-red-400' }
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <platform.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-around gap-8">
                {/* Start Node */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-1"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white shadow-lg shadow-green-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 blur-xl" />
                    <div className="relative">
                      <Play className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Trigger</div>
                      <div>Start</div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 text-purple-400" />

                {/* Agent Node */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="flex-1"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg shadow-purple-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 blur-xl" />
                    <div className="relative">
                      <Zap className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">AI Agent</div>
                      <div>Process</div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <ArrowRight className="w-8 h-8 text-purple-400" />

                {/* Responder Node */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="flex-1"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 blur-xl" />
                    <div className="relative">
                      <MessageCircle className="w-8 h-8 mb-2" />
                      <div className="text-sm opacity-90">Response</div>
                      <div>Deploy</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">
              Powerful Features
            </h2>
            <p className="text-purple-200">Everything you need to automate conversations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Visual Builder', desc: 'Drag & drop interface', color: 'from-yellow-400 to-orange-400' },
              { icon: MessageCircle, title: 'Multi-Channel', desc: 'Deploy everywhere', color: 'from-green-400 to-emerald-400' },
              { icon: Sparkles, title: 'AI Powered', desc: 'Smart automation', color: 'from-purple-400 to-pink-400' },
              { icon: Globe, title: 'Integrations', desc: '50+ platforms', color: 'from-blue-400 to-cyan-400' },
              { icon: Star, title: 'Templates', desc: '13 ready agents', color: 'from-pink-400 to-rose-400' },
              { icon: CheckCircle, title: 'Analytics', desc: 'Real-time insights', color: 'from-indigo-400 to-purple-400' },
              { icon: Zap, title: 'Widgets', desc: '7 AI components', color: 'from-cyan-400 to-blue-400' },
              { icon: Mail, title: 'Campaigns', desc: 'Automated outreach', color: 'from-orange-400 to-red-400' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-purple-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Orbs */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">
              One Agent, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Channel</span>
            </h2>
            <p className="text-purple-200">Deploy your AI agents across all platforms</p>
          </div>

          <div className="relative h-96">
            {/* Central Hub */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Orbiting Channels */}
            {[
              { icon: MessageCircle, angle: 0, color: 'from-green-400 to-emerald-400' },
              { icon: Instagram, angle: 60, color: 'from-pink-400 to-purple-400' },
              { icon: Facebook, angle: 120, color: 'from-blue-400 to-indigo-400' },
              { icon: Mail, angle: 180, color: 'from-orange-400 to-red-400' },
              { icon: Smartphone, angle: 240, color: 'from-cyan-400 to-blue-400' },
              { icon: Globe, angle: 300, color: 'from-violet-400 to-purple-400' }
            ].map((channel, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${channel.angle}deg) translateX(150px) rotate(-${channel.angle}deg)`
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${channel.color} rounded-full flex items-center justify-center shadow-xl`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">Simple Pricing</h2>
            <p className="text-purple-200">Choose the plan that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '$0', features: ['1 Agent', '100 messages/mo', 'Basic templates', 'Community support'] },
              { name: 'Pro', price: '$49', features: ['Unlimited agents', '10,000 messages/mo', 'All templates', 'Priority support'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Custom agents', 'Unlimited messages', 'White-label', 'Dedicated support'] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white/5 backdrop-blur-md border rounded-2xl p-8 ${
                  plan.popular ? 'border-purple-400 ring-2 ring-purple-400/50' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-xs">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                <div className="text-4xl text-white mb-6">{plan.price}<span className="text-xl text-purple-200">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-purple-200">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/10 hover:bg-white/20'}`}>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-purple-200">
          <p>© 2025 OmniAgent. Built for small businesses.</p>
        </div>
      </footer>
    </div>
  );
}
