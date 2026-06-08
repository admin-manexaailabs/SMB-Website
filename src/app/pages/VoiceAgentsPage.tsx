import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function VoiceAgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ Data
  const faqs = [
    {
      question: "How does a Voice Agent work?",
      answer: "Your AI Voice Agent answers incoming calls automatically using natural language processing. It understands customer requests, accesses your business data, and responds in real-time with a human-like voice. It can handle bookings, answer FAQs, route calls, and more—all without human intervention."
    },
    {
      question: "Can I customize the voice and personality?",
      answer: "Yes! You can choose from multiple voice options (male/female, different accents), adjust speaking speed, and customize the agent's personality and tone to match your brand. You can also upload custom scripts and responses."
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer: "If the Voice Agent encounters a complex query it can't handle, it will seamlessly transfer the call to a human team member. You can set custom escalation rules and fallback behaviors to ensure customers always get the help they need."
    },
    {
      question: "How much does a Voice Agent cost?",
      answer: "Pricing starts at $99/month for up to 100 calls. Additional calls are charged at $0.15 per minute. Enterprise plans with custom call volumes and dedicated support are available. Check our Pricing page for full details."
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6 shadow-sm">
                <Phone className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">AI-Powered Voice Agents</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                AI Phone Agent —{' '}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Answer Calls Automatically
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let AI handle incoming calls, book appointments, answer questions, and route urgent requests—24/7, with human-like conversation.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/30">
                    Create Voice Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300"
                  onClick={() => toast.info("Coming soon!")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Listen to Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: 'Calls Answered', value: '10K+' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Avg Response', value: '<2s' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl mb-1 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Hero Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Smartphone UI with Waveform */}
              <div className="relative max-w-md mx-auto">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-[3rem] blur-2xl opacity-30"></div>
                
                {/* Phone Frame */}
                <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900 p-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-6 px-2">
                    <span className="text-xs text-gray-600">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  {/* Call Screen */}
                  <div className="text-center py-12 px-6">
                    {/* Caller Info */}
                    <div className="mb-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                        <Phone className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl mb-1 text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        AI Voice Agent
                      </h3>
                      <p className="text-gray-500">Incoming Call</p>
                    </div>

                    {/* Waveform Animation */}
                    <div className="flex justify-center items-center gap-1 h-16 mb-8">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
                          animate={{
                            height: ['20%', '100%', '30%', '70%', '40%', '20%'],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: 'easeInOut'
                          }}
                        />
                      ))}
                    </div>

                    {/* Call Status */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 mb-6">
                      <p className="text-sm text-gray-700 flex items-center justify-center gap-2">
                        <Volume2 className="w-4 h-4 text-purple-600" />
                        <span>AI is speaking...</span>
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4">
                      <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Mic className="w-6 h-6 text-gray-600" />
                      </button>
                      <button className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg">
                        <Phone className="w-6 h-6 text-white" />
                      </button>
                      <button className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <Volume2 className="w-6 h-6 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How It{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to launch your AI phone agent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: 'Build & Train Agent',
                description: 'Use our no-code builder to create conversation flows, upload your business info, and customize voice settings.',
                step: '01',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Phone,
                title: 'Choose Phone Number',
                description: 'Get a new number or forward your existing business line to your AI agent.',
                step: '02',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: PhoneCall,
                title: 'Start Taking Calls',
                description: 'Your AI agent goes live instantly, answering calls 24/7 with human-like conversation.',
                step: '03',
                color: 'from-teal-500 to-teal-600'
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 z-0"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 z-10">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700 shadow-md">
                    {step.step}
                  </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mini Graphic */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {i === 0 && (
                        <>
                          <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                          <div className="flex-1 h-2 bg-gradient-to-r from-purple-200 to-purple-100 rounded-full"></div>
                          <CheckCircle className="w-5 h-5 text-purple-500" />
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Phone className="w-5 h-5 text-blue-600" />
                          </div>
                          <div className="flex-1 text-center text-sm text-gray-600">+1 (555) 123-4567</div>
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <Radio className="w-5 h-5 text-teal-500 animate-pulse" />
                          <div className="flex-1 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
                          <span className="text-xs text-teal-600 font-semibold">LIVE</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Cards Side by Side */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why Choose{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Voice Agents
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1: Custom Voice & Identity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border border-purple-100 overflow-hidden"
            >
              {/* Floating background elements */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Custom Voice & Identity
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Choose from multiple voices, accents, and speaking styles. Customize your agent's personality to perfectly match your brand.
                </p>

                <div className="space-y-4">
                  {[
                    'Male & female voice options',
                    'Multiple language support',
                    'Adjustable speaking speed',
                    'Custom greeting scripts'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Silhouette Avatars */}
                <div className="flex items-center gap-3 mt-8 pt-8 border-t border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Used by 2,500+ businesses</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: 24/7 Customer Service */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all border border-teal-100 overflow-hidden"
            >
              {/* Floating background elements */}
              <div className="absolute top-10 left-10 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  24/7 Customer Service
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Never miss a call again. Your AI agent works around the clock, handling unlimited simultaneous calls without breaks or holidays.
                </p>

                <div className="space-y-4">
                  {[
                    'Always available, no downtime',
                    'Handle multiple calls at once',
                    'Instant response time',
                    'Works on weekends & holidays'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Silhouette Avatars with Clock */}
                <div className="flex items-center gap-3 mt-8 pt-8 border-t border-teal-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">Online Now</span>
                    <span className="text-sm text-gray-500">• Serving customers</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Actions Your{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Agent Can Take
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful automation built into every call
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Route,
                title: 'Route Calls',
                description: 'Intelligently transfer calls to the right department or person',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: Calendar,
                title: 'Schedule Appointments',
                description: 'Book meetings and sync with your calendar automatically',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Send,
                title: 'Send Follow-ups',
                description: 'Automatically send SMS or email confirmations after calls',
                color: 'from-teal-500 to-teal-600'
              },
              {
                icon: UserPlus,
                title: 'Seamless Escalation',
                description: 'Transfer complex issues to human agents instantly',
                color: 'from-cyan-500 to-cyan-600'
              }
            ].map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {action.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {action.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Examples Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Perfect For{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Every Business
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours are using Voice Agents
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: 'Small Businesses',
                description: 'Handle customer inquiries, qualify leads, and route urgent calls.',
                color: 'from-purple-400 to-purple-600',
                bgColor: 'from-purple-50 to-purple-100'
              },
              {
                icon: Utensils,
                title: 'Restaurants',
                description: 'Take reservations, answer menu questions, and confirm bookings.',
                color: 'from-blue-400 to-blue-600',
                bgColor: 'from-blue-50 to-blue-100'
              },
              {
                icon: Calendar,
                title: 'Booking Services',
                description: 'Schedule appointments, send reminders, and manage cancellations.',
                color: 'from-teal-400 to-teal-600',
                bgColor: 'from-teal-50 to-teal-100'
              },
              {
                icon: Dumbbell,
                title: 'Fitness & Wellness',
                description: 'Book classes, answer membership questions, and send confirmations.',
                color: 'from-cyan-400 to-cyan-600',
                bgColor: 'from-cyan-50 to-cyan-100'
              }
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Silhouette Avatar */}
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                    <div className={`w-10 h-10 bg-gradient-to-br ${useCase.color} rounded-full flex items-center justify-center shadow-md`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">Active & Ready</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-900 pr-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? 'auto' : 0,
                    opacity: openFaq === i ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Start Elevating Your Customer Service Today
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Launch your AI Voice Agent in minutes. Handle unlimited calls, book appointments automatically, and never miss another customer.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-2xl">
                  Create Your Voice Agent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300"
                onClick={() => toast.info("Coming soon!")}
              >
                <Play className="w-5 h-5 mr-2" />
                Listen to Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Setup in 10 minutes
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}