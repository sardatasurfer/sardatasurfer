"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { anno: 2000, totale: 14351, rinnovabili: 596,  eolico: 28,   solare: 0,    idrico: 568 },
  { anno: 2001, totale: 14995, rinnovabili: 1100, eolico: 35,   solare: 1,    idrico: 1064 },
  { anno: 2002, totale: 14997, rinnovabili: 1360, eolico: 103,  solare: 0,    idrico: 1257 },
  { anno: 2003, totale: 15088, rinnovabili: 1690, eolico: 151,  solare: 1,    idrico: 1538 },
  { anno: 2004, totale: 15338, rinnovabili: 1764, eolico: 228,  solare: 1,    idrico: 1536 },
  { anno: 2005, totale: 15344, rinnovabili: 2024, eolico: 409,  solare: 0,    idrico: 1615 },
  { anno: 2006, totale: 15278, rinnovabili: 1984, eolico: 575,  solare: 0,    idrico: 1409 },
  { anno: 2007, totale: 15287, rinnovabili: 2105, eolico: 590,  solare: 2,    idrico: 1513 },
  { anno: 2008, totale: 15098, rinnovabili: 2204, eolico: 615,  solare: 8,    idrico: 1581 },
  { anno: 2009, totale: 15048, rinnovabili: 2339, eolico: 706,  solare: 27,   idrico: 1606 },
  { anno: 2010, totale: 15244, rinnovabili: 2882, eolico: 1036, solare: 74,   idrico: 1772 },
  { anno: 2011, totale: 15389, rinnovabili: 3112, eolico: 1042, solare: 342,  idrico: 1728 },
  { anno: 2012, totale: 15299, rinnovabili: 3613, eolico: 1471, solare: 662,  idrico: 1480 },
  { anno: 2013, totale: 15427, rinnovabili: 4390, eolico: 1853, solare: 922,  idrico: 1615 },
  { anno: 2014, totale: 15289, rinnovabili: 4416, eolico: 1831, solare: 1085, idrico: 1500 },
  { anno: 2015, totale: 15508, rinnovabili: 4517, eolico: 1860, solare: 1073, idrico: 1584 },
  { anno: 2016, totale: 15392, rinnovabili: 4981, eolico: 2143, solare: 1135, idrico: 1703 },
  { anno: 2017, totale: 14987, rinnovabili: 5378, eolico: 2233, solare: 1201, idrico: 1944 },
  { anno: 2018, totale: 15103, rinnovabili: 5699, eolico: 2258, solare: 1107, idrico: 2334 },
  { anno: 2019, totale: 15212, rinnovabili: 6135, eolico: 2690, solare: 1354, idrico: 2091 },
  { anno: 2020, totale: 14987, rinnovabili: 5988, eolico: 2570, solare: 1635, idrico: 1783 },
  { anno: 2021, totale: 14756, rinnovabili: 6241, eolico: 2652, solare: 1766, idrico: 1823 },
  { anno: 2022, totale: 15241, rinnovabili: 7098, eolico: 2555, solare: 2168, idrico: 2375 },
  { anno: 2023, totale: 15011, rinnovabili: 7498, eolico: 2824, solare: 2324, idrico: 2350 },
  { anno: 2024, totale: 15136, rinnovabili: 8136, eolico: 2777, solare: 2621, idrico: 1738 },
];

export default function OsservatorioEnergia() {
  const ultimo = data[data.length - 1];
  const primo  = data[0];

  return (
    <>
      <h1>Osservatorio Energia – Sardegna</h1>
      <p>Serie storica completa 2000–2024 · Produzione lorda elettrica (GWh)<br />
         Fonte ufficiale: <strong>Terna – dati.terna.it</strong> (novembre 2025)</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: 24, margin: "40px 0" }}>
        <div style={{ border: "3px solid #0369a1", borderRadius: 16, padding: 24, textAlign: "center", background: "#f8fafc" }}>
          <h3>Produzione 2024</h3>
          <div style={{ fontSize: 52, fontWeight: "bold", color: "#0369a1" }}>
            {(ultimo.totale / 1000).toFixed(2)} TWh
          </div>
        </div>
        <div style={{ border: "3px solid #22c55e", borderRadius: 16, padding: 24, textAlign: "center", background: "#f8fafc" }}>
          <h3>Rinnovabili 2024</h3>
          <div style={{ fontSize: 56, fontWeight: "bold", color: "#22c55e" }}>
            53.8%
          </div>
          <p style={{ margin: "8px 0 0", color: "#555" }}>era solo il 4.2% nel 2000</p>
        </div>
        <div style={{ border: "3px solid #a855f7", borderRadius: 16, padding: 24, textAlign: "center", background: "#f8fafc" }}>
          <h3>Crescita rinnovabili 2000→2024</h3>
          <div style={{ fontSize: 48, fontWeight: "bold", color: "#a855f7" }}>
            +7.540 GWh
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: 60 }}>Produzione totale vs rinnovabili</h2>
      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="anno" />
          <YAxis />
          <Tooltip formatter={(v) => `${(v/1000).toFixed(2)} TWh`} />
          <Legend />
          <Line type="monotone" dataKey="totale" stroke="#1e293b" name="Totale" strokeWidth={4} dot={false} />
          <Line type="monotone" dataKey="rinnovabili" stroke="#22c55e" name="Rinnovabili" strokeWidth={4} dot={false} />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: 60 }}>Dettaglio fonti rinnovabili</h2>
      <ResponsiveContainer width="100%" height={420}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="anno" />
          <YAxis />
          <Tooltip formatter={(v) => `${v} GWh`} />
          <Legend />
          <Line type="monotone" dataKey="eolico" stroke="#a855f7" name="Eolico" strokeWidth={3} />
          <Line type="monotone" dataKey="solare" stroke="#f59e0b" name="Fotovoltaico" strokeWidth={3} />
          <Line type="monotone" dataKey="idrico" stroke="#0ea5e9" name="Idrico + Geo" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

      <p style={{ marginTop: 80, fontSize: 15, color: "#555", textAlign: "center" }}>
        Dati estratti e aggregati da Terna Open Data (dati.terna.it) · Ultimo aggiornamento: 19 novembre 2025<br />
        La Sardegna ha raggiunto il <strong>53,8 % di energia elettrica da fonti rinnovabili nel 2024</strong>
      </p>
    </>
  );
}
