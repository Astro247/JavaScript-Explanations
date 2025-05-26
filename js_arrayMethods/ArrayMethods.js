// Il metodo .forEach prende come argomento una callback e automaticamente vengono dichiarati elementi dell'array, indici e array di riferimento (elements, index, array).
// Questo metodo cicla per ogni elemento di un'array eseguendo il codice presente nella callback con i parametri già dati dal metodo.

// Il metodo .map funziona esattamente come il metodo .forEach, con la differenza che genera un nuovo array in una nuova variabile con i dati modificati dell'array di partenza.

// Il metodo .filter ha la stessa logica di .map, genera un'array partendo dai dati di un'array di partenza, ma i dati del nuovo array verranno inseriti in esso solo se rispettano una specifica condizione.

function multiplyNumbers(element, index, array) { //Parametri element, index e array già in dotazione
    array[index] = element * 2
    console.log(`Original Value: ${element}`) // Nonostante il valore è stato modificato, element rimane sempre quello di partenza
    console.log(`Modified Value: ${array[index]}`) // Ciò che invece è stato modificato, ossia array[index] (assegnato a element * 2), mostra un cambiamento
}


function squareNumbers(element) { // Stando solo modificando gli elementi e non l'array di partenza, non si deve assegnare l'elemento modificato all'indice dell'elemento di partenza all'array, altrimenti anche quello di partenza finirebbe sovrascritto
    return element ** 2 // Essendo che in questo caso questa funzione è da assegnare ad una nuova variabile, è necessario un return
}


function checkOddNumbers(element) {
    return element === 100 || element === 64
}


function main() {
    let numbers = [1,2,3,4,5]
    numbers.forEach(multiplyNumbers) // La funzione viene applicata ad ogni elemento dell'array come se fosse un ciclo.

    let newNumbers = numbers.map(squareNumbers) //Genera un nuovo array senza modificare il precedente, alla nuova variabile è assegnato l'array di partenza (da cui deve prendere gli elementi), seguito dal metodo "map" che richiama la funzione desiderata.
    console.log("(.map)New Array:")
    console.log(newNumbers)
    console.log("(.map)Previous Array:")
    console.log(numbers)

    let oddNumbers = newNumbers.filter(checkOddNumbers)
    console.log("(.filter)New Array:")
    console.log(oddNumbers)
}

main()
