'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import TechIcon from './tech-icons';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center sharp-gradient overflow-hidden">
      {/* AI Grid Background */}
      <div className="absolute inset-0 ai-grid" />
      
      {/* Neural Network Pattern */}
      <div className="neural-network" />
      
      {/* Floating Cloud Elements */}
      <div className="cloud-bg" />
      <div className="cloud-bg" />
      <div className="cloud-bg" />
      <div className="cloud-bg" />
      
      {/* Sharp geometric elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className={`flex flex-col items-center ${isVisible ? 'animate-sharp-fade' : 'opacity-0'}`}>
          {/* Profile Image with sharp styling */}
          <div className="mb-8 relative group">
            <div className="absolute -inset-6 sharp-border rounded-full opacity-50 group-hover:opacity-80 transition-all duration-500" />
            <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-sm opacity-40 group-hover:opacity-60 transition-all duration-500" />
            <Image
              src="https://placehold.co/200x200.png"
              alt="Masoud Tavakkoli"
              width={200}
              height={200}
              className="relative rounded-full border-2 border-white/30 shadow-2xl transform group-hover:scale-105 transition-all duration-300 sharp-border"
              data-ai-hint="profile photo"
              priority
            />
            <div className="absolute -bottom-2 -right-2 bg-white w-6 h-6 rounded-full border-2 border-black shadow-lg animate-pulse" />
            {/* AI indicator dots */}
            <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full animate-ping" />
            <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full" />
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-white text-glow animate-sharp-slide">
              MASOUD TAVAKKOLI
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32" />
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32" />
            </div>
            <p className="text-xl md:text-2xl text-white/90 font-light px-4 mb-6 tracking-wide">
              AI Engineer, Technical Leadership, Co-founder, DevOps, SRE, Linux
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <span className="text-sm bg-white/10 text-white px-4 py-2 sharp-border font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-300">Technical Leadership</span>
              <span className="text-sm bg-white/10 text-white px-4 py-2 sharp-border font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-300">DevOps</span>
              <span className="text-sm bg-white/10 text-white px-4 py-2 sharp-border font-medium backdrop-blur-sm hover:bg-white/20 transition-all duration-300">SRE</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-8 text-white/70">
            <TechIcon name="map-pin" className="h-5 w-5 text-white" />
            <span className="tracking-wide">Dubai, United Arab Emirates</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 sharp-border backdrop-blur-sm">
              <TechIcon name="mail" className="h-4 w-4 text-white" />
              <span className="text-white/90">mtg1376@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 sharp-border backdrop-blur-sm">
              <TechIcon name="phone" className="h-4 w-4 text-white" />
              <span className="text-white/90">+903273294841</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 sharp-border shadow-2xl hover:shadow-white/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 font-semibold">
              <Link href="#contact">
                <TechIcon name="mail" className="mr-2 h-5 w-5" /> Contact Me
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 sharp-border shadow-xl hover:shadow-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Link href="/masoud-tavakkoli-cv.pdf" target="_blank">
                <TechIcon name="download" className="mr-2 h-5 w-5" /> Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 sharp-border shadow-xl hover:shadow-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Link href="https://www.linkedin.com/in/promasoud" target="_blank">
                <TechIcon name="linkedin" className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 sharp-border shadow-xl hover:shadow-white/10 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Link href="https://medium.com/@promasoud" target="_blank">
                <TechIcon name="globe" className="mr-2 h-5 w-5" /> Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center sharp-border backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
          <div className="text-white/50 text-xs mt-2 tracking-widest">SCROLL</div>
        </div>
      </div>
    </section>
  );
}
