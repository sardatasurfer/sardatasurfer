import Nav from "./_components/Nav";

export const metadata = {
  title: "SardataSurfer – Dati della Sardegna",
  description: "Energia, aria, ambiente e satelliti: analisi open data dalla Sardegna."
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
        <Nav />
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 40 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
