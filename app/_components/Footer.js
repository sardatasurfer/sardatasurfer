export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 80,
        padding: "24px 0",
        borderTop: "1px solid #ddd",
        fontSize: "14px",
        textAlign: "center",
        color: "#666"
      }}
    >
      © 2025 SarDataSurfer
      <br />
      <a href="/privacy" style={{ margin: "0 10px" }}>Privacy</a>
      <a href="/cookies" style={{ margin: "0 10px" }}>Cookies</a>
      <a href="/contatti" style={{ margin: "0 10px" }}>Contatti</a>
    </footer>
  );
}
