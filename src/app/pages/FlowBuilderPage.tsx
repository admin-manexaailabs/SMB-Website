import { motion } from "motion/react";
import {
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Users,
  Headphones,
  UserPlus,
  Workflow,
  Zap,
  GitBranch,
  Database,
  Box,
  ArrowRight,
  Globe,
  CheckCircle,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import gmailIcon from "figma:asset/b934c62f9be1fa946e5275b2896c2b9f45f43a6d.png";
import whatsappIcon from "figma:asset/231880b596cafb100ae1f8485ffb9c56cb94eb9c.png";
import { useState } from "react";

export default function FlowBuilderPage() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(
    null,
  );

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
                  Flow Builder
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Visually design how your AI agent thinks,
                responds, and takes action.
              </p>
            </motion.div>

            {/* Right: Mini Flow Canvas Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="relative h-64">
                  {/* Mini flow nodes */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm shadow-lg">
                      Start
                    </div>
                  </div>

                  {/* Connector line */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 0 }}
                  >
                    <motion.path
                      d="M 50% 60 Q 50% 100 50% 140"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2F80ED" />
                        <stop
                          offset="100%"
                          stopColor="#9B51E0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute top-28 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg text-sm shadow-lg">
                      Process
                    </div>
                  </div>

                  {/* Second connector */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ zIndex: 0 }}
                  >
                    <motion.path
                      d="M 50% 170 Q 50% 200 50% 230"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        delay: 0.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient2"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9B51E0" />
                        <stop
                          offset="100%"
                          stopColor="#F2994A"
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg text-sm shadow-lg">
                      Action
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              What You Can Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create powerful AI agents for every business need
              with our visual flow builder
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Appointment Booking Agents",
                outcome:
                  "Automate scheduling across all channels",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                icon: MessageCircle,
                title: "Campaign & Survey Agents",
                outcome:
                  "Engage customers with targeted conversations",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                icon: Headphones,
                title: "Customer Support Agents",
                outcome:
                  "Handle queries with intelligent responses",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100",
              },
              {
                icon: UserPlus,
                title: "Lead Capture & Follow-Up Agents",
                outcome:
                  "Convert and nurture prospects automatically",
                gradient: "from-red-500 to-red-600",
                bgGradient: "from-red-50 to-red-100",
              },
              {
                icon: Workflow,
                title: "Internal Automation Agents",
                outcome:
                  "Streamline team workflows and processes",
                gradient: "from-yellow-500 to-yellow-600",
                bgGradient: "from-yellow-50 to-yellow-100",
              },
              {
                icon: Users,
                title: "Multi-Channel Agents",
                outcome: "Unify customer experience everywhere",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="h-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <card.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3
                      className="text-xl mb-3 group-hover:text-gray-900 transition-colors"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.outcome}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight
                        className={`w-5 h-5 text-${card.gradient.split("-")[1]}-600`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Builder Canvas Preview */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl lg:text-5xl mb-3"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Visual Flow Design
            </h2>
            <p className="text-lg text-gray-600">
              Build sophisticated workflows with an intuitive
              drag-and-drop interface
            </p>
          </motion.div>

          {/* Full Width Flow Canvas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 lg:p-16 relative overflow-hidden">
              {/* Dot Grid Background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(156, 163, 175, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Flow Visualization */}
              <div className="relative h-[380px] md:h-[600px]">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ zIndex: 1 }}
                >
                  {/* Animated Connections */}
                  <motion.path
                    d="M 50% 80 L 50% 140"
                    stroke="url(#flowGradient1)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.path
                    d="M 50% 200 Q 50% 240 30% 280"
                    stroke="url(#flowGradient2)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.path
                    d="M 50% 200 Q 50% 240 70% 280"
                    stroke="url(#flowGradient3)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  />
                  <motion.path
                    d="M 30% 340 Q 30% 380 50% 420"
                    stroke="url(#flowGradient4)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                  <motion.path
                    d="M 70% 340 Q 70% 380 50% 420"
                    stroke="url(#flowGradient5)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                  <motion.path
                    d="M 50% 480 L 50% 540"
                    stroke="url(#flowGradient6)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />

                  <defs>
                    <linearGradient
                      id="flowGradient1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#2F80ED" />
                      <stop offset="100%" stopColor="#9B51E0" />
                    </linearGradient>
                    <linearGradient
                      id="flowGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#9B51E0" />
                      <stop offset="100%" stopColor="#F2994A" />
                    </linearGradient>
                    <linearGradient
                      id="flowGradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#9B51E0" />
                      <stop offset="100%" stopColor="#EB5757" />
                    </linearGradient>
                    <linearGradient
                      id="flowGradient4"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F2994A" />
                      <stop offset="100%" stopColor="#F2C94C" />
                    </linearGradient>
                    <linearGradient
                      id="flowGradient5"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#EB5757" />
                      <stop offset="100%" stopColor="#F2C94C" />
                    </linearGradient>
                    <linearGradient
                      id="flowGradient6"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F2C94C" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Flow Nodes */}
                <motion.div
                  className="absolute top-8 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onMouseEnter={() => setHoveredNode("start")}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "start" ? "ring-4 ring-blue-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Trigger
                        </div>
                        <div className="text-xs md:text-base">Incoming Message</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[72px] md:top-32 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  onMouseEnter={() => setHoveredNode("logic")}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "logic" ? "ring-4 ring-purple-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <GitBranch className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Condition
                        </div>
                        <div className="text-xs md:text-base">Check Availability</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[136px] md:top-64 left-[20%] md:left-[30%] -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  onMouseEnter={() =>
                    setHoveredNode("available")
                  }
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "available" ? "ring-4 ring-orange-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <Calendar className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Action
                        </div>
                        <div className="text-xs md:text-base">Book Appointment</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[136px] md:top-64 left-[80%] md:left-[70%] -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  onMouseEnter={() =>
                    setHoveredNode("unavailable")
                  }
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "unavailable" ? "ring-4 ring-red-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <Mail className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Action
                        </div>
                        <div className="text-xs md:text-base">Send Alternatives</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[200px] md:top-[310px] left-[20%] md:left-[30%] -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  onMouseEnter={() => setHoveredNode("confirm")}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "confirm" ? "ring-4 ring-yellow-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <Database className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Integration
                        </div>
                        <div className="text-xs md:text-base">Save to CRM</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[200px] md:top-[310px] left-[80%] md:left-[70%] -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  onMouseEnter={() =>
                    setHoveredNode("followup")
                  }
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "followup" ? "ring-4 ring-yellow-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <Zap className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Automation
                        </div>
                        <div className="text-xs md:text-base">Schedule Follow-Up</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[264px] md:top-[390px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  onMouseEnter={() => setHoveredNode("merge")}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "merge" ? "ring-4 ring-yellow-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <GitBranch className="w-4 h-4 md:w-6 md:h-6 rotate-180" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          Logic
                        </div>
                        <div className="text-xs md:text-base">Merge Paths</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-[328px] md:top-[470px] left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  onMouseEnter={() => setHoveredNode("end")}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ zIndex: 10 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`px-4 py-2 md:px-8 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-xl transition-all cursor-pointer ${hoveredNode === "end" ? "ring-4 ring-green-300" : ""}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3">
                      <CheckCircle className="w-4 h-4 md:w-6 md:h-6" />
                      <div>
                        <div className="text-[10px] md:text-xs opacity-80">
                          End
                        </div>
                        <div className="text-xs md:text-base">Complete Flow</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Stats Bar Below Canvas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                {
                  number: "50+",
                  label: "Pre-built Nodes",
                  gradient: "from-blue-600 to-purple-600",
                },
                {
                  number: "100%",
                  label: "Visual Design",
                  gradient: "from-purple-600 to-orange-600",
                },
                {
                  number: "∞",
                  label: "Custom Logic",
                  gradient: "from-orange-600 to-red-600",
                },
                {
                  number: "5+",
                  label: "Channels Ready",
                  gradient: "from-red-600 to-yellow-600",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                  className="text-center"
                >
                  <div
                    className={`text-3xl lg:text-4xl mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
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
              className="text-4xl lg:text-5xl mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              What's Included in Flow Builder
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
              {[
                "Drag & drop nodes",
                "Smart branching & conditions",
                "Channel-aware logic",
                "Action-based automation",
                "Reusable flow blocks",
              ].map((item, idx) => (
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
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: Visual Support */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <div className="space-y-6">
                  {/* Animated snippet */}
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg" />
                    <ArrowRight className="w-6 h-6 text-purple-500" />
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg" />
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [0, -20, 0],
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-4 ml-8"
                  >
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg" />
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channel-First Design Section */}
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
              className="text-4xl lg:text-5xl mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Build Once. Run Across Every Channel.
            </h2>
          </motion.div>

          {/* Channel Flow Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              {/* Central Flow Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="px-8 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white rounded-2xl shadow-2xl mb-12"
              >
                <div className="flex items-center gap-4">
                  <Workflow className="w-7 h-7" />
                  <span
                    className="text-xl"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Your Flow
                  </span>
                </div>
              </motion.div>

              {/* Channel Icons */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  { icon: Globe, label: "Web", delay: 0.3 },
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
                    whileHover={{ scale: 1.05 }}
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
              { icon: Users, text: "Designed for SMBs" },
              {
                icon: TrendingUp,
                text: "Scales to millions of conversations",
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

      {/* Footer Spacer */}

      <Footer />
    </div>
  );
}