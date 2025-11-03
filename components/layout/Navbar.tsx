'use client';

import { useState } from 'react'; 
import { Link as ScrollLink } from 'react-scroll'; 
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { Menu, X } from 'lucide-react'; 

export function Navbar() {
  const t = useTranslations('Navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        
        <ScrollLink 
          to="about" 
          spy={true} 
          smooth={true}
          offset={-80} 
          duration={500} 
          className="font-bold text-lg cursor-pointer"
          onClick={() => setIsMenuOpen(false)} 
        >
          Benny Nobre
        </ScrollLink>
        <div className="md:hidden"> 
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
            flex-col gap-4 p-4 
            absolute top-16 left-0 w-full 
            bg-white/95 dark:bg-zinc-950/95 
            backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800
            md:hidden 
          `}
        >
          <ScrollLink 
            to="about" className="cursor-pointer font-medium text-lg text-zinc-700 dark:text-zinc-300 text-center" 
            onClick={() => setIsMenuOpen(false)} offset={-80} smooth={true} duration={500}
          >{t('about')}</ScrollLink>
          <ScrollLink 
            to="experience" className="cursor-pointer font-medium text-lg text-zinc-700 dark:text-zinc-300 text-center" 
            onClick={() => setIsMenuOpen(false)} offset={-80} smooth={true} duration={500}
          >{t('experience')}</ScrollLink>
          <ScrollLink 
            to="projects" className="cursor-pointer font-medium text-lg text-zinc-700 dark:text-zinc-300 text-center" 
            onClick={() => setIsMenuOpen(false)} offset={-80} smooth={true} duration={500}
          >{t('projects')}</ScrollLink>
          <ScrollLink 
            to="contact" className="cursor-pointer font-medium text-lg text-zinc-700 dark:text-zinc-300 text-center" 
            onClick={() => setIsMenuOpen(false)} offset={-80} smooth={true} duration={500}
          >{t('contact')}</ScrollLink>
          
          <div className="flex justify-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}