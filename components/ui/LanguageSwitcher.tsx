'use client';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation'; 
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === 'pt' ? 'en' : 'pt';

  function onClick() {
    startTransition(() => {
      router.replace(pathname, { locale: otherLocale });
    });
  }

  return (
    <button
      onClick={onClick}
      disabled={isPending}
      className="flex items-center gap-2 p-2 rounded-md 
                 text-zinc-600 hover:text-zinc-900 
                 dark:text-zinc-400 dark:hover:text-white 
                 hover:bg-zinc-100 dark:hover:bg-zinc-800 
                 transition-colors"
    >
      <Globe size={18} />
      <span className="font-medium uppercase">{otherLocale}</span>
    </button>
  );
}