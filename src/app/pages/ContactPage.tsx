import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  Globe,
  Linkedin,
  Twitter,
  Github,
  HelpCircle,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@smbflow.com",
      description: "We'll respond within 24 hours",
      color: "#2F80ED",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
      color: "#9B51E0",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Market Street, Suite 500",
      color: "#EB5757",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
      color: "#F2C94C",
    },
  ];

  const inquiryTypes = [
    {
      icon: MessageSquare,
      label: "General Inquiry",
      value: "general",
      color: "#2F80ED",
    },
    {
      icon: Zap,
      label: "Sales & Demo",
      value: "sales",
      color: "#9B51E0",
    },
    {
      icon: HelpCircle,
      label: "Technical Support",
      value: "support",
      color: "#EB5757",
    },
    {
      icon: Users,
      label: "Partnership",
      value: "partnership",
      color: "#F2C94C",
    },
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "24/7 Support Available",
      description: "Round-the-clock assistance for enterprise customers",
    },
    {
      icon: Shield,
      title: "Secure Communications",
      description: "Your data is encrypted and protected",
    },
    {
      icon: Zap,
      title: "Fast Response Times",
      description: "Average response time under 4 hours",
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", color: "#1DA1F2" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
    { icon: Github, label: "GitHub", href: "#", color: "#181717" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-32 pb-20">
        {/* Animated Background Dots */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(15)].map((_, i) => (
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
            Let's Build Something Amazing Together
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
            className="text-[18px] text-gray-600 mb-6"
          >
            Have questions? Want to see a demo? Ready to transform your business
            with AI agents?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] text-gray-500"
          >
            We're here to help. Reach out and our team will get back to you
            within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                style={{
                  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.03)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${info.color}15, ${info.color}05)`,
                  }}
                >
                  <info.icon className="w-6 h-6" style={{ color: info.color }} />
                </div>
                <h3 className="text-[16px] text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-[15px] text-gray-900 mb-1">
                  {info.content}
                </p>
                <p className="text-[13px] text-gray-500">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="w-full px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <h2 className="text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-[14px] text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry Type Selection */}
                  <div>
                    <label className="block text-[14px] text-gray-700 mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {inquiryTypes.map((type) => (
                        <label
                          key={type.value}
                          className={`relative flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            formData.inquiryType === type.value
                              ? "border-[#2F80ED] bg-blue-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background:
                                formData.inquiryType === type.value
                                  ? `${type.color}15`
                                  : "#F3F4F6",
                            }}
                          >
                            <type.icon
                              className="w-4 h-4"
                              style={{
                                color:
                                  formData.inquiryType === type.value
                                    ? type.color
                                    : "#6B7280",
                              }}
                            />
                          </div>
                          <span
                            className={`text-[13px] ${
                              formData.inquiryType === type.value
                                ? "text-gray-900 font-medium"
                                : "text-gray-600"
                            }`}
                          >
                            {type.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[14px] text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px]"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[14px] text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px]"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[14px] text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px]"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[14px] text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px]"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[14px] text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px]"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[14px] text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 outline-none transition-all text-[14px] resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] hover:opacity-90 text-white px-8 py-6 rounded-xl text-[15px] transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Right: Features & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <div>
                <h3 className="text-[20px] text-gray-800 mb-6">
                  Why Reach Out?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-[#2F80ED]" />
                      </div>
                      <div>
                        <h4 className="text-[15px] text-gray-800 mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-[13px] text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-[20px] text-gray-800 mb-6">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 rounded-xl bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all duration-300"
                      style={{
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
                      }}
                    >
                      <social.icon
                        className="w-5 h-5"
                        style={{ color: social.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-[#2F80ED]" />
                  <h4 className="text-[16px] text-gray-800">Our Location</h4>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-[14px] text-gray-600">
                      San Francisco, CA
                    </p>
                    <p className="text-[13px] text-gray-500">
                      123 Market Street, Suite 500
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <p className="text-[15px] text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How quickly will I get a response?",
                a: "We typically respond to all inquiries within 24 hours during business days. Enterprise customers receive priority support with response times under 4 hours.",
              },
              {
                q: "Can I schedule a demo?",
                a: 'Absolutely! Select "Sales & Demo" as your inquiry type in the contact form, and our team will reach out to schedule a personalized demonstration.',
              },
              {
                q: "Do you offer technical support?",
                a: "Yes! We provide comprehensive technical support for all customers. Enterprise plans include 24/7 priority support with dedicated account managers.",
              },
              {
                q: "What information should I include in my message?",
                a: "Please include your name, company, and a brief description of your needs. The more details you provide, the better we can assist you.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200"
              >
                <h4 className="text-[15px] text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
