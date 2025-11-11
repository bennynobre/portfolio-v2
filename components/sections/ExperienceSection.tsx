'use client';

import { useTranslations } from 'next-intl';
import { EXPERIENCES } from '@/lib/data';
import { Heading } from '@/components/ui/Heading';
import { TimelineItem } from '@/components/ui/TimeLineItem';

export function ExperienceSection() {
  const t = useTranslations('Experience');

  const workExperiences = EXPERIENCES.filter(exp => exp.id !== 'unifor');
  const educationExperiences = EXPERIENCES.filter(exp => exp.id === 'unifor');

  return (
    <section id="experience" className="py-24 
                 bg-zinc-50 text-zinc-900 
                 dark:bg-zinc-950 dark:text-white
                 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <Heading>{t('title')}</Heading>

        <ol className="relative border-s border-zinc-200 dark:border-zinc-700">
          
          {workExperiences.map((item) => (
            <TimelineItem
              key={item.id}
              role={t(item.roleKey)}
              entity={t(item.entityKey)}
              dateStart={t(item.dateStartKey)}
              dateEnd={t(item.dateEndKey)}
              description={t.rich(item.descriptionKey, {
                p: (chunks) => <p>{chunks}</p>,
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>
              })}
              learnMoreUrl={item.learnMoreUrl}
              isEducation={false}
            />
          ))}

          {educationExperiences.map((item) => (
            <TimelineItem
              key={item.id}
              role={t(item.roleKey)}
              entity={t(item.entityKey)}
              dateStart={t(item.dateStartKey)}
              dateEnd={t(item.dateEndKey)}
              description={t.rich(item.descriptionKey, {
                p: (chunks) => <p>{chunks}</p>,
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>
              })}
              isEducation={true}
            />
          ))}

        </ol>
      </div>
    </section>
  );
}