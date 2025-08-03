'use client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import TechIcon from './tech-icons';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    name: 'Programming',
    icon: () => <TechIcon name="typescript" className="w-5 h-5" />,
    skills: [
      { name: 'Python', icon: () => <TechIcon name="python" className="w-5 h-5" />, description: 'Expert in Python for AI/ML, web backends, data analysis, and automation scripts.' },
      { name: 'Go', icon: () => <TechIcon name="golang" className="w-5 h-5" />, description: 'Proficient in Go for building high-performance, concurrent systems and microservices.' },
      { name: 'Bash', icon: () => <TechIcon name="bash" className="w-5 h-5" />, description: 'Advanced shell scripting for automation, system administration, and DevOps workflows.' },
      { name: 'JavaScript', icon: () => <TechIcon name="javascript" className="w-5 h-5" />, description: 'Frontend and backend development with Node.js, React, and Next.js.' },
      { name: 'PHP', icon: () => <TechIcon name="php" className="w-5 h-5" />, description: 'Experience with legacy and modern PHP applications and frameworks.' },
      { name: 'SQL', icon: () => <TechIcon name="mysql" className="w-5 h-5" />, description: 'Advanced database querying, optimization, and schema design.' },
    ],
  },
  {
    name: 'Cloud Platforms',
    icon: () => <TechIcon name="aws" className="w-5 h-5" />,
    skills: [
      { name: 'AWS', icon: () => <TechIcon name="aws" className="w-5 h-5" />, description: 'Amazon Web Services: EC2, S3, RDS, EKS, Lambda, CloudFormation, Route53, CloudFront, IAM, VPC, and more.' },
      { name: 'Azure', icon: () => <TechIcon name="azure" className="w-5 h-5" />, description: 'Microsoft Azure: AKS, App Service, Functions, Storage, SQL, DevOps, Active Directory, and more.' },
      { name: 'GCP', icon: () => <TechIcon name="gcloud" className="w-5 h-5" />, description: 'Google Cloud Platform: GKE, Compute Engine, Cloud Storage, BigQuery, and more.' },
      { name: 'Digital Ocean', icon: () => <TechIcon name="digitalocean" className="w-5 h-5" />, description: 'Experience with Digital Ocean droplets, Kubernetes, and managed databases.' },
      { name: 'OVH', icon: () => <TechIcon name="ovh" className="w-5 h-5" />, description: 'OVH cloud infrastructure management and optimization.' },
    ],
  },
  {
    name: 'DevOps & Infrastructure',
    icon: () => <TechIcon name="docker" className="w-5 h-5" />,
    skills: [
      { name: 'Docker', icon: () => <TechIcon name="docker" className="w-5 h-5" />, description: 'Containerization, multi-stage builds, Docker Compose, and registry management.' },
      { name: 'Kubernetes', icon: () => <TechIcon name="kubernetes" className="w-5 h-5" />, description: 'K8s cluster management, deployments, services, ingress, Helm charts, and operators.' },
      { name: 'Terraform', icon: () => <TechIcon name="terraform" className="w-5 h-5" />, description: 'Infrastructure as Code for AWS, Azure, and GCP with modules and state management.' },
      { name: 'Ansible', icon: () => <TechIcon name="ansible" className="w-5 h-5" />, description: 'Configuration management and automated provisioning with playbooks and roles.' },
      { name: 'CI/CD', icon: () => <TechIcon name="github-actions" className="w-5 h-5" />, description: 'GitHub Actions, GitLab CI, Jenkins, and Azure DevOps pipelines.' },
      { name: 'Linux', icon: () => <TechIcon name="linux" className="w-5 h-5" />, description: 'System administration, performance tuning, and security hardening.' },
    ],
  },
  {
    name: 'AI/ML',
    icon: () => <TechIcon name="openai" className="w-5 h-5" />,
    skills: [
        { name: 'LLM Integration', icon: () => <TechIcon name="openai" className="w-5 h-5" />, description: 'Integrating and fine-tuning Large Language Models (OpenAI, Anthropic, Llama, etc).' },
        { name: 'ML Ops', icon: () => <TechIcon name="mlflow" className="w-5 h-5" />, description: 'End-to-end ML pipelines, model deployment, and monitoring.' },
        { name: 'GPU Management', icon: () => <TechIcon name="nvidia" className="w-5 h-5" />, description: 'Managing GPU resources for AI/ML workloads on cloud and on-premise.' },
        { name: 'Vector DBs', icon: () => <TechIcon name="pinecone" className="w-5 h-5" />, description: 'Working with vector databases for AI applications (Pinecone, Weaviate, etc).' },
        { name: 'RAG Systems', icon: () => <TechIcon name="langchain" className="w-5 h-5" />, description: 'Building Retrieval Augmented Generation systems for enterprise applications.' },
    ],
  },
  {
    name: 'Databases',
    icon: () => <TechIcon name="mysql" className="w-5 h-5" />,
    skills: [
      { name: 'MySQL', icon: () => <TechIcon name="mysql" className="w-5 h-5" />, description: 'Relational database design, optimization, and high-availability setups.' },
      { name: 'PostgreSQL', icon: () => <TechIcon name="postgresql" className="w-5 h-5" />, description: 'Advanced relational database management and performance tuning.' },
      { name: 'MongoDB', icon: () => <TechIcon name="mongodb" className="w-5 h-5" />, description: 'NoSQL database for flexible data schemas and distributed systems.' },
      { name: 'Redis', icon: () => <TechIcon name="redis" className="w-5 h-5" />, description: 'In-memory data store for caching, messaging, and real-time applications.' },
      { name: 'Elasticsearch', icon: () => <TechIcon name="elasticsearch" className="w-5 h-5" />, description: 'Full-text search and analytics engine for log management.' },
      { name: 'DynamoDB', icon: () => <TechIcon name="aws-dynamodb" className="w-5 h-5" />, description: 'AWS NoSQL database for high-performance applications.' },
    ],
  },
  {
      name: 'Soft Skills',
      icon: () => <TechIcon name="linkedin" className="w-5 h-5" />,
      skills: [
        { name: 'Technical Leadership', icon: () => <TechIcon name="linkedin" className="w-5 h-5" />, description: 'Leading and mentoring technical teams across multiple countries and cultures.' },
        { name: 'DevOps', icon: () => <TechIcon name="docker" className="w-5 h-5" />, description: 'Experience with DevOps practices, CI/CD pipelines, and infrastructure automation.' },
        { name: 'Project Management', icon: () => <TechIcon name="jira" className="w-5 h-5" />, description: 'Experience managing projects from conception to delivery with agile methodologies.' },
        { name: 'English', icon: () => <TechIcon name="usa" className="w-5 h-5" />, description: 'Professional working proficiency' },
        { name: 'Persian', icon: () => <TechIcon name="iran" className="w-5 h-5" />, description: 'Native/Bilingual proficiency' },
        { name: 'Azerbaijani', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Native/Bilingual proficiency' }
      ]
  },
  {
      name: 'Languages',
      icon: () => <TechIcon name="usa" className="w-5 h-5" />,
      skills: [
        { name: 'English', icon: () => <TechIcon name="usa" className="w-5 h-5" />, description: 'Professional working proficiency (C1)' },
        { name: 'Persian', icon: () => <TechIcon name="iran" className="w-5 h-5" />, description: 'Native proficiency' },
        { name: 'German', icon: () => <TechIcon name="germany" className="w-5 h-5" />, description: 'Elementary proficiency (A2)' },
        { name: 'Dutch', icon: () => <TechIcon name="netherlands" className="w-5 h-5" />, description: 'Elementary proficiency (A1)' }
      ]
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, secure, and innovative solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.name} 
                className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="h-8 w-8 text-primary flex items-center justify-center">
                        <category.icon />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                </CardHeader>
                <CardContent>
                  <TooltipProvider delayDuration={300}>
                    <div className="grid grid-cols-2 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <Tooltip key={skill.name}>
                          <TooltipTrigger asChild>
                            <div 
                              className={`flex flex-col items-center gap-3 p-4 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 cursor-pointer group/skill transform hover:scale-105 ${hoveredSkill === skill.name ? 'bg-primary/5 border-primary/50' : 'hover:bg-muted/50'}`}
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                              style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                            >
                              <div className="relative">
                                <div className="h-12 w-12 text-muted-foreground group-hover/skill:text-primary transition-colors duration-300 flex items-center justify-center">
                                  <skill.icon />
                                </div>
                                {hoveredSkill === skill.name && (
                                  <div className="absolute -inset-2 bg-primary/20 rounded-full blur animate-pulse" />
                                )}
                              </div>
                              <span className="text-sm font-semibold text-center leading-tight group-hover/skill:text-primary transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Always Learning, Always Growing
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Technology evolves rapidly, and so do I. With a passion for continuous learning and 
                  hands-on experience across diverse projects, I stay at the forefront of innovation 
                  to deliver cutting-edge solutions.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">AWS Certified Solutions Architect</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">AWS Certified Developer</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Azure DevOps Expert</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Azure Administrator</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Kubernetes CKAD</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">+7 More Certifications</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
