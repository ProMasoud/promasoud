'use client';
import TechIcon from './tech-icons';
import { useEffect, useState } from 'react';

const skillCategories = [
  {
    name: 'Programming',
    icon: () => <TechIcon name="typescript" className="w-5 h-5" />,
    skills: [
      { name: 'Python', icon: () => <TechIcon name="python" className="w-5 h-5" />, description: 'Expert in Python for AI/ML, web backends, data analysis, and automation scripts.' },
      { name: 'TypeScript', icon: () => <TechIcon name="typescript" className="w-5 h-5" />, description: 'Proficient in TypeScript for building high-performance, concurrent systems and microservices.' },
      { name: 'Bash', icon: () => <TechIcon name="bash" className="w-5 h-5" />, description: 'Advanced shell scripting for automation, system administration, and DevOps workflows.' },
      { name: 'JavaScript', icon: () => <TechIcon name="javascript" className="w-5 h-5" />, description: 'Frontend and backend development with Node.js, React, and Next.js.' },
      { name: 'PHP', icon: () => <TechIcon name="php" className="w-5 h-5" />, description: 'Experience with legacy and modern PHP applications and frameworks.' },
      { name: 'SQL', icon: () => <TechIcon name="mysql" className="w-5 h-5" />, description: 'Advanced database querying, optimization, and schema design.' },
    ],
  },
  {
    name: 'Cloud Platforms',
    icon: () => <TechIcon name="aws" className="w-5 h-5" />,
    skills: [
      { name: 'AWS', icon: () => <TechIcon name="aws" className="w-5 h-5" />, description: 'Amazon Web Services: EC2, S3, RDS, EKS, Lambda, CloudFormation, Route53, CloudFront, IAM, VPC, and more.' },
      { name: 'Azure', icon: () => <TechIcon name="azure" className="w-5 h-5" />, description: 'Microsoft Azure: AKS, App Service, Functions, Storage, SQL, DevOps, Active Directory, and more.' },
      { name: 'GCP', icon: () => <TechIcon name="gcloud" className="w-5 h-5" />, description: 'Google Cloud Platform: GKE, Compute Engine, Cloud Storage, BigQuery, and more.' },
      { name: 'Digital Ocean', icon: () => <TechIcon name="digitalocean" className="w-5 h-5" />, description: 'Experience with Digital Ocean droplets, Kubernetes, and managed databases.' },
      { name: 'OVH', icon: () => <TechIcon name="ovh" className="w-5 h-5" />, description: 'OVH cloud infrastructure management and optimization.' },
      { name: 'Hetzner', icon: () => <TechIcon name="hetzner" className="w-5 h-5" />, description: 'Hetzner cloud infrastructure management and optimization.' },
    ],
  },
  {
    name: 'DevOps & Infrastructure',
    icon: () => <TechIcon name="docker" className="w-5 h-5" />,
    skills: [
      { name: 'Docker', icon: () => <TechIcon name="docker" className="w-5 h-5" />, description: 'Containerization, multi-stage builds, Docker Compose, and registry management.' },
      { name: 'Kubernetes', icon: () => <TechIcon name="kubernetes" className="w-5 h-5" />, description: 'K8s cluster management, deployments, services, ingress, Helm charts, and operators.' },
      { name: 'Terraform', icon: () => <TechIcon name="terraform" className="w-5 h-5" />, description: 'Infrastructure as Code for AWS, Azure, and GCP with modules and state management.' },
      { name: 'Ansible', icon: () => <TechIcon name="ansible" className="w-5 h-5" />, description: 'Configuration management and automated provisioning with playbooks and roles.' },
      { name: 'CI/CD', icon: () => <TechIcon name="github-actions" className="w-5 h-5" />, description: 'GitHub Actions, GitLab CI, Jenkins, and Azure DevOps pipelines.' },
      { name: 'Linux', icon: () => <TechIcon name="linux" className="w-5 h-5" />, description: 'System administration, performance tuning, and security hardening.' },
      { name: 'Minio', icon: () => <TechIcon name="minio" className="w-5 h-5" />, description: 'Object storage system for storing unstructured data.' },
    ],
  },
  {
    name: 'AI/ML',
    icon: () => <TechIcon name="openai" className="w-5 h-5" />,
    skills: [
      { name: 'LLM Integration', icon: () => <TechIcon name="openai" className="w-5 h-5" />, description: 'Integrating and fine-tuning Large Language Models (OpenAI, Anthropic, Llama, etc).' },
      { name: 'ML Ops', icon: () => <TechIcon name="mlflow" className="w-5 h-5" />, description: 'End-to-end ML pipelines, model deployment, and monitoring.' },
      { name: 'GPU Management', icon: () => <TechIcon name="nvidia" className="w-5 h-5" />, description: 'Managing GPU resources for AI/ML workloads on cloud and on-premise.' },
      { name: 'Vector DBs', icon: () => <TechIcon name="pinecone" className="w-5 h-5" />, description: 'Working with vector databases for AI applications (Pinecone, Weaviate, etc).' },
      { name: 'RAG Systems', icon: () => <TechIcon name="langchain" className="w-5 h-5" />, description: 'Building Retrieval Augmented Generation systems for enterprise applications.' },
    ],
  },
  {
    name: 'Databases',
    icon: () => <TechIcon name="mysql" className="w-5 h-5" />,
    skills: [
      { name: 'MySQL', icon: () => <TechIcon name="mysql" className="w-5 h-5" />, description: 'Relational database design, optimization, and high-availability setups.' },
      { name: 'PostgreSQL', icon: () => <TechIcon name="postgresql" className="w-5 h-5" />, description: 'Advanced relational database management and performance tuning.' },
      { name: 'MongoDB', icon: () => <TechIcon name="mongodb" className="w-5 h-5" />, description: 'NoSQL database for flexible data schemas and distributed systems.' },
      { name: 'Redis', icon: () => <TechIcon name="redis" className="w-5 h-5" />, description: 'In-memory data store for caching, messaging, and real-time applications.' },
      { name: 'Elasticsearch', icon: () => <TechIcon name="elasticsearch" className="w-5 h-5" />, description: 'Full-text search and analytics engine for log management.' },
    ],
  },
  {
    name: 'Soft Skills',
    icon: () => <TechIcon name="linkedin" className="w-5 h-5" />,
    skills: [
      { name: 'Rapid Learner', icon: () => <TechIcon name="linkedin" className="w-5 h-5" />, description: 'Quickly master new technologies, frameworks, and domains, especially in fast-changing fields like AI and DevOps.' },
      { name: 'Innovative Problem-Solver', icon: () => <TechIcon name="docker" className="w-5 h-5" />, description: 'Consistently deliver creative solutions to complex technical and operational challenges.' },
      { name: 'Cross-Functional Communication', icon: () => <TechIcon name="jira" className="w-5 h-5" />, description: 'Bridge gaps between technical, product, and business teams; translate requirements into actionable tasks.' },
      { name: 'Team Leadership', icon: () => <TechIcon name="usa" className="w-5 h-5" />, description: 'Inspire and guide diverse, international teams—fostering trust, productivity, and a culture of continuous improvement.' },
      { name: 'Collaboration', icon: () => <TechIcon name="iran" className="w-5 h-5" />, description: 'Thrive in remote, multicultural environments and work seamlessly with stakeholders across all levels.' },
      { name: 'Adaptability', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Comfortable pivoting between roles, projects, and technologies as priorities evolve.' },
      { name: 'Ownership & Accountability', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Take responsibility for outcomes, deliver on commitments, and uphold high quality and reliability standards.' },
      { name: 'Attention to Detail', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Ensure robust security, compliance, and operational excellence, even under tight deadlines.' },
      { name: 'Empathy', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Support and mentor colleagues; foster positive relationships in and out of the workplace.' },
      { name: 'Resilience', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Stay calm, resourceful, and productive in high-pressure or ambiguous situations.' }
    ]
  },
  {
    name: 'Languages',
    icon: () => <TechIcon name="usa" className="w-5 h-5" />,
    skills: [
      { name: 'English', icon: () => <TechIcon name="usa" className="w-5 h-5" />, description: 'Professional working proficiency (C1)' },
      { name: 'Azerbaijani', icon: () => <TechIcon name="azerbaijan" className="w-5 h-5" />, description: 'Native proficiency' },
      { name: 'Persian', icon: () => <TechIcon name="iran" className="w-5 h-5" />, description: 'Native proficiency' },
    ]
  }
];

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-4" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A comprehensive toolkit for building scalable, secure, and innovative solutions
            </p>
          </div>

          {/* Skills Categories - Minimal Chip Layout */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className={`bg-black/20 backdrop-blur-sm rounded-lg p-6 ${isVisible ? 'animate-in fade-in-50' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white rounded-full border border-white/10 hover:from-purple-800/60 hover:to-blue-800/60 transition-all duration-200 cursor-default"
                      title={skill.description}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary - Minimal Chips */}
          {/* <div className="mt-12 pt-6 border-t border-white/10">
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">AWS Certified Solutions Architect</span>
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">AWS Certified Developer</span>
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">Azure DevOps Expert</span>
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">Azure Administrator</span>
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">Kubernetes CKAD</span>
              <span className="text-xs bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-white px-3 py-1.5 rounded-full border border-white/10">+7 More Certifications</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
