import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import {
  ShoppingCart,
  Phone,
  MessageCircle,
  Globe,
  Instagram,
  Mail,
  MessageSquare,
  Package,
  Users,
  Clock,
  Bot,
  Inbox,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle,
  Bell,
  TrendingUp,
  Repeat,
  Truck,
  RefreshCw,
  DollarSign,
  Zap,
  Target,
  Store,
  Layers,
  XCircle,
  Send,
  ShoppingBag,
  Tag,
  Star,
  AlertCircle,
  Smartphone,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function EcommercePage() {
  const [orderStep, setOrderStep] = useState(0);
  const [activeProblem, setActiveProblem] = useState(0);
  const [statusStep, setStatusStep] = useState(0);
  const [cartStep, setCartStep] = useState(0);
  const [activeCampaign, setActiveCampaign] = useState(0);
  const [activeChannel, setActiveChannel] = useState(0);

  // Order flow messages
  const orderMessages = [
    {
      type: "New Order",
      status: "Confirmed",
      color: "#10B981",
    },
    {
      type: "Processing",
      status: "In Progress",
      color: "#F59E0B",
    },
    { type: "Shipped", status: "On the way", color: "#3B82F6" },
    {
      type: "Delivered",
      status: "Completed",
      color: "#10B981",
    },
  ];

  // E-commerce problems
  const problems = [
    {
      icon: Package,
      title: '"Where is my order?"',
      problem: "Manual tracking",
      solution: "Instant order status",
      color: "#3B82F6",
    },
    {
      icon: MessageCircle,
      title: "High support volume",
      problem: "Team overwhelmed",
      solution: "AI handles queries",
      color: "#F59E0B",
    },
    {
      icon: Repeat,
      title: "Missed follow-ups",
      problem: "Lost revenue",
      solution: "Automated messages",
      color: "#10B981",
    },
    {
      icon: TrendingUp,
      title: "Scaling pain",
      problem: "Can't keep up",
      solution: "System handles spikes",
      color: "#8B5CF6",
    },
  ];

  // Order lifecycle
  const orderLifecycle = [
    {
      label: "Order confirmed",
      icon: CheckCircle,
      status: "success",
    },
    {
      label: "Shipping update",
      icon: Truck,
      status: "processing",
    },
    {
      label: "Delivery notification",
      icon: Package,
      status: "processing",
    },
    { label: "Order complete", icon: Star, status: "idle" },
  ];

  // Cart abandonment flow
  const cartFlow = [
    {
      label: "Cart abandoned",
      icon: ShoppingCart,
      color: "#EF4444",
    },
    { label: "Follow-up sent", icon: Send, color: "#F59E0B" },
    {
      label: "Reminder triggered",
      icon: Bell,
      color: "#3B82F6",
    },
    {
      label: "Purchase completed",
      icon: CheckCircle,
      color: "#10B981",
    },
  ];

  // Campaigns
  const campaigns = [
    { title: "New Products", icon: Tag, color: "#3B82F6" },
    {
      title: "Sale Events",
      icon: DollarSign,
      color: "#EF4444",
    },
    { title: "Upsells", icon: TrendingUp, color: "#10B981" },
    { title: "Reviews", icon: Star, color: "#F59E0B" },
  ];

  // Channels
  const channels = [
    {
      icon: MessageCircle,
      name: "WhatsApp",
      color: "#25D366",
      primary: true,
    },
    { icon: Globe, name: "Website Chat", color: "#3B82F6" },
    { icon: Mail, name: "Email", color: "#6B7280" },
    { icon: MessageSquare, name: "SMS", color: "#F59E0B" },
    {
      icon: Instagram,
      name: "Instagram DMs",
      color: "#E1306C",
    },
    {
      icon: MessageSquare,
      name: "Facebook DMs",
      color: "#1877F2",
    },
    { icon: Phone, name: "Phone", color: "#8B5CF6" },
  ];

  // Fast animations for e-commerce
  useEffect(() => {
    const orderInterval = setInterval(() => {
      setOrderStep((prev) => (prev + 1) % orderMessages.length);
    }, 1500); // fastest cycle
    return () => clearInterval(orderInterval);
  }, []);

  useEffect(() => {
    const problemInterval = setInterval(() => {
      setActiveProblem((prev) => (prev + 1) % problems.length);
    }, 2500); // quick transitions
    return () => clearInterval(problemInterval);
  }, []);

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusStep(
        (prev) => (prev + 1) % orderLifecycle.length,
      );
    }, 2000);
    return () => clearInterval(statusInterval);
  }, []);

  useEffect(() => {
    const cartInterval = setInterval(() => {
      setCartStep((prev) => (prev + 1) % cartFlow.length);
    }, 2200);
    return () => clearInterval(cartInterval);
  }, []);

  useEffect(() => {
    const campaignInterval = setInterval(() => {
      setActiveCampaign(
        (prev) => (prev + 1) % campaigns.length,
      );
    }, 2500);
    return () => clearInterval(campaignInterval);
  }, []);

  useEffect(() => {
    const channelInterval = setInterval(() => {
      setActiveChannel((prev) => (prev + 1) % channels.length);
    }, 1800); // rapid channel cycling
    return () => clearInterval(channelInterval);
  }, []);

  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero: Revenue Engine for E-commerce */}
      <section className="pt-20 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Bold Value */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 rounded-full mb-6">
                  <ShoppingCart className="w-4 h-4 text-blue-600" />
                  <span
                    className="text-sm text-blue-700"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Built for E-commerce
                  </span>
                </div>

                <h1
                  className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Built for E-commerce That Scales Fast
                </h1>

                <p className="text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
                  From order updates to customer support and
                  repeat sales — SMB Flow automates every
                  customer interaction across channels.
                </p>

                <Link to="/templates#ecommerce">
                  <Button
                    size="lg"
                    className="shadow-xl text-base px-8 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)",
                    }}
                  >
                    Explore E-commerce Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>

              {/* Right: Animated Commerce Flow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border-2 border-gray-200 shadow-2xl max-w-lg">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <Zap className="w-6 h-6 text-orange-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      Live Order Flow
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {orderMessages.map((order, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0.4, x: -10 }}
                        animate={{
                          opacity: idx === orderStep ? 1 : 0.4,
                          x: idx === orderStep ? 0 : -5,
                          scale: idx === orderStep ? 1 : 0.98,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                      >
                        <div
                          className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 shadow-sm transition-all duration-300"
                          style={{
                            borderColor:
                              idx === orderStep
                                ? order.color
                                : "#E5E7EB",
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${order.color}20`,
                            }}
                          >
                            <Package
                              className="w-5 h-5"
                              style={{ color: order.color }}
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div
                              className="text-sm mb-1"
                              style={{
                                fontFamily:
                                  "DM Sans, sans-serif",
                              }}
                            >
                              {order.type}
                            </div>
                            <div className="text-xs text-gray-600">
                              {order.status}
                            </div>
                          </div>

                          {idx === orderStep && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <CheckCircle
                                className="w-5 h-5"
                                style={{ color: order.color }}
                              />
                            </motion.div>
                          )}
                        </div>

                        {/* Progress Bar */}
                        {idx === orderStep && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5 }}
                            className="absolute bottom-0 left-0 right-0 h-1 rounded-full origin-left"
                            style={{
                              backgroundColor: order.color,
                            }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
                    <Zap className="w-4 h-4 text-orange-600" />
                    <span>
                      Instant updates across all channels
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ The Real E-commerce Problem */}
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
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 h-full shadow-sm hover:shadow-lg">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
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
                      className="text-base mb-4"
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
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
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
                            {problem.solution}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="problem"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <XCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <span className="text-sm text-gray-500">
                            {problem.problem}
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

      {/* 3️⃣ Order Management at Scale */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
                Orders That Manage Themselves
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Order Lifecycle Animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-xl p-8 border-2 border-gray-200 shadow-lg">
                  <div className="space-y-4">
                    {orderLifecycle.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0.5 }}
                        animate={{
                          opacity: idx <= statusStep ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                      >
                        <div className="flex items-center gap-4">
                          {/* Status Indicator */}
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-400"
                            style={{
                              backgroundColor:
                                idx <= statusStep
                                  ? "#3B82F6"
                                  : "#F3F4F6",
                            }}
                          >
                            <step.icon
                              className="w-5 h-5 transition-colors duration-400"
                              style={{
                                color:
                                  idx <= statusStep
                                    ? "white"
                                    : "#9CA3AF",
                              }}
                            />
                          </div>

                          {/* Label */}
                          <div
                            className="flex-1 flex items-center justify-between p-3 bg-gray-50 rounded-lg border transition-all duration-400"
                            style={{
                              borderColor:
                                idx === statusStep
                                  ? "#3B82F6"
                                  : "#E5E7EB",
                              backgroundColor:
                                idx === statusStep
                                  ? "#EFF6FF"
                                  : "#F9FAFB",
                            }}
                          >
                            <span
                              className="text-sm transition-colors duration-400"
                              style={{
                                color:
                                  idx <= statusStep
                                    ? "#1F2937"
                                    : "#9CA3AF",
                              }}
                            >
                              {step.label}
                            </span>

                            {idx < statusStep && (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            )}
                          </div>
                        </div>

                        {/* Connector */}
                        {idx < orderLifecycle.length - 1 && (
                          <div className="ml-5 mt-1 mb-1">
                            <div
                              className="w-0.5 h-3 rounded-full transition-all duration-400"
                              style={{
                                backgroundColor:
                                  idx < statusStep
                                    ? "#3B82F6"
                                    : "#E5E7EB",
                              }}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: Sharp Bullet Points */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-4">
                  {[
                    {
                      icon: CheckCircle,
                      text: "Order confirmation messages",
                      color: "#10B981",
                    },
                    {
                      icon: Truck,
                      text: "Shipping & delivery updates",
                      color: "#3B82F6",
                    },
                    {
                      icon: RefreshCw,
                      text: "Refund & return queries",
                      color: "#F59E0B",
                    },
                    {
                      icon: Package,
                      text: "Order history access",
                      color: "#8B5CF6",
                    },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.1,
                        duration: 0.5,
                      }}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        <item.icon
                          className="w-5 h-5"
                          style={{ color: item.color }}
                        />
                      </div>
                      <span className="text-base text-gray-900">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Customer Support That Never Slows Down */}
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
                Customer Support That Never Slows Down
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
                <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-6 h-6 text-gray-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      Customer queries
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        text: "Where is my order?",
                        time: "14:23",
                      },
                      {
                        text: "Cancel my order",
                        time: "14:24",
                      },
                      {
                        text: "What's my refund status?",
                        time: "14:25",
                      },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.3,
                          duration: 0.5,
                        }}
                        className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                      >
                        <div className="text-sm text-gray-900 mb-1">
                          {msg.text}
                        </div>
                        <div className="text-xs text-gray-500">
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
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Bot className="w-6 h-6 text-blue-600" />
                    <h3
                      className="text-lg"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      Instant responses
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        text: "Your order #1234 is out for delivery",
                        label: "Real-time tracking",
                      },
                      {
                        text: "Order cancelled, refund in 3-5 days",
                        label: "Context-aware",
                      },
                      {
                        text: "Refund of $45 processed successfully",
                        label: "Automated",
                      },
                    ].map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.3 + 0.2,
                          duration: 0.5,
                        }}
                        className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-sm text-gray-900 mb-1">
                              {msg.text}
                            </div>
                            <div className="text-xs text-blue-600">
                              {msg.label}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 p-3 bg-white/70 rounded-lg border border-blue-200">
                    <div className="text-xs text-gray-700">
                      Human escalation only when required
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                <Zap className="w-6 h-6 text-blue-600" />
                <span
                  className="text-lg"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Handle thousands of conversations without
                  slowing down
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Abandoned Carts & Follow-Ups (Revenue Section) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-4">
                <DollarSign className="w-4 h-4 text-green-700" />
                <span
                  className="text-sm text-green-700"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Revenue Recovery
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl mb-4 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Recover Sales Automatically
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {/* Cart Flow Timeline */}
              <div className="bg-white rounded-xl p-10 border-2 border-gray-200 shadow-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  {cartFlow.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: idx * 0.15,
                        duration: 0.6,
                      }}
                      className="text-center relative"
                    >
                      {/* Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center shadow-md transition-all duration-500"
                        style={{
                          backgroundColor:
                            cartStep >= idx
                              ? step.color
                              : "#F3F4F6",
                        }}
                        animate={{
                          scale:
                            cartStep === idx ? [1, 1.05, 1] : 1,
                        }}
                        transition={{ duration: 1.2 }}
                      >
                        <step.icon
                          className="w-8 h-8 transition-colors duration-500"
                          style={{
                            color:
                              cartStep >= idx
                                ? "white"
                                : "#9CA3AF",
                          }}
                        />
                      </motion.div>

                      {/* Label */}
                      <div
                        className="text-sm"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {step.label}
                      </div>

                      {/* Arrow */}
                      {idx < cartFlow.length - 1 && (
                        <ArrowRight
                          className="hidden md:block w-5 h-5 absolute transition-colors duration-500"
                          style={{
                            right: "-1rem",
                            top: "26px",
                            color:
                              cartStep > idx
                                ? step.color
                                : "#D1D5DB",
                          }}
                        />
                      )}

                      {/* Checkmark */}
                      {cartStep > idx && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="absolute top-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
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

      {/* 6️⃣ Campaigns That Drive Repeat Sales */}
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
                Campaigns That Drive Repeat Sales
              </h2>
            </motion.div>

            {/* Campaign Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {campaigns.map((campaign, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="rounded-xl p-6 h-full border-2 shadow-lg relative overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeCampaign === idx
                          ? campaign.color
                          : "white",
                      borderColor: campaign.color,
                    }}
                  >
                    <campaign.icon
                      className="w-10 h-10 mb-4"
                      style={{
                        color:
                          activeCampaign === idx
                            ? "white"
                            : campaign.color,
                      }}
                    />
                    <h3
                      className="text-lg mb-3"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        color:
                          activeCampaign === idx
                            ? "white"
                            : "#1F2937",
                      }}
                    >
                      {campaign.title}
                    </h3>

                    {/* Flow Animation */}
                    <motion.div
                      animate={{
                        opacity:
                          activeCampaign === idx
                            ? [0.7, 1, 0.7]
                            : 0.7,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="space-y-2 text-sm"
                      style={{
                        color:
                          activeCampaign === idx
                            ? "white"
                            : "#6B7280",
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Send className="w-3 h-3" />
                        <span>Campaign</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-3 h-3" />
                        <span>Click</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-3 h-3" />
                        <span>Order</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Repeat className="w-3 h-3" />
                        <span>Repeat</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Channels Your Customers Shop On */}
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
                Every Channel, One System
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                One brand voice, everywhere.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
              {channels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -4 }}
                  className="relative"
                >
                  <div
                    className="bg-white rounded-xl p-5 border-2 transition-all duration-300 text-center cursor-pointer"
                    style={{
                      borderColor:
                        activeChannel === idx
                          ? channel.color
                          : "#E5E7EB",
                      boxShadow:
                        activeChannel === idx
                          ? `0 0 20px ${channel.color}30`
                          : "none",
                    }}
                  >
                    {channel.primary && (
                      <div className="absolute -top-2 -right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full shadow-md">
                        #1
                      </div>
                    )}

                    <motion.div
                      animate={{
                        scale:
                          activeChannel === idx
                            ? [1, 1.1, 1]
                            : 1,
                      }}
                      transition={{ duration: 0.8 }}
                      className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                      style={{
                        backgroundColor: `${channel.color}20`,
                      }}
                    >
                      <channel.icon
                        className="w-5 h-5"
                        style={{ color: channel.color }}
                      />
                    </motion.div>

                    <div
                      className="text-xs"
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
          </div>
        </div>
      </section>

      {/* 8️⃣ Built for Every E-commerce Model */}
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
                Built for Every E-commerce Model
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: Store,
                  label: "D2C Brands",
                  gradient: "from-blue-500 to-purple-600",
                },
                {
                  icon: ShoppingCart,
                  label: "Online Marketplaces",
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: Repeat,
                  label: "Subscription Businesses",
                  gradient: "from-green-500 to-blue-600",
                },
                {
                  icon: Package,
                  label: "Dropshipping Stores",
                  gradient: "from-orange-500 to-red-600",
                },
                {
                  icon: Layers,
                  label: "Multi-store Operations",
                  gradient: "from-pink-500 to-purple-600",
                },
              ].map((type, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative rounded-xl overflow-hidden h-56 group cursor-pointer">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${type.gradient}`}
                    />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <type.icon className="w-14 h-14 text-white mb-4" />
                      </motion.div>
                      <h3
                        className="text-base text-white"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {type.label}
                      </h3>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9️⃣ Scale, Speed & Reliability */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-blue-100 border border-blue-300 rounded-full mb-6">
                <Zap className="w-5 h-5 text-blue-700" />
                <span
                  className="text-sm text-blue-900"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Built for Scale
                </span>
              </div>

              <h2
                className="text-4xl lg:text-5xl mb-6 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Handle Peak Traffic Without Breaking
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Handles traffic spikes",
                  desc: "Black Friday ready - scale automatically",
                },
                {
                  icon: Target,
                  title: "Consistent responses at scale",
                  desc: "Same quality at 10x volume",
                },
                {
                  icon: Clock,
                  title: "24/7 availability",
                  desc: "Never miss a customer inquiry",
                },
                {
                  icon: Users,
                  title: "No extra headcount",
                  desc: "Grow revenue without growing team",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                  }}
                >
                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-colors h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3
                          className="text-base mb-2"
                          style={{
                            fontFamily: "DM Sans, sans-serif",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔟 Platform Backbone */}

      {/* 🔟 Closing CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
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
                Scale Your Store Without Scaling Your Support
                Team
              </h2>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/templates#ecommerce">
                  <Button
                    size="lg"
                    className="shadow-xl text-base px-10 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)",
                    }}
                  >
                    Explore E-commerce Solutions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/templates#ecommerce">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-10 border-2 border-gray-300 rounded-lg hover:bg-white bg-white/90"
                  >
                    See E-commerce Templates
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