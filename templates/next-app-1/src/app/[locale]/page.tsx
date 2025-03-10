'use client';

import { Link } from '@i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { generateGUID } from '@utils/index';

export default function Welcome() {
  const t = useTranslations();

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='text-4xl hidden'>{t('welcomePage.title')}</h1>
        <Image className='bg-white dark:invert' src='/icons/next.svg' alt='Next.js logo' width={180} height={38} priority />
        <h2>Random ID: {generateGUID()}</h2>
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Link href='/home'>
            <div className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'>
              <Image className='dark:invert' src='/icons/vercel.svg' alt='Vercel logomark' width={20} height={20} />
              {t('welcomePage.goToHomePage')}
            </div>
          </Link>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] dark:hover:text-white hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
            href='https://github.com/Duc-Developer'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('welcomePage.aboutMe')}
          </a>
        </div>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://david.id.vn/blogs'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/icons/globe.svg' alt='Globe icon' width={16} height={16} />
          {t('welcomePage.myBlog')}
        </a>

        <button
          className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] dark:hover:text-white hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
          onClick={toggleTheme}
        >
          {theme === 'light' ? t('common.darkMode') : t('common.lightMode')}
        </button>
      </footer>
    </div>
  );
}
