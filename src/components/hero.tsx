import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 md:px-8 text-center">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="https://placehold.co/160x160.png"
            alt="Masoud Tavakkoli"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary/20 shadow-lg"
            data-ai-hint="profile photo"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Masoud Tavakkoli
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          AI Solutions Engineer & DevOps Specialist
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Building scalable AI platforms and automating the future of cloud infrastructure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              <Mail className="mr-2 h-5 w-5" /> Contact Me
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/masoud-tavakkoli-cv.pdf" target="_blank">
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://www.linkedin.com/in/masoud-tavakkoli/" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
