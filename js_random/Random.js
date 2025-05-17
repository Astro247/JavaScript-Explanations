//La funzione Math.random() sceglie un numero random in un range da 0 al numero moltiplicato alla funzione-1.
//Sommando in seguito un numero, viene modificato il valore massimo e il valore minimo che la funzione può assumere.

let maximum, minimum, random

document.getElementById("roll-button").onclick = function() {
    maximum = Number(document.getElementById("max").value)
    minimum = Number(document.getElementById("min").value)
    if (maximum<minimum) {
        document.getElementById("error").textContent = `The minimum is larger than the maximum!`
        document.getElementById("number-shown").textContent = `:/`
    }
    else {
        document.getElementById("error").textContent = ``
        random = Math.floor(Math.random() * (maximum - minimum)) + minimum //Il numero più piccolo nel range è "minimum", mentre il più grande è "maximum"
        document.getElementById("number-shown").textContent = random
    }
}