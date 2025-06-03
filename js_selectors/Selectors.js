// È possibile accedere a specifici elementi o attributi dei tag HTML in JavaScript utilizzando il DOM, navigando tra i vari parent con la notazione a punti.
// Esistono diversi selettori per poter accedere a specifici elementi di un file html, ma esiste un preset che non richiede alcun tipo di selettore per tag html che si ripetono sicuramente una sola volta.

document.body.style.backgroundColor = "gray" // Siccome un file html può avere solo un tag "body", non è necessario un selettore che specifichi a quale body io mi stia riferendo.

try {
    document.body.style.h1.backgroundColor = "green" // Dato che possono esserci più tag "h1" in un file html è necessario un selettore per determinare a quali h1 mi sto riferendo.
}
catch(error) {
    console.log("wait, that's illegal")
}

// Per potersi riferire ad tag html con il suo id esiste il selettore "getElementById".

document.getElementById("finalH2").style.backgroundColor = "green"

// Per potersi riferire a più tag html che hanno la stessa classe esiste il selettore "getElementsByClassName", che ritorna una collezione html, simile ad un'array.

let collection = document.getElementsByClassName("box")
Array.from(collection).forEach((element) => { // Con "Array.from(collection)" la collezione è diventata un'array, in questo modo è possibile applicare il metodo ".forEach()"
    element.style.backgroundColor = "yellow"
})

// Per potersi riferire a dei tag html basandosi solo sul nome del tag esiste il selettore "getElementsByTagName", che anch'esso ritorna una collezione html.

collection = document.getElementsByTagName("h1")
Array.from(collection).forEach((element) => {
    element.style.backgroundColor = "blue"
})

// Il selettore "querySelector" si riferisce solo al primo tag/classe che corrisponde a ciò che gli è stato passato che trova, escludendo tutti gli altri.

document.querySelector("li").style.backgroundColor = "pink"

// Il selettore "querySelectorAll", invece, si riferisce a tutti i tag/classi che corrispondono a ciò che gli è stato passato.

collection = document.querySelectorAll("ul") // Siccome si sta riferendo a più elementi, questo selettore ritorna una "NodeList", simile ad un'array.
Array.from(collection).forEach((element) => {
    element.style.backgroundColor = "purple"
})