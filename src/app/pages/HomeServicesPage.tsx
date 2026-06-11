import { motion } from 'react';
import { Wrench, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Hammer } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function HomeServicesPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2C94C]/10 to-transparent" />
        </div>
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Book More Jobs. Respond Instantly. Grow Without Hiring.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Capture every service request, send quotes, and dispatch technicians — automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#F2C94C] to-[#E8B923] hover:opacity-90 text-gray-900 text-lg px-8 py-3 rounded-full w-full sm:w-auto">
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

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The Home Services Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'Missed calls mean missed jobs', desc: 'After-hours and busy periods lose revenue-generating service requests' },
                { icon: Clock, title: 'Slow quote responses lose customers', desc: 'Customers move to faster competitors when they don\'t get quick quotes' },
                { icon: Zap, title: 'No follow-up system', desc: 'Quotes sent but no reminder system means lost conversions' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-yellow-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How Home Service Companies Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Job Booking Agent', desc: 'Capture service requests, collect address and details, confirm slots via WhatsApp or SMS.', tags: ['WhatsApp', 'SMS', 'Voice'] },
                { title: 'Quote Request Agent', desc: 'Gather job specs, send quote prompts, and follow up automatically until confirmed.', tags: ['Email', 'SMS', 'WhatsApp'] },
                { title: 'Technician Dispatch Notification', desc: 'Auto-notify customers with technician ETA and real-time job status updates.', tags: ['SMS', 'WhatsApp', 'Email'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-2 border-yellow-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-yellow-700 rounded-full text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why Home Service Companies Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Wrench, title: '24/7 Job Capture', desc: 'Never lose a service request — capture every job automatically' },
                { icon: Clock, title: 'Instant Quote Responses', desc: 'Send quotes faster than competitors and win more jobs' },
                { icon: TrendingUp, title: 'Smart Follow-Ups', desc: 'Automated reminders increase quote acceptance rates' },
                { icon: MessageCircle, title: 'Dispatch Automation', desc: 'Keep customers informed with real-time updates' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Real Results for Home Service Companies
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '80%', desc: 'bookings without manual call' },
                { stat: '+45%', desc: 'job conversion' },
                { stat: '0', desc: 'after-hours leads missed' },
                { stat: '60%', desc: 'less phone time' }
              ].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border-2 border-yellow-200">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Fill Your Schedule?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join home service companies automating 80% of their bookings
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
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
