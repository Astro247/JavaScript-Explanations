// Per creare un'elemento html in js esiste la proprietà "createElement("tipo di elemento")"
// Per poter posizionare quell'elemento html in un punto specifico della pagina esistono 3 modi:
/*
1) Il metodo .append() aggiunge un tag nel punto finale del suo parent.
2) Il metodo .prepend(), invece, aggiunge un tag all'inizio del suo parent.
3) Infine, il metodo .insertBefore() prende due parametri: Il tag che si vuole aggiungere e la posizione in cui si vuole aggiungere (quindi il punto in cui attualmente è presente un'altro tag che poi viene scalato).
*/

const title = document.createElement("h1")
title.textContent = "This is a title!"
title.style.textAlign = "center"
title.style.fontSize = "2rem"
document.body.prepend(title)

const finalTitle = document.createElement("h2")
finalTitle.textContent = "This is a final title!"
finalTitle.style.textAlign = "center"
finalTitle.style.fontSize = "2rem"
document.body.append(finalTitle)

const tomato = document.createElement("li")
tomato.textContent = "tomato"
tomato.style.backgroundColor = "lightgreen"

const fruits = document.querySelectorAll("#fruits li")
document.getElementById("fruits").insertBefore(tomato, fruits[2])

// Per rimuovere un'elemento è sufficiente utilizzare .removeChild()

