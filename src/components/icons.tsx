import React from 'react';
import {
  Code2,
  LayoutDashboard,
  Cloud,
  BrainCircuit,
  Server,
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Factory,
  Truck,
  Users,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Building2,
  Target,
  Layers,
  ShieldCheck,
  Lightbulb,
  Handshake,
  LucideIcon,
} from 'lucide-react';

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  'custom-software': Code2,
  'business-systems': LayoutDashboard,
  'cloud-solutions': Cloud,
  'ai-solutions': BrainCircuit,
  'it-infrastructure': Server,
};

export const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  'Retail & E-Commerce': ShoppingBag,
  'Food & Beverage': UtensilsCrossed,
  Hospitality: Hotel,
  Manufacturing: Factory,
  'Distribution & Logistics': Truck,
  'Human Resources': Users,
  'Professional Services': Briefcase,
  Healthcare: HeartPulse,
  Education: GraduationCap,
  'Corporate Enterprises': Building2,
};

export const FEATURE_ICONS: LucideIcon[] = [
  Target,
  Handshake,
  Layers,
  ShieldCheck,
  Lightbulb,
];
