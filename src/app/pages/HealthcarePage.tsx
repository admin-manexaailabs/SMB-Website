import { motion } from 'react';
import { HeartPulse, MessageCircle, Phone, Mail, Globe, MessageSquare, CheckCircle, TrendingUp, Clock, Zap, Target, BarChart3, ArrowRight, AlertCircle, Calendar, Stethoscope } from 'lucide-react';
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

      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              The Healthcare Challenge
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: AlertCircle, title: 'Staff overwhelmed with scheduling calls', desc: 'Front desk drowned in appointment requests, reducing patient care focus' },
                { icon: Clock, title: 'High no-show rates', desc: 'Manual reminders are unreliable, leading to wasted appointment slots' },
                { icon: Zap, title: 'Manual reminder processes', desc: 'Staff spend hours on repetitive reminder calls and SMS messages' }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-red-200 rounded-2xl p-8">
                  <item.icon className="w-8 h-8 text-red-600 mb-4" />
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
              How Healthcare Providers Use SMB Flow
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Patient Appointment Agent', desc: 'Book, reschedule, and cancel appointments via WhatsApp, SMS, or web chat — 24/7.', tags: ['WhatsApp', 'SMS', 'Web Chat'] },
                { title: 'Reminder & Follow-Up Agent', desc: 'Automated appointment reminders, post-visit follow-ups, and prescription renewal prompts.', tags: ['SMS', 'WhatsApp', 'Voice'] },
                { title: 'Patient FAQ Agent', desc: 'Answer common questions about services, insurance, hours, and directions automatically.', tags: ['Web Chat', 'WhatsApp', 'Email'] }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-700 mb-6">{useCase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white text-red-700 rounded-full text-sm font-medium">{tag}</span>
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
              Why Healthcare Providers Choose SMB Flow
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: HeartPulse, title: '24/7 Patient Booking', desc: 'Patients can book appointments anytime — reduce front desk load' },
                { icon: Calendar, title: 'Automated Reminders', desc: 'Reduce no-shows with reliable appointment reminders' },
                { icon: Stethoscope, title: 'Post-Visit Follow-Up', desc: 'Automated follow-ups improve patient satisfaction and outcomes' },
                { icon: MessageCircle, title: 'Multi-Channel Support', desc: 'Reach patients on their preferred platforms' }
              ].map((feature, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-red-300 hover:shadow-lg transition-all">
                  <feature.icon className="w-8 h-8 text-red-600 mb-4" />
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
              Real Results for Healthcare Providers
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { stat: '70%', desc: 'appointments booked without staff' },
                { stat: '60%', desc: 'fewer no-shows' },
                { stat: '24/7', desc: 'patient access' },
                { stat: '50%', desc: 'less admin load' }
              ].map((outcome, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border-2 border-red-200">
                  <div className="text-4xl font-bold text-red-600 mb-2">{outcome.stat}</div>
                  <p className="text-gray-700">{outcome.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl text-white mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Reduce Your Admin Load?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join healthcare providers automating 70% of their scheduling
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-red-600 hover:bg-gray-100 text-lg px-10 py-3 rounded-full">
                Start Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      
      <section className="pt-20 pb-24 overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Confident, Calm Messaging */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Built for Healthcare
                  </span>
                </div>

                <h1 
                  className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Built for Modern Healthcare Operations
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Appointments, patient queries, reminders, and follow-ups — handled automatically, with care and precision.
                </p>

                <Link to="/templates#healthcare">
                  <Button 
                    size="lg"
                    className="shadow-lg text-base px-8 rounded-full bg-blue-600 hover:bg-blue-700"
                  >
                    Explore Healthcare Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right: Animated Patient Journey */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg max-w-lg">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Patient Journey
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {journeySteps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0.3 }}
                        animate={{ 
                          opacity: idx <= journeyStep ? 1 : 0.3,
                        }}
                        transition={{ duration: 1 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-4">
                          {/* Step Number */}
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-sm transition-all duration-700"
                            style={{
                              backgroundColor: idx <= journeyStep ? '#2F80ED' : '#F3F4F6',
                              color: idx <= journeyStep ? 'white' : '#9CA3AF'
                            }}
                          >
                            {idx + 1}
                          </div>

                          {/* Step Content */}
                          <div className="flex-1 flex items-center gap-3 p-3 bg-gray-50 rounded-lg border transition-all duration-700"
                            style={{
                              borderColor: idx === journeyStep ? '#2F80ED' : '#E5E7EB',
                              backgroundColor: idx === journeyStep ? '#EFF6FF' : '#F9FAFB'
                            }}
                          >
                            <step.icon 
                              className="w-5 h-5"
                              style={{ color: idx <= journeyStep ? '#2F80ED' : '#9CA3AF' }}
                            />
                            <span 
                              className="text-sm transition-colors duration-700"
                              style={{ color: idx <= journeyStep ? '#1F2937' : '#9CA3AF' }}
                            >
                              {step.label}
                            </span>
                          </div>

                          {/* Check Mark */}
                          {idx < journeyStep && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            </motion.div>
                          )}
                        </div>

                        {/* Connector Line */}
                        {idx < journeySteps.length - 1 && (
                          <div className="ml-5 mt-1 mb-1">
                            <motion.div
                              className="w-0.5 h-4 rounded-full transition-all duration-700"
                              style={{
                                backgroundColor: idx < journeyStep ? '#2F80ED' : '#E5E7EB'
                              }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Daily Challenges in Healthcare */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-700 h-full shadow-sm">
                    {/* Icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: '#EFF6FF' }}
                    >
                      <problem.icon className="w-6 h-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg mb-4 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {problem.title}
                    </h3>

                    {/* Problem → Solution Animation */}
                    <AnimatePresence mode="wait">
                      {activeProblem === idx ? (
                        <motion.div
                          key="solution"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="p-3 rounded-lg bg-blue-50 border border-blue-200"
                        >
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-blue-900">
                              {problem.solution}
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="problem"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-500">
                              {problem.problem}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Intelligent Appointment Scheduling
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Appointment Flow Visual */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                  <div className="space-y-4">
                    {[
                      { icon: Phone, text: 'Patient requests appointment', step: 1 },
                      { icon: Calendar, text: 'Availability checked in real time', step: 2 },
                      { icon: CheckCircle, text: 'Confirmation sent instantly', step: 3 },
                      { icon: Bell, text: 'Reminder before the visit', step: 4 }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-blue-600 mb-1">Step {item.step}</div>
                          <div className="text-sm text-gray-900">{item.text}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Short Explanatory Copy */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Patients request appointments via call, chat, or message. The system checks availability, sends instant confirmations, and delivers timely reminders.
                  </p>
                  
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-base text-blue-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Fewer no-shows. Better patient experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Patient Communication, Always Available */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Reliable Patient Communication
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Patient Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-gray-600" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Patient queries
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: 'Is the doctor available today?', time: '09:15' },
                      { text: 'What are your clinic timings?', time: '09:16' },
                      { text: 'Can I reschedule my appointment?', time: '09:18' }
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.5, duration: 0.8 }}
                        className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                      >
                        <div className="text-sm text-gray-900 mb-1">{msg.text}</div>
                        <div className="text-xs text-gray-500">{msg.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* System Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Bot className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      System responses
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: 'Yes, Dr. Shah has slots at 11am and 3pm', label: 'Accurate response' },
                      { text: 'We are open Mon-Sat, 9am to 6pm', label: 'Context-aware' },
                      { text: 'Appointment moved to Friday 2pm', label: 'Confirmed' }
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.5 + 0.3, duration: 0.8 }}
                        className="bg-white p-4 rounded-xl border border-blue-200 shadow-sm"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm text-gray-900 mb-1">{msg.text}</div>
                            <div className="text-xs text-blue-600">{msg.label}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-3 bg-white/70 rounded-lg border border-blue-200">
                    <div className="text-xs text-gray-700">Escalation to staff when needed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Automated Reminders & Follow-Ups */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Automated Reminders & Follow-Ups
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Patients stay informed without repeated calls.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Timeline Animation */}
              <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  {reminderTimeline.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.25, duration: 1 }}
                      className="text-center relative"
                    >
                      {/* Icon */}
                      <motion.div 
                        className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md transition-all duration-700"
                        style={{
                          backgroundColor: reminderStep >= idx ? '#2F80ED' : '#F3F4F6',
                        }}
                      >
                        <step.icon 
                          className="w-8 h-8 transition-colors duration-700"
                          style={{ color: reminderStep >= idx ? 'white' : '#9CA3AF' }}
                        />
                      </motion.div>

                      {/* Label */}
                      <div className="text-sm mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {step.label}
                      </div>
                      <div className="text-xs text-gray-500">{step.time}</div>

                      {/* Arrow */}
                      {idx < reminderTimeline.length - 1 && (
                        <ArrowRight 
                          className="hidden md:block w-5 h-5 absolute transition-colors duration-700"
                          style={{ 
                            right: '-1rem', 
                            top: '26px',
                            color: reminderStep > idx ? '#2F80ED' : '#D1D5DB'
                          }} 
                        />
                      )}

                      {/* Checkmark */}
                      {reminderStep > idx && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Support for Care Teams */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Support for Care Teams
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: 'Reduce front-desk workload', desc: 'Automate routine queries' },
                { icon: Bell, title: 'Route urgent cases correctly', desc: 'Priority handling' },
                { icon: FileText, title: 'Preserve conversation history', desc: 'Complete context' },
                { icon: UserCheck, title: 'Support human handoff seamlessly', desc: 'Smooth transitions' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 1 }}
                  className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-base mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center mt-12"
            >
              <p className="text-base text-gray-600">
                This reassures staff, not just management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Channels Patients Already Use */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Channels Patients Already Use
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Patients reach you the way they're comfortable.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12 max-w-4xl mx-auto">
              {channels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.8 }}
                  className="relative"
                >
                  <div 
                    className="bg-white rounded-2xl p-6 border-2 transition-all duration-700 text-center"
                    style={{
                      borderColor: activeChannel === idx ? channel.color : '#E5E7EB',
                      boxShadow: activeChannel === idx ? `0 0 20px ${channel.color}20` : 'none'
                    }}
                  >
                    {channel.primary && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        Primary
                      </div>
                    )}
                    
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center transition-all duration-700"
                      style={{ 
                        backgroundColor: activeChannel === idx ? `${channel.color}20` : '#F9FAFB'
                      }}
                    >
                      <channel.icon 
                        className="w-6 h-6 transition-colors duration-700"
                        style={{ color: activeChannel === idx ? channel.color : '#9CA3AF' }}
                      />
                    </div>
                    
                    <div className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {channel.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Designed for Healthcare Providers */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl lg:text-5xl mb-4 text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Designed for Healthcare Providers
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Heart, label: 'Clinics & Hospitals' },
                { icon: Activity, label: 'Diagnostic Centers' },
                { icon: Stethoscope, label: 'Dental Clinics' },
                { icon: ClipboardCheck, label: 'Physiotherapy & Wellness' },
                { icon: Building2, label: 'Multi-location Groups' }
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-700 h-full text-center">
                    <div className="w-16 h-16 rounded-xl bg-blue-50 mx-auto mb-4 flex items-center justify-center">
                      <type.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {type.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
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