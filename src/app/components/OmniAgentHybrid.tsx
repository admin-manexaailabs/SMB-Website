import { motion } from "motion/react";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  ArrowRight,
  Play,
  Sparkles,
  MessageCircle,
  Mail,
  Globe,
  CheckCircle,
  Users,
  Zap,
  BarChart3,
  Network,
  Database,
  Eye,
  Phone,
  Instagram,
  Smartphone,
  Clock,
  TrendingUp,
  Shield,
  Star,
  Code2,
  Box,
  FileText,
  Bell,
  Workflow,
  Layers,
  Bot,
  Send,
  BookOpen,
  UserPlus,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  Settings,
  Briefcase,
  DollarSign,
  Headphones,
  Code,
  Target,
  LayoutGrid,
  Palette,
  Award,
  ChevronLeft,
  Building2,
  GraduationCap,
  Dumbbell,
  Scale,
  HeartPulse,
  Truck,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import TechnicalOverviewButton from "./TechnicalOverviewButton";
import NavigationWithDropdowns from "./NavigationWithDropdowns";
import Footer from "./Footer";
import gmailIcon from "figma:asset/b934c62f9be1fa946e5275b2896c2b9f45f43a6d.png";
import whatsappIcon from "figma:asset/231880b596cafb100ae1f8485ffb9c56cb94eb9c.png";
import messengerIcon from "figma:asset/f8c9a96699d1add886617252b2c5cf6f4a964ae6.png";
import CinematicVoiceAgent from "./CinematicVoiceAgent";

