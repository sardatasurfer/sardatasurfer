// components/Navbar.jsx
// Sostituisci o verifica l'uso di 'Link' da 'next/link' e le icone.

import Link from 'next/link';
// Importa le icone necessarie per il logo e le sezioni
import { BsSunFill, BsWind } from 'react-icons/bs'; 
import { RiLeafFill } from 'react-icons/ri'; 
import { usePathname } from 'next/navigation'; // Necessario per evidenziare il link attivo (opzionale)

const navItems = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Energia', href: '/energia', icon: <BsWind className="w-4 h-4" /> },
  { name: 'Qualità Aria', href: '/aria', icon: <RiLeafFill className="w-4 h-4" /> },
  { name: 'Blog', href: '/blog', icon: null },
  { name: 'Contatti', href: '/contatti', icon: null },
];

export default function Navbar() {
  // const pathname = usePathname(); // Usa questo per colorare il link attivo
  
  return (
    // Usa 'sticky' o 'fixed' per bloccare la navbar in alto
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo e Nome Sito */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-cyan-600 hover:text-cyan-700 transition duration-150">
              <BsSunFill className="w-6 h-6" /> 
              <span>SardaDataSurfer</span>
            </Link>
          </div>
          
          {/* Link di Navigazione */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-cyan-600 transition duration-150"
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Spazio per CTA (Iscriviti) */}
          <div className="flex items-center">
            <button className="hidden sm:block ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 transition duration-150">
              Iscriviti
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
