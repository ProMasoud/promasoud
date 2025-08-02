import { Github, Linkedin, Mail, Twitter, Globe, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/masoud-tavakkoli/',
    label: 'linkedin.com/in/masoud-tavakkoli'
  },
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/Masoud-T',
    label: 'github.com/Masoud-T'
  },
  { 
    name: 'Email', 
    icon: Mail, 
    url: 'mailto:masoud.tavakkoli.dev@gmail.com',
    label: 'masoud.tavakkoli.dev@gmail.com'
  },
  { 
    name: 'Website', 
    icon: Globe, 
    url: 'https://masoudtavakkoli.com',
    label: 'masoudtavakkoli.com'
  },
  { 
    name: 'Phone', 
    icon: Phone, 
    url: 'tel:+447418310205',
    label: '+44 7418 310205'
  },
  { 
    name: 'Location', 
    icon: MapPin, 
    url: '#',
    label: 'London, United Kingdom'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 md:px-8">
      <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map(({ name, icon: Icon, url, label }) => (
                  <div key={name} className="flex items-center gap-3 group">
                    <Button variant="outline" size="icon" className="group-hover:border-primary group-hover:text-primary transition-colors" asChild>
                      <Link href={url} target={url.startsWith('http') ? "_blank" : "_self"} aria-label={name}>
                        <Icon className="h-5 w-5" />
                      </Link>
                    </Button>
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <form action="mailto:masoud.tavakkoli.dev@gmail.com" method="get" encType="text/plain" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="subject" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="cc" type="email" placeholder="Your Email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="body" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
