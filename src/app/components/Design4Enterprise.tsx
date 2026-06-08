import { motion } from 'motion/react';
import { ArrowRight, Play, MessageCircle, Mail, Instagram, Facebook, Smartphone, Globe, CheckCircle, Shield, Zap, Network, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function Design4Enterprise() {
  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6">
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white text-sm tracking-wider">
                <Shield className="inline w-4 h-4 mr-2" />
                ENTERPRISE-GRADE AI PLATFORM
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl mb-8 text-white tracking-tight"
            >
              OmniAgent
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Multi-Channel AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Drag-and-drop AI agents with 13 templates, 7 widgets, multi-channel deployment.
              <br />Enterprise security. Infinite scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-lg px-10 shadow-2xl shadow-blue-500/50">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 text-lg px-10">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Platform Icons with Glow */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {[
                { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-500 to-emerald-400' },
                { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-400' },
                { icon: Facebook, name: 'Facebook', color: 'from-blue-500 to-indigo-400' },
                { icon: Smartphone, name: 'SMS', color: 'from-cyan-500 to-blue-400' },
                { icon: Mail, name: 'Email', color: 'from-orange-500 to-red-400' }
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, type: 'spring' }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${platform.color} rounded-lg flex items-center justify-center`}>
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3D Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-10 shadow-2xl">
              <div className="grid grid-cols-3 gap-8 items-center">
                {/* Input Layer */}
                <div className="space-y-4">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-4">Input Layer</div>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="h-12 bg-gradient-to-r from-blue-600/50 to-transparent border-l-2 border-blue-400 flex items-center px-4"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                      <span className="text-xs text-slate-300">Channel {i + 1}</span>
                    </motion.div>
                  ))}
                </div>

                {/* AI Core */}
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-30"
                  />
                  <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 border border-blue-400/50">
                    <Sparkles className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-white text-center text-sm">AI CORE</div>
                    <div className="text-blue-200 text-center text-xs mt-1">Neural Engine</div>
                  </div>
                </div>

                {/* Output Layer */}
                <div className="space-y-4">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-4 text-right">Output Layer</div>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ x: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      className="h-12 bg-gradient-to-l from-cyan-600/50 to-transparent border-r-2 border-cyan-400 flex items-center justify-end px-4"
                    >
                      <span className="text-xs text-slate-300">Response {i + 1}</span>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full ml-3" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">
              Enterprise-Grade Features
            </h2>
            <p className="text-slate-400">Built for scale, security, and performance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Security', desc: 'SOC 2 compliant', color: 'from-green-500 to-emerald-500' },
              { icon: Zap, title: 'Performance', desc: '99.99% uptime', color: 'from-yellow-500 to-orange-500' },
              { icon: Network, title: 'Scale', desc: 'Infinite capacity', color: 'from-blue-500 to-cyan-500' },
              { icon: Globe, title: 'Global', desc: 'Multi-region', color: 'from-purple-500 to-pink-500' },
              { icon: CheckCircle, title: 'Compliance', desc: 'GDPR & HIPAA', color: 'from-indigo-500 to-blue-500' },
              { icon: Sparkles, title: 'AI Models', desc: 'Custom training', color: 'from-violet-500 to-purple-500' },
              { icon: MessageCircle, title: 'Support', desc: '24/7 dedicated', color: 'from-cyan-500 to-blue-500' },
              { icon: Mail, title: 'Integration', desc: 'Enterprise APIs', color: 'from-orange-500 to-red-500' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Orbital Channels */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">
              Omnichannel <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Deployment</span>
            </h2>
            <p className="text-slate-400">One platform, unlimited reach</p>
          </div>

          <div className="relative h-96 flex items-center justify-center">
            {/* Central Node */}
            <motion.div
              className="absolute z-10"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
                <div className="relative w-40 h-40 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center border border-blue-400/50">
                  <div className="text-center">
                    <Sparkles className="w-10 h-10 text-white mx-auto mb-2" />
                    <div className="text-white text-sm">AI Hub</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Orbiting Channels */}
            {[
              { icon: MessageCircle, name: 'WhatsApp', angle: 0, radius: 180, color: 'from-green-500 to-emerald-400' },
              { icon: Instagram, name: 'Instagram', angle: 60, radius: 180, color: 'from-pink-500 to-purple-400' },
              { icon: Facebook, name: 'Facebook', angle: 120, radius: 180, color: 'from-blue-500 to-indigo-400' },
              { icon: Mail, name: 'Email', angle: 180, radius: 180, color: 'from-orange-500 to-red-400' },
              { icon: Smartphone, name: 'SMS', angle: 240, radius: 180, color: 'from-cyan-500 to-blue-400' },
              { icon: Globe, name: 'Web', angle: 300, radius: 180, color: 'from-violet-500 to-purple-400' }
            ].map((channel, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  x: [
                    Math.cos((channel.angle * Math.PI) / 180) * channel.radius,
                    Math.cos(((channel.angle + 360) * Math.PI) / 180) * channel.radius
                  ],
                  y: [
                    Math.sin((channel.angle * Math.PI) / 180) * channel.radius,
                    Math.sin(((channel.angle + 360) * Math.PI) / 180) * channel.radius
                  ]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center border border-white/20`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-slate-400">
                    {channel.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-white">Enterprise Pricing</h2>
            <p className="text-slate-400">Flexible plans for every scale</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$0', features: ['1 Agent', '100 messages/mo', 'Basic templates', 'Community support'], badge: '' },
              { name: 'Professional', price: '$49', features: ['Unlimited agents', '10,000 messages/mo', 'All templates', 'Priority support'], badge: 'Popular' },
              { name: 'Enterprise', price: 'Custom', features: ['Custom agents', 'Unlimited messages', 'White-label', 'Dedicated support'], badge: 'Premium' }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-2xl border rounded-2xl p-8 ${
                  plan.badge === 'Popular' ? 'border-blue-400 scale-105' : 'border-white/10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`px-4 py-1 rounded-full text-xs text-white ${
                      plan.badge === 'Popular' 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                        : 'bg-gradient-to-r from-purple-600 to-pink-600'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                <div className="text-5xl text-white mb-6">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg text-slate-400">/mo</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${
                  plan.badge === 'Popular' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90' 
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}>
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-slate-400 mb-4">© 2025 OmniAgent. Enterprise AI for modern businesses.</div>
          <div className="flex justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
