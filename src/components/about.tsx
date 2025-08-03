'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StackIcon from 'tech-stack-icons';
import { useEffect, useState } from 'react';

const aboutText = `With over 8 years of experience in software engineering and DevOps, I've had the opportunity to work across multiple industries, including cryptocurrency, education, and healthcare. This diverse background has given me a deep understanding of business logic and the ability to deliver high-quality solutions that drive success. Throughout my career, I've thrived in both leadership and collaborative roles, having worked with over five international teams. This experience has equipped me with the skills to navigate and resolve the unique challenges that come with global collaboration. I'm passionate about leveraging technology to solve business problems creatively. Whether it's exploring new frameworks or diving into different technologies, I view innovation as a daily hobby, not just a job. If you're looking for a reliable, creative, and experienced software engineer who understands the bigger picture, I'd love to connect!`;

const coreAreas = [
  { name: 'AI/LLM Integration & ML Ops', icon: 'sparkles' },
  { name: 'DevOps & Infrastructure Automation', icon: 'target' },
  { name: 'Cloud Architecture (AWS & Azure)', icon: 'globe' },
  { name: 'Infrastructure Security & DevSecOps', icon: 'award' },
  { name: 'Technical Leadership & Team Management', icon: 'users' },
  { name: 'CI/CD Pipeline Optimization', icon: 'trending-up' },
  { name: 'Containerization & Kubernetes', icon: 'target' },
  { name: 'High-Availability System Design', icon: 'globe' }
];

const achievements = [
  { number: '10,000+', label: 'LEO360.AI Users Globally', icon: 'users' },
  { number: '70%', label: 'Infrastructure Cost Reduction', icon: 'trending-up' },
  { number: '99.99%', label: 'System Uptime Achieved', icon: 'award' },
  { number: '$100M+', label: 'Daily Transactions Secured', icon: 'globe' },
  { number: '4+', label: 'Countries Worked In', icon: 'globe' },
  { number: '20+', label: 'Enterprise Projects Delivered', icon: 'target' }
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
                  <StackIcon name="sparkles" className="h-6 w-6 text-primary" />
                  Core Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {coreAreas.map((area, index) => (
                    <div
                      key={area.name}
                      className={`flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${isVisible ? 'animate-in slide-in-from-left' : ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-5 w-5 text-primary flex-shrink-0">
                        <StackIcon name={area.icon} className="h-5 w-5" />
                      </div>
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
                <StackIcon name="award" className="h-6 w-6 text-primary" />
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
                          <StackIcon name={achievement.icon} className="h-6 w-6 text-primary" />
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
