'use client';

// 1. IMPORTAZIONE CORRETTA: Carica il componente dalla sua nuova posizione
import AirQualityMonitor from '@/components/aria-sentinel/AirQualityMonitor';
import React from 'react';

// 2. MODIFICA DELLA FUNZIONE: Aggiunge la struttura della pagina
export default function AriaSentinelPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 sm:p-8">
      {/* Intestazione */}
      <header className="mb-10">
        <h1 className="text-5xl font-extrabold text-cyan-400 border-b-2 border-cyan-700 pb-3">
          Qualità dell’aria – Sentinel-5P
        </h1>
        <p className="mt-2 text-xl text-gray-400">
          Mappe $NO_2$/$SO_2$ per Sarroch, Porto Torres e Portoscuso, con serie temporali.
        </p>
      </header>
      
      {/* 3. RENDERIZZAZIONE: Inserisce il componente */}
      <section className="mt-8">
        <AirQualityMonitor />
      </section>

      {/* Footer per coerenza */}
      <footer className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-500">
        <p>I dati satellitari sono forniti a scopo informativo e non sostituiscono il monitoraggio a terra degli enti preposti. Ultimo aggiornamento dati: 2025.</p>
      </footer>
    </main>
  );
}
