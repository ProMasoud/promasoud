'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Target, Users, Globe, Award, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const aboutText = `Innovative AI Solutions Engineer and DevOps Specialist with 9+ years of experience in designing, developing, and deploying high-availability, scalable, and secure infrastructures for SaaS applications, AI platforms, and high-traffic systems. Proven track record of leading cross-functional teams across multiple countries (UK, Netherlands, Germany, Iran) to deliver complex technical solutions from concept to production.

Specialized in cloud architecture (AWS, Azure), containerization, infrastructure automation, and AI/ML integration. Passionate about implementing DevSecOps practices and optimizing infrastructure for cost efficiency while maintaining robust security postures. Demonstrated ability to reduce infrastructure costs by up to 70% while improving system reliability and performance.`;

const coreAreas = [
  { name: 'AI/LLM Integration & ML Ops', icon: Sparkles },
  { name: 'DevOps & Infrastructure Automation', icon: Target },
  { name: 'Cloud Architecture (AWS & Azure)', icon: Globe },
  { name: 'Infrastructure Security & DevSecOps', icon: Award },
  { name: 'Technical Leadership & Team Management', icon: Users },
  { name: 'CI/CD Pipeline Optimization', icon: TrendingUp },
  { name: 'Containerization & Kubernetes', icon: Target },
  { name: 'High-Availability System Design', icon: Globe }
];

const achievements = [
  { number: '10,000+', label: 'LEO360.AI Users Globally', icon: Users },
  { number: '70%', label: 'Infrastructure Cost Reduction', icon: TrendingUp },
  { number: '99.99%', label: 'System Uptime Achieved', icon: Award },
  { number: '$100M+', label: 'Daily Transactions Secured', icon: Globe },
  { number: '4+', label: 'Countries Worked In', icon: Globe },
  { number: '20+', label: 'Enterprise Projects Delivered', icon: Target }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* About Text */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-blue-600 rounded-full" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed pl-8">
                  {aboutText}
                </p>
              </div>

              {/* Core Expertise */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Core Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coreAreas.map((area, index) => (
                    <div
                      key={area.name}
                      className={`flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${isVisible ? 'animate-in slide-in-from-left' : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <area.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{area.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Stats */}
              <Card className="bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex flex-wrap justify-center gap-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">9+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">4+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">3+</div>
                      <div className="text-sm text-muted-foreground">Industries</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">12+</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                    <div className="w-px bg-border" />
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">2</div>
                      <div className="text-sm text-muted-foreground">Patents</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Key Achievements
              </h3>
              
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={achievement.label}
                    className={`group hover:shadow-lg transition-all duration-300 hover:border-primary/50 transform hover:-translate-y-1 ${isVisible ? 'animate-in slide-in-from-right' : ''}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <achievement.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {achievement.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.label}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-2">Ready to Collaborate?</h4>
                  <p className="text-primary-foreground/90 mb-4">
                    Let's build something amazing together
                  </p>
                  <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    Available for Projects
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
