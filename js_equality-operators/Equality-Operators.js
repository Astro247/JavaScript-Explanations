// Al di là del simbolo di assegnazione "=" esistono quattro simboli inerenti alla comparazione:
// "==", "!=", "===" e "!==". Il primo e il secondo simbolo comparano il valore di due elementi, mentre il terzo e il quarto ne comparano anche il datatype.

let number = 5

if(number==="5") { //Anche se il valore della stringa equivale al valore numerico della variabile 'number', essendo il datatype diverso il bool della condizione risulta false.
    console.log("Correct Datatype")
}
else {
    console.log("Wrong Datatype")
}

if(number=="5") { //In questo caso invece non viene considerato il datatype, ma solo il valore.
    console.log("Correct Datatype")
}
else {
    console.log("Wrong Datatype")
}