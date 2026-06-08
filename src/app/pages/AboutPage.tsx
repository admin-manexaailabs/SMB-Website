import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Sparkles,
  Target,
  Shield,
  Rocket,
  Users,
  Lightbulb,
  Zap,
  Heart,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { Button } from "../components/ui/button";
import NavigationWithDropdowns from "../components/NavigationWithDropdowns";
import Footer from "../components/Footer";
import { toast } from "sonner@2.0.3";

// Unsplash images
const heroFlowImg =
  "https://images.unsplash.com/photo-1760611656007-f767a8082758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3Njc3NjM0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
import haripriyaImg from "figma:asset/657759b39aabf74bf77ca90383f0d44c6a92668f.png";
import rayadasImg from "figma:asset/867fdcac073b7cc07e478261a52434b45a8129e1.png";
// Placeholder for Kishore V
const team3Img =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%232F80ED;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%239B51E0;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23grad)' /%3E%3Ctext x='50%25' y='50%25' font-family='DM Sans, sans-serif' font-size='120' font-weight='700' fill='white' text-anchor='middle' dominant-baseline='central'%3EKV%3C/text%3E%3C/svg%3E";
import neelaveniImg from "../../imports/ChatGPT_Image_May_1__2026__05_38_26_PM.png";
import mastanImg from "figma:asset/4e0d0cda2932f6f8c8f51fe8c6f1aae06979a3db.png";
import rameshImg from "figma:asset/466df851924aa62fe1b30ab01bda0c70ab653424.png";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const values = [
    {
      icon: Target,
      title: "Built for SMBs",
      description:
        "Simple, practical, no unnecessary complexity.",
      gradient: "from-[#2F80ED] to-[#9B51E0]",
    },
    {
      icon: Shield,
      title: "Automation with Control",
      description: "You decide the flow. AI executes it.",
      gradient: "from-[#9B51E0] to-[#EB5757]",
    },
    {
      icon: Rocket,
      title: "Scale Without Stress",
      description: "From 10 conversations to millions.",
      gradient: "from-[#F2994A] to-[#F2C94C]",
    },
    {
      icon: Heart,
      title: "Human-first AI",
      description: "AI that sounds helpful, not robotic.",
      gradient: "from-[#EB5757] to-[#F2994A]",
    },
  ];

  const timeline = [
    { icon: Lightbulb, label: "Idea", year: "2023" },
    { icon: Sparkles, label: "First Agent", year: "Q1 2024" },
    { icon: Zap, label: "Multi-channel", year: "Q2 2024" },
    {
      icon: TrendingUp,
      label: "Scale to millions",
      year: "2024",
    },
  ];

  const team = [
    {
      name: "Haripriya KVSS",
      role: "Founder & CEO",
      mission: "Empowering SMBs with intelligent automation",
      about:
        "Haripriya is a visionary entrepreneur with over 10 years of experience in building scalable technology solutions for small and medium businesses. She founded SMB Flow with the mission to democratize AI automation, making enterprise-level tools accessible to every small business. Her deep understanding of SMB pain points comes from working directly with hundreds of business owners.",
      image: haripriyaImg,
      linkedin:
        "https://www.linkedin.com/in/haripriya-kvss-a27364145/",
    },
    {
      name: "Rayadas (Roy) Manthena",
      role: "COO",
      mission: "Scaling operations to serve growing businesses",
      about:
        "Roy is a senior technology leader and community-driven professional with over 12 years of global experience in IT, databases, and leadership. Raised in rural India, his journey from residential schools to international leadership roles reflects resilience, purpose, and people-first thinking. Currently based in Vermont, USA, Roy works as a Senior Manager – Global Database Services at a multinational company, having led large-scale technology initiatives across banking, retail, and enterprise systems. Outside work, he's deeply invested in social impact through education, student mentoring, rural development, and community empowerment. Roy's vision is simple but powerful: build people, serve communities, and lead with purpose.",
      image: rayadasImg,
      linkedin:
        "https://www.linkedin.com/in/rayadas-roy-manthena-073b958/",
    },
    {
      name: "Kishore V",
      role: "Head of Engineering",
      mission:
        "Building robust AI infrastructure for the future",
      about:
        "Kishore is a seasoned engineering leader with deep expertise in AI/ML systems and distributed architectures. With a track record of building platforms that handle millions of transactions daily, he leads the technical vision at SMB Flow. His focus on reliability, security, and developer experience ensures our platform remains cutting-edge and dependable.",
      image: team3Img,
      linkedin: "",
    },
    {
      name: "Neelaveni",
      role: "Director, Product Management",
      mission: "Shaping products that empower SMBs",
      about:
        "Neelaveni is a product management leader with extensive experience in building user-centric products for small and medium businesses. With a deep understanding of SMB workflows and pain points, she drives the product strategy at SMB Flow, ensuring every feature delivers real value to our customers. Her data-driven approach and focus on user experience have been instrumental in making our platform intuitive and powerful.",
      image: neelaveniImg,
      linkedin: "",
    },
    {
      name: "Mastan",
      role: "Architect",
      mission: "Designing scalable systems for the future",
      about:
        "Mastan is a solutions architect with deep expertise in designing distributed systems and microservices architectures. With years of experience in building enterprise-grade platforms, he ensures SMB Flow's architecture is robust, scalable, and future-proof. His focus on performance optimization and system reliability enables our platform to handle millions of conversations seamlessly.",
      image: mastanImg,
      linkedin: "",
    },
    {
      name: "Ramesh",
      role: "Frontend Architect",
      mission: "Creating delightful user experiences",
      about:
        "Ramesh is a frontend architecture specialist with a passion for building intuitive and performant user interfaces. With expertise in modern web technologies and design systems, he leads the frontend development at SMB Flow, ensuring our visual workflow builder is both powerful and easy to use. His commitment to accessibility and user experience makes our platform a joy to work with.",
      image: rameshImg,
      linkedin: "",
    },
  ];

  const workSteps = [
    {
      icon: Users,
      title: "Listen",
      description: "to real SMB problems",
    },
    {
      icon: Lightbulb,
      title: "Design",
      description: "workflows, not features",
    },
    {
      icon: Zap,
      title: "Build fast",
      description: "iterate faster",
    },
    {
      icon: Rocket,
      title: "Scale",
      description: "reliably",
    },
    {
      icon: Heart,
      title: "Support",
      description: "obsessively",
    },
  ];

  const handleStartFree = () => {
    toast.success("Redirecting to sign up...");
    window.open("https://app.smbflow.ai/business/auth/signin", "_blank", "noopener,noreferrer");
  };

  const handleViewCareers = () => {
    toast.info("Careers page coming soon!");
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        {/* Animated gradient glow background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "linear-gradient(135deg, #9B51E0 0%, #2F80ED 100%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {" "}
            {/* Removed max-w-7xl mx-auto */}
            {/* Left: Headline + Mission */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9B51E0]/10 to-[#2F80ED]/10 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#9B51E0]" />
                <span
                  className="text-sm"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    background:
                      "linear-gradient(135deg, #9B51E0 0%, #2F80ED 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Who We Are
                </span>
              </motion.div>

              <h1
                className="text-5xl lg:text-6xl mb-6 leading-tight"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "700",
                  color: "#1F2937",
                }}
              >
                Built to Help Small Businesses{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Run Smarter Conversations
                </span>
              </h1>

              <p
                className="text-lg text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                SMB Flow is an AI agentic platform designed to
                help small and growing businesses automate
                conversations, campaigns, and workflows across
                every channel—without complexity.
              </p>

              {/* Floating dots animation */}
              <div className="relative mt-12 h-12">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                      left: `${i * 60}px`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
            {/* Right: Abstract flow graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={heroFlowImg}
                  alt="Abstract Flow"
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 via-[#9B51E0]/20 to-[#F2994A]/20" />

                {/* Flow lines overlay */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 400 400"
                >
                  <motion.path
                    d="M 50,200 Q 150,100 250,200 T 450,200"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
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

      {/* Our Story Section - HIDDEN */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2
                className="text-4xl mb-8"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "700",
                  color: "#1F2937",
                }}
              >
                Why We Built SMB Flow
              </h2>

              <div className="space-y-6">
                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Small businesses don't fail because they lack ambition—they
                  fail because tools are too complex, too expensive, or built
                  for enterprises.
                </p>

                <p
                  className="text-lg text-gray-700 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  SMB Flow was created to give small teams the same automation
                  power as large companies—without hiring engineers or managing
                  dozens of tools.
                </p>

                <div className="pt-8">
                  <div
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span
                      className="text-white"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Built by SMB operators, for SMB operators
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="relative"
            >
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#2F80ED] via-[#9B51E0] to-[#F2994A]" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-6 relative"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)"
                            : index === 1
                            ? "linear-gradient(135deg, #9B51E0 0%, #EB5757 100%)"
                            : index === 2
                            ? "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)"
                            : "linear-gradient(135deg, #EB5757 0%, #F2994A 100%)",
                      }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="pt-2">
                      <div
                        className="text-sm text-gray-500 mb-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.year}
                      </div>
                      <h3
                        className="text-2xl"
                        style={{
                          fontFamily: "DM Sans, sans-serif",
                          fontWeight: "600",
                          color: "#1F2937",
                        }}
                      >
                        {item.label}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* What We Believe In Section */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl mb-6"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "700",
                color: "#1F2937",
              }}
            >
              What We Believe In
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our values guide everything we build and how we
              serve our customers.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-transparent transition-all duration-300 group"
                style={{
                  boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                }}
              >
                {/* Gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${
                      value.gradient.includes("2F80ED")
                        ? "#2F80ED, #9B51E0"
                        : value.gradient.includes("9B51E0")
                          ? "#9B51E0, #EB5757"
                          : value.gradient.includes("F2994A")
                            ? "#F2994A, #F2C94C"
                            : "#EB5757, #F2994A"
                    })`,
                    padding: "2px",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${
                      value.gradient.includes("2F80ED")
                        ? "#2F80ED, #9B51E0"
                        : value.gradient.includes("9B51E0")
                          ? "#9B51E0, #EB5757"
                          : value.gradient.includes("F2994A")
                            ? "#F2994A, #F2C94C"
                            : "#EB5757, #F2994A"
                    })`,
                  }}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className="text-xl mb-3"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "600",
                    color: "#1F2937",
                  }}
                >
                  {value.title}
                </h3>

                <p
                  className="text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl mb-6"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "700",
                color: "#1F2937",
              }}
            >
              Meet the Team
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The people behind SMB Flow, building the future of
              SMB automation.
            </p>
          </motion.div>

          {/* Alternating layout for team members */}
          <div className="space-y-24">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <motion.div
                    className="relative rounded-3xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient border */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
                        padding: "4px",
                      }}
                    />

                    <div className="relative z-20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[370px] object-cover"
                        style={
                          index === 0
                            ? { objectPosition: "center 35%" }
                            : index === 1
                              ? { objectPosition: "center 15%" }
                              : index === 5
                                ? { objectPosition: "center 40%" }
                                : index === 4
                                  ? { objectPosition: "center 25%" }
                                  : index === 3
                                    ? { objectPosition: "center 25%" }
                                    : {}
                        }
                      />

                      {/* LinkedIn icon */}
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-opacity duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Linkedin className="w-6 h-6 text-[#2F80ED]" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="space-y-3">
                    {/* Name */}
                    <h3
                      className="text-3xl lg:text-4xl"
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: "700",
                        color: "#1F2937",
                      }}
                    >
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p
                      className="text-lg"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        background:
                          "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "600",
                      }}
                    >
                      {member.role}
                    </p>

                    {/* Mission */}
                    <div
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)"
                            : index === 1
                              ? "linear-gradient(135deg, #9B51E0 0%, #EB5757 100%)"
                              : "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)",
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span
                        className="text-white text-sm"
                        style={{
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {member.mission}
                      </span>
                    </div>

                    {/* About */}
                    <p
                      className="text-base text-gray-700 leading-relaxed pt-2"
                      style={{
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {member.about}
                    </p>

                    {/* LinkedIn button for mobile */}
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#2F80ED] hover:text-[#9B51E0] transition-colors lg:hidden pt-1"
                        whileHover={{ x: 4 }}
                      >
                        <Linkedin className="w-5 h-5" />
                        <span
                          className="text-sm"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          Connect on LinkedIn
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239B51E0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl mb-6"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "700",
                color: "#1F2937",
              }}
            >
              How We Work
            </h2>
            <p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our approach to building the best SMB automation
              platform.
            </p>
          </motion.div>

          {/* Horizontal flow steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-1 hidden lg:block">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #2F80ED 0%, #9B51E0 25%, #EB5757 50%, #F2994A 75%, #F2C94C 100%)",
                }}
              />

              {/* Animated dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg"
                style={{
                  boxShadow: "0 0 20px rgba(47,128,237,0.5)",
                }}
                animate={{
                  left: ["0%", "100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {workSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)"
                          : index === 1
                            ? "linear-gradient(135deg, #9B51E0 0%, #EB5757 100%)"
                            : index === 2
                              ? "linear-gradient(135deg, #EB5757 0%, #F2994A 100%)"
                              : index === 3
                                ? "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)"
                                : "linear-gradient(135deg, #F2C94C 0%, #2F80ED 100%)",
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: "600",
                      color: "#1F2937",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Strip */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, #F8F9FF 0%, #FFF5F7 100%)",
        }}
      >
        <div className="w-full px-8 lg:px-16 xl:px-24">
          {/* Removed max-w-7xl mx-auto wrapper */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p
              className="text-sm text-gray-500 mb-8 uppercase tracking-wider"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Trusted by growing businesses
            </p>

            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div>
                <h3
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  10M+
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Messages processed
                </p>
              </div>

              <div>
                <h3
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #9B51E0 0%, #EB5757 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  7+
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Channels supported
                </p>
              </div>

              <div>
                <h3
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #F2994A 0%, #F2C94C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Real-time
                </h3>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Execution speed
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Join the Flow */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)",
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full opacity-10"
              style={{
                background: "white",
                left: `${20 * i}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <h2
              className="text-5xl lg:text-6xl mb-6 text-white leading-tight"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: "700",
              }}
            >
              Building the future of SMB automation—one flow at
              a time.
            </h2>

            <p
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Join thousands of businesses automating their
              conversations with SMB Flow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleStartFree}
                className="bg-white text-[#2F80ED] hover:bg-gray-50 text-lg px-10 py-6 rounded-full shadow-2xl"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "600",
                }}
              >
                Start Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={handleViewCareers}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#9B51E0] text-lg px-10 py-6 rounded-full transition-all duration-300"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: "600",
                }}
              >
                View Careers
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}