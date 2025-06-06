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

const viewportWidth = window.innerWidth // Assegna alla variabile la lunghezza in px del viewport.
const viewportHeight = window.innerHeight // Qui invece assegna l'altezza del viewport.

const box = document.getElementById("movingFace")
const movement = 10
let x = 0
let y = 0

document.addEventListener("keydown", (event) => {
    console.log(event) // Nella console è possibile vedere tutti i valori nascosti, booleani e non, associati al modo in cui un tasto da tastiera è stato premuto.
    
    if(!event.key.startsWith("Arrow")) return // "event.key" ritorna una stringa contenente il nome del tasto premuto, le freccette cominciano tutte con "Arrow"

    const boxInfo = box.getBoundingClientRect(); // Crea un'oggetto contenente tutte le informazioni (height, width, top, left..) della variabile "box"
    const boxWidth = boxInfo.width; // Ricava i valori delle key "width" e "height"
    const boxHeight = boxInfo.height;

    box.textContent = ":S"
    switch(event.key) {
        case "ArrowUp":
            if (y - movement >= 0) y -= movement  // Se il tag è in posizione "y = 0" allora non può muoversi ulteriormente in alto
            break
        case "ArrowDown":
            if(y + movement + boxHeight <= viewportHeight) y += movement // Se la posizione in y dell'oggetto + 10px + la sua height di default superano la height della viewport allora il tag non si muove
            break
        case "ArrowLeft":
            if(x + movement + boxWidth <= viewportWidth) x += movement // Se la posizione in x dell'oggetto + 10px + la sua width di default superano la width del viewport, il tag non si muove a sinistra
            break
        case "ArrowRight":
            if(x - movement - boxWidth >= -viewportWidth) x -= movement // Se la posizione in x dell'oggetto - 10px - la sua width di default non superano la width del viewport in negativo, il tag non si muove a destra
            break
        }
        console.log(x)
        box.style.top = `${y}px` // Assegna al position relative del tag html la nuova posizione "top" in pixel
        box.style.right = `${x}px` // Stesso discorso, ma per la posizione "right".
})
document.addEventListener("keyup", (event) => {
    box.textContent = ":)"
})