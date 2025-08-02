import { Card, CardContent } from '@/components/ui/card';

const aboutText =
  'Innovative engineer with 9+ years experience in AI, DevOps, and cloud, leading projects from idea to production across global teams. Proven ability in designing, developing, and deploying high-availability, scalable, and secure infrastructures for SaaS applications, AI platforms, and high-traffic systems.';

const coreAreas = ['AI/LLM Integration', 'DevOps & Automation', 'Cloud Architecture (AWS & Azure)', 'Infrastructure Security', 'Technical Leadership'];

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3">
          <p className="text-lg text-muted-foreground mb-6">{aboutText}</p>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {coreAreas.map((area) => (
                <span key={area} className="bg-primary/10 text-primary font-medium py-1 px-3 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <Card className="bg-card/50">
            <CardContent className="p-6">
              <p className="text-center text-lg font-semibold">
                <span className="text-primary">9+</span> Years Experience ·{' '}
                <span className="text-primary">4+</span> Countries ·{' '}
                <span className="text-primary">3+</span> Industries
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
        </div>
      </div>
    </section>
  );
}
