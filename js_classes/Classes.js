// Le classi sono contenitori di un costruttore, che crea l'oggetto (dizionario), e di altre funzioni che riutilizzano i valori delle key contenute nel costruttore, richiamabili con delle callback come metodi.

const TAX = 0.005

class Market {
    constructor(item, price, quantity) { // Vengono inseriti nel costruttore i dati presi in input
        this.item = item // Ogni dato viene dichiarato con "this" creando una key (in questo caso "this.item") e assegnandoci il valore preso in input (in questo caso "item")
        this.price = price
        this.quantity = quantity
    }

    CalculateAndPrintTotal() { // Essendo dentro la stessa classe, non è necessario ripassare alla funzione gli stessi parametri del costruttore
        let total = (this.price - (this.price * TAX)) * this.quantity // Pur essendo dentro la stessa classe, è comunque importante specificare "this." poiché è così che le key sono state dichiarate.
        console.log(`Total is: ${total.toFixed(2)}$`)
    }
}

class Operations {
    static PI = 3.1415 // La parola chiave "static" ti permette di richiamare un dato o una funzione senza la necessità di dichiarare un'istanza.

    static getCircumference(radius){
        return (2 * this.PI * radius).toFixed(2)
    }
}

class Animal {
    constructor(name) {
        this.name = name
    }
    makeNoise() {
        console.log(`${this.name} makes a noise`)
    }
}

class Dog extends Animal { // Con la parola chiave "extends", sia la funzione costruttore che tutti i metodi della classe "Animal" diventano automaticamente anche parte di "Dog"
    makeBark() {
        console.log(`${this.name} barks`) // Essendo il costruttore adesso parte integrante della classe "Dog", la variabile "name" si riferisce a quella dichiarata nella classe "Animal"
    }
}


function main() {
    let cart = new Market("T-Shirt", 20, 3) // I dati vengono passati alla classe, che necessità di un "new" per essere invocata in quanto contiene un costruttore (qualcosa che genera un'oggetto). Nel momento in cui viene utilizzato "new", quindi viene creato un'oggetto con una classe, viene generata un "istanza" e viene salvata nella variabile a cui è assegnata.
    cart.CalculateAndPrintTotal() // E' possibile accedere alle funzioni della classe semplicemente richiamandole come metodi.
    console.log(Operations.getCircumference(5))
    let myDog = new Dog("fuffy")
    myDog.makeNoise()
    myDog.makeBark()
}

main()