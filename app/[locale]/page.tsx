'use client';

import {use} from 'react';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
 
type Props = {
  params: Promise<{locale: string}>;
};

export default function IndexPage({params}: Props) {
  const {locale} = use(params); 
 
 
  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}