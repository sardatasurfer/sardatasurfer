/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],  // Abilita MDX
  reactStrictMode: true,  // Mantieni la tua configurazione
  experimental: {
    mdxRs: true,  // Fixa conflitti React e prerendering
  },
});
