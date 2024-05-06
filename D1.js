/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA:
I datatype in JavaScript sono i tipi di dato, o cosidetto formato, che si possono assegnare alle variabili. 
I principali datatype che andremo a trattare:
- String: il formato stringhe indicano una sequenza di caratteri e possono essere dichiarati tra gli apici doppi o singoli 
  (preferibilmente doppi) 
- Number: il formato numerico si scrive usando le cifre e senza apici, per i decimali si usa il punto e non la virgola;
- Booleani: il formato boolean ammette 2 opzioni: TRUE e FALSE;
- Null: si usa per dare alla variabile un valore nullo che è differente dal valore indefinito o non dichiarato;
- Undefined: si usa per dare alla variabile un valore ancora non definito*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Brian";
console.log("Il mio nome è: " + myName);

/* SCRIVI QUI LA TUA RISPOSTA 
let myName = "Brian"
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numb1 = 12;
let numb2 = 20;
console.log("La somma tra numb1 e numb2 è", numb1 + numb2);
/* SCRIVI QUI LA TUA RISPOSTA 
let numb1 = 12
let numb2 = 20
console.log(numb1 + numb2)*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
/* SCRIVI QUI LA TUA RISPOSTA 
let x = 12*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

const myName = "Brian"
console.log("Il mio nome è "+ myName)
const myName = "Pelinku"
console.log("Essendo una variabile dichiarata con 'const' non è possibile sovrascriverla")
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA: 
console.log(x-4)
 */
console.log("La sottrazione tra la variabile 'x' e il numero 4 è", x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
const name1 = "john";
const name2 = "John";
console.log(
  "Uguaglianza tra name1 e name2 è: ",
  name1.toLowerCase() === name2.toLowerCase()
);

/* SCRIVI QUI LA TUA RISPOSTA:
const name1 = "john"
const name2 = "John" 
console.log(name1 === name2)
console.log(!(name1 === name2)) EXTRA */
