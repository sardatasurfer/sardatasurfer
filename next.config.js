const withMDX = require('@next/mdx')();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  // Questa riga risolve il conflitto Recharts + React che ti dà "t.createContext is not a function"
  serverComponentsExternalPackages: ['recharts'],
});
