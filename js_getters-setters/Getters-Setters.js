// Le funzioni "get" e "set" sono quasi completamente indipendenti fra loro.
// I set sono utilili per aggiungere delle modifiche/condizioni al valore di una key nel momento in cui questa viene inserita in input.
// I get, invece, vengono richiamati solo nel momento in cui una key viene letta o restituita in output.

class Person {
    constructor(name, age) {
        this.name = name // Avendo inserito "this.name", automaticamente vengono cercati nella classe tutti i set corrispondenti al nome di quella key, in questo caso "name".
        this.age = age
    }
    set name(value) { // Questo set viene eseguito nel momento in cui un valore viene assegnato alla key "name".
        this._name = value.trim() //value è un parametro che prende il valore assegnato a "name", mentre "_name" è una variabile copia di "name".
        // Se avessi utilizzato "this.name" invece di "this._name" il set sarebbe entrato in un ciclo nel quale si sarebbe auto-richiamato all'infinito.
    }
    get name() { // Questo set viene eseguito solo quando la key "name" viene letta dopo la sua assegnazione.
        return this._name.toUpperCase()
    }
}

function main() {
    let myName = new Person(" mario ", 15) // Il set viene richiamato, e " mario " diventa "mario".
    console.log(`My name is ${myName.name}`) // Il get viene richiamato, così "mario" diventa "MARIO".
}

main()

// Quando il get viene richiamato, il valore passato alla key "name" viene modificato, quindi non è una modifica temporanea.