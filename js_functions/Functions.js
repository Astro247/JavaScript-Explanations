// Come per gli altri linguaggi di programmazione, le funzioni sono dei blocchi di codice comodamente riciclabili nel codice.

function make_sum(number_one, number_two) { // I parametri sono delle variabili locali esistenti solo all'interno della funzione.
    let result = number_one + number_two
    return result //Richiamare questa funzione ritorna la variabile "result".
}

function say_hello() { //Una funzione non necessita di un return per essere richiamata.
    console.log("Hello")
}

function main() {
    let number_one = 5, number_two = 5
    console.log(make_sum(number_one, number_two)) //Gli argomenti sono i valori assegnati ai parametri della funzione. Se sono positional argument, l'ordine dei parametri e argomenti conta, se sono keyword argument allora l'ordine non conta.
    console.log(make_sum(8, 1))
    say_hello()
}

main()