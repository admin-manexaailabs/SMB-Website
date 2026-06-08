import { Sparkles } from "lucide-react";
import { Link } from "react-router";
import logoImg from "figma:asset/7b58b3b2864a86d8b403242e8c7134fb79e16e15.png";

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "Flow Builder", href: "/product/flow-builder" },
      { label: "AI Agents", href: "/product/agents" },
      { label: "Channels", href: "/product/channels" },
      { label: "Unified Inbox", href: "/product/inbox" },
      { label: "Data & Knowledge", href: "/product/data" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Models", href: "/product/models" },
      { label: "Security", href: "/product/security" },
      { label: "Analytics", href: "/product/analytics" },
      { label: "API Access", href: "/product/api" },
      { label: "Deployment", href: "/product/deployment" },
    ],
    Agents: [
      { label: "Chat Agents", href: "/agents/chat" },
      { label: "Voice Agents", href: "/agents/voice" },
      { label: "Email Agents", href: "/agents/email" },
      { label: "WhatsApp Agents", href: "/agents/whatsapp" },
      {
        label: "Automation Agents",
        href: "/agents/automation",
      },
      { label: "Support Agents", href: "/agents/support" },
      { label: "Custom Agents", href: "/agents/custom" },
    ],
    Solutions: [
      {
        label: "Booking & Scheduling",
        href: "/solutions/booking",
      },
      { label: "Order Management", href: "/solutions/order" },
      { label: "Customer Support", href: "/solutions/support" },
      { label: "Lead Capture", href: "/solutions/leads" },
      { label: "Restaurants", href: "/solutions/restaurants" },
      { label: "Salons & Spas", href: "/solutions/salons" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "E-Commerce", href: "/solutions/ecommerce" },
    ],
    Templates: [
      { label: "Explore All Templates", href: "/templates" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { label: "Blog", href: "/blogs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Help Center", href: "/help-center" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2 mb-4"
            >
              <img
                src={logoImg}
                alt="SMB Flow Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Multi-Channel Agentic AI Platform designed
              specifically for small and medium businesses.
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(
            ([category, links]) => (
              <div key={category}>
                <h3
                  className="text-white mb-4 font-semibold"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div
              className="flex flex-wrap items-center gap-6 text-sm text-gray-400"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <span>
                © 2025 SMB Flow. All rights reserved.
              </span>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {[
                "Twitter",
                "LinkedIn",
                "Facebook",
                "Instagram",
              ].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors text-xs"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}