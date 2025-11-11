export default function Nav() {
  return (
    <nav style={{padding:"14px 24px", borderBottom:"1px solid #e6edf3"}}>
      <a href="/" style={{fontWeight:700, marginRight:20, color:"#0b2a4a", textDecoration:"none"}}>SardataSurfer</a>
      <a href="/osservatorio-energia" style={{marginRight:14, textDecoration:"none"}}>Osservatorio Energia</a>
      <a href="/aria-sentinel" style={{textDecoration:"none"}}>Qualità dell’aria</a>
    </nav>
  );
}
