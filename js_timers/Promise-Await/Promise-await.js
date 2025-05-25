//Utilizzare le Promise/await e le async functions è molto più conveniente per evitare problemi di lettura del codice asincroni con i timer o intervalli.
//Un Promise "promette" di ritornare un valore dopo che la sua funzione "resolve" viene richiamata, impostando come funzione interna della Promise un setTimeOut che richiama la funzione "resolve" dopo tot millisecondi e posizionare da un'altra parte nel codice un "await" che attende che la Promise venga risolta (quindi che resolve venga richiamata) genera una maggiore sincronizzazione piuttosto che usare nativamente setTimeOut e setInterval

function waitOneSecond() {
    return new Promise (resolve => setTimeout(resolve, 1000)) //Dopo 1000 millisecondi viene eseguita la funzione "resolve" come primo parametro di setTimeout, quando resolve viene eseguita la Promise viene risolta con successo.
}


async function printHello() { //Una funzione async è tale perché permette di ricevere dei Promise e di utilizzare la parola chiave "await"
    for(let i=0; i<6; i++) {
        await waitOneSecond() //Prima che il resto del codice viene eseguito, "await" aspetta che Promise venga risolta con successo.
        console.log("hello")
    }
}


async function main() {
    await printHello() //Prima che il resto del codice venga eseguito deve essere eseguita "PrintHello()" completamente
    console.log("world!")
}

main()

//Se come funzione interna di una Promise un resolve non viene chiamata mai, la Promise non viene risolta mai.