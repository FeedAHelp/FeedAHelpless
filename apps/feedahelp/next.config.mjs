/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["ui"],
  images: {
    domains: [
      "cdn.sanity.io", 
      "i.ibb.co", 
      "source.unsplash.com",
      "www.countryflagicons.com", 
      "media.istockphoto.com",
      "drive.google.com",
      "png.pngtree.com",
      "cdn-icons-png.flaticon.com"
      ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
};

export default config;
