'use client';
import { Mic, Users, BookOpen, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const activitiesData = [
  // Speaking Engagements
  {
    type: 'speaking',
    title: 'Modern AI Infrastructure at Scale',
    event: 'AWS re:Invent',
    location: 'Las Vegas, USA',
    date: 'November 2023',
    description: 'Delivered a technical session on architecting scalable infrastructure for AI workloads, focusing on cost optimization and performance tuning for large language models.',
    url: 'https://reinvent.awsevents.com/'
  },
  {
    type: 'speaking',
    title: 'DevSecOps in Regulated Industries',
    event: 'KubeCon + CloudNativeCon',
    location: 'Amsterdam, Netherlands',
    date: 'April 2023',
    description: 'Presented best practices for implementing DevSecOps pipelines in highly regulated industries such as healthcare and finance, with practical examples and case studies.',
    url: 'https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/'
  },
  {
    type: 'speaking',
    title: 'Multi-Cloud Strategy for Enterprise',
    event: 'Microsoft Build',
    location: 'Seattle, USA',
    date: 'May 2022',
    description: 'Panel discussion on implementing effective multi-cloud strategies for enterprise organizations, focusing on governance, security, and cost management.',
    url: 'https://build.microsoft.com/'
  },
  
  // Community Contributions
  {
    type: 'community',
    title: 'Kubernetes SIG Contributor',
    organization: 'Cloud Native Computing Foundation',
    date: '2021 - Present',
    description: 'Active contributor to Kubernetes Special Interest Groups (SIGs), focusing on security and multi-cluster management. Contributed to documentation and code improvements.',
    url: 'https://kubernetes.io/community/'
  },
  {
    type: 'community',
    title: 'Technical Blog Author',
    organization: 'Medium & Dev.to',
    date: '2020 - Present',
    description: 'Regular author of technical articles on cloud architecture, DevOps practices, and AI integration, with over 50,000 monthly readers and featured in prominent tech publications.',
    url: 'https://medium.com/'
  },
  {
    type: 'community',
    title: 'Open Source Maintainer',
    organization: 'GitHub',
    date: '2019 - Present',
    description: 'Maintain several open source projects related to infrastructure automation and security scanning, with combined 2,000+ stars and 100+ contributors.',
    url: 'https://github.com/masoudtavakkoli'
  },
  
  // Professional Development
  {
    type: 'professional',
    title: 'AI/ML for Cloud Infrastructure Workshop',
    organization: 'Stanford University',
    date: 'August 2023',
    description: 'Completed intensive workshop on applying machine learning techniques to optimize cloud infrastructure, focusing on predictive scaling and anomaly detection.',
    credential: 'Certificate of Completion'
  },
  {
    type: 'professional',
    title: 'Advanced Security in Distributed Systems',
    organization: 'SANS Institute',
    date: 'March 2023',
    description: 'Completed specialized training on implementing advanced security measures in distributed systems, with focus on threat modeling and zero-trust architecture.',
    credential: 'SANS Security Certification'
  },
  {
    type: 'professional',
    title: 'Leadership in Technical Organizations',
    organization: 'Harvard Business School Online',
    date: 'September 2022',
    description: 'Completed executive education program focused on leadership strategies for technical professionals transitioning to management roles in technology organizations.',
    credential: 'Certificate of Completion'
  }
];

export default function Activities() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('activities');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const activityTypes = Array.from(new Set(activitiesData.map(activity => activity.type)));
  
  const filteredActivities = activeFilter 
    ? activitiesData.filter(activity => activity.type === activeFilter)
    : activitiesData;

  const getIcon = (type: string) => {
    switch (type) {
      case 'speaking':
        return Mic;
      case 'community':
        return Users;
      case 'professional':
        return BookOpen;
      default:
        return Calendar;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'speaking':
        return 'Speaking Engagement';
      case 'community':
        return 'Community Contribution';
      case 'professional':
        return 'Professional Development';
      default:
        return type;
    }
  };

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Professional Activities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Speaking engagements, community contributions, and professional development
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            <Button 
              variant={activeFilter === null ? "default" : "outline"} 
              onClick={() => setActiveFilter(null)}
              className="rounded-full"
            >
              All Activities
            </Button>
            {activityTypes.map(type => (
              <Button 
                key={type} 
                variant={activeFilter === type ? "default" : "outline"}
                onClick={() => setActiveFilter(type)}
                className="rounded-full capitalize"
              >
                {type === 'speaking' ? 'Speaking' : type === 'community' ? 'Community' : 'Professional'}
              </Button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity, index) => {
              const IconComponent = getIcon(activity.type);
              
              return (
                <Card 
                  key={`${activity.type}-${activity.title}`} 
                  className={`group hover:shadow-lg transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-1 ${isVisible ? 'animate-in slide-in-from-bottom' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg mt-1">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 capitalize">
                            {getTypeLabel(activity.type)}
                          </Badge>
                          <CardTitle className="text-lg font-bold leading-tight">{activity.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-border w-full" />
                  </CardHeader>
                  
                  <CardContent className="pt-4 space-y-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {activity.type === 'speaking' ? (
                          <>
                            <Users className="h-4 w-4" />
                            <span>{activity.event}</span>
                          </>
                        ) : (
                          <>
                            <Users className="h-4 w-4" />
                            <span>{activity.organization}</span>
                          </>
                        )}
                      </div>
                      
                      {activity.location && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{activity.location}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{activity.date}</span>
                      </div>
                      
                      {activity.credential && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="h-4 w-4" />
                          <span>{activity.credential}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                    
                    {activity.url && (
                      <div className="pt-2">
                        <Button variant="ghost" size="sm" className="gap-1 text-primary" asChild>
                          <Link href={activity.url} target="_blank">
                            <span className="text-xs">Learn More</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
