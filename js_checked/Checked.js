document.getElementById("submit").onclick = function() {
    if(document.getElementById("adult-check").checked) { // .checked è una proprietà booleana, ritorna "true" se, in questo caso, il checkbox è stato premuto, in caso opposto ritorna "false".
        document.getElementById("age").textContent = `You are an adult.`
    }
    else {
        document.getElementById("age").textContent = `You are not an adult.`
    }
    if(document.getElementById("eur").checked) {
        document.getElementById("continent").textContent = `You are european.`
    }
    else if(document.getElementById("afr").checked) {
        document.getElementById("continent").textContent = `You are african.`
    }
    else if(document.getElementById("ant").checked) {
        document.getElementById("continent").textContent = `You are antartican.`
    }
    else if(document.getElementById("asi").checked) {
        document.getElementById("continent").textContent = `You are asian.`
    }
    else if(document.getElementById("nam").checked) {
        document.getElementById("continent").textContent = `You are american (north).`
    }
    else if(document.getElementById("sam").checked) {
        document.getElementById("continent").textContent = `You are american (south).`
    }
    else if(document.getElementById("ocn").checked) {
        document.getElementById("continent").textContent = `You are oceanian.`
    }
    else {
        document.getElementById("continent").textContent = `You are not on earth (or you're on the ocean).`
    }
}