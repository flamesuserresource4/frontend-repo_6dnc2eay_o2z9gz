import React from 'react';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

const FEATURES = [
  {
    icon: Rocket,
    title: 'Blazing Performance',
    desc: 'Edge-first architecture that delivers sub‑50ms interactions globally.',
  },
  {
    icon: Shield,
    title: 'Zero‑Trust Security',
    desc: 'End‑to‑end encryption with continuous policy enforcement and audit trails.',
  },
  {
    icon: Zap,
    title: 'Realtime Intelligence',
    desc: 'Stream analytics and AI copilots baked into every workflow.',
  },
  {
    icon: Globe,
    title: 'Planet‑Scale',
    desc: 'Multi‑region deployments with automatic failover and autoscaling.',
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Engineered for the next era</h2>
        <p className="mt-3 text-white/70">
          A sleek, cyberpunk interface paired with strong fundamentals—performance, security, and intelligence.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl ring-1 ring-white/5 transition-transform hover:-translate-y-0.5 hover:bg-white/[0.05]"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-600/20 blur-2xl" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
