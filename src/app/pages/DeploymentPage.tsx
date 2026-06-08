import { motion } from 'motion/react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { Cloud, Server, Shield, Zap, Lock, CheckCircle, ArrowRight, Network, Settings, Database } from 'lucide-react';

export default function DeploymentPage() {
  const cloudFeatures = [
    'No infrastructure setup required',
    'Automatic updates and scaling',
    'Secure and highly available',
    'Ideal for fast-moving teams',
  ];

  const selfHostedFeatures = [
    'Full control over data and security',
    'Meets strict compliance requirements',
    'Perfect for government and regulated industries',
    'Integrates with internal systems and private networks',
  ];

  const temporalFeatures = [
    {
      icon: Shield,
      title: 'Fault-tolerant workflow execution',
      description: 'Built-in retry logic and error handling',
    },
    {
      icon: Zap,
      title: 'Handles millions of long-running processes',
      description: 'Designed for scale and reliability',
    },
    {
      icon: Database,
      title: 'Enterprise-grade performance',
      description: 'Production-ready from day one',
    },
    {
      icon: Network,
      title: 'Designed for complex operational workflows',
      description: 'Perfect for multi-step business processes',
    },
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2F80ED]/10 to-[#9B51E0]/10 border border-[#2F80ED]/20 mb-6"
            >
              <Cloud className="w-4 h-4 text-[#2F80ED]" />
              <span className="text-sm font-semibold text-gray-700">Flexible Deployment Options</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Deploy SMB Flow{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)',
                }}
              >
                Your Way
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Run SMB Flow in the cloud or within your own infrastructure.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Whether you need rapid deployment or full control over your environment, SMB Flow supports both.
            </p>
          </motion.div>

          {/* Deployment Options Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Cloud Deployment */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F80ED]/20 to-[#9B51E0]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-[#2F80ED]/50 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2F80ED] to-[#9B51E0] mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">Cloud Deployment</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Launch instantly with our fully managed platform.
                </p>

                <ul className="space-y-4 mb-8">
                  {cloudFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#2F80ED] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#2F80ED] to-[#9B51E0] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Self-Hosted Deployment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9B51E0]/20 to-[#2F80ED]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-[#9B51E0]/50 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9B51E0] to-[#2F80ED] mb-6">
                  <Server className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">Self-Hosted Deployment</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Deploy SMB Flow within your own infrastructure.
                </p>

                <ul className="space-y-4 mb-8">
                  {selfHostedFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#9B51E0] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <button className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#9B51E0] to-[#2F80ED] text-white font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  Contact Sales
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powered by Temporal Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2F80ED]/10 to-[#9B51E0]/10 border border-[#2F80ED]/20 mb-6">
              <Settings className="w-4 h-4 text-[#2F80ED]" />
              <span className="text-sm font-semibold text-gray-700">Built on Industry-Leading Technology</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Powered by{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)',
                }}
              >
                Temporal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SMB Flow is built on Temporal, a modern workflow orchestration platform designed for massive scale and reliability.
            </p>
          </motion.div>

          {/* Temporal Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {temporalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#2F80ED]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#2F80ED]/10 to-[#9B51E0]/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-[#2F80ED]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Flexibility Banner */}
      <section className="py-20 bg-gradient-to-r from-[#2F80ED] to-[#9B51E0]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise flexibility. Deploy in the cloud or on your own infrastructure.
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose the deployment model that best fits your business requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-white text-[#2F80ED] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
