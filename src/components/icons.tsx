import React from 'react';
import {
  Code2,
  LayoutDashboard,
  Cloud,
  BrainCircuit,
  Server,
  Shield,
  Smartphone,
  Globe,
  Wrench,
  ShoppingBag,
  UtensilsCrossed,
  Hotel,
  Factory,
  Truck,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Landmark,
  Headphones,
  Building,
  Coins,
  Target,
  Layers,
  ShieldCheck,
  Lightbulb,
  Handshake,
  LucideIcon,
} from 'lucide-react';

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  'cloud-solutions': Cloud,
  'custom-software': Code2,
  'mobile-app': Smartphone,
  'web-development': Globe,
  'business-platforms': LayoutDashboard,
  'ai-automation': BrainCircuit,
  'cybersecurity': Shield,
  'managed-it': Wrench,
};

export const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  'Financial Technology (FinTech)': Coins,
  'Retail & E-Commerce': ShoppingBag,
  'Food & Beverage': UtensilsCrossed,
  'Hospitality': Hotel,
  'Healthcare': HeartPulse,
  'Logistics & Supply Chain': Truck,
  'Manufacturing': Factory,
  'Education': GraduationCap,
  'Professional Services': Briefcase,
  'Government': Landmark,
  'BPO & Contact Centers': Headphones,
  'Real Estate': Building,
};

export const FEATURE_ICONS: LucideIcon[] = [
  Target,
  Handshake,
  Layers,
  ShieldCheck,
  Lightbulb,
];
