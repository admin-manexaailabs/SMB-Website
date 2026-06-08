import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Search,
  Rocket,
  Puzzle,
  Plug,
  Brain,
  BarChart3,
  Shield,
  Workflow,
  Bot,
  Globe,
  Inbox,
  Database,
  Layers,
  Network,
  ChevronRight,
  Clock,
  MessageSquare,
  Calendar,
  Zap,
  CheckCircle,
  ChevronDown,
  Mail,
  Users,
  BookOpen,
} from "lucide-react";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const quickActions = [
    {
      icon: Rocket,
      title: "Get Started Fast",
      description: "Launch your first agent in minutes",
      href: "/docs/quickstart",
      color: "#2F80ED",
    },
    {
      icon: Puzzle,
      title: "Build Your First Agent",
      description: "Step-by-step agent creation guide",
      href: "/docs/first-agent",
      color: "#9B51E0",
    },
    {
      icon: Plug,
      title: "Connect Channels",
      description: "WhatsApp, Email, SMS & more",
      href: "/docs/channels",
      color: "#EB5757",
    },
    {
      icon: Brain,
      title: "Use Templates",
      description: "Pre-built agents ready to deploy",
      href: "/templates",
      color: "#F2C94C",
    },
    {
      icon: BarChart3,
      title: "Understand Analytics",
      description: "Track performance & insights",
      href: "/docs/analytics",
      color: "#F2994A",
    },
    {
      icon: Shield,
      title: "Security & Data",
      description: "How we protect your information",
      href: "/docs/security",
      color: "#2F80ED",
    },
  ];

  const productAreas = [
    {
      icon: Workflow,
      title: "Flow Builder",
      description: "Design multi-step workflows visually",
      href: "/docs/flow-builder",
      color: "#2F80ED",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Create intelligent conversation agents",
      href: "/docs/agents",
      color: "#9B51E0",
    },
    {
      icon: Globe,
      title: "Channels",
      description: "Connect web, WhatsApp, SMS, voice",
      href: "/docs/channels",
      color: "#EB5757",
    },
    {
      icon: Inbox,
      title: "Unified Inbox",
      description: "Manage all conversations in one place",
      href: "/docs/inbox",
      color: "#F2C94C",
    },
    {
      icon: Database,
      title: "Data & Knowledge",
      description: "Train agents with your content",
      href: "/docs/data",
      color: "#F2994A",
    },
    {
      icon: Plug,
      title: "Integrations",
      description: "Connect to your tools & systems",
      href: "/docs/integrations",
      color: "#2F80ED",
    },
    {
      icon: Layers,
      title: "Models",
      description: "Choose the right AI model",
      href: "/docs/models",
      color: "#9B51E0",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Measure agent performance",
      href: "/docs/analytics",
      color: "#EB5757",
    },
    {
      icon: Network,
      title: "API Access",
      description: "Build custom integrations",
      href: "/docs/api",
      color: "#F2C94C",
    },
  ];

  const guidedWalkthroughs = [
    {
      steps: 5,
      title: "Build a Booking Agent in 10 Minutes",
      description: "Accept appointments 24/7 across all channels",
      href: "/docs/guides/booking-agent",
    },
    {
      steps: 3,
      title: "Connect WhatsApp & Go Live",
      description: "Start messaging customers today",
      href: "/docs/guides/whatsapp-setup",
    },
    {
      steps: 7,
      title: "Create a Multi-Channel Workflow",
      description: "Reach customers everywhere they are",
      href: "/docs/guides/multi-channel",
    },
    {
      steps: 4,
      title: "Use Templates to Launch Faster",
      description: "Deploy proven workflows instantly",
      href: "/docs/guides/templates",
    },
    {
      steps: 6,
      title: "Set Up Automated Follow-Ups",
      description: "Never miss a customer touchpoint",
      href: "/docs/guides/follow-ups",
    },
  ];

  const problemSolutions = [
    {
      problem: "I'm missing customer messages",
      solution: "Unified Inbox",
      description: "See all conversations in one place",
      href: "/product/inbox",
    },
    {
      problem: "I want to automate bookings",
      solution: "Booking Agent Template",
      description: "Accept appointments automatically",
      href: "/templates#booking",
    },
    {
      problem: "I need follow-ups to run automatically",
      solution: "Workflow Automation",
      description: "Set triggers and let agents handle it",
      href: "/product/flow-builder",
    },
    {
      problem: "I want one inbox for all channels",
      solution: "Multi-Channel Setup",
      description: "Connect WhatsApp, Email, SMS & more",
      href: "/product/channels",
    },
    {
      problem: "My team needs agent handoff",
      solution: "Human Handoff",
      description: "Seamless transition to live support",
      href: "/docs/handoff",
    },
    {
      problem: "I need agents to know my business",
      solution: "Knowledge Base",
      description: "Train agents with your data",
      href: "/product/data",
    },
  ];

  const faqGroups = [
    {
      category: "Getting Started",
      faqs: [
        {
          q: "How quickly can I launch my first agent?",
          a: "Most users launch their first agent in under 15 minutes using our templates. You can connect channels and start conversations the same day.",
        },
        {
          q: "Do I need coding experience?",
          a: "No. SMB Flow is completely no-code. Build flows visually, customize agents with plain language, and deploy with one click.",
        },
        {
          q: "Can I try before committing?",
          a: "Yes. Start with our free plan - no credit card required. Test agents, connect channels, and see results before upgrading.",
        },
      ],
    },
    {
      category: "Channels & Messaging",
      faqs: [
        {
          q: "Which channels can I connect?",
          a: "Web chat, WhatsApp, Instagram, SMS, Email, and Voice. All channels work together in one unified inbox.",
        },
        {
          q: "How do I connect WhatsApp Business?",
          a: "Follow our 3-step guide: verify your business, connect your number, and test. Takes about 10 minutes total.",
        },
        {
          q: "Can one agent work across all channels?",
          a: "Absolutely. Build once, deploy everywhere. Your agent maintains conversation context across channels.",
        },
      ],
    },
    {
      category: "Agents & Automation",
      faqs: [
        {
          q: "What can agents actually do?",
          a: "Answer questions, book appointments, process orders, qualify leads, send follow-ups, and hand off to humans when needed.",
        },
        {
          q: "How do I train an agent?",
          a: "Upload your FAQs, product info, or website content. Agents learn from your knowledge base and improve over time.",
        },
        {
          q: "Can agents work 24/7?",
          a: "Yes. Agents never sleep. They handle conversations, bookings, and tasks around the clock, even on weekends.",
        },
      ],
    },
    {
      category: "Billing & Access",
      faqs: [
        {
          q: "What's included in the free plan?",
          a: "100 conversations/month, 1 agent, 2 channels, and core features. Perfect for testing and small businesses.",
        },
        {
          q: "Can I upgrade or downgrade anytime?",
          a: "Yes. Change plans instantly. Upgrades take effect immediately. Downgrades apply at the next billing cycle.",
        },
        {
          q: "Do you offer refunds?",
          a: "We offer a 14-day money-back guarantee on annual plans. Monthly plans are non-refundable but can be cancelled anytime.",
        },
      ],
    },
    {
      category: "Security & Privacy",
      faqs: [
        {
          q: "How is customer data protected?",
          a: "All data is encrypted at rest and in transit. We're SOC 2 compliant and never share your data with third parties.",
        },
        {
          q: "Where are conversations stored?",
          a: "Data is stored in secure, enterprise-grade cloud servers with automatic backups and 99.9% uptime guarantee.",
        },
        {
          q: "Can I export my data?",
          a: "Yes. Export conversations, analytics, and agent configs anytime. Your data is always yours.",
        },
      ],
    },
  ];

  const searchSuggestions = [
    "How to connect WhatsApp",
    "Create a booking agent",
    "Multi-channel setup",
    "Agent handoff to humans",
    "Analytics dashboard",
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-16">
        {/* Animated Flow Dots */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `-10%`,
              }}
              animate={{
                x: ["0vw", "110vw"],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="relative w-full px-8 lg:px-16 xl:px-24 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-800 mb-4"
          >
            Help, Without the Headache.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[18px] text-gray-600 mb-12"
          >
            Everything you need to build, connect, and scale agents —
            explained simply.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search flows, agents, channels, setup…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 bg-white shadow-lg focus:border-purple-400 focus:outline-none transition-all text-[16px]"
              />
            </div>

            {/* Search Suggestions */}
            {searchFocused && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200 shadow-xl p-2 z-10"
              >
                {searchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors text-[14px] text-gray-700"
                  >
                    <Search className="inline w-4 h-4 mr-2 text-gray-400" />
                    {suggestion}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Help Actions */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={action.href}
                  className="block group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-transparent transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 12px 40px ${action.color}20`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.04)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: `${action.color}15`,
                    }}
                  >
                    <action.icon
                      className="w-7 h-7"
                      style={{ color: action.color }}
                    />
                  </div>
                  <h3 className="text-[20px] text-gray-800 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-[15px] text-gray-600">
                    {action.description}
                  </p>
                  <ChevronRight className="absolute top-8 right-8 w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help by Product Area */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-3">Browse by Product Area</h2>
            <p className="text-[16px] text-gray-600">
              Jump directly to what you need help with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={area.href}
                  className="block group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                  style={{
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.03)";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${area.color}15`,
                      }}
                    >
                      <area.icon
                        className="w-6 h-6"
                        style={{ color: area.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[16px] text-gray-800 mb-1">
                        {area.title}
                      </h3>
                      <p className="text-[14px] text-gray-600">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guides */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-gray-800 mb-3">Guided Walkthroughs</h2>
            <p className="text-[16px] text-gray-600">
              Follow along and build something real
            </p>
          </motion.div>

          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-6 min-w-max">
              {guidedWalkthroughs.map((guide, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="w-[380px]"
                >
                  <Link
                    to={guide.href}
                    className="block group bg-white rounded-3xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                    style={{
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 12px 40px rgba(155, 81, 224, 0.15)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 20px rgba(0, 0, 0, 0.04)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[12px]">
                        {guide.steps} steps
                      </div>
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="text-[18px] text-gray-800 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-[14px] text-gray-600 mb-4">
                      {guide.description}
                    </p>

                    {/* Mini Progress Indicator */}
                    <div className="flex gap-1">
                      {[...Array(guide.steps)].map((_, i) => (
                        <div
                          key={i}
                          className="h-1 flex-1 rounded-full bg-gray-200 group-hover:bg-purple-300 transition-colors"
                          style={{
                            transitionDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Based Help */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-3">
              What Are You Trying to Do?
            </h2>
            <p className="text-[16px] text-gray-600">
              We'll help you get there
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {problemSolutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="block group bg-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                  style={{
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(155, 81, 224, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-1">
                      <div className="text-[14px] text-gray-500 mb-2 uppercase tracking-wide">
                        Your Goal
                      </div>
                      <p className="text-[18px] text-gray-800 mb-4">
                        "{item.problem}"
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-6" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="text-[14px] text-purple-600 mb-2">
                      ✨ {item.solution}
                    </div>
                    <p className="text-[14px] text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[16px] text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIndex * 0.1 }}
              >
                <h3 className="text-[20px] text-gray-800 mb-4">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.faqs.map((faq, faqIndex) => {
                    const globalIndex = groupIndex * 100 + faqIndex;
                    const isExpanded = expandedFaq === globalIndex;

                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedFaq(
                              isExpanded ? null : globalIndex,
                            )
                          }
                          className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-[16px] text-gray-800 pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-5 text-[15px] text-gray-600 border-t border-gray-100"
                          >
                            <div className="pt-4">{faq.a}</div>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gray-800 mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-[16px] text-gray-600 mb-8">
              We're here to help you succeed
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/contact"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(47, 128, 237, 0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Mail className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="text-[16px] text-gray-800 mb-2">
                  Contact Support
                </h3>
                <p className="text-[14px] text-gray-600">
                  Get help from our team
                </p>
              </Link>

              <Link
                to="/community"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(155, 81, 224, 0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Users className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <h3 className="text-[16px] text-gray-800 mb-2">
                  Visit Community
                </h3>
                <p className="text-[14px] text-gray-600">
                  Learn from other users
                </p>
              </Link>

              <Link
                to="/book-demo"
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-pink-300 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(236, 72, 153, 0.15)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <BookOpen className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="text-[16px] text-gray-800 mb-2">
                  Book a Walkthrough
                </h3>
                <p className="text-[14px] text-gray-600">
                  See it in action with us
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}