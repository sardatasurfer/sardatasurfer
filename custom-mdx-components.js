'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Componenti React importati (percorsi corretti)
import EnergyDashboard from '@/components/osservatorio-energia/EnergyDashboard.jsx';
import AirQualityMonitor from '@/components/aria-sentinel/AirQualityMonitor'; // PERCORSO CORRETTO ORA IN components/aria-sentinel

// ✅ CORREZIONE: Ho mantenuto l'importazione dynamic che hai fornito.
// Nota: l'alias '@/app/_components/ChartWrapper' sembra puntare a un file non presente,
// ma lo mantengo in quanto parte della tua struttura esistente.
const DynamicChartWrapper = dynamic(() => import('@/app/_components/ChartWrapper'), { 
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


// 3. Funzione di Default Export che sovrascrive i componenti MDX.
export default function MDXComponents(components) {
    return {
        // Override dei tag HTML per lo stile
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
        
        // Componenti Custom resi disponibili
        Chart: DynamicChartWrapper, 
        iframe: ClientIframe,     
        
        // ✅ AGGIUNTA di entrambi i componenti della Dashboard (Energetica e Aria)
        EnergyDashboard: EnergyDashboard,
        AirQualityMonitor: AirQualityMonitor,
        
        ...components,
    };
}
