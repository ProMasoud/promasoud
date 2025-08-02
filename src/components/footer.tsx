import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
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

export default function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Masoud Tavakkoli. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, icon: Icon, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                aria-label={name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
