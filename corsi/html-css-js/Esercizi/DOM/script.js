/* 🧩 ESERCIZIO 1 – Seleziona e modifica un titolo
HTML di partenza:

<h1 id="titolo">Titolo originale</h1>
Obiettivo: Usa JavaScript per cambiare il contenuto del titolo in
"Titolo modificato via JS". */

const textH1 = document.getElementById("titolo");
textH1.innerHTML = "Titolo modificato via JS";

/* 🧩 ESERCIZIO 2 – Cambia colore a un paragrafo
HTML di partenza:

<p id="messaggio">Questo è un paragrafo.</p>
Obiettivo: Cambia il colore del testo in blu usando element.style.  */

const textP = document.getElementById("messaggio");
textP.style.color = "purple";
 

/* 🧩 ESERCIZIO 3 – Crea e aggiungi un nuovo elemento
HTML di partenza:


<div id="contenitore"></div>
Obiettivo:

Crea un elemento <p>

Aggiungici il testo "Paragrafo aggiunto dinamicamente"

Inseriscilo dentro il div contenitore. */

const div = document.getElementById("contenitore"); //prendo il div
let paragrafo = document.createElement("p"); //creo il p ma non ancora "online"
let testo = document.createTextNode("Paragrafo aggiunto dinamicamente"); //creo il testo per il paragrafo
paragrafo.appendChild(testo); //metto il testo dentro il p

div.appendChild(paragrafo); //attivo il p inserendolo dentro il div

/* 🧩 Esercizio 4

Obiettivo:
Hai questo HTML:

<div id="blocco" class="box"></div>
Scrivi un JS che aggiunge la classe "evidenziato" al div.
*/

const div2 = document.getElementById("blocco");
div2.classList.add("evidenziato");

/* 🧩 Esercizio 5

Obiettivo:
Hai questo HTML:

<img id="foto" src="vecchia.jpg" alt="immagine vecchia">
Scrivi il JS che modifica l’attributo src in "nuova.jpg" usando setAttribute.
*/

const immagine = document.getElementById("foto");
immagine.setAttribute("src", "nuova.jpg");
immagine.setAttribute("alt", "immagine nuova");