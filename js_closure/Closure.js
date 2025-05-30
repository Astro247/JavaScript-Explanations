// Una closure è una funzione che ricorda l'ambiente in cui è stata creata, in altre parole è una funzione creata all'interno di un'altra funzione.

function outer() {
    let message = "hello world"

    function inner() { // La funzione "inner" è stata creata dentro la funzione "outer", pertanto tutto ciò che è stato dichiarato dentro la funzione "outer" è automaticamente dichiarato anche dentro la funzione "inner"
        console.log(message) // "message" è una variabile che la funzione già conosce, non è necessario passarlo alla funzione come parametro.
    }

    inner()
}


function main() {
    outer()
}

main()