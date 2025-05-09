// Come per gli altri linguaggi di programmazione, le variabili sono di tipo: numerico, testuale e booleano.
// Prima di poter utilizzare una variabile è necessario dichiararla con la keyword "let".

let string = "unam";
let age = 20;
let bool = true;

let first_text = `Hello, this is a number "${age}" and this is a string "${string}"`; // Utilizzare il simbolo ` equivale ad utilizzare una f-string in python, ma per poter inserire una variabile oltre al nome di essa fra parentesi graffe è necessario posizionare un "$" prima delle graffe.

console.log(first_text); // console.log equivale alla funzione "print", ma invece di mostrare i risultati nel terminale, li mostra nella console del browser.
console.log(typeof age); // la keyword "typeof" ritorna il tipo di variabile.

document.getElementById("first_line").textContent = `My name is ${string}` //Questa riga di codice si collega ad uno specifico id in html e ne modifica il contenuto.
document.getElementById("second_line").textContent = `My age is ${age}`
document.getElementById("third_line").textContent = `And this is ${bool}`