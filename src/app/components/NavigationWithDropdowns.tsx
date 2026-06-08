import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Bot,
  Workflow,
  Globe,
  MessageSquare,
  Phone,
  Plug,
  ChevronDown,
  ArrowRight,
  Calendar,
  ShoppingCart,
  RefreshCw,
  Mail,
  Megaphone,
  Database,
  Shield,
  BookOpen,
  Code,
  GraduationCap,
  FileText,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  Inbox,
  Layers,
  PhoneCall,
  Network,
  MessageCircle,
  Menu,
  X,
  Cloud,
} from "lucide-react";
import { Button } from "./ui/button";
import productFeatureImg from "figma:asset/26454d55968321dae88fd5f99cb002bb2648d869.png";
import agentsFeatureImg from "figma:asset/6940b3835578326b9b38535e80c40f19c13978aa.png";
import solutionsFeatureImg from "figma:asset/f300b80a367d934ae53f26e18a62f1d1012de9be.png";
import templatesFeatureImg from "figma:asset/532c53d8e1728ef3b3df4b7ff8d40742fd8edaca.png";
import resourcesFeatureImg from "figma:asset/407ad7354770e39fba7c0fff9793c1b8bce734b4.png";
import logoImg from "figma:asset/7b58b3b2864a86d8b403242e8c7134fb79e16e15.png";

