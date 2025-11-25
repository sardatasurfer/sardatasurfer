// app/layout.js

import Nav from "./_components/Nav";
import Footer from "./_components/Footer";
// PASSO 1: Importa globals.css, dove sono definite le direttive di Tailwind.
import './globals.css'; 

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
      {/* PASSO 2: Modifica il tag <body> 
        Aggiunge: 
        - flex flex-col: abilita il layout flessibile verticale.
        - min-h-screen: garantisce che l'altezza minima sia l'intera viewport.
        - font-sans: usa il font di default di Tailwind.
      */}
      <body className="flex flex-col min-h-screen font-sans">
        
        {/* Nav Component */}
        <Nav />
        
        {/* PASSO 3: Modifica il tag <main>
          Aggiunge:
          - flex-grow: permette a <main> di espandersi e spingere il Footer in basso.
          - max-w-7xl mx-auto: centra il contenuto e gli dà una larghezza massima.
          - w-full p-8 sm:px-10: padding responsivo.
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
