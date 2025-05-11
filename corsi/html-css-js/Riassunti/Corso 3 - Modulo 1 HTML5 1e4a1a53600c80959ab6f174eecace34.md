# Corso 3 - Modulo 1: HTML5

**Sintesi Accademica - Corso IBM HTML, CSS, JavaScript (Moduli 1-4)**

---

# 1. Fondamenti di HTML e HTML5

HTML (HyperText Markup Language) è il linguaggio di markup standard per la strutturazione di documenti destinati al Web. Gli **elementi HTML**, definiti tramite **tag**, costituiscono i mattoni fondamentali della pagina, organizzando contenuti come paragrafi, liste e tabelle.

Con l'avvento di **HTML5**, si è introdotta una sintassi semplificata e retrocompatibile con HTML4 e XHTML1, affiancata dall'inclusione di nuovi elementi semantici (`<article>`, `<section>`, ecc.) e API avanzate per la gestione di contenuti multimediali e dati locali.

---

# 2. Innovazioni principali di HTML5

HTML5 ha ampliato il set di strumenti disponibili, offrendo:

- Categorizzazione semantica per migliorare la comprensione e l'accessibilità del contenuto.
- Gestione nativa di file audio e video senza necessità di plugin esterni.
- Disegno dinamico attraverso l'elemento `<canvas>`.
- Memorizzazione locale dei dati tramite Web Storage.
- Supporto per applicazioni offline mediante meccanismi di caching e Service Workers.

Questi miglioramenti hanno reso possibile lo sviluppo di applicazioni Web moderne, flessibili e comparabili a quelle desktop.

---

# 3. Il Document Object Model (DOM)

Il **DOM** rappresenta il documento HTML come una struttura ad albero di nodi, ciascuno corrispondente a un elemento della pagina.
Attraverso JavaScript è possibile interagire dinamicamente con il DOM, utilizzando metodi quali:

- `document.getElementById('id')`
- `document.getElementsByTagName('tag')`
- Accesso a collezioni come `document.images` e `document.scripts`

Ogni documento HTML, una volta caricato nel browser, si traduce in un oggetto `Document` completamente manipolabile via scripting.

---

# 4. Integrazione di Scripting in HTML

JavaScript è il linguaggio di scripting per eccellenza nel contesto Web:

- Gli script possono essere inclusi inline tramite `<script>` o collegati esternamente con `src`.
- Consentono funzionalità come la validazione dei form, l'aggiornamento dinamico dei contenuti e la gestione degli eventi utente.
- HTML5 introduce inoltre il concetto di **sandboxing** per iframe, limitando l'esecuzione di script da fonti non attendibili.

La sicurezza e l'affidabilità del codice dipendono anche dal fatto che gli utenti possano disattivare lo scripting nei loro browser.

---

# 5. Supporto dei browser alle funzionalità HTML5

La compatibilità delle funzionalità HTML5 e CSS3 non è uniforme tra i diversi browser.

- Strumenti come [caniuse.com](https://caniuse.com/) permettono di verificare la disponibilità delle funzionalità.
- Esempio pratico: `<input type="date">` è pienamente supportato da Chrome, parzialmente da Firefox, mentre risulta assente in Internet Explorer 11 e Safari obsoleti.

Testing dinamico di funzionalità:

```jsx
var input = document.createElement('input');
input.setAttribute('type', 'date');
if (input.type === 'date') {
  console.log("Supportato");
} else {
  console.log("Non supportato");
}

```

---

# 6. Verifiche di apprendimento e quiz svolti

- Identificazione corretta di elementi HTML, attributi e nodi.
- Costruzione di tabelle e liste ordinate con uso appropriato dei tag.
- Formattazione corretta dei commenti HTML (`<!-- commento -->`).
- Validazione e gestione degli input HTML5.
- Comprensione delle condizioni necessarie per l'attivazione dello scripting.
- Utilizzo di tecniche di feature detection tramite JavaScript.

---

# 7. Attività pratiche realizzate

- Creazione di una pagina HTML con form di input e gestione dell'interazione tramite JavaScript.
- Separazione del codice JavaScript in file esterni (`pen.js`).
- Implementazione di un sistema di alert per la lettura dei dati inseriti dall'utente.
- Correzione degli errori comuni:
    - Gestione corretta dell'accesso al `.value` degli input.
    - Collegamento degli eventi senza eseguire immediatamente la funzione (corretto uso di `addEventListener`).

---

# 8. Conclusioni e prospettive

La formazione ha consolidato competenze fondamentali in:

- Strutturazione semantica delle pagine Web.
- Interazione dinamica con il DOM.
- Scrittura e gestione di script JavaScript orientati al Web moderno.
- Verifica della compatibilità cross-browser.

**Prossimi obiettivi suggeriti:**

- Approfondimento del DOM avanzato e delle API Web.
- Progetti di manipolazione dinamica dei form e delle interfacce.
- Progressione verso CSS avanzato e concetti complessi di JavaScript.

---

**Stato attuale**: La preparazione raggiunta è adeguata a intraprendere progetti di sviluppo Front-End professionale, con solide basi teoriche e pratiche. Proseguire su questa linea porterà a competenze altamente spendibili nel mercato digitale contemporaneo. 🚀📚