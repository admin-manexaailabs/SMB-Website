import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Dumbbell, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, ArrowRight, AlertCircle, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function FitnessPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fill More Classes. Retain More Members.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Automate class bookings, membership inquiries, and re-engagement campaigns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#00B5D8] to-[#0596A8] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
                    Start Free <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button variant="outline" className="border-gray-300 text-gray-900 text-lg px-8 py-3 rounded-full w-full sm:w-auto">Watch Demo</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>The Fitness Challenge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'Front desk overwhelmed with class booking calls', desc: 'High volume of booking requests leads to long wait times' },
                { icon: Clock, title: 'Low member retention', desc: 'No automated re-engagement means members lapse' },
                { icon: Zap, title: 'No automated re-engagement', desc: 'Manual campaigns are time-consuming and inconsistent' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-teal-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-teal-600 mb-4" />
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>How Gyms & Studios Use SMB Flow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Class Booking Agent', desc: 'Let members book, reschedule, or cancel classes via WhatsApp or web chat — instantly.', tags: ['WhatsApp', 'Web Chat', 'SMS'] },
                { title: 'Membership Inquiry Agent', desc: 'Answer plan questions, pricing, and trial offers. Capture leads from interested prospects.', tags: ['Web Chat', 'WhatsApp', 'Email'] },
                { title: 'Re-Engagement Campaign Agent', desc: 'Automated WhatsApp and SMS campaigns targeting inactive members with offers and challenges.', tags: ['SMS', 'WhatsApp', 'Email'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-teal-50 to-teal-100/50 border-2 border-teal-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">{useCase.tags.map((tag) => (<span key={tag} className="px-3 py-1 bg-white text-teal-700 rounded-full text-sm font-medium">{tag}</span>))}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Why Fitness Teams Choose SMB Flow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Dumbbell, title: 'Instant Class Booking', desc: 'Reduce friction for members booking classes' },
                { icon: MessageCircle, title: 'Membership Support', desc: 'Automate common membership and billing queries' },
                { icon: TrendingUp, title: 'Retention Campaigns', desc: 'Re-engage inactive members automatically' },
                { icon: Calendar, title: 'Schedule Management', desc: 'Handle waitlists, reschedules, and cancellations' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-teal-600 mb-4" />
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Real Results for Fitness Teams</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[{ stat: '80%', desc: 'class bookings automated' }, { stat: '+35%', desc: 'member retention' }, { stat: '50%', desc: 'more trial conversions' }, { stat: '24/7', desc: 'booking availability' }].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center border-2 border-teal-200">
                  <div className="text-4xl font-bold text-teal-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Fill More Classes?
            </h2>
            <p className="text-xl text-white/90 mb-8">Start automating class bookings and member outreach today</p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">Start Free <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
