'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  const iconLinkClasses = `
    text-zinc-500 hover:text-zinc-900
    dark:text-zinc-400 dark:hover:text-white
    transition-colors duration-200
  `;

  return (
    <footer 
      className="py-8 border-t
                 bg-white border-zinc-200
                 dark:bg-zinc-950 dark:border-zinc-800
                 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t('copyright', { year: currentYear })}
        </p>
        <div className="flex gap-6">
          <Link 
            href="https://github.com/bennynobre"
            target="_blank"
            aria-label="GitHub"
            className={iconLinkClasses}
          >
            <Github size={20} />
          </Link>

          <Link 
            href="https://linkedin.com/in/benny-nobre"
            target="_blank"
            aria-label="LinkedIn"
            className={iconLinkClasses}
          >
            <Linkedin size={20} />
          </Link>
        </div>

      </div>
    </footer>
  );
}