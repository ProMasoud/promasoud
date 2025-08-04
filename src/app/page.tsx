"use client";

import About from '@/components/about';
import Activities from '@/components/activities';
import Certifications from '@/components/certifications';
import Contact from '@/components/contact';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { useEffect } from 'react';

export default function Home() {
  // Client-side only code for gradient animations
  useEffect(() => {
    // This code runs only on the client side
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      // Update gradient positions based on mouse movement
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex min-h-screen flex-col dark relative overflow-hidden">
      {/* Dynamic colorful gradient backgrounds */}
      <div className="fixed inset-0 bg-black z-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-0 w-[50vw] h-[40vh] bg-gradient-to-br from-purple-900/20 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-[40vw] h-[40vh] bg-gradient-to-bl from-blue-900/20 to-transparent rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/4 w-[50vw] h-[40vh] bg-gradient-to-tr from-emerald-900/20 to-transparent rounded-full blur-3xl"></div>

        {/* Secondary smaller gradient accents */}
        <div className="absolute top-1/4 right-1/4 w-[15vw] h-[15vh] bg-gradient-to-br from-pink-900/15 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[20vw] h-[20vh] bg-gradient-to-tr from-amber-900/15 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 ai-grid opacity-30"></div>

        {/* Neural network effect */}
        <div className="absolute inset-0 neural-network opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Header />
        <main className="flex-1">
          <Hero />
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
            <About />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
            <Skills />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent"></div>
            <Experience />
          </div>
          {/* <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent"></div>
            <Projects />
          </div> */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/5 to-transparent"></div>
            <Education />
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent"></div>
            <Certifications />
          </div>
          {/* <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent"></div>
            <Activities />
          </div> */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent"></div>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-30">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
