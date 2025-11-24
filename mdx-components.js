'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// 1. Componente dinamico per il wrapper grafico (ChartWrapper).
// Utilizziamo l'alias '@/app/_components/ChartWrapper' per garantire che il percorso 
// sia risolto correttamente dalla root del progetto, indipendentemente dalla posizione di questo file.
const DynamicChartWrapper = dynamic(() => import('@/app/_components/ChartWrapper'), { 
    // Disabilita la compilazione lato server (SSR) per le librerie solo-client come Recharts.
    ssr: false, 
    loading: () => <p className="text-cyan-300 animate-pulse text-center p-4">Caricamento Grafico...</p>
});

// 2. Componente Client per Iframe.
// Rende l'iframe responsive e stilizzato per il tema scuro del blog.
const ClientIframe = (props) => (
    <iframe
        {...props}
        // Tailwind classes per stile e responsive
        className={`w-full h-[800px] border-0 shadow-2xl rounded-xl p-4 bg-white/5 backdrop-blur-sm ${props.className || ''}`}
        title={props.title || "Contenuto Esterno Incorporato"}
        // Permette la visualizzazione a schermo intero
        allow="fullscreen"
    />
);


// 3. Funzione di Default Export.
// Questa funzione è il formato ESATTO richiesto dal compilatore MDX per mappare i componenti.
// Riceve i componenti MDX standard e li unisce ai tuoi custom components.
export default function MDXComponents(components) {
  return {
    // Override dei tag HTML per lo styling del tema scuro
    h1: (props) => (
        <h1 
            className="text-4xl font-extrabold text-cyan-500 my-6 border-b border-cyan-800 pb-2 leading-tight" 
            {...props} 
        />
    ),
    h2: (props) => (
        <h2 
            className="text-3xl font-bold text-white mt-8 mb-4 leading-snug" 
            {...props} 
        />
    ),
    p: (props) => <p className="text-lg text-gray-200 my-4 leading-relaxed" {...props} />,
    a: (props) => <a className="text-cyan-400 hover:text-cyan-300 underline transition duration-200" {...props} />,
    ul: (props) => <ul className="list-disc list-inside space-y-2 pl-5 text-gray-300" {...props} />,
    li: (props) => <li className="text-base" {...props} />,
    
    // Componenti Custom da usare nei tuoi file .mdx
    Chart: DynamicChartWrapper, 
    iframe: ClientIframe,       
    
    // Unisci tutti gli altri componenti standard forniti dal provider MDX
    ...components,
  };
}
