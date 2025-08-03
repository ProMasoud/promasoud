import StackIcon from 'tech-stack-icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const educationData = [
  {
    degree: "Bachelor's degree in Computer/Information Technology Administration and Management",
    institution: 'University of Tabriz',
    location: 'Tabriz, Iran',
    period: '2015 - 2019',
    description: 'Comprehensive education in computer and information technology administration and management.',
    achievements: [],
    courses: []
  },
  {
    degree: 'Diploma of Education in Mathematics and Physics',
    institution: 'Imam Khomeini High School',
    location: 'Tabriz, Iran',
    period: '2011 - 2015',
    description: 'Focused education in mathematics and physics.',
    achievements: [],
    courses: []
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto grid gap-12">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 self-start md:self-center">
                    {edu.period}
                  </Badge>
                </div>
                <div className="h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
              </CardHeader>
              
              <CardContent className="pt-4 space-y-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <StackIcon name="book" className="w-4 h-4 text-primary" />
                    <span className="font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <StackIcon name="map-pin" className="w-4 h-4 text-primary" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                
                {edu.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <StackIcon name="award" className="w-4 h-4 text-primary" /> Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground pl-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {edu.courses.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <StackIcon name="calendar" className="w-4 h-4 text-primary" /> Key Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <Badge key={i} variant="outline" className="bg-muted/50">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
