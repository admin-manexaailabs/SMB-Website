import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Car, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function AutomotivePage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F2994A]/10 to-transparent" />
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
                Book More Service Appointments. Respond to Every Lead.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Automate service booking, parts inquiries, and post-service follow-ups across every channel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#F2994A] to-[#E67E22] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
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
              The Automotive Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'Service desk overwhelmed with calls', desc: 'Peak hours leave customers waiting or hanging up' },
                { icon: Clock, title: 'Weekend leads lost forever', desc: 'Inquiries outside business hours never get responses' },
                { icon: Zap, title: 'No automated follow-up system', desc: 'Post-service follow-up relies on manual, inconsistent processes' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-orange-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-orange-600 mb-4" />
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
              How Automotive Dealerships Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Service Appointment Agent', desc: 'Book and reschedule car service appointments via WhatsApp or voice — no staff needed.', tags: ['WhatsApp', 'Voice', 'SMS'] },
                { title: 'Parts & Pricing Inquiry Agent', desc: 'Answer availability and pricing questions automatically, 24/7.', tags: ['WhatsApp', 'Web Chat', 'Email'] },
                { title: 'Post-Service Follow-Up Campaign', desc: 'Automated satisfaction surveys and rebooking reminders via WhatsApp and SMS.', tags: ['WhatsApp', 'SMS', 'Email'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm font-medium">{tag}</span>
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
              Why Automotive Teams Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Car, title: '24/7 Booking Availability', desc: 'Customers can book service anytime — no missed appointments' },
                { icon: Wrench, title: 'Instant Availability Checks', desc: 'Answer parts and pricing questions automatically' },
                { icon: TrendingUp, title: 'Boost Repeat Service Visits', desc: 'Automated reminders increase rebooking rates' },
                { icon: MessageCircle, title: 'Multi-Channel Support', desc: 'Meet customers on their preferred communication channels' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-orange-600 mb-4" />
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
              Real Results for Automotive Teams
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '75%', desc: 'appointments booked without staff' },
                { stat: '+35%', desc: 'repeat service visits' },
                { stat: '50%', desc: 'lower call volume' },
                { stat: '0', desc: 'missed leads' }
              ].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border-2 border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Fill Your Service Schedule?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join automotive teams automating 75% of their service bookings
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
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
