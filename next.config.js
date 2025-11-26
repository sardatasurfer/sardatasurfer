/** @type {import('next').NextConfig} */

// Importa il pacchetto MDX per configurare il supporto MDX
// Aggiungiamo l'opzione 'providerImportSource' per indicare a MDX 
// dove trovare il provider per i componenti personalizzati (come quelli in custom-mdx-components.js)
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // Questo è fondamentale per l'App Router e l'uso di componenti React customizzati
    // all'interno dei file MDX, specialmente se usi custom-mdx-components.js
    providerImportSource: "@mdx-js/react",
    
    // Puoi aggiungere qui eventuali plugin remark o rehype per l'elaborazione del markdown
    // Ad esempio: remarkPlugins: [require('remark-slug')],
  },
});

const nextConfig = {
  // Configura Next.js per riconoscere .mdx come estensione di pagina
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Impostazioni sperimentali per l'App Router con Next.js 15
  experimental: {
    // Abilita il supporto MDX basato su Rust (MDX-RS) per un parsing più veloce e stabile
    mdxRs: true, 
  },

  // Per gli sviluppatori: se hai bisogno di configurazioni aggiuntive 
  // per asset o Webpack, inseriscile qui sotto.
};

// Esporta la configurazione MDX come wrapper della configurazione standard di Next.js
module.exports = withMDX(nextConfig);
