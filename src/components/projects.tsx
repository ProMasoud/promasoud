'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import TechIcon from './tech-icons';
import { useEffect, useState } from 'react';

const projectsData = [
  {
    featured: true,
    title: 'LyonsGlobal - Healthcare IT Platform',
    subtitle: 'Technical Director',
    description:
      'Leading cross-functional teams and driving strategic IT initiatives for a healthcare company. Managing a team of 10+ developers and DevOps engineers.',
    longDescription: 'As Technical Director at LyonsGlobal, I lead cross-functional teams and drive strategic IT initiatives for a healthcare company. I manage a team of 10+ developers and DevOps engineers, focusing on building scalable healthcare solutions that comply with industry regulations like HIPAA. Our team has successfully delivered multiple critical projects that have improved patient care and operational efficiency.',
    image: 'https://placehold.co/800x600.png',
    imageHint: 'healthcare IT platform',
    icon: () => <TechIcon name="hospital" className="w-5 h-5" />,
    metrics: [
      { label: 'Team Size', value: '10+', icon: () => <TechIcon name="users" className="w-5 h-5" /> },
      { label: 'Projects', value: '5+', icon: () => <TechIcon name="star" className="w-5 h-5" /> },
      { label: 'Uptime', value: '99.9%', icon: () => <TechIcon name="globe" className="w-5 h-5" /> }
    ],
    tags: ['Healthcare', 'HIPAA', 'Technical Leadership', 'Team Management', 'Cloud Infrastructure'],
    liveUrl: 'https://www.lyonsglobal.com',
    githubUrl: null,
  },
  {
    featured: false,
    title: 'GO2TR Immigration Consulting Platform',
    subtitle: 'Technical Lead',
    description:
      'Migrated main website from Laravel+Vue CMS to WordPress. Developed internal CRM (BMS) connecting all organizational stakeholders using Laravel and Nuxt.',
    longDescription: 'As Technical Lead at GO2TR Immigration Consulting Company, I led the migration of the main website from a Laravel+Vue CMS to WordPress. I also developed an internal CRM (BMS) system that connects all organizational stakeholders using Laravel and Nuxt. This project significantly improved the company\'s digital presence and internal operations.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'immigration consulting platform',
    icon: () => <TechIcon name="globe" className="w-5 h-5" />,
    metrics: [
      { label: 'Website Traffic', value: '200%+', icon: () => <TechIcon name="zap" className="w-5 h-5" /> },
      { label: 'User Satisfaction', value: '95%', icon: () => <TechIcon name="star" className="w-5 h-5" /> }
    ],
    tags: ['CRM', 'Laravel', 'Nuxt', 'WordPress', 'Website Migration'],
    liveUrl: 'https://go2tr.com',
    githubUrl: null,
  },
  {
    featured: false,
    title: 'Auto Homemade Pharmacy (Invention)',
    subtitle: 'Inventor',
    description:
      'An innovative smart home pharmacy system with mobile medication planning capabilities.',
    longDescription: 'I invented the Auto Homemade Pharmacy, an innovative smart home pharmacy system with mobile medication planning capabilities. This system helps users manage their medications more effectively through automated dispensing and mobile app integration for scheduling and reminders.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'smart home pharmacy system',
    icon: () => <TechIcon name="shield" className="w-5 h-5" />,
    metrics: [
      { label: 'Patent Status', value: 'Pending', icon: () => <TechIcon name="star" className="w-5 h-5" /> }
    ],
    tags: ['Invention', 'IoT', 'Healthcare', 'Mobile App'],
    liveUrl: '#',
    githubUrl: null,
  }
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
                        <TechIcon name="star" className="w-3 h-3 mr-1" />
                        Flagship Project
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <div className="w-6 h-6 text-primary">
                          <featuredProject.icon />
                        </div>
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
                              <div className="w-4 h-4 text-primary flex items-center justify-center">
                                <metric.icon />
                              </div>
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
                            <TechIcon name="external-link" className="mr-2 h-4 w-4" />
                            Visit LEO360.AI
                          </Link>
                        </Button>
                      )}
                      {featuredProject.githubUrl && (
                        <Button asChild variant="outline" size="lg">
                          <Link href={featuredProject.githubUrl} target="_blank">
                            <TechIcon name="github" className="mr-2 h-4 w-4" />
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
                        <div className="w-5 h-5 text-white">
                          <project.icon />
                        </div>
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
                            <TechIcon name="github" className="mr-2 h-3 w-3" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <Link href={project.liveUrl} target="_blank">
                            <TechIcon name="external-link" className="mr-2 h-3 w-3" />
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
