import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Plane, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function TravelPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Automate Bookings, Inquiries & Itinerary Support
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Handle every traveler inquiry instantly — from package questions to booking confirmations.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#56CCF2] to-[#2F80ED] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">Start Free</Button>
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>The Travel Challenge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ icon: AlertCircle, title: 'High inquiry volume', desc: 'Slow response times lose potential bookings' }, { icon: Clock, title: 'Manual itinerary follow-ups', desc: 'Time-consuming confirmations and updates' }, { icon: Zap, title: 'No instant booking support', desc: 'Agents can’t keep up with real-time questions' }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-sky-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-sky-600 mb-4" />
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>How Travel Teams Use SMB Flow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ title: 'Travel Inquiry Agent', desc: 'Answer questions about packages, pricing, availability, and visa requirements — 24/7.', tags: ['WhatsApp', 'Web Chat', 'Email'] }, { title: 'Booking & Confirmation Agent', desc: 'Collect traveler details, confirm bookings, and send itinerary documents automatically.', tags: ['Email', 'SMS', 'WhatsApp'] }, { title: 'Post-Booking Support Agent', desc: 'Handle changes, cancellations, and travel updates via WhatsApp or email automatically.', tags: ['WhatsApp', 'Email', 'SMS'] }].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-sky-50 to-sky-100/50 border-2 border-sky-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">{useCase.tags.map((tag) => (<span key={tag} className="px-3 py-1 bg-white text-sky-700 rounded-full text-sm font-medium">{tag}</span>))}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Why Travel Teams Choose SMB Flow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[{ icon: Plane, title: 'Instant Booking Support', desc: 'Reduce lost bookings with fast responses' }, { icon: MessageCircle, title: 'Itinerary Support', desc: 'Automate itinerary delivery and updates' }, { icon: TrendingUp, title: 'Higher Conversions', desc: 'Faster replies increase booking conversions' }, { icon: Phone, title: 'Multi-Channel Support', desc: 'Support travelers on WhatsApp, email, and chat' }].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-sky-600 mb-4" />
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Real Results for Travel Teams</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[{ stat: '90%', desc: 'inquiries answered instantly' }, { stat: '+40%', desc: 'booking conversions' }, { stat: '60%', desc: 'less manual coordination' }, { stat: '24/7', desc: 'support' }].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8 text-center border-2 border-sky-200">
                  <div className="text-4xl font-bold text-sky-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-sky-600 to-sky-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>Ready to Automate Traveler Support?</h2>
            <p className="text-xl text-white/90 mb-8">Start automating traveler inquiries and bookings today</p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer"><Button className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">Start Free</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
