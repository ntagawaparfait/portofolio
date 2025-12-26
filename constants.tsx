
import React from 'react';
import { Project, Testimonial, Skill } from './types';
import { 
  MessageSquare, 
  ShieldCheck, 
  Database, 
  PenTool, 
  Users,
  Award,
  BookOpen,
  Globe
} from 'lucide-react';

/**
 * 👋 INSTRUCTIONS FOR NTAGAWA:
 * 1. Go to https://postimages.org/ or https://imgur.com/
 * 2. Upload your photo and the university logos.
 * 3. Copy the "DIRECT LINK" (it must end in .jpg, .png, or .svg).
 * 4. Paste those links below in the PROFILE_PIC and logo sections.
 */

// REPLACE THIS URL WITH YOUR DIRECT IMAGE LINK
export const PROFILE_PIC = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"; 

export const CERTIFICATIONS = [
  {
    name: "Communication Science",
    institution: "University of Amsterdam",
    // This is the logo from your screenshot
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/University_of_Amsterdam_logo.svg/512px-University_of_Amsterdam_logo.svg.png",
    link: "https://www.uva.nl/en"
  },
  {
    name: "Introduction to Philosophy",
    institution: "University of Edinburgh",
    // This is the crest from your screenshot
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/University_of_Edinburgh_ceremonial_crest.svg/1200px-University_of_Edinburgh_ceremonial_crest.svg.png",
    link: "https://www.ed.ac.uk/"
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CSAT Improvement Strategy',
    category: 'Customer Satisfaction',
    description: 'Developed a personalized response framework for high-tier enterprise clients.',
    impact: 'Increased CSAT from 88% to 98% within a 6-month period.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Knowledge Base Expansion',
    category: 'Process Optimization',
    description: 'Authored over 50 internal troubleshooting guides for new CRM implementations.',
    impact: 'Reduced team onboarding time by 30% and improved first-contact resolution.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Multi-Channel Support Sync',
    category: 'Communication',
    description: 'Unified brand voice across Chat, Email, and Twitter/X support channels.',
    impact: 'Maintained a < 1 minute response time across 5,000+ monthly interactions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Chat & Email Support', level: 95, icon: 'MessageSquare' },
  { name: 'Issue Resolution', level: 90, icon: 'ShieldCheck' },
  { name: 'CRM Systems (Zendesk/Salesforce)', level: 85, icon: 'Database' },
  { name: 'Professional Writing', level: 95, icon: 'PenTool' },
  { name: 'Team Collaboration', level: 88, icon: 'Users' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Support Manager, TechCorp',
    text: "Ntagawa is consistently our highest performer. His ability to stay calm and professional in high-pressure situations is unmatched.",
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '2',
    name: 'David Okafor',
    role: 'Customer Success Lead',
    text: "His written communication skills are exceptional. He doesn't just solve tickets; he builds relationships with our users.",
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];

export const NAVIGATION = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Success Stories', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];
