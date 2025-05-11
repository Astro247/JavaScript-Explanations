//Per poter prendere in input degli elementi da un file html è possibile farlo in due modi: creando un prompt, ossia un piccolo pop-up che chiede un'elemento in input, oppure utilizzando i tag <input> di html.

let username_prompt;
username_prompt = window.prompt("What's your username?"); //Genera un prompt che prende una stringa in input, la stringa viene salvata nella variaile "username_prompt".
console.log(`Username prompt is: ${username_prompt}`);

let username_button, text;
document.getElementById("submit-button").onclick = function(){ //Genera una funzione che viene eseguita solo nel momento in cui il bottone con id "submit-button" viene premuto, conseguenza della proprietà '.onclick'.

    username = document.getElementById("username-input").value; //Viene salvato ciò che è stato inserito in input dall'utente, la proprietà .value ritorna ciò che viene inserito in input dall'utente (quindi usato per input, textarea ecc.).
    text = document.getElementById("input-text-area").value;

    document.getElementById("title").textContent = `Welcome, ${username}`; //Viene mdificato il tag con id "title", la proprietà .textContent modifica elementi non interagibili direttamente dall'utente nella pagina (come div, h1, span ecc.) 
    console.log(`Your username is ${username}`)
    console.log(`Your text is "${text}"`)
}

