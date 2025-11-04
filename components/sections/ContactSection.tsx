'use client';

import { useTranslations } from 'next-intl';
import { Heading } from '@/components/ui/Heading';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Check } from 'lucide-react'; 
import { useState } from 'react';
import Link from 'next/link'; 

export function ContactSection() {
  const t = useTranslations('Contact');
  const [copyText, setCopyText] = useState(t('emailCopy'));
  
  const yourEmail = 'bennynobre1@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(yourEmail);
    setCopyText(t('emailCopied'));

    setTimeout(() => {
      setCopyText(t('emailCopy'));
    }, 2000);
  };

  const buttonClasses = `
    flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 
    rounded-lg border font-medium transition-colors duration-200
    bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-100
    dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-700
  `;

  return (
    <section 
      id="contact" 
      className="py-24 
                 bg-zinc-50 text-zinc-900 
                 dark:bg-zinc-950 dark:text-white
                 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-3xl text-center">
        
        <Heading>{t('title')}</Heading>

        <motion.p
          className="text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('description')}
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          
          <Link 
            href="https://linkedin.com/in/benny-nobre/" 
            target="_blank" 
            className={buttonClasses}
          >
            <Linkedin size={18} />
            {t('linkedin')}
          </Link>
          
          <Link 
            href="https://github.com/bennynobre" 
            target="_blank" 
            className={buttonClasses}
          >
            <Github size={18} />
            {t('github')}
          </Link>

          <button 
            onClick={handleCopyEmail}
            className={buttonClasses}
          >
            {copyText === t('emailCopied') ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Mail size={18} />
            )}
            {copyText}
          </button>
        </div>

      </div>
    </section>
  );
}