import { motion } from 'motion/react';
import { ArrowRight, Play, MessageCircle, Mail, Instagram, Facebook, Smartphone, Globe, CheckCircle, Minus } from 'lucide-react';
import { Button } from './ui/button';

export default function Design3Minimal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <div className="inline-block px-3 py-1 border border-gray-300 text-xs text-gray-600 tracking-wider uppercase">
                Multi-Channel Agentic AI Platform
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-7xl mb-8 text-gray-900 tracking-tight"
              style={{ fontWeight: 300 }}
            >
              Your AI Agents,
              <br />
              <span className="text-gray-400">Everywhere.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
              style={{ fontWeight: 300 }}
            >
              Drag-and-drop AI agents with 13 templates, 7 widgets,<br />
              multi-channel deployment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 mb-16"
            >
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-none"
                style={{ fontWeight: 400 }}
              >
                Start Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 rounded-none"
                style={{ fontWeight: 400 }}
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Minimalist Icons */}
            <div className="flex justify-center items-center gap-8">
              {[
                { icon: MessageCircle, name: 'WhatsApp' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Facebook, name: 'Facebook' },
                { icon: Smartphone, name: 'SMS' },
                { icon: Mail, name: 'Email' }
              ].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <platform.icon className="w-6 h-6" strokeWidth={1} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Blueprint Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border border-gray-200 p-12"
          >
            <div className="flex items-center justify-between gap-12">
              {/* Start Node */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 border-2 border-gray-900 mx-auto mb-4 flex items-center justify-center">
                  <Play className="w-8 h-8 text-gray-900" strokeWidth={1} />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Start</div>
              </div>

              {/* Line */}
              <div className="flex-1 border-t border-gray-300" />

              {/* Agent Node */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 bg-gray-900 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-white text-xs uppercase tracking-wider">AI</div>
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Agent</div>
              </div>

              {/* Line */}
              <div className="flex-1 border-t border-gray-300" />

              {/* Response Node */}
              <div className="flex-1 text-center">
                <div className="w-24 h-24 border-2 border-gray-900 mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-gray-900" strokeWidth={1} />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl text-gray-900 mb-3" style={{ fontWeight: 300 }}>
              Features
            </h2>
            <div className="w-12 h-px bg-gray-900" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Visual Builder', desc: 'Intuitive interface' },
              { title: 'Multi-Channel', desc: 'Deploy everywhere' },
              { title: 'AI Powered', desc: 'Smart automation' },
              { title: 'Integrations', desc: '50+ platforms' },
              { title: 'Templates', desc: '13 ready agents' },
              { title: 'Analytics', desc: 'Real-time data' },
              { title: 'Widgets', desc: '7 components' },
              { title: 'Campaigns', desc: 'Auto outreach' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="mb-4">
                  <Minus className="w-6 h-6 text-gray-900" strokeWidth={1} />
                </div>
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontWeight: 400 }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-3xl text-gray-900 mb-3" style={{ fontWeight: 300 }}>
              Deploy Across All Channels
            </h2>
            <p className="text-gray-500" style={{ fontWeight: 300 }}>
              One agent, infinite reach
            </p>
          </div>

          <div className="grid grid-cols-6 gap-8">
            {[
              { icon: MessageCircle, name: 'WhatsApp' },
              { icon: Instagram, name: 'Instagram' },
              { icon: Facebook, name: 'Facebook' },
              { icon: Mail, name: 'Email' },
              { icon: Smartphone, name: 'SMS' },
              { icon: Globe, name: 'Web' }
            ].map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 border border-gray-200 mx-auto mb-4 flex items-center justify-center hover:border-gray-900 transition-colors">
                  <channel.icon className="w-8 h-8 text-gray-900" strokeWidth={1} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  {channel.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl text-gray-900 mb-3" style={{ fontWeight: 300 }}>
              Templates
            </h2>
            <div className="w-12 h-px bg-gray-900" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Support Agent', desc: 'Answer customer questions' },
              { name: 'Sales Bot', desc: 'Qualify and nurture leads' },
              { name: 'Booking Agent', desc: 'Schedule appointments' },
              { name: 'Email Agent', desc: 'Smart auto-responses' },
              { name: 'Lead Capture', desc: 'Collect and route leads' },
              { name: 'Onboarding', desc: 'Welcome new users' }
            ].map((template, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 p-8 hover:border-gray-900 transition-colors"
              >
                <h3 className="text-lg text-gray-900 mb-2" style={{ fontWeight: 400 }}>
                  {template.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6" style={{ fontWeight: 300 }}>
                  {template.desc}
                </p>
                <button className="text-sm text-gray-900 uppercase tracking-wider hover:underline">
                  Use Template →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl text-gray-900 mb-3" style={{ fontWeight: 300 }}>
              Pricing
            </h2>
            <div className="w-12 h-px bg-gray-900" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Free', price: '0', features: ['1 Agent', '100 messages/mo', 'Basic templates', 'Community support'] },
              { name: 'Pro', price: '49', features: ['Unlimited agents', '10,000 messages/mo', 'All templates', 'Priority support'], featured: true },
              { name: 'Enterprise', price: 'Custom', features: ['Custom agents', 'Unlimited messages', 'White-label', 'Dedicated support'] }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border p-8 ${plan.featured ? 'border-gray-900' : 'border-gray-200'}`}
              >
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-5xl text-gray-900 mb-1" style={{ fontWeight: 300 }}>
                    {plan.price !== 'Custom' && '$'}{plan.price}
                  </div>
                  {plan.price !== 'Custom' && (
                    <div className="text-sm text-gray-500">per month</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                      <Minus className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" strokeWidth={1} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full rounded-none ${
                    plan.featured 
                      ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                      : 'bg-white border border-gray-900 text-gray-900 hover:bg-gray-50'
                  }`}
                  style={{ fontWeight: 400 }}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>
            © 2025 OmniAgent. Built for small businesses.
          </p>
        </div>
      </footer>
    </div>
  );
}
