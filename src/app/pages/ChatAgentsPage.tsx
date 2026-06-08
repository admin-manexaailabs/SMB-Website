import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';
import chatAgentHero from 'figma:asset/d486d847b71f1ceaf3bf9f71ce7d2005eb0fa507.png';
import agentAvatar from 'figma:asset/b8c809b2aa8edc3fec217fc9cf45086116fd4dca.png';

export default function ChatAgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [demoStep, setDemoStep] = useState(0);

  // FAQ Data
  const faqs = [
    {
      question: "What is a Chat Agent?",
      answer: "A Chat Agent is an AI-powered conversational assistant that can handle customer inquiries, bookings, lead capture, and support requests 24/7 across multiple channels like WhatsApp, SMS, email, and web chat — all without requiring any coding."
    },
    {
      question: "How does it improve customer support?",
      answer: "Chat Agents provide instant responses to customer questions, reducing wait times from hours to seconds. They can handle multiple conversations simultaneously, qualify leads, book appointments, and escalate complex issues to human agents when needed."
    },
    {
      question: "Which channels are supported?",
      answer: "Chat Agents work seamlessly across WhatsApp Business, SMS, Email, Instagram DMs, Facebook Messenger, and Web Chat widgets. You can deploy the same agent to all channels or customize behavior per channel."
    },
    {
      question: "Is coding required?",
      answer: "No coding required! Our visual no-code builder lets you create chat agents by dragging and dropping conversation flows, setting up triggers, and customizing responses through an intuitive interface."
    },
    {
      question: "Can I customize responses?",
      answer: "Absolutely! You can customize every aspect of your chat agent including personality, tone, response templates, conditional logic, and integration with your business data and systems."
    },
    {
      question: "How quickly can I deploy a chat agent?",
      answer: "With our pre-built templates, you can have a fully functional chat agent live in under 10 minutes. Custom agents typically take 30-60 minutes depending on complexity."
    }
  ];

  // Demo conversation
  const demoMessages = [
    { type: 'user', text: 'Hi! Do you have availability tomorrow at 2pm?', delay: 0 },
    { type: 'agent', text: 'Hello! Let me check our availability for you.', delay: 1 },
    { type: 'agent', text: 'Yes! We have slots available tomorrow at 2:00 PM. Would you like to book an appointment?', delay: 2.5 },
    { type: 'user', text: 'Yes, please book it for Sarah Johnson', delay: 4 },
    { type: 'agent', text: '✓ Perfect! I\'ve booked your appointment for tomorrow at 2:00 PM under the name Sarah Johnson. You\'ll receive a confirmation via email shortly.', delay: 5 }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full mb-6 shadow-sm">
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">AI-Powered Chat Agents</span>
              </div>
              
              <h3 className="text-4xl lg:text-5xl mb-6 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                AI Chat Agents —{' '}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Smart Customer Conversations 24/7
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Instant responses, seamless conversations, and automated workflows across WhatsApp, SMS, Email, and Webchat.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white text-lg px-8 py-6 rounded-full shadow-lg shadow-purple-500/30">
                    Create Chat Agent
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-full"
                  onClick={() => toast.info("Coming soon!")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  See Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: 'Response Time', value: '<1s' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Satisfaction', value: '4.8/5' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl mb-1 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Coded Chatbot Interface */}
              <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 px-5 py-4 flex items-start gap-3 relative">
                  {/* Agent Avatar */}
                  <img 
                    src={agentAvatar} 
                    alt="Jane AI Agent" 
                    className="w-14 h-14 rounded-full border-2 border-white/30"
                  />
                  
                  {/* Agent Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-white font-semibold">Jane</span>
                      <span className="text-white/90">•</span>
                      <span className="text-white/90 text-sm">AI</span>
                    </div>
                    <p className="text-white/80 text-sm">Customer Support Agent</p>
                  </div>
                  
                  {/* Close Button */}
                  <button className="text-white/80 hover:text-white transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Chat Content Area */}
                <div className="p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white min-h-[400px]">
                  {/* Agent Message */}
                  <div className="bg-white rounded-2xl rounded-tl-sm p-4 border border-gray-100">
                    <p className="text-gray-800 text-[15px] leading-relaxed">
                      Hi, my name is Jane, your <span className="font-semibold">AI Support Agent</span> ready to help you with forms. How can I help you today?
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2.5">
                    <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-left text-gray-700 text-[15px] transition-colors">
                      Report an issue
                    </button>
                    <button className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-left text-gray-700 text-[15px] transition-colors">
                      Provide feedback
                    </button>
                  </div>
                  
                  {/* User Response */}
                  <div className="flex justify-end pt-6">
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-purple-100 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                      <p className="text-gray-800 text-[15px]">I want to report an issue.</p>
                    </div>
                  </div>
                </div>
                
                {/* Input Area */}
                <div className="px-4 pb-4 bg-white">
                  <div className="flex items-center gap-2 bg-pink-50/50 border border-gray-200 rounded-2xl px-4 py-3">
                    <input 
                      type="text" 
                      placeholder="Message" 
                      className="flex-1 bg-transparent outline-none text-gray-600 placeholder:text-gray-400 text-[15px]"
                      disabled
                    />
                    <button className="w-9 h-9 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                      <Mic className="w-4 h-4" />
                    </button>
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
              How <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Chat Agents</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to automate customer conversations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: 'Receive',
                description: 'Customer messages arrive from any channel',
                color: 'from-purple-400 to-purple-600',
                step: '01'
              },
              {
                icon: Search,
                title: 'Understand',
                description: 'AI processes intent and context',
                color: 'from-blue-400 to-blue-600',
                step: '02'
              },
              {
                icon: Database,
                title: 'Look Up',
                description: 'Fetch data from your systems',
                color: 'from-teal-400 to-teal-600',
                step: '03'
              },
              {
                icon: Send,
                title: 'Reply',
                description: 'Send personalized response instantly',
                color: 'from-cyan-400 to-cyan-600',
                step: '04'
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
                {i < 3 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-200 to-teal-200"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-teal-100 rounded-full flex items-center justify-center text-sm font-semibold text-purple-700 shadow-md">
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
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Chat Agents
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Feature 1: Instant Responses */}
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
                  Instant Responses
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Answer customer questions in under 1 second. No more waiting, no more delays. Your customers get the information they need, exactly when they need it.
                </p>

                <ul className="space-y-3">
                  {[
                    'Sub-second response time',
                    'Context-aware replies',
                    'Natural conversation flow',
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

            {/* Feature 2: Lead Capture & Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-teal-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Lead Capture & Bookings
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Automatically qualify leads, schedule appointments, and capture customer information without lifting a finger. Integrated with your calendar and CRM.
                </p>

                <ul className="space-y-3">
                  {[
                    'Smart lead qualification',
                    'Calendar sync (Google, Outlook)',
                    'Automated reminders',
                    'CRM integration'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Feature 3: Multi-Channel Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-blue-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Multi-Channel Support
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  One agent, every channel. Deploy across WhatsApp, SMS, Email, Instagram, Messenger, and Web Chat. Manage all conversations in one place.
                </p>

                <ul className="space-y-3">
                  {[
                    'WhatsApp Business API',
                    'SMS & Email ready',
                    'Social media (IG, FB)',
                    'Web chat widget'
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

      {/* Benefits Grid Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                title: 'Saves Time',
                description: 'Automate 80% of routine inquiries',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Users,
                title: 'Works 24/7',
                description: 'Never miss a customer message',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'Handles High Volume',
                description: 'Unlimited concurrent conversations',
                color: 'from-teal-400 to-teal-600'
              },
              {
                icon: Code2,
                title: 'No-Code Setup',
                description: 'Launch in minutes, not weeks',
                color: 'from-cyan-400 to-cyan-600'
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              See It In{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Action
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Watch how a chat agent handles a booking request
            </p>
          </motion.div>

          {/* Chat Demo Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            {/* Chat Header */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-md flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Booking Assistant</div>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Online
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 min-h-[300px]">
              {demoMessages.slice(0, Math.min(demoStep + 1, demoMessages.length)).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-white text-gray-900 shadow-md border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Replay Button */}
            <div className="mt-6 text-center">
              <Button
                onClick={() => setDemoStep((prev) => (prev + 1) % (demoMessages.length + 1))}
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-6"
              >
                {demoStep >= demoMessages.length - 1 ? 'Replay Demo' : 'Next Message'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why SMBs Love{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                Chat Agents
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                role: 'Owner, Bella Salon & Spa',
                content: 'Our chat agent handles 90% of booking requests automatically. We went from spending 3 hours a day on messages to just checking confirmations. Game changer!',
                rating: 5
              },
              {
                name: 'James Chen',
                role: 'Manager, Chen\'s Dim Sum',
                content: 'We get orders through WhatsApp 24/7 now. The chat agent never sleeps, never makes mistakes, and customers love the instant responses.',
                rating: 5
              },
              {
                name: 'Emily Thompson',
                role: 'Director, Thompson Dental',
                content: 'Appointment reminders and rescheduling used to be a nightmare. Now our chat agent handles it all — patients can book, cancel, or reschedule on their own.',
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Launch Your Chat Agent?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses automating customer conversations with AI. Set up your first chat agent in under 10 minutes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 text-lg px-10 py-6 rounded-full shadow-2xl">
                  Start Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="border-2 border-[#9B51E0] text-[#9B51E0] hover:bg-[#9B51E0] hover:text-white text-lg px-10 py-6 rounded-full transition-all duration-300">
                  View Templates
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                5,000+ businesses
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-2xl border border-purple-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4 font-bold font-normal">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}