
/*  🧩 ESERCIZIO 1 – Base
Obiettivo: Scrivi una funzione saluta che accetta un parametro nome e ritorna la stringa "Ciao, <nome>!" */ 

function saluta(name) {
  console.log("Ciao "+ name);
}

saluta("Fabioooo");

/* 🧩 ESERCIZIO 2 – Medio
Obiettivo: Crea una funzione costruttrice Libro che accetta 3 parametri: titolo, autore, anno.
Ogni oggetto creato deve avere queste proprietà. Aggiungi poi un metodo al prototipo chiamato getInfo che ritorna una stringa del tipo:

📘 "Il libro <titolo> è stato scritto da <autore> nel <anno>"  */

function Libro(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Libro.prototype.getInfo = function() {
  return "Il libro " + this.title + " è stato scritto da " + this.author + " nel " + this.year;
}


let libro = new Libro("Lettera a un bambino mai nato", "Oriana Fallaci", 1975);
libro.getInfo();

/* 🧩 ESERCIZIO 3 – Avanzato
Obiettivo: Crea una funzione autoeseguibile (IIFE) che:

Crea un array di oggetti Libro

Per ciascun libro chiama getInfo() e stampa il risultato in console

🧪 Aspettati un risultato tipo:
yaml
Copia
Modifica
Il libro 1984 è stato scritto da George Orwell nel 1949  
Il libro Il Signore degli Anelli è stato scritto da J.R.R. Tolkien nel 1954  
... */

let libri = [new Libro("Come Dio comanda", "Idk", 2000), new Libro("Eva Luna", "Idk",2000 )];

for (let i = 0; i < libri.length; i++) {
  console.log(libri[i].getInfo());
}