import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { 
  UtensilsCrossed,
  Sparkles,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  MessageSquare,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Bot,
  Workflow,
  Zap,
  Calendar,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const industries = [
    { name: 'All', icon: Briefcase, color: '#6B7280' },
    { name: 'Restaurants', icon: UtensilsCrossed, color: '#F2994A' },
    { name: 'Salons & Spas', icon: Sparkles, color: '#9B51E0' },
    { name: 'Healthcare', icon: Stethoscope, color: '#2F80ED' },
    { name: 'E-commerce', icon: ShoppingBag, color: '#EB5757' },
    { name: 'Services & SMBs', icon: Briefcase, color: '#10B981' }
  ];

  const caseStudies = [
    {
      industry: 'Restaurants',
      businessName: 'Urban Bites',
      agentType: 'Booking Agent',
      resultLine: '90% of reservations automated in 7 days',
      channels: ['WhatsApp', 'Web', 'Phone'],
      agents: ['Booking', 'Support'],
      scale: '450 msgs/day',
      slug: 'urban-bites-restaurant',
      color: '#F2994A',
      metrics: {
        timeSaved: '18 hours/week',
        responseTime: '< 2 seconds',
        volume: '450 messages/day'
      }
    },
    {
      industry: 'Salons & Spas',
      businessName: 'Luxe Salon',
      agentType: 'Booking & Support',
      resultLine: 'Zero missed appointments, 95% booking rate',
      channels: ['SMS', 'Web', 'Instagram'],
      agents: ['Booking', 'Reminder', 'Support'],
      scale: '280 msgs/day',
      slug: 'luxe-salon-bookings',
      color: '#9B51E0',
      metrics: {
        timeSaved: '22 hours/week',
        responseTime: '< 3 seconds',
        volume: '280 messages/day'
      }
    },
    {
      industry: 'Healthcare',
      businessName: 'City Health Clinic',
      agentType: 'Appointment & Follow-up',
      resultLine: '60% reduction in no-shows, automated reminders',
      channels: ['SMS', 'Email', 'Phone'],
      agents: ['Booking', 'Reminder', 'Follow-up'],
      scale: '620 msgs/day',
      slug: 'city-health-clinic',
      color: '#2F80ED',
      metrics: {
        timeSaved: '30 hours/week',
        responseTime: '< 5 seconds',
        volume: '620 messages/day'
      }
    },
    {
      industry: 'E-commerce',
      businessName: 'Artisan Collective',
      agentType: 'Order & Support',
      resultLine: '3× more follow-ups, 40% repeat purchase increase',
      channels: ['WhatsApp', 'Email', 'Web'],
      agents: ['Order', 'Support', 'Follow-up'],
      scale: '890 msgs/day',
      slug: 'artisan-collective-ecommerce',
      color: '#EB5757',
      metrics: {
        timeSaved: '35 hours/week',
        responseTime: '< 2 seconds',
        volume: '890 messages/day'
      }
    },
    {
      industry: 'Services & SMBs',
      businessName: 'Elite Plumbing',
      agentType: 'Lead Capture & Booking',
      resultLine: '85% of inquiries converted without human touch',
      channels: ['Phone', 'Web', 'SMS'],
      agents: ['Lead Capture', 'Booking', 'Support'],
      scale: '340 msgs/day',
      slug: 'elite-plumbing-service',
      color: '#10B981',
      metrics: {
        timeSaved: '25 hours/week',
        responseTime: '< 1 second',
        volume: '340 messages/day'
      }
    },
    {
      industry: 'Restaurants',
      businessName: 'Spice Kitchen',
      agentType: 'Order & Delivery',
      resultLine: 'Handled 2× order volume with same staff',
      channels: ['WhatsApp', 'Phone', 'Web'],
      agents: ['Order', 'Support', 'Tracking'],
      scale: '670 msgs/day',
      slug: 'spice-kitchen-orders',
      color: '#F2994A',
      metrics: {
        timeSaved: '28 hours/week',
        responseTime: '< 3 seconds',
        volume: '670 messages/day'
      }
    },
    {
      industry: 'Healthcare',
      businessName: 'Wellness Center',
      agentType: 'Multi-service Booking',
      resultLine: 'Unified booking across 5 specialists, zero conflicts',
      channels: ['Web', 'Phone', 'Email'],
      agents: ['Booking', 'Reminder', 'Support'],
      scale: '420 msgs/day',
      slug: 'wellness-center-multi',
      color: '#2F80ED',
      metrics: {
        timeSaved: '24 hours/week',
        responseTime: '< 4 seconds',
        volume: '420 messages/day'
      }
    },
    {
      industry: 'E-commerce',
      businessName: 'Tech Gadgets Plus',
      agentType: 'Support & Returns',
      resultLine: '70% of support tickets resolved instantly',
      channels: ['WhatsApp', 'Email', 'Web'],
      agents: ['Support', 'Returns', 'Follow-up'],
      scale: '1200 msgs/day',
      slug: 'tech-gadgets-support',
      color: '#EB5757',
      metrics: {
        timeSaved: '42 hours/week',
        responseTime: '< 2 seconds',
        volume: '1200 messages/day'
      }
    },
    {
      industry: 'Services & SMBs',
      businessName: 'Pro Cleaners',
      agentType: 'Quote & Booking',
      resultLine: 'Instant quotes, 92% booking conversion rate',
      channels: ['SMS', 'Web', 'Phone'],
      agents: ['Quote', 'Booking', 'Reminder'],
      scale: '380 msgs/day',
      slug: 'pro-cleaners-quotes',
      color: '#10B981',
      metrics: {
        timeSaved: '20 hours/week',
        responseTime: '< 1 second',
        volume: '380 messages/day'
      }
    }
  ];

  const filteredCaseStudies = activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === activeIndustry);

  const getChannelIcon = (channel: string) => {
    switch(channel) {
      case 'WhatsApp': return MessageCircle;
      case 'Phone': return Phone;
      case 'Email': return Mail;
      case 'Web': return Globe;
      case 'SMS': return MessageSquare;
      case 'Instagram': return MessageSquare;
      default: return MessageSquare;
    }
  };

  const getAgentIcon = (agent: string) => {
    switch(agent) {
      case 'Booking': return Calendar;
      case 'Support': return MessageSquare;
      case 'Order': return ShoppingBag;
      case 'Follow-up': return ArrowRight;
      case 'Reminder': return Clock;
      case 'Lead Capture': return TrendingUp;
      case 'Quote': return Briefcase;
      case 'Returns': return ArrowRight;
      case 'Tracking': return TrendingUp;
      default: return Bot;
    }
  };

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section — Outcome First */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        {/* Animated flow lines background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
              style={{
                top: `${(i + 1) * 12}%`,
                left: 0,
                right: 0
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        {/* Gradient accents */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #2F80ED 0%, transparent 70%)' }}
          />
          <div 
            className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #9B51E0 0%, transparent 70%)' }}
          />
          <div 
            className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #F2994A 0%, transparent 70%)' }}
          />
        </div>

        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-800" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                How Businesses Use SMB Flow in the Real World
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From booking to support to campaigns — see how teams build agents, connect channels, and scale conversations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Industry Switcher */}
      <section className="pb-12">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                const isActive = activeIndustry === industry.name;
                
                return (
                  <motion.button
                    key={industry.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    onClick={() => setActiveIndustry(industry.name)}
                    className="group relative"
                  >
                    <div 
                      className="px-5 py-3 rounded-full border transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm"
                      style={{
                        backgroundColor: isActive ? `${industry.color}12` : 'rgba(255, 255, 255, 0.8)',
                        borderColor: isActive ? industry.color : '#E5E7EB',
                        color: isActive ? industry.color : '#6B7280',
                        boxShadow: isActive ? `0 4px 12px ${industry.color}25` : 'none'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{industry.name}</span>
                    </div>

                    {/* Hover glow */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"
                      style={{ backgroundColor: `${industry.color}20` }}
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Case Study Cards */}
      <section className="py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filteredCaseStudies.map((cs, idx) => (
                  <Link key={cs.slug} to={`/case-study/${cs.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group cursor-pointer h-full"
                    >
                      <div 
                        className="bg-white rounded-3xl overflow-hidden h-full flex flex-col relative transition-all duration-300"
                        style={{
                          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05)',
                        }}
                      >
                        {/* Subtle top border accent */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1 opacity-80"
                          style={{ backgroundColor: cs.color }}
                        />

                        {/* Top Section */}
                        <div className="p-7 pb-5">
                          <div className="flex items-start justify-between mb-4">
                            <div 
                              className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold"
                              style={{ 
                                backgroundColor: `${cs.color}12`,
                                color: cs.color
                              }}
                            >
                              {cs.industry}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              {cs.businessName}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Workflow className="w-4 h-4 opacity-60" style={{ color: cs.color }} />
                            <span>{cs.agentType}</span>
                          </div>
                        </div>

                        {/* Middle Section - Result */}
                        <div className="px-7 pb-6 flex-1 flex items-start">
                          <p 
                            className="text-lg leading-snug text-gray-700"
                            style={{ fontFamily: 'DM Sans, sans-serif' }}
                          >
                            {cs.resultLine}
                          </p>
                        </div>

                        {/* Bottom Section - Meta */}
                        <div className="px-7 pb-7 pt-5 space-y-5 bg-gray-50/50 border-t border-gray-100">
                          {/* Channels */}
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2.5 font-semibold">Channels</p>
                            <div className="flex items-center gap-2">
                              {cs.channels.map((channel, cidx) => {
                                const ChannelIcon = getChannelIcon(channel);
                                return (
                                  <div
                                    key={cidx}
                                    className="w-9 h-9 rounded-xl bg-white flex items-center justify-center transition-all duration-200 group-hover:scale-105"
                                    style={{ 
                                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)'
                                    }}
                                    title={channel}
                                  >
                                    <ChannelIcon className="w-4 h-4 text-gray-500" />
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Agents & Scale */}
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1.5 text-gray-500">
                              <Bot className="w-3.5 h-3.5 opacity-60" />
                              <span>{cs.agents.length} agents</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-500">
                              <TrendingUp className="w-3.5 h-3.5 opacity-60" />
                              <span>{cs.scale}</span>
                            </div>
                          </div>
                        </div>

                        {/* Hover overlay effect */}
                        <div 
                          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ 
                            boxShadow: `0 20px 40px ${cs.color}15, 0 8px 16px ${cs.color}10`
                          }}
                        />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl lg:text-4xl mb-6 text-gray-800"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Build Your Own Flow
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                These aren't special cases. They're patterns you can recreate in minutes with the right tools.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/templates">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                    Explore Templates
                  </Button>
                </Link>
                <Link to="/product/flow-builder">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 rounded-xl">
                    See Flow Builder
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
