import StackIcon from 'tech-stack-icons';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/masoud-tavakkoli/',
  },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/Masoud-T' },
  { name: 'Email', icon: 'mail', url: 'mailto:masoud.tavakkoli.dev@gmail.com' },
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
            {socialLinks.map(({ name, icon, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                aria-label={name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <StackIcon name={icon} className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
