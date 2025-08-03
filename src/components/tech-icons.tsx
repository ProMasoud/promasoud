import React from 'react';
import {
  Code, 
  Database, 
  Server, 
  Cloud, 
  Cpu, 
  Globe, 
  Laptop, 
  Terminal, 
  FileCode, 
  Boxes, 
  Workflow, 
  Cog, 
  Bot, 
  BrainCircuit, 
  Sparkles, 
  Users, 
  Award, 
  Languages, 
  Briefcase,
  Star,
  Building2,
  TrendingUp,
  Target,
  Download,
  Menu,
  Zap,
  Shield,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';

// This component maps tech-stack-icons to Lucide React icons
// It provides fallbacks for technology-specific icons that don't exist in Lucide

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  // Programming languages
  'typescript': Code,
  'python': FileCode,
  'golang': Code,
  'bash': Terminal,
  'javascript': Code,
  'php': Code,
  'mysql': Database,
  
  // Cloud platforms
  'aws': Cloud,
  'azure': Cloud,
  'gcloud': Cloud,
  'digitalocean': Cloud,
  'ovh': Cloud,
  
  // DevOps & Infrastructure
  'docker': Boxes,
  'kubernetes': Workflow,
  'terraform': Cog,
  'ansible': Cog,
  'github-actions': Workflow,
  'linux': Terminal,
  
  // AI/ML
  'openai': BrainCircuit,
  'mlflow': Sparkles,
  'nvidia': Cpu,
  'pinecone': Database,
  'langchain': BrainCircuit,
  
  // Databases
  'postgresql': Database,
  'mongodb': Database,
  'redis': Database,
  'elasticsearch': Database,
  'aws-dynamodb': Database,
  
  // Soft Skills & Languages
  'linkedin': Users,
  'jira': Briefcase,
  'usa': Globe,
  'iran': Globe,
  'azerbaijan': Globe,
  'germany': Globe,
  'netherlands': Globe,
  
  // Other common icons
  'hospital': Building2,
  'users': Users,
  'star': Star,
  'globe': Globe,
  'trending-up': TrendingUp,
  'target': Target,
  'download': Download,
  'menu': Menu,
  'map-pin': Target,
  'mail': Mail,
  'phone': Phone,
  'zap': Zap,
  'briefcase': Briefcase,
  'shield': Shield,
  'external-link': ExternalLink,
  'code': Code,
  'sparkles': Sparkles,
  'award': Award
};



export default function TechIcon({ name, className = "" }: TechIconProps) {
  // Get the icon component from the map, or use Code as fallback
  const IconComponent = iconMap[name] || Code;
  
  return <IconComponent className={className} />;
}
