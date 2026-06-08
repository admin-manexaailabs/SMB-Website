import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  UtensilsCrossed,
  Phone,
  MessageCircle,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Calendar,
  ShoppingCart,
  Users,
  Clock,
  Bot,
  Inbox,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle,
  MapPin,
  Bell,
  Repeat,
  TrendingUp,
  Megaphone,
  Star,
  ChefHat,
  Coffee,
  Store,
  Building2,
  Package,
  Send,
  Zap,
  AlertCircle,
  XCircle,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function RestaurantsPage() {
  const [activeMessage, setActiveMessage] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);
  const [orderStep, setOrderStep] = useState(0);
  const [reservationStep, setReservationStep] = useState(0);
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  // Hero chaos messages
  const chaosMessages = [
    {
      channel: "WhatsApp",
      icon: MessageCircle,
      color: "#25D366",
      text: "Table for 4?",
    },
    {
      channel: "Call",
      icon: Phone,
      color: "#2F80ED",
      text: "Order status?",
    },
    {
      channel: "Instagram",
      icon: Instagram,
      color: "#E1306C",
      text: "Menu please",
    },
    {
      channel: "SMS",
      icon: MessageSquare,
      color: "#F2994A",
      text: "Cancel booking",
    },
    {
      channel: "Web",
      icon: Globe,
      color: "#9B51E0",
      text: "Are you open?",
    },
  ];

  // Problem tiles
  const problems = [
    {
      icon: Phone,
      title: "Phones Ringing Nonstop",
      problem: "❌",
      solution: "✓ AI answers instantly",
      color: "#EB5757",
    },
    {
      icon: Package,
      title: '"Where is my order?"',
      problem: "❌",
      solution: "✓ Auto order updates sent",
      color: "#2F80ED",
    },
    {
      icon: Calendar,
      title: "Missed Reservations",
      problem: "❌",
      solution: "✓ Smart booking + reminders",
      color: "#9B51E0",
    },
    {
      icon: Bot,
      title: "Staff Overloaded",
      problem: "❌",
      solution: "✓ AI handles conversations",
      color: "#F2C94C",
    },
  ];

  // Order lifecycle steps
  const orderSteps = [
    {
      label: "Order placed",
      status: "Received",
      color: "#2F80ED",
    },
    {
      label: "Confirmed",
      status: "Preparing",
      color: "#9B51E0",
    },
    {
      label: "In kitchen",
      status: "Cooking",
      color: "#F2994A",
    },
    {
      label: "Out for delivery",
      status: "On the way",
      color: "#F2C94C",
    },
    {
      label: "Delivered",
      status: "Complete",
      color: "#27AE60",
    },
  ];

  // Reservation flow
  const reservationSteps = [
    {
      label: "Customer books",
      icon: MessageCircle,
      time: "0s",
    },
    {
      label: "Availability checked",
      icon: Calendar,
      time: "1s",
    },
    {
      label: "Confirmation sent",
      icon: CheckCircle,
      time: "2s",
    },
    {
      label: "Reminder triggered",
      icon: Bell,
      time: "24h before",
    },
  ];

  // Campaigns
  const campaigns = [
    {
      title: "Weekend Offers",
      icon: TrendingUp,
      gradient: "from-orange-400 to-red-500",
    },
    {
      title: "Festival Specials",
      icon: Sparkles,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Feedback Requests",
      icon: Star,
      gradient: "from-yellow-400 to-orange-500",
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
    { icon: Phone, name: "Phone", color: "#2F80ED" },
    { icon: Globe, name: "Webchat", color: "#9B51E0" },
    {
      icon: Instagram,
      name: "Instagram & Facebook",
      color: "#E1306C",
    },
    { icon: MessageSquare, name: "SMS", color: "#F2994A" },
    { icon: Mail, name: "Email", color: "#EB5757" },
  ];

  // Animations
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setActiveMessage(
        (prev) => (prev + 1) % chaosMessages.length,
      );
    }, 1500);
    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    const problemInterval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 3000);
    return () => clearInterval(problemInterval);
  }, []);

  useEffect(() => {
    const orderInterval = setInterval(() => {
      setOrderStep((prev) => (prev + 1) % orderSteps.length);
    }, 2000);
    return () => clearInterval(orderInterval);
  }, []);

  useEffect(() => {
    const reservationInterval = setInterval(() => {
      setReservationStep(
        (prev) => (prev + 1) % reservationSteps.length,
      );
    }, 2500);
    return () => clearInterval(reservationInterval);
  }, []);

  useEffect(() => {
    const campaignInterval = setInterval(() => {
      setActiveCampaign(
        (prev) => (prev + 1) % campaigns.length,
      );
    }, 3000);
    return () => clearInterval(campaignInterval);
  }, []);

  useEffect(() => {
    const channelInterval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % channels.length);
    }, 1800);
    return () => clearInterval(channelInterval);
  }, []);

  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero: Chaos → Control */}
      <section className="pt-6 pb-12 overflow-hidden">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-start pt-8">
              {/* Left: Bold Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-full mb-6">
                  <UtensilsCrossed className="w-4 h-4 text-orange-600" />
                  <span
                    className="text-sm text-orange-700"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Built for Restaurants
                  </span>
                </div>

                <h1
                  className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Built for Restaurants That Never Stop Moving
                </h1>

                <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                  Orders, reservations, customer questions —
                  handled automatically, even during peak hours.
                </p>

                <Link to="/templates#restaurants">
                  <Button
                    size="lg"
                    className="shadow-lg text-base px-8 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #F2994A 0%, #EB5757 50%, #F2C94C 100%)",
                    }}
                  >
                    Explore Restaurant Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right: Animated Restaurant Scene */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative h-[400px]">
                  {/* Chaos Side - Left */}
                  <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center gap-3 pr-4">
                    <AnimatePresence mode="popLayout">
                      {chaosMessages.map((msg, idx) => (
                        <motion.div
                          key={`${msg.channel}-${idx}`}
                          initial={{
                            opacity: 0,
                            x: -30,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity:
                              activeMessage === idx ? 1 : 0.3,
                            x: activeMessage === idx ? 0 : -10,
                            scale:
                              activeMessage === idx ? 1 : 0.9,
                          }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border-2 shadow-sm"
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
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight
                        className="w-12 h-12 text-white drop-shadow-lg"
                        style={{
                          filter:
                            "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Control Side - Right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 pl-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-300 shadow-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <Inbox className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div
                            className="text-sm font-semibold"
                            style={{
                              fontFamily: "DM Sans, sans-serif",
                            }}
                          >
                            SMB Flow
                          </div>
                          <div className="text-xs text-gray-600">
                            All handled
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          "Orders",
                          "Bookings",
                          "Support",
                          "Campaigns",
                        ].map((item, idx) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 p-2 bg-white/50 rounded-lg"
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

      {/* 2️⃣ The Real Restaurant Problem (Visual Pain Points) */}
      <section className="py-24 bg-gray-50">
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
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all h-full">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${problem.color}20`,
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
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 p-3 rounded-lg"
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
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 p-3 bg-red-50 rounded-lg"
                        >
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-red-700">
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

      {/* 3️⃣ Orders That Run Themselves */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Order Management Without Interruptions
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Animated Order Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200">
                  <div className="space-y-4">
                    {orderSteps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0.3 }}
                        animate={{
                          opacity: idx <= orderStep ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-4">
                          {/* Progress Indicator */}
                          <div className="relative">
                            <motion.div
                              className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
                              style={{
                                borderColor:
                                  idx <= orderStep
                                    ? step.color
                                    : "#E5E7EB",
                                backgroundColor:
                                  idx === orderStep
                                    ? step.color
                                    : "white",
                              }}
                              animate={{
                                scale:
                                  idx === orderStep
                                    ? [1, 1.1, 1]
                                    : 1,
                              }}
                              transition={{ duration: 0.5 }}
                            >
                              <span
                                className="text-sm font-semibold"
                                style={{
                                  color:
                                    idx === orderStep
                                      ? "white"
                                      : step.color,
                                }}
                              >
                                {idx + 1}
                              </span>
                            </motion.div>
                            {idx < orderSteps.length - 1 && (
                              <div
                                className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-4"
                                style={{
                                  backgroundColor:
                                    idx < orderStep
                                      ? step.color
                                      : "#E5E7EB",
                                }}
                              />
                            )}
                          </div>

                          {/* Step Info */}
                          <div className="flex-1">
                            <div
                              className="text-sm text-gray-900 mb-1"
                              style={{
                                fontFamily:
                                  "DM Sans, sans-serif",
                              }}
                            >
                              {step.label}
                            </div>
                            <motion.div
                              animate={{
                                opacity:
                                  idx === orderStep ? 1 : 0.5,
                              }}
                              className="inline-block px-3 py-1 rounded-full text-xs"
                              style={{
                                backgroundColor: `${step.color}20`,
                                color: step.color,
                              }}
                            >
                              {step.status}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Bullets */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  {[
                    "Accept order enquiries across channels",
                    "Auto-confirm orders",
                    "Send prep & delivery updates",
                    "Answer order status instantly",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
                    >
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* 4️⃣ Reservations That Don't Break During Rush */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Smart Table Reservations
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Calendar-style Flow */}
              <div className="bg-white rounded-2xl p-10 border-2 border-gray-200 shadow-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  {reservationSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 }}
                      className="text-center relative"
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                        style={{
                          background:
                            reservationStep >= idx
                              ? "linear-gradient(135deg, #9B51E0 0%, #2F80ED 100%)"
                              : "#F3F4F6",
                        }}
                        animate={{
                          scale:
                            reservationStep === idx
                              ? [1, 1.1, 1]
                              : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon
                          className="w-8 h-8"
                          style={{
                            color:
                              reservationStep >= idx
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
                      {idx < reservationSteps.length - 1 && (
                        <ArrowRight
                          className="hidden md:block w-5 h-5 absolute"
                          style={{
                            right: "-1.75rem",
                            top: "26px",
                            color:
                              reservationStep > idx
                                ? "#9B51E0"
                                : "#D1D5DB",
                          }}
                        />
                      )}

                      {/* Checkmark */}
                      {reservationStep > idx && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
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

      {/* 5️⃣ Customer Support That Doesn't Distract Staff */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Always-On Customer Support
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Customer Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                      Customer side
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      { text: "Are you open?", time: "14:32" },
                      { text: "Menu please", time: "14:33" },
                      { text: "Cancel order?", time: "14:34" },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.3 }}
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
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Bot className="w-6 h-6 text-green-600" />
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
                        text: "Yes! We're open 11am-10pm",
                        instant: true,
                      },
                      {
                        text: "Here's our menu: [link]",
                        instant: true,
                      },
                      {
                        text: "Cancellation processed ✓",
                        instant: false,
                      },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.3 + 0.2 }}
                        className="bg-white p-4 rounded-xl border border-green-200 shadow-sm"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">
                              {msg.text}
                            </div>
                            {msg.instant && (
                              <div className="text-xs text-green-600 mt-1">
                                Instant reply
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-3 bg-white/50 rounded-lg border border-green-200">
                    <div className="text-xs text-gray-600">
                      Escalate only when needed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Strong Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p
                className="text-2xl text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Customers get answers. Your team stays focused
                on service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Bring Customers Back Automatically */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Repeat Customers, On Autopilot
              </h2>
            </motion.div>

            {/* Campaign Cards Sliding */}
            <div className="relative overflow-hidden">
              <div className="flex gap-6 pb-8">
                {campaigns.map((campaign, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    whileHover={{ scale: 1.05 }}
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
                                ? [0.5, 1, 0.5]
                                : 0.5,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="space-y-3 mt-6"
                        >
                          <div className="flex items-center gap-3 text-white/90 text-sm">
                            <Send className="w-4 h-4" />
                            <span>Message sent</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/90 text-sm">
                            <MessageCircle className="w-4 h-4" />
                            <span>Customer responds</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/90 text-sm">
                            <Repeat className="w-4 h-4" />
                            <span>Repeat visit</span>
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

      {/* 7️⃣ Channels Restaurants Actually Use */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Every Channel, One System
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {channels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div
                    className="bg-white rounded-2xl p-6 border-2 transition-all text-center cursor-pointer"
                    style={{
                      borderColor:
                        activeChannel === idx
                          ? channel.color
                          : "#E5E7EB",
                      boxShadow:
                        activeChannel === idx
                          ? `0 0 20px ${channel.color}40`
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
                            ? [1, 1.2, 1]
                            : 1,
                      }}
                      transition={{ duration: 0.5 }}
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
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-blue-200">
                <Inbox className="w-6 h-6 text-blue-600" />
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

      {/* 8️⃣ Works for Every Restaurant Type */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Built for Every Restaurant Format
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: UtensilsCrossed,
                  label: "Dine-in Restaurants",
                  gradient: "from-red-400 to-orange-500",
                },
                {
                  icon: Coffee,
                  label: "Cafés & Bakeries",
                  gradient: "from-yellow-400 to-orange-400",
                },
                {
                  icon: ChefHat,
                  label: "Cloud Kitchens",
                  gradient: "from-blue-400 to-purple-500",
                },
                {
                  icon: Store,
                  label: "Takeaway Outlets",
                  gradient: "from-green-400 to-blue-500",
                },
                {
                  icon: Building2,
                  label: "Restaurant Chains",
                  gradient: "from-purple-400 to-pink-500",
                },
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-90`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
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
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Platform Backbone */}

      {/* 🔟 Closing CTA (Warm, Not Pushy) */}
      <section className="py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl lg:text-5xl mb-12 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Let Your Restaurant Run Smoothly — Even During
                Rush Hours
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/templates#restaurants">
                  <Button
                    size="lg"
                    className="shadow-lg text-base px-10 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #F2994A 0%, #EB5757 50%, #F2C94C 100%)",
                    }}
                  >
                    Explore Restaurant Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/templates#restaurants">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-10 border-2 border-orange-300 rounded-full hover:bg-white bg-white/80"
                  >
                    See Restaurant Templates
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