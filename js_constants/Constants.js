const PI = 3.1415; // Come per python, le costanti sono variabili modificabili solo durante la loro prima assegnazione.
let radius, circumference;

document.getElementById("submit-button").onclick = function(){
    radius = Number(document.getElementById("radius-input").value);
    circumference = PI * radius**2;
    document.getElementById("circumference-result").textContent = `The Circumference is ${circumference}`;
}