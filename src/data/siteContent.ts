export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  extra?: { label: string; values: string[] };
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored applications engineered to fit your exact business processes, from web and mobile to enterprise-grade systems.',
    items: [
      'Web Application Development',
      'Mobile Application Development',
      'Enterprise Systems',
      'Customer Portals',
      'E-Commerce Platforms',
      'API Development & Integration',
      'Database Design & Management',
    ],
  },
  {
    id: 'business-systems',
    title: 'Business Systems & Platforms',
    description:
      'Operational platforms that centralize and automate the core systems that keep your organization running.',
    items: [
      'Human Resource Information Systems (HRIS)',
      'Payroll & Attendance Systems',
      'Inventory Management Systems',
      'Asset Management Platforms',
      'Customer Relationship Management (CRM)',
      'Ordering & Delivery Platforms',
      'Operations Management Systems',
      'Custom Business Dashboards',
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Secure, scalable cloud infrastructure with managed services that reduce cost and improve reliability.',
    items: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Managed Cloud Services',
      'Data Backup & Disaster Recovery',
      'Cloud Security Solutions',
      'Virtual Servers & Hosting',
      'SaaS Deployment & Management',
    ],
    extra: {
      label: 'Benefits',
      values: [
        'Reduced IT Costs',
        'Improved Reliability',
        'Enhanced Security',
        'Business Continuity',
        'Scalable Infrastructure',
      ],
    },
  },
  {
    id: 'ai-solutions',
    title: 'Artificial Intelligence Solutions',
    description:
      'Practical AI that automates workflows, accelerates decisions, and elevates the customer experience.',
    items: [
      'AI Chatbots & Virtual Assistants',
      'Business Process Automation',
      'AI-Powered Customer Support',
      'Document Processing & OCR',
      'Predictive Analytics',
      'Intelligent Reporting',
      'Knowledge Management Systems',
      'AI Integration for Existing Applications',
    ],
    extra: {
      label: 'Business Impact',
      values: [
        'Increased Efficiency',
        'Faster Decision-Making',
        'Improved Customer Experience',
        'Reduced Operational Costs',
        'Enhanced Productivity',
      ],
    },
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Managed Services',
    description:
      'End-to-end IT management that keeps your systems secure, monitored, and continuously operational.',
    items: [
      'Network Setup & Management',
      'Server Administration',
      'IT Support & Helpdesk',
      'Cybersecurity Solutions',
      'System Monitoring',
      'Hardware & Software Procurement',
      'Preventive Maintenance',
    ],
  },
];

export interface FeatureItem {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    title: 'Industry-Focused Expertise',
    description:
      'Deep domain knowledge across multiple sectors lets us build solutions aligned with your operational realities.',
  },
  {
    title: 'End-to-End Technology Partner',
    description:
      'From strategy and design to deployment and ongoing support, we manage the full technology lifecycle.',
  },
  {
    title: 'Scalable Solutions',
    description:
      'Architectures engineered to grow with your business, handling increasing demand without disruption.',
  },
  {
    title: 'Security & Reliability',
    description:
      'Enterprise-grade security practices and resilient infrastructure protect your data and ensure uptime.',
  },
  {
    title: 'Innovation-Driven Approach',
    description:
      'We apply emerging technologies pragmatically to deliver measurable, lasting business value.',
  },
];

export const INDUSTRIES: string[] = [
  'Retail & E-Commerce',
  'Food & Beverage',
  'Hospitality',
  'Manufacturing',
  'Distribution & Logistics',
  'Human Resources',
  'Professional Services',
  'Healthcare',
  'Education',
  'Corporate Enterprises',
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description:
      'We analyze your goals, challenges, and requirements to define a clear technology roadmap.',
  },
  {
    step: '02',
    title: 'Solution Design',
    description:
      'Our architects design scalable, secure solutions tailored to your operational needs.',
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description:
      'We build with proven engineering practices, transparent milestones, and rigorous quality.',
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description:
      'Comprehensive testing ensures reliability before a smooth, low-risk production rollout.',
  },
  {
    step: '05',
    title: 'Support & Optimization',
    description:
      'Ongoing monitoring, support, and refinement keep your solution performing at its best.',
  },
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_IMAGE =
  'https://d64gsuwffb70l.cloudfront.net/6a38af8d8af6d3bdeee26bae_1782099920539_5af199d9.jpg';

export const BOOKING_URL =
  'https://famous.ai/api/crm/6a38af8d8af6d3bdeee26bae/calendar/public?calendarId=185b8b31-64a7-40e1-8c55-3c3b94ccdfe6&view=booking';
