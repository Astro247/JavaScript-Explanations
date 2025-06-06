/*
La funzione .addEventListener può essere utilizzata anche per gestire input da tastiera. 
A differenza degli eventi del mouse, dove è importante specificare l'elemento HTML su cui l'interazione avviene (come un bottone o un div), 
nel caso della tastiera l'evento riguarda l'intera pagina: per questo motivo il target più comune è il document.

I principali eventi da tastiera sono:
- "keydown": viene attivato quando un tasto viene premuto;
- "keyup": viene attivato quando un tasto viene rilasciato.

Questi eventi forniscono diverse informazioni utili, come ad esempio quale tasto è stato premuto 
e se sono stati usati anche altri tasti in contemporanea come Shift, Alt, Ctrl, Tab eccetera.
*/

const box = document.getElementById("movingFace")
const movement = 10
let x = 0, y = 0

document.addEventListener("keydown", (event) => {
    console.log(event) // Nella console è possibile vedere tutti i valori nascosti, booleani e non, associati al modo in cui un tasto da tastiera è stato premuto.
    if(event.key.startsWith("Arrow")) { // "event.key" ritorna una stringa contenente il nome del tasto premuto, le freccette cominciano tutte con "Arrow"
        event.preventDefault() // Questo comando impedisce il comportamento predefinito che un browser eseguirebbe automaticamente in risposta a un evento (per esempio previene che, dopo aver premuto l'ArrowRight, il viewport si sposti in automatico a destra).

        box.textContent = ":S"
        switch(event.key) {
            case "ArrowUp":
                y = y - movement
                break
            case "ArrowDown":
                y = y + movement
                break
            case "ArrowLeft":
                x = x + movement
                break
            case "ArrowRight":
                x = x - movement
                break
        }

        box.style.top = `${y}px` // Assegna al position relative del tag html la nuova posizione "top" in pixel
        box.style.right = `${x}px` // Stesso discorso, ma per la posizione "right".
    }
})
document.addEventListener("keyup", (event) => {
    box.textContent = ":)"
})