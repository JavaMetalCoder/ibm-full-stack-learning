# ✅ MODULO 3 – JavaScript: Linguaggio, DOM, Eventi

---

### 🧠 Obiettivi del modulo

- Comprendere la sintassi e i tipi di dati base di JavaScript
- Usare variabili, condizioni, cicli e funzioni
- Lavorare con oggetti, array e prototipi
- Accedere e manipolare il DOM (Document Object Model)
- Gestire eventi e interazioni utente in HTML con JavaScript

---

## 🔹 1. Panoramica su JavaScript

- Linguaggio di **scripting lato client**
- Esegue codice nel browser
- Standard: **ECMAScript**
- Dinamico, non tipizzato, basato su oggetti

---

## 🔸 2. Tipi di dati in JavaScript

### Primitivi

- `number` → `1`, `3.14`, `NaN`, `Infinity`
- `string` → `"ciao"`, `'Fabio'`
- `boolean` → `true`, `false`
- `null` → intenzionalmente vuoto
- `undefined` → variabile dichiarata ma non inizializzata

### Wrapper Object

- `new String()`, `new Number()`, `new Boolean()`
- Conversione tramite `.valueOf()` e `.toString()`

---

## 🔹 3. Variabili

### Dichiarazione classica (obsoleta):

```jsx
var nome = "Fabio";

```

### Moderni:

- `let` → variabile modificabile, **scope di blocco**
- `const` → costante, non riassegnabile

---

## 🔸 4. Strutture di controllo

### Condizioni

```jsx
if (condizione) {
  ...
} else {
  ...
}

```

### Switch

```jsx
switch (variabile) {
  case "A":
    ...
    break;
  default:
    ...
}

```

### Cicli

```jsx
for (let i = 0; i < 10; i++) { ... }
while (condizione) { ... }

```

---

## 🔹 5. Funzioni e Prototipi

### Funzione semplice

```jsx
function saluta(nome) {
  return "Ciao " + nome;
}

```

### Funzione costruttrice

```jsx
function Car(marca, modello) {
  this.marca = marca;
  this.modello = modello;
}

```

### Prototipo

```jsx
Car.prototype.getInfo = function() {
  return this.marca + " " + this.modello;
}

```

---

## 🔸 6. DOM (Document Object Model)

- Struttura ad albero degli elementi HTML
- Ogni tag → nodo (`ELEMENT_NODE`)
- Ogni testo → nodo di testo (`TEXT_NODE`)

### Metodi base

```jsx
document.getElementById("id")
document.getElementsByTagName("p")
document.querySelector(".classe")
document.createElement("div")
element.appendChild(figlio)
element.innerHTML = "Nuovo contenuto"

```

### Modifica stile

```jsx
element.style.color = "blue"
element.classList.add("attivo")

```

---

## 🔹 7. Eventi e interazioni

### Event Binding

```html
<button onclick="mostra()">Click</button>

```

```jsx
function mostra() {
  alert("Ciao!");
}

```

### Eventi principali

- `onclick`
- `onmouseover`
- `onload`
- `onchange`

---

## 📄 8. Oggetti globali del browser

| Oggetto | Uso |
| --- | --- |
| `window` | Contenitore globale, eventi, popup |
| `document` | Accesso al DOM HTML |
| `location` | Info sull’URL della pagina |
| `history` | Navigazione avanti/indietro |
| `navigator` | Info su browser e sistema |
| `screen` | Dimensioni schermo/dispositivo |

---

## 📓 9. Tipi di nodo DOM

| Tipo | Codice | Esempio |
| --- | --- | --- |
| `ELEMENT_NODE` | `1` | `<div>` |
| `TEXT_NODE` | `3` | `"ciao"` |
| `ATTRIBUTE_NODE` | `2` | `id="test"` |
| `COMMENT_NODE` | `8` | `<!-- commento -->` |

---

## ✅ Conoscenze acquisite

- Sintassi JavaScript moderna (`let`, `const`, `function`)
- Gestione del DOM tramite JS
- Creazione dinamica di elementi
- Uso di eventi e binding
- Nozioni fondamentali su oggetti, prototipi e metodi
- Tipi di nodi e oggetti DOM (window, document, navigator…)

---

## 🧪 Esercizi svolti

- ✅ Modifica testo e stile
- ✅ Creazione dinamica di elementi
- ✅ Aggiunta classi CSS via JS
- ✅ Modifica di attributi
- ✅ Accesso a eventi via `onclick`

---

## 🧠 Prossimo passo

> Passare al Modulo 4: Avanzamento in JavaScript (validazioni, oggetti, programmazione strutturata)
> 
> 
> oppure esercitarsi con eventi + DOM in mini progetti pratici!
>