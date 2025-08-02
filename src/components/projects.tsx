'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight, Github, ExternalLink, Star, Users, Zap, Globe, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const projectsData = [
  {
    featured: true,
    title: 'LEO360.AI - Next-Gen AI Telehealth',
    subtitle: 'Flagship AI Platform',
    description:
      'A groundbreaking telehealth platform leveraging Large Language Models (LLMs) to provide AI-powered diagnostics and patient monitoring. Deployed globally on a secure, scalable AWS infrastructure with HIPAA compliance.',
    longDescription: 'Led the complete architecture and implementation of this next-generation AI telehealth platform from concept to production. Built a robust multi-region AWS infrastructure with auto-scaling capabilities handling 10,000+ daily users across 15+ countries. Integrated custom-trained LLMs for advanced diagnostics with 92% accuracy rate, implemented GPU-accelerated workloads for real-time analysis, and ensured global scalability while maintaining strict HIPAA and GDPR compliance. Reduced infrastructure costs by 35% through optimized resource allocation and serverless architecture.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'modern telehealth AI platform interface',
    icon: Zap,
    metrics: [
      { label: 'Global Users', value: '10,000+', icon: Users },
      { label: 'Uptime', value: '99.99%', icon: Star },
      { label: 'Countries', value: '15+', icon: Globe },
      { label: 'Cost Reduction', value: '35%', icon: Zap }
    ],
    tags: ['AI/ML', 'LLM', 'AWS', 'Docker', 'Kubernetes', 'React', 'Python', 'HIPAA', 'GDPR', 'Global Scale', 'Vector DB'],
    liveUrl: 'https://leo360.ai',
    githubUrl: null,
  },
  {
    featured: false,
    title: 'DevSecOps Automation Suite',
    subtitle: 'Open Source Project',
    description:
      'A comprehensive collection of utilities and automation scripts for Kubernetes, Terraform, and CI/CD security that has gained significant community adoption. Implements GitOps principles and security best practices.',
    longDescription: 'Created and maintained a popular open-source DevSecOps toolkit that automates security scanning, infrastructure validation, and compliance checks in CI/CD pipelines. Implemented policy-as-code using OPA (Open Policy Agent) and integrated with major cloud providers. The project has received contributions from 20+ developers and is used by numerous organizations to strengthen their security posture.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'code repository with DevOps tools',
    icon: Github,
    metrics: [
      { label: 'GitHub Stars', value: '850+', icon: Star },
      { label: 'Contributors', value: '20+', icon: Users },
      { label: 'Downloads', value: '50K+', icon: Zap }
    ],
    tags: ['Open Source', 'Go', 'Bash', 'Kubernetes', 'Terraform', 'CI/CD', 'Security', 'OPA', 'GitOps'],
    liveUrl: null,
    githubUrl: 'https://github.com/masoudtavakkoli',
  },
  {
    featured: false,
    title: 'Enterprise Data Platform',
    subtitle: 'Financial Services',
    description:
      'Designed and implemented a high-throughput data processing platform for a major financial institution, handling millions of transactions daily with real-time analytics and compliance monitoring.',
    longDescription: 'Architected a scalable data platform processing 5+ million financial transactions daily with sub-second latency. Implemented a multi-layer security architecture ensuring compliance with financial regulations while enabling real-time analytics. Reduced data processing costs by 40% through optimized stream processing and intelligent data tiering strategies.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'financial data platform dashboard',
    icon: Zap,
    metrics: [
      { label: 'Transactions', value: '5M+ daily', icon: Zap },
      { label: 'Latency', value: '<1s', icon: Star },
      { label: 'Cost Savings', value: '40%', icon: Globe }
    ],
    tags: ['Big Data', 'AWS', 'Kafka', 'Spark', 'Elasticsearch', 'Financial Services', 'Real-time Analytics', 'Security'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    featured: false,
    title: 'Multi-Cloud Migration Framework',
    subtitle: 'Enterprise Solution',
    description:
      'Developed a comprehensive framework for seamless migration between cloud providers (AWS, Azure, GCP), enabling organizations to avoid vendor lock-in and optimize cloud spending.',
    longDescription: 'Created an innovative multi-cloud orchestration framework that enables seamless workload migration between major cloud providers. Implemented infrastructure-as-code templates, automated compliance checks, and cost optimization algorithms that reduced cloud spending by 25-30% for enterprise clients. The solution includes disaster recovery capabilities with RPO <15 minutes and RTO <1 hour.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'multi-cloud architecture diagram',
    icon: Globe,
    metrics: [
      { label: 'Cloud Savings', value: '25-30%', icon: Zap },
      { label: 'RPO', value: '<15 min', icon: Star },
      { label: 'RTO', value: '<1 hour', icon: Globe }
    ],
    tags: ['Multi-Cloud', 'AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'IaC', 'Cost Optimization', 'Disaster Recovery'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    featured: false,
    title: 'AI-Powered Security Operations',
    subtitle: 'Cybersecurity Solution',
    description:
      'Designed and implemented an AI-enhanced security operations platform that uses machine learning to detect anomalies and potential threats in real-time across complex enterprise environments.',
    longDescription: 'Architected a next-generation security operations platform leveraging machine learning for advanced threat detection. The system processes over 1TB of security logs daily, using custom ML models to identify anomalies with 96% accuracy and reducing false positives by 78% compared to traditional rule-based systems. Implemented automated remediation workflows that decreased average incident response time from hours to minutes.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'security operations center dashboard',
    icon: Shield,
    metrics: [
      { label: 'Detection Rate', value: '96%', icon: Star },
      { label: 'False Positives', value: '-78%', icon: Zap },
      { label: 'Log Volume', value: '1TB+ daily', icon: Globe }
    ],
    tags: ['Cybersecurity', 'AI/ML', 'SIEM', 'Threat Detection', 'Automation', 'Python', 'Elasticsearch', 'Incident Response'],
    liveUrl: null,
    githubUrl: null,
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that make a real-world impact
            </p>
          </div>

          {/* Featured Project - LEO360.AI */}
          {featuredProject && (
            <div className="mb-20">
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 z-10" />
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      data-ai-hint={featuredProject.imageHint}
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Flagship Project
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <featuredProject.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-primary font-semibold">{featuredProject.subtitle}</p>
                        <h3 className="text-3xl lg:text-4xl font-bold">{featuredProject.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {featuredProject.longDescription || featuredProject.description}
                    </p>

                    {/* Metrics */}
                    {featuredProject.metrics && (
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {featuredProject.metrics.map((metric, index) => (
                          <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center justify-center mb-2">
                              <metric.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="text-xl font-bold text-primary">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                      {featuredProject.liveUrl && (
                        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg">
                          <Link href={featuredProject.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Visit LEO360.AI
                          </Link>
                        </Button>
                      )}
                      {featuredProject.githubUrl && (
                        <Button asChild variant="outline" size="lg">
                          <Link href={featuredProject.githubUrl} target="_blank">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index} 
                  className={`group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${hoveredProject === index ? 'ring-2 ring-primary' : ''} ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{project.subtitle}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow pb-3">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <div className="flex gap-2 w-full">
                      {project.githubUrl && (
                        <Button variant="secondary" size="sm" asChild className="flex-1">
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-2 h-3 w-3" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Interested in Collaboration?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to work on innovative projects that make a real impact. 
                  Let's build something amazing together.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600">
                  <Link href="#contact">
                    Get In Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
