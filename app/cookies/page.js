export const metadata = {
  title: "Cookie Policy – SarDataSurfer",
  description:
    "Informativa sui cookie utilizzati dal sito SarDataSurfer."
};

export default function CookiesPage() {
  return (
    <>
      <h1>Cookie Policy</h1>
      <p><em>Ultimo aggiornamento: {new Date().getFullYear()}</em></p>

      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file di testo che il sito invia al dispositivo dell’utente
        per memorizzare informazioni con diverse finalità (tecniche, preferenze, statistiche, profilazione).
      </p>

      <h2>2. Tipologie di cookie che possiamo usare</h2>
      <ul>
        <li><strong>Cookie tecnici/necessari</strong>: garantiscono il funzionamento del sito (sempre attivi).</li>
        <li><strong>Cookie di preferenza</strong>: memorizzano scelte dell’utente (es. lingua).</li>
        <li><strong>Cookie statistici</strong>: raccolgono in forma aggregata/anonima statistiche d’uso del sito.</li>
        <li><strong>Cookie di terze parti</strong>: forniti da servizi esterni (es. analytics, mappe, font, video).</li>
      </ul>

      <h2>3. Consenso</h2>
      <p>
        Se attiviamo cookie non tecnici (es. analytics non anonimizzati), chiederemo il tuo consenso tramite banner.
        Potrai modificare in ogni momento le preferenze.
      </p>

      <h2>4. Cookie attualmente in uso</h2>
      <p>
        In questa fase iniziale il sito utilizza principalmente cookie tecnici.
        Se in futuro abiliteremo analytics o altri servizi, aggiorneremo questo elenco e il banner.
      </p>

      <h2>5. Gestione cookie</h2>
      <ul>
        <li>
          Puoi gestire/eliminare i cookie dalle impostazioni del tuo browser.
        </li>
        <li>
          Se presente il nostro banner, usa il pulsante “Preferenze” per abilitare/disabilitare categorie.
        </li>
      </ul>

      <h2>6. Contatti</h2>
      <p>
        Per informazioni: <a href="mailto:admin@sardatasurfer.it">admin@sardatasurfer.it</a>
      </p>

      <p style={{fontSize: 13, color: "#666", marginTop: 24}}>
        Nota: questo testo è un modello informativo e non costituisce consulenza legale.
      </p>
    </>
  );
}
