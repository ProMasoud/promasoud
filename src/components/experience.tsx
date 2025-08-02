'use client';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';

const experienceData = [
  {
    role: 'AI Solutions Engineer',
    company: 'LyonsGlobal',
    period: 'May 2022 – Present',
    location: 'London, UK (Remote)',
    icon: Zap,
    description:
      'Lead the architecture, development, and deployment of LEO360.AI, a next-generation AI telehealth platform serving over 10,000 users globally. Responsible for designing and implementing the entire cloud infrastructure on AWS, integrating Large Language Models for advanced diagnostics, and managing GPU-accelerated workloads while ensuring HIPAA compliance and maintaining 99.99% uptime.',
    achievements: [
      'Architected and deployed LEO360.AI platform to 10,000+ users across 15+ countries',
      'Designed and implemented a secure, HIPAA-compliant cloud infrastructure on AWS',
      'Integrated multiple LLMs (OpenAI, Anthropic, Llama) with custom RAG systems',
      'Achieved 99.99% uptime through robust infrastructure design and monitoring',
      'Reduced infrastructure costs by 45% through optimization and automation',
      'Led a distributed team across 3 time zones, implementing agile methodologies'
    ],
    tags: ['AI/ML', 'LLM Integration', 'AWS', 'Python', 'DevOps', 'Kubernetes', 'Global Team'],
  },
  {
    role: 'DevOps Technical Lead',
    company: 'G2Tech',
    period: 'March 2019 – April 2022',
    location: 'Amsterdam, Netherlands (Remote)',
    icon: Users,
    description:
      'Led a team of 5 engineers to design, build, and maintain a multi-cloud SaaS infrastructure supporting 50+ enterprise clients. Architected and implemented CI/CD pipelines that reduced deployment times by 80% while improving reliability. Spearheaded infrastructure optimization initiatives that reduced costs by 70% through automation, right-sizing, and implementing modern DevOps practices.',
    achievements: [
      'Reduced infrastructure costs by 70% through cloud optimization and automation',
      'Designed and implemented CI/CD pipelines that cut deployment times by 80%',
      'Led migration from monolithic architecture to microservices using Kubernetes',
      'Implemented infrastructure as code using Terraform across AWS and Azure',
      'Established DevSecOps practices, reducing security vulnerabilities by 65%',
      'Mentored and managed a team of 5 engineers across different experience levels'
    ],
    tags: ['Leadership', 'CI/CD', 'Multi-Cloud', 'Azure', 'AWS', 'Kubernetes', 'Terraform', 'SaaS'],
  },
  {
    role: 'Crypto DevOps Engineer',
    company: 'Bit24',
    period: 'June 2018 – February 2019',
    location: 'Dubai, UAE',
    icon: Award,
    description:
      'Engineered a highly available and secure infrastructure for a cryptocurrency exchange processing over $100M in daily transactions. Designed and implemented comprehensive security protocols, automated monitoring systems, and disaster recovery solutions to protect assets and prevent threats for millions of users while ensuring 24/7 platform availability.',
    achievements: [
      'Secured platform handling $100M+ in daily cryptocurrency transactions',
      'Designed and implemented high-availability infrastructure supporting millions of users',
      'Achieved zero-downtime deployments through blue-green deployment strategy',
      'Implemented comprehensive security measures including WAF, IDS/IPS, and encryption',
      'Created automated monitoring and alerting systems with 99.99% uptime SLA',
      'Developed and documented disaster recovery procedures with 15-minute RTO'
    ],
    tags: ['Security', 'High-Availability', 'Cryptocurrency', 'Docker', 'Ansible', 'Monitoring', 'Disaster Recovery'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Arkatech',
    period: 'August 2016 – May 2018',
    location: 'Tehran, Iran',
    icon: TrendingUp,
    description:
      'Developed and maintained web applications across the full software development lifecycle (SDLC) for various clients in finance, e-commerce, and healthcare sectors. Utilized a diverse tech stack including PHP (Laravel, CodeIgniter), JavaScript (jQuery, Vue.js), and MySQL. Collaborated with cross-functional teams to gather requirements, design solutions, and deliver high-quality applications.',
    achievements: [
      'Delivered 15+ web applications on time and within budget for diverse clients',
      'Improved application performance by 40% through code optimization and caching',
      'Mentored 4 junior developers, accelerating their technical growth',
      'Implemented responsive design principles, improving mobile user experience',
      'Reduced database query times by 60% through optimization techniques',
      'Developed and maintained internal development standards and documentation'
    ],
    tags: ['Fullstack', 'PHP', 'Laravel', 'JavaScript', 'Vue.js', 'MySQL', 'SDLC', 'Responsive Design'],
  },
  {
    role: 'Software Development Intern',
    company: 'Sazmand',
    period: 'September 2015 – July 2016',
    location: 'Tehran, Iran',
    icon: Briefcase,
    description:
      'Gained foundational experience in software development through a structured internship program. Contributed to internal tools development, assisted senior developers with coding tasks, and participated in all phases of the software development lifecycle while learning core programming concepts and best practices.',
    achievements: [
      'Built 5+ internal tools that improved team productivity by 25%',
      'Mastered core programming fundamentals including OOP, data structures, and algorithms',
      'Participated in all phases of the SDLC from requirements gathering to deployment',
      'Assisted in database design and implementation for internal projects',
      'Received "Outstanding Intern" recognition for exceptional contributions'
    ],
    tags: ['Internship', 'Web Development', 'PHP', 'JavaScript', 'MySQL', 'SDLC'],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              9+ years of building scalable solutions across AI, DevOps, and cloud technologies
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-blue-500 to-primary rounded-full opacity-30" />
            
            {experienceData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`relative mb-16 ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -inset-2 bg-primary/20 rounded-full blur animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex ${isLeft ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <Card 
                      className={`w-full max-w-lg group cursor-pointer transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${activeItem === index ? 'ring-2 ring-primary shadow-2xl' : ''} ${isLeft ? 'mr-8' : 'ml-8'}`}
                      onMouseEnter={() => setActiveItem(index)}
                      onMouseLeave={() => setActiveItem(null)}
                    >
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span>{item.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="secondary" 
                              className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Career Highlights */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                  Career Highlights
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                    <div className="text-sm text-muted-foreground">Users Served Globally</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
                    <div className="text-sm text-muted-foreground">Daily Transactions Secured</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction Achieved</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">9+</div>
                    <div className="text-sm text-muted-foreground">Years Professional Experience</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center mt-6">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">Countries Worked In</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">12+</div>
                    <div className="text-sm text-muted-foreground">Professional Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">20+</div>
                    <div className="text-sm text-muted-foreground">Enterprise Projects Delivered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
