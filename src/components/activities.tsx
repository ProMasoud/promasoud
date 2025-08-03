'use client';

import { Mic, Users, BookOpen, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const activitiesData = [
  // Speaking Engagements
  {
    type: 'speaking',
    title: 'Technical Leadership in Modern Software Development',
    event: 'Internal Company Conference',
    location: 'Dubai, UAE',
    date: '2023',
    description: 'Presented best practices for technical leadership in modern software development environments.',
    url: 'https://www.linkedin.com/in/promasoud'
  },
  
  // Community Contributions
  {
    type: 'community',
    title: 'Technical Blog Author',
    organization: 'Medium',
    date: '2020 - Present',
    description: 'Regular author of technical articles on software development, DevOps practices, and technical leadership.',
    url: 'https://medium.com/@promasoud'
  },
  {
    type: 'community',
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: '2019 - Present',
    description: 'Contribute to open source projects related to web development and DevOps tools.',
    url: 'https://github.com/promasoud'
  },
  
  // Professional Development
  {
    type: 'professional',
    title: 'Technical Leadership Training',
    organization: 'Coursera',
    date: '2022',
    description: 'Completed specialized training on technical leadership and team management.',
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
        return () => <Mic className="w-5 h-5" />;
      case 'community':
        return () => <Users className="w-5 h-5" />;
      case 'professional':
        return () => <BookOpen className="w-5 h-5" />;
      default:
        return () => <Calendar className="w-5 h-5" />;
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
                          <div className="h-5 w-5 text-primary">
                            <IconComponent />
                          </div>
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
