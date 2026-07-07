import { motion } from 'motion/react';
import { Link, Shield, Lock, FileText, HeartPulse, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Stethoscope } from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function HealthcarePage() {

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EB5757]/10 to-transparent" />
        </div>
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Automate Patient Scheduling, Reminders & Follow-Ups
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Give patients 24/7 access to booking and information — without burdening your front desk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#EB5757] to-[#D63031] hover:opacity-90 text-white text-lg px-8 py-3 rounded-full w-full sm:w-auto">
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
      

      {/* 9️⃣ Security, Privacy & Trust (VERY IMPORTANT) */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-blue-100 border border-blue-300 rounded-full mb-6">
                <Shield className="w-5 h-5 text-blue-700" />
                <span className="text-sm text-blue-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Security & Privacy
                </span>
              </div>

              <h2 
                className="text-4xl lg:text-5xl mb-6 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Built with Healthcare Sensitivity
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { 
                  icon: Shield, 
                  title: 'Secure data handling', 
                  desc: 'Patient information protected with enterprise-grade security'
                },
                { 
                  icon: Lock, 
                  title: 'Controlled access to information', 
                  desc: 'Role-based permissions and access controls'
                },
                { 
                  icon: FileText, 
                  title: 'Patient conversations protected', 
                  desc: 'End-to-end encryption for all communications'
                },
                { 
                  icon: CheckCircle, 
                  title: 'Designed with healthcare sensitivity', 
                  desc: 'Privacy-first architecture respecting patient confidentiality'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 1 }}
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Platform Backbone (Quiet Confidence) */}
      

      {/* 🔟 Closing CTA (Gentle & Professional) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 
                className="text-4xl lg:text-5xl mb-12 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Simplify Healthcare Operations Without Compromising Care
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/templates#healthcare">
                  <Button 
                    size="lg"
                    className="shadow-lg text-base px-10 rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    Explore Healthcare Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/templates#healthcare">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-10 border-2 border-gray-300 rounded-full hover:bg-white bg-white"
                  >
                    See Healthcare Templates
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}