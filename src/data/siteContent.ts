export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "cloud",
    title: "Cloud",
    description:
      "Migrate, scale, and secure your infrastructure on Alibaba Cloud, AWS, or Google Cloud. We handle the plumbing — you focus on the product.",
    items: [
      "Migration & Lift-Shift",
      "Multi-Cloud Architecture",
      "Disaster Recovery",
      "Cost Optimization",
    ],
  },
  {
    id: "platforms",
    title: "Custom Platforms",
    description:
      "ERP, CRM, HRIS, inventory — purpose-built systems that replace the spreadsheets and duct tape holding your operations together.",
    items: [
      "Enterprise Systems",
      "Workflow Automation",
      "API Integration",
      "Procurement & Finance",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Native and cross-platform apps your customers actually want to open. Android, iOS, and everything in between.",
    items: [
      "Android & iOS",
      "Cross-Platform",
      "E-Commerce Apps",
      "Internal Tools",
    ],
  },
  {
    id: "web",
    title: "Web",
    description:
      "Corporate sites, e-commerce, portals, and booking platforms — fast, accessible, and built to convert.",
    items: [
      "Corporate & E-Commerce",
      "Customer Portals",
      "Booking Systems",
      "CMS & Landing Pages",
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    description:
      "Chatbots, document processing, predictive analytics — AI that solves real problems, not demo-day theater.",
    items: [
      "AI Chatbots",
      "Document Processing",
      "Predictive Analytics",
      "BI Dashboards",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity",
    description:
      "Enterprise-grade security without the enterprise-grade headache. Firewalls, IAM, monitoring, and incident response.",
    items: [
      "Endpoint & Network Security",
      "Identity & Access",
      "Vulnerability Assessment",
      "Incident Response",
    ],
  },
];

export interface FeatureItem {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: FeatureItem[] = [
  {
    title: "One partner, not six vendors",
    description:
      "Cloud, software, security, support — one team that understands your entire stack and answers to one SLA.",
  },
  {
    title: "Built for your operations",
    description:
      "We don't sell off-the-shelf. Every system is designed around how your business actually runs.",
  },
  {
    title: "Scales when you do",
    description:
      "Architecture that handles 100 users today and 100,000 tomorrow — without a rewrite.",
  },
  {
    title: "Security by default",
    description:
      "Encryption, access control, monitoring, and compliance baked in from day one — not bolted on after a breach.",
  },
];

export const INDUSTRIES: string[] = [
  "FinTech",
  "Retail & E-Commerce",
  "Food & Beverage",
  "Hospitality",
  "Healthcare",
  "Logistics",
  "Manufacturing",
  "Education",
  "Government",
  "BPO",
  "Real Estate",
  "Professional Services",
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your business — goals, pain points, existing systems, stakeholders.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "A tailored technology roadmap with milestones, budgets, and clear deliverables.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "User-centered interfaces prototyped and tested with your actual team before a line of code is written.",
  },
  {
    step: "04",
    title: "Build",
    description:
      "Modern engineering practices. Clean code. Tested at every layer. Demoed every two weeks.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "Smooth production rollout with zero downtime, a rollback plan, and your team fully trained.",
  },
  {
    step: "06",
    title: "Support",
    description:
      "Continuous monitoring, proactive updates, and a team that picks up the phone at 2am.",
  },
];

export const STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "8", label: "Practice Areas" },
  { value: "24/7", label: "Support Coverage" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They replaced three legacy systems with one platform — on time and under budget. Our ops team went from drowning in spreadsheets to having real-time dashboards.",
    author: "Maria Santos",
    role: "COO",
    company: "Pacific Retail Group",
  },
  {
    quote:
      "We've worked with four IT vendors over the years. JP Technology is the first one that actually understood our compliance requirements before writing a single line of code.",
    author: "James Reyes",
    role: "CTO",
    company: "Meridian Financial",
  },
  {
    quote:
      "Their support team caught a database issue at 3am on a Saturday — before our own team even noticed. That's the kind of partner you can't put a price on.",
    author: "Angela Cruz",
    role: "VP Engineering",
    company: "HealthBridge Solutions",
  },
];

export interface TechCategory {
  category: string;
  tools: string[];
}

export const TECH_STACK: TechCategory[] = [
  {
    category: "Cloud & Infrastructure",
    tools: [
      "Alibaba Cloud",
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    category: "Development",
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Java",
      ".NET",
      "Flutter",
    ],
  },
  {
    category: "Data & AI",
    tools: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TensorFlow",
      "OpenAI",
      "Elasticsearch",
    ],
  },
  {
    category: "Security & DevOps",
    tools: [
      "CrowdStrike",
      "Cloudflare",
      "GitHub Actions",
      "Jenkins",
      "Datadog",
      "Vault",
    ],
  },
];

export interface FeaturedProject {
  title: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: { value: string; label: string }[];
}

