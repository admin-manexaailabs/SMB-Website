import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Bot,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Globe,
  Instagram,
  Activity,
  Clock,
  ArrowRight,
  Zap,
  Calendar,
  Users,
  Target,
  Workflow,
  Database,
  LineChart,
  PieChart,
  Layers,
  Eye
} from 'lucide-react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function AnalyticsPage() {
  const businessMetrics = [
    {
      icon: MessageSquare,
      label: 'Total Conversations',
      value: '12,847',
      trend: '+12%',
      isPositive: true
    },
    {
      icon: Bot,
      label: 'Active Agents',
      value: '24',
      trend: '+3',
      isPositive: true
    },
    {
      icon: Send,
      label: 'Messages Sent',
      value: '45,293',
      trend: '+18%',
      isPositive: true
    },
    {
      icon: CheckCircle,
      label: 'Successful Outcomes',
      value: '9,841',
      trend: '+8%',
      isPositive: true
    },
    {
      icon: AlertCircle,
      label: 'Pending / Escalated',
      value: '127',
      trend: '-5%',
      isPositive: true
    }
  ];

  const channels = [
    { name: 'WhatsApp', icon: MessageSquare, value: 45, color: '#10B981' },
    { name: 'Phone', icon: Phone, value: 25, color: '#3B82F6' },
    { name: 'Email', icon: Mail, value: 15, color: '#8B5CF6' },
    { name: 'Web Chat', icon: Globe, value: 10, color: '#F59E0B' },
    { name: 'SMS', icon: Send, value: 5, color: '#EF4444' }
  ];

  const agentMetrics = [
    { label: 'Conversations handled', value: '8,945' },
    { label: 'Completion rate', value: '94%' },
    { label: 'Avg response time', value: '2.3s' },
    { label: 'Escalations', value: '127' }
  ];

  const insights = [
    {
      icon: MessageSquare,
      text: 'WhatsApp has the highest conversion',
      color: 'green'
    },
    {
      icon: Phone,
      text: 'Voice calls spike after 6 PM',
      color: 'blue'
    },
    {
      icon: Bot,
      text: 'Agent A resolves faster than average',
      color: 'purple'
    },
    {
      icon: Workflow,
      text: 'Flow X causes drop-offs at decision node',
      color: 'orange'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* 1️⃣ Intro Section – See Everything, Clearly */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Analytics that make sense for your business
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Track conversations, agents, campaigns, and channels in one clear view — no data science degree required.
            </p>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
              {/* Mini Dashboard */}
              <div className="space-y-6">
                {/* Top Metrics Row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active', value: '847', color: 'blue' },
                    { label: 'Resolved', value: '9.2k', color: 'green' },
                    { label: 'Pending', value: '127', color: 'orange' }
                  ].map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                      className="bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                      <div className={`text-2xl text-${metric.color}-600`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {metric.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Areas */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Line Chart */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-40 relative overflow-hidden"
                  >
                    <div className="text-xs text-gray-500 mb-2">Conversation Volume</div>
                    
                    {/* Simple line chart visualization */}
                    <svg className="w-full h-24" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <motion.polyline
                        points="0,60 50,45 100,50 150,30 200,35 250,20 300,25"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                      <motion.polyline
                        points="0,60 50,45 100,50 150,30 200,35 250,20 300,25 300,80 0,80"
                        fill="url(#gradient1)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  {/* Bar Chart */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 h-40"
                  >
                    <div className="text-xs text-gray-500 mb-2">Channel Distribution</div>
                    
                    {/* Simple bar chart */}
                    <div className="flex items-end justify-between h-24 gap-2">
                      {[
                        { height: '75%', color: '#10B981' },
                        { height: '50%', color: '#3B82F6' },
                        { height: '35%', color: '#8B5CF6' },
                        { height: '25%', color: '#F59E0B' },
                        { height: '15%', color: '#EF4444' }
                      ].map((bar, idx) => (
                        <motion.div
                          key={idx}
                          className="flex-1 rounded-t"
                          style={{ backgroundColor: bar.color }}
                          initial={{ height: 0 }}
                          animate={{ height: bar.height }}
                          transition={{ duration: 0.8, delay: 1 + idx * 0.1 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ High-Level Business Overview */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Your business at a glance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {businessMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <metric.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.isPositive ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      <span>{metric.trend}</span>
                    </div>
                  </div>
                  
                  <div className="text-3xl mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {metric.value}
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Channel Performance Analytics */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How customers reach you
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Channel Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Volume per channel
              </h3>
              
              {/* Horizontal Bar Chart */}
              <div className="space-y-4">
                {channels.map((channel, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <channel.icon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{channel.name}</span>
                      </div>
                      <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {channel.value}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: channel.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${channel.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Channel Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Channel insights
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Response rate', value: '94%', color: 'green' },
                  { label: 'Peak hours', value: '6-9 PM', color: 'blue' },
                  { label: 'Drop-off points', value: 'Low', color: 'purple' },
                  { label: 'Avg. resolution time', value: '4.2 min', color: 'orange' }
                ].map((insight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-sm text-gray-700">{insight.label}</span>
                    <span 
                      className={`text-sm text-${insight.color}-600`}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {insight.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Agent Performance Insights */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How your agents perform
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understand which agents perform best and where improvements are needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md"
          >
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {agentMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="text-center p-4 bg-gray-50 rounded-xl"
                >
                  <div className="text-3xl mb-2 text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Agent Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Agent
                    </th>
                    <th className="text-center py-3 px-4 text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Conversations
                    </th>
                    <th className="text-center py-3 px-4 text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Success Rate
                    </th>
                    <th className="text-center py-3 px-4 text-xs text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Avg Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Booking Agent', conversations: '3,421', success: '96%', time: '1.8s', best: true },
                    { name: 'Support Agent', conversations: '2,847', success: '94%', time: '2.1s', best: false },
                    { name: 'Sales Agent', conversations: '1,923', success: '89%', time: '3.2s', best: false },
                    { name: 'Follow-up Agent', conversations: '754', success: '92%', time: '2.7s', best: false }
                  ].map((agent, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`border-b border-gray-100 ${agent.best ? 'bg-green-50/50' : ''}`}
                    >
                      <td className="py-3 px-4 text-sm text-gray-900">
                        {agent.name}
                        {agent.best && (
                          <span className="ml-2 text-xs text-green-600">★ Top performer</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">
                        {agent.conversations}
                      </td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">
                        {agent.success}
                      </td>
                      <td className="py-3 px-4 text-sm text-center text-gray-700">
                        {agent.time}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5️⃣ Flow & Automation Analytics */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              What happens inside your flows
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md"
          >
            {/* Flow Visualization with Heat */}
            <div className="mb-8">
              <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Flow path analysis
              </h3>
              
              <div className="flex items-center justify-between max-w-4xl mx-auto">
                {[
                  { label: 'Entry', value: '100%', heat: 1 },
                  { label: 'Intent', value: '94%', heat: 0.94 },
                  { label: 'Decision', value: '78%', heat: 0.78 },
                  { label: 'Action', value: '89%', heat: 0.89 },
                  { label: 'Complete', value: '85%', heat: 0.85 }
                ].map((node, idx, arr) => (
                  <div key={idx} className="flex items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 }}
                      className="text-center"
                    >
                      <div 
                        className="w-20 h-20 rounded-xl flex items-center justify-center mb-2 relative"
                        style={{
                          backgroundColor: `rgba(59, 130, 246, ${node.heat * 0.2 + 0.1})`,
                          border: `2px solid rgba(59, 130, 246, ${node.heat})`
                        }}
                      >
                        <div className="text-sm text-blue-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          {node.value}
                        </div>
                        
                        {/* Heat indicator */}
                        {node.heat < 0.8 && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full" />
                        )}
                      </div>
                      <div className="text-xs text-gray-600">{node.label}</div>
                    </motion.div>
                    
                    {idx < arr.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                        className="w-8 h-0.5 bg-blue-300 mx-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Entry points', value: '7' },
                { label: 'Most-used nodes', value: 'Intent Check' },
                { label: 'Drop-off rate', value: '15%' },
                { label: 'Failed paths', value: '2.3%' }
              ].map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg text-center"
                >
                  <div className="text-2xl mb-1 text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6️⃣ Campaign & Scheduling Analytics */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Campaigns and scheduling results
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Campaign Insights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Campaign insights
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Messages sent', value: '12,847', icon: Send, color: 'blue' },
                  { label: 'Delivery success', value: '98.3%', icon: CheckCircle, color: 'green' },
                  { label: 'Responses', value: '7,234', icon: MessageSquare, color: 'purple' },
                  { label: 'Completion rate', value: '84%', icon: Target, color: 'orange' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 flex items-center justify-center`}>
                        <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                      </div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Scheduling Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md"
            >
              <h3 className="text-lg mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Scheduling insights
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Appointments booked', value: '1,847', icon: Calendar, color: 'blue' },
                  { label: 'No-shows', value: '4.2%', icon: AlertCircle, color: 'orange' },
                  { label: 'Reminders sent', value: '3,694', icon: Clock, color: 'purple' },
                  { label: 'Conversion rate', value: '78%', icon: TrendingUp, color: 'green' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 flex items-center justify-center`}>
                        <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                      </div>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Time-Based Trends */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Trends over time
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md"
          >
            {/* Time Filters */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Conversation growth
              </h3>
              
              <div className="flex gap-2">
                {['Daily', 'Weekly', 'Monthly'].map((period, idx) => (
                  <button
                    key={idx}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      idx === 1 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Trend Chart */}
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={i * 50}
                    x2="600"
                    y2={i * 50}
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Trend line */}
                <motion.polyline
                  points="0,150 100,130 200,140 300,100 400,110 500,70 600,80"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                
                {/* Area fill */}
                <motion.polyline
                  points="0,150 100,130 200,140 300,100 400,110 500,70 600,80 600,200 0,200"
                  fill="url(#gradient2)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                />
                
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Trend Insights */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[
                { label: 'Avg daily conversations', value: '+127' },
                { label: 'Peak day', value: 'Friday' },
                { label: 'Growth rate', value: '+18%' }
              ].map((insight, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-2xl mb-1 text-blue-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {insight.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {insight.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8️⃣ Real-Time Monitoring */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Live activity
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-md"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Activity,
                  label: 'Active conversations now',
                  value: '47',
                  color: 'blue',
                  pulse: true
                },
                {
                  icon: Bot,
                  label: 'Agents currently engaged',
                  value: '12',
                  color: 'green',
                  pulse: true
                },
                {
                  icon: MessageSquare,
                  label: 'Channel activity pulse',
                  value: 'High',
                  color: 'purple',
                  pulse: true
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white rounded-xl p-6 text-center relative overflow-hidden"
                >
                  {/* Pulse animation */}
                  {item.pulse && (
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-0 right-0 w-20 h-20 rounded-full bg-${item.color}-400`}
                    />
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 flex items-center justify-center mx-auto mb-4 relative z-10`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  
                  <div className="text-4xl mb-2 text-gray-900 relative z-10" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.value}
                  </div>
                  
                  <div className="text-sm text-gray-600 relative z-10">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9️⃣ Actionable Insights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Insights you can act on
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-xl p-6 border-l-4 border-${insight.color}-500 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-${insight.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <insight.icon className={`w-5 h-5 text-${insight.color}-600`} />
                  </div>
                  <div>
                    <p className="text-gray-900">
                      {insight.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10️⃣ How Analytics Connects Across SMB Flow */}
      <section className="py-24 bg-white">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4" 
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              How analytics connects across SMB Flow
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200 shadow-lg">
              {/* Central Analytics Hub */}
              <div className="flex flex-col items-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-2xl bg-blue-400"
                  />
                </motion.div>
                
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Analytics Layer
                  </span>
                </div>
              </div>

              {/* Connected Components */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { icon: Bot, label: 'Agents', color: 'blue' },
                  { icon: MessageSquare, label: 'Channels', color: 'green' },
                  { icon: Workflow, label: 'Flows', color: 'purple' },
                  { icon: Zap, label: 'Campaigns', color: 'orange' },
                  { icon: Database, label: 'Data & Knowledge', color: 'indigo' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm relative">
                      {/* Connection line indicator */}
                      <div className={`absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-0.5 bg-${item.color}-300`} />
                      
                      <div className={`w-10 h-10 rounded-lg bg-${item.color}-100 flex items-center justify-center mx-auto mb-2`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                      </div>
                      <span className="text-xs text-gray-700" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-700">
                  Every decision improves with visibility.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Cross-links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-6 mt-12"
          >
            <Link 
              to="/product/agents"
              className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-sm"
            >
              Explore AI Agents
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/product/flow-builder"
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 text-sm"
            >
              See Flow Builder
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}