import StackIcon from 'tech-stack-icons';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: () => <StackIcon name="linkedin" className="h-5 w-5" />,
    url: 'https://www.linkedin.com/in/promasoud',
    label: 'www.linkedin.com/in/promasoud'
  },
  { 
    name: 'Email', 
    icon: () => <StackIcon name="mail" className="h-5 w-5" />,
    url: 'mailto:mtg1376@gmail.com',
    label: 'mtg1376@gmail.com'
  },
  { 
    name: 'Blog', 
    icon: () => <StackIcon name="globe" className="h-5 w-5" />,
    url: 'https://medium.com/@promasoud',
    label: 'medium.com/@promasoud'
  },
  { 
    name: 'Phone', 
    icon: () => <StackIcon name="phone" className="h-5 w-5" />,
    url: 'tel:+903273294841',
    label: '+903273294841'
  },
  { 
    name: 'Location', 
    icon: () => <StackIcon name="map-pin" className="h-5 w-5" />,
    url: '#',
    label: 'Dubai, United Arab Emirates'
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
                        <div className="h-5 w-5">
                          <Icon />
                        </div>
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
