//L'oggetto 'Math' fornisce diverse proprietà matematiche.

let num = 5.99, num2 = 1, num3 = 3

console.log(`round: ${Math.round(num)}`) //Arrotonda il numero (se sopra .50 per eccesso, se sotto .50 per difetto)
console.log(`floor: ${Math.floor(num)}`) //Arrotonda per difetto
console.log(`ceil: ${Math.ceil(num)}`) //Arrotonda per eccesso
console.log(`trunc: ${Math.trunc(num)}`) //Rende il numero intero
console.log(`max: ${Math.max(num, num2, num3)}`) //Ritorna il numero massimo, dato un numero n di positional arguments numerici.
console.log(`min: ${Math.min(num, num2, num3)}`) //Ritorna il numero minimo, dato un numero n di positional arguments numerici.

//Math si estende anche alla radice quadrata Math.sqrt(), operatori trigonometrici eccetera.