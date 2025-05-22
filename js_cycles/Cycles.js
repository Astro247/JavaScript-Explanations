// Come in ogni altro linguaggio di programmazione, il ciclo while, con la stessa sintassi di C/C++, ripete il codice che contiene fino a quando la condizione del ciclo non ritorna un bool false.
// Il ciclo for, invece, ripete il codice che contiene per un numero limitato di volte.

let number = 0

console.log("while cycle:")
while(number<6) { //Il codice viene ripetuto fino a quando la condizione "number<6" non diventa false
    console.log(number)
    number+=1
}

console.log("for cycle:")
for(let i=0; i<5; i++) { //Per ogni ciclo la variabile "i" viene incrementata di 1, il ciclo termina quando "i<5" diventa false.
    console.log(i)
}