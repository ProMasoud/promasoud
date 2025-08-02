'use client';
import { Award, Shield, FileCheck, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const certificationData = [
  {
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'June 2022',
    validUntil: 'June 2025',
    credentialId: 'AWS-ASP-12345',
    category: 'cloud',
    url: 'https://www.credly.com/badges/aws-certified-solutions-architect-professional'
  },
  {
    name: 'AWS Certified DevOps Engineer - Professional',
    issuer: 'Amazon Web Services',
    date: 'March 2022',
    validUntil: 'March 2025',
    credentialId: 'AWS-DEP-12345',
    category: 'cloud',
    url: 'https://www.credly.com/badges/aws-certified-devops-engineer-professional'
  },
  {
    name: 'Microsoft Certified: Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    date: 'January 2022',
    validUntil: 'January 2024',
    credentialId: 'MS-ADOE-12345',
    category: 'cloud',
    url: 'https://learn.microsoft.com/en-us/credentials/'
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    date: 'November 2021',
    validUntil: 'November 2023',
    credentialId: 'MS-AAA-12345',
    category: 'cloud',
    url: 'https://learn.microsoft.com/en-us/credentials/'
  },
  {
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'August 2021',
    validUntil: 'August 2024',
    credentialId: 'CNCF-CKAD-12345',
    category: 'devops',
    url: 'https://www.cncf.io/certification/ckad/'
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: 'July 2021',
    validUntil: 'July 2024',
    credentialId: 'CNCF-CKA-12345',
    category: 'devops',
    url: 'https://www.cncf.io/certification/cka/'
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'May 2021',
    validUntil: 'May 2023',
    credentialId: 'HC-TA-12345',
    category: 'devops',
    url: 'https://www.hashicorp.com/certification/terraform-associate'
  }
];

const patentData = [
  {
    title: 'System and Method for Automated Cloud Resource Optimization',
    number: 'US12345678',
    issueDate: 'March 2023',
    description: 'A system that uses machine learning to automatically optimize cloud resource allocation based on usage patterns, reducing costs while maintaining performance.'
  },
  {
    title: 'Secure Data Transfer Protocol for High-Volume Financial Transactions',
    number: 'EU98765432',
    issueDate: 'November 2022',
    description: 'A specialized protocol for securely transferring high volumes of financial transaction data with enhanced encryption and verification mechanisms.'
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
              <Award className="h-6 w-6 text-primary" />
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
                        <Shield className="h-5 w-5 text-primary" />
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
                        <Calendar className="h-4 w-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <FileCheck className="h-4 w-4" />
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
                          <ExternalLink className="h-3 w-3" />
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
              <FileCheck className="h-6 w-6 text-primary" />
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
                        <FileCheck className="h-4 w-4" />
                        <span>Patent No: {patent.number}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
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
