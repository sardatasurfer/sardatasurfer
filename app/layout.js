import Nav from "./_components/Nav";

export const metadata = {
  title: "SardataSurfer",
  description:
    "Surfiamo nei dati della Sardegna: energia, ambiente, qualità dell’aria, satelliti e trasparenza scientifica."
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
