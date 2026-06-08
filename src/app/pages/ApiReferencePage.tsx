import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import {
  Bot,
  Workflow,
  Globe,
  Database,
  BarChart3,
  Shield,
  Key,
  Code,
  Send,
  Webhook,
  Zap,
  Clock,
  CheckCircle,
  Copy,
  ExternalLink,
  ArrowRight,
  Lock,
  RefreshCw,
  Eye,
  Mail,
  MessageSquare,
  Phone,
  FileText,
  Download,
  HelpCircle,
  Terminal,
  Package,
} from "lucide-react";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export default function ApiReferencePage() {
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText("YOUR_API_KEY");
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const apiCapabilities = [
    {
      icon: Bot,
      title: "Agents API",
      description: "Create, update, deploy, and manage AI agents",
      color: "#2F80ED",
    },
    {
      icon: Workflow,
      title: "Workflow API",
      description: "Trigger flows, pass data, control execution",
      color: "#9B51E0",
    },
    {
      icon: Globe,
      title: "Channels API",
      description: "Send and receive messages across WhatsApp, Email, SMS, Web, Voice",
      color: "#EB5757",
    },
    {
      icon: Database,
      title: "Data & Knowledge API",
      description: "Push datasets, sync knowledge, query connected sources",
      color: "#F2C94C",
    },
    {
      icon: BarChart3,
      title: "Analytics API",
      description: "Fetch metrics, logs, delivery status, and performance data",
      color: "#F2994A",
    },
    {
      icon: Shield,
      title: "Auth & Security",
      description: "API keys, scopes, rate limits, audit logs",
      color: "#2F80ED",
    },
  ];

  const authFeatures = [
    {
      icon: Key,
      title: "API Key–based authentication",
    },
    {
      icon: RefreshCw,
      title: "Environment separation (Test / Live)",
    },
    {
      icon: Lock,
      title: "Scoped permissions per key",
    },
    {
      icon: Eye,
      title: "Key rotation & revocation",
    },
  ];

  const apiEndpoints = [
    {
      name: "Agents",
      actions: ["Create agent", "Update config", "Deploy", "Delete"],
    },
    {
      name: "Workflows",
      actions: ["Trigger workflow", "Pass variables", "Get status", "Cancel execution"],
    },
    {
      name: "Channels",
      actions: ["Connect channel", "Update settings", "Get channel list"],
    },
    {
      name: "Messages",
      actions: ["Send message", "Get history", "Track delivery", "Get inbox"],
    },
    {
      name: "Data Sources",
      actions: ["Upload data", "Sync knowledge", "Query sources", "Delete"],
    },
    {
      name: "Analytics",
      actions: ["Fetch metrics", "Get logs", "Export reports", "Track events"],
    },
    {
      name: "Webhooks",
      actions: ["Create webhook", "Update endpoint", "Test delivery", "Delete"],
    },
  ];

  const webhookEvents = [
    "message.delivered",
    "agent.triggered",
    "workflow.completed",
    "error.occurred",
  ];

  const reliabilityFeatures = [
    {
      icon: Zap,
      title: "High Throughput",
      description: "Designed for millions of messages",
    },
    {
      icon: Clock,
      title: "Rate Limits",
      description: "Fair usage with scalable tiers",
    },
    {
      icon: CheckCircle,
      title: "Uptime",
      description: "Enterprise-grade reliability",
    },
  ];

  const developerTools = [
    {
      icon: Download,
      title: "Postman Collection",
      description: "Import and test all endpoints",
      href: "#",
    },
    {
      icon: Package,
      title: "SDKs",
      description: "Coming Soon",
      href: "#",
      badge: "Soon",
    },
    {
      icon: FileText,
      title: "Error Reference",
      description: "Complete error code documentation",
      href: "#",
    },
    {
      icon: HelpCircle,
      title: "Support Access",
      description: "Developer support team",
      href: "/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="w-full px-8 lg:px-16 xl:px-24 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-800 mb-4"
          >
            API Reference
          </motion.h1>

          {/* Gradient underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] w-48 mx-auto mb-8"
            style={{
              background:
                "linear-gradient(90deg, #2F80ED 0%, #9B51E0 33%, #EB5757 66%, #F2C94C 100%)",
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[20px] text-gray-700 mb-3"
          >
            Build, control, and scale SMB Flow programmatically.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] text-gray-500 mb-10"
          >
            Secure APIs to create agents, trigger workflows, send messages,
            manage data, and monitor activity across channels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <Button 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-xl"
              onClick={() => toast.info("Coming soon!")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open API Docs
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-6 rounded-xl"
              onClick={() => toast.info("Coming soon!")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>

      {/* API Capabilities Overview */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
                style={{
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(0, 0, 0, 0.03)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${capability.color}15, ${capability.color}05)`,
                  }}
                >
                  <capability.icon
                    className="w-6 h-6"
                    style={{ color: capability.color }}
                  />
                </div>
                <h3 className="text-[17px] text-gray-800 mb-2">
                  {capability.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-gray-800 mb-2">Authentication & Access</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {authFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-[15px] text-gray-700">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right: Code Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-500" />
                    <span className="text-[13px] text-gray-600">
                      Authentication Header
                    </span>
                  </div>
                  <button
                    onClick={handleCopyKey}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 transition-colors text-[13px] text-gray-600"
                  >
                    {copiedKey ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="text-[14px] text-gray-800 font-mono">
                  <code>Authorization: Bearer YOUR_API_KEY</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core API Structure */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-2">How the API Is Organized</h2>
            <p className="text-[15px] text-gray-600">
              Clean, predictable endpoints for every operation
            </p>
          </motion.div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                  <div className="flex items-center">
                    <h3 className="text-[16px] text-gray-800">
                      {endpoint.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {endpoint.actions.map((action, actionIndex) => (
                      <span
                        key={actionIndex}
                        className="px-4 py-2 rounded-lg bg-gray-50 text-[13px] text-gray-700 border border-gray-200"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks & Events */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-2">
              Real-Time Events with Webhooks
            </h2>
            <p className="text-[15px] text-gray-600">
              Get notified instantly when events happen
            </p>
          </motion.div>

          {/* Webhook Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F80ED15, #9B51E015)",
                  }}
                >
                  <Bot className="w-12 h-12 text-purple-600" />
                </div>
                <p className="text-[14px] text-gray-700">SMB Flow</p>
              </div>

              <div className="relative flex-1 max-w-[200px]">
                <div className="h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 relative">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"
                    animate={{
                      x: [0, 200, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <p className="text-[13px] text-gray-500 text-center mt-2">
                  Event
                </p>
              </div>

              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #EB575715, #F2994A15)",
                  }}
                >
                  <Terminal className="w-12 h-12 text-orange-600" />
                </div>
                <p className="text-[14px] text-gray-700">Your Server</p>
              </div>
            </div>
          </motion.div>

          {/* Event Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {webhookEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200"
              >
                <Webhook className="w-5 h-5 text-gray-500 mx-auto mb-2" />
                <p className="text-[13px] text-gray-700 font-mono">
                  {event}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rate Limits & Reliability */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reliabilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-[17px] text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools & Support */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-800 mb-2">
              Built for Developers, Backed by Support
            </h2>
            <p className="text-[15px] text-gray-600">
              Everything you need to integrate and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {developerTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={tool.href}
                  className="block bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 group relative"
                  style={{
                    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0, 0, 0, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0, 0, 0, 0.03)";
                  }}
                >
                  {tool.badge && (
                    <span className="absolute top-4 right-4 px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px]">
                      {tool.badge}
                    </span>
                  )}
                  <tool.icon className="w-8 h-8 text-gray-700 mb-4" />
                  <h3 className="text-[16px] text-gray-800 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-[13px] text-gray-600">
                    {tool.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-xl">
              <ExternalLink className="w-4 h-4 mr-2" />
              Open API Docs
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-6 rounded-xl"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[15px] text-gray-600 mb-6">
              Prefer no-code? You don't need the API to build powerful
              agents.
            </p>
            <Link to="/product/flow-builder">
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-6 rounded-xl"
              >
                <Workflow className="w-4 h-4 mr-2" />
                Explore Flow Builder
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}