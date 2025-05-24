// L'operatore spread "..." divide i componenti di una variabile in singoli elementi separati: Un'array lo divide in singoli elementi diversi, una stringa in un'insieme di char.

function checkMinMaxNoSpread() { // Questa funzione verifica il numero massimo e minimo di un'array senza l'operatore spread.
    let numbers = [5,2,6,8,3,1,5]
    let maximum = numbers[0], minimum = numbers[0]
    for(let i=0; i<numbers.length; i++) {
        if(maximum<numbers[i]) {
            maximum = numbers[i]
        }
    }
    for(i=0; i<numbers.length; i++) {
        if(minimum>numbers[i]) {
            minimum = numbers[i]
        }
    }
    console.log(maximum)
    console.log(minimum)
}


function checkMinMaxWithSpread() { // Anche questa funzione verifica il numero massimo e minimo di un'array, ma questa volta utilizzando l'operatore spread.
    let numbers = [5,2,6,8,3,1,5]
    maximum = Math.max(...numbers)
    minimum = Math.min(...numbers)
    console.log(maximum)
    console.log(minimum)
}


function divideStringInChars() { // L'operatore spread è anche in grado di dividere i caratteri di una stringa in singoli elementi
    let string = "Hello World"
    let chars = [...string] // I singoli caratteri vengono inseriti in un'array come elementi separati
    let charsUnited = chars.join("-") // Con il metodo .join("-") gli elementi dell'array vengono riassemblati in una stringa, ma ogni elemento è separato da un "-"
    console.log(chars)
    console.log(charsUnited)
}


function main() {
    console.log("No Spread:")
    checkMinMaxNoSpread()
    console.log("With Spread:")
    checkMinMaxWithSpread()
    console.log("String into chars with spread:")
    divideStringInChars()
}

main()
