const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Configurazione MDX: estensioni delle pagine
  pageExtensions: ['js', 'jsx', 'mdx'],

  // 2. Configurazione MDX: abilitare il supporto MDX (mdxRs)
  experimental: {
    mdxRs: true,
  },

  // 3. ✨ Correzione: La proprietà 'externalPackages' (non più 'serverComponentsExternalPackages')
  // Metti i pacchetti esterni che devono essere eseguiti solo sul client o che non sono compatibili 
  // con i Server Components qui.
  externalPackages: ['recharts'],
};

module.exports = withMDX(nextConfig);
