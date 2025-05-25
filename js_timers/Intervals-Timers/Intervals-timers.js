// Gli intervalli si distinguono in due funzioni diverse: setInterval, che definisce quale funzione deve ripetersi e in quale intervallo di tempo, e clearInterval, che definisce quando l'intervallo deve interrompersi.
// I timer, invece, sono degli intervalli che vengono ripetuti una sola volta.

globals = {
    count: 0,
    maxIntervals: 5
}


function printNumbers(globals, interval) {
    console.log(globals.count) //Ad ogni intervallo printa nella console il valore attuale di "count"
    if(globals.count===globals.maxIntervals) {
        clearInterval(interval) //Questa riga di codice interrompe l'intervallo
        console.log("End Numbers.")
    }
    globals.count += 1
}


function printSentence() {
    setTimeout(() => {console.log("hello")}, 1000)
    setTimeout(() => {console.log("world")}, 1500)
}


function main() {
    let interval = undefined
    console.log("Numbers:")
    interval = setInterval(() => {printNumbers(globals, interval)}, 300) //L'intervallo prende 2 parametri: una funzione da eseguire e il numero di millisecondi da attendere fra la prima esecuzione e la seconda (della stessa funzione).
    printSentence()
}

main()

// Il problema con intervalli e timer è che a javascript non importa del fatto che una funzione deve essere ripetuta più volte in un'intervallo oppure ha un timer, ma continua a leggere ed eseguire il resto del codice contemporaneamente.