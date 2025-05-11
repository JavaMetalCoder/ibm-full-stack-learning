# Corso 3: Modulo 2: CSS

# 📚 Sintesi Tecnico-Didattica – IBM Full Stack – Corso 3, Modulo 2

## 🔷 1. HTML5 – Elementi Semantici

**Elementi chiave:**

- `<section>`: identifica una sezione tematicamente autonoma
- `<article>`: rappresenta un contenuto indipendente e riutilizzabile
- `<header>`: intestazione per sezione o documento
- `<footer>`: sezione conclusiva, contiene metadati o link
- `<aside>`: contenuti marginali ma correlati al contesto principale
- `<figure>` / `<figcaption>`: supporto per elementi multimediali con descrizione
- `<nav>`: sezione destinata alla navigazione

**Considerazioni:**

- L'impiego di tag semantici migliora significativamente l'accessibilità, l'indicizzazione e la manutenzione del codice
- L'elemento `<div>` è neutro e privo di semantica: da preferire solo in assenza di alternative più specifiche

---

## 🔷 2. HTML5 – Tipologie di Input e Attributi di Controllo

**Input HTML5 di maggiore rilevanza:**

- `email`, `url`, `tel`, `number`, `range`, `color`, `date`, `datetime-local`
- `list` combinato con `<datalist>` per funzionalità di autocompletamento

**Esempio pratico – uso combinato di `input` e `datalist`:**

```html
<label for="frutto">Scegli un frutto:</label>
<input list="frutti" id="frutto" name="frutto">
<datalist id="frutti">
  <option value="Mela">
  <option value="Banana">
  <option value="Pera">
  <option value="Arancia">
</datalist>

```

In questo esempio, l'utente può digitare il nome di un frutto e selezionarlo da una lista di suggerimenti predefiniti.

**Attributi associabili ai campi di input:**

- `required`: obbligatorietà della compilazione
- `placeholder`: testo guida visualizzato in assenza di contenuto
- `pattern`: espressione regolare per la validazione lato client

**Fallback e compatibilità:**

- In assenza di supporto nativo da parte del browser, è opportuno integrare meccanismi di validazione mediante JavaScript o tecnologie server-side

**Input HTML5 di maggiore rilevanza:**

- `email`, `url`, `tel`, `number`, `range`, `color`, `date`, `datetime-local`
- `list` combinato con `<datalist>` per funzionalità di autocompletamento

**Attributi associabili ai campi di input:**

- `required`: obbligatorietà della compilazione
- `placeholder`: testo guida visualizzato in assenza di contenuto
- `pattern`: espressione regolare per la validazione lato client

**Fallback e compatibilità:**

- In assenza di supporto nativo da parte del browser, è opportuno integrare meccanismi di validazione mediante JavaScript o tecnologie server-side

---

## 🔷 3. CSS – Principi Fondamentali e Modalità di Integrazione

**Sintassi base:**

```css
selettore {
  proprietà: valore;
}

```

**Metodi di integrazione del CSS in HTML:**

- **Inline**: all'interno del singolo elemento HTML (priorità massima)

```html
<p style="color: blue; font-size: 18px;">Testo in blu</p>

```

- **Interno**: tramite tag `<style>` nella sezione `<head>`

```html
<head>
  <style>
    p { color: blue; font-size: 18px; }
  </style>
</head>

```

- **Esterno**: tramite file `.css` collegato con `<link>` (approccio preferito per mantenibilità)

```html
<head>
  <link rel="stylesheet" href="stili.css">
</head>

```

**Modelli di layout:**

- **Fisso**: utilizzo di unità statiche (`px`), non adattivo
- **Fluido**: layout dinamico e reattivo, realizzato con `%` o `em`

**Unità di misura principali:** `px`, `%`, `em`, `rem`

**Sintassi base:**

```css
selettore {
  proprietà: valore;
}

```

**Metodi di integrazione del CSS in HTML:**

- Inline: all'interno del singolo elemento HTML (priorità massima)
- Interno: tramite tag `<style>` nella sezione `<head>`
- Esterno: tramite file `.css` collegato con `<link>` (approccio preferito per mantenibilità)