export default function OmniAgentHybrid() {
  return (
    <div
      className="bg-white text-gray-900"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section with Botpress Flow */}
      <HeroSection />

      {/* Omnichannel Deployment from 1st Design */}
      <OmnichannelDeployment />

      {/* Test Your AI Agents Section from Design 2 */}
      <TestAgentsSection />

      {/* AI Voice Agent Section - Cinematic Design */}
      <CinematicVoiceAgent />

      {/* OmniAgent Strengths from 2nd Design */}
      <StrengthsSection />

      {/* KPI Metrics from 4th Design */}
      <KPIMetrics />

      {/* Industry Use Cases from 4th Design */}
      <IndustryUseCases />

      {/* Why SMBs choose SMB Flow from 1st Design */}
      <TrustSection />

      {/* Prebuilt Templates from 2nd Design (with Design 1 dark styling) */}
      <TemplatesSection />

      {/* Testimonials from 3rd Design */}
      <TestimonialsFromDesign3 />

      {/* FAQ from 4th Design */}
      <FAQFromDesign4 />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />

      {/* Technical Overview Button */}
      <TechnicalOverviewButton />
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">
      <div className="w-full px-8 lg:px-16 xl:px-24 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-xl"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                SMB Flow
              </span>
            </Link>
            <div className="hidden lg:flex items-center gap-8 text-sm">
              <Link
                to="/product"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Product
              </Link>
              <Link
                to="/templates"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Templates
              </Link>
              <Link
                to="/channels"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Channels
              </Link>
              <Link
                to="/pricing"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/docs"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Docs
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Login
              </Button>
            </a>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-sm shadow-lg shadow-purple-500/30 rounded-full px-6">
                Start Free
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section with Flow from 3rd Design
function HeroSection() {
  return (
    <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 bg-white overflow-hidden">
      <div className="relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8 leading-tight sm:leading-[1.2] lg:leading-[1.1] tracking-tight text-center"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                <span className="inline-block">
                  Run{" "}
                  <span className="bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#F2994A] bg-clip-text text-transparent">
                    AI Agents, Campaigns, and Scheduling
                  </span>
                </span>
                {" "}
                <span className="bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#F2994A] bg-clip-text text-transparent inline-block">
                  at Massive Scale
                </span>
                <br />
                <span className="inline-block mt-1">
                  Designed for Small Businesses
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-8 lg:mb-12 leading-relaxed px-2">
                Customer agents, campaigns, and smart scheduling
                — built to scale across millions of
                conversations.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-4 lg:mb-6 px-4">
                <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#D93636] to-[#E67E22] hover:opacity-90 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-[#D93636]/30 w-full sm:w-auto">
                    Start Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 hover:text-gray-900 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full w-full sm:w-auto"
                  onClick={() => toast.info("Coming soon!")}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 px-4">
                Launch your first AI agent in minutes — no
                credit card required.
              </p>
            </motion.div>
          </div>

          {/* Flow Animation from 3rd Design */}
          <HeroFlowAnimation />
        </div>
      </div>
    </section>
  );
}

// Hero Flow Animation (from 3rd design)
function HeroFlowAnimation() {
  // Mobile detection - ONLY for mobile changes
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Less than sm breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile gets vertical positions, Desktop keeps original horizontal
  const getMobileNodes = () => ({
    trigger: { x: 103, y: 100 },
    aiAgent: { x: 30, y: 230 },
    routing: { x: 210, y: 230 },
    dataFetch: { x: 103, y: 360 },
    confirm: { x: 103, y: 490 },
    deploy: { x: 103, y: 620 },
  });

  const getDesktopNodes = () => ({
    trigger: { x: 50, y: 180 },
    aiAgent: { x: 280, y: 100 },
    routing: { x: 280, y: 280 },
    dataFetch: { x: 510, y: 180 },
    confirm: { x: 740, y: 180 },
    deploy: { x: 970, y: 180 },
  });

  const [nodes, setNodes] = useState(getDesktopNodes());

  // Update positions when screen size changes
  useEffect(() => {
    setNodes(isMobile ? getMobileNodes() : getDesktopNodes());
  }, [isMobile]);

  const updateNodePosition = (
    nodeId: string,
    x: number,
    y: number,
  ) => {
    setNodes((prev) => ({
      ...prev,
      [nodeId]: { x, y },
    }));
  };

  // Node dimensions - actual rendered size at 1:1 scale
  // With global CSS font-size: 12.8px (80% of 16px), 1rem = 12.8px
  // w-48 = 12rem = 12 * 12.8px = 153.6px actual rendered width
  const NODE_WIDTH = 153.6; // Actual rendered width with 80% base font-size
  
  // Different nodes have different heights based on their content
  // Heights are also affected by the 80% base font size and padding overrides
  const nodeHeights: { [key: string]: number } = {
    trigger: 93,       // Has icons at bottom (~116px * 0.8)
    aiAgent: 77,       // Simpler content (~96px * 0.8)
    routing: 77,       // Simpler content (~96px * 0.8)
    dataFetch: 77,     // Simpler content (~96px * 0.8)
    confirm: 70,       // Minimal content (~88px * 0.8)
    deploy: 93,        // Has icons at bottom (~116px * 0.8)
  };
  
  // Get connection points (right edge, left edge, etc.)
  const getRightEdge = (nodeId: string) => ({
    x: nodes[nodeId].x + NODE_WIDTH,
    y: nodes[nodeId].y + (nodeHeights[nodeId] || 100) / 2,
  });

  const getLeftEdge = (nodeId: string) => ({
    x: nodes[nodeId].x,
    y: nodes[nodeId].y + (nodeHeights[nodeId] || 100) / 2,
  });

  const getTopEdge = (nodeId: string) => ({
    x: nodes[nodeId].x + NODE_WIDTH / 2,
    y: nodes[nodeId].y,
  });

  const getBottomEdge = (nodeId: string) => ({
    x: nodes[nodeId].x + NODE_WIDTH / 2,
    y: nodes[nodeId].y + (nodeHeights[nodeId] || 100),
  });

  // Connection path helper - mobile uses vertical, desktop uses horizontal
  const getConnectionPath = (from: string, to: string) => {
    if (isMobile) {
      // MOBILE: Vertical connections (bottom to top)
      const fromBottom = getBottomEdge(from);
      const toTop = getTopEdge(to);
      return `M ${fromBottom.x} ${fromBottom.y} L ${toTop.x} ${toTop.y}`;
    } else {
      // DESKTOP: Horizontal connections with proper branching logic
      const fromRight = getRightEdge(from);
      const toLeft = getLeftEdge(to);
      
      // Handle branching from trigger node to aiAgent and routing nodes
      if (from === 'trigger' && (to === 'aiAgent' || to === 'routing')) {
        // Create a fork: go right, then branch up/down to reach the target
        const branchX = Math.min(fromRight.x + 50, toLeft.x - 10);
        return `M ${fromRight.x} ${fromRight.y} L ${branchX} ${fromRight.y} L ${branchX} ${toLeft.y} L ${toLeft.x} ${toLeft.y}`;
      } 
      // Handle merging from aiAgent and routing nodes into dataFetch
      else if ((from === 'aiAgent' || from === 'routing') && to === 'dataFetch') {
        // Create a merge: go right, then merge into target
        const mergeX = Math.min(fromRight.x + 60, toLeft.x - 10);
        return `M ${fromRight.x} ${fromRight.y} L ${mergeX} ${fromRight.y} L ${mergeX} ${toLeft.y} L ${toLeft.x} ${toLeft.y}`;
      } 
      // Standard linear connection for other paths
      else {
        const midX = (fromRight.x + toLeft.x) / 2;
        return `M ${fromRight.x} ${fromRight.y} L ${midX} ${fromRight.y} L ${midX} ${toLeft.y} L ${toLeft.x} ${toLeft.y}`;
      }
    }
  };

  return (
    <div className={`relative w-full flex items-center justify-center overflow-hidden ${isMobile ? 'h-[850px]' : 'h-[340px] sm:h-[400px] lg:h-[440px]'}`}>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center"
      ></motion.div>

      {/* Workflow Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative w-full mx-auto origin-top ${isMobile ? 'scale-100' : 'scale-[0.5] sm:scale-[0.65] lg:scale-100'}`}
        style={{
          height: isMobile ? "750px" : "420px",
          maxWidth: isMobile ? "360px" : "1300px",
          marginTop: isMobile ? "80px" : "60px",
          marginLeft: isMobile ? "calc(50% + 3px)" : "auto",
          marginRight: isMobile ? "calc(50% - 3px)" : "auto",
        }}
      >
        {/* SVG Connection Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
        >
          {/* Connection 1: Trigger to AI Agent */}
          <motion.path
            d={getConnectionPath("trigger", "aiAgent")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="0"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <circle r="4" fill="#8b5cf6">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={getConnectionPath("trigger", "aiAgent")}
            />
          </circle>

          {/* Connection 2: Trigger to Routing */}
          <motion.path
            d={getConnectionPath("trigger", "routing")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          <circle r="4" fill="#ec4899">
            <animateMotion
              dur="2.3s"
              repeatCount="indefinite"
              path={getConnectionPath("trigger", "routing")}
            />
          </circle>

          {/* Connection 3: AI Agent to Data Fetch */}
          <motion.path
            d={getConnectionPath("aiAgent", "dataFetch")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />
          <circle r="4" fill="#3b82f6">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              path={getConnectionPath("aiAgent", "dataFetch")}
            />
          </circle>

          {/* Connection 4: Routing to Data Fetch */}
          <motion.path
            d={getConnectionPath("routing", "dataFetch")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
          <circle r="4" fill="#10b981">
            <animateMotion
              dur="2.7s"
              repeatCount="indefinite"
              path={getConnectionPath("routing", "dataFetch")}
            />
          </circle>

          {/* Connection 5: Data Fetch to Confirm */}
          <motion.path
            d={getConnectionPath("dataFetch", "confirm")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          />
          <circle r="4" fill="#a855f7">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={getConnectionPath("dataFetch", "confirm")}
            />
          </circle>

          {/* Connection 6: Confirm to Deploy */}
          <motion.path
            d={getConnectionPath("confirm", "deploy")}
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          />
          <circle r="4" fill="#10b981">
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path={getConnectionPath("confirm", "deploy")}
            />
          </circle>
        </svg>

        {/* Workflow Nodes */}
        <div
          className="relative w-full h-full"
          style={{ zIndex: 10 }}
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center px-4"
            style={{ zIndex: 20 }}
          >
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl mb-2 pt-4 sm:pt-6 lg:pt-8"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              See how it{" "}
              <span className="whitespace-nowrap">
                works in{" "}
                <span className="bg-gradient-to-r from-[#2F80ED] via-[#9B51E0] to-[#F2994A] bg-clip-text text-transparent">
                  Real Time
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Trigger Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "trigger",
                nodes.trigger.x + info.delta.x,
                nodes.trigger.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute cursor-move"
            style={{
              left: nodes.trigger.x,
              top: nodes.trigger.y,
            }}
          >
            <div className="bg-white border-2 border-orange-400 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 1
                  </div>
                  <div className="text-xs font-medium truncate">
                    New message
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-gray-500 mb-2">
                Do you have slots today?
              </div>
              <div className="flex gap-1 flex-wrap items-center">
                {[
                  { src: whatsappIcon, alt: "WhatsApp" },
                  { src: messengerIcon, alt: "Messenger" },
                  { src: gmailIcon, alt: "Gmail" },
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="w-5 h-5 rounded flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                <span className="text-[9px] text-gray-400 ml-1">
                  +more
                </span>
              </div>
            </div>
          </motion.div>

          {/* AI Agent Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "aiAgent",
                nodes.aiAgent.x + info.delta.x,
                nodes.aiAgent.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute cursor-move"
            style={{
              left: nodes.aiAgent.x,
              top: nodes.aiAgent.y,
            }}
          >
            <div className="bg-white border-2 border-purple-500 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 2
                  </div>
                  <div className="text-xs font-medium truncate">
                    Collect Service & Date
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-gray-500">
                Which service & when?
              </div>
            </div>
          </motion.div>

          {/* Routing Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "routing",
                nodes.routing.x + info.delta.x,
                nodes.routing.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute cursor-move"
            style={{
              left: nodes.routing.x,
              top: nodes.routing.y,
            }}
          >
            <div className="bg-white border-2 border-pink-400 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Workflow className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 3
                  </div>
                  <div className="text-xs font-medium truncate">
                    Check Availability
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-gray-500">
                Staff schedule & open slots
              </div>
            </div>
          </motion.div>

          {/* Data Fetch Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "dataFetch",
                nodes.dataFetch.x + info.delta.x,
                nodes.dataFetch.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute cursor-move"
            style={{
              left: nodes.dataFetch.x,
              top: nodes.dataFetch.y,
            }}
          >
            <div className="bg-white border-2 border-blue-400 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 4
                  </div>
                  <div className="text-xs font-medium truncate">
                    Show Slots
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-gray-500">
                2PM, 3:30 PM, 5 PM
              </div>
            </div>
          </motion.div>

          {/* Confirm Appointment Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "confirm",
                nodes.confirm.x + info.delta.x,
                nodes.confirm.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="absolute cursor-move"
            style={{
              left: nodes.confirm.x,
              top: nodes.confirm.y,
            }}
          >
            <div className="bg-white border-2 border-green-400 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 5
                  </div>
                  <div className="text-xs font-medium truncate">
                    Confirm Appointment
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-gray-500">
                User selects
              </div>
            </div>
          </motion.div>

          {/* Deploy to Channels Node */}
          <motion.div
            drag
            dragMomentum={false}
            dragElastic={0}
            onDrag={(e, info) => {
              updateNodePosition(
                "deploy",
                nodes.deploy.x + info.delta.x,
                nodes.deploy.y + info.delta.y,
              );
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute cursor-move"
            style={{
              left: nodes.deploy.x,
              top: nodes.deploy.y,
            }}
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-400 rounded-xl shadow-xl p-3 w-48 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wide">
                    Step 6
                  </div>
                  <div className="text-xs font-medium truncate">
                    Send Confirmation
                  </div>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap items-center">
                {[
                  { src: whatsappIcon, alt: "WhatsApp" },
                  { src: messengerIcon, alt: "Messenger" },
                  { src: gmailIcon, alt: "Gmail" },
                ].map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + i * 0.1 }}
                    className="w-5 h-5 rounded flex items-center justify-center overflow-hidden bg-white"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                <span className="text-[9px] text-gray-400 ml-1">
                  +more
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Subtle Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

// ONE AGENT. EVERY CHANNEL.
function OmnichannelDeployment() {
  return (
    <section id="channels" className="pt-8 pb-16 bg-white">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Channel Grid */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl border-2 border-purple-200 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      desc: "Business messaging",
                      logo: whatsappIcon,
                    },
                    {
                      icon: Phone,
                      label: "Phone Calls (Voice AI)",
                      desc: "Voice automation",
                    },
                    {
                      icon: Smartphone,
                      label: "SMS",
                      desc: "Text messaging",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      desc: "Email automation",
                      logo: gmailIcon,
                    },
                    {
                      icon: Globe,
                      label: "Web Chat",
                      desc: "Website widget",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram DM",
                      desc: "Social messaging",
                      logo: messengerIcon,
                    },
                    {
                      icon: Code2,
                      label: "API Automations",
                      desc: "Custom integrations",
                      span: true,
                    },
                  ].map((channel, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`bg-white border border-purple-200 rounded-xl p-4 hover:shadow-lg transition-all ${channel.span ? "col-span-2" : ""}`}
                    >
                      {channel.logo ? (
                        <img
                          src={channel.logo}
                          alt={channel.label}
                          className="w-6 h-6 mb-3"
                        />
                      ) : (
                        <channel.icon className="w-6 h-6 text-purple-600 mb-3" />
                      )}
                      <div className="text-sm text-gray-900 mb-1 font-medium">
                        {channel.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {channel.desc}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2
                className="text-4xl lg:text-5xl mb-6 text-gray-900"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                One Agent. Every Channel.
              </h2>
              <p className="text-2xl mb-4 text-gray-700">
                Build Once. Deploy Everywhere.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your AI agents automatically adapt to each
                channel's format and rules.
              </p>

              <div className="space-y-4">
                {[
                  "No separate setups.",
                  "No repeated work.",
                  "No developers needed.",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// See Your AI Agent in Action Section
function TestAgentsSection() {
  return (
    <section className="py-32 bg-[#0a0e1a]">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-5xl mb-8 text-white"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                See Your AI Agent in Action
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Watch how an agent handles real customer
                queries:
              </p>

              <div className="space-y-4">
                {[
                  { icon: Eye, text: "Understands the intent" },
                  {
                    icon: Database,
                    text: "Pulls the right data",
                  },
                  { icon: Zap, text: "Executes tasks" },
                  { icon: FileText, text: "Creates tickets" },
                  { icon: Send, text: "Responds instantly" },
                  {
                    icon: Users,
                    text: "Transfers to a human if needed",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-lg text-gray-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-8">
                Switch between demos: › WhatsApp | › Web Chat |
                › Email Automation
              </p>
            </motion.div>

            {/* Right side - Chat Window */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TestChatWindow />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Test Chat Window Component
function TestChatWindow() {
  const [activeChannel, setActiveChannel] = useState(0);

  const channels = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      type: "whatsapp",
      messages: [
        {
          from: "user",
          text: "Hi! When is my order arriving?",
        },
        {
          from: "agent",
          text: "Let me check that for you! Can you share your order number?",
        },
        { from: "user", text: "#12847" },
        {
          from: "agent",
          text: "Your order will arrive tomorrow by 3 PM! 📦",
        },
      ],
    },
    {
      name: "Web Chat",
      icon: Globe,
      type: "webchat",
      messages: [
        { from: "user", text: "Do you offer refunds?" },
        {
          from: "agent",
          text: "Yes! We offer full refunds within 30 days of purchase.",
        },
        {
          from: "user",
          text: "Great, how do I start the process?",
        },
        {
          from: "agent",
          text: "I can help you with that! Please provide your email address.",
        },
      ],
    },
    {
      name: "Email",
      icon: Mail,
      type: "email",
      messages: [
        {
          from: "user",
          text: "I have a question about my subscription plan",
        },
        {
          from: "agent",
          text: "I'd be happy to help! What would you like to know about your subscription?",
        },
        {
          from: "user",
          text: "Can I upgrade to the pro plan?",
        },
        {
          from: "agent",
          text: "Absolutely! You can upgrade anytime. I'll send you the details.",
        },
      ],
    },
  ];

  const currentChannel = channels[activeChannel];

  const nextChannel = () => {
    setActiveChannel((prev) => (prev + 1) % channels.length);
  };

  const prevChannel = () => {
    setActiveChannel(
      (prev) => (prev - 1 + channels.length) % channels.length,
    );
  };

  return (
    <div className="relative">
      {/* Navigation Arrows */}
      <div className="flex items-center justify-between mb-6">
        <motion.button
          onClick={prevChannel}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        {/* Channel Indicator */}
        <div className="flex items-center gap-2">
          <currentChannel.icon className="w-5 h-5 text-gray-400" />
          <span className="text-white text-sm">
            {currentChannel.name}
          </span>
        </div>

        <motion.button
          onClick={nextChannel}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Chat Windows */}
      <div className="relative overflow-hidden">
        <motion.div
          key={activeChannel}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          {currentChannel.type === "whatsapp" && (
            <WhatsAppChat messages={currentChannel.messages} />
          )}
          {currentChannel.type === "webchat" && (
            <WebChat messages={currentChannel.messages} />
          )}
          {currentChannel.type === "email" && (
            <EmailChat messages={currentChannel.messages} />
          )}
        </motion.div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {channels.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveChannel(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeChannel
                ? "w-8 bg-gradient-to-r from-purple-500 to-blue-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// WhatsApp Chat Component
function WhatsAppChat({
  messages,
}: {
  messages: Array<{ from: string; text: string }>;
}) {
  return (
    <div className="bg-[#0D1418] rounded-3xl p-6 shadow-2xl border border-gray-800">
      {/* WhatsApp Header */}
      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div className="flex items-center gap-2 flex-1">
          <div>
            <div className="text-white text-sm">
              Salon AI Agent
            </div>
            <div className="text-xs text-gray-500">Online</div>
          </div>
          <span className="px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-[10px] rounded-full">
            Scheduled + Reminder
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 max-h-[420px] overflow-y-auto">
        {/* Booking Conversation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="flex justify-start"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-[#1F2937] text-gray-200 rounded-tl-none">
            <p className="text-sm">Hi, do you have slots tomorrow?</p>
            <p className="text-xs mt-1 opacity-60">9:15 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-tr-none">
            <p className="text-sm">Sure! What service are you looking for?</p>
            <p className="text-xs mt-1 opacity-60">9:16 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-[#1F2937] text-gray-200 rounded-tl-none">
            <p className="text-sm">Haircut</p>
            <p className="text-xs mt-1 opacity-60">9:17 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-tr-none">
            <p className="text-sm">Available slots: 2 PM, 4 PM. Please confirm.</p>
            <p className="text-xs mt-1 opacity-60">9:18 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-start"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-[#1F2937] text-gray-200 rounded-tl-none">
            <p className="text-sm">2 PM please</p>
            <p className="text-xs mt-1 opacity-60">9:19 AM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[75%] bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-tr-none">
            <p className="text-sm">✅ Booked! Your haircut is confirmed for tomorrow at 2 PM.</p>
            <p className="text-xs mt-1 opacity-60">9:20 AM</p>
          </div>
        </motion.div>

        {/* Time Gap Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center py-2"
        >
          <div className="px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs">
            Next Day - 1:00 PM
          </div>
        </motion.div>

        {/* Reminder Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="flex justify-end"
        >
          <div className="rounded-2xl px-4 py-2.5 max-w-[85%] bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-tr-none">
            <p className="text-sm">Hello 👋</p>
            <p className="text-sm mt-1">You have an appointment tomorrow at 2 PM.</p>
            <p className="text-sm mt-1">Reply YES to confirm or NO to reschedule.</p>
            <p className="text-xs mt-2 opacity-60">1:00 PM</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Web Chat Component
function WebChat({
  messages,
}: {
  messages: Array<{ from: string; text: string }>;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#1a1d2e] rounded-3xl p-6 shadow-2xl border border-purple-500/30">
      {/* Chat Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] rounded-full">
            Support
          </span>
        </div>
        <div className="text-xs text-gray-400">Live Chat</div>
      </div>

      {/* Messages */}
      <div className="space-y-4 max-h-[320px] overflow-y-auto">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex gap-3 ${msg.from === "agent" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-gray-300" />
              </div>
            )}
            <div
              className={`rounded-2xl p-4 max-w-[75%] ${
                msg.from === "agent"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-tr-none"
                  : "bg-gray-800/70 text-gray-100 rounded-tl-none"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
            {msg.from === "agent" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Email Chat Component
function EmailChat({
  messages,
}: {
  messages: Array<{ from: string; text: string }>;
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-200">
      {/* Email Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500">SUBJECT</span>
          <span className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-[10px] rounded-full">
            Campaign
          </span>
        </div>
        <h3 className="text-gray-900 font-medium">
          Special Offer Just for You 🎉
        </h3>
      </div>

      {/* Email Content */}
      <div className="space-y-4 max-h-[320px] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
          className="border-l-2 border-purple-200 pl-4"
        >
          {/* Email Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-sm text-gray-900">
                  Salon Marketing
                </div>
                <div className="text-xs text-gray-500">
                  offers@salon.com
                </div>
              </div>
            </div>
            <span className="text-xs text-gray-400">
              2:00 PM
            </span>
          </div>

          {/* Email Body */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            <p>Dear Customer,</p>
            <p>Enjoy <span className="font-semibold text-purple-600">20% off</span> your next service.</p>
            <p>Book before Friday to redeem.</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-sm hover:shadow-lg transition-shadow">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// SMB Flow Strengths
function StrengthsSection() {
  const strengths = [
    {
      icon: Bot,
      title: "Agentic AI Performance",
      description:
        "Agents reason, plan, and execute multi-step tasks without human input.",
    },
    {
      icon: Workflow,
      title: "Visual No-Code Builder",
      description:
        "Drag-and-drop workflows for prompts, tasks, conditions, and channel routing.",
    },
    {
      icon: Network,
      title: "Multi-Channel Deployment",
      description:
        "Deploy agents across WhatsApp, voice, email, SMS, Instagram DM, and more with a single click.",
    },
    {
      icon: Users,
      title: "Unified Inbox + Human Handoff",
      description:
        "All customer conversations in one place. Seamlessly switch AI → human.",
    },
    {
      icon: Database,
      title: "Knowledge & Data Integrations",
      description:
        "Upload PDFs, connect databases, APIs, Shopify, MySQL, BigQuery, and more.",
    },
    {
      icon: Sparkles,
      title: "Multi-LLM Support",
      description:
        "Choose GPT, Claude, Gemini, or Llama for each agent.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 relative bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              SMB Flow Strengths
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built to automate, assist, and scale your
              business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-xl transition-all">
                  <motion.div
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center mb-6"
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// KPI Metrics
function KPIMetrics() {
  const metrics = [
    {
      value: "93%",
      label: "Task Accuracy",
      description:
        "Agents follow workflows reliably and consistently.",
      gradient: "from-green-500 to-emerald-500",
      chart: [65, 72, 68, 85, 90, 88, 93],
    },
    {
      value: "100%",
      label: "Availability",
      description: "Your AI workforce never sleeps.",
      gradient: "from-blue-500 to-cyan-500",
      chart: [98, 99, 100, 100, 99, 100, 100],
    },
    {
      value: "85%",
      label: "Cost Reduction",
      description:
        "Lower operational load with automation-first workflows.",
      gradient: "from-purple-500 to-pink-500",
      chart: [45, 55, 62, 70, 75, 80, 85],
    },
    {
      value: "60%",
      label: "Faster Ticket Resolution",
      description: "Real-time responses across all channels.",
      gradient: "from-orange-500 to-red-500",
      chart: [30, 40, 45, 50, 55, 58, 60],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-5xl mb-4 tracking-tight"
              style={{ fontWeight: 400 }}
            >
              Improve Operational Efficiency and Reduce Costs
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                {/* Dark UI Preview */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-6 shadow-lg overflow-hidden">
                  <div className="mb-3">
                    <div
                      className={`text-4xl bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-1`}
                      style={{ fontWeight: 400 }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.label}
                    </div>
                  </div>
                  <div className="h-16 flex items-end gap-0.5">
                    {metric.chart.map((value, j) => (
                      <motion.div
                        key={j}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1 + j * 0.05,
                        }}
                        className={`flex-1 bg-gradient-to-t ${metric.gradient} rounded-sm`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-600">
                    <span>Mon</span>
                    <span>Sun</span>
                  </div>
                </div>

                {/* Metric Details */}
                <div className="text-center">
                  <h3
                    className="text-2xl mb-3 tracking-tight"
                    style={{ fontWeight: 400 }}
                  >
                    {metric.label}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontWeight: 300 }}
                  >
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Industry Solutions
function IndustryUseCases() {
  const useCases = [
    {
      title: "Real Estate",
      description: "Lead capture, viewing scheduling, follow-up campaigns.",
      gradient: "from-[#2F80ED]/80 to-[#2F80ED]/50",
      icon: Building2,
      features: ["Lead capture", "Viewing booking", "Follow-up"],
    },
    {
      title: "Healthcare & Clinics",
      description: "Appointment booking, reminders, patient FAQ automation.",
      gradient: "from-[#EB5757]/80 to-[#EB5757]/50",
      icon: HeartPulse,
      features: ["Appointment booking", "Reminders", "Patient FAQ"],
    },
    {
      title: "Education & Coaching",
      description: "Enrollment, fee reminders, class scheduling.",
      gradient: "from-[#9B51E0]/80 to-[#9B51E0]/50",
      icon: GraduationCap,
      features: ["Enrollment", "Scheduling", "Fee reminders"],
    },
    {
      title: "Fitness & Gyms",
      description: "Class booking, membership inquiries, re-engagement.",
      gradient: "from-[#00B5D8]/80 to-[#00B5D8]/50",
      icon: Dumbbell,
      features: ["Class booking", "Membership", "Re-engagement"],
    },
    {
      title: "Legal Services",
      description: "Client intake, consultation booking, document collection.",
      gradient: "from-[#4A5568]/80 to-[#4A5568]/50",
      icon: Scale,
      features: ["Lead intake", "Consultation", "Doc collection"],
    },
    {
      title: "Logistics & Delivery",
      description: "Shipment tracking, dispatch updates, customer notifications.",
      gradient: "from-[#2D3748]/80 to-[#2D3748]/50",
      icon: Truck,
      features: ["Shipment tracking", "Dispatch", "Status updates"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl mb-6 tracking-tight"
              style={{ fontWeight: 400 }}
            >
              One Platform. Tailored for Every Small Business.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                  {/* Top Section - Gradient with Icon and Features */}
                  <div
                    className={`bg-gradient-to-br ${useCase.gradient} p-8 pb-12`}
                  >
                    <div className="flex flex-col items-center">
                      <useCase.icon className="w-16 h-16 text-white mb-6" />
                      <div className="space-y-2 w-full min-h-[120px]">
                        {useCase.features.map((feature, j) => (
                          <div
                            key={j}
                            className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-sm text-center font-medium text-[12px]"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - White Background with Title and Description */}
                  <div className="bg-white p-8 flex-1 flex flex-col">
                    <h3
                      className="text-2xl mb-3 tracking-tight text-gray-900"
                      style={{ fontWeight: 400 }}
                    >
                      {useCase.title}
                    </h3>
                    <p
                      className="text-gray-600 leading-relaxed"
                      style={{ fontWeight: 300 }}
                    >
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Secondary row: also built for (links) */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Also built for:&nbsp;
              <Link to="/solutions/automotive" className="text-[#F2994A] hover:underline">Automotive</Link>
              &nbsp;·&nbsp;
              <Link to="/solutions/financial" className="text-[#27AE60] hover:underline">Financial Services</Link>
              &nbsp;·&nbsp;
              <Link to="/solutions/travel" className="text-[#56CCF2] hover:underline">Travel &amp; Tourism</Link>
              &nbsp;·&nbsp;
              <Link to="/solutions/events" className="text-[#F97316] hover:underline">Event Management</Link>
              &nbsp;·&nbsp;
              <Link to="/solutions/home-services" className="text-[#F2C94C] hover:underline">Home Services</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why SMBs choose SMB Flow
function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-12">
            <h2
              className="text-4xl lg:text-5xl mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Why SMBs choose SMB Flow
            </h2>
            <p className="text-xl text-gray-600">
              Powerful automation, made simple.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "No-code setup",
                desc: "Visual builder anyone can use",
              },
              {
                icon: Clock,
                title: "Launch in minutes",
                desc: "20+ pre-built templates",
              },
              {
                icon: Bot,
                title: "Multi-agent workflows",
                desc: "Complex automation made simple",
              },
              {
                icon: Users,
                title: "Human handoff",
                desc: "Seamless AI → human transfer",
              },
              {
                icon: MessageSquare,
                title: "Unified inbox",
                desc: "All conversations in one place",
              },
              {
                icon: Shield,
                title: "Enterprise security",
                desc: "SOC 2, GDPR, HIPAA compliance",
              },
              {
                icon: TrendingUp,
                title: "Scales with you",
                desc: "From 100 to 100k conversations",
              },
              {
                icon: Database,
                title: "31+ integrations",
                desc: "Works with your existing tools",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg mb-2 font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1759844197486-5b3612c7d534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU0MzQyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="SMB Flow Platform"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pre-Built Templates Section
function TemplatesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const templates = [
    {
      icon: Target,
      title: "Restaurant Order Agent",
      description: "Order automation for cafés & restaurants",
      color: "bg-orange-500",
      iconBg: "from-orange-400 to-orange-600",
    },
    {
      icon: Palette,
      title: "Salon Booking Agent",
      description: "Appointment booking for beauty studios",
      color: "bg-pink-500",
      iconBg: "from-pink-400 to-pink-600",
    },
    {
      icon: Headphones,
      title: "Clinic Scheduling Agent",
      description: "Patient scheduling for healthcare",
      color: "bg-green-500",
      iconBg: "from-green-400 to-green-600",
    },
    {
      icon: Box,
      title: "E-Commerce Order Tracking Agent",
      description: "Order tracking and updates",
      color: "bg-blue-500",
      iconBg: "from-blue-400 to-blue-600",
    },
    {
      icon: Bell,
      title: "Patient Reminder Agent",
      description: "Healthcare appointment reminders",
      color: "bg-cyan-500",
      iconBg: "from-cyan-400 to-cyan-600",
    },
    {
      icon: MessageSquare,
      title: "Follow-Up & Service Reminder Agent",
      description: "Automated re-engagement campaigns",
      color: "bg-purple-500",
      iconBg: "from-purple-400 to-purple-600",
    },
    {
      icon: UserPlus,
      title: "Lead Capture Agent",
      description: "Sales lead qualification",
      color: "bg-indigo-500",
      iconBg: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Phone,
      title: "Voice Appointment Agent",
      description: "Phone call automation",
      color: "bg-teal-500",
      iconBg: "from-teal-400 to-teal-600",
    },
  ];

  const totalSlides = Math.ceil(templates.length / 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + totalSlides) % totalSlides,
    );
  };

  return (
    <section
      id="templates"
      className="py-24 relative bg-[#0a0e1a]"
    >
      <div className="w-full">
        <div className="relative w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl lg:text-5xl mb-4 text-white"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Launch Instantly with Pre-Built Templates
            </h2>
            <p className="text-lg text-gray-400">
              Browse ready-to-use industry templates:
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="relative mb-12">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {templates.map((template, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-shrink-0 w-[calc(25%-18px)] min-w-[280px]"
                    style={{ flex: "0 0 calc(25% - 18px)" }}
                  >
                    <div className="bg-[#1a1f2e] border border-gray-800 rounded-2xl p-8 h-full flex flex-col">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${template.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                      >
                        <template.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-xl mb-3 text-white"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                        }}
                      >
                        {template.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-8 flex-grow">
                        {template.description}
                      </p>

                      {/* Button */}
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-medium">
                        Use Template
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center px-4 gap-6">
            {/* Arrow Navigation */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-lg bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Browse All Templates Link */}
            <Link to="/templates">
              <Button
                variant="outline"
                className="border-gray-600 text-[rgb(0,0,0)] hover:bg-gray-800"
              >
                Browse All Templates →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
function TestimonialsFromDesign3() {
  const testimonials = [
    {
      quote:
        "SMB Flow automated 80% of our support workload across WhatsApp and email.",
      author: "Emily W.",
      role: "Retail Operations",
      rating: "98%",
      color: "from-green-400/20 to-emerald-400/20",
      border: "border-green-400/30",
    },
    {
      quote:
        "We cut appointment call volume by 60% with voice automation.",
      author: "Sarah M.",
      role: "Clinic Owner",
      rating: "96%",
      color: "from-blue-400/20 to-cyan-400/20",
      border: "border-blue-400/30",
    },
    {
      quote:
        "Reservations and orders run themselves now. Our team focuses only on customers.",
      author: "Rohan P.",
      role: "Restaurant Manager",
      rating: "97%",
      color: "from-orange-400/20 to-red-400/20",
      border: "border-orange-400/30",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl lg:text-6xl text-gray-900 mb-4"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Trusted by businesses across the world.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${testimonial.color} border ${testimonial.border} rounded-2xl p-8`}
              >
                <div className="text-4xl text-gray-900 mb-6">
                  {testimonial.rating}
                  <span className="text-lg text-gray-600 ml-2">
                    satisfaction
                  </span>
                </div>
                <p className="text-gray-800 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="text-gray-900 font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ
function FAQFromDesign4() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  const faqs = [
    {
      question: "What is SMB Flow?",
      answer:
        "A no-code agentic AI platform that automates customer service, workflows, bookings, and operations across all channels.",
    },
    {
      question: "Do I need coding skills?",
      answer:
        "No. Everything works through visual builders and ready-made templates.",
    },
    {
      question: "Which channels do you support?",
      answer:
        "WhatsApp, phone calls, SMS, email, web chat, Instagram DM, and custom API channels.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes — enterprise-grade security, isolated runtime, encryption, and GDPR compliance.",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="w-full">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl mb-6 tracking-tight"
              style={{ fontWeight: 300 }}
            >
              <span style={{ fontWeight: 400 }}>
                Frequently Asked Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span
                    className="text-lg pr-4"
                    style={{ fontWeight: 300 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-8 pb-6 text-gray-600 border-t border-gray-100">
                    <p
                      className="pt-6 leading-relaxed"
                      style={{ fontWeight: 300 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Background Wave Animation - adapted for white background */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z"
            fill="url(#ctaGradient)"
            opacity="0.15"
            animate={{
              d: [
                "M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z",
                "M 0 200 Q 250 300, 500 200 T 1000 200 L 1000 400 L 0 400 Z",
                "M 0 200 Q 250 100, 500 200 T 1000 200 L 1000 400 L 0 400 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="ctaGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#7D4DFF" />
              <stop offset="100%" stopColor="#5ECFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-6xl mb-8 text-gray-900"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Build Your First AI Agent
            <br />
            in Minutes — No Code Required
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-lg px-10 rounded-full shadow-xl text-white"
              >
                Start Free →
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50 text-lg px-10 rounded-full text-gray-900"
              onClick={() => toast.info("Coming soon!")}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo →
            </Button>
          </div>

          <p className="text-gray-600">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>

      {/* Floating AI Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg opacity-20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}