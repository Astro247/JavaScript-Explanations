// In javascript il metodo .sort() ordina gli elementi di un'array in maniera alfabetica, trasformando temporaneamente tutti gli elementi dell'array in stringhe.

function main() {
    let array = [1,2,50,10,65,7]
    console.log(`sort default: ${array.sort()}`) // Gli elementi vengono trasformati in stringhe, pertanto viene letto solo il primo carattere, escludendo quelli a venire (per esempio l'elemento "10" diventa "1" e lo 0 viene rimosso, oppure l'elemento "65" diventa "6" e il 5 viene rimosso).
    console.log(`sort low to top: ${array.sort((firstN,secondN) => firstN-secondN)}`) // Con questa callback di una arrow function, sort ordina gli elementi numericamente in maniera crescente.
    console.log(`sort top to low: ${array.sort((firstN,secondN) => secondN-firstN)}`) // Così invece in maniera decrescente.
    console.log(`original array: ${array}`) // Il metodo .sort, però, modifica l'array originale, agendo come una view.
    let array2 = [1,2,3,10]
    console.log(`sort2 default: ${array2.toSorted()}`) // Il metodo .toSorted è identico al metodo .sort, con l'unica differenza che non agisce come una view, ma come una copy
    console.log(`original array: ${array2}`)
}

main()

// Il funzionamento della riga di codice "array.sort((firstN,secondN) => firstN-secondN)" è molto semplice:
// Nel momento in cui passiamo al metodo .sort una callback a una arrow funzione del genere (dove prima della freccia vengono inseriti i parametri, mentre dopo la freccia il return della funzione), il metodo .sort assegna automaticamente ai due parametri i primi due numeri dell'array (poi il secondo con il terzo, il terzo con il quarto e così via).
// Ciò che decide quale numero viene prima e quale viene dopo è il segno della differenza nel return. Se il segno è negativo, allora il parametro prima del "-" è considerato più piccolo del secondo parametro, se invece il segno è positivo il parametro prima del "-" è considerato più grande del secondo parametro.