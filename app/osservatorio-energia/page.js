"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ⚠️ DATI DI ESEMPIO (mock), NON REALI.
// Li sostituiremo con i dati estratti da TERNA.
const data = [
  { anno: 2006, produzione_totale_GWh: 14500, rinnovabili_GWh: 1800, eolico_GWh: 400, solare_GWh: 5, idrico_GWh: 1400 },
  { anno: 2007, produzione_totale_GWh: 14700, rinnovabili_GWh: 1900, eolico_GWh: 450, solare_GWh: 10, idrico_GWh: 1440 },
  { anno: 2008, produzione_totale_GWh: 14900, rinnovabili_GWh: 2100, eolico_GWh: 600, solare_GWh: 20, idrico_GWh: 1480 },
  { anno: 2009, produzione_totale_GWh: 15000, rinnovabili_GWh: 2300, eolico_GWh: 750, solare_GWh: 40, idrico_GWh: 1510 },
  { anno: 2010, produzione_totale_GWh: 15200, rinnovabili_GWh: 2600, eolico_GWh: 900, solare_GWh: 80, idrico_GWh: 1620 },
  { anno: 2011, produzione_totale_GWh: 15300, rinnovabili_GWh: 2900, eolico_GWh: 1100, solare_GWh: 150, idrico_GWh: 1650 },
  { anno: 2012, produzione_totale_GWh: 15400, rinnovabili_GWh: 3200, eolico_GWh: 1250, solare_GWh: 250, idrico_GWh: 1700 },
  { anno: 2013, produzione_totale_GWh: 15350, rinnovabili_GWh: 3400, eolico_GWh: 1350, solare_GWh: 320, idrico_GWh: 1730 },
  { anno: 2014, produzione_totale_GWh: 15200, rinnovabili_GWh: 3600, eolico_GWh: 1400, solare_GWh: 400, idrico_GWh: 1800 },
  { anno: 2015, produzione_totale_GWh: 15000, rinnovabili_GWh: 3800, eolico_GWh: 1450, solare_GWh: 480, idrico_GWh: 1870 },
  { anno: 2016, produzione_totale_GWh: 14900, rinnovabili_GWh: 4000, eolico_GWh: 1500, solare_GWh: 520, idrico_GWh: 1980 },
  { anno: 2017, produzione_totale_GWh: 14850, rinnovabili_GWh: 4200, eolico_GWh: 1550, solare_GWh: 560, idrico_GWh: 2090 },
  { anno: 2018, produzione_totale_GWh: 14800, rinnovabili_GWh: 4400, eolico_GWh: 1600, solare_GWh: 600, idrico_GWh: 2200 },
  { anno: 2019, produzione_totale_GWh: 14750, rinnovabili_GWh: 4550, eolico_GWh: 1650, solare_GWh: 650, idrico_GWh: 2250 },
  { anno: 2020, produzione_totale_GWh: 14200, rinnovabili_GWh: 4600, eolico_GWh: 1700, solare_GWh: 700, idrico_GWh: 2200 },
  { anno: 2021, produzione_totale_GWh: 14400, rinnovabili_GWh: 4800, eolico_GWh: 1750, solare_GWh: 780, idrico_GWh: 2270 },
  { anno: 2022, produzione_totale_GWh: 14500, rinnovabili_GWh: 5000, eolico_GWh: 1800, solare_GWh: 850, idrico_GWh: 2350 },
  { anno: 2023, produzione_totale_GWh: 14600, rinnovabili_GWh: 5200, eolico_GWh: 1850, solare_GWh: 920, idrico_GWh: 2430 },
  { anno: 2024, produzione_totale_GWh: 14700, rinnovabili_GWh: 5400, eolico_GWh: 1900, solare_GWh: 1000, idrico_GWh: 2500 },
];

// KPI calcolati sul dato più recente (ultimo anno)
const last = data[data.length - 1];
const first = data[0];

const quotaRinnovabili = (last.rinnovabili_GWh / last.produzione_totale_GWh) * 100;
const crescitaTotale = last.produzione_totale_GWh - first.produzione_totale_GWh;
const crescitaRinnovabili = last.rinnovabili_GWh - first.rinnovabili_GWh;

export default function OsservatorioEnergiaPage() {
  return (
    <>
      <h1>Osservatorio Energia – Sardegna</h1>
      <p>
        Serie storica di esempio (2006–2024) della produzione elettrica regionale, con focus su
        rinnovabili e fonti fossili. I dati mostrati sono <strong>mock realistici</strong> e
        verranno sostituiti con i valori ufficiali TERNA.
      </p>

      {/* KPI sintetici */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          margin: "24px 0",
        }}
      >
        <div
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h3 style={{ marginTop: 0 }}>Produzione totale (ultimo anno)</h3>
          <p style={{ fontSize: 24, margin: "8px 0" }}>
            {last.produzione_totale_GWh.toLocaleString("it-IT")} GWh
          </p>
          <p style={{ fontSize: 14, color: "#666" }}>
            Variazione vs 2006:{" "}
            <strong>
              {crescitaTotale >= 0 ? "+" : ""}
              {crescitaTotale.toLocaleString("it-IT")} GWh
            </strong>
          </p>
        </div>

        <div
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h3 style={{ marginTop: 0 }}>Quota rinnovabili (ultimo anno)</h3>
          <p style={{ fontSize: 24, margin: "8px 0" }}>
            {quotaRinnovabili.toFixed(1)} %
          </p>
          <p style={{ fontSize: 14, color: "#666" }}>
            Rinnovabili:{" "}
            <strong>
              {last.rinnovabili_GWh.toLocaleString("it-IT")} GWh
            </strong>
          </p>
        </div>

        <div
          style={{
            border: "1px solid #e5e5e5",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <h3 style={{ marginTop: 0 }}>Crescita rinnovabili (2006–2024)</h3>
          <p style={{ fontSize: 24, margin: "8px 0" }}>
            {crescitaRinnovabili >= 0 ? "+" : ""}
            {crescitaRinnovabili.toLocaleString("it-IT")} GWh
          </p>
          <p style={{ fontSize: 14, color: "#666" }}>
            Trainata da eolico e fotovoltaico.
          </p>
        </div>
      </section>

      {/* Grafico principale: Totale vs Rinnovabili vs Fossili */}
      <section style={{ marginTop: 32 }}>
        <h2>Produzione elettrica – Totale e rinnovabili</h2>
        <p style={{ color: "#555", fontSize: 14 }}>
          Linee continue: produzione totale e quota rinnovabile. I valori sono in GWh.
        </p>

        <div style={{ width: "100%", height: 420 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid stroke="#e5e5e5" strokeDasharray="3 3" />
              <XAxis dataKey="anno" />
              <YAxis
                label={{
                  value: "GWh",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="produzione_totale_GWh"
                name="Totale"
                stroke="#003f5c"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="rinnovabili_GWh"
                name="Rinnovabili"
                stroke="#2f4b7c"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Grafico fonti rinnovabili */}
      <section style={{ marginTop: 40 }}>
        <h2>Dettaglio rinnovabili – Eolico, solare, idrico</h2>
        <p style={{ color: "#555", fontSize: 14 }}>
          Evoluzione delle principali fonti rinnovabili in Sardegna (dati di esempio, GWh).
        </p>

        <div style={{ width: "100%", height: 420 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid stroke="#e5e5e5" strokeDasharray="3 3" />
              <XAxis dataKey="anno" />
              <YAxis
                label={{
                  value: "GWh",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="eolico_GWh"
                name="Eolico"
                stroke="#58508d"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="solare_GWh"
                name="Solare"
                stroke="#bc5090"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="idrico_GWh"
                name="Idrico"
                stroke="#ff6361"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Nota fonti */}
      <section style={{ marginTop: 40, fontSize: 13, color: "#555" }}>
        <p>
          <strong>Nota metodologica:</strong> i valori riportati in questa versione
          dell’Osservatorio sono dati di esempio costruiti per illustrare la
          struttura della pagina. Nella versione operativa verranno sostituiti
          con le serie storiche ufficiali TERNA (produzione e fabbisogno
          regionale, per fonte).
        </p>
      </section>
    </>
  );
}
