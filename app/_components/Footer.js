export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E5E7EB",
        marginTop: "60px",
        padding: "20px 40px",
        fontSize: "14px",
        color: "#555",
        textAlign: "center"
      }}
    >
      <p>© 2025 <strong>SarDataSurfer</strong></p>

      <div style={{ marginTop: "8px" }}>
        <a href="/privacy" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
          Privacy
        </a>
        <a href="/cookies" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
          Cookies
        </a>
        <a href="/contatti" style={{ margin: "0 10px", color: "#555", textDecoration: "none" }}>
          Contatti
        </a>
      </div>

      {/* Loghi sponsor opzionali */}
      {/* <div style={{ marginTop: "15px" }}>
        <img src="/sponsor-logo.png" alt="Sponsor" style={{ height: 30 }} />
      </div> */}
    </footer>
  );
}
