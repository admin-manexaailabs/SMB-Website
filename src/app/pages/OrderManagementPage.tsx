import { motion } from 'motion/react';
import { Link } from 'react-router';
import { 
  Package,
  Truck,
  CheckCircle,
  X,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  MessageSquare,
  Bell,
  Settings,
  Activity,
  ArrowRight,
  Workflow,
  Bot,
  Network,
  Inbox,
  Database,
  ShoppingCart,
  ShoppingBag,
  Utensils,
  Store,
  Sparkles,
  RefreshCw,
  Search,
  ClipboardCheck,
  RotateCcw
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

export default function OrderManagementPage() {
  const [activeOrderStep, setActiveOrderStep] = useState(0);
  const [activeNotification, setActiveNotification] = useState(0);

  // Order lifecycle animation
  const orderSteps = [
    { label: 'Order placed', icon: ShoppingCart, color: 'blue' },
    { label: 'Processing', icon: Settings, color: 'orange' },
    { label: 'Shipped', icon: Truck, color: 'purple' },
    { label: 'Delivered', icon: CheckCircle, color: 'green' },
    { label: 'Feedback', icon: MessageSquare, color: 'blue' }
  ];

  // Notification timeline animation
  const notificationSteps = [
    { label: 'Order confirmed', time: 'Day 1', icon: CheckCircle },
    { label: 'Shipped notification', time: 'Day 2', icon: Truck },
    { label: 'Delivery alert', time: 'Day 5', icon: Package },
    { label: 'Feedback request', time: 'Day 7', icon: MessageSquare }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrderStep((prev) => (prev + 1) % orderSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNotification((prev) => (prev + 1) % notificationSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Opening Context (Problem → Control) */}
      <section className="pt-12 pb-20">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Package className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Solution
                </span>
              </div>

              <h1 
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Order Management, Without Constant Follow-Ups
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Track orders, answer status questions, and send updates automatically — across messages, chat, and calls.
              </p>

              <Link to="/templates#orders">
                <Button 
                  size="lg"
                  className="shadow-lg text-base px-8 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Order Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right: Order Lifecycle Animation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-xl">
                <h3 className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Order #12345
                </h3>
                
                <div className="space-y-4">
                  {orderSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      className="relative"
                    >
                      <div className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all duration-300 ${
                        activeOrderStep === idx 
                          ? `border-${step.color}-400 bg-${step.color}-50 shadow-md` 
                          : 'border-gray-200 bg-white'
                      }`}>
                        <motion.div 
                          className={`w-10 h-10 rounded-lg ${
                            activeOrderStep === idx 
                              ? `bg-${step.color}-500` 
                              : `bg-${step.color}-100`
                          } flex items-center justify-center flex-shrink-0 transition-all duration-300`}
                          animate={{
                            scale: activeOrderStep === idx ? [1, 1.1, 1] : 1
                          }}
                          transition={{
                            duration: 0.5
                          }}
                        >
                          <step.icon className={`w-5 h-5 ${
                            activeOrderStep === idx ? 'text-white' : `text-${step.color}-600`
                          }`} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <h4 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {step.label}
                          </h4>
                          {activeOrderStep === idx && (
                            <motion.p 
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-xs text-gray-600 mt-0.5"
                            >
                              {idx === 0 && 'Customer notified via WhatsApp'}
                              {idx === 1 && 'Preparing your order'}
                              {idx === 2 && 'On the way to you'}
                              {idx === 3 && 'Successfully delivered'}
                              {idx === 4 && 'How was your experience?'}
                            </motion.p>
                          )}
                        </div>

                        {activeOrderStep >= idx && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className={`w-4 h-4 text-${step.color}-500`} />
                          </motion.div>
                        )}
                      </div>

                      {/* Connecting line */}
                      {idx < orderSteps.length - 1 && (
                        <div className={`w-0.5 h-4 ml-5 transition-colors duration-300 ${
                          activeOrderStep > idx ? `bg-${orderSteps[idx + 1].color}-300` : 'bg-gray-200'
                        }`} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ What This Solves (Pain Points) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Why order handling breaks down
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: '"Where is my order?" messages',
                solution: 'Instant status replies',
                icon: Search,
                color: 'blue'
              },
              {
                problem: 'Manual tracking',
                solution: 'Real-time order updates',
                icon: Activity,
                color: 'purple'
              },
              {
                problem: 'Missed follow-ups',
                solution: 'Automated notifications',
                icon: Bell,
                color: 'orange'
              },
              {
                problem: 'Scattered tools',
                solution: 'One unified system',
                icon: Inbox,
                color: 'green'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow h-full">
                  {/* Problem */}
                  <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{item.problem}</span>
                  </div>

                  {/* Solution */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <span className="text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.solution}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Customer Order Experience (Front Stage) */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How customers interact with orders
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
                {[
                  { label: 'Customer asks order status', icon: MessageCircle, sublabel: 'WhatsApp / Web / Call' },
                  { label: 'Agent fetches order info', icon: Bot, sublabel: 'Instant lookup' },
                  { label: 'Status shared instantly', icon: Package, sublabel: 'Real-time data' },
                  { label: 'Next steps suggested', icon: ArrowRight, sublabel: 'Proactive help' }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg mb-4 border border-gray-200">
                      <step.icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-sm max-w-[140px] mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {step.label}
                    </span>
                    <span className="text-xs text-gray-500">{step.sublabel}</span>
                    
                    {idx < 3 && (
                      <ArrowRight className="hidden md:block w-6 h-6 text-gray-400 absolute" style={{ left: 'calc(100% + 0.75rem)', top: '35px' }} />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center pt-6 border-t border-blue-200"
              >
                <p className="text-lg text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Customers get answers instantly. Your team doesn't get interrupted.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Business Control (Back Stage) */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              What you manage behind the scenes
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: ClipboardCheck, label: 'Order statuses', color: 'blue' },
                { icon: Truck, label: 'Shipping updates', color: 'purple' },
                { icon: RotateCcw, label: 'Refund & return rules', color: 'red' },
                { icon: Bell, label: 'Delivery notifications', color: 'orange' },
                { icon: Activity, label: 'Order history', color: 'green' }
              ].map((control, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow text-center">
                    <div className={`w-12 h-12 rounded-xl bg-${control.color}-100 flex items-center justify-center mx-auto mb-4`}>
                      <control.icon className={`w-6 h-6 text-${control.color}-600`} />
                    </div>
                    <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {control.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Your rules decide how updates are handled.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Channels That Support Orders */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Order updates across all channels
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: MessageCircle,
                name: 'WhatsApp',
                description: 'Status checks & updates',
                color: 'green'
              },
              {
                icon: MessageSquare,
                name: 'Webchat',
                description: 'Website order tracking',
                color: 'blue'
              },
              {
                icon: Mail,
                name: 'Email',
                description: 'Confirmations & receipts',
                color: 'red'
              },
              {
                icon: MessageSquare,
                name: 'SMS',
                description: 'Delivery alerts',
                color: 'orange'
              },
              {
                icon: Phone,
                name: 'Phone',
                description: 'Call-based order queries',
                color: 'purple'
              },
              {
                icon: Instagram,
                name: 'Instagram & Facebook',
                description: 'DM inquiries',
                color: 'pink'
              }
            ].map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-all h-full">
                  <div className={`w-12 h-12 rounded-xl bg-${channel.color}-100 flex items-center justify-center mb-4`}>
                    <channel.icon className={`w-6 h-6 text-${channel.color}-600`} />
                  </div>
                  
                  <h3 className="text-lg mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {channel.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    {channel.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              One order system. Every channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Automated Notifications & Updates */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Keep customers informed automatically
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
              {/* Timeline */}
              <div className="relative">
                {notificationSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative flex items-center gap-6 mb-12 last:mb-0"
                  >
                    {/* Timeline Line */}
                    {idx < notificationSteps.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-12 bg-gray-200" />
                    )}

                    {/* Timeline Dot */}
                    <motion.div 
                      className={`w-12 h-12 rounded-full ${
                        activeNotification === idx 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                          : 'bg-gray-200'
                      } flex items-center justify-center shadow-lg flex-shrink-0 z-10 transition-all duration-300`}
                      animate={{
                        scale: activeNotification === idx ? [1, 1.15, 1] : 1
                      }}
                      transition={{
                        duration: 0.6
                      }}
                    >
                      <step.icon className={`w-6 h-6 ${
                        activeNotification === idx ? 'text-white' : 'text-gray-400'
                      }`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {step.label}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <p className="text-xl text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Fewer support tickets. Better customer trust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Perfect for Order-Driven Businesses */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Built for businesses that sell
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: ShoppingCart, label: 'E-commerce stores', color: 'blue' },
              { icon: Utensils, label: 'Restaurants & food delivery', color: 'orange' },
              { icon: ShoppingBag, label: 'Retail & D2C brands', color: 'purple' },
              { icon: Package, label: 'Service providers with orders', color: 'green' },
              { icon: Store, label: 'Local sellers', color: 'red' }
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all h-full text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-${industry.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <industry.icon className={`w-8 h-8 text-${industry.color}-600`} />
                  </div>
                  
                  <h3 className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {industry.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8️⃣ Powered by SMB Flow (Platform Tie-In) */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Order management is powered by:
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Bot className="w-5 h-5 text-blue-600" />
                <span className="text-sm">AI Agents</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Database className="w-5 h-5 text-purple-600" />
                <span className="text-sm">Data & Integrations</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Workflow className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Flow Builder</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2 text-gray-700">
                <Inbox className="w-5 h-5 text-green-600" />
                <span className="text-sm">Unified Inbox</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ Soft CTA */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-12 text-gray-900" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Let orders manage themselves
            </h2>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/templates#orders">
                <Button 
                  size="lg"
                  className="text-base px-10 rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #2F80ED 0%, #9B51E0 50%, #F2994A 100%)',
                  }}
                >
                  Try Order Automation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/templates#orders">
                <Button 
                  size="lg"
                  variant="outline"
                  className="text-base px-10 border-2 border-gray-300 rounded-full hover:bg-gray-50"
                >
                  See Order Templates
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}