import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-600 shadow-lg shadow-fuchsia-500/20">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">NovaFlux</span>
        </div>

        <div className="hidden items-center gap-8 text-sm/6 text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <div className="hidden md:block">
          <a
            href="#get-started"
            className="rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Launch App
          </a>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 md:hidden">
          <Menu className="h-5 w-5 text-white/80" />
        </button>
      </nav>
    </header>
  );
}
