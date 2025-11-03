'use client';

import type { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';
import { useTranslations } from 'next-intl'; 

interface CardProps {
  project: IProject; 
}

export function Card({ project }: CardProps) {
  const t = useTranslations();

  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden
                 border
                 bg-white border-zinc-200
                 dark:bg-zinc-800 dark:border-zinc-700
                 transition-colors duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image
        src={project.imageUrl}
        alt={`Imagem de capa do projeto ${t(project.titleKey)}`}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">{t(project.titleKey)}</h3>
        
        <p className="text-zinc-700 dark:text-zinc-400 text-sm mb-4">{t(project.descriptionKey)}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full
                         bg-sky-100 text-sky-800
                         dark:bg-sky-900 dark:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <Link
            href={project.githubUrl}
            target="_blank"
            className="flex items-center gap-1 
                       text-zinc-700 hover:text-sky-600 
                       dark:text-zinc-300 dark:hover:text-sky-400 
                       transition-colors"
          >
            <Github size={16} /> GitHub
          </Link>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center gap-1 
                         text-zinc-700 hover:text-sky-600 
                         dark:text-zinc-300 dark:hover:text-sky-400 
                         transition-colors"
            >
              <LinkIcon size={16} /> Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}