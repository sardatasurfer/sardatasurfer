import Nav from "./_components/Nav";

export const metadata = {
  title: "SardataSurfer – Dati della Sardegna",
  description:
    "Surfiamo nei dati della Sardegna: energia, ambiente, qualità dell’aria, osservazioni satellitari e trasparenza scientifica. Zero opinioni, solo fatti.",
  icons: {
    icon: "/favicon.ico",
    other: [{ rel: "icon", url: "/icon.png", sizes: "512x512" }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        {/* Barra di navigazione */}
        <Nav />

        {/* Logo orizzontale (opzionale): salva public/logo-header.png per vederlo */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px 40px 0" }}>
          <a href="/" style={{ display: "inline-block", textDecoration: "none" }}>
            <img
              src="/logo-header.png"
              alt="SarDataSurfer"
              style={{ height: 56, display: "block", maxWidth: "100%" }}
            />
          </a>
        </div>

        {/* Contenuto pagina */}
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
