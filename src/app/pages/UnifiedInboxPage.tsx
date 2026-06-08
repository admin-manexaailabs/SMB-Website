import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  MessageCircle,
  Mail,
  Phone,
  Globe,
  Check,
  ArrowRight,
  UserCircle,
  Tag,
  Archive,
  AlertCircle,
  Bot,
  User,
  Zap,
  Eye,
  Users,
  Clock,
  ShieldCheck,
  Layers
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import whatsappIcon from "figma:asset/231880b596cafb100ae1f8485ffb9c56cb94eb9c.png";
import gmailIcon from "figma:asset/b934c62f9be1fa946e5275b2896c2b9f45f43a6d.png";
import messengerIcon from "figma:asset/f8c9a96699d1add886617252b2c5cf6f4a964ae6.png";

export default function UnifiedInboxPage() {
  const inboxItems = [
    {
      icon: MessageCircle,
      label: 'Customer messages',
      isImage: false
    },
    {
      icon: Zap,
      label: 'Campaign responses',
      isImage: false
    },
    {
      icon: Mail,
      label: 'Survey replies',
      isImage: false
    },
    {
      icon: Clock,
      label: 'Appointment confirmations',
      isImage: false
    },
    {
      icon: Phone,
      label: 'Missed calls & voice transcripts',
      isImage: false
    }
  ];

  const controls = [
    'View conversation history across channels',
    'See customer context and past interactions',
    'Assign, tag, or close conversations',
    'Escalate to humans instantly',
    'Resume AI handling anytime'
  ];

  const scaleFeatures = [
    {
      icon: Users,
      label: 'Built for SMB teams'
    },
    {
      icon: Layers,
      label: 'Handles high message volume'
    },
    {
      icon: Zap,
      label: 'Real-time sync across channels'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Page Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/30 to-white">
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
              Unified Inbox
            </h1>
            
            <p className="text-2xl mb-4 text-gray-700">
              Manage all customer and campaign conversations in one place
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Messages from Email, WhatsApp, Instagram, Facebook, Webchat, Phone, and SMS — all visible in a single inbox.
            </p>

            {/* Gradient accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 w-32 mx-auto mt-8 rounded-full bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#F2994A]"
            />
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Core Visual — One Inbox, All Channels */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Realistic Inbox UI Preview */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
                {/* Left Sidebar: Conversation List */}
                <div className="border-r border-gray-200 bg-gray-50/50">
                  {/* Inbox Header */}
                  <div className="p-4 border-b border-gray-200 bg-white">
                    <h3 className="text-sm uppercase tracking-wide text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      All Conversations
                    </h3>
                  </div>

                  {/* Conversation Items */}
                  <div className="divide-y divide-gray-100">
                    {[
                      { 
                        name: 'Sarah Chen', 
                        preview: 'Do you have availability tomorrow?', 
                        channel: whatsappIcon, 
                        time: '2m ago', 
                        unread: true,
                        isImage: true
                      },
                      { 
                        name: 'Campaign: Spring Sale', 
                        preview: '12 responses received', 
                        channel: gmailIcon, 
                        time: '15m ago', 
                        unread: false,
                        isImage: true
                      },
                      { 
                        name: 'Alex Rodriguez', 
                        preview: 'Thanks for the quick response!', 
                        channel: messengerIcon, 
                        time: '1h ago', 
                        unread: false,
                        isImage: true
                      },
                      { 
                        name: 'Emma Thompson', 
                        preview: 'Can I reschedule my appointment?', 
                        channel: Phone, 
                        time: '2h ago', 
                        unread: true,
                        isImage: false
                      },
                      { 
                        name: 'Michael Brown', 
                        preview: 'Received confirmation, thank you', 
                        channel: MessageCircle, 
                        time: '3h ago', 
                        unread: false,
                        isImage: false
                      }
                    ].map((conversation, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        className={`p-4 cursor-pointer hover:bg-white transition-colors ${
                          idx === 0 ? 'bg-blue-50/50 border-l-2 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Channel Icon Badge */}
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                            {conversation.isImage ? (
                              <img src={conversation.channel as string} alt="channel" className="w-5 h-5" />
                            ) : (
                              <conversation.channel className="w-5 h-5 text-gray-600" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className={`text-sm truncate ${conversation.unread ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                                {conversation.name}
                              </span>
                              <span className="text-xs text-gray-500 flex-shrink-0">{conversation.time}</span>
                            </div>
                            <p className={`text-xs truncate ${conversation.unread ? 'text-gray-700' : 'text-gray-500'}`}>
                              {conversation.preview}
                            </p>
                          </div>

                          {conversation.unread && (
                            <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Main Panel: Active Conversation */}
                <div className="bg-white">
                  {/* Conversation Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="p-4 border-b border-gray-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                        SC
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Sarah Chen
                          </span>
                          <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-gray-500">Active now</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                        Handled by Agent
                      </span>
                    </div>
                  </motion.div>

                  {/* Messages */}
                  <div className="p-6 space-y-4 min-h-[400px] bg-gray-50/30">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs flex-shrink-0">
                        SC
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-md border border-gray-100">
                        <p className="text-sm text-gray-700">
                          Hi! Do you have availability tomorrow afternoon?
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">10:32 AM</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="flex gap-3 justify-end"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl rounded-tr-none p-3 shadow-sm max-w-md">
                        <p className="text-sm">
                          Yes! I have slots available at 2 PM and 4 PM tomorrow. Which works better for you?
                        </p>
                        <div className="flex items-center gap-1.5 justify-end mt-1">
                          <Bot className="w-3 h-3" />
                          <span className="text-xs opacity-90">AI Agent • 10:32 AM</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs flex-shrink-0">
                        SC
                      </div>
                      <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-md border border-gray-100">
                        <p className="text-sm text-gray-700">
                          2 PM would be perfect! Should I come to the same location?
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">10:33 AM</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      className="flex gap-3 justify-end"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl rounded-tr-none p-3 shadow-sm max-w-md">
                        <p className="text-sm">
                          Great! Yes, same location at 123 Main Street. You're booked for tomorrow at 2 PM. I'll send a confirmation to your email.
                        </p>
                        <div className="flex items-center gap-1.5 justify-end mt-1">
                          <Bot className="w-3 h-3" />
                          <span className="text-xs opacity-90">AI Agent • 10:33 AM</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center text-lg text-gray-600 mt-8"
            >
              No more switching tools or tabs. Every conversation lives in one view.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ What Comes Into the Inbox */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Everything flows into one inbox
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {inboxItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-lg text-gray-600"
          >
            If a customer interacts with your business, it appears here.
          </motion.p>
        </div>
      </section>

      {/* 4️⃣ AI + Human Collaboration */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              AI handles the work. Humans step in when needed.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Agents respond instantly. Your team can review, step in, or take over anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: AI Agent Responding */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    AI Agent Active
                  </h3>
                  <span className="text-sm text-gray-600">Responding automatically</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <p className="text-sm text-gray-600 mb-2">Customer: "What are your hours?"</p>
                  <p className="text-sm text-gray-900">Agent: "We're open Mon-Fri 9 AM - 6 PM, Sat 10 AM - 4 PM."</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 rounded-lg p-3">
                  <Check className="w-4 h-4" />
                  <span>Handled by Agent</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Human Takeover */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Human Control
                  </h3>
                  <span className="text-sm text-gray-600">Take over anytime</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-lg border border-gray-300 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <UserCircle className="w-5 h-5" />
                  <span className="text-sm">Assign to team member</span>
                </button>

                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">Take over conversation</span>
                </button>

                <button className="w-full bg-white hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-lg border border-gray-300 transition-colors flex items-center justify-center gap-2 shadow-sm">
                  <Eye className="w-5 h-5" />
                  <span className="text-sm">Monitor only</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Conversation Controls */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Stay in control of every conversation
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="space-y-4">
              {controls.map((control, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700">{control}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Campaign & Scheduling Visibility */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Campaigns and scheduling — visible, not hidden
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Campaign responses, booking confirmations, and follow-ups all appear alongside customer messages — so nothing gets missed.
            </p>
          </motion.div>

          {/* Visual: Inbox showing different message types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="text-sm uppercase tracking-wide text-gray-500" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Recent Activity
              </h3>
            </div>

            <div className="divide-y divide-gray-100">
              {[
                {
                  type: 'Campaign Response',
                  name: 'Summer Sale Email',
                  detail: '23 opened, 8 clicked, 3 replied',
                  icon: Mail,
                  color: 'blue',
                  time: '10m ago'
                },
                {
                  type: 'Booking Confirmed',
                  name: 'David Martinez',
                  detail: 'Appointment scheduled for tomorrow at 3 PM',
                  icon: Clock,
                  color: 'green',
                  time: '25m ago'
                },
                {
                  type: 'Customer Message',
                  name: 'Lisa Park',
                  detail: 'Question about product availability',
                  icon: MessageCircle,
                  color: 'purple',
                  time: '1h ago'
                },
                {
                  type: 'Follow-up Sent',
                  name: 'Order #4521',
                  detail: 'Confirmation sent via WhatsApp',
                  icon: Zap,
                  color: 'orange',
                  time: '2h ago'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className={`text-xs uppercase tracking-wide text-${item.color}-600`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-900 mb-1">{item.name}</p>
                      <p className="text-xs text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7️⃣ Multi-Channel Context */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Context follows the conversation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              If a customer starts on Instagram and continues on WhatsApp or Email, the full context stays connected.
            </p>
          </motion.div>

          {/* Visual: Same conversation across channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="space-y-6">
              {/* Instagram message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100"
              >
                <img src={messengerIcon} alt="Instagram" className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Instagram DM</span>
                    <span className="text-xs text-gray-500">Yesterday, 4:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Hi! I saw your post about the new collection. Is it available in blue?"
                  </p>
                </div>
              </motion.div>

              {/* Channel switch indicator */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <div className="h-px bg-gray-200 flex-1" />
                <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">Customer switched to WhatsApp</span>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              {/* WhatsApp message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>WhatsApp</span>
                    <span className="text-xs text-gray-500">Today, 9:15 AM</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    "Also, do you offer shipping to Canada?"
                  </p>
                </div>
              </motion.div>

              {/* Context preserved note */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100"
              >
                <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Full context preserved:</strong> Agent knows this customer asked about blue color availability on Instagram
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ Scale & Reliability Strip */}
      <section className="py-16 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 via-purple-50 to-orange-50 rounded-2xl p-8 border border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {scaleFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ Subtle Bottom Nudge */}
      <section className="py-16 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-end gap-4"
          >
            <Link 
              to="/product/channels"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              Explore Channels
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/product/agents"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              See AI Agents
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
