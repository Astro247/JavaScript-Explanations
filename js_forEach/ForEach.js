// Il metodo .forEach prende come argomento una callback e automaticamente vengono dichiarati elementi dell'array, indici e array di riferimento (elements, index, array).
// Questo metodo cicla per ogni elemento di un'array eseguendo il codice presente nella callback con i parametri già dati dal metodo.



function multiplyNumbers(element, index, array) { //Parametri element, index e array già in dotazione
    array[index] = element * 2
    console.log(`Original Value: ${element}`) // Nonostante il valore è stato modificato, element rimane sempre quello di partenza
    console.log(`Modified Value: ${array[index]}`) // Ciò che invece è stato modificato, ossia array[index] (assegnato a element * 2), mostra un cambiamento
}


function main() {
    numbers = [1,2,3,4,5]
    numbers.forEach(multiplyNumbers)
}

main()

// E' solitamente più comodo fare funzioni diverse con più .forEach per evitare di rientrare in problemi di questo tipo.