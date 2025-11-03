'use client';
import { useTranslations } from 'next-intl';
import { Heading } from '@/components/ui/Heading';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('AboutMe');

  const cvUrl = t('CurriculumUrl');

  return (
    <section 
      id="about" 
      className="py-24 
                 bg-white text-zinc-800 
                 dark:bg-zinc-900 dark:text-zinc-300 
                 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <Heading>{t('title')}</Heading>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            className="flex-shrink-0 w-40 h-40 rounded-full flex items-center justify-center 
                       bg-zinc-200 text-zinc-800 
                       dark:bg-zinc-700 dark:text-white 
                       text-4xl font-bold border-2 border-zinc-300 dark:border-zinc-600
                       mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            BN
          </motion.div>

          <div className="flex flex-col items-center md:items-start flex-grow">
         <motion.div
              className="text-lg leading-relaxed text-center md:text-left space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* 👇 MUDANÇA 2: Diga ao 't.rich()' para procurar por 'p' e 'b' */}
              {t.rich('description', {
                p: (chunks) => <p>{chunks}</p>,
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>
              })}
            </motion.div>

            <motion.a
              href={cvUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2 px-5 py-3 
                         rounded-lg font-medium border
                         text-white bg-sky-600 hover:bg-sky-700
                         dark:text-white dark:bg-sky-700 dark:hover:bg-sky-800
                         border-sky-600 dark:border-sky-700
                         transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.3 }} 
            >
              <Download size={18} />
              {t('downloadButton')} 
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}