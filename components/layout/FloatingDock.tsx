// components/layout/FloatingDock.tsx
'use client';

import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'; 
import { Home, Folder, Briefcase, Mail, Github, Linkedin, X } from 'lucide-react'; 
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function FloatingDock() {
  const t = useTranslations('Navbar');
  const t_tooltips = useTranslations('Tooltips');
  const [isDockOpen, setIsDockOpen] = useState(true); 

  const dockNavLinks = [
    { id: 'about', icon: Home, labelKey: 'about' },
    { id: 'experience', icon: Briefcase, labelKey: 'experience' },
    { id: 'projects', icon: Folder, labelKey: 'projects' },
    { id: 'contact', icon: Mail, labelKey: 'contact' },
  ];

  if (!isDockOpen) return null; 

  const tooltipClasses = `
    absolute bottom-full left-1/2 -translate-x-1/2 
    mb-3 px-3 py-1 
    text-sm text-white dark:text-zinc-200 
    bg-zinc-800 dark:bg-zinc-700 
    rounded-md shadow-lg
    opacity-0 group-hover:opacity-100 
    invisible group-hover:visible 
    transition-all duration-300 
    pointer-events-none
    whitespace-nowrap
  `;

  const buttonClasses = `
    p-2 rounded-lg flex items-center justify-center
    text-zinc-600 dark:text-zinc-400 
    hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 
    transition-all duration-200 hover:scale-110 cursor-pointer
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5, ease: 'easeOut' }}
      
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
                 hidden md:flex items-center gap-2 p-2 
                 rounded-xl 
                 bg-white/80 dark:bg-zinc-900/80 
                 backdrop-blur-md shadow-lg 
                 border border-zinc-200 dark:border-zinc-800"
    >
     {dockNavLinks.map((link) => (
        <div key={link.id} className="relative group">
          <ScrollLink
            to={link.id}
            spy={true} 
            smooth={true}
            offset={-80} 
            duration={500} 
            className={`${buttonClasses} hover:text-sky-600 dark:hover:text-sky-400`}
          >
            <link.icon size={18} />
          </ScrollLink>
          <span className={tooltipClasses}>
            {t(link.labelKey)}
          </span>
        </div>
      ))}

      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" />

     <div className="relative group"> 
        <Link 
          href="https://github.com/bennynobre"
          target="_blank"
          aria-label="GitHub"
          className={`${buttonClasses} hover:text-black dark:hover:text-white`} 
        >
          <Github size={18} />
        </Link>
        <span className={tooltipClasses}>
          {t_tooltips('github')}
        </span>
      </div>
      <div className="relative group">
        <Link 
          href="https://linkedin.com/in/benny-nobre"
          target="_blank"
          aria-label="LinkedIn"
          className={`${buttonClasses} hover:text-sky-600 dark:hover:text-sky-400`}
        >
          <Linkedin size={18} />
        </Link>
        <span className={tooltipClasses}> 
          {t_tooltips('linkedin')}
        </span>
      </div>

      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" />

      <div className="relative group">
        <ThemeSwitcher />
        <span className={tooltipClasses}>
          {t_tooltips('theme')}
        </span>
      </div>
      <div className="relative group">
          <LanguageSwitcher />
        <span className={tooltipClasses}>
          {t_tooltips('language')}
        </span>
      </div>
    </motion.div>
  );
}