import { Briefcase } from 'lucide-react';
import { Badge } from './ui/badge';

const experienceData = [
  {
    role: 'AI Solutions Engineer',
    company: 'LyonsGlobal',
    period: '2022 – Present',
    description:
      'Led the design and deployment of LEO360.AI, a next-gen AI telehealth platform, to over 10,000 users globally. Integrated LLMs for advanced diagnostics and managed GPU-accelerated workloads on AWS, ensuring HIPAA compliance and 99.99% uptime.',
    tags: ['AI/ML', 'LLM', 'AWS', 'Python', 'DevOps', 'Global Team'],
  },
  {
    role: 'DevOps Technical Lead',
    company: 'G2Tech',
    period: '2019 – 2022',
    description:
      'Directed a team of 5 engineers to build and maintain a multi-cloud SaaS infrastructure. Architected CI/CD pipelines that reduced deployment times by 80%. Reduced infrastructure costs by 70% through optimization and automation.',
    tags: ['Leadership', 'CI/CD', 'Azure', 'Kubernetes', 'Terraform', 'SaaS'],
  },
  {
    role: 'Crypto DevOps Engineer',
    company: 'Bit24',
    period: '2018 – 2019',
    description:
      'Engineered a highly available and secure infrastructure for a cryptocurrency exchange processing over $100M in daily transactions. Implemented robust security protocols and automated monitoring to prevent threats for millions of users.',
    tags: ['Security', 'High-Availability', 'Crypto', 'Docker', 'Ansible'],
  },
  {
    role: 'Fullstack Developer',
    company: 'Arkatech',
    period: '2016 – 2018',
    description:
      'Developed and maintained web applications across the full software development lifecycle (SDLC) using a diverse tech stack including PHP, JavaScript, and MySQL.',
    tags: ['Fullstack', 'PHP', 'JavaScript', 'SDLC', 'MySQL'],
  },
  {
    role: 'Intern',
    company: 'Sazmand',
    period: '2015 – 2016',
    description:
      'Gained foundational experience in software development, contributing to internal tools and learning core programming concepts.',
    tags: ['Internship', 'Web Development'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 mt-1.5 w-5 h-5 bg-primary rounded-full border-4 border-background"></div>
              <div
                className={`w-[calc(50%-1.25rem)] ${
                  index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'
                }`}
              >
                <div
                  className={`absolute ${
                    index % 2 === 0 ? 'right-0' : 'left-0'
                  } w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${
                    index % 2 === 0
                      ? 'border-l-8 border-l-card'
                      : 'border-r-8 border-r-card'
                  } top-6`}
                  style={{
                    transform: `translateY(-50%) ${
                      index % 2 === 0 ? 'translateX(100%)' : 'translateX(-100%)'
                    }`,
                  }}
                ></div>
              </div>
              <div
                className={`w-[calc(50%-2.5rem)] p-6 bg-card rounded-lg shadow-md ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold">{item.role}</h3>
                </div>
                <p className="font-semibold text-muted-foreground">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                <p className="text-sm mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
