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
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <div className={`flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image with enhanced styling */}
          <div className="mb-8 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-blue-500 to-primary rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse" />
            <Image
              src="https://placehold.co/200x200.png"
              alt="Masoud Tavakkoli"
              width={200}
              height={200}
              className="relative rounded-full border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-300"
              data-ai-hint="profile photo"
              priority
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white animate-bounce" />
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
              MASOUD TAVAKKOLI
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20" />
              <p className="text-2xl md:text-3xl text-primary font-bold px-4">
                AI Engineer, Technical Leadership, Co-founder, DevOps, SRE, Linux
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20" />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Technical Leadership</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">DevOps</span>
              <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">SRE</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 mb-8 text-muted-foreground">
            <TechIcon name="map-pin" className="h-5 w-5 text-primary" />
            <span>Dubai, United Arab Emirates</span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <TechIcon name="mail" className="h-4 w-4 text-primary" />
              <span>mtg1376@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <TechIcon name="phone" className="h-4 w-4 text-primary" />
              <span>+903273294841</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="#contact">
                <TechIcon name="mail" className="mr-2 h-5 w-5" /> Contact Me
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="/masoud-tavakkoli-cv.pdf" target="_blank">
                <TechIcon name="download" className="mr-2 h-5 w-5" /> Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="https://www.linkedin.com/in/promasoud" target="_blank">
                <TechIcon name="linkedin" className="mr-2 h-5 w-5" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <Link href="https://medium.com/@promasoud" target="_blank">
                <TechIcon name="globe" className="mr-2 h-5 w-5" /> Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
