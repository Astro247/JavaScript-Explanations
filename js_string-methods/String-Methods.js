let username = "    Astro t"

console.log(`Original String: ${username}`)

//charAt = Trova un carattere nella stringa grazie al suo indice come positional argument
console.log(`charAt = ${username.charAt(6)}`)

//indexOf = Trova l'indice del primo carattere corrispondente al carattere inserito nel positional argument
console.log(`indexOf = ${username.indexOf("t")}`)

//lastIndexOf = Trova l'indice dell'ultimo carattere corrispondente al carattere inserito nel positional argument
console.log(`lastIndexOf = ${username.lastIndexOf("t")}`)

//length = Ritorna la lunghezza della stringa
console.log(`length = ${username.length}`)

//trim = Cancella tutti gli spazi all'inizio e alla fine della stringa
console.log(`trim = ${username.trim()}`)

//toUpperCase = Trasforma tutti i caratteri della stringa in maiuscolo
console.log(`toUpperCase = ${username.toUpperCase()}`)

//toLowerCase = Trasforma tutti i caratteri della stringa in minuscolo
console.log(`toLowerCase = ${username.toLowerCase()}`)

//startsWith = Ritorna un bool True se la stringa inizia con il carattere messo nel positional argument
console.log(`startsWith = ${username.startsWith("a")}`)

//endsWith = Ritorna un bool True se la stringa finisce con il carattere messo nel positional argument
console.log(`endsWith = ${username.endsWith("t")}`)

//includes = Ritorna un bool True se la stringa contiene almeno un carattere corrispondente a quello inserito nel positional argument
console.log(`includes = ${username.includes("g")}`)

//replaceAll = Rimpiazza tutti i caratteri della stringa specificati come primo positional argument con il carattere specificato nel secondo positional argument
console.log(`replaceAll = ${username.replaceAll("t", "h")}`)

//padStart = Come primo positional argument viene specificata la lunghezza minima della stringa, come secondo positional argument viene specificato il carattere che, partendo dall'inizio della stringa, riempie la stringa per raggiungere la lunghezza minima
console.log(`padStart = ${username.padStart("15", "-")}`)

//padEnd = Come primo positional argument viene specificata la lunghezza minima della stringa, come secondo positional argument viene specificato il carattere che, partendo dalla fine della stringa, riempie la stringa per raggiungere la lunghezza minima
console.log(`padEnd = ${username.padEnd("15", "-")}`)

