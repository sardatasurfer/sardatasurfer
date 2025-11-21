/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  // Questa è l'unica riga che serve per far funzionare Recharts senza errori React
  serverComponentsExternalPackages: ['recharts'],
};

module.exports = nextConfig;
