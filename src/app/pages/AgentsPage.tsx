import { motion } from "motion/react";
import { Link } from "react-router";
import {
  MessageCircle,
  Calendar,
  Target,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle,
  GitBranch,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Workflow,
  Network,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { useState } from "react";
import whatsappIcon from "figma:asset/231880b596cafb100ae1f8485ffb9c56cb94eb9c.png";
import gmailIcon from "figma:asset/b934c62f9be1fa946e5275b2896c2b9f45f43a6d.png";

export default function AgentsPage() {
  const [hoveredAgent, setHoveredAgent] = useState<
    string | null
  >(null);

  const agentTypes = [
    {
      id: "customer",
      icon: MessageCircle,
      name: "Customer Agents",
      capability:
        "Handle inbound customer conversations across channels.",
      gradient: "from-blue-500 to-blue-600",
      glowColor: "rgba(47, 128, 237, 0.4)",
    },
    {
      id: "scheduling",
      icon: Calendar,
      name: "Scheduling Agents",
      capability:
        "Book appointments, manage reschedules, and send reminders.",
      gradient: "from-purple-500 to-purple-600",
      glowColor: "rgba(155, 81, 224, 0.4)",
    },
    {
      id: "campaign",
      icon: Target,
      name: "Campaign Agents",
      capability:
        "Run outbound campaigns, surveys, and follow-ups at scale.",
      gradient: "from-orange-500 to-orange-600",
      glowColor: "rgba(242, 153, 74, 0.4)",
    },
    {
      id: "voice",
      icon: Phone,
      name: "Voice Agents",
      capability: "Automate inbound and outbound calls.",
      gradient: "from-red-500 to-red-600",
      glowColor: "rgba(235, 87, 87, 0.4)",
    },
    {
      id: "email",
      icon: Mail,
      name: "Email Agents",
      capability:
        "Send, receive, and respond to emails automatically.",
      gradient: "from-yellow-500 to-yellow-600",
      glowColor: "rgba(242, 201, 76, 0.4)",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      name: "WhatsApp Agents",
      capability:
        "High-engagement messaging agents for campaigns and support.",
      gradient: "from-green-500 to-green-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
    },
  ];

  const capabilities = [
    "Respond to customers",
    "Ask questions & collect inputs",
    "Trigger actions",
    "Run campaigns & surveys",
    "Schedule & remind",
    "Escalate to humans",
  ];

  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title & Caption */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#F2994A] bg-clip-text text-transparent">
                  AI Agents
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Purpose-built AI agents that handle
                conversations, campaigns, scheduling, and
                automation at scale.
              </p>
            </motion.div>

            {/* Right: Abstract Agent Network Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-96"
            >
              <div className="relative h-full">
                {/* Central Agent Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                {/* Orbiting Agent Cards */}
                {[
                  {
                    icon: MessageCircle,
                    angle: 0,
                    delay: 0.4,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Calendar,
                    angle: 60,
                    delay: 0.5,
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Target,
                    angle: 120,
                    delay: 0.6,
                    color: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: Phone,
                    angle: 180,
                    delay: 0.7,
                    color: "from-red-500 to-red-600",
                  },
                  {
                    icon: Mail,
                    angle: 240,
                    delay: 0.8,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    icon: Globe,
                    angle: 300,
                    delay: 0.9,
                    color: "from-green-500 to-green-600",
                  },
                ].map((agent, idx) => {
                  const radius = 140;
                  const x =
                    Math.cos((agent.angle * Math.PI) / 180) *
                    radius;
                  const y =
                    Math.sin((agent.angle * Math.PI) / 180) *
                    radius;

                  return (
                    <motion.div
                      key={idx}
                      className="absolute top-1/2 left-1/2"
                      initial={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                      }}
                      animate={{ opacity: 1, scale: 1, x, y }}
                      transition={{
                        duration: 0.6,
                        delay: agent.delay,
                      }}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${agent.color} shadow-lg flex items-center justify-center cursor-pointer`}
                      >
                        <agent.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Animated Connection Lines */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {[0, 60, 120, 180, 240, 300].map(
                    (angle, idx) => {
                      // Convert pixel radius to viewBox percentage
                      // Container is h-96 (384px), so radius 140px ≈ 36.5% of height
                      const radiusPercent = 36.5;
                      const centerX = 50;
                      const centerY = 50;

                      // Calculate endpoint coordinates in percentage
                      const endX =
                        centerX +
                        Math.cos((angle * Math.PI) / 180) *
                          radiusPercent;
                      const endY =
                        centerY +
                        Math.sin((angle * Math.PI) / 180) *
                          radiusPercent;

                      return (
                        <motion.line
                          key={idx}
                          x1={centerX}
                          y1={centerY}
                          x2={endX}
                          y2={endY}
                          stroke="url(#agentGradient)"
                          strokeWidth="0.4"
                          opacity="0.25"
                          initial={{
                            pathLength: 0,
                            opacity: 0,
                          }}
                          animate={{
                            pathLength: 1,
                            opacity: 0.25,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.4 + idx * 0.1,
                          }}
                        />
                      );
                    },
                  )}
                  <defs>
                    <linearGradient
                      id="agentGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2F80ED" />
                      <stop offset="50%" stopColor="#9B51E0" />
                      <stop offset="100%" stopColor="#F2994A" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Categories Grid */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, idx) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredAgent(agent.id)}
                onMouseLeave={() => setHoveredAgent(null)}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
                  style={{
                    boxShadow:
                      hoveredAgent === agent.id
                        ? `0 20px 60px ${agent.glowColor}`
                        : undefined,
                  }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <agent.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3
                      className="text-xl mb-3 group-hover:text-gray-900 transition-colors"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {agent.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {agent.capability}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity:
                          hoveredAgent === agent.id ? 1 : 0,
                        x: hoveredAgent === agent.id ? 0 : -10,
                      }}
                      className="absolute bottom-8 right-8"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Agents Can Do */}
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
              className="text-4xl lg:text-5xl mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              What Agents Can Do
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Capability List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-lg text-gray-700">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Visual Representation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
                <div className="relative h-80">
                  {/* Central Agent Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-xl shadow-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles className="w-6 h-6" />
                        <span
                          className="text-lg"
                          style={{
                            fontFamily: "DM Sans, sans-serif",
                          }}
                        >
                          Agent
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Nodes */}
                  {[
                    {
                      icon: MessageCircle,
                      label: "Think",
                      position:
                        "top-4 left-1/2 -translate-x-1/2",
                      delay: 0.2,
                    },
                    {
                      icon: Zap,
                      label: "Act",
                      position: "bottom-4 left-8",
                      delay: 0.4,
                    },
                    {
                      icon: CheckCircle,
                      label: "Respond",
                      position: "bottom-4 right-8",
                      delay: 0.6,
                    },
                  ].map((action, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: action.delay,
                      }}
                      className={`absolute ${action.position}`}
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <action.icon className="w-6 h-6 text-gray-600" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.line
                      x1="50%"
                      y1="30%"
                      x2="50%"
                      y2="45%"
                      stroke="url(#actionGradient1)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                    <motion.line
                      x1="50%"
                      y1="55%"
                      x2="20%"
                      y2="75%"
                      stroke="url(#actionGradient2)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.line
                      x1="50%"
                      y1="55%"
                      x2="80%"
                      y2="75%"
                      stroke="url(#actionGradient3)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <defs>
                      <linearGradient id="actionGradient1">
                        <stop offset="0%" stopColor="#2F80ED" />
                        <stop
                          offset="100%"
                          stopColor="#9B51E0"
                        />
                      </linearGradient>
                      <linearGradient id="actionGradient2">
                        <stop offset="0%" stopColor="#9B51E0" />
                        <stop
                          offset="100%"
                          stopColor="#F2994A"
                        />
                      </linearGradient>
                      <linearGradient id="actionGradient3">
                        <stop offset="0%" stopColor="#9B51E0" />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agents + Flow Builder Connection */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200 relative overflow-hidden">
              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative">
                <div className="flex items-center justify-center gap-8 mb-8">
                  {/* Flow Node */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 text-sm"
                  >
                    Trigger
                  </motion.div>

                  <ArrowRight className="w-5 h-5 text-gray-400" />

                  {/* Agent Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-xl shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      <span
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        Agent
                      </span>
                    </div>
                  </motion.div>

                  <ArrowRight className="w-5 h-5 text-gray-400" />

                  {/* Flow Node */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 text-sm"
                  >
                    Action
                  </motion.div>
                </div>

                <p className="text-center text-lg text-gray-600">
                  Agents are built and controlled using the Flow
                  Builder.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Channels Coverage Section */}
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
              className="text-4xl lg:text-5xl mb-3"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              One agent. Multiple channels.
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              {/* Central Agent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-8 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-2xl shadow-2xl mb-16 relative z-10"
              >
                <div className="flex items-center gap-4">
                  <Sparkles className="w-7 h-7" />
                  <span
                    className="text-xl"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Your Agent
                  </span>
                </div>
              </motion.div>

              {/* Connection Lines - Clean architectural connectors */}
              <svg
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 1 }}
                preserveAspectRatio="none"
              >
                {/* Define precise connection points for 5-column grid */}
                {[
                  {
                    x: "10%",
                    gradient: "url(#channelGradient1)",
                  }, // WhatsApp
                  {
                    x: "30%",
                    gradient: "url(#channelGradient2)",
                  }, // Voice
                  {
                    x: "50%",
                    gradient: "url(#channelGradient3)",
                  }, // Email (center)
                  {
                    x: "70%",
                    gradient: "url(#channelGradient4)",
                  }, // Web Chat
                  {
                    x: "90%",
                    gradient: "url(#channelGradient5)",
                  }, // SMS
                ].map((line, idx) => (
                  <motion.path
                    key={idx}
                    d={`M 50% 35% Q 50% 55%, ${line.x} 75%`}
                    stroke={line.gradient}
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.25"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{
                      pathLength: 1,
                      opacity: 0.25,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                  />
                ))}

                <defs>
                  {/* Individual gradients for each line */}
                  <linearGradient
                    id="channelGradient1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2F80ED"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="#9B51E0"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="channelGradient2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#2F80ED"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="#9B51E0"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="channelGradient3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#9B51E0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="#9B51E0"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="channelGradient4"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#9B51E0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="#F2994A"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                  <linearGradient
                    id="channelGradient5"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="#9B51E0"
                      stopOpacity="0.8"
                    />
                    <stop
                      offset="100%"
                      stopColor="#F2994A"
                      stopOpacity="0.6"
                    />
                  </linearGradient>
                </defs>
              </svg>

              {/* Channel Icons */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {[
                  {
                    icon: whatsappIcon,
                    label: "WhatsApp",
                    delay: 0,
                  },
                  { icon: Phone, label: "Voice", delay: 0.1 },
                  {
                    icon: gmailIcon,
                    label: "Email",
                    delay: 0.2,
                  },
                  {
                    icon: Globe,
                    label: "Web Chat",
                    delay: 0.3,
                  },
                  {
                    icon: MessageCircle,
                    label: "SMS",
                    delay: 0.4,
                  },
                ].map((channel, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: channel.delay,
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-200">
                      {typeof channel.icon === "string" ? (
                        <img
                          src={channel.icon}
                          alt={channel.label}
                          className="w-10 h-10"
                        />
                      ) : (
                        <channel.icon className="w-10 h-10 text-gray-700" />
                      )}
                    </div>
                    <span className="text-sm text-gray-600">
                      {channel.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scale & Reliability Strip */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-12">
            {[
              { icon: Users, text: "Built for SMBs" },
              {
                icon: TrendingUp,
                text: "Designed to scale to millions of messages",
              },
              { icon: Zap, text: "Real-time execution" },
              {
                icon: Shield,
                text: "Enterprise-grade reliability",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-700">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Action Area */}

      {/* Footer */}
      <Footer />
    </div>
  );
}