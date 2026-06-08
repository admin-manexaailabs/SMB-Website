import { motion } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle,
  Zap,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  ChevronDown,
  Briefcase,
  MessageSquare,
  Code,
  BarChart,
  Target,
  Headphones,
  Twitter,
  Linkedin,
  Github,
  Activity,
  FileText,
  Bell,
  Settings,
  Calendar,
  Inbox
} from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export default function OmniAgentBeam() {
  return (
    <div className="bg-white text-gray-900 overflow-hidden" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By */}
      <TrustedBySection />

      {/* AI Agent Cards */}
      <AIAgentCards />

      {/* System Architecture */}
      <SystemArchitecture />

      {/* KPI Metrics */}
      <KPIMetrics />

      {/* Industry Use Cases */}
      <IndustryUseCases />

      {/* Insights Section */}
      <InsightsSection />

      {/* Final CTA */}
      <FinalCTA />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
              <span className="text-lg tracking-tight">OmniAgent</span>
            </div>
            <div className="hidden lg:flex items-center gap-10 text-sm text-gray-600">
              <a href="#product" className="hover:text-gray-900 transition-colors">Product</a>
              <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#company" className="hover:text-gray-900 transition-colors">Company</a>
              <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm text-gray-700 hover:text-gray-900">
              Sign In
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-6 rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight" style={{ fontWeight: 300 }}>
            Hire Self-Evolving<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{ fontWeight: 400 }}>
              AI Agents
            </span> to Scale<br />
            Your Operations
          </h1>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
            OmniAgent deploys autonomous AI workers that collaborate, learn, and execute complex business workflows—so your teams can focus on innovation, not repetition.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-base px-8 rounded-full shadow-lg">
              Launch Your AI Workforce
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 text-base px-8 rounded-full">
              Book Demo
            </Button>
          </div>
        </motion.div>

        {/* Floating 3D Dashboard Screens */}
        <FloatingDashboards />
      </div>
    </section>
  );
}

