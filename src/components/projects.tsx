import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
  {
    featured: true,
    title: 'LEO360.AI - Next-Gen AI Telehealth',
    description:
      'A groundbreaking telehealth platform leveraging Large Language Models (LLMs) to provide AI-powered diagnostics and patient monitoring. Deployed globally on a secure, scalable AWS infrastructure.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'telehealth platform',
    tags: ['AI/ML', 'LLM', 'AWS', 'Docker', 'React', 'Python', 'Global Scale'],
    liveUrl: 'https://leo360.ai',
    githubUrl: null,
  },
  {
    featured: false,
    title: 'Open Source DevOps Toolkit',
    description:
      'A collection of utilities and automation scripts for Kubernetes and Terraform management. Contributed to by the community to streamline common DevOps workflows.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'source code',
    tags: ['Open Source', 'Go', 'Bash', 'Kubernetes', 'Terraform', 'CI/CD'],
    liveUrl: null,
    githubUrl: 'https://github.com/Masoud-T',
  },
  {
    featured: false,
    title: 'Smart School Management System',
    description:
      'A comprehensive SaaS platform for educational institutions to manage student records, grades, and communications. Built with a focus on usability and security.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'school system',
    tags: ['SaaS', 'PHP', 'JavaScript', 'MySQL', 'Fullstack'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    featured: false,
    title: 'Automated Cargo Management Software',
    description:
      'Custom enterprise software for logistics companies to track and manage cargo shipments in real-time, optimizing routes and reducing operational costs.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'cargo logistics',
    tags: ['Enterprise', 'Automation', 'Logistics', 'System Design'],
    liveUrl: null,
    githubUrl: null,
  },
];

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        
        {featuredProject && (
          <Card className="mb-12 grid md:grid-cols-2 overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
                data-ai-hint={featuredProject.imageHint}
              />
            </div>
            <div className="p-8 flex flex-col">
              <Badge className="w-fit mb-2 bg-accent text-accent-foreground">Featured Project</Badge>
              <CardHeader className="p-0">
                <CardTitle className="text-2xl mb-2">{featuredProject.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow p-0">
                <p className="text-muted-foreground mb-4">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-6">
                {featuredProject.liveUrl && (
                  <Button asChild>
                    <Link href={featuredProject.liveUrl} target="_blank">
                      Visit Site <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </div>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {project.githubUrl && (
                  <Button variant="secondary" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      View on GitHub
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
