import Link from "next/link";

export default function Nav() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "12px 24px",
        borderBottom: "1px solid #e6edf3",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Logo centrato verticalmente */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        {/* usa il tuo logo orizzontale se preferisci: /logo-header.png */}
        <img
          src="/icon.png"
          alt="SarDataSurfer"
          style={{ height: 48, width: "auto", display: "block" }}
        />
        <span style={{ fontWeight: 700, color: "#0b2a4a" }}>SardataSurfer</span>
      </Link>

      {/* Menu */}
      <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Link href="/osservatorio-energia" style={{ textDecoration: "none" }}>
          Osservatorio Energia
        </Link>
        <Link href="/aria-sentinel" style={{ textDecoration: "none" }}>
          Qualità dell’aria
        </Link>
        <Link href="/blog" className="text-white hover:text-cyan-400 font-semibold transition">
          Blog
        </Link>    
      </nav>
    </header>
  );
}
