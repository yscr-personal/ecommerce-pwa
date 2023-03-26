// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },
  sentry: {
    hideSourcemaps: true,
    autoInstrumentServerFunctions: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = withSentryConfig(moduleExports, { silent: true });
