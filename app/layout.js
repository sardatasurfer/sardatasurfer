// app/layout.js (o .jsx)

import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
import './globals.css'; // Assicurati di importare i tuoi stili globali (inclusi quelli di Tailwind)

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
      {/* PASSO 1: Sostituisci lo style inline del body con le classi Tailwind.
        - flex flex-col: Imposta il body come colonna flessibile.
        - min-h-screen: Garantisce che il body sia almeno alto quanto la finestra.
      */}
      <body className="flex flex-col min-h-screen font-sans">
        
        {/* Nav Component (dovrebbe usare classi 'sticky' o 'fixed' all'interno) */}
        <Nav />
        
        {/* PASSO 2: Sostituisci lo style inline della main con le classi Tailwind.
          - flex-grow: Permette al contenuto di espandersi, spingendo il footer in basso.
          - max-w-7xl: Limita la larghezza massima del contenuto (equivalente a 1100px circa).
          - mx-auto: Centra il blocco.
          - p-8 / sm:px-10: Aggiunge padding responsivo (equivalente al tuo 32px 40px).
        */}
        <main className="flex-grow max-w-7xl mx-auto w-full p-8 sm:px-10">
          {children}
        </main>
        
        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
