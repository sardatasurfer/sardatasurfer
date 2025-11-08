export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
      <h1 style={{ fontSize: 42, margin: "0 0 10px" }}>SardataSurfer</h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 10px" }}>
        Surfiamo nei dati della Sardegna.
      </p>
      <p style={{ fontSize: 18, lineHeight: 1.6 }}>
        Energia, ambiente, qualità dell’aria, dati scientifici e trasparenza.
        <br />Zero opinioni, solo fatti.
      </p>

      <hr style={{ margin: "30px 0", border: "none", borderTop: "1px solid #d7dee7" }} />

      <h2 style={{ marginTop: 0 }}>Coming soon</h2>
      <ul style={{ fontSize: 16, lineHeight: 1.7 }}>
        <li>Osservatorio Energia Sardegna (grafici aggiornati)</li>
        <li>Qualità dell’aria da Sentinel-5P (mappe e serie temporali)</li>
        <li>Pagina Sponsor &amp; Contatti</li>
      </ul>
    </main>
  );
}
