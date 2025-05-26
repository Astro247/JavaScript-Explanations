// Gli oggetti in JavaScript equivalgono esattamente ai dizionari in Python, sono varaibili che contengono variabili chiave:valore (nome della variabile : il suo valore).


function sayHello() {
    return "hello world"
}


function main() {
    let objectPerson = {
        name: "Astro",
        age: 19,
        hello: sayHello() // E' possibile richiamare come valore qualsiasi cosa, anche callbacks.
    }

    let objectLetters = {
        name: "Luigi",
        hello: function(){return `Hello ${this.name}`} // "this" fa riferimento alla key dell'oggetto su cui si è attualmente.
    }

    for(let index in objectPerson) {
        console.log(`${index} = ${objectPerson[index]}`) // Il primo index si riferisce alle key, il secondo invece si riferisce ai valori delle key ("index" è una stringa).
    }

    objectPerson.hello = "hello mondo" 
    console.log(objectPerson["hello"]) //Inserire il nome della proprietà come stringa e come indice di un'array con array l'oggetto si riferisce al valore della key corrispondente al nome della stringa.
    console.log(objectPerson.hello) //Anche così, inserendo il nome dell'oggetto seguito dal nome della proprietà inserita come metodo, si riferisce al valore della key corrispondente al nome del metodo.
    
    console.log(`Second object ${objectLetters.hello()}`) // In quanto funzione, per fare un callback è necessario aggiungere () dopo il metodo.
 
}  

main()