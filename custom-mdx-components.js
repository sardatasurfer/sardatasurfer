'use client'; 

import React from 'react';
import dynamic from 'next/dynamic';

// ✅ PERCORSO CORRETTO: Usa il percorso relativo ./app/_components/ChartWrapper
// dato che custom-mdx-components.js si trova nella root del progetto.
const DynamicChartWrapper = dynamic(() => import('./app/_components/ChartWrapper'), { 
    ssr: false, 
    loading: () => <p className="text-cyan-300 animate-pulse text-center p-4">Caricamento Grafico...</p>
});

// 2. Componente Client per Iframe.
const ClientIframe = (props) => (
    <iframe
        {...props}
        className={`w-full h-[800px] border-0 shadow-2xl rounded-xl p-4 bg-white/5 backdrop-blur-sm ${props.className || ''}`}
        title={props.title || "Contenuto Esterno Incorporato"}
        allow="fullscreen"
    />
);


// 3. Funzione di Default Export.
export default function MDXComponents(components) {
  return {
    // Override dei tag HTML
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
    
    // Componenti Custom
    Chart: DynamicChartWrapper, 
    iframe: ClientIframe,       
    
    ...components,
  };
}
