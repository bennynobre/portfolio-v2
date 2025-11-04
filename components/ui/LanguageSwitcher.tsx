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
      className="flex items-center gap-1 p-2 rounded-lg 
                 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 
                 text-zinc-600 dark:text-zinc-400
                 hover:text-black dark:hover:text-white
                 transition-all duration-200 hover:scale-110"
    >
      <Globe size={18} />
      <span className="font-medium uppercase">{otherLocale}</span>
    </button>
  );
}