import { useTranslations } from 'next-intl'; 
import { PROJECTS } from '@/lib/data';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export function ProjectsSection() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="py-24 
                 bg-white text-zinc-900 
                 dark:bg-zinc-900 dark:text-white
                 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <Heading>{t('title')}</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}