import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  Sparkles,
  Phone,
  MessageCircle,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Clock,
  Bot,
  Inbox,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle,
  Bell,
  Repeat,
  TrendingUp,
  Megaphone,
  Star,
  Scissors,
  Heart,
  UserCheck,
  Send,
  XCircle,
  Gift,
  Award,
  Home,
  Building2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function SalonsPage() {
  const [activeMessage, setActiveMessage] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);
  const [bookingStep, setBookingStep] = useState(0);
  const [reminderStep, setReminderStep] = useState(0);
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  // Hero booking messages
  const bookingMessages = [
    {
      channel: "WhatsApp",
      icon: MessageCircle,
      color: "#25D366",
      text: "Facial tomorrow?",
    },
    {
      channel: "Instagram",
      icon: Instagram,
      color: "#E1306C",
      text: "Haircut booking",
    },
    {
      channel: "Call",
      icon: Phone,
      color: "#9B51E0",
      text: "Spa session",
    },
    {
      channel: "Web",
      icon: Globe,
      color: "#2F80ED",
      text: "Book bridal",
    },
    {
      channel: "DM",
      icon: MessageSquare,
      color: "#F2994A",
      text: "Manicure slot?",
    },
  ];

  // Problem tiles
  const problems = [
    {
      icon: MessageCircle,
      title: "Too many DMs",
      problem: "❌",
      solution: "✓ AI replies instantly",
      color: "#E1306C",
    },
    {
      icon: Calendar,
      title: "Missed appointments",
      problem: "❌",
      solution: "✓ Automated reminders",
      color: "#9B51E0",
    },
    {
      icon: Clock,
      title: "Constant rescheduling",
      problem: "❌",
      solution: "✓ Smart slot updates",
      color: "#2F80ED",
    },
    {
      icon: Bell,
      title: "Manual follow-ups",
      problem: "❌",
      solution: "✓ Automatic confirmations",
      color: "#F2994A",
    },
  ];

  // Services
  const services = [
    { name: "Haircut", duration: "45 min", color: "#9B51E0" },
    { name: "Facial", duration: "60 min", color: "#E1306C" },
    {
      name: "Spa session",
      duration: "90 min",
      color: "#2F80ED",
    },
    { name: "Manicure", duration: "30 min", color: "#F2994A" },
  ];

  // Reminder timeline
  const reminderSteps = [
    {
      label: "Booking confirmed",
      icon: CheckCircle,
      time: "Instant",
    },
    { label: "Reminder sent", icon: Bell, time: "24h before" },
    {
      label: "Follow-up after service",
      icon: Star,
      time: "2 days after",
    },
  ];

  // Campaigns
  const campaigns = [
    {
      title: "Festival Offers",
      icon: Gift,
      gradient: "from-pink-400 to-purple-500",
    },
    {
      title: "Monthly Spa Packages",
      icon: Sparkles,
      gradient: "from-purple-400 to-blue-500",
    },
    {
      title: "Feedback & Reviews",
      icon: Star,
      gradient: "from-blue-400 to-pink-500",
    },
  ];

  // Channels
  const channels = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      color: "#25D366",
      primary: true,
    },
    {
      icon: Instagram,
      name: "Instagram DMs",
      color: "#E1306C",
    },
    { icon: Phone, name: "Phone", color: "#9B51E0" },
    { icon: Globe, name: "Webchat", color: "#2F80ED" },
    { icon: MessageSquare, name: "SMS", color: "#F2994A" },
    { icon: Mail, name: "Email", color: "#EB5757" },
  ];

  // Animations - slower timing for spa-like calm
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setActiveMessage(
        (prev) => (prev + 1) % bookingMessages.length,
      );
    }, 2000); // slower than restaurant
    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    const problemInterval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 3500); // slower fade
    return () => clearInterval(problemInterval);
  }, []);

  useEffect(() => {
    const bookingInterval = setInterval(() => {
      setBookingStep((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(bookingInterval);
  }, []);

  useEffect(() => {
    const reminderInterval = setInterval(() => {
      setReminderStep(
        (prev) => (prev + 1) % reminderSteps.length,
      );
    }, 3000);
    return () => clearInterval(reminderInterval);
  }, []);

  useEffect(() => {
    const campaignInterval = setInterval(() => {
      setActiveCampaign(
        (prev) => (prev + 1) % campaigns.length,
      );
    }, 3500);
    return () => clearInterval(campaignInterval);
  }, []);

  useEffect(() => {
    const channelInterval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % channels.length);
    }, 2200);
    return () => clearInterval(channelInterval);
  }, []);

  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero: Calm Business, Booked Schedule */}
      <section className="pt-20 pb-24 overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
              {/* Left: Elegant Copy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span
                    className="text-sm text-purple-700"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Built for Salons & Spas
                  </span>
                </div>

                <h1
                  className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Designed for Salons That Stay Fully Booked
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Appointments, reminders, and client
                  conversations — handled automatically, across
                  every channel.
                </p>

                <Link to="/templates#salons">
                  <Button
                    size="lg"
                    className="shadow-lg text-base px-8 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #9B51E0 0%, #E1306C 50%, #2F80ED 100%)",
                    }}
                  >
                    Explore Salon Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right: Animated Booking Flow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.2,
                }}
                className="relative"
              >
                <div className="relative h-[400px]">
                  {/* Incoming Messages - Left */}
                  <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center gap-3 pr-4">
                    <AnimatePresence mode="popLayout">
                      {bookingMessages.map((msg, idx) => (
                        <motion.div
                          key={`${msg.channel}-${idx}`}
                          initial={{
                            opacity: 0,
                            x: -30,
                            scale: 0.9,
                          }}
                          animate={{
                            opacity:
                              activeMessage === idx ? 1 : 0.25,
                            x: activeMessage === idx ? 0 : -10,
                            scale:
                              activeMessage === idx ? 1 : 0.95,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="flex items-center gap-3 p-3 bg-white rounded-xl border-2 shadow-sm"
                          style={{
                            borderColor:
                              activeMessage === idx
                                ? msg.color
                                : "#E5E7EB",
                          }}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${msg.color}20`,
                            }}
                          >
                            <msg.icon
                              className="w-4 h-4"
                              style={{ color: msg.color }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs text-gray-500">
                              {msg.channel}
                            </div>
                            <div className="text-sm truncate">
                              {msg.text}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Center Flow Arrow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{
                        x: [0, 8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight
                        className="w-12 h-12 text-white drop-shadow-lg"
                        style={{
                          filter:
                            "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Booked Schedule - Right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 pl-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.01, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-300 shadow-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div
                            className="text-sm font-semibold"
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                            }}
                          >
                            Fully Booked
                          </div>
                          <div className="text-xs text-gray-600">
                            All appointments confirmed
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          "Bookings",
                          "Reminders",
                          "Follow-ups",
                          "Reviews",
                        ].map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: idx * 0.15,
                              duration: 0.6,
                            }}
                            className="flex items-center gap-2 p-2 bg-white/60 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm">
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Everyday Salon Struggles (Visual Pain → Relief) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 h-full shadow-sm">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${problem.color}15`,
                      }}
                    >
                      <problem.icon
                        className="w-6 h-6"
                        style={{ color: problem.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="text-lg mb-4"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
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
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          className="flex items-center gap-2 p-3 rounded-xl"
                          style={{
                            backgroundColor: `${problem.color}10`,
                          }}
                        >
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: problem.color }}
                          />
                          <span
                            className="text-sm"
                            style={{ color: problem.color }}
                          >
                            {problem.solution.replace("✓ ", "")}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="problem"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            duration: 0.5,
                            ease: "easeOut",
                          }}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200"
                        >
                          <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-500">
                            Unhandled
                          </span>
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

      {/* 3️⃣ Appointment Booking That Just Works */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Effortless Appointment Booking
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Animated Appointment Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-purple-200">
                    <Calendar className="w-6 h-6 text-purple-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      Today's Bookings
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0.4 }}
                        animate={{
                          opacity:
                            idx === bookingStep ? 1 : 0.4,
                        }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <motion.div
                          animate={{
                            scale:
                              idx === bookingStep
                                ? [1, 1.02, 1]
                                : 1,
                          }}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 shadow-sm"
                          style={{
                            borderColor:
                              idx === bookingStep
                                ? service.color
                                : "#E5E7EB",
                          }}
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${service.color}20`,
                            }}
                          >
                            <Scissors
                              className="w-6 h-6"
                              style={{ color: service.color }}
                            />
                          </div>

                          <div className="flex-1">
                            <div
                              className="text-base mb-1"
                              style={{
                                fontFamily:
                                  "DM Sans, sans-serif",
                              }}
                            >
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {service.duration}
                            </div>
                          </div>

                          {idx === bookingStep && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.4 }}
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{
                                backgroundColor: `${service.color}20`,
                              }}
                            >
                              <CheckCircle
                                className="w-5 h-5"
                                style={{ color: service.color }}
                              />
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Clean Bullet Points */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  {[
                    "Clients book via WhatsApp, Instagram, Web, or Call",
                    "Services & time slots selected",
                    "Confirmation sent instantly",
                    "Reminder before the visit",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.15,
                        duration: 0.6,
                      }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Smart Reminders That Reduce No-Shows */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Fewer No-Shows, Happier Days
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Timeline Animation */}
              <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg mb-12">
                <div className="grid md:grid-cols-3 gap-8">
                  {reminderSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.2,
                        duration: 0.8,
                      }}
                      className="text-center relative"
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg"
                        style={{
                          background:
                            reminderStep >= idx
                              ? "linear-gradient(135deg, #9B51E0 0%, #E1306C 100%)"
                              : "#F3F4F6",
                        }}
                        animate={{
                          scale:
                            reminderStep === idx
                              ? [1, 1.08, 1]
                              : 1,
                        }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        <step.icon
                          className="w-8 h-8"
                          style={{
                            color:
                              reminderStep >= idx
                                ? "white"
                                : "#9CA3AF",
                          }}
                        />
                      </motion.div>

                      {/* Label */}
                      <div
                        className="text-sm mb-2"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {step.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {step.time}
                      </div>

                      {/* Arrow */}
                      {idx < reminderSteps.length - 1 && (
                        <ArrowRight
                          className="hidden md:block w-5 h-5 absolute"
                          style={{
                            right: "-2rem",
                            top: "26px",
                            color:
                              reminderStep > idx
                                ? "#9B51E0"
                                : "#D1D5DB",
                          }}
                        />
                      )}

                      {/* Checkmark */}
                      {reminderStep > idx && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Line */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <p
                  className="text-2xl text-gray-900"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Clients show up. Your schedule stays full.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Client Conversations, Handled Automatically */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Always-On Client Support
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Client Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-gray-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      Client side
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        text: "Is a facial available today?",
                        time: "10:15",
                      },
                      {
                        text: "What services do you offer?",
                        time: "10:16",
                      },
                      {
                        text: "Can I reschedule?",
                        time: "10:18",
                      },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.4,
                          duration: 0.6,
                        }}
                        className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                      >
                        <div className="text-sm text-gray-900">
                          {msg.text}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {msg.time}
                        </div>
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
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Bot className="w-6 h-6 text-purple-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      System side
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        text: "Yes! We have a 2pm slot available",
                        instant: true,
                      },
                      {
                        text: "Here's our service menu: [link]",
                        instant: true,
                      },
                      {
                        text: "Rescheduled to Friday 3pm ✓",
                        instant: false,
                      },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.4 + 0.3,
                          duration: 0.6,
                        }}
                        className="bg-white p-4 rounded-xl border border-purple-200 shadow-sm"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">
                              {msg.text}
                            </div>
                            {msg.instant && (
                              <div className="text-xs text-purple-600 mt-1">
                                Instant reply
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-3 bg-white/50 rounded-lg border border-purple-200">
                    <div className="text-xs text-gray-600">
                      Escalation only when needed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Bring Clients Back Automatically */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Automated Client Engagement
              </h2>
            </motion.div>

            {/* Campaign Cards with Smooth Scroll */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 pb-8">
                {campaigns.map((campaign, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: idx * 0.25,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.03 }}
                    className="flex-shrink-0 w-80"
                  >
                    <div
                      className="rounded-2xl p-8 border-2 border-white/50 shadow-lg relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${campaign.gradient} opacity-90`}
                      />

                      <div className="relative z-10">
                        <campaign.icon className="w-12 h-12 text-white mb-4" />
                        <h3
                          className="text-2xl text-white mb-4"
                          style={{
                            fontFamily: "DM Sans, sans-serif",
                          }}
                        >
                          {campaign.title}
                        </h3>

                        {/* Flow Animation */}
                        <motion.div
                          animate={{
                            opacity:
                              activeCampaign === idx
                                ? [0.6, 1, 0.6]
                                : 0.6,
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="space-y-3 mt-6"
                        >
                          <div className="flex items-center gap-3 text-white/95 text-sm">
                            <Send className="w-4 h-4" />
                            <span>Message sent</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/95 text-sm">
                            <MessageCircle className="w-4 h-4" />
                            <span>Client responds</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/95 text-sm">
                            <Repeat className="w-4 h-4" />
                            <span>Repeat booking</span>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Channels Your Clients Already Use */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Every Channel, One System
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                Clients book where they feel comfortable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {channels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.12,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  <div
                    className="bg-white rounded-2xl p-6 border-2 transition-all duration-500 text-center cursor-pointer"
                    style={{
                      borderColor:
                        activeChannel === idx
                          ? channel.color
                          : "#E5E7EB",
                      boxShadow:
                        activeChannel === idx
                          ? `0 0 24px ${channel.color}30`
                          : "none",
                    }}
                  >
                    {channel.primary && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Primary
                      </div>
                    )}

                    <motion.div
                      animate={{
                        scale:
                          activeChannel === idx
                            ? [1, 1.15, 1]
                            : 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                      className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{
                        backgroundColor: `${channel.color}20`,
                      }}
                    >
                      <channel.icon
                        className="w-6 h-6"
                        style={{ color: channel.color }}
                      />
                    </motion.div>

                    <div
                      className="text-sm"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {channel.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Consolidation Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border-2 border-purple-200">
                <Inbox className="w-6 h-6 text-purple-600" />
                <span
                  className="text-lg"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  All channels feed into one unified inbox
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Perfect for Every Salon & Spa Type */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Built for Every Salon Format
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: Scissors,
                  label: "Hair Salons",
                  gradient: "from-purple-400 to-pink-500",
                },
                {
                  icon: Sparkles,
                  label: "Beauty & Skincare Studios",
                  gradient: "from-pink-400 to-red-400",
                },
                {
                  icon: Heart,
                  label: "Spas & Wellness Centers",
                  gradient: "from-blue-400 to-purple-500",
                },
                {
                  icon: Award,
                  label: "Bridal & Makeover Studios",
                  gradient: "from-purple-400 to-blue-500",
                },
                {
                  icon: Building2,
                  label: "Multi-branch Salons",
                  gradient: "from-pink-400 to-purple-500",
                },
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.12,
                    duration: 0.8,
                  }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-90`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 8 }}
                        transition={{ duration: 0.4 }}
                      >
                        <type.icon className="w-16 h-16 text-white mb-4" />
                      </motion.div>
                      <h3
                        className="text-lg text-white"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {type.label}
                      </h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Built on SMB Flow (Confidence Section) */}

      {/* 🔟 Closing CTA (Elegant, Not Pushy) */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-4xl lg:text-5xl mb-12 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Let Your Salon Run Smoothly, Even When You're
                Busy
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/templates#salons">
                  <Button
                    size="lg"
                    className="shadow-lg text-base px-10 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #9B51E0 0%, #E1306C 50%, #2F80ED 100%)",
                    }}
                  >
                    Explore Salon Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/templates#salons">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-10 border-2 border-purple-300 rounded-full hover:bg-white bg-white/80"
                  >
                    See Salon Templates
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