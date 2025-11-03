'use client';

import { motion, useMotionValue, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface DockItemProps {
  children: React.ReactNode;
  mouseX: MotionValue<number>; 
}

export function DockItem({ children, mouseX }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;

    return val - bounds.x - bounds.width / 2;
  });

  const scale = useTransform(distance, [-150, 0, 150], [1, 1.7, 1]);

  const scaleSpring = useSpring(scale, {
    stiffness: 350,
    damping: 18,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleSpring }}
      className="relative group"
    >
      {children}
    </motion.div>
  );
}