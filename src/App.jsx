import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b14] text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      {/* Background glow gradients */}
      <div className="pointer-events-none fixed inset-0 -z-[0]">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
}
