import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function WhatsAppAgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ Data
  const faqs = [
    {
      question: 'Do I need WhatsApp Business API to use this?',
      answer: 'Yes, you\'ll need a WhatsApp Business API account. We can help you set this up if you don\'t have one yet. The process typically takes 1-2 business days for approval from Meta.'
    },
    {
      question: 'Can the AI handle multiple conversations at once?',
      answer: 'Absolutely! Your WhatsApp AI Agent can handle unlimited simultaneous conversations with no degradation in quality or response time. Whether it\'s 10 or 10,000 customers, everyone gets instant, personalized responses.'
    },
    {
      question: 'What languages does the WhatsApp Agent support?',
      answer: 'Our AI supports 95+ languages and can automatically detect the customer\'s language to respond accordingly. You can also set preferred languages for your business and the AI will maintain consistency.'
    },
    {
      question: 'Can I review messages before they\'re sent?',
      answer: 'Yes! You have complete control. Set the agent to draft mode (requires approval), enable auto-send for specific scenarios, or create custom rules for different scenarios. You can monitor all conversations in real-time.'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full mb-6 shadow-sm">
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-700">AI-Powered WhatsApp Automation</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                AI WhatsApp Agent —{' '}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Automate Conversations Effortlessly
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform WhatsApp into an intelligent customer service powerhouse. Handle inquiries, manage bookings, send reminders, and provide instant support—all automated with AI.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/30">
                    Create WhatsApp Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300"
                  onClick={() => toast.info("Coming soon!")}
                >
                  Talk to Sales
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: 'WhatsApp Users', value: '2B+' },
                  { label: 'Availability', value: '24/7' },
                  { label: 'Open Rate', value: '98%' }
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

            {/* Right: WhatsApp Interface Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* WhatsApp Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>AI Assistant</div>
                    <div className="text-xs text-white/80">Online</div>
                  </div>
                  <div className="ml-auto flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white">Active</span>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="p-5 space-y-3 bg-[#E5DDD5] min-h-[400px]">
                  {/* Customer Message */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">Hi! Do you have availability for a haircut tomorrow at 3pm?</p>
                      <div className="text-xs text-gray-400 mt-1">2:15 PM</div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-white">Yes! I can book you for 3pm tomorrow with Sarah. Would you like me to confirm this appointment?</p>
                      <div className="text-xs text-white/80 mt-1 flex items-center gap-1">
                        2:15 PM <CheckCircle className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-gray-800">Perfect! Yes please</p>
                      <div className="text-xs text-gray-400 mt-1">2:16 PM</div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-sm">
                      <p className="text-sm text-white">✅ Booked! Tomorrow at 3pm with Sarah. You'll receive a reminder 1 hour before. See you then!</p>
                      <div className="text-xs text-white/80 mt-1 flex items-center gap-1">
                        2:16 PM <CheckCircle className="w-3 h-3" />
                      </div>
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
              How <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WhatsApp Agents</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to automate WhatsApp conversations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Connect WhatsApp',
                description: 'Link your WhatsApp Business account with secure API',
                color: 'from-green-400 to-emerald-600',
                step: '01'
              },
              {
                icon: MessageCircle,
                title: 'Train Agent',
                description: 'Customize responses and teach your brand voice',
                color: 'from-purple-400 to-blue-600',
                step: '02'
              },
              {
                icon: Zap,
                title: 'Automate & Scale',
                description: 'Let AI handle customer conversations 24/7',
                color: 'from-blue-400 to-teal-600',
                step: '03'
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
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-blue-200"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700 shadow-md">
                    {step.step}
                  </div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Powerful Features of{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                WhatsApp Agents
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-purple-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Tailored Experience
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI adapts to each customer's unique needs, providing personalized responses based on conversation history and context.
                </p>

                <ul className="space-y-3">
                  {[
                    'Context-aware responses',
                    'Remembers preferences',
                    'Natural conversations',
                    'Multi-language support'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-green-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Smart Automation
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically handle FAQs, schedule appointments, process orders, and send reminders—freeing your team for high-value tasks.
                </p>

                <ul className="space-y-3">
                  {[
                    'FAQ automation',
                    'Booking management',
                    'Order processing',
                    'Smart reminders'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Your Agent Can Do Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              What Your WhatsApp Agent{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Can Do
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'Answer Queries',
                description: 'Instantly respond to customer questions about products and services',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Bell,
                title: 'Real-Time Updates',
                description: 'Send order status, delivery updates, and appointment changes',
                color: 'from-green-400 to-emerald-600'
              },
              {
                icon: Calendar,
                title: 'Manage Bookings',
                description: 'Schedule and reschedule appointments with calendar sync',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: UserPlus,
                title: 'Collect Info',
                description: 'Gather feedback and customer details during conversations',
                color: 'from-teal-400 to-cyan-600'
              }
            ].map((capability, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Every Business
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scissors,
                title: 'Salons & Spas',
                description: 'Handle bookings, send reminders, and answer styling questions',
                benefits: ['70% fewer no-shows', 'Easy rescheduling', 'Automated reminders']
              },
              {
                icon: Utensils,
                title: 'Restaurants',
                description: 'Take reservations, share specials, and send order updates',
                benefits: ['Faster table turnover', 'Real-time order status', 'Menu recommendations']
              },
              {
                icon: Stethoscope,
                title: 'Clinics',
                description: 'Schedule appointments, send reminders, and answer health queries',
                benefits: ['HIPAA-compliant', 'Reduced wait times', 'Better patient care']
              },
              {
                icon: ShoppingBag,
                title: 'E-Commerce',
                description: 'Answer questions, track orders, and handle returns',
                benefits: ['Higher conversions', 'Order tracking', 'Instant support']
              }
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{useCase.description}</p>
                <div className="pt-3 border-t border-purple-200">
                  <ul className="space-y-1 text-xs text-gray-600">
                    {useCase.benefits.map((benefit, j) => (
                      <li key={j}>• {benefit}</li>
                    ))}
                  </ul>
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
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg pr-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-purple-600 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Transform Your WhatsApp Communication?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of businesses using AI to deliver instant, personalized WhatsApp experiences
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl">
                  Set Up WhatsApp Agent
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300"
                onClick={() => toast.info("Coming soon!")}
              >
                Talk to Sales
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Free 14-day trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
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