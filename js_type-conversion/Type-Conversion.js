// Tutti i valori che vengono inseriti in input, come in python, vengono sempre considerati come stringhe.

let input_value;
input_value = window.prompt("What's your age?"); // Indipendentemente da cosa viene inserito in input, il valore attribuito ad "input_value" è una stringa

input_value += 1; // Essendo "input_value" una stringa, sommandogli un valore non ne modifica il valore di partenza, ma genera una stringa concatenata.

console.log(input_value, typeof(input_value));

//Per poter modificare il type di una variabile in un'altro tipo è sufficiente utilizzare le funzioni: String(), Boolean(), Number().

let first_element = 25;
let second_element = "hello";

console.log(`First element as a bool: ${Boolean(first_element)}`); // Qualsiasi numero diverso da zero equivale sempre ad un bool true.
console.log(`First element as a string: ${String(first_element)+1}`);

console.log(`Second element as a number: ${Number(second_element)}`); // Se si dovesse provare a convertire una stringa ad un numero con la stringa contenente elementi anomali (non numerici), la conversione avviene comunque, ma ritorna un "NaN", ossia "Not a Number".
console.log(`Second element as a bool: ${Boolean(second_element)}`); // Qualsiasi stringa contenente almeno un carattere equivale sempre ad un bool true.