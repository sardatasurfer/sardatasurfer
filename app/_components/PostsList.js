'use client'; // Importante: la navigazione con Link beneficia dell'esecuzione sul client.

import Link from "next/link";

export default function Nav() {
  return (
    <header
      className="
        flex items-center justify-between gap-6 px-6 py-3 
        border-b border-gray-200 bg-white shadow-lg 
        sticky top-0 z-30 transition-all
      "
    >
      {/* Logo centrato verticalmente */}
      <Link href="/" className="flex items-center gap-3 text-decoration-none transition duration-300 hover:opacity-80">
        <img
          src="/icon.png"
          alt="SarDataSurfer Logo"
          className="h-10 md:h-12 w-auto block"
        />
        <span className="font-extrabold text-xl text-[#0b2a4a] tracking-tight hidden sm:block">
          SardataSurfer
        </span>
      </Link>

      {/* Menu */}
      <nav className="flex items-center gap-4 md:gap-6 text-sm md:text-base font-semibold">
        <Link 
          href="/osservatorio-energia" 
          className="text-gray-700 hover:text-cyan-600 transition duration-150 p-1"
        >
          Osservatorio Energia
        </Link>
        <Link 
          href="/aria-sentinel" 
          className="text-gray-700 hover:text-cyan-600 transition duration-150 p-1"
        >
          Qualità dell’aria
        </Link>
        <Link 
          href="/blog" 
          className="text-white bg-cyan-600 hover:bg-cyan-700 rounded-full px-4 py-2 transition duration-150 shadow-md"
        >
          Blog
        </Link>    
      </nav>
    </header>
  );
}
