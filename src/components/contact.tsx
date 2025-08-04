"use client";

import { Linkedin, Mail, Globe, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import Link from 'next/link';
import { useState } from 'react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: () => <Linkedin className="h-5 w-5" />,
    url: 'https://www.linkedin.com/in/promasoud',
    label: 'www.linkedin.com/in/promasoud'
  },
  {
    name: 'Email',
    icon: () => <Mail className="h-5 w-5" />,
    url: 'mailto:promasoud@outlook.com',
    label: 'promasoud@outlook.com'
  },
  {
    name: 'Blog',
    icon: () => <Globe className="h-5 w-5" />,
    url: 'https://medium.com/@promasoud',
    label: 'medium.com/@promasoud'
  },
  {
    name: 'Phone',
    icon: () => <Phone className="h-5 w-5" />,
    url: 'tel:+905373294841',
    label: '+905373294841'
  },
  {
    name: 'Location',
    icon: () => <MapPin className="h-5 w-5" />,
    url: '#',
    label: 'Dubai, United Arab Emirates'
  }
];

export default function Contact() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="container mx-auto px-4 md:px-8 py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-gradient-to-bl from-violet-900/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-gradient-to-tr from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Section header with gradient text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-purple inline-block">
          Get In Touch
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full mb-6"></div>
        <p className="text-white max-w-2xl mx-auto text-lg">
          I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative">
        {/* Connect with me section */}
        <div className="gradient-border p-8 bg-black/40 backdrop-blur-sm rounded-2xl">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <span className="mr-2">Connect with me</span>
            <div className="h-px flex-grow ml-4 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {socialLinks.map(({ name, icon: Icon, url, label }, index) => (
              <div
                key={name}
                className="flex items-center gap-4 group hover-gradient p-4 rounded-xl transition-all duration-300"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 ${hoverIndex === index ? 'bg-gradient-to-r from-purple-600/80 to-blue-600/80' : 'bg-gray-800/60'}`}
                >
                  <Icon />
                </div>
                <div className="flex-grow">
                  <p className="text-base font-medium text-white">{name}</p>
                  <p className="text-sm text-white/80">{label}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:text-white hover:bg-white/10"
                  asChild
                >
                  <Link href={url} target={url.startsWith('http') ? "_blank" : "_self"} aria-label={`Go to ${name}`}>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form section */}
        <div className="gradient-border p-8 bg-black/40 backdrop-blur-sm rounded-2xl relative">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <span className="mr-2">Send a Message</span>
            <div className="h-px flex-grow ml-4 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          </h3>

          <form action="mailto:promasoud@outlook.com" method="get" encType="text/plain" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-base">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-base">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/30"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white text-base">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows={5}
                required
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500/30"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}
