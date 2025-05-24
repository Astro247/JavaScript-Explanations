// Come per gli altri linguaggi di programmazione, gli array sono variabili contenenti altre variabili.

function main() {
    let fruits = ["orange", "apple", "mango", "banana"] // In questo caso l'array "fruits" contiene 4 stringhe

    console.log("elements not sorted")
    for(i=0; i<fruits.length; i++) { // In questo modo il ciclo printa per ogni iterazione l'elemento corrispondente all'indice 'i' dell'array, fermandosi quando "i=fruits.length", metodo che ritorna il numero di elementi nell'array.
        console.log(fruits[i])
    }

    console.log("elements sorted")
    fruits.sort() // Questo metodo sorta alfabeticamente/numericamente gli elementi dell'array
    for(i=0; i<fruits.length; i++) {
        console.log(fruits[i])
    }

    console.log("elements reversed")
    fruits.reverse() // Questo metodo inverte l'ordine attuale degli elementi dell'array.
    for(i=0; i<fruits.length; i++) {
        console.log(fruits[i])
    }

    if(fruits.indexOf("tomato") === -1) { // Se un'elemento non è presente nell'array, il suo indice è "-1"
        console.log("There's no element called like that")
    }

    fruits.push("pickle") // '.push' aggiunge un'elemento nell'ultima posizione dell'array
    fruits.unshift("bread") // '.unshift' aggiunge un'elemento nella prima posizione dell'array
    fruits.pop() // '.pop' rimuove un'elemento nell'ultima posizione dell'array
    fruits.shift() // '.shift' rimuove un'elemento nella prima posizione dell'array
}

main()