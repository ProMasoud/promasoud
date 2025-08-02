import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const educationData = [
  {
    degree: 'Master of Science, Software Engineering',
    institution: 'University Name',
  },
  {
    degree: 'Bachelor of Science, Computer Science',
    institution: 'University of Tabriz',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{edu.institution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
