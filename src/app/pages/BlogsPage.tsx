import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { toast } from 'sonner';
import { 
  ArrowRight,
  Clock,
  Workflow,
  MessageSquare,
  Bot,
  Zap,
  GitBranch,
  TrendingUp,
  Layers,
  Mail
} from 'lucide-react';
import { Button } from '../components/ui/button';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');

  const categories = [
    'All',
    'Product & Platform',
    'AI Agents',
    'Automation & Workflows',
    'Channels & Conversations',
    'Scaling SMB Operations'
  ];

  const categoryColors: { [key: string]: string } = {
    'Product & Platform': '#2F80ED',
    'AI Agents': '#9B51E0',
    'Automation & Workflows': '#F2994A',
    'Channels & Conversations': '#10B981',
    'Scaling SMB Operations': '#EF4444'
  };

  const featuredArticle = {
    title: 'Why Most AI Agents Fail in Real Businesses',
    summary: 'The gap between demo-ready agents and production agents isn\'t technical. It\'s structural.',
    readTime: '6 min',
    category: 'AI Agents',
    slug: 'why-ai-agents-fail'
  };

  const articles = [
    {
      title: 'Building Agents That Handle Uncertainty',
      insight: 'Real conversations don\'t follow scripts. Your agent shouldn\'t either.',
      readTime: '4 min',
      category: 'AI Agents',
      slug: 'agents-handle-uncertainty',
      image: 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNoYXRib3QlMjBjb252ZXJzYXRpb258ZW58MXx8fHwxNzY2MzQ4NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Multi-Channel is Not Multi-Agent',
      insight: 'One intelligent core. Many channels. That\'s the architecture.',
      readTime: '5 min',
      category: 'Channels & Conversations',
      slug: 'multi-channel-architecture',
      image: 'https://images.unsplash.com/photo-1738022624489-a1264cffb858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aSUyMGNoYW5uZWwlMjBjb21tdW5pY2F0aW9ufGVufDF8fHx8MTc2NjM0ODUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'The Flow Builder Philosophy',
      insight: 'Visual doesn\'t mean simple. It means transparent.',
      readTime: '3 min',
      category: 'Product & Platform',
      slug: 'flow-builder-philosophy',
      image: 'https://images.unsplash.com/photo-1753715613388-7e03410b1dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW18ZW58MXx8fHwxNzY2MzQ4NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'When to Escalate to Human',
      insight: 'Smart agents know when to stop being smart.',
      readTime: '4 min',
      category: 'Automation & Workflows',
      slug: 'when-to-escalate',
      image: 'https://images.unsplash.com/photo-1709715357479-591f9971fb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwfGVufDF8fHx8MTc2NjM0ODUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Scaling Without Losing Context',
      insight: 'Volume breaks most systems. Context breaks the rest.',
      readTime: '6 min',
      category: 'Scaling SMB Operations',
      slug: 'scaling-context',
      image: 'https://images.unsplash.com/photo-1705234384679-119488a72a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHNjYWxpbmd8ZW58MXx8fHwxNzY2MzQ4NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Data Hooks: The Invisible Layer',
      insight: 'Agents that remember are agents that matter.',
      readTime: '5 min',
      category: 'Product & Platform',
      slug: 'data-hooks',
      image: 'https://images.unsplash.com/photo-1760531932521-8eb5a064dbca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbmV0d29yayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2MzQ4NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Voice Agents Beyond Phone Trees',
      insight: 'Conversational AI on voice channels requires different patterns.',
      readTime: '4 min',
      category: 'Channels & Conversations',
      slug: 'voice-agents-patterns',
      image: 'https://images.unsplash.com/photo-1633431299600-270e216d365d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMGNhbGwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjYzNDExMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Template Architecture Design',
      insight: 'Templates should be starting points, not constraints.',
      readTime: '5 min',
      category: 'Automation & Workflows',
      slug: 'template-architecture',
      image: 'https://images.unsplash.com/photo-1699004642562-63a26850d89f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0ZW1wbGF0ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYzNDg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'SMB-First AI Strategy',
      insight: 'Enterprise AI scaled down doesn\'t work for SMBs.',
      readTime: '7 min',
      category: 'Scaling SMB Operations',
      slug: 'smb-first-ai',
      image: 'https://images.unsplash.com/photo-1531058240690-006c446962d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzY2MzIyOTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const getCategoryColor = (category: string) => {
    return categoryColors[category] || '#6B7280';
  };

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavigationWithDropdowns />

      {/* 1️⃣ Hero Section — Calm, Confident */}
      <section className="pt-32 pb-20 overflow-hidden relative">
        {/* Soft gradient wash */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #9B51E0 0%, transparent 70%)' }}
          />
          <div 
            className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #2F80ED 0%, transparent 70%)' }}
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
                className="text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight text-gray-900" 
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Insights from Building AI for Real Businesses
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Practical ideas on agents, automation, channels, and scale — written from inside the product, not outside it.
              </p>
            </motion.div>

            {/* Floating abstract shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { Icon: Workflow, x: '10%', y: '20%', delay: 0 },
                { Icon: Bot, x: '85%', y: '30%', delay: 0.3 },
                { Icon: MessageSquare, x: '15%', y: '70%', delay: 0.6 },
                { Icon: Zap, x: '80%', y: '75%', delay: 0.9 }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  transition={{ delay: item.delay, duration: 1 }}
                  className="absolute"
                  style={{ left: item.x, top: item.y }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    <item.Icon className="w-16 h-16 text-gray-900" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Featured Article (Hero Card) */}
      <section className="pb-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <Link to={`/blog/${featuredArticle.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 lg:p-12 border-2 border-gray-200 hover:border-blue-300 transition-all duration-500 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className="absolute inset-0 blur-2xl"
                      style={{ background: `radial-gradient(circle at 50% 50%, ${getCategoryColor(featuredArticle.category)}20 0%, transparent 70%)` }}
                    />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left: Content */}
                    <div>
                      <div 
                        className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4"
                        style={{ 
                          backgroundColor: `${getCategoryColor(featuredArticle.category)}15`,
                          color: getCategoryColor(featuredArticle.category)
                        }}
                      >
                        {featuredArticle.category}
                      </div>

                      <h2 
                        className="text-3xl lg:text-4xl mb-4 leading-tight"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {featuredArticle.title}
                      </h2>

                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {featuredArticle.summary}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredArticle.readTime} read</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                          <span>Read article</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Abstract illustration */}
                    <div className="relative h-64 lg:h-80">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Flow nodes illustration */}
                        <motion.div
                          animate={{ rotate: [0, 5, 0] }}
                          transition={{ duration: 6, repeat: Infinity }}
                          className="relative w-full h-full"
                        >
                          {/* Central node */}
                          <div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: `${getCategoryColor(featuredArticle.category)}` }}
                          >
                            <Bot className="w-10 h-10 text-white" />
                          </div>

                          {/* Surrounding nodes */}
                          {[
                            { x: -80, y: -60, Icon: MessageSquare },
                            { x: 80, y: -60, Icon: Workflow },
                            { x: -80, y: 60, Icon: GitBranch },
                            { x: 80, y: 60, Icon: Layers }
                          ].map((node, idx) => (
                            <motion.div
                              key={idx}
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                              className="absolute top-1/2 left-1/2"
                              style={{
                                transform: `translate(calc(-50% + ${node.x}px), calc(-50% + ${node.y}px))`
                              }}
                            >
                              <div className="w-14 h-14 rounded-xl bg-white border-2 border-gray-200 flex items-center justify-center">
                                <node.Icon className="w-6 h-6 text-gray-600" />
                              </div>
                              
                              {/* Connection line */}
                              <div 
                                className="absolute top-1/2 left-1/2 w-0.5 h-16 origin-top opacity-20"
                                style={{ 
                                  backgroundColor: getCategoryColor(featuredArticle.category),
                                  transform: `translate(-50%, -50%) rotate(${Math.atan2(-node.y, -node.x) * 180 / Math.PI + 90}deg)`
                                }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* 3️⃣ Blog Categories (Left Sidebar) */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <div className="space-y-2">
                    {categories.map((category, idx) => (
                      <motion.button
                        key={category}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.5 }}
                        onClick={() => setActiveCategory(category)}
                        className="w-full text-left relative group"
                      >
                        <div 
                          className="px-4 py-3 rounded-lg transition-all duration-300"
                          style={{
                            backgroundColor: activeCategory === category ? `${category !== 'All' ? getCategoryColor(category) : '#2F80ED'}10` : 'transparent',
                            color: activeCategory === category ? (category !== 'All' ? getCategoryColor(category) : '#2F80ED') : '#6B7280'
                          }}
                        >
                          <span className="text-sm">{category}</span>
                        </div>

                        {/* Gradient indicator */}
                        <AnimatePresence>
                          {activeCategory === category && (
                            <motion.div
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              exit={{ scaleY: 0 }}
                              className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full origin-top"
                              style={{ 
                                background: category !== 'All' 
                                  ? `linear-gradient(to bottom, ${getCategoryColor(category)}, ${getCategoryColor(category)}80)`
                                  : 'linear-gradient(to bottom, #2F80ED, #9B51E0)'
                              }}
                            />
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4️⃣ Blog Grid */}
              <div className="lg:col-span-9">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {filteredArticles.map((article, idx) => (
                      <Link key={article.slug} to={`/blog/${article.slug}`}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          whileHover={{ y: -4 }}
                          className="group cursor-pointer h-full"
                        >
                          <div className="bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden h-full flex flex-col">
                            {/* Abstract graphic header */}
                            <div 
                              className="h-32 relative overflow-hidden"
                            >
                              <img 
                                src={article.image} 
                                alt={article.title}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              <div 
                                className="absolute inset-0"
                                style={{ 
                                  background: `linear-gradient(135deg, ${getCategoryColor(article.category)}40 0%, ${getCategoryColor(article.category)}20 100%)`
                                }}
                              />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                              <h3 
                                className="text-xl mb-3 leading-tight line-clamp-2"
                                style={{ fontFamily: 'DM Sans, sans-serif' }}
                              >
                                {article.title}
                              </h3>

                              <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                                {article.insight}
                              </p>

                              {/* Meta */}
                              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{article.readTime} read</span>
                                </div>
                                <div 
                                  className="px-2 py-1 rounded"
                                  style={{ 
                                    backgroundColor: `${getCategoryColor(article.category)}10`,
                                    color: getCategoryColor(article.category)
                                  }}
                                >
                                  {article.category}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Why We Write */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                We write to document decisions, patterns, and lessons from building SMB Flow — so others don't have to figure it out the hard way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6️⃣ CTA (Soft Exit) */}
      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-16 xl:px-24">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 
                className="text-3xl mb-4 text-gray-900"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Stay close to how the product evolves.
              </h2>

              <p className="text-base text-gray-600 mb-8">
                Subscribe for product insights and platform updates.
              </p>

              <div className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 rounded-lg"
                  onClick={() => toast.info("Coming soon!")}
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}