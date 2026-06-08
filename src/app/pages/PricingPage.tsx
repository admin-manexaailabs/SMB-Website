import { Button } from '../components/ui/button';
import { useState } from 'react';
import NavigationWithDropdowns from '../components/NavigationWithDropdowns';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Zap, Rocket, Building2, Check, ArrowRight, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small businesses getting started with AI automation',
      priceMonthly: 49,
      priceAnnual: 39,
      features: [
        '1,000 conversations/month',
        '2 AI agents',
        '3 channels (WhatsApp, Web Chat, Email)',
        'Visual no-code builder',
        'Pre-built templates',
        'Email support',
        'Basic analytics',
        '1 team member'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      icon: Rocket,
      description: 'For growing businesses that need advanced automation',
      priceMonthly: 149,
      priceAnnual: 119,
      features: [
        '10,000 conversations/month',
        'Unlimited AI agents',
        'All 7 channels (WhatsApp, Voice, SMS, Email, Web, Instagram, API)',
        'Advanced workflow builder',
        'Custom templates',
        'Priority support',
        'Advanced analytics & reporting',
        'Up to 5 team members',
        'Human handoff & unified inbox',
        'Multi-LLM support (GPT, Claude, Gemini)',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      icon: Building2,
      description: 'For businesses that need custom solutions and dedicated support',
      priceMonthly: null,
      priceAnnual: null,
      features: [
        'Unlimited conversations',
        'Unlimited AI agents',
        'All channels + custom integrations',
        'Dedicated account manager',
        'Custom SLA',
        '24/7 phone support',
        'Advanced security & compliance',
        'Unlimited team members',
        'Custom AI model training',
        'On-premise deployment option',
        'Custom contract terms',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <div className="bg-white text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <NavigationWithDropdowns />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-6 text-sm text-purple-700">
              Simple, Transparent Pricing
            </div>
            <h1 className="text-6xl lg:text-7xl mb-8 leading-[1.1] tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Choose the Plan That{' '}
              <span className="bg-gradient-to-r from-[#7D4DFF] via-[#6B5FFF] to-[#5E00FF] bg-clip-text text-transparent">
                Fits Your Business
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Start free, scale as you grow. All plans include a 14-day free trial with no credit card required.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-8 py-3 rounded-full text-sm transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-8 py-3 rounded-full text-sm transition-all ${
                  billingPeriod === 'annual'
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-600'
                }`}
              >
                Annual
                <span className="ml-2 text-xs text-green-600 font-medium">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-2 border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'border-2 border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {plan.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {plan.description}
                </p>

                <div className="mb-6">
                  {plan.priceMonthly !== null ? (
                    <>
                      <div className="text-5xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        ${billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceAnnual}
                      </div>
                      <div className="text-gray-500 text-sm">
                        per month{billingPeriod === 'annual' && ', billed annually'}
                      </div>
                    </>
                  ) : (
                    <div className="text-4xl mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Custom
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full mb-6 rounded-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.'
              },
              {
                q: 'What happens when I exceed my conversation limit?',
                a: 'We\'ll notify you when you reach 80% of your limit. You can either upgrade your plan or purchase additional conversations as needed.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.'
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! All plans include a 14-day free trial with full access to features. No credit card required to start.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <h3 className="text-lg mb-2 font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl mb-8 text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <a href="https://app.smbflow.ai/business/auth/signin" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 rounded-full shadow-xl">
                Start Free Trial →
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}