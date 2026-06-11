import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CalendarDays, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function EventManagementPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Automate Registrations, Reminders & Guest Communication
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Handle every event inquiry, registration, and update — without the back-and-forth.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer"><Button className="bg-gradient-to-r from-[#F97316] to-[#F2994A] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">Start Free</Button></a>
                <Button variant="outline" className="border-gray-300 text-gray-900 text-lg px-8 py-3 rounded-full w-full sm:w-auto">Watch Demo</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>The Event Management Challenge</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ icon: AlertCircle, title: 'Manual RSVP tracking', desc: 'Spreadsheets and manual tracking create errors' }, { icon: Clock, title: 'Slow guest communication', desc: 'Delays cause confusion and no-shows' }, { icon: Zap, title: 'Last-minute coordination chaos', desc: 'Manual coordination breaks under pressure' }].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-coral-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-coral-600 mb-4" />
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
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>How Event Teams Use SMB Flow</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{ title: 'Event Registration Agent', desc: 'Capture guest details, confirm registrations, and send tickets automatically via WhatsApp or email.', tags: ['WhatsApp', 'Email', 'SMS'] }, { title: 'Event Reminder Campaign', desc: 'Automated multi-channel reminders with schedule, venue, and logistics details.', tags: ['SMS', 'Email', 'WhatsApp'] }, { title: 'Post-Event Follow-Up Agent', desc: 'Send thank-you messages, collect feedback, and promote upcoming events automatically.', tags: ['Email', 'WhatsApp', 'SMS'] }].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">{useCase.tags.map((tag) => (<span key={tag} className="px-3 py-1 bg-white text-orange-700 rounded-full text-sm font-medium">{tag}</span>))}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Why Event Teams Choose SMB Flow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[{ icon: CalendarDays, title: 'Automated Registrations', desc: 'Reduce manual ticketing and confirmation overhead' }, { icon: MessageCircle, title: 'Real-Time Guest Communication', desc: 'Send updates and changes instantly' }, { icon: TrendingUp, title: 'Better Attendance', desc: 'Reminders and follow-ups boost attendance' }, { icon: Phone, title: 'Multichannel Guest Support', desc: 'Reach attendees where they are' }].map((feature, i) => (
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

      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>Real Results for Event Teams</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[{ stat: '95%', desc: 'registrations processed without staff' }, { stat: '70%', desc: 'fewer no-shows' }, { stat: '+50%', desc: 'feedback responses' }, { stat: '24/7', desc: 'guest support' }].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border-2 border-orange-200">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>Ready to Automate Event Registration?</h2>
            <p className="text-xl text-white/90 mb-8">Start automating registrations, reminders and guest communication</p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer"><Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">Start Free</Button></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
