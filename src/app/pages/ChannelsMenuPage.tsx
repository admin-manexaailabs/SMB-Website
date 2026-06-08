import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  MessageCircle,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Check,
  ArrowRight,
  Zap,
  BarChart3,
  Users,
  Calendar,
  ShoppingBag,
  MessageSquare,
  Bell
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import whatsappIcon from "figma:asset/231880b596cafb100ae1f8485ffb9c56cb94eb9c.png";
import gmailIcon from "figma:asset/b934c62f9be1fa946e5275b2896c2b9f45f43a6d.png";
import messengerIcon from "figma:asset/f8c9a96699d1add886617252b2c5cf6f4a964ae6.png";
import facebookIcon from "figma:asset/4091f813b002df83f38af59e2c21a09b85f3275b.png";

export default function ChannelsMenuPage() {
  const channels = [
    {
      icon: whatsappIcon,
      name: 'WhatsApp',
      use: 'Conversations, reminders, campaigns',
      isImage: true
    },
    {
      icon: messengerIcon,
      name: 'Instagram DM',
      use: 'Leads from reels, ads, profile messages',
      isImage: true
    },
    {
      icon: facebookIcon,
      name: 'Facebook Messenger',
      use: 'Page inquiries and automated replies',
      isImage: true
    },
    {
      icon: gmailIcon,
      name: 'Email',
      use: 'Campaigns, confirmations, follow-ups',
      isImage: true
    },
    {
      icon: Globe,
      name: 'Webchat',
      use: 'Website support and lead capture',
      isImage: false
    },
    {
      icon: Phone,
      name: 'Phone (Voice)',
      use: 'Calls, bookings, IVR replacement',
      isImage: false
    },
    {
      icon: MessageCircle,
      name: 'SMS',
      use: 'Alerts, reminders, transactional messages',
      isImage: false
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Pick a channel',
      description: 'Choose where customers will reach you.'
    },
    {
      number: '2',
      title: 'Connect your account or number',
      description: 'Securely link WhatsApp, email, phone, or social accounts.'
    },
    {
      number: '3',
      title: 'Assign an AI agent',
      description: 'Use an existing agent or create a new one.'
    },
    {
      number: '4',
      title: 'Apply flows',
      description: 'The same flow runs across all connected channels.'
    }
  ];

  const channelIntelligence = [
    {
      icon: Phone,
      title: 'Voice & Phone',
      description: 'Listens, understands, speaks naturally',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Messaging apps',
      description: 'Conversational, remembers context',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Structured replies and campaigns',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'SMS',
      description: 'Short, instant, time-sensitive messages',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const useCases = [
    {
      title: 'Booking & scheduling',
      channels: 'WhatsApp + Phone + SMS',
      icon: Calendar,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Lead capture',
      channels: 'Instagram + Webchat',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Campaigns & outreach',
      channels: 'Email + WhatsApp',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Customer support',
      channels: 'Webchat + Facebook Messenger',
      icon: MessageSquare,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Reminders & alerts',
      channels: 'SMS + Email',
      icon: Bell,
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Page Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="bg-gradient-to-r from-[#9B51E0] via-[#2F80ED] to-[#F2994A] bg-clip-text text-transparent">
                Channels
              </span>
            </h1>
            
            <p className="text-2xl mb-4 text-gray-700">
              Connect your AI agents wherever your customers talk
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Use a single AI agent across Email, WhatsApp, Instagram, Facebook, Webchat, Phone, and SMS — without rebuilding logic for each channel.
            </p>

            {/* Gradient accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-32 mx-auto mt-8 rounded-full bg-gradient-to-r from-[#9B51E0] via-[#2F80ED] to-[#F2994A]"
            />
          </motion.div>
        </div>
      </section>

      {/* One Agent, Multiple Channels */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-3" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              One agent. Multiple channels.
            </h2>
          </motion.div>

          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="flex flex-col items-center">
              {/* Central Agent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-10 py-6 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-2xl shadow-2xl mb-20 relative z-10"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8" />
                  <span className="text-2xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    AI Agent
                  </span>
                </div>
              </motion.div>

              {/* Connection Lines - Clean architectural connectors */}
              <svg 
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none" 
                style={{ zIndex: 1 }}
                preserveAspectRatio="none"
              >
                {[
                  { x: '7%', gradient: 'url(#mainChannelGradient1)' },
                  { x: '21%', gradient: 'url(#mainChannelGradient2)' },
                  { x: '35%', gradient: 'url(#mainChannelGradient3)' },
                  { x: '50%', gradient: 'url(#mainChannelGradient4)' },
                  { x: '65%', gradient: 'url(#mainChannelGradient5)' },
                  { x: '79%', gradient: 'url(#mainChannelGradient6)' },
                  { x: '93%', gradient: 'url(#mainChannelGradient7)' }
                ].map((line, idx) => (
                  <motion.path
                    key={idx}
                    d={`M 50% 28% Q 50% 50%, ${line.x} 70%`}
                    stroke={line.gradient}
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.25"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.25 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.08, ease: "easeOut" }}
                  />
                ))}
                
                <defs>
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <linearGradient key={num} id={`mainChannelGradient${num}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#9B51E0" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#2F80ED" stopOpacity="0.6" />
                    </linearGradient>
                  ))}
                </defs>
              </svg>

              {/* Channel Icons */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10 w-full">
                {channels.map((channel, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
                      {channel.isImage ? (
                        <img src={channel.icon as string} alt={channel.name} className="w-8 h-8" />
                      ) : (
                        <channel.icon className="w-8 h-8 text-gray-700" />
                      )}
                    </div>
                    <span className="text-xs text-gray-600 text-center">{channel.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Customers can start a conversation on any channel.<br />
              Your agent responds using the same flows, logic, and knowledge — everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supported Channels Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Supported Channels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channels.map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {channel.isImage ? (
                      <img src={channel.icon as string} alt={channel.name} className="w-7 h-7" />
                    ) : (
                      <channel.icon className="w-7 h-7 text-gray-700" />
                    )}
                  </div>
                  <div>
                    <h3 
                      className="text-lg mb-1" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {channel.name}
                    </h3>
                    <p className="text-sm text-gray-600">{channel.use}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Channels Work */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How channels work in SMB Flow
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative max-w-6xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Step number circle */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-500 text-white flex items-center justify-center mb-4 shadow-lg text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.number}
                    </div>
                    
                    <h3 
                      className="text-lg mb-2" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector arrow (not on last item) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 z-0">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Supporting line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700">
                No separate bots. No duplicate setup. One agent, reused everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channel-Aware Intelligence */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Built to behave naturally on every channel
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {channelIntelligence.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 
                    className="text-xl mb-2" 
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real SMB Use Cases */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Common ways businesses use channels together
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4 shadow-md`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 
                  className="text-lg mb-2" 
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-600">{useCase.channels}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scale & Reliability Wrap-Up */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Whether you handle a few conversations a day or millions of messages at scale, channels work the same way.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MessageSquare, text: 'Shared context across channels' },
                { icon: BarChart3, text: 'Centralized inbox & analytics' },
                { icon: Zap, text: 'One flow reused everywhere' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}