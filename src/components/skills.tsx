'use client';
import { BrainCircuit, Briefcase, Code, Database, GitMerge, Globe, HardDrive, Lightbulb, MessageCircle, Server, Shell, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { AnsibleIcon, AwsIcon, AzureIcon, DockerIcon, GoIcon, JavascriptIcon, KubernetesIcon, MongodbIcon, MySqlIcon, PhpIcon, PostgresqlIcon, PythonIcon, RedisIcon, TerraformIcon } from './icons';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    name: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', icon: PythonIcon, description: 'Expert in Python for AI/ML, web backends, data analysis, and automation scripts.' },
      { name: 'Go', icon: GoIcon, description: 'Proficient in Go for building high-performance, concurrent systems and microservices.' },
      { name: 'Bash', icon: Shell, description: 'Advanced shell scripting for automation, system administration, and DevOps workflows.' },
      { name: 'JavaScript', icon: JavascriptIcon, description: 'Frontend and backend development with Node.js, React, and Next.js.' },
      { name: 'PHP', icon: PhpIcon, description: 'Experience with legacy and modern PHP applications and frameworks.' },
      { name: 'SQL', icon: Database, description: 'Advanced database querying, optimization, and schema design.' },
    ],
  },
  {
    name: 'Cloud Platforms',
    icon: Server,
    skills: [
      { name: 'AWS', icon: AwsIcon, description: 'Amazon Web Services: EC2, S3, RDS, EKS, Lambda, CloudFormation, Route53, CloudFront, IAM, VPC, and more.' },
      { name: 'Azure', icon: AzureIcon, description: 'Microsoft Azure: AKS, App Service, Functions, Storage, SQL, DevOps, Active Directory, and more.' },
      { name: 'GCP', icon: Globe, description: 'Google Cloud Platform: GKE, Compute Engine, Cloud Storage, BigQuery, and more.' },
      { name: 'Digital Ocean', icon: Globe, description: 'Experience with Digital Ocean droplets, Kubernetes, and managed databases.' },
      { name: 'OVH', icon: Server, description: 'OVH cloud infrastructure management and optimization.' },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: GitMerge,
    skills: [
      { name: 'Docker', icon: DockerIcon, description: 'Containerization, multi-stage builds, and microservices architecture.' },
      { name: 'Kubernetes', icon: KubernetesIcon, description: 'Orchestration of containerized applications at scale, custom operators, and helm charts.' },
      { name: 'Terraform', icon: TerraformIcon, description: 'Infrastructure as Code for multi-cloud provisioning and management.' },
      { name: 'Ansible', icon: AnsibleIcon, description: 'Configuration management, application deployment, and infrastructure automation.' },
      { name: 'CI/CD', icon: GitMerge, description: 'Building automated pipelines with Jenkins, GitLab CI, GitHub Actions, Azure DevOps.' },
      { name: 'Monitoring', icon: HardDrive, description: 'Prometheus, Grafana, ELK Stack, Azure Monitor, CloudWatch.' },
    ],
  },
  {
    name: 'AI/ML',
    icon: BrainCircuit,
    skills: [
        { name: 'LLM Integration', icon: Globe, description: 'Integrating and fine-tuning Large Language Models (OpenAI, Anthropic, Llama, etc).' },
        { name: 'ML Ops', icon: GitMerge, description: 'End-to-end ML pipelines, model deployment, and monitoring.' },
        { name: 'GPU Management', icon: HardDrive, description: 'Managing GPU resources for AI/ML workloads on cloud and on-premise.' },
        { name: 'Vector DBs', icon: Database, description: 'Working with vector databases for AI applications (Pinecone, Weaviate, etc).' },
        { name: 'RAG Systems', icon: BrainCircuit, description: 'Building Retrieval Augmented Generation systems for enterprise applications.' },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: MySqlIcon, description: 'Relational database design, optimization, and high-availability setups.' },
      { name: 'PostgreSQL', icon: PostgresqlIcon, description: 'Advanced relational database management and performance tuning.' },
      { name: 'MongoDB', icon: MongodbIcon, description: 'NoSQL database for flexible data schemas and distributed systems.' },
      { name: 'Redis', icon: RedisIcon, description: 'In-memory data store for caching, messaging, and real-time applications.' },
      { name: 'Elasticsearch', icon: Database, description: 'Full-text search and analytics engine for log management.' },
      { name: 'DynamoDB', icon: AwsIcon, description: 'AWS NoSQL database for high-performance applications.' },
    ],
  },
  {
      name: 'Soft Skills',
      icon: Briefcase,
      skills: [
        { name: 'Leadership', icon: Users, description: 'Leading and mentoring technical teams across multiple countries and cultures.' },
        { name: 'Communication', icon: MessageCircle, description: 'Clear communication with technical and non-technical stakeholders at all levels.' },
        { name: 'Problem-Solving', icon: Lightbulb, description: 'Analytical and creative problem-solving abilities for complex technical challenges.' },
        { name: 'Project Management', icon: Briefcase, description: 'Managing complex technical projects from inception to delivery.' },
        { name: 'Stakeholder Management', icon: Users, description: 'Building relationships with clients, partners, and internal teams.' },
        { name: 'Adaptability', icon: Globe, description: 'Quickly adapting to new technologies, environments, and business requirements.' },
      ]
  },
  {
      name: 'Languages',
      icon: Globe,
      skills: [
        { name: 'English', icon: Globe, description: 'Professional working proficiency (C1)' },
        { name: 'Persian', icon: Globe, description: 'Native proficiency' },
        { name: 'German', icon: Globe, description: 'Elementary proficiency (A2)' },
        { name: 'Dutch', icon: Globe, description: 'Elementary proficiency (A1)' }
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
                      <category.icon className="h-8 w-8 text-primary" />
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
                                <skill.icon className="h-12 w-12 text-muted-foreground group-hover/skill:text-primary transition-colors duration-300" />
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
