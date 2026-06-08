import { motion } from 'motion/react';
import { Link, useParams } from 'react-router';
import { 
  ArrowLeft,
  Clock,
  Workflow,
  MessageSquare,
  Bot,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Layers,
  GitBranch
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';

export default function BlogArticlePage() {
  const { slug } = useParams();

  // This would normally come from a CMS or API
  const article = {
    title: 'Why Most AI Agents Fail in Real Businesses',
    category: 'AI Agents',
    readTime: '6 min',
    content: [
      {
        type: 'text',
        content: 'The gap between a working demo and a production AI agent isn\'t what most people think. It\'s not about model performance, API latency, or even cost per token. Those are solvable problems.'
      },
      {
        type: 'text',
        content: 'The real gap is structural. Most AI agents fail because they\'re built on assumptions that don\'t survive contact with actual business operations.'
      },
      {
        type: 'heading',
        content: 'The Demo Trap'
      },
      {
        type: 'text',
        content: 'A demo agent handles the happy path. A customer asks a clear question, the agent responds correctly, everyone applauds. But real conversations don\'t work like that.'
      },
      {
        type: 'callout',
        content: 'Real customers ask vague questions, change their mind mid-conversation, and expect the agent to remember context from three messages ago.'
      },
      {
        type: 'text',
        content: 'When you build for demos, you optimize for clarity. When you build for production, you optimize for ambiguity, interruption, and edge cases that happen every single day.'
      },
      {
        type: 'heading',
        content: 'The Three Structural Failures'
      },
      {
        type: 'text',
        content: 'After building hundreds of agent flows for real SMBs, we\'ve seen three patterns emerge consistently:'
      },
      {
        type: 'visual',
        visualType: 'flow',
        title: 'Agent Failure Patterns',
        nodes: [
          { label: 'No Fallback Logic', desc: 'Agent hits unknown → stops', icon: AlertCircle, color: '#EF4444' },
          { label: 'Context Loss', desc: 'Can\'t track conversation state', icon: MessageSquare, color: '#F59E0B' },
          { label: 'Channel Mismatch', desc: 'Built for one channel, breaks on others', icon: GitBranch, color: '#9B51E0' }
        ]
      },
      {
        type: 'heading',
        content: 'Building for Reality'
      },
      {
        type: 'text',
        content: 'Production agents need to be designed around three principles that demos don\'t care about:'
      },
      {
        type: 'list',
        items: [
          'Graceful degradation — when the agent doesn\'t know, it should know what to do',
          'Persistent context — conversations span hours, days, and channels',
          'Channel awareness — voice ≠ chat ≠ email in structure and expectation'
        ]
      },
      {
        type: 'text',
        content: 'This isn\'t about adding more features. It\'s about changing the foundation. An agent that can handle uncertainty, maintain context, and adapt to channels isn\'t just better — it\'s fundamentally different.'
      },
      {
        type: 'visual',
        visualType: 'comparison',
        title: 'Demo vs Production Architecture',
        left: {
          label: 'Demo Agent',
          points: ['Linear flow', 'Single channel', 'No error handling']
        },
        right: {
          label: 'Production Agent',
          points: ['Branching logic', 'Multi-channel ready', 'Fallback paths built in']
        }
      },
      {
        type: 'heading',
        content: 'What This Means for SMBs'
      },
      {
        type: 'text',
        content: 'Small businesses don\'t have engineering teams to rebuild agents when they break. They need agents that work on day one and keep working on day one hundred.'
      },
      {
        type: 'text',
        content: 'That\'s why SMB Flow templates aren\'t just pre-built flows. They\'re architected with fallback logic, context hooks, and channel flexibility already wired in. Not because it looks good in a demo, but because it survives in production.'
      },
      {
        type: 'callout',
        content: 'The best agent is the one that doesn\'t need constant fixing. Structure beats optimization every time.'
      }
    ]
  };

  const relatedArticles = [
    {
      title: 'Building Agents That Handle Uncertainty',
      category: 'AI Agents',
      readTime: '4 min',
      slug: 'agents-handle-uncertainty'
    },
    {
      title: 'The Flow Builder Philosophy',
      category: 'Product & Platform',
      readTime: '3 min',
      slug: 'flow-builder-philosophy'
    },
    {
      title: 'When to Escalate to Human',
      category: 'Automation & Workflows',
      readTime: '4 min',
      slug: 'when-to-escalate'
    }
  ];

  const categoryColors: { [key: string]: string } = {
    'Product & Platform': '#2F80ED',
    'AI Agents': '#9B51E0',
    'Automation & Workflows': '#F2994A',
    'Channels & Conversations': '#10B981',
    'Scaling SMB Operations': '#EF4444'
  };

  const getCategoryColor = (category: string) => {
    return categoryColors[category] || '#6B7280';
  };

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* Back Navigation */}
      <section className="pt-24 pb-8">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <Link to="/blogs">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Insights</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 1️⃣ Article Hero */}
      <section className="pb-12 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${getCategoryColor(article.category)} 0%, transparent 70%)` }}
          />
        </div>

        <div className="w-full px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Category tag */}
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-6"
                style={{ 
                  backgroundColor: `${getCategoryColor(article.category)}15`,
                  color: getCategoryColor(article.category)
                }}
              >
                {article.category}
              </div>

              {/* Title */}
              <h1 
                className="text-4xl lg:text-5xl mb-6 leading-[1.15] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {article.title}
              </h1>

              {/* Meta row */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} read</span>
                </div>
              </div>

              {/* Gradient divider */}
              <div 
                className="h-1 w-24 mx-auto rounded-full"
                style={{ 
                  background: `linear-gradient(to right, ${getCategoryColor(article.category)}, ${getCategoryColor(article.category)}40)`
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Article Body */}
      <section className="py-12">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
              style={{ 
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#374151'
              }}
            >
              {article.content.map((block, idx) => {
                if (block.type === 'text') {
                  return (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                    >
                      {block.content}
                    </motion.p>
                  );
                }

                if (block.type === 'heading') {
                  return (
                    <motion.h2
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      className="text-2xl lg:text-3xl mt-12 mb-6"
                      style={{ fontFamily: 'DM Sans, sans-serif', color: '#111827' }}
                    >
                      {block.content}
                    </motion.h2>
                  );
                }

                if (block.type === 'callout') {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      className="my-8 p-6 rounded-2xl border-l-4"
                      style={{ 
                        backgroundColor: `${getCategoryColor(article.category)}08`,
                        borderColor: getCategoryColor(article.category)
                      }}
                    >
                      <p className="text-base italic" style={{ color: '#1F2937' }}>
                        {block.content}
                      </p>
                    </motion.div>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <motion.ul
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      className="space-y-3 my-6"
                    >
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle 
                            className="w-5 h-5 mt-0.5 flex-shrink-0" 
                            style={{ color: getCategoryColor(article.category) }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </motion.ul>
                  );
                }

                if (block.type === 'visual' && block.visualType === 'flow') {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      className="my-12 p-8 bg-gray-50 rounded-2xl border-2 border-gray-200"
                    >
                      <h3 
                        className="text-xl mb-6 text-center"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {block.title}
                      </h3>

                      <div className="grid md:grid-cols-3 gap-4">
                        {block.nodes?.map((node, i) => (
                          <div key={i} className="bg-white rounded-xl p-6 border-2 border-gray-200">
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                              style={{ backgroundColor: `${node.color}15` }}
                            >
                              <node.icon className="w-6 h-6" style={{ color: node.color }} />
                            </div>
                            <div 
                              className="text-base mb-2"
                              style={{ fontFamily: 'DM Sans, sans-serif' }}
                            >
                              {node.label}
                            </div>
                            <div className="text-sm text-gray-600">{node.desc}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                }

                if (block.type === 'visual' && block.visualType === 'comparison') {
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.6 }}
                      className="my-12"
                    >
                      <h3 
                        className="text-xl mb-6 text-center"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {block.title}
                      </h3>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left */}
                        <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
                          <div className="text-base mb-4 text-gray-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {block.left?.label}
                          </div>
                          <ul className="space-y-2">
                            {block.left?.points.map((point, i) => (
                              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right */}
                        <div 
                          className="rounded-2xl p-6 border-2"
                          style={{ 
                            backgroundColor: `${getCategoryColor(article.category)}08`,
                            borderColor: `${getCategoryColor(article.category)}40`
                          }}
                        >
                          <div 
                            className="text-base mb-4" 
                            style={{ 
                              fontFamily: 'DM Sans, sans-serif',
                              color: getCategoryColor(article.category)
                            }}
                          >
                            {block.right?.label}
                          </div>
                          <ul className="space-y-2">
                            {block.right?.points.map((point, i) => (
                              <li key={i} className="text-sm flex items-center gap-2">
                                <CheckCircle 
                                  className="w-4 h-4 flex-shrink-0" 
                                  style={{ color: getCategoryColor(article.category) }}
                                />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return null;
              })}
            </motion.article>
          </div>
        </div>
      </section>

      {/* 4️⃣ Related Reads */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 
                className="text-2xl mb-8"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Related Reads
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, idx) => (
                  <Link key={related.slug} to={`/blog/${related.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 transition-all h-full cursor-pointer"
                    >
                      <div 
                        className="inline-block px-2 py-1 rounded text-xs mb-3"
                        style={{ 
                          backgroundColor: `${getCategoryColor(related.category)}15`,
                          color: getCategoryColor(related.category)
                        }}
                      >
                        {related.category}
                      </div>

                      <h4 
                        className="text-base mb-3 leading-tight"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {related.title}
                      </h4>

                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{related.readTime} read</span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ End of Article — Calm Close */}
      <section className="py-16 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Gradient divider */}
              <div 
                className="h-1 w-24 mx-auto rounded-full mb-8"
                style={{ 
                  background: `linear-gradient(to right, ${getCategoryColor(article.category)}, ${getCategoryColor(article.category)}40)`
                }}
              />

              <p className="text-lg text-gray-700 mb-8">
                This idea connects directly to how SMB Flow builds agents and workflows.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/product">
                  <Button 
                    size="lg"
                    className="shadow-lg text-base px-8 rounded-lg bg-blue-600 hover:bg-blue-700"
                  >
                    Explore the Platform
                  </Button>
                </Link>
                
                <Link to="/templates">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="text-base px-8 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Browse Templates
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
