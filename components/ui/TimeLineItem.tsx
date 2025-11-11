'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface TimelineItemProps {
  role: string;
  entity: string;
  dateStart: string;
  dateEnd: string;
  description: React.ReactNode;
  isEducation?: boolean; 
  learnMoreUrl?: string;
}

export function TimelineItem({
  role,
  entity,
  dateStart,
  dateEnd,
  description,
  isEducation = false,
  learnMoreUrl
}: TimelineItemProps) {
  
  const Icon = isEducation ? GraduationCap : Briefcase;
  const t = useTranslations('Experience');

  return (
    <motion.li
      className="relative mb-10 ms-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <span className="absolute flex items-center justify-center w-8 h-8 
                   rounded-full -start-10 
                   ring-8 
                   bg-sky-100 text-sky-700 
                   dark:bg-sky-900 dark:text-sky-300
                   ring-white dark:ring-zinc-950">
        <Icon className="w-4 h-4 text-sky-700 dark:text-sky-300" />
      </span>
      
      <div className="p-4 rounded-lg shadow-sm 
                   border 
                   bg-zinc-50 border-zinc-200 
                   dark:bg-zinc-800 dark:border-zinc-700">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{role}</h3>
        <h4 className="text-md font-normal text-sky-600 dark:text-sky-400 mb-1">{entity}</h4>
        
        <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-500">
          {dateStart} - {dateEnd}
        </time>
        
        <div className="text-base font-normal text-zinc-700 dark:text-zinc-300 space-y-4">
          {description}
        </div>

        {learnMoreUrl && (
          <Link
            href={learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium
                       mt-4
                       text-sky-600 dark:text-sky-400
                       hover:text-sky-800 dark:hover:text-sky-200
                       transition-colors"
          >
            {t('learnMoreButton')}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.li>
  );
}