import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GraduationCap, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function EducationPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9B51E0]/10 to-transparent" />
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
                Automate Enrollment, Scheduling & Student Communication
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Handle admissions inquiries, fee reminders, and class scheduling — without adding staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#9B51E0] to-[#7C3AED] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
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
              The Education Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'Staff overwhelmed with admission calls', desc: 'Handling dozens of inquiry calls daily wastes staff time' },
                { icon: Clock, title: 'Fee follow-ups fall through cracks', desc: 'Manual reminders mean missed payments and administrative overhead' },
                { icon: Zap, title: 'Repetitive schedule queries', desc: 'Students ask the same class availability questions repeatedly' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-purple-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-purple-600 mb-4" />
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
              How Educational Institutions Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Enrollment Inquiry Agent', desc: 'Answer course questions, collect student details, and book counselor calls automatically.', tags: ['WhatsApp', 'Web Chat', 'Voice'] },
                { title: 'Class Scheduling Agent', desc: 'Handle seat availability, reschedules, and cancellations via WhatsApp or web chat.', tags: ['WhatsApp', 'SMS', 'Email'] },
                { title: 'Fee Reminder Campaign', desc: 'Automated WhatsApp and SMS sequences for payment due dates and overdue reminders.', tags: ['SMS', 'Email', 'WhatsApp'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-purple-50 to-purple-100/50 border-2 border-purple-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-purple-700 rounded-full text-sm font-medium">{tag}</span>
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
              Why Education Teams Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: GraduationCap, title: '24/7 Admissions Support', desc: 'Capture every inquiry automatically — even outside business hours' },
                { icon: Calendar, title: 'Automated Class Scheduling', desc: 'Handle availability and enrollment requests instantly' },
                { icon: TrendingUp, title: 'Smart Fee Management', desc: 'Automated payment reminders reduce collection gaps' },
                { icon: MessageCircle, title: 'Multi-Channel Communication', desc: 'Reach students and families on their preferred platforms' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-purple-600 mb-4" />
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
              Real Results for Educational Teams
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '80%', desc: 'admission queries automated' },
                { stat: '60%', desc: 'fewer missed follow-ups' },
                { stat: '50%', desc: 'faster enrollment' },
                { stat: '24/7', desc: 'availability' }
              ].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border-2 border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Streamline Your Admissions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join educational institutions automating 80% of their admissions inquiries
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
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