**Modelli di layout:**

- **Fisso**: utilizzo di unità statiche (`px`), non adattivo
- **Fluido**: layout dinamico e reattivo, realizzato con `%` o `em`

**Unità di misura principali:** `px`, `%`, `em`, `rem`

---

## 🔷 4. CSS Framework – Utility First vs Component Based

### 🔹 Approccio Vanilla CSS

- Scrittura manuale completa dei fogli di stile
- Massimo controllo e personalizzazione, a fronte di maggiore impegno progettuale

### 🔹 Tailwind CSS (Utility-First)

- Framework basato su classi utility atomiche (`text-red-500`, `hover:bg-blue-700`)
- Supporto nativo per design responsive tramite prefissi come `sm:`, `md:`, `lg:`
- Progettazione rapida ma con markup HTML tendenzialmente più complesso
- In fase di produzione, è necessario configurare un sistema di **purging** per eliminare le classi non utilizzate e ottimizzare le dimensioni finali del CSS. Questo richiede attenzione per evitare la rimozione accidentale di classi dinamiche non esplicitamente dichiarate nel markup
- Framework basato su classi utility atomiche (`text-red-500`, `hover:bg-blue-700`)
- Supporto nativo per design responsive tramite prefissi come `sm:`, `md:`, `lg:`
- Progettazione rapida ma con markup HTML tendenzialmente più complesso

### 🔹 Bootstrap (Component-Based)

- Framework orientato ai componenti riutilizzabili (`btn`, `card`, `alert`...)
- Interfaccia pronta all'uso, con bassa curva di apprendimento
- Elevata produttività a scapito della flessibilità completa

**Tabella comparativa sintetica:**

| Caratteristica | Vanilla | Tailwind | Bootstrap |
| --- | --- | --- | --- |
| Controllo | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| Rapidità | ⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Flessibilità | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| Facilità d'uso | ⭐ | ⭐⭐ | ⭐⭐⭐⭐ |

---

## 📁 Esperimenti Locali – `test bootstrap tailwind/`

Contenuto della directory:

- `bootstrap.html`: esempio con CDN Bootstrap
- `tailwind.html`: esempio con CDN Tailwind
- `README.md`: documentazione tecnica per test, confronto, risorse e tracce esercitative

---

## ✅ Riepilogo Valutativo – Quiz (10 Domande)

| Domanda | Risposta corretta | Motivazione |
| --- | --- | --- |
| Quale tipo di CSS ha priorità più alta? | CSS inline | Ha precedenza su interno ed esterno poiché applicato direttamente nell'elemento HTML |
| Cos'è un layout fisso? | Dimensioni costanti | Non si adatta alla larghezza dello schermo, usa valori in pixel |
| Quali tag semantici sono corretti? | `<legend>`, `<figcaption>`, ecc. | Ogni tag ha una funzione semantica specifica nel layout del documento |
| Quale tipo di input accetta solo numeri? | `number` | Impedisce l'inserimento di lettere e può usare `min`, `max`, `step` |
| Cosa sono i modificatori in Tailwind? | `hover:`, `md:`, ecc. | Permettono stili condizionati basati su stati o larghezza dello schermo |
- La dichiarazione CSS inline ha la precedenza su tutte le altre modalità
- Il layout fisso mantiene dimensioni costanti; quello fluido si adatta al viewport
- Tag corretti per strutturazione semantica: `<legend>`, `<figcaption>`, `<article>`, `<aside>`
- L'input `number` è il più adatto per la raccolta di valori numerici
- I modificatori Tailwind (`hover:`, `md:`) applicano stili condizionali in modo dichiarativo

---

## 📌 Riferimenti Tecnici e Strumenti

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Tailwind Playground](https://play.tailwindcss.com/)
- [CodePen](https://codepen.io/) – testing e prototipazione live

---

## 🚀 Proposte di Estensione e Approfondimento

- Realizzare una componente "card prodotto" con entrambi i framework
- Verificare la resa delle **navbar responsive** e sistemi a griglia
- Sperimentare con **modali**, **form avanzati** e **layout multi-colonna**