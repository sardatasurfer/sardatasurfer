"use client";
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, Sun, Wind, Droplet, Factory, Zap } from 'lucide-react';

// Dati esistenti per la produzione
const DATA_PRODUZIONE = [
    { mese: "Gen", eolico: 145, fotovoltaico: 88, idro: 42, termoelettrico: 1002 },
    { mese: "Feb", eolico: 158, fotovoltaico: 112, idro: 38, termoelettrico: 892 },
    { mese: "Mar", eolico: 172, fotovoltaico: 168, idro: 45, termoelettrico: 845 },
    { mese: "Apr", eolico: 188, fotovoltaico: 225, idro: 41, termoelettrico: 712 },
    { mese: "Mag", eolico: 165, fotovoltaico: 289, idro: 38, termoelettrico: 689 },
    { mese: "Giu", eolico: 142, fotovoltaico: 312, idro: 35, termoelettrico: 678 },
    { mese: "Lug", eolico: 138, fotovoltaico: 335, idro: 32, termoelettrico: 702 },
    { mese: "Ago", eolico: 125, fotovoltaico: 298, idro: 30, termoelettrico: 745 },
    { mese: "Set", eolico: 155, fotovoltaico: 265, idro: 36, termoelettrico: 698 },
    { mese: "Ott", eolico: 178, fotovoltaico: 198, idro: 44, termoelettrico: 812 },
    { mese: "Nov", eolico: 192, fotovoltaico: 145, idro: 48, termoelettrico: 898 }
];

const POLLUTANT_MAP = [
    { key: 'eolico', color: '#8B5CF6', icon: Wind, name: 'Eolico' },
    { key: 'fotovoltaico', color: '#10B981', icon: Sun, name: 'Fotovoltaico' },
    { key: 'idro', color: '#3B82F6', icon: Droplet, name: 'Idroelettrico' },
    { key: 'termoelettrico', color: '#EF4444', icon: Factory, name: 'Termoelettrico' },
];

// Componente Chart per incapsulare il grafico
const EnergyChart = ({ data }) => (
  <div className="bg-[#1F2937] p-6 rounded-xl shadow-lg border-t-4 border-cyan-500 text-white">
    <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
      <Zap className="w-5 h-5 text-cyan-500" />
      <span>Produzione Mensile per Fonte (GWh)</span>
    </h4>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* Usiamo i colori esistenti nel tuo MDX */}
        <CartesianGrid strokeDasharray="4 4" stroke="#374151" /> 
        <XAxis dataKey="mese" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip 
            formatter={(value) => [`${value} GWh`, 'Produzione']}
            labelFormatter={(label) => `Mese: ${label}`}
            contentStyle={{ backgroundColor: "#1F2937", color: "white", borderRadius: "8px", border: "1px solid #06B6D4" }} 
        />
        <Legend />
        
        {POLLUTANT_MAP.map(p => (
            <Line 
                key={p.key}
                type="monotone" 
                dataKey={p.key} 
                stroke={p.color} 
                strokeWidth={3}
                name={p.name}
                dot={false}
                activeDot={{ r: 6 }}
            />
        ))}

      </LineChart>
    </ResponsiveContainer>
    <div className="mt-8 p-5 bg-amber-900/20 border border-amber-700 rounded-lg flex gap-3 items-start">
        <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="text-amber-300">
            <strong>Nota:</strong> dati provvisori – consolidamento Terna gennaio 2026.
        </p>
    </div>
  </div>
);

// Componente principale che verrà importato
export default function EnergyDashboard() {
  // Lo stato è stato mantenuto anche se non usato per il selettore anno, 
  // per mantenere la flessibilità se volessi aggiungerlo in futuro.
  const [selectedYear, setSelectedYear] = useState('2025'); 

  return (
    <div className="font-sans">
        <EnergyChart data={DATA_PRODUZIONE} />
    </div>
  );
}
