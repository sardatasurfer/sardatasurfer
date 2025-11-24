'use client';

// NON IMPORTIAMO RECHARTS QUI! 
// L'importazione diretta qui, anche con 'use client', può ancora causare problemi 
// perché il modulo viene comunque risolto e caricato dal bundler.

import React, { useState, useEffect } from 'react';

// Lo stato di importazione ci aiuta a montare il componente solo quando siamo sicuri di essere sul client.
// Questo è il pattern iper-difensivo per le librerie problematiche.

export default function ChartWrapper({ data }) {
  const [RechartsComponents, setRechartsComponents] = useState(null);

  useEffect(() => {
    // Importa recharts solo quando il componente è montato sul client
    import('recharts').then(module => {
      setRechartsComponents(module);
    }).catch(error => {
      console.error("Errore durante l'importazione di recharts:", error);
    });
  }, []);

  if (!RechartsComponents) {
    // Placeholder mostrato durante il dynamic import
    return <div className="text-cyan-300 animate-pulse text-center p-4 h-[300px]">Caricamento libreria grafica...</div>;
  }

  // Estrai i componenti necessari dopo l'importazione client-side
  const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = RechartsComponents;

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          {/* Colore degli assi aggiornato per il tema scuro */}
          <XAxis dataKey="name" stroke="#a0a0a0" />
          <YAxis stroke="#a0a0a0" /> 
          <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} activeDot={{ r: 8 }} name="Produzione" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
