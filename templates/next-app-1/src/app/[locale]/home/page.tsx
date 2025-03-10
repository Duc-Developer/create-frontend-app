import { useTranslations } from 'next-intl';
import React from 'react';

import './style.scss';

const Home = () => {
  const t = useTranslations();
  return (
    <div className='home-page'>
      <h1 className='text-4xl font-bold'>{t('homePage.title')}</h1>
      <p>This is project based on nextjs + bun + tailwind + scss</p>
    </div>
  );
};

export default Home;
