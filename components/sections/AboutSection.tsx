// components/sections/AboutSection.tsx
'use client'; 
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('AboutMe');
  const cvUrl = t('CurriculumUrl');

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 
                 bg-white text-zinc-800 
                 dark:bg-zinc-900 dark:text-zinc-300 
                 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-5xl"> 
        <motion.div 
          className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-3">
              {t('hero.name')}
            </h1>
            <p className="text-xl sm:text-2xl text-sky-600 dark:text-sky-400 font-medium">
              {t('hero.title')}
            </p>
          </div>

          <motion.div
            className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden 
                       bg-zinc-200 dark:bg-zinc-700 
                       border-2 border-zinc-300 dark:border-zinc-600"
          >
            <Image
              src="/images/profile.png" 
              alt="Foto de Perfil de Benny Nobre"
              width={160} 
              height={160}
              className="rounded-full object-cover w-full h-full" 
            />
          </motion.div>
        </motion.div>

        <hr className="my-24 border-zinc-200 dark:border-zinc-800" />


        <div className="max-w-3xl mx-auto text-center md:text-left">
          
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('title')}
          </motion.h2>

          <div>
            <motion.div
              className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.rich('description', {
                p: (chunks) => <p>{chunks}</p>,
                b: (chunks) => <strong className="font-semibold">{chunks}</strong>
              })}
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 
                           rounded-lg font-medium border
                           text-white bg-sky-600 hover:bg-sky-700
                           dark:text-white dark:bg-sky-700 dark:hover:bg-sky-800
                           border-sky-600 dark:border-sky-700
                           transition-colors duration-200"
              >
                <Download size={18} />
                {t('downloadButton')}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}