import React from 'react';

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['Up to 3 projects', 'Community support', 'Basic analytics'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: ['Unlimited projects', 'Realtime insights', 'Priority support', 'Audit logs'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SLA & SSO', 'Private cloud', 'Dedicated success'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-3 text-white/70">Start free. Scale when you’re ready. Cancel anytime.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative overflow-hidden rounded-2xl border p-6 shadow-xl ring-1 ${
              plan.highlight
                ? 'border-fuchsia-500/40 bg-gradient-to-br from-fuchsia-500/10 to-indigo-600/10 ring-white/10'
                : 'border-white/10 bg-white/[0.03] ring-white/5'
            }`}
          >
            {plan.highlight && (
              <div className="pointer-events-none absolute inset-x-0 -top-16 h-40 bg-gradient-to-b from-fuchsia-500/20 to-transparent" />
            )}
            <div className="relative">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                <span className="pb-2 text-white/60">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 font-medium transition ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-fuchsia-600 to-indigo-600 shadow-lg shadow-fuchsia-500/20 hover:brightness-110'
                    : 'border border-white/15 bg-white/5 hover:bg-white/10'
                }`}
              >
                {plan.highlight ? 'Upgrade to Pro' : 'Choose plan'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p id="contact" className="mt-10 text-center text-sm text-white/60">
        Need something special? Contact sales for a tailored plan.
      </p>
    </section>
  );
}
