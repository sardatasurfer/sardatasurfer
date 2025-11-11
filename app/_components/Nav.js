import Link from "next/link";

export default function Nav() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 32px",
        borderBottom: "1px solid #e5e5e5",
        background: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Link href="/">
          <img
            src="/icon.png"
            alt="SarDataSurfer logo"
            style={{ height: "48px", cursor: "pointer" }}
          />
        </Link>
      </div>

      <nav style={{ display: "flex", gap: "24px" }}>
        <Link href="/osservatorio-energia" style={{ textDecoration: "none" }}>
          Osservatorio Energia
        </Link>
        <Link href="/aria-sentinel" style={{ textDecoration: "none" }}>
          Qualità dell’aria
        </Link>
      </nav>
    </header>
  );
}
