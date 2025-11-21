const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true,
    // ✅ sposta qui la configurazione dei pacchetti esterni
    serverComponentsExternalPackages: ['recharts'],
  },
};

module.exports = withMDX(nextConfig);
