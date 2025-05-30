// L'oggetto "Date" ritorna di default la data attuale, contiene diversi setter per modificare la data e diversi getter per poterla visualizzare.

function main() {
    let date = new Date()
    console.log(`Current Date: ${date}`) // La variabile "date" adesso contiene le keys: giorno della settimana, mese, numero, anno, ore, minuti, secondi e infine il luogo nella quale l'orario è stato preso.
    // Questa serie di get restituiscono dati specifici sulla data attuale
    console.log(`Current Year: ${date.getFullYear()}`)
    console.log(`Current Month: ${date.getMonth()}`)
    console.log(`Current Month Number: ${date.getDate()}`)
    console.log(`Current Day: ${date.getDay()}`)
    console.log(`Current Hours: ${date.getHours()}`)
    console.log(`Current Minutes: ${date.getMinutes()}`)
    console.log(`Current Seconds: ${date.getSeconds()}`)
    console.log(`Current Milliseconds: ${date.getMilliseconds()}`)
    console.log(`Milliseconds passed since 01/01/1970: ${date.getTime()}`)
    
}

main()