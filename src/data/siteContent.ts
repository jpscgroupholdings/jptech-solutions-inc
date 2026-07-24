export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
  extra?: { label: string; values: string[] };
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Build your business on a reliable, secure, and scalable cloud platform.',
    items: [
      'Cloud Migration',
      'Cloud Infrastructure Setup',
      'Multi-Cloud Solutions (Alibaba Cloud, AWS, Google Cloud)',
      'Cloud Backup & Disaster Recovery',
      'Virtual Servers',
      'Database Hosting',
      'Storage Solutions',
      'CDN & Security Services',
      'Cloud Cost Optimization',
      'Managed Cloud Services',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Transform your business processes with software designed specifically for your operations.',
    items: [
      'Enterprise Systems',
      'ERP Solutions',
      'HRIS',
      'CRM Systems',
      'Inventory & Asset Management',
      'Accounting & Finance Systems',
      'Procurement Systems',
      'Booking & Reservation Systems',
      'Workflow Automation',
      'API Integration',
    ],
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description:
      'Deliver exceptional customer experiences through powerful mobile applications. We develop native and cross-platform applications.',
    items: [
      'Android',
      'iOS',
      'Customer Applications',
      'Employee Applications',
      'Delivery Applications',
      'Loyalty & Rewards Apps',
      'E-commerce Apps',
      'Internal Business Apps',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Create modern websites that represent your brand and generate business opportunities.',
    items: [
      'Corporate Websites',
      'E-Commerce Websites',
      'Online Ordering Platforms',
      'Customer Portals',
      'Booking Systems',
      'Membership Portals',
      'Landing Pages',
      'CMS Websites',
    ],
  },
  {
    id: 'business-platforms',
    title: 'Business Platforms',
    description:
      'Digitize your operations using intelligent business platforms.',
    items: [
      'HR Platforms',
      'Sales Platforms',
      'Customer Service Platforms',
      'Procurement Platforms',
      'Operations Management',
      'Logistics Platforms',
      'Learning Management Systems (LMS)',
      'Vendor Portals',
      'Employee Self-Service Portals',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Business Automation',
    description:
      'Leverage Artificial Intelligence to improve productivity and customer experience.',
    items: [
      'AI Chatbots',
      'Customer Support Automation',
      'Workflow Automation',
      'Document Processing',
      'AI Knowledge Base',
      'OCR Solutions',
      'Predictive Analytics',
      'Business Intelligence Dashboards',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Infrastructure',
    description:
      'Protect your business with enterprise-grade security solutions.',
    items: [
      'Firewall Solutions',
      'Endpoint Security',
      'Email Security',
      'Identity & Access Management',
      'Vulnerability Assessment',
      'Security Monitoring',
      'Network Security',
      'Disaster Recovery Planning',
    ],
  },
  {
    id: 'managed-it',
    title: 'Managed IT Services',
    description:
      'Focus on growing your business while we manage your technology.',
    items: [
      'IT Outsourcing',
      'Remote IT Support',
      'Help Desk Services',
      'Infrastructure Monitoring',
      'Server Administration',
      'Network Management',
      'Software Maintenance',
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
    title: 'Business-Focused Technology',
    description:
      'We develop solutions that solve real business challenges—not just software.',
  },
  {
    title: 'End-to-End Services',
    description:
      'From consultation and planning to development, deployment, and ongoing support.',
  },
  {
    title: 'Scalable Solutions',
    description:
      'Technology designed to grow with your business.',
  },
  {
    title: 'Enterprise Security',
    description:
      'Built with industry best practices for security, reliability, and compliance.',
  },
  {
    title: 'Dedicated Support',
    description:
      'Our experienced team provides responsive technical support and continuous system improvements.',
  },
];

export const INDUSTRIES: string[] = [
  'Financial Technology (FinTech)',
  'Retail & E-Commerce',
  'Food & Beverage',
  'Hospitality',
  'Healthcare',
  'Logistics & Supply Chain',
  'Manufacturing',
  'Education',
  'Professional Services',
  'Government',
  'BPO & Contact Centers',
  'Real Estate',
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Consultation & Discovery',
    description:
      'We learn about your business goals, challenges, and requirements.',
  },
  {
    step: '02',
    title: 'Solution Planning',
    description:
      'We design a tailored technology roadmap aligned with your objectives.',
  },
  {
    step: '03',
    title: 'UI/UX Design',
    description:
      'We create intuitive, user-centered designs that enhance the experience.',
  },
  {
    step: '04',
    title: 'System Development',
    description:
      'We build your solution using proven engineering practices and modern technologies.',
  },
  {
    step: '05',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures reliability, performance, and security.',
  },
  {
    step: '06',
    title: 'Deployment',
    description:
      'Smooth, low-risk production rollout with minimal disruption to your operations.',
  },
  {
    step: '07',
    title: 'User Training',
    description:
      'Comprehensive training to ensure your team can use the solution effectively.',
  },
  {
    step: '08',
    title: 'Ongoing Support & Maintenance',
    description:
      'Continuous monitoring, support, and improvements to keep your system at its best.',
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

export const CRM_API_URL =
  'https://famous.ai/api/crm/6a38af8d8af6d3bdeee26bae/subscribe';

export const COMPANY = {
  name: 'JP Technology Solutions Inc.',
  shortName: 'JP Technology Solutions',
  abbreviation: 'JP Technology',
  tagline:
    'Empowering businesses through innovative technology solutions that drive sustainable growth.',
};

export const CONTACT = {
  email: 'info@jptechsolutions.com',
  phone: '+63 912 3456 789',
  address: 'Century Spire, Makati City, Philippines',
};

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Email', href: `mailto:${CONTACT.email}` },
];

export interface LegalSection {
  heading: string;
  body: string;
}

export const PRIVACY_POLICY: LegalSection[] = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly, such as your name, email address, phone number, and company name when you fill out our contact form or book a consultation. We may also collect usage data such as your IP address, browser type, and pages visited through standard analytics tools.',
  },
  {
    heading: 'How We Use Your Information',
    body: 'We use your information to respond to inquiries, schedule consultations, provide our services, send relevant updates about your projects, and improve our website and offerings. We do not sell your personal data to third parties.',
  },
  {
    heading: 'Data Storage & Security',
    body: 'Your data is stored securely using industry-standard practices. We use encrypted connections and reputable third-party service providers to manage and protect your information. We retain your data only as long as necessary to fulfill the purposes outlined in this policy.',
  },
  {
    heading: 'Third-Party Services',
    body: 'We may use third-party services (such as CRM platforms, analytics providers, and cloud hosting) to support our operations. These providers are contractually obligated to protect your data and use it only for the services they perform on our behalf.',
  },
  {
    heading: 'Cookies',
    body: 'Our website may use cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.',
  },
  {
    heading: 'Your Rights',
    body: 'You have the right to access, update, or delete your personal information at any time. To make a request, contact us at the email address listed below. We will respond within a reasonable timeframe.',
  },
  {
    heading: 'Contact',
    body: `For privacy-related questions or requests, reach us at ${CONTACT.email}.`,
  },
];

export const TERMS_OF_SERVICE: LegalSection[] = [
  {
    heading: 'Acceptance of Terms',
    body: `By accessing and using the ${COMPANY.shortName} website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.`,
  },
  {
    heading: 'Services',
    body: `${COMPANY.shortName} provides technology consulting, software development, cloud solutions, and related IT services. All engagements are subject to separate agreements or statements of work that define scope, deliverables, and pricing.`,
  },
  {
    heading: 'Intellectual Property',
    body: 'All content on this website—including text, graphics, logos, and images—is the property of JP Technology Solutions Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our written permission.',
  },
  {
    heading: 'Client Obligations',
    body: 'Clients are responsible for providing accurate and timely information necessary for project delivery. Delays caused by incomplete or inaccurate information may affect project timelines and costs.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, JP Technology Solutions Inc. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the fees paid for the specific service in question.',
  },
  {
    heading: 'Confidentiality',
    body: 'We treat all client information and project details as confidential. Both parties agree not to disclose proprietary information shared during the course of an engagement without prior written consent.',
  },
  {
    heading: 'Changes to Terms',
    body: 'We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the revised terms.',
  },
  {
    heading: 'Governing Law',
    body: 'These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of Makati City.',
  },
  {
    heading: 'Contact',
    body: `For questions regarding these terms, contact us at ${CONTACT.email}.`,
  },
];
