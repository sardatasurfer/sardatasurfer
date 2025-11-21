const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ['recharts'],
  },
};

module.exports = withMDX(nextConfig);