export const FEATURED_WORK: FeaturedProject[] = [
  {
    title: "Cloud Migration for a Top-10 Philippine Bank",
    industry: "FinTech",
    challenge:
      "Legacy on-prem infrastructure couldn't handle peak transaction loads during payroll season. Downtime was costing millions.",
    result:
      "Migrated core banking services to a multi-region cloud architecture with auto-scaling and 99.99% uptime SLA.",
    metrics: [
      { value: "99.99%", label: "Uptime" },
      { value: "3x", label: "Throughput" },
      { value: "40%", label: "Cost Reduction" },
    ],
  },
  {
    title: "Custom ERP for National Retail Chain",
    industry: "Retail",
    challenge:
      "120 stores running on disconnected spreadsheets and email. Inventory accuracy was below 60%.",
    result:
      "Built a unified ERP covering inventory, POS integration, procurement, and real-time reporting across all locations.",
    metrics: [
      { value: "120", label: "Stores Connected" },
      { value: "98%", label: "Inventory Accuracy" },
      { value: "6mo", label: "Delivery Time" },
    ],
  },
  {
    title: "AI-Powered Customer Support Platform",
    industry: "BPO",
    challenge:
      "A 2,000-seat BPO was losing contracts to competitors offering AI-augmented support. Manual ticket routing averaged 4-hour response times.",
    result:
      "Deployed an AI chatbot and intelligent routing system that handles 60% of inquiries without human intervention.",
    metrics: [
      { value: "60%", label: "Auto-Resolved" },
      { value: "<30s", label: "Avg Response" },
      { value: "2x", label: "CSAT Score" },
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A corporate website takes 4–6 weeks. A custom platform (ERP, CRM) runs 3–6 months. Enterprise cloud migrations can take 6–12 months. We'll give you a realistic timeline during discovery — and we stick to it.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Always. We offer flexible support plans — from basic monitoring and maintenance to fully managed operations with 24/7 coverage. Most clients stay with us long-term because we treat their systems like our own.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer fixed-price for well-defined projects, time-and-materials for evolving scopes, and retainer models for ongoing partnerships. Every engagement starts with a clear proposal — no surprise invoices.",
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "That's usually the starting point. We specialize in integrating with legacy systems, migrating data, and building bridges between old and new — not just ripping and replacing.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We've delivered projects across fintech, retail, healthcare, logistics, BPO, government, and more. Our strength is engineering — we learn your industry fast and build accordingly.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free 30-minute consultation. We'll discuss your goals, current systems, and challenges. From there, we'll prepare a tailored proposal with scope, timeline, and investment — usually within a week.",
  },
];

export const CERTIFICATIONS: string[] = [
  "ISO 27001 Aligned",
  "AWS Partner",
  "Alibaba Cloud Partner",
  "SOC 2 Compliant",
  "DICT Registered",
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const HERO_IMAGE =
  "https://d64gsuwffb70l.cloudfront.net/6a38af8d8af6d3bdeee26bae_1782099920539_5af199d9.jpg";

export const COMPANY = {
  name: "JP Technology Solutions Inc.",
  shortName: "JP Technology Solutions",
  abbreviation: "JP Technology",
  tagline: "Technology that actually works.",
};

export const CONTACT = {
  email: "info@jptechsolutions.com",
  phone: "+63 912 3456 789",
  address: "Century Spire, Makati City, Philippines",
};

export interface SocialLink {
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Email", href: `mailto:${CONTACT.email}` },
];

export interface LegalSection {
  heading: string;
  body: string;
}

export const PRIVACY_POLICY: LegalSection[] = [
  {
    heading: "Information We Collect",
    body: "We collect information you provide directly, such as your name, email address, phone number, and company name when you fill out our contact form or book a consultation. We may also collect usage data such as your IP address, browser type, and pages visited through standard analytics tools.",
  },
  {
    heading: "How We Use Your Information",
    body: "We use your information to respond to inquiries, schedule consultations, provide our services, send relevant updates about your projects, and improve our website and offerings. We do not sell your personal data to third parties.",
  },
  {
    heading: "Data Storage & Security",
    body: "Your data is stored securely using industry-standard practices. We use encrypted connections and reputable third-party service providers to manage and protect your information. We retain your data only as long as necessary to fulfill the purposes outlined in this policy.",
  },
  {
    heading: "Third-Party Services",
    body: "We may use third-party services (such as CRM platforms, analytics providers, and cloud hosting) to support our operations. These providers are contractually obligated to protect your data and use it only for the services they perform on our behalf.",
  },
  {
    heading: "Cookies",
    body: "Our website may use cookies to enhance your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.",
  },
  {
    heading: "Your Rights",
    body: "You have the right to access, update, or delete your personal information at any time. To make a request, contact us at the email address listed below. We will respond within a reasonable timeframe.",
  },
  {
    heading: "Contact",
    body: `For privacy-related questions or requests, reach us at ${CONTACT.email}.`,
  },
];

export const TERMS_OF_SERVICE: LegalSection[] = [
  {
    heading: "Acceptance of Terms",
    body: `By accessing and using the ${COMPANY.shortName} website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.`,
  },
  {
    heading: "Services",
    body: `${COMPANY.shortName} provides technology consulting, software development, cloud solutions, and related IT services. All engagements are subject to separate agreements or statements of work that define scope, deliverables, and pricing.`,
  },
  {
    heading: "Intellectual Property",
    body: "All content on this website—including text, graphics, logos, and images—is the property of JP Technology Solutions Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or modify any content without our written permission.",
  },
  {
    heading: "Client Obligations",
    body: "Clients are responsible for providing accurate and timely information necessary for project delivery. Delays caused by incomplete or inaccurate information may affect project timelines and costs.",
  },
  {
    heading: "Limitation of Liability",
    body: "To the maximum extent permitted by law, JP Technology Solutions Inc. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability is limited to the fees paid for the specific service in question.",
  },
  {
    heading: "Confidentiality",
    body: "We treat all client information and project details as confidential. Both parties agree not to disclose proprietary information shared during the course of an engagement without prior written consent.",
  },
  {
    heading: "Changes to Terms",
    body: "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the revised terms.",
  },
  {
    heading: "Governing Law",
    body: "These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of Makati City.",
  },
  {
    heading: "Contact",
    body: `For questions regarding these terms, contact us at ${CONTACT.email}.`,
  },
];
