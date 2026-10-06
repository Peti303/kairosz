export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  businessImpact: string;
  iconName: string;
  badgeText: string;
}

export interface VentureItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  altText: string;
  linkText: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    label: string;
  }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface AuditFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  teamSize: string;
  primaryGoal: string;
  currentBottleneck: string;
  preferredDate?: string;
  preferredTime?: string;
}
