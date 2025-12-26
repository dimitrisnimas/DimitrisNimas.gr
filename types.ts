import type React from 'react';

export interface NavLink {
  nameKey: string;
  href: string;
}

export interface Project {
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  category: 'app' | 'eshop-website' | 'support' | 'plugin' | 'website' | 'eshop' | 'social';
}

export interface Service {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export interface ResumeItem {
  companyKey: string;
  roleKey: string;
  period: string;
  descriptionKey: string;
}