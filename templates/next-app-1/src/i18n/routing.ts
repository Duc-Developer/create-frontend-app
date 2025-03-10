import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vn', 'en'],
  defaultLocale: 'vn',
  localeDetection: true,
});