export default function NavigationWithDropdowns() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<
    string | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const productButtonRef = useRef<HTMLDivElement>(null);
  const agentsButtonRef = useRef<HTMLDivElement>(null);
  const solutionsButtonRef = useRef<HTMLDivElement>(null);
  const templatesButtonRef = useRef<HTMLDivElement>(null);
  const resourcesButtonRef = useRef<HTMLDivElement>(null);

  // Helper function to check if a link is active
  const isLinkActive = (href: string) => {
    return location.pathname === href;
  };

  // Helper function to check if any dropdown item is active
  const isDropdownActive = (category: string) => {
    return location.pathname.startsWith(`/${category}`);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    dropdownName: string,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveDropdown(
        activeDropdown === dropdownName ? null : dropdownName,
      );
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#E6E8EC]">
        <div className="w-full px-8 lg:px-16 xl:px-24 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="SMB Flow Logo"
                className="h-15 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Product Dropdown */}
              <div
                ref={productButtonRef}
                className="relative"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-[15px] text-[#1F2937] hover:text-[#2F80ED] transition-colors"
                  onFocus={() => setActiveDropdown("product")}
                  onKeyDown={(e) => handleKeyDown(e, "product")}
                  aria-expanded={activeDropdown === "product"}
                  aria-haspopup="true"
                >
                  Product
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "product" && (
                    <ProductDropdown
                      buttonRef={productButtonRef}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Agents Dropdown */}
              <div
                ref={agentsButtonRef}
                className="relative"
                onMouseEnter={() => setActiveDropdown("agents")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] text-[#1F2937] hover:text-[#2F80ED] transition-colors">
                  Agents
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "agents" && (
                    <AgentsDropdown
                      buttonRef={agentsButtonRef}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Dropdown */}
              <div
                ref={solutionsButtonRef}
                className="relative"
                onMouseEnter={() =>
                  setActiveDropdown("solutions")
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] text-[#1F2937] hover:text-[#2F80ED] transition-colors">
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "solutions" && (
                    <SolutionsDropdown
                      buttonRef={solutionsButtonRef}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Templates Dropdown */}
              <div
                ref={templatesButtonRef}
                className="relative"
                onMouseEnter={() =>
                  setActiveDropdown("templates")
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] text-[#1F2937] hover:text-[#2F80ED] transition-colors">
                  Templates
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "templates" && (
                    <TemplatesDropdown
                      buttonRef={templatesButtonRef}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* About Us - No Dropdown */}
              <Link
                to="/about"
                className={`text-[15px] transition-colors ${
                  location.pathname === "/about"
                    ? "text-[#2F80ED] font-semibold"
                    : "text-[#1F2937] hover:text-[#2F80ED]"
                }`}
              >
                About Us
              </Link>

              {/* Pricing - No Dropdown */}
              <Link
                to="/pricing"
                className={`text-[15px] transition-colors ${
                  location.pathname === "/pricing"
                    ? "text-[#2F80ED] font-semibold"
                    : "text-[#1F2937] hover:text-[#2F80ED]"
                }`}
              >
                Pricing
              </Link>

              {/* Resources Dropdown */}
              <div
                ref={resourcesButtonRef}
                className="relative"
                onMouseEnter={() =>
                  setActiveDropdown("resources")
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-[15px] text-[#1F2937] hover:text-[#2F80ED] transition-colors">
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "resources" && (
                    <ResourcesDropdown
                      buttonRef={resourcesButtonRef}
                      onClose={() => setActiveDropdown(null)}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button
                  variant="ghost"
                  className="text-[15px] hover:opacity-80 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #EB5757 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: "700",
                  }}
                >
                  Login
                </Button>
              </a>
              <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
                <Button
                  className="bg-[#2F80ED] hover:bg-[#2F80ED]/90 text-white text-[13px] shadow-lg shadow-[#2F80ED]/20 rounded-full px-6"
                  style={{
                    background:
                      "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
                  }}
                >
                  Start Free
                </Button>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel - Outside nav for proper z-index stacking */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 h-full w-[85%] max-w-md bg-white z-[9999] shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex-shrink-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <img
                  src={logoImg}
                  alt="SMB Flow Logo"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {/* Product Section */}
                <MobileMenuAccordion
                  title="Product"
                  isExpanded={expandedMobileMenu === "product"}
                  onToggle={() => setExpandedMobileMenu(expandedMobileMenu === "product" ? null : "product")}
                  links={[
                    { icon: Workflow, label: "Flow Builder", href: "/product/flow-builder" },
                    { icon: Bot, label: "AI Agents", href: "/product/agents" },
                    { icon: Globe, label: "Channels", href: "/product/channels" },
                    { icon: Inbox, label: "Unified Inbox", href: "/product/inbox" },
                    { icon: Database, label: "Data & Knowledge", href: "/product/data" },
                    { icon: Plug, label: "Integrations", href: "/product/integrations" },
                    { icon: Layers, label: "Models", href: "/product/models" },
                    { icon: Shield, label: "Security", href: "/product/security" },
                    { icon: BarChart3, label: "Analytics", href: "/product/analytics" },
                    { icon: Network, label: "API Access", href: "/product/api" },
                  ]}
                  onLinkClick={() => setMobileMenuOpen(false)}
                />

                {/* Agents Section */}
                <MobileMenuAccordion
                  title="Agents"
                  isExpanded={expandedMobileMenu === "agents"}
                  onToggle={() => setExpandedMobileMenu(expandedMobileMenu === "agents" ? null : "agents")}
                  links={[
                    { icon: MessageSquare, label: "Chat Agents", href: "/agents/chat" },
                    { icon: PhoneCall, label: "Voice Agents", href: "/agents/voice" },
                    { icon: Mail, label: "Email Agents", href: "/agents/email" },
                    { icon: MessageCircle, label: "WhatsApp Agents", href: "/agents/whatsapp" },
                    { icon: Zap, label: "Automation Agents", href: "/agents/automation" },
                    { icon: Users, label: "Support Agents", href: "/agents/support" },
                    { icon: Code, label: "Custom Agents", href: "/agents/custom" },
                  ]}
                  onLinkClick={() => setMobileMenuOpen(false)}
                />

                {/* Solutions Section */}
                <MobileMenuAccordion
                  title="Solutions"
                  isExpanded={expandedMobileMenu === "solutions"}
                  onToggle={() => setExpandedMobileMenu(expandedMobileMenu === "solutions" ? null : "solutions")}
                  links={[
                    { icon: Calendar, label: "Booking & Scheduling", href: "/solutions/booking" },
                    { icon: ShoppingCart, label: "Order Management", href: "/solutions/order" },
                    { icon: Users, label: "Customer Support", href: "/solutions/support" },
                    { icon: Zap, label: "Lead Capture", href: "/solutions/leads" },
                    { icon: CheckCircle, label: "Restaurants", href: "/solutions/restaurants" },
                    { icon: Megaphone, label: "Salons & Spas", href: "/solutions/salons" },
                    { icon: Phone, label: "Healthcare", href: "/solutions/healthcare" },
                    { icon: ShoppingCart, label: "E-Commerce", href: "/solutions/ecommerce" },
                  ]}
                  onLinkClick={() => setMobileMenuOpen(false)}
                />

                {/* Templates Section */}
                <div>
                  <button
                    className="flex items-center justify-between py-3.5 px-4 text-gray-900 hover:bg-[#F6F0FF] rounded-lg transition-colors text-base w-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    onClick={() => setExpandedMobileMenu(expandedMobileMenu === "templates" ? null : "templates")}
                  >
                    <span className="font-medium">Templates</span>
                    <ChevronDown
                      className="w-4 h-4"
                      style={{
                        transform: expandedMobileMenu === "templates" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                  {expandedMobileMenu === "templates" && (
                    <div className="space-y-2 pl-2">
                      {[
                        { icon: Calendar, label: "Booking Agent" },
                        { icon: ShoppingCart, label: "Order Assistant" },
                        { icon: Users, label: "Support Agent" },
                        { icon: Mail, label: "Email Agent" },
                        { icon: PhoneCall, label: "Voice Agent" },
                        { icon: MessageSquare, label: "Chat Agent" },
                        { icon: Zap, label: "Lead Capture" },
                        { icon: BarChart3, label: "Analytics" },
                        { icon: Workflow, label: "Custom Workflows" },
                        { icon: RefreshCw, label: "Follow-Up Agent" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-2.5 rounded-lg cursor-default"
                        >
                          <item.icon
                            className="w-[18px] h-[18px] text-gray-400 flex-shrink-0"
                            strokeWidth={1.5}
                          />
                          <span
                            className="text-[14px] text-[#1A1A1A]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {item.label}
                          </span>
                        </div>
                      ))}
                      
                      {/* Explore All Templates Button */}
                      <div className="pt-2 mt-2 border-t border-gray-200">
                        <Link
                          to="/templates"
                          className="flex items-center gap-2 p-2.5 rounded-lg transition-all group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ArrowRight
                            className="w-[18px] h-[18px] text-[#2F80ED] transition-transform group-hover:translate-x-1"
                            strokeWidth={1.5}
                          />
                          <span
                            className="text-[14px] text-[#2F80ED] font-semibold"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            Explore All Templates
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* About Us Link */}
                <Link
                  to="/about"
                  className={`flex items-center justify-between py-3.5 px-4 rounded-lg transition-colors text-base w-full ${
                    location.pathname === "/about"
                      ? "bg-[#F6F0FF] text-[#2F80ED] font-semibold"
                      : "text-gray-900 hover:bg-[#F6F0FF]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">About Us</span>
                </Link>

                {/* Pricing Link */}
                <Link
                  to="/pricing"
                  className={`flex items-center justify-between py-3.5 px-4 rounded-lg transition-colors text-base w-full ${
                    location.pathname === "/pricing"
                      ? "bg-[#F6F0FF] text-[#2F80ED] font-semibold"
                      : "text-gray-900 hover:bg-[#F6F0FF]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="font-medium">Pricing</span>
                </Link>

                {/* Resources Section */}
                <MobileMenuAccordion
                  title="Resources"
                  isExpanded={expandedMobileMenu === "resources"}
                  onToggle={() => setExpandedMobileMenu(expandedMobileMenu === "resources" ? null : "resources")}
                  links={[
                    { icon: BookOpen, label: "Blog", href: "/blogs" },
                    { icon: FileText, label: "Case Studies", href: "/case-studies" },
                    { icon: GraduationCap, label: "Help Center", href: "/help-center" },
                    { icon: Code, label: "API Reference", href: "/api-reference" },
                    { icon: Mail, label: "Contact Us", href: "/contact" },
                  ]}
                  onLinkClick={() => setMobileMenuOpen(false)}
                />

                {/* Divider */}
                <div className="border-t border-gray-200 my-4" />

                {/* Mobile CTAs */}
                <div className="space-y-3 pb-4">
                  <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      className="w-full text-[15px] border-2"
                      style={{
                        borderColor: "#2F80ED",
                        color: "#2F80ED",
                      }}
                    >
                      Login
                    </Button>
                  </a>
                  <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      className="w-full text-[15px] shadow-lg text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
                      }}
                    >
                      Start Free
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Product Dropdown Component
function ProductDropdown({
  buttonRef,
  onClose,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const mainLinks = [
    {
      icon: Workflow,
      label: "Flow Builder",
      href: "/product/flow-builder",
    },
    { icon: Bot, label: "AI Agents", href: "/product/agents" },
    {
      icon: Globe,
      label: "Channels",
      href: "/product/channels",
    },
    {
      icon: Inbox,
      label: "Unified Inbox",
      href: "/product/inbox",
    },
    {
      icon: Database,
      label: "Data & Knowledge",
      href: "/product/data",
    },
    {
      icon: Plug,
      label: "Integrations",
      href: "/product/integrations",
    },
  ];

  const secondaryLinks = [
    { icon: Layers, label: "Models", href: "/product/models" },
    {
      icon: Shield,
      label: "Security",
      href: "/product/security",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/product/analytics",
    },
    {
      icon: Network,
      label: "API Access",
      href: "/product/api",
    },
    {
      icon: Cloud,
      label: "Deployment",
      href: "/product/deployment",
    },
  ];

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed mt-2 w-[920px] bg-white rounded-[18px] border border-[#E7E7E7] overflow-hidden max-[880px]:w-[calc(100vw-48px)] left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
        top: buttonRef.current
          ? buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY
          : 0,
        maxHeight: "65vh",
      }}
      role="menu"
      aria-label="Product menu"
    >
      <div
        className="p-8 max-h-[65vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E7E7E7 transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_300px] gap-8 max-[880px]:grid-cols-1">
          {/* Left: Dual Column Menu Items */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-[880px]:grid-cols-1">
            {/* First Column */}
            <div className="space-y-1">
              {mainLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    ref={index === 0 ? firstLinkRef : null}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#2F80ED]"
                          : "text-[#9CA3AF] group-hover:text-[#2F80ED]"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#2F80ED] font-semibold"
                          : "text-[#1F2937] group-hover:text-[#2F80ED]"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Second Column */}
            <div className="space-y-1">
              {secondaryLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#9B51E0]"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#9B51E0] font-semibold"
                          : "text-[#1A1A1A] group-hover:text-purple-600"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Featured Card */}
          <div className="max-[880px]:hidden">
            <div
              className="text-[11px] text-[#5A5A5A] mb-3 tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Featured
            </div>
            <Link to="/product" className="block group">
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(125, 77, 255, 0.15)",
                }}
              >
                <img
                  src={productFeatureImg}
                  alt="AI-Powered Workflows"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <Sparkles
                      className="w-5 h-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    className="text-[15px] mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    AI-Powered Workflows
                  </h4>
                  <p
                    className="text-[12px] text-white/80"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Automate your business 24/7
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Agents Dropdown Component
function AgentsDropdown({
  buttonRef,
  onClose,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const location = useLocation();
  const mainLinks = [
    {
      icon: MessageSquare,
      label: "Chat Agents",
      href: "/agents/chat",
    },
    {
      icon: PhoneCall,
      label: "Voice Agents",
      href: "/agents/voice",
    },
    {
      icon: Mail,
      label: "Email Agents",
      href: "/agents/email",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp Agents",
      href: "/agents/whatsapp",
    },
    {
      icon: Zap,
      label: "Automation Agents",
      href: "/agents/automation",
    },
  ];

  const secondaryLinks = [
    {
      icon: Users,
      label: "Support Agents",
      href: "/agents/support",
    },
    { icon: FileText, label: "Templates", href: "/templates" },
    {
      icon: Code,
      label: "Custom Agents",
      href: "/agents/custom",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed mt-2 w-[920px] bg-white rounded-[18px] border border-[#E7E7E7] overflow-hidden max-[880px]:w-[calc(100vw-48px)] left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
        top: buttonRef.current
          ? buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY
          : 0,
        maxHeight: "65vh",
      }}
      role="menu"
      aria-label="Agents menu"
    >
      <div
        className="p-8 max-h-[65vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E7E7E7 transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_300px] gap-8 max-[880px]:grid-cols-1">
          {/* Left: Dual Column Menu Items */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-[880px]:grid-cols-1">
            {/* First Column */}
            <div className="space-y-1">
              {mainLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#2F80ED]"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#2F80ED] font-semibold"
                          : "text-[#1A1A1A] group-hover:text-purple-600"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Second Column */}
            <div className="space-y-1">
              {secondaryLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#9B51E0]"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#9B51E0] font-semibold"
                          : "text-[#1A1A1A] group-hover:text-purple-600"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Featured Card */}
          <div className="max-[880px]:hidden">
            <div
              className="text-[11px] text-[#5A5A5A] mb-3 tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Featured
            </div>
            <Link to="/product#agents" className="block group">
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 group-hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(6, 182, 212, 0.15)",
                }}
              >
                <img
                  src={agentsFeatureImg}
                  alt="AI Agent Studio"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <Bot
                      className="w-5 h-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    className="text-[15px] mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    AI Agent Studio
                  </h4>
                  <p
                    className="text-[12px] text-white/80"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Build intelligent agents in minutes
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Solutions Dropdown Component
function SolutionsDropdown({
  buttonRef,
  onClose,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const location = useLocation();
  const mainLinks = [
    {
      icon: Calendar,
      label: "Booking & Scheduling",
      href: "/solutions/booking",
    },
    {
      icon: ShoppingCart,
      label: "Order Management",
      href: "/solutions/order",
    },
    {
      icon: Users,
      label: "Customer Support",
      href: "/solutions/support",
    },
    {
      icon: Zap,
      label: "Lead Capture",
      href: "/solutions/leads",
    },
  ];

  const secondaryLinks = [
    {
      icon: CheckCircle,
      label: "Restaurants",
      href: "/solutions/restaurants",
    },
    {
      icon: Megaphone,
      label: "Salons & Spas",
      href: "/solutions/salons",
    },
    {
      icon: Phone,
      label: "Healthcare",
      href: "/solutions/healthcare",
    },
    {
      icon: ShoppingCart,
      label: "E-Commerce",
      href: "/solutions/ecommerce",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed mt-2 w-[920px] bg-white rounded-[18px] border border-[#E7E7E7] overflow-hidden max-[880px]:w-[calc(100vw-48px)] left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
        top: buttonRef.current
          ? buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY
          : 0,
        maxHeight: "65vh",
      }}
      role="menu"
      aria-label="Solutions menu"
    >
      <div
        className="p-8 max-h-[65vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E7E7E7 transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_300px] gap-8 max-[880px]:grid-cols-1">
          {/* Left: Dual Column Menu Items */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-[880px]:grid-cols-1">
            {/* First Column */}
            <div className="space-y-1">
              {mainLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#2F80ED]"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#2F80ED] font-semibold"
                          : "text-[#1A1A1A] group-hover:text-purple-600"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Second Column */}
            <div className="space-y-1">
              {secondaryLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={index}
                    to={link.href}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                      isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                    }`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <link.icon
                      className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-[#9B51E0]"
                          : "text-gray-400 group-hover:text-purple-600"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-[14px] transition-colors ${
                        isActive
                          ? "text-[#9B51E0] font-semibold"
                          : "text-[#1A1A1A] group-hover:text-purple-600"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Featured Card */}
          <div className="max-[880px]:hidden">
            <div
              className="text-[11px] text-[#5A5A5A] mb-3 tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Featured
            </div>
            <Link to="/solutions" className="block group">
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(16, 185, 129, 0.15)",
                }}
              >
                <img
                  src={solutionsFeatureImg}
                  alt="Industry Solutions"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <BarChart3
                      className="w-5 h-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    className="text-[15px] mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Industry Solutions
                  </h4>
                  <p
                    className="text-[12px] text-white/80"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Tailored for your business needs
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Templates Dropdown Component
function TemplatesDropdown({
  buttonRef,
  onClose,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const mainLinks = [
    {
      icon: Calendar,
      label: "Booking Agent",
    },
    {
      icon: ShoppingCart,
      label: "Order Assistant",
    },
    {
      icon: Users,
      label: "Support Agent",
    },
    {
      icon: RefreshCw,
      label: "Follow-Up Agent",
    },
    {
      icon: Mail,
      label: "Email Agent",
    },
    {
      icon: PhoneCall,
      label: "Voice Agent",
    },
  ];

  const secondaryLinks = [
    {
      icon: Zap,
      label: "Lead Capture",
    },
    {
      icon: MessageSquare,
      label: "Chat Agent",
    },
    {
      icon: BarChart3,
      label: "Analytics",
    },
    {
      icon: Workflow,
      label: "Custom Workflows",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed mt-2 w-[920px] bg-white rounded-[18px] border border-[#E7E7E7] overflow-hidden max-[880px]:w-[calc(100vw-48px)] left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
        top: buttonRef.current
          ? buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY
          : 0,
        maxHeight: "65vh",
      }}
      role="menu"
      aria-label="Templates menu"
    >
      <div
        className="p-8 max-h-[65vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E7E7E7 transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_300px] gap-8 max-[880px]:grid-cols-1">
          {/* Left: Dual Column Menu Items */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-[880px]:grid-cols-1">
            {/* First Column */}
            <div className="space-y-1">
              {mainLinks.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2.5 rounded-lg cursor-default"
                  >
                    <link.icon
                      className="w-[18px] h-[18px] text-gray-400 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-[14px] text-[#1A1A1A]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Second Column */}
            <div className="space-y-1">
              {secondaryLinks.map((link, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2.5 rounded-lg cursor-default"
                  >
                    <link.icon
                      className="w-[18px] h-[18px] text-gray-400 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <span
                      className="text-[14px] text-[#1A1A1A]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </span>
                  </div>
                );
              })}
              
              {/* Explore All Templates Button */}
              <div className="pt-2 mt-2 border-t border-gray-200">
                <Link
                  to="/templates"
                  className="flex items-center gap-2 p-2.5 rounded-lg transition-all group hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                  role="menuitem"
                  tabIndex={0}
                >
                  <ArrowRight
                    className="w-[18px] h-[18px] text-[#2F80ED] transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                  <span
                    className="text-[14px] text-[#2F80ED] font-semibold"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Explore All Templates
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Featured Card */}
          <div className="max-[880px]:hidden">
            <div
              className="text-[11px] text-[#5A5A5A] mb-3 tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Featured
            </div>
            <Link to="/templates" className="block group">
              <div
                className="relative h-[200px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(236, 72, 153, 0.15)",
                }}
              >
                <img
                  src={templatesFeatureImg}
                  alt="Ready-to-Deploy Templates"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <FileText
                      className="w-5 h-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    className="text-[15px] mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Ready-to-Deploy
                  </h4>
                  <p
                    className="text-[12px] text-white/80"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Launch in minutes, not hours
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Resources Dropdown Component
function ResourcesDropdown({
  buttonRef,
  onClose,
}: {
  buttonRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}) {
  const location = useLocation();
  const allLinks = [
    { icon: BookOpen, label: "Blog", href: "/blogs" },
    {
      icon: FileText,
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      icon: GraduationCap,
      label: "Help Center",
      href: "/help-center",
    },
    { icon: Code, label: "API Reference", href: "/api-reference" },
    { icon: Mail, label: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="fixed mt-2 w-[720px] bg-white rounded-[18px] border border-[#E7E7E7] overflow-hidden max-[880px]:w-[calc(100vw-48px)] left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
        top: buttonRef.current
          ? buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY
          : 0,
        maxHeight: "65vh",
      }}
      role="menu"
      aria-label="Resources menu"
    >
      <div
        className="p-8 max-h-[65vh] overflow-y-auto"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#E7E7E7 transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_280px] gap-8 max-[880px]:grid-cols-1">
          {/* Left: Menu Items */}
          <div className="space-y-1">
            {allLinks.map((link, index) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={index}
                  to={link.href}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all group ${
                    isActive ? "bg-[#F6F0FF]" : "hover:bg-[#F6F0FF]"
                  }`}
                  role="menuitem"
                  tabIndex={0}
                >
                  <link.icon
                    className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                      isActive
                        ? "text-[#2F80ED]"
                        : "text-gray-400 group-hover:text-purple-600"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-[14px] transition-colors ${
                      isActive
                        ? "text-[#2F80ED] font-semibold"
                        : "text-[#1A1A1A] group-hover:text-purple-600"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right: Featured Image */}
          <div className="max-[880px]:hidden">
            <div
              className="text-[11px] text-[#5A5A5A] mb-3 tracking-wider uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Featured
            </div>
            <Link to="/help-center" className="block group">
              <div
                className="relative h-[240px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform"
                style={{
                  boxShadow:
                    "0 4px 16px rgba(139, 92, 246, 0.15)",
                }}
              >
                <img
                  src={resourcesFeatureImg}
                  alt="Help Center & Resources"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3">
                    <GraduationCap
                      className="w-5 h-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4
                    className="text-[15px] mb-1.5"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  >
                    Help Center
                  </h4>
                  <p
                    className="text-[12px] text-white/80"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Everything you need to get started
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile Menu Section Component
function MobilMenuSection({
  title,
  links,
  onLinkClick,
}: {
  title: string;
  links: { icon: any; label: string; href: string }[];
  onLinkClick: () => void;
}) {
  return (
    <div>
      <h3
        className="text-[15px] font-bold text-gray-900 mb-3"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {title}
      </h3>
      <div className="space-y-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#F6F0FF] transition-all group"
            role="menuitem"
            tabIndex={0}
            onClick={onLinkClick}
          >
            <link.icon
              className="w-[18px] h-[18px] text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0"
              strokeWidth={1.5}
            />
            <span
              className="text-[14px] text-[#1A1A1A] group-hover:text-purple-600 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Mobile Menu Accordion Component
function MobileMenuAccordion({
  title,
  isExpanded,
  onToggle,
  links,
  onLinkClick,
}: {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  links: { icon: any; label: string; href: string; highlight?: boolean }[];
  onLinkClick: () => void;
}) {
  const location = useLocation();
  
  return (
    <div>
      <button
        className="flex items-center justify-between py-3.5 px-4 text-gray-900 hover:bg-[#F6F0FF] rounded-lg transition-colors text-base w-full"
        style={{ fontFamily: "Inter, sans-serif" }}
        onClick={onToggle}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown
          className="w-4 h-4"
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>
      {isExpanded && (
        <div className="space-y-2 pl-2">
          {links.map((link, index) => {
            const isActive = location.pathname === link.href;
            const isHighlight = link.highlight;
            return (
              <Link
                key={index}
                to={link.href}
                className={`flex items-center gap-3 p-2.5 rounded-lg transition-all group ${
                  isActive 
                    ? "bg-[#F6F0FF]" 
                    : isHighlight 
                    ? "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50" 
                    : "hover:bg-[#F6F0FF]"
                }`}
                role="menuitem"
                tabIndex={0}
                onClick={onLinkClick}
              >
                <link.icon
                  className={`w-[18px] h-[18px] transition-colors flex-shrink-0 ${
                    isActive
                      ? "text-[#2F80ED]"
                      : isHighlight
                      ? "text-[#2F80ED]"
                      : "text-gray-400 group-hover:text-purple-600"
                  }`}
                  strokeWidth={1.5}
                />
                <span
                  className={`text-[14px] transition-colors ${
                    isActive
                      ? "text-[#2F80ED] font-semibold"
                      : isHighlight
                      ? "text-[#2F80ED] font-semibold"
                      : "text-[#1A1A1A] group-hover:text-purple-600"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}