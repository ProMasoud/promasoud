import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
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
  },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Masoud-T' },
  { name: 'Email', icon: Mail, url: 'mailto:masoud.tavakkoli.dev@gmail.com' },
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
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <Button key={name} variant="outline" size="icon" asChild>
                    <Link href={url} target="_blank" aria-label={name}>
                      <Icon className="h-5 w-5" />
                    </Link>
                  </Button>
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
