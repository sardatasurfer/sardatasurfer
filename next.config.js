const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurazione MDX: estensioni delle pagine
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Questa chiave è spesso necessaria per l'MDX, ma rimuovendo la chiave 'externalPackages'
  // risolviamo l'avviso di Next 15.
  // Rimuovi completamente la chiave 'externalPackages' se l'hai ancora nel tuo file reale!
  // ...
};

module.exports = withMDX(nextConfig);
