"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React, { useState, useMemo } from 'react';
import { Map, Zap, Cloud, Factory, MapPin } from 'lucide-react';
// Dati fittizi per la dimostrazione
const MOCK_DATA = {
  Portovesme: [
    { name: 'Gen', NO2: 30, SO2: 12 },
    { name: 'Feb', NO2: 35, SO2: 15 },
    { name: 'Mar', NO2: 40, SO2: 11 },
    { name: 'Apr', NO2: 38, SO2: 10 },
    { name: 'Mag', NO2: 32, SO2: 8 },
    { name: 'Giu', NO2: 28, SO2: 6 },
    { name: 'Lug', NO2: 25, SO2: 5 },
  ],
  Sarroch: [
    { name: 'Gen', NO2: 20, SO2: 10 },
    { name: 'Feb', NO2: 28, SO2: 12 },
    { name: 'Mar', NO2: 35, SO2: 14 },
    { name: 'Apr', NO2: 32, SO2: 11 },
    { name: 'Mag', NO2: 25, SO2: 9 },
    { name: 'Giu', NO2: 22, SO2: 7 },
    { name: 'Lug', NO2: 18, SO2: 6 },
  ],
  'Porto Torres': [
    { name: 'Gen', NO2: 15, SO2: 5 },
    { name: 'Feb', NO2: 18, SO2: 6 },
    { name: 'Mar', NO2: 22, SO2: 8 },
    { name: 'Apr', NO2: 20, SO2: 7 },
    { name: 'Mag', NO2: 16, SO2: 5 },
    { name: 'Giu', NO2: 14, SO2: 4 },
    { name: 'Lug', NO2: 12, SO2: 3 },
  ],
};

const AREA_DETAILS = {
  Portovesme: { description: 'Polo metallurgico e centrale termoelettrica. Focus su SO₂.', keyPollutant: 'SO₂' },
  Sarroch: { description: 'Raffineria petrolifera e polo energetico. Traffico marittimo e NO₂.', keyPollutant: 'NO₂' },
  'Porto Torres': { description: 'Ex polo petrolchimico in riconversione. Monitoraggio NO₂.', keyPollutant: 'NO₂' },
};

const areas = Object.keys(MOCK_DATA);

const AreaSelector = ({ selectedArea, setSelectedArea }) => (
  <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-xl shadow-inner">
    {areas.map((area) => (
      <button
        key={area}
        onClick={() => setSelectedArea(area)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 flex items-center space-x-2
          ${selectedArea === area 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700 border border-gray-200'
          }`
        }
      >
        <MapPin className="w-4 h-4" />
        <span>{area}</span>
      </button>
    ))}
  </div>
);

const AreaCard = ({ area, data }) => {
  const details = AREA_DETAILS[area];
  const latestNO2 = data[data.length - 1]?.NO2;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
      <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2 mb-3">
        <Factory className="w-6 h-6 text-blue-500" />
        <span>Area Industriale di {area}</span>
      </h3>
      <p className="text-gray-600 mb-4">{details.description}</p>
      
      <div className="flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-sm text-gray-500">Ultimo Valore NO₂ (μmol/m²):</p>
          <p className="text-4xl font-extrabold text-blue-600">
            {latestNO2 || 'N/D'}
          </p>
          <p className="text-sm text-gray-500">Inquinante Chiave Atteso: <span className="font-medium text-blue-600">{details.keyPollutant}</span></p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Stato Emissioni</p>
          <p className={`text-lg font-bold ${latestNO2 > 35 ? 'text-red-500' : 'text-green-500'}`}>
            {latestNO2 > 35 ? 'Sopra Media' : 'Nella Norma'}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimeSeriesChart = ({ data, pollutant }) => (
  <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
    <h4 className="text-xl font-semibold text-gray-800 mb-4">
      Serie Storica Mensile {pollutant} (μmol/m²)
    </h4>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip 
            formatter={(value) => [`${value} μmol/m²`, 'Colonna Troposferica']}
            labelFormatter={(label) => `Mese: ${label}`}
        />
        <Line 
          type="monotone" 
          dataKey={pollutant} 
          stroke={pollutant === 'NO2' ? '#3b82f6' : '#f97316'} 
          strokeWidth={3}
          dot={false}
          name={pollutant}
          activeDot={{ r: 6 }} 
        />
        {/* Linea per il background, da popolare con dati reali */}
        <Line 
          type="monotone" 
          dataKey="SO2" 
          stroke="#ef4444" 
          strokeWidth={1}
          opacity={0.5}
          dot={false}
          name="SO2"
        />
      </LineChart>
    </ResponsiveContainer>
    <p className="text-xs text-gray-500 mt-2 text-center">
        Dati in Colonna Troposferica (Sentinel-5P). $NO_2$ (blu), $SO_2$ (rosso, per confronto).
    </p>
  </div>
);


export default function AirQualityMonitor() {
  const [selectedArea, setSelectedArea] = useState('Portovesme');
  const [selectedPollutant, setSelectedPollutant] = useState('NO2'); // Potrebbe essere utile

  const areaData = useMemo(() => MOCK_DATA[selectedArea] || [], [selectedArea]);

  return (
    <div className="font-sans max-w-7xl mx-auto p-4 sm:p-6 bg-gray-50 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2 flex items-center space-x-3">
          <Cloud className="w-8 h-8 text-blue-500" />
          <span>Monitoraggio Aree Industriali (Sentinel-5P)</span>
      </h2>

      <div className="mb-8">
        <AreaSelector selectedArea={selectedArea} setSelectedArea={setSelectedArea} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Colonna 1: Mappa Placeholder e Scheda Dettaglio */}
        <div className="lg:col-span-1 space-y-6">
          <AreaCard area={selectedArea} data={areaData} />
          
          <div className="bg-blue-900 h-96 rounded-xl shadow-xl flex items-center justify-center text-white p-6">
            <div className="text-center">
              <Map className="w-10 h-10 mx-auto mb-3" />
              <p className="text-xl font-bold">Mappa Interattiva Placeholder</p>
              <p className="text-sm opacity-80">
                Qui verrà implementata la visualizzazione raster di $NO_2$ con Leaflet/Mapbox, sovrapposta all'area di {selectedArea}.
              </p>
            </div>
          </div>
        </div>

        {/* Colonna 2: Grafico Serie Temporale */}
        <div className="lg:col-span-2">
          <TimeSeriesChart data={areaData} pollutant={selectedPollutant} />

          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg shadow-sm">
            <p className="font-bold">Prossimi Sviluppi:</p>
            <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Implementazione del servizio API backend per i dati Sentinel-5P (Python/CDSE).</li>
                <li>Integrazione della libreria cartografica (Mapbox GL JS o Leaflet) per visualizzare i GeoJSON delle zone industriali.</li>
                <li>Calcolo dell'indicatore di anomalia "Ultimo mese vs. media storica".</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
