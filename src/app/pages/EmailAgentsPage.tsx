import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function EmailAgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ Data
  const faqs = [
    {
      question: 'How does the AI Email Agent learn my communication style?',
      answer: 'The AI analyzes your past emails, approved responses, and corrections to understand your tone, vocabulary, and preferred response patterns. Over time, it becomes better at mimicking your unique communication style.'
    },
    {
      question: 'Is my email data secure and private?',
      answer: 'Yes, absolutely. We use enterprise-grade encryption for all data. Your emails are processed securely, never shared with third parties, and you maintain full control over what the AI can access. We are fully GDPR and SOC 2 compliant.'
    },
    {
      question: 'Can I review emails before they are sent?',
      answer: 'Yes! You have complete control. Set the agent to draft mode (requires approval), auto-send for routine emails, or create custom rules for different scenarios. You decide what gets sent automatically.'
    },
    {
      question: 'What email providers are supported?',
      answer: 'SMB Flow Email Agent works with all major providers including Gmail, Outlook, Office 365, Yahoo Mail, and any provider supporting IMAP/SMTP protocols. Integration takes less than 2 minutes.'
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
                <Mail className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">AI-Powered Email Automation</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                AI Email Agent —{' '}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Reply to Emails Automatically
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your inbox with intelligent email automation. Process emails instantly, draft contextual replies, categorize messages, and keep your inbox organized—24/7.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/30">
                    Create Email Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300"
                  onClick={() => toast.info("Coming soon!")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: 'Time Saved', value: '95%' },
                  { label: 'Response Time', value: '<2s' },
                  { label: 'Availability', value: '24/7' }
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

            {/* Right: Email Interface Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Email Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-white" />
                  <span className="text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>AI Email Assistant</span>
                  <div className="ml-auto flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white">Active</span>
                  </div>
                </div>
                
                {/* Email List */}
                <div className="p-5 space-y-3 bg-gray-50 min-h-[400px]">
                  {[
                    { from: 'Customer Support', subject: 'Product inquiry', time: '2m ago', status: 'replying', color: 'from-purple-100 to-blue-100' },
                    { from: 'Sales Lead', subject: 'Demo request', time: '5m ago', status: 'categorized', color: 'from-blue-100 to-teal-100' },
                    { from: 'Team Member', subject: 'Meeting follow-up', time: '10m ago', status: 'prioritized', color: 'from-teal-100 to-cyan-100' }
                  ].map((email, idx) => (
                    <div key={idx} className={`bg-gradient-to-r ${email.color} rounded-xl p-4 border border-purple-100 shadow-sm hover:shadow-md transition-shadow`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                          <div>
                            <div className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>{email.from}</div>
                            <div className="text-xs text-gray-500">{email.subject}</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400">{email.time}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full">
                          {email.status}
                        </div>
                        <Zap className="w-3 h-3 text-purple-600" />
                      </div>
                    </div>
                  ))}
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
              How <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Email Agents</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to automate your inbox
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Connect Email',
                description: 'Securely link your email account with one click',
                color: 'from-purple-400 to-purple-600',
                step: '01'
              },
              {
                icon: Zap,
                title: 'Train Agent',
                description: 'Customize responses and set your business rules',
                color: 'from-blue-400 to-blue-600',
                step: '02'
              },
              {
                icon: Send,
                title: 'Automate Replies',
                description: 'Let AI handle emails while you focus on growth',
                color: 'from-teal-400 to-teal-600',
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
                Email Agents
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Smart Auto-Replies
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  AI analyzes context and intent to generate personalized, accurate responses that sound natural and maintain your brand voice.
                </p>

                <ul className="space-y-3">
                  {[
                    'Context-aware responses',
                    'Maintains your tone and style',
                    'Learns from corrections',
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
              className="group relative bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <FolderKanban className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Categorize & Prioritize
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically organize incoming emails by topic, urgency, and sender. Never miss an important message again.
                </p>

                <ul className="space-y-3">
                  {[
                    'Smart priority detection',
                    'Auto-categorization',
                    'Custom filtering rules',
                    'Urgent email alerts'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
              What Your Email Agent{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Can Do
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Mail,
                title: 'Draft Replies',
                description: 'Generate contextual email responses based on conversation history',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Inbox,
                title: 'Organize Inbox',
                description: 'Automatically sort, label, and archive emails intelligently',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Clock,
                title: 'Send Follow-Ups',
                description: 'Schedule and send intelligent follow-up messages automatically',
                color: 'from-teal-400 to-teal-600'
              },
              {
                icon: AlertCircle,
                title: 'Escalate Issues',
                description: 'Detect urgent issues and route them to the right person',
                color: 'from-cyan-400 to-cyan-600'
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
                icon: Headphones,
                title: 'Customer Support',
                description: 'Answer common questions instantly and route complex issues to specialists',
                benefits: ['90% faster responses', 'Reduced wait times', 'Higher satisfaction']
              },
              {
                icon: Users,
                title: 'Small Businesses',
                description: 'Handle client inquiries and manage communications without extra staff',
                benefits: ['Cost-effective scaling', 'Professional responses', 'Focus on core work']
              },
              {
                icon: Calendar,
                title: 'Booking Providers',
                description: 'Automate appointment confirmations and handle reschedule requests',
                benefits: ['Fewer no-shows', 'Easy rescheduling', 'Calendar sync']
              },
              {
                icon: ShoppingBag,
                title: 'E-Commerce',
                description: 'Track orders, answer product questions, and handle returns automatically',
                benefits: ['Order status updates', 'Product inquiries', 'Return processing']
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
              Start Automating Your Inbox Today
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of businesses saving 10+ hours per week with AI-powered email automation
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-xl">
                Create Email Agent
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300">
                Schedule Demo
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