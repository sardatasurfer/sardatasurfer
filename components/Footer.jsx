// components/Footer.jsx

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'; // Icone Social

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-12 border-t border-cyan-600">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* ... (Contenuto del Footer come nell'esempio precedente) ... */}
          {/* Colonna 1: Info e Copyright */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">SardaDataSurfer</h3>
            <p className="text-sm text-gray-400">
              Zero opinioni, solo fatti. Dati aperti su Energia, Ambiente e Qualità dell'Aria in Sardegna.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              &copy; {currentYear} SardaDataSurfer. Tutti i diritti riservati.
            </p>
          </div>

          {/* Colonna 4: Social e Contatti */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-150" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-150" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-150" aria-label="GitHub"><FaGithub className="w-6 h-6" /></a>
            </div>
          </div>
          {/* ... */}

        </div>
      </div>
    </footer>
  );
}
