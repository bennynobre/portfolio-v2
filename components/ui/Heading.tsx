'use client';

import { motion } from 'framer-motion';

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h2>
  );
}