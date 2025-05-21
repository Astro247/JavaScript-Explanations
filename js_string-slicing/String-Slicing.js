// Il metodo .slice() prende due positional argument, entrambi indici di una stringa di riferimento, che tagliano la stringa originale.
// Il primo positional argument è l'indice di inizio della nuova stringa, il secondo invece è l'indice finale (il secondo indice è escluso).
// Se non si inserisce il secondo positional argument allora è sottointeso che deve prendere tutta la stringa partendo dall'indice selezionato nel primo positional argument.

let email, username, extension 

document.getElementById("submit").onclick = function() {
    email = document.getElementById("email").value
    username = email.slice(0, email.indexOf("@")) // Nella variabile 'username' è salvato il valore della stringa 'email' che va dall'indice 0 all'indice in posizione "@" - 1 (in quanto l'ultimo indice è escluso).
    extension = email.slice(email.indexOf("@") + 1) // Nella variabile 'extension' viene salvato il valore della stringa 'email' che va dall'indice in posizione "@" + 1 (dato che il primo indice è incluso) in poi.
    document.getElementById("username").textContent = `Your username is ${username}`
    document.getElementById("extension").textContent = `Your extension is ${extension}`
}
