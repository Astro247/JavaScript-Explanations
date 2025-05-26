// Gli oggetti in JavaScript equivalgono esattamente ai dizionari in Python, sono varaibili che contengono variabili chiave:valore (nome della variabile : il suo valore).


function functionHello() {
    return "hello world"
}


function car(type, color) { // Questo genere di funzioni che hanno il compito di creare oggetti si chiamano "constructors" (costruttori).
    this.type = type // Utilizzare "this.type" equivale a scrivere "car.type".
    this.color = color
}


function main() {
    let object = {
        name: "Luigi",
        hello: functionHello(), // Utilizzare come valore una callback assegna alle key il return della funzione.
        sayHello: function(){return `Hello ${this.name}`} // "this" fa riferimento alla key dell'oggetto su cui si è attualmente.
    }

    object.hello = "hello mondo" 
    console.log(object["hello"]) //Inserire il nome della proprietà come stringa e come indice di un'array con array l'oggetto si riferisce al valore della key corrispondente al nome della stringa.
    console.log(object.hello) //Anche così, inserendo il nome dell'oggetto seguito dal nome della proprietà inserita come metodo, si riferisce al valore della key corrispondente al nome del metodo.
    
    console.log(object.sayHello()) // In quanto funzione, per fare un callback è necessario aggiungere () dopo il metodo.
    
    let firstCar = new car("Ford", "red") // La parola chiave "new" serve a generare un'oggetto partendo da una funzione.
    let secondCar = new car("Ferrari", "yellow")
    console.log(firstCar)
    console.log(secondCar)
}  

main()