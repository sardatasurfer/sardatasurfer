export const metadata = {
  title: "Contatti – SarDataSurfer",
  description:
    "Contatta il team di SarDataSurfer per informazioni, collaborazioni e sponsor."
};

export default function ContattiPage() {
  return (
    <>
      <h1>Contatti</h1>
      <p>Scrivici per informazioni, segnalazioni di dataset, collaborazioni o sponsorizzazioni.</p>

      <h2>Email</h2>
      <p>
        <a href="mailto:admin@sardatasurfer.it">admin@sardatasurfer.it</a>
      </p>

      <h2>GitHub</h2>
      <p>
        <a href="https://github.com/sardatasurfer" target="_blank" rel="noreferrer">
          github.com/sardatasurfer
        </a>
      </p>

      <h2>Sponsor</h2>
      <p>
        Se sei interessato a sostenere il progetto, scrivici con oggetto
        <em> “Sponsorizzazione SarDataSurfer”</em>.
      </p>

      <h2>Note</h2>
      <p>
        Non condividere dati sensibili via email. Per richieste riguardanti i tuoi dati personali (GDPR),
        scrivi indicando l’oggetto della richiesta e verificheremo la tua identità.
      </p>
    </>
  );
}
