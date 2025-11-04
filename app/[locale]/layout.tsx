import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import { Inter } from 'next/font/google';
import './globals.css';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

   if (!locale) {
    notFound();
  }

  const isPortuguese = locale === 'pt';

  return {
    title: isPortuguese
      ? 'Benny Nobre - Desenvolvedor Full-Stack'
      : 'Benny Nobre - Full-Stack Developer',
    description: isPortuguese
      ? 'Portfólio de Benny Nobre, desenvolvedor focado em React, Next.js, Java e soluções web modernas.'
      : 'Portfolio of Benny Nobre, developer focused on React, Next.js, Java, and modern web solutions.',

    openGraph: {
      title: isPortuguese
        ? 'Benny Nobre - Desenvolvedor Full-Stack'
        : 'Benny Nobre - Full-Stack Developer',
      description: isPortuguese
        ? 'Portfólio de Benny Nobre, desenvolvedor focado em React, Next.js, Java e soluções web modernas.'
        : 'Portfolio of Benny Nobre, developer focused on React, Next.js, Java, and modern web solutions.',
      type: 'website',
      locale: isPortuguese ? 'pt_BR' : 'en_US',
      url: 'https://SEU-DOMINIO.com',
      siteName: 'Portfólio Benny Nobre',
      // images: [ { url: '/og-image.png', width: 1200, height: 630 } ]
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}
 
type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};
 
export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  setRequestLocale(locale);
 
  const messages = await getMessages();
 
 return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} 
                   bg-white text-zinc-900 
                   dark:bg-zinc-950 dark:text-zinc-200 
                   transition-colors duration-300`}>
      <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="flex flex-col min-h-screen">

              <Navigation />
              
              <main className="flex-grow">
                {children}
              </main>
              <Footer /> 
            </div>


          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
 );
}