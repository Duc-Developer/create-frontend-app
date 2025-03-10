import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    additionalData: `@use 'src/styles/_variables' as *;`,
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(bundleAnalyzer(nextConfig));
