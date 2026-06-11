import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Building2,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Clock,
  Zap,
  Target,
  BarChart3,
  ArrowRight,
  HeartHandshake,
  AlertCircle,
  Calendar
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function RealEstatePage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/10 to-transparent" />
        </div>
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Close More Deals with AI Agents That Never Sleep
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Qualify leads, book viewings, and follow up automatically — across WhatsApp, voice, and web.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#2F80ED] to-[#1E5BBE] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
                    Start Free <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" className="border-gray-300 text-gray-900 text-lg px-8 py-3 rounded-full w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The Real Estate Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: AlertCircle,
                  title: 'Agents miss after-hours leads',
                  desc: 'Inquiries outside business hours go unanswered, losing potential sales'
                },
                {
                  icon: Clock,
                  title: 'Slow follow-ups lose buyers',
                  desc: 'Manual follow-up delays mean prospects move to competitors'
                },
                {
                  icon: Zap,
                  title: 'Manual scheduling wastes agent time',
                  desc: 'Agents spend hours on calendar coordination instead of closing deals'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border-2 border-red-200 rounded-2xl p-8"
                >
                  <item.icon className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How Real Estate Teams Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Lead Qualification Agent',
                  desc: 'Capture buyer/seller inquiries 24/7 via WhatsApp or web chat. Collect budget, location, timeline. Route hot leads to agents instantly.',
                  tags: ['WhatsApp', 'Web Chat', 'SMS']
                },
                {
                  title: 'Property Viewing Scheduler',
                  desc: 'Check availability, confirm viewings, send reminders automatically. Handles reschedules and cancellations without staff involvement.',
                  tags: ['Voice', 'WhatsApp', 'SMS']
                },
                {
                  title: 'Follow-Up Campaign Agent',
                  desc: 'Automated WhatsApp/SMS drip sequences to nurture cold leads. Re-engage inactive prospects with new listings and price drops.',
                  tags: ['WhatsApp', 'SMS', 'Email']
                }
              ].map((useCase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why Real Estate Agencies Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Building2, title: '24/7 Lead Capture', desc: 'Never miss an inquiry — respond to every lead instantly' },
                { icon: Calendar, title: 'Automated Scheduling', desc: 'Book viewings and coordinate showings without staff' },
                { icon: TrendingUp, title: 'Smarter Follow-Ups', desc: 'Nurture leads at scale with intelligent drip campaigns' },
                { icon: MessageCircle, title: 'Multi-Channel Support', desc: 'Reach buyers and sellers on their preferred channels' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Real Results for Real Estate Teams
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '95%', desc: 'leads responded to in under 1 min' },
                { stat: '+40%', desc: 'viewing bookings' },
                { stat: '70%', desc: 'less manual follow-up' },
                { stat: '24/7', desc: 'lead capture' }
              ].map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border-2 border-blue-200"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Automate Your Lead Pipeline?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join real estate teams automating 90% of their lead response
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
                Start Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
