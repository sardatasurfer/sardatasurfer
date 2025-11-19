import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

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
        <Nav />
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 40px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
