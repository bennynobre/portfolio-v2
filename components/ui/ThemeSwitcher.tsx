'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react'; 
import { useState, useEffect } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 p-2" />; 
  }
  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}