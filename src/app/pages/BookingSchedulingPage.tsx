import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Calendar,
  Clock,
  CheckCircle,
  X,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageSquare,
  Bell,
  Users,
  Settings,
  Activity,
  ArrowRight,
  Workflow,
  Bot,
  Network,
  Sparkles,
  Heart,
  Scissors,
  GraduationCap,
  Wrench,
  Store
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function BookingSchedulingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeReminder, setActiveReminder] = useState(0);

  // Booking flow animation
  const bookingSteps = [
    { label: 'Customer starts conversation', icon: MessageCircle },
    { label: 'Selects service & time', icon: Calendar },
    { label: 'Gets confirmation', icon: CheckCircle },
    { label: 'Receives reminder', icon: Bell }
  ];

  // Reminder timeline animation
  const reminderSteps = [
    { label: 'Booking confirmed', time: 'Day 1', color: 'blue' },
    { label: 'Reminder sent', time: '24h before', color: 'purple' },
    { label: 'Follow-up sent', time: 'After visit', color: 'green' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % bookingSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReminder((prev) => (prev + 1) % reminderSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Opening Context (Problem → Relief) */}
      <section className="pt-20 pb-20">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Solution
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Booking & Scheduling, Without the Back-and-Forth
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Let customers book, reschedule, and get reminders automatically — across chat, calls, and messages.
              </p>

              <Link to="/templates#booking">
                <Button 
                  size="lg"
                  className="shadow-lg text-base px-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Booking Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: Visual - Full Booking Loop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-xl">
                <div className="space-y-4">
                  {[
                    { 
                      icon: MessageCircle, 
                      label: 'Customer booking via WhatsApp', 
                      sublabel: 'Hi, I need a haircut tomorrow',
                      color: 'green',
                      time: '10:00 AM'
                    },
                    { 
                      icon: Calendar, 
                      label: 'Slot confirmation', 
                      sublabel: 'Tomorrow at 2:00 PM confirmed',
                      color: 'blue',
                      time: '10:01 AM'
                    },
                    { 
                      icon: Bell, 
                      label: 'Reminder sent', 
                      sublabel: 'Your appointment is tomorrow at 2 PM',
                      color: 'purple',
                      time: 'Next day 10:00 AM'
                    },
                    { 
                      icon: CheckCircle, 
                      label: 'Appointment completed', 
                      sublabel: 'Thank you! Hope to see you again',
                      color: 'green',
                      time: '2:30 PM'
                    }
                  ].map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                      className={`bg-white rounded-xl p-4 border-2 ${
                        idx === activeStep ? `border-${step.color}-400 shadow-md` : 'border-gray-200'
                      } transition-all duration-300`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-${step.color}-100 flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-5 h-5 text-${step.color}-600`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                              {step.label}
                            </h4>
                            <span className="text-xs text-gray-500 flex-shrink-0">{step.time}</span>
                          </div>
                          <p className="text-xs text-gray-600">{step.sublabel}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ What This Solves (Pain-Led) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Why businesses struggle with scheduling
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: 'Missed calls',
                solution: '24/7 booking',
                icon: Phone,
                color: 'red'
              },
              {
                problem: 'Double bookings',
                solution: 'Real-time availability',
                icon: Calendar,
                color: 'orange'
              },
              {
                problem: 'No-shows',
                solution: 'Automated reminders',
                icon: Bell,
                color: 'purple'
              },
              {
                problem: 'Manual follow-ups',
                solution: 'Auto confirmations',
                icon: CheckCircle,
                color: 'green'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  {/* Problem */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm text-gray-600">{item.problem}</span>
                  </div>

                  {/* Solution */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <span className="text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.solution}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ The Booking Experience (Customer POV) */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How customers book with you
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {bookingSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <motion.div 
                      className={`w-20 h-20 rounded-2xl ${
                        activeStep === idx 
                          ? 'bg-gradient-to-br from-blue-600 to-purple-600' 
                          : 'bg-white'
                      } flex items-center justify-center shadow-lg mb-4 transition-all duration-300`}
                      animate={{
                        scale: activeStep === idx ? [1, 1.1, 1] : 1
                      }}
                      transition={{
                        duration: 0.5
                      }}
                    >
                      <step.icon className={`w-10 h-10 ${
                        activeStep === idx ? 'text-white' : 'text-blue-600'
                      }`} />
                    </motion.div>
                    <span className="text-sm text-gray-700 max-w-[140px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.label}
                    </span>
                    
                    {idx < bookingSteps.length - 1 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute" style={{ left: 'calc(100% + 0.75rem)', top: '35px' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ What Businesses Control (Owner POV) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              What you control behind the scenes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, label: 'Working hours & holidays', color: 'blue' },
                { icon: Settings, label: 'Services & durations', color: 'purple' },
                { icon: Users, label: 'Staff availability', color: 'green' },
                { icon: Calendar, label: 'Buffer times', color: 'orange' },
                { icon: Activity, label: 'Reschedule & cancellation rules', color: 'red' }
              ].map((control, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow text-center">
                    <div className={`w-12 h-12 rounded-xl bg-${control.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <control.icon className={`w-6 h-6 text-${control.color}-600`} />
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {control.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Set it once. The system handles the rest.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Channels That Support Booking */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Booking across every channel
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: MessageCircle,
                name: 'WhatsApp',
                description: 'Most popular for SMB bookings',
                color: 'green',
                popular: true
              },
              {
                icon: Phone,
                name: 'Phone (Voice)',
                description: 'Call-based scheduling',
                color: 'blue'
              },
              {
                icon: MessageSquare,
                name: 'Webchat',
                description: 'Website bookings',
                color: 'purple'
              },
              {
                icon: Instagram,
                name: 'Instagram & Facebook',
                description: 'DM bookings',
                color: 'pink'
              },
              {
                icon: Mail,
                name: 'Email',
                description: 'Confirmation & reminders',
                color: 'red'
              },
              {
                icon: MessageSquare,
                name: 'SMS',
                description: 'Short reminders',
                color: 'orange'
              }
            ].map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className={`relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border ${
                  channel.popular ? 'border-green-300 shadow-lg' : 'border-gray-200'
                } hover:shadow-md transition-all h-full`}>
                  {channel.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500 text-white text-xs" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Popular
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-xl bg-${channel.color}-100 flex items-center justify-center mb-4`}>
                    <channel.icon className={`w-6 h-6 text-${channel.color}-600`} />
                  </div>
                  
                  <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {channel.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {channel.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Customers book where they're comfortable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Automated Reminders & Follow-Ups */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Reduce no-shows automatically
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
              {/* Timeline */}
              <div className="relative">
                {reminderSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative flex items-center gap-6 mb-12 last:mb-0"
                  >
                    {/* Timeline Line */}
                    {idx < reminderSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200" />
                    )}

                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-12 h-12 rounded-full ${
                        activeReminder === idx 
                          ? `bg-gradient-to-br from-${step.color}-500 to-${step.color}-600` 
                          : 'bg-gray-200'
                      } flex items-center justify-center shadow-lg flex-shrink-0 z-10 transition-all duration-300`}
                      animate={{
                        scale: activeReminder === idx ? [1, 1.15, 1] : 1
                      }}
                      transition={{
                        duration: 0.6
                      }}
                    >
                      {activeReminder === idx && (
                        <div className="w-3 h-3 rounded-full bg-white" />
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {step.label}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fewer missed appointments. Happier customers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Who This Is Perfect For */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Built for appointment-driven businesses
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Heart, label: 'Clinics & Healthcare', color: 'red' },
              { icon: Scissors, label: 'Salons & Beauty Studios', color: 'pink' },
              { icon: GraduationCap, label: 'Coaching & Training', color: 'blue' },
              { icon: Wrench, label: 'Repair & Home Services', color: 'orange' },
              { icon: Store, label: 'Local Businesses', color: 'green' }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all h-full text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-${industry.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`w-8 h-8 text-${industry.color}-600`} />
                  </div>
                  
                  <h3 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {industry.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Powered by SMB Flow (Platform Tie-In) */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Booking & scheduling runs on:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="text-sm">AI Agents</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Workflow className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Flow Builder</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="text-sm">Channels</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Network className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Integrations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ Soft CTA */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-12 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Let bookings run on autopilot
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/templates#booking">
                <Button 
                  size="lg"
                  className="text-base px-10 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Booking Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/templates#booking">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-10 border-2 border-gray-300 rounded-full hover:bg-gray-50"
                >
                  See Booking Templates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}