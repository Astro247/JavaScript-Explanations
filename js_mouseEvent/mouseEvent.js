/*
Il metodo `.addEventListener` in JavaScript è simile agli pseudo-selettori in CSS, perché consente di eseguire del codice in risposta a specifiche interazioni dell'utente, come il passaggio del mouse o un clic su un elemento.

Questa funzione accetta due parametri: 
1. Il tipo di evento da ascoltare (ad esempio `"click"` o `"mouseover"`).
2. Una callback, ovvero il blocco di codice che verrà eseguito quando l'evento si verifica.

Se vogliamo aggiungere un evento a un determinato tag e far sì che venga eseguito quando il mouse ci passa sopra o ci clicca, possiamo usare il parametro `event` della funzione callback. Attraverso `event.target` possiamo accedere direttamente all'elemento che ha generato l’evento.

Nel caso in cui invece vogliamo che l’evento venga gestito da un altro elemento (non quello su cui avviene l’interazione), possiamo semplicemente selezionarlo tramite il DOM usando `document.getElementById`, `querySelector`, o metodi simili, senza dover ricorrere a `event.target`.
*/

const box = document.getElementById("box")
const button = document.getElementById("button")

button.addEventListener("mouseover", (event) => { // La callback viene chiamata quando il mouse passa sopra il box del tag.
    box.style.backgroundColor = "yellow"
    box.textContent = "Don't do it"
})

button.addEventListener("mouseout", (event) => { // Questa callback, invece, viene chiamata quando il mouse esce dal box del tag.
    box.style.backgroundColor = "greenyellow"
    box.textContent = "hello"
})

button.addEventListener("click", (event) => { // Infine, questa callback viene chiamata quando il mouse preme sul box del tag.
    box.style.backgroundColor = "red"
    box.textContent = ">:("
})