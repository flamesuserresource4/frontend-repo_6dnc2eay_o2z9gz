import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-16 md:py-24 lg:py-28">
      <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>Futuristic SaaS for high‑velocity teams</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Launch your product into a cyber‑futurist reality
          </h1>
          <p className="max-w-xl text-white/70">
            NovaFlux blends AI, realtime analytics, and beautiful interfaces so you can move faster than light. Experience an interactive 3D hero and silky animations on every device.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 px-6 py-3 font-medium shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-6 text-sm text-white/60">
            <div>
              <div className="text-xl font-semibold text-white">99.99%</div>
              Uptime
            </div>
            <div>
              <div className="text-xl font-semibold text-white">2M+</div>
              Events/min
            </div>
            <div>
              <div className="text-xl font-semibold text-white"><span className="align-middle">⚡</span> 40%</div>
              Faster cycles
            </div>
          </div>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl lg:h-[560px]">
          {/* Spline Scene */}
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Gradient overlay for vibe (doesn't block interactions) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-indigo-500/10" />
        </div>
      </div>
    </section>
  );
}
