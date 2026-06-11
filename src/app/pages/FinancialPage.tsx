import { motion } from 'react';
import { TrendingUp, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function FinancialPage() {
  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/10 to-transparent" />
        </div>
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Automate Client Onboarding and Never Miss a Query
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Handle FAQs, schedule meetings, and guide clients through onboarding — automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#27AE60] to-[#229954] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
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
              The Financial Services Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'High volume of routine queries', desc: 'Staff overwhelmed with FAQs and repetitive client questions' },
                { icon: Calendar, title: 'Slow onboarding process', desc: 'Manual document collection and guidance delays client activation' },
                { icon: Target, title: 'Staff time lost on repetitive tasks', desc: 'Administrative work takes away from high-value advisory services' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-green-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-green-600 mb-4" />
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
              How Financial Services Teams Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Client FAQ Agent', desc: 'Answer questions about services, pricing, and tax deadlines via web chat or WhatsApp.', tags: ['Web Chat', 'WhatsApp', 'Email'] },
                { title: 'Appointment Scheduling Agent', desc: 'Book tax consultations, audit reviews, and advisory meetings automatically.', tags: ['Calendar', 'Email', 'SMS'] },
                { title: 'Onboarding Document Agent', desc: 'Guide new clients through document submission with step-by-step automated follow-ups.', tags: ['Email', 'WhatsApp', 'SMS'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium">{tag}</span>
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
              Why Financial Teams Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: TrendingUp, title: 'Handle Routine Queries at Scale', desc: 'AI handles FAQs automatically, freeing advisors for complex work' },
                { icon: Calendar, title: 'Streamlined Appointment Booking', desc: 'Automated scheduling reduces coordination overhead' },
                { icon: Briefcase, title: 'Faster Client Onboarding', desc: 'Guide clients through required documents and steps automatically' },
                { icon: MessageCircle, title: 'Multi-Channel Support', desc: 'Meet clients on their preferred platforms' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-green-600 mb-4" />
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
              Real Results for Financial Teams
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '85%', desc: 'routine queries handled by AI' },
                { stat: '50%', desc: 'faster client onboarding' },
                { stat: '24/7', desc: 'availability' },
                { stat: '40%', desc: 'less admin work' }
              ].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border-2 border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Streamline Client Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join financial firms automating 85% of routine queries
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-green-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
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
