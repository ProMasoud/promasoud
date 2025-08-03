'use client';
import StackIcon from 'tech-stack-icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const certificationData = [
  {
    name: 'Auto Homemade Pharmacy (Invention)',
    issuer: 'Self-Certified',
    date: 'N/A',
    validUntil: 'N/A',
    credentialId: 'N/A',
    category: 'Invention',
    url: '#'
  }
];

const patentData = [
  {
    title: 'Smart home pharmacy with mobile medication planning',
    number: 'N/A',
    issueDate: 'N/A',
    description: 'An innovative smart home pharmacy system with mobile medication planning capabilities.'
  }
];

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(certificationData.map(cert => cert.category)));
  
  const filteredCertifications = activeCategory 
    ? certificationData.filter(cert => cert.category === activeCategory)
    : certificationData;

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Certifications & Patents
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Professional credentials and intellectual property that demonstrate expertise and innovation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <Button 
              variant={activeCategory === null ? "default" : "outline"} 
              onClick={() => setActiveCategory(null)}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <StackIcon name="award" className="h-6 w-6 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertifications.map((cert, index) => (
                <Card 
                  key={cert.name} 
                  className={`group hover:shadow-lg transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-1 ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <StackIcon name="shield" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold leading-tight">{cert.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="h-px bg-border w-full" />
                  </CardHeader>
                  
                  <CardContent className="pt-4 space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StackIcon name="calendar" className="h-4 w-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StackIcon name="file-check" className="h-4 w-4" />
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="capitalize">
                        {cert.category}
                      </Badge>
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <Link href={cert.url} target="_blank">
                          <span className="text-xs">Verify</span>
                          <StackIcon name="external-link" className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Patents */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <StackIcon name="file-check" className="h-6 w-6 text-primary" />
              Patents
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {patentData.map((patent, index) => (
                <Card 
                  key={patent.title} 
                  className={`hover:shadow-lg transition-all duration-300 hover:border-primary/50 ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                  style={{ animationDelay: `${(index + filteredCertifications.length) * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{patent.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StackIcon name="file-check" className="h-4 w-4" />
                        <span>Patent No: {patent.number}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <StackIcon name="calendar" className="h-4 w-4" />
                        <span>Issued: {patent.issueDate}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {patent.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
