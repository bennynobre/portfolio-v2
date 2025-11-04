// components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslations } from 'next-intl';
import { Home, Folder, Briefcase, Mail, Github, Linkedin, X, Menu } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import Link from 'next/link';

function DesktopDock() {
  const t_nav = useTranslations('Navbar');
  const t_tooltips = useTranslations('Tooltips');
  const [isDockOpen, setIsDockOpen] = useState(true);

  const dockNavLinks = [
    { id: 'about', icon: Home, labelKey: 'about' },
    { id: 'experience', icon: Briefcase, labelKey: 'experience' },
    { id: 'projects', icon: Folder, labelKey: 'projects' },
    { id: 'contact', icon: Mail, labelKey: 'contact' },
  ];

  if (!isDockOpen) return null;

  const tooltipClasses = "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-sm text-white dark:text-zinc-200 bg-zinc-800 dark:bg-zinc-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 pointer-events-none whitespace-nowrap";
  const buttonClasses = "p-2 rounded-lg flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 transition-all duration-200 hover:scale-110 cursor-pointer";

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
          <ScrollLink to={link.id} spy smooth offset={-100} duration={500} className={`${buttonClasses} hover:text-sky-600 dark:hover:text-sky-400`}>
            <link.icon size={18} />
          </ScrollLink>
          <span className={tooltipClasses}>{t_nav(link.labelKey)}</span>
        </div>
      ))}
      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" />
      <div className="relative group">
        <Link href="https://github.com/bennynobre" target="_blank" aria-label="GitHub" className={`${buttonClasses} hover:text-black dark:hover:text-white`}>
          <Github size={18} />
        </Link>
        <span className={tooltipClasses}>{t_tooltips('github')}</span>
      </div>
      <div className="relative group">
        <Link href="https://linkedin.com/in/benny-nobre" target="_blank" aria-label="LinkedIn" className={`${buttonClasses} hover:text-sky-600 dark:hover:text-sky-400`}>
          <Linkedin size={18} />
        </Link>
        <span className={tooltipClasses}>{t_tooltips('linkedin')}</span>
      </div>
      <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" />
      <div className="relative group"><ThemeSwitcher /><span className={tooltipClasses}>{t_tooltips('theme')}</span></div>
      <div className="relative group"><LanguageSwitcher /><span className={tooltipClasses}>{t_tooltips('language')}</span></div>
    </motion.div>
  );
}

function MobileNav() {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', labelKey: 'about' },
    { id: 'experience', labelKey: 'experience' },
    { id: 'projects', labelKey: 'projects' },
    { id: 'contact', labelKey: 'contact' },
  ];

  return (
    <div className="md:hidden fixed top-4 left-0 w-full z-50 px-4 pointer-events-none">
      <div className="w-full h-16 rounded-xl 
                      bg-white/80 dark:bg-zinc-900/80 
                      backdrop-blur-md shadow-lg 
                      border border-zinc-200 dark:border-zinc-800
                      flex items-center justify-between px-4
                      pointer-events-auto"
      >
        <ScrollLink 
          to="about" 
          spy smooth offset={-100} duration={500} 
          className="font-bold text-lg cursor-pointer"
          onClick={() => setIsMenuOpen(false)} 
        >
          Benny Nobre
        </ScrollLink>
        
        <button 
          className="p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div 
        className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          flex-col gap-4 p-4 mt-2
          w-full 
          bg-white/95 dark:bg-zinc-950/95 
          backdrop-blur-md border border-zinc-200 dark:border-zinc-800
          rounded-xl shadow-lg
          pointer-events-auto
        `}
      >
        {navLinks.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.id}
            spy smooth offset={-100} duration={500} 
            className="cursor-pointer font-medium text-lg text-zinc-700 dark:text-zinc-300 text-center"
            onClick={() => setIsMenuOpen(false)} 
          >
            {t(link.labelKey)}
          </ScrollLink>
        ))}
        <div className="flex justify-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  return (
    <>
      <MobileNav />
      <DesktopDock />
    </>
  );
}