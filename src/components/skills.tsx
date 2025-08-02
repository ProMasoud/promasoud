import { BrainCircuit, Briefcase, Code, Database, GitMerge, Globe, HardDrive, Lightbulb, MessageCircle, Server, Shell, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { AnsibleIcon, AwsIcon, AzureIcon, DockerIcon, GoIcon, JavascriptIcon, KubernetesIcon, MongodbIcon, MySqlIcon, PhpIcon, PostgresqlIcon, PythonIcon, RedisIcon, TerraformIcon } from './icons';

const skillCategories = [
  {
    name: 'Programming',
    icon: Code,
    skills: [
      { name: 'Python', icon: PythonIcon, description: 'Expert in Python for AI/ML, web backends, and scripting.' },
      { name: 'Go', icon: GoIcon, description: 'Proficient in Go for building high-performance, concurrent systems.' },
      { name: 'Bash', icon: Shell, description: 'Advanced shell scripting for automation and system administration.' },
      { name: 'JavaScript', icon: JavascriptIcon, description: 'Frontend and backend development with Node.js.' },
      { name: 'PHP', icon: PhpIcon, description: 'Experience with legacy and modern PHP applications.' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Server,
    skills: [
      { name: 'AWS', icon: AwsIcon, description: 'Amazon Web Services (EC2, S3, RDS, EKS, Lambda).' },
      { name: 'Azure', icon: AzureIcon, description: 'Microsoft Azure cloud platform experience.' },
      { name: 'Docker', icon: DockerIcon, description: 'Containerization and microservices architecture.' },
      { name: 'Kubernetes', icon: KubernetesIcon, description: 'Orchestration of containerized applications at scale.' },
      { name: 'Terraform', icon: TerraformIcon, description: 'Infrastructure as Code for provisioning and management.' },
      { name: 'Ansible', icon: AnsibleIcon, description: 'Configuration management and application deployment.' },
      { name: 'CI/CD', icon: GitMerge, description: 'Building automated pipelines with Jenkins, GitLab CI, GitHub Actions.' },
    ],
  },
  {
    name: 'AI/ML',
    icon: BrainCircuit,
    skills: [
        { name: 'LLM Integration', icon: Globe, description: 'Integrating and fine-tuning Large Language Models.' },
        { name: 'GPU Management', icon: HardDrive, description: 'Managing GPU resources for AI/ML workloads.' },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', icon: MySqlIcon, description: 'Relational database design and optimization.' },
      { name: 'PostgreSQL', icon: PostgresqlIcon, description: 'Advanced relational database management.' },
      { name: 'MongoDB', icon: MongodbIcon, description: 'NoSQL database for flexible data schemas.' },
      { name: 'Redis', icon: RedisIcon, description: 'In-memory data store for caching and real-time applications.' },
    ],
  },
  {
      name: 'Soft Skills',
      icon: Briefcase,
      skills: [
        { name: 'Leadership', icon: Users, description: 'Leading and mentoring technical teams.' },
        { name: 'Communication', icon: MessageCircle, description: 'Clear communication with technical and non-technical stakeholders.' },
        { name: 'Problem-Solving', icon: Lightbulb, description: 'Analytical and creative problem-solving abilities.' },
      ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-card shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipProvider delayDuration={100}>
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <div className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer">
                            <skill.icon className="h-10 w-10 text-muted-foreground" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
