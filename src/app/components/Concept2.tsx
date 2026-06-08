import { motion } from 'motion/react';
import { ArrowRight, Calendar, MessageSquare, Mail, HelpCircle, UserCheck, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function Concept2() {
  const templates = [
    {
      icon: Calendar,
      title: 'Appointment Booking Agent',
      description: 'Let customers book appointments 24/7',
      tag: 'For small services',
      color: 'from-purple-500 to-pink-500',
      time: '2 min setup'
    },
    {
      icon: UserCheck,
      title: 'Lead Qualification Agent',
      description: 'Automatically score and route leads',
      tag: 'For small sales teams',
      color: 'from-blue-500 to-cyan-500',
      time: '3 min setup'
    },
    {
      icon: HelpCircle,
      title: 'FAQ Bot',
      description: 'Answer common questions instantly',
      tag: 'For small customer service teams',
      color: 'from-emerald-500 to-green-500',
      time: '2 min setup'
    },
    {
      icon: Mail,
      title: 'Email Response Agent',
      description: 'Never miss an important email again',
      tag: 'For overloaded inboxes',
      color: 'from-orange-500 to-red-500',
      time: '4 min setup'
    },
    {
      icon: MessageSquare,
      title: 'Customer Support Agent',
      description: 'Handle support tickets automatically',
      tag: 'For SMB customer care',
      color: 'from-violet-500 to-purple-500',
      time: '3 min setup'
    },
    {
      icon: Sparkles,
      title: 'Sales Assistant Agent',
      description: 'Follow up with leads automatically',
      tag: 'For busy sales teams',
      color: 'from-indigo-500 to-blue-500',
      time: '3 min setup'
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
              className="inline-flex items-center gap-2 mb-6"
            >
              <Badge className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] text-white px-4 py-2 text-sm">
                No-code / Built for SMBs
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl mb-6 text-gray-900"
            >
              AI agents your <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">small business</span> can depend on.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Start with pre-built templates for support, sales, leads, bookings, and more.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-lg px-8">
                Browse Templates
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Build Custom Agent
              </Button>
            </motion.div>
          </div>

          {/* Template Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${template.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <template.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {template.time}
                  </Badge>
                </div>
                
                <h3 className="text-lg mb-2 text-gray-900">{template.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {template.tag}
                  </span>
                  <button className="text-[#7D4DFF] hover:text-[#5E00FF] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button className="w-full bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 group-hover:shadow-lg transition-shadow">
                    Use Template → Instantly Deploy
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-gray-900">
              Launch your first AI agent in <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">minutes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Give small teams superpowers with AI agents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Pick a Template',
                description: 'Choose from our library of pre-built AI agents designed for small businesses.',
                icon: MessageSquare
              },
              {
                step: '2',
                title: 'Customize Your Agent',
                description: 'Add your business info, brand voice, and knowledge base. No coding needed.',
                icon: Sparkles
              },
              {
                step: '3',
                title: 'Deploy & Automate',
                description: 'Connect your channels and watch your AI agent start working 24/7.',
                icon: CheckCircle
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-2xl mb-6 text-white text-2xl">
                    {item.step}
                  </div>
                  <div className="mb-4">
                    <item.icon className="w-10 h-10 text-[#7D4DFF] mx-auto" />
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-8 h-8 text-[#7D4DFF] opacity-30 -ml-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm mb-6">
                Small business? Big automation.
              </div>
              <h2 className="text-4xl mb-6 text-gray-900">
                Built specifically for <span className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] bg-clip-text text-transparent">SMBs</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We understand small business challenges. That's why every template is designed for teams with limited time, budget, and technical resources.
              </p>
              
              <div className="space-y-4">
                {[
                  'No technical skills required',
                  'Affordable pricing that scales with you',
                  'Deploy in minutes, not months',
                  'Support from real humans who care',
                  'Cancel anytime, no contracts'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Zero IT Staff Needed</div>
                    <div className="text-xl text-gray-900">Anyone Can Manage It</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl">
                    $
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Affordable for Small Teams</div>
                    <div className="text-xl text-gray-900">Start Free, Scale Later</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">No Coding Required</div>
                    <div className="text-xl text-gray-900">Visual, Click-Based Setup</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6 text-white">
              Ready to automate your small business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join 1,000+ SMBs already saving time with OmniAgent
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#7D4DFF] hover:bg-gray-100 text-lg px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Talk to Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
