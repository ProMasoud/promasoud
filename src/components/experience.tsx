'use client';
import TechIcon from './tech-icons';
import { Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { useEffect, useState } from 'react';

const experienceData = [
  {
    role: 'Technical Director',
    company: 'Lyons Global',
    period: 'November 2023 - Present',
    location: 'California, United States',
    icon: () => <TechIcon name="zap" className="w-5 h-5" />,
    description:
      'Lead cross-functional teams and drive strategic IT initiatives to enhance global healthcare delivery. Oversee technical projects, ensure compliance with industry standards, and align IT operations with business goals.',
    achievements: [
      'Achieved significant cost savings, improved operational efficiency, and delivered scalable and secure systems',
      'Spearheaded regulatory compliance (HIPAA, ISO 27001, DHA), achieving global healthcare and data security standards',
      'Directed IT infrastructure redesigns, achieving a 70% reduction in operational costs',
      'Built and led a high-performing IT development team across DevOps, software engineering, and project management',
      'Increased developer and manager satisfaction by 40% through automation and seamless workflows',
      'Developed IT roadmaps aligned with business objectives',
      'Conducted audits and risk assessments for HIPAA, ISO 27001, MOH, and DHA standards',
      'Designed scalable systems and deployed automation solutions supporting global healthcare delivery'
    ],
    tags: ['Technical Leadership', 'Healthcare', 'HIPAA', 'ISO 27001', 'DHA', 'IT Strategy', 'Team Management'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Lyons Global',
    period: 'June 2022 - November 2023',
    location: 'California, United States',
    icon: () => <TechIcon name="users" className="w-5 h-5" />,
    description:
      'Contributed to digital health solutions with a mission to deliver gold-standard healthcare globally. Enhanced development processes, system reliability, and integration of digital platforms and healthcare services.',
    achievements: [
      'Focused on automation, scalability, and continuous improvement',
      'Supported global digital health transformation with innovative, scalable solutions'
    ],
    tags: ['DevOps', 'Healthcare', 'Automation', 'Scalability', 'Digital Health'],
  },
  {
    role: 'VP of G2TECH',
    company: 'G2TECH',
    period: 'June 2022 - Present',
    location: 'Ankara, Turkey',
    icon: () => <TechIcon name="award" className="w-5 h-5" />,
    description:
      'Assembled a dynamic team to revolutionize software development. Delivered 100+ projects, showcasing commitment to excellence.',
    achievements: [
      'Created streamlined workflows, empowering peak team performance',
      'Implemented work-life balance systems',
      'Grew from solo founder to a team of 45'
    ],
    tags: ['Leadership', 'Project Management', 'Team Building', 'Software Development'],
  },
  {
    role: 'DevOps Technical Lead',
    company: 'G2TECH',
    period: 'June 2022 - May 2024',
    location: 'Ankara, Turkey',
    icon: () => <TechIcon name="trending-up" className="w-5 h-5" />,
    description:
      'Implemented comprehensive logging and monitoring systems (Sentry, EFK, Prometheus). Optimized CI/CD pipelines for faster deployments.',
    achievements: [
      'Utilized Ansible and Terraform for enhanced stability and performance',
      'Automated tasks using shell scripts',
      'Operated secure in-house systems (Gitlab, Jira, Confluence, Rocket.Chat, Uptimekuma)'
    ],
    tags: ['DevOps', 'CI/CD', 'Terraform', 'Ansible', 'Monitoring', 'Automation'],
  },
  {
    role: 'Co-Founder',
    company: 'GO2TRain',
    period: 'June 2021 - Present',
    location: 'Turkey',
    icon: () => <TechIcon name="briefcase" className="w-5 h-5" />,
    description:
      'Provided free, high-quality language courses globally. Developed immersive video lessons, interactive quizzes, and downloadable materials.',
    achievements: [
      'Offered tailored content in English, French, German, Korean, and more',
      'Created a seamless and accessible language learning experience'
    ],
    tags: ['Co-Founder', 'Education', 'Language Learning', 'Content Development'],
  },
  {
    role: 'Technical Lead',
    company: 'GO2TR Immigration Consulting Company',
    period: 'September 2021 - July 2022',
    location: 'Iran',
    icon: () => <TechIcon name="zap" className="w-5 h-5" />,
    description:
      'Migrated main website from Laravel+Vue CMS to WordPress. Developed internal CRM (BMS) connecting all organizational stakeholders using Laravel and Nuxt.',
    achievements: [
      'Successfully migrated website to new platform',
      'Developed comprehensive internal CRM system'
    ],
    tags: ['Technical Leadership', 'CRM', 'Laravel', 'Nuxt', 'WordPress'],
  },
  {
    role: 'Software Engineer',
    company: 'GO2TR Immigration Consulting Company',
    period: 'June 2018 - October 2021',
    location: 'Iran',
    icon: () => <TechIcon name="award" className="w-5 h-5" />,
    description:
      'Migrated main website from Laravel+Vue CMS to WordPress. Developed internal CRM (BMS) connecting all organizational stakeholders using Laravel and Nuxt.',
    achievements: [
      'Successfully migrated website to new platform',
      'Developed comprehensive internal CRM system'
    ],
    tags: ['Software Engineering', 'Laravel', 'Vue', 'WordPress', 'CRM'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Romina',
    period: 'February 2021 - July 2022',
    location: 'Iran',
    icon: () => <TechIcon name="users" className="w-5 h-5" />,
    description:
      'Enhanced infrastructure, performance, and scalability. Dockerized products, streamlined deployments.',
    achievements: [
      'Built real-time monitoring and logging tools',
      'Managed 5 high-traffic services, supporting over 1 million users',
      'Oversaw infrastructure for bit24.cash and exchaino.com',
      'Built DevOps team and fostered innovation'
    ],
    tags: ['DevOps', 'Docker', 'Monitoring', 'High-Traffic', 'Infrastructure'],
  },
  {
    role: 'Software Engineer',
    company: 'Arkatech',
    period: 'April 2018 - October 2020',
    location: 'Tabriz',
    icon: () => <TechIcon name="trending-up" className="w-5 h-5" />,
    description:
      'Developed projects in Smart Schools, Cargo Management, and Store Management Systems. Used Laravel, Express, React Native, Socket.io.',
    achievements: [
      'Contributed throughout project lifecycle'
    ],
    tags: ['Software Engineering', 'Laravel', 'Express', 'React Native', 'Socket.io'],
  },
  {
    role: 'Software Developer',
    company: 'Saymantech',
    period: 'March 2018 - June 2019',
    location: 'Tabriz',
    icon: () => <TechIcon name="briefcase" className="w-5 h-5" />,
    description:
      'Managed real-time IoT communication and reporting panel.',
    achievements: [
      'Contributed to development of IoT solutions'
    ],
    tags: ['Software Development', 'IoT', 'Real-time Communication'],
  },
  {
    role: 'Junior Web Developer',
    company: 'Rahkar Company',
    period: 'May 2016 - November 2017',
    location: 'Tabriz',
    icon: () => <TechIcon name="award" className="w-5 h-5" />,
    description:
      'Developed web applications using CodeIgniter and Angular.js.',
    achievements: [
      'Built and maintained web applications'
    ],
    tags: ['Web Development', 'CodeIgniter', 'Angular.js'],
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-8 h-8 text-white flex items-center justify-center">
                          <item.icon />
                        </div>
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
                      <CardContent className="p-6 pt-12">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <div className="flex items-center justify-center w-4 h-4">
                              <TechIcon name="briefcase" className="w-4 h-4" />
                            </div>
                            <span>{item.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <div className="flex items-center justify-center w-4 h-4">
                                <Calendar className="w-4 h-4" />
                              </div>
                              <span>{item.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="flex items-center justify-center w-4 h-4">
                                <TechIcon name="map-pin" className="w-4 h-4" />
                              </div>
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
        </div>
      </div>
    </section>
  );
}
