/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  experimental: {
    mdxRs: true,
  },

  // ✅ Override: elimina eventuali chiavi non supportate (es. turbopack.conditions)
  turbopack: {},
};

module.exports = withMDX(nextConfig);
