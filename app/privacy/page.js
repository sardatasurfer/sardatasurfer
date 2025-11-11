export const metadata = {
  title: "Privacy – SarDataSurfer",
  description:
    "Informativa sul trattamento dei dati personali per il sito SarDataSurfer."
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Informativa Privacy</h1>
      <p><em>Ultimo aggiornamento: {new Date().getFullYear()}</em></p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        Titolare: <strong>SarDataSurfer</strong><br />
        Email: <a href="mailto:admin@sardatasurfer.it">admin@sardatasurfer.it</a>
      </p>

      <h2>2. Tipologie di dati trattati</h2>
      <ul>
        <li><strong>Dati di navigazione</strong> (log, indirizzo IP anonimizzato/mascherato se usi analytics con IP masking).</li>
        <li><strong>Cookie tecnici</strong> necessari al funzionamento del sito.</li>
        <li><strong>Dati forniti volontariamente</strong> (es. email nella pagina Contatti).</li>
      </ul>

      <h2>3. Finalità e base giuridica</h2>
      <ul>
        <li>Fornire il sito e i relativi contenuti (base giuridica: esecuzione di misure precontrattuali/interesse legittimo).</li>
        <li>Gestire richieste via email (base giuridica: esecuzione di misure precontrattuali/consenso dell’utente).</li>
        <li>Statistica anonima/aggregata sull’uso del sito (se abilitata; base giuridica: consenso o interesse legittimo, a seconda della configurazione dei cookie).</li>
      </ul>

      <h2>4. Conservazione</h2>
      <p>
        I dati sono conservati per il tempo necessario alle finalità indicate e, ove applicabile,
        secondo gli obblighi di legge o finché perdura il consenso.
      </p>

      <h2>5. Destinatari</h2>
      <p>
        Fornitori tecnici (hosting, deploy, e-mail). I dati non sono ceduti per finalità commerciali.
        Trasferimenti extra-UE possono avvenire se i fornitori hanno sedi estere: in tal caso si usano
        garanzie adeguate (es. clausole contrattuali standard).
      </p>

      <h2>6. Diritti dell’interessato</h2>
      <p>
        Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, nei limiti del GDPR.
        Per esercitarli: <a href="mailto:admin@sardatasurfer.it">admin@sardatasurfer.it</a>.
      </p>

      <h2>7. Sicurezza</h2>
      <p>
        Adottiamo misure tecniche e organizzative adeguate alla protezione dei dati (HTTPS, controllo accessi, minimizzazione dati).
      </p>

      <h2>8. Aggiornamenti</h2>
      <p>
        Questa informativa può essere aggiornata. Gli aggiornamenti saranno pubblicati su questa pagina.
      </p>

      <p style={{fontSize: 13, color: "#666", marginTop: 24}}>
        Nota: questo testo è un modello informativo e non costituisce consulenza legale.
      </p>
    </>
  );
}