// Floating Dashboards
function FloatingDashboards() {
  return (
    <div className="relative max-w-6xl mx-auto h-[600px]">
      {/* Main Dashboard - Center */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px]"
        style={{ transform: 'translate(-50%, -50%) perspective(1200px) rotateX(5deg) rotateY(-5deg)' }}
      >
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs text-gray-500">agent_dashboard.live</div>
          </div>
          <div className="p-6 space-y-3">
            {[
              { status: 'active', task: 'Processing customer inquiries', agent: 'Support Agent', progress: 85 },
              { status: 'complete', task: 'Invoice reconciliation batch #247', agent: 'Finance Agent', progress: 100 },
              { status: 'active', task: 'Lead qualification pipeline', agent: 'Sales Agent', progress: 62 },
              { status: 'pending', task: 'Code review for API updates', agent: 'Dev Agent', progress: 40 },
              { status: 'active', task: 'Monthly report generation', agent: 'Ops Agent', progress: 73 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-4"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    item.status === 'active' ? 'bg-blue-400 animate-pulse' : 
                    item.status === 'complete' ? 'bg-green-400' : 
                    'bg-yellow-400'
                  }`} />
                  <div className="flex-1">
                    <div className="text-sm text-gray-300 mb-1">{item.task}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">{item.agent}</div>
                      <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${
                            item.status === 'complete' ? 'bg-green-400' : 'bg-blue-400'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                        />
                      </div>
                      <div className="text-xs text-gray-500">{item.progress}%</div>
                    </div>
                  </div>
                  {item.status === 'complete' && <CheckCircle className="w-5 h-5 text-green-400" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Task List - Left */}
      <motion.div
        initial={{ opacity: 0, x: -100, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-0 top-1/4 w-80"
        style={{ transform: 'perspective(1200px) rotateY(15deg) rotateX(5deg)' }}
      >
        <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs text-gray-400">Active Tasks</div>
            <div className="text-xs text-blue-400">24 running</div>
          </div>
          <div className="space-y-2">
            {[
              { title: 'Email campaign analysis', time: '2m ago', icon: Inbox },
              { title: 'Database optimization', time: '5m ago', icon: Activity },
              { title: 'Customer data sync', time: '12m ago', icon: Users },
              { title: 'Report generation', time: '18m ago', icon: FileText }
            ].map((task, i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-3 flex items-center gap-3">
                <task.icon className="w-4 h-4 text-blue-400" />
                <div className="flex-1">
                  <div className="text-xs text-gray-300">{task.title}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{task.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Agent Activity - Right */}
      <motion.div
        initial={{ opacity: 0, x: 100, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 bottom-1/4 w-80"
        style={{ transform: 'perspective(1200px) rotateY(-15deg) rotateX(5deg)' }}
      >
        <div className="bg-gray-900 rounded-xl shadow-xl border border-gray-800 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs text-gray-400">Agent Activity</div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="text-xs text-green-400">Live</div>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Support Agent', action: 'Resolved 3 tickets', status: 'active', color: 'from-blue-500 to-cyan-500' },
              { name: 'Finance Agent', action: 'Processed 12 invoices', status: 'active', color: 'from-green-500 to-emerald-500' },
              { name: 'Sales Agent', action: 'Qualified 8 leads', status: 'idle', color: 'from-purple-500 to-pink-500' }
            ].map((agent, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg`}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-300">{agent.name}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{agent.action}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${
                  agent.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-500'
                }`}>
                  {agent.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Workflow - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute right-20 top-0 w-64"
        style={{ transform: 'perspective(1200px) rotateX(10deg)' }}
      >
        <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-4">
          <div className="text-xs text-gray-400 mb-3">Workflow Status</div>
          <div className="flex items-center gap-2 mb-3">
            {[
              { color: 'from-blue-500 to-cyan-500', label: 'Input' },
              { color: 'from-purple-500 to-pink-500', label: 'Process' },
              { color: 'from-green-500 to-emerald-500', label: 'Output' }
            ].map((step, i) => (
              <div key={i} className="flex-1">
                <div className={`h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="text-xs text-gray-600 mt-1 text-center">{step.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-800/50 rounded p-2">
            <div className="text-xs text-gray-500">Execution time: 1.2s</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Trusted By Section
function TrustedBySection() {
  const logos = ['Stripe', 'Shopify', 'Movewit', 'LiveOps', 'Deel', 'FreshDesk'];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-8 tracking-wide uppercase" style={{ fontWeight: 400 }}>Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-400 text-lg hover:text-gray-600 transition-colors"
                style={{ fontWeight: 300 }}
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// AI Agent Cards
function AIAgentCards() {
  const agents = [
    {
      title: 'Ops Agent',
      description: 'Automates daily business operations, reporting, and coordination.',
      icon: Briefcase,
      gradient: 'from-blue-500 to-cyan-500',
      benefits: ['Automated workflows', 'Real-time reporting', 'Cross-team coordination'],
      metrics: [
        { label: 'Tasks/day', value: '342' },
        { label: 'Accuracy', value: '94%' }
      ]
    },
    {
      title: 'Finance Agent',
      description: 'Manages invoices, reconciliation, ledger updates, and financial workflows.',
      icon: DollarSign,
      gradient: 'from-green-500 to-emerald-500',
      benefits: ['Invoice processing', 'Automatic reconciliation', 'Ledger management'],
      metrics: [
        { label: 'Invoices/mo', value: '2.4K' },
        { label: 'Error rate', value: '0.2%' }
      ]
    },
    {
      title: 'Support Agent',
      description: 'Resolves customer issues across email, chat, and support platforms.',
      icon: Headphones,
      gradient: 'from-purple-500 to-pink-500',
      benefits: ['24/7 availability', 'Multi-channel support', 'Intelligent triage'],
      metrics: [
        { label: 'Tickets/day', value: '856' },
        { label: 'Resolution', value: '87%' }
      ]
    },
    {
      title: 'Developer Agent',
      description: 'Assists with code generation, debugging, and API tasks.',
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      benefits: ['Code generation', 'Bug detection', 'API integration'],
      metrics: [
        { label: 'Code lines', value: '12K' },
        { label: 'Tests pass', value: '98%' }
      ]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-6 tracking-tight" style={{ fontWeight: 300 }}>
            AI Agents: Reliable Workforce<br />
            <span style={{ fontWeight: 400 }}>With Human-Level Performance</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${agent.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity blur-xl`} />
              <div className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-all">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg`}>
                        <agent.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl tracking-tight" style={{ fontWeight: 400 }}>
                        {agent.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                      {agent.description}
                    </p>
                    <ul className="space-y-2">
                      {agent.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span style={{ fontWeight: 300 }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full lg:w-80">
                    <div className="bg-gray-900 rounded-xl p-5 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs text-gray-400">Performance</div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <div className="text-xs text-green-400">Active</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {agent.metrics.map((metric, j) => (
                          <div key={j} className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-2xl text-white mb-1" style={{ fontWeight: 400 }}>{metric.value}</div>
                            <div className="text-xs text-gray-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-xs text-gray-400">Activity</div>
                          <Activity className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="h-12 flex items-end gap-1">
                          {[...Array(12)].map((_, k) => (
                            <div 
                              key={k} 
                              className={`flex-1 bg-gradient-to-t ${agent.gradient} rounded-sm opacity-60`}
                              style={{ height: `${Math.random() * 100}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// System Architecture
function SystemArchitecture() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-6 tracking-tight" style={{ fontWeight: 300 }}>
            Agnostic. Reliable. <span style={{ fontWeight: 400 }}>Accurate AI</span><br />
            for Enterprise.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontWeight: 300 }}>
            OmniAgent processes data across departments to coordinate autonomous task completion.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Central Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mx-auto w-72 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl mb-16"
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
              <div className="text-xl mb-2" style={{ fontWeight: 400 }}>OmniAgent Core</div>
              <div className="text-sm text-blue-100 mb-4" style={{ fontWeight: 300 }}>Autonomous Orchestration</div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-white/10 rounded p-2">
                  <div className="text-white" style={{ fontWeight: 400 }}>247</div>
                  <div className="text-blue-200">Tasks</div>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <div className="text-white" style={{ fontWeight: 400 }}>98%</div>
                  <div className="text-blue-200">Uptime</div>
                </div>
                <div className="bg-white/10 rounded p-2">
                  <div className="text-white" style={{ fontWeight: 400 }}>4</div>
                  <div className="text-blue-200">Agents</div>
                </div>
              </div>
            </motion.div>

            {/* Connected Nodes */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { icon: Briefcase, label: 'Operations', tasks: 89, status: 'Active' },
                { icon: DollarSign, label: 'Finance', tasks: 56, status: 'Active' },
                { icon: MessageSquare, label: 'Support', tasks: 124, status: 'Active' },
                { icon: Code, label: 'Development', tasks: 43, status: 'Idle' }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <node.icon className="w-8 h-8 text-blue-400" />
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      node.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {node.status}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 mb-2" style={{ fontWeight: 400 }}>{node.label}</div>
                  <div className="text-2xl text-white mb-1" style={{ fontWeight: 400 }}>{node.tasks}</div>
                  <div className="text-xs text-gray-500">Active tasks</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" className="border-gray-700 bg-transparent text-white hover:bg-gray-800 rounded-full px-8">
              See System Architecture
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// KPI Metrics
function KPIMetrics() {
  const metrics = [
    {
      value: '93%',
      label: 'Task Accuracy',
      description: 'Data processing & task execution.',
      gradient: 'from-green-500 to-emerald-500',
      chart: [65, 72, 68, 85, 90, 88, 93]
    },
    {
      value: '100%',
      label: 'Availability',
      description: 'Always-on AI workforce.',
      gradient: 'from-blue-500 to-cyan-500',
      chart: [98, 99, 100, 100, 99, 100, 100]
    },
    {
      value: '85%',
      label: 'Cost Reduction',
      description: 'Lower overhead compared to traditional teams.',
      gradient: 'from-purple-500 to-pink-500',
      chart: [45, 55, 62, 70, 75, 80, 85]
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-6 tracking-tight" style={{ fontWeight: 300 }}>
            Improve Operational Efficiency<br />
            <span style={{ fontWeight: 400 }}>and Unlock Leverage. Fast.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="mb-4">
                  <div className={`text-6xl bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`} style={{ fontWeight: 400 }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </div>
                <div className="h-24 flex items-end gap-1">
                  {metric.chart.map((value, j) => (
                    <motion.div
                      key={j}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className={`flex-1 bg-gradient-to-t ${metric.gradient} rounded-sm`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-gray-600">
                  <span>Mon</span>
                  <span>Sun</span>
                </div>
              </div>

              {/* Metric Details */}
              <div className="text-center">
                <h3 className="text-2xl mb-3 tracking-tight" style={{ fontWeight: 400 }}>
                  {metric.label}
                </h3>
                <p className="text-gray-600" style={{ fontWeight: 300 }}>
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industry Use Cases
function IndustryUseCases() {
  const useCases = [
    {
      title: 'AI for Operations Teams',
      description: 'End-to-end task automation for growing teams.',
      gradient: 'from-blue-600/80 to-cyan-600/80',
      icon: Briefcase,
      features: ['Workflow automation', 'Task scheduling', 'Team coordination']
    },
    {
      title: 'AI for Sales & Marketing',
      description: 'AI-led outreach, data enrichment, and content ops.',
      gradient: 'from-purple-600/80 to-pink-600/80',
      icon: Target,
      features: ['Lead generation', 'Email campaigns', 'Content creation']
    },
    {
      title: 'AI for Support & Service',
      description: 'Omnichannel responses, triage, and resolutions.',
      gradient: 'from-green-600/80 to-emerald-600/80',
      icon: Headphones,
      features: ['24/7 support', 'Ticket triage', 'Auto-responses']
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-6 tracking-tight" style={{ fontWeight: 300 }}>
            Industry-Specific AI:<br />
            <span style={{ fontWeight: 400 }}>One Platform for All Your Needs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className={`h-80 bg-gradient-to-br ${useCase.gradient} flex flex-col items-center justify-center p-8`}>
                  <useCase.icon className="w-20 h-20 text-white mb-6" />
                  <div className="space-y-2 w-full">
                    {useCase.features.map((feature, j) => (
                      <div key={j} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-sm text-center">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl mb-3 tracking-tight" style={{ fontWeight: 400 }}>
                    {useCase.title}
                  </h3>
                  <p className="text-white/90" style={{ fontWeight: 300 }}>
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Insights Section
function InsightsSection() {
  const articles = [
    { title: 'How AI Agents Transform Modern Businesses', time: '5 min read' },
    { title: 'Scaling Ops Teams with Autonomous AI', time: '8 min read' },
    { title: 'Roadmap to Building an AI Workforce', time: '6 min read' },
    { title: 'The Future of Enterprise AI Automation', time: '10 min read' }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-200"
        >
          <h2 className="text-4xl mb-10 tracking-tight" style={{ fontWeight: 300 }}>
            <span style={{ fontWeight: 400 }}>Agentic Insights</span>
          </h2>
          <ul className="space-y-5">
            {articles.map((article, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <a href="#" className="flex items-center justify-between text-lg text-gray-700 hover:text-gray-900 transition-colors group p-4 rounded-xl hover:bg-white/50">
                  <div className="flex items-center gap-4">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                    <span style={{ fontWeight: 300 }}>{article.title}</span>
                  </div>
                  <span className="text-sm text-gray-500">{article.time}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl mb-8 tracking-tight leading-tight" style={{ fontWeight: 300 }}>
              Build Your<br />
              <span style={{ fontWeight: 400 }}>AI Workforce</span><br />
              Today
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed" style={{ fontWeight: 300 }}>
              Deploy OmniAgent in minutes and watch your operations scale autonomously.
            </p>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-10 rounded-full shadow-xl">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            {/* Floating Stacked Screens */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                animate={{ y: [0, -20, 0] }}
                style={{
                  animationDuration: `${3 + i}s`,
                  position: 'absolute',
                  left: `${i * 30}px`,
                  top: `${i * 40}px`,
                  zIndex: 3 - i
                }}
                className="w-80 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden"
              >
                <div className="p-4 border-b border-gray-800">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex items-center gap-3 bg-gray-800/50 rounded p-3">
                        <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-500" />
                        <div className="flex-1">
                          <div className="h-2 bg-gray-700 rounded w-3/4 mb-1" />
                          <div className="h-1.5 bg-gray-700 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is an AI Agent?',
      answer: 'A fully autonomous system that executes workflows end-to-end without human intervention. AI agents can plan, reason, and adapt to complete complex tasks across multiple systems and channels.'
    },
    {
      question: 'How does OmniAgent integrate with my tools?',
      answer: 'Through secure APIs, pre-built connectors, and enterprise workflows. We support 30+ integrations including Slack, Salesforce, HubSpot, and custom REST APIs.'
    },
    {
      question: 'What tasks can an AI Agent handle?',
      answer: 'Operations automation, customer support, financial processing, development tasks, data analysis, reporting, and more. Our agents adapt to your specific business needs.'
    },
    {
      question: 'Is my data private and secure?',
      answer: 'Yes. Enterprise-grade compliance & encryption included with SOC 2, GDPR, and HIPAA compliance. Your data is never used to train models and remains completely private.'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-6 tracking-tight" style={{ fontWeight: 300 }}>
            <span style={{ fontWeight: 400 }}>Frequently Asked Questions</span>
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
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg pr-4" style={{ fontWeight: 300 }}>
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 text-gray-600 border-t border-gray-100">
                  <p className="pt-6 leading-relaxed" style={{ fontWeight: 300 }}>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const links = {
    Product: ['Features', 'Agents', 'Integrations', 'Pricing', 'Changelog'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance']
  };

  return (
    <footer className="py-20 px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-6 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
              <span className="text-lg tracking-tight">OmniAgent</span>
            </div>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
              Deploy autonomous AI workers that collaborate, learn, and execute complex workflows.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm mb-4" style={{ fontWeight: 400 }}>{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontWeight: 300 }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500" style={{ fontWeight: 300 }}>© 2025 OmniAgent. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors" style={{ fontWeight: 300 }}>Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors" style={{ fontWeight: 300 }}>Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors" style={{ fontWeight: 300 }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
