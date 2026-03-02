'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for personal use',
      features: [
        'Up to 10 tasks',
        'Basic priority levels',
        'Due date tracking',
        'Mobile responsive',
        'Email support',
      ],
      cta: 'Start Free',
      href: '/app',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: '/month',
      description: 'For professionals who need more',
      features: [
        'Unlimited tasks',
        'All priority levels',
        'Advanced filtering',
        'Custom tags & labels',
        'Export to CSV/PDF',
        'Priority email support',
        'API access',
        'Team collaboration (up to 5)',
      ],
      cta: 'Start 14-Day Free Trial',
      href: '/app?plan=pro',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Team',
      price: '$49',
      period: '/month',
      description: 'For teams that need to scale',
      features: [
        'Everything in Pro',
        'Up to 25 team members',
        'Shared workspaces',
        'Admin controls & permissions',
        'Advanced analytics',
        'Custom integrations',
        'SSO / SAML',
        'Dedicated support',
        '99.9% uptime SLA',
      ],
      cta: 'Contact Sales',
      href: '/contact',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/landing" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg" />
              <span className="text-xl font-bold text-slate-900">TaskMaster</span>
            </Link>
            <Link
              href="/app"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4" />
            14-day free trial • No credit card required
          </div>
          
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Pricing that scales with you
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. All plans include our core features.
          </p>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 border-4 border-blue-400'
                  : 'bg-white border-2 border-slate-200 hover:border-slate-300 transition-colors'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-slate-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-blue-100' : 'text-slate-600'
                }`}>
                  {plan.description}
                </p>
                
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-slate-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.highlighted ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircleIcon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                    }`} />
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-blue-50' : 'text-slate-600'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block text-center px-6 py-4 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">
            Need a custom plan? <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact our sales team</Link>
          </p>
          <p className="text-sm text-slate-500">
            All plans include 256-bit SSL encryption, daily backups, and 99.9% uptime guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
