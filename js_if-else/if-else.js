// Gli operatori if-else funzionano esattamente come in C/C++

let age

document.getElementById("submit").onclick = function() {
    age = document.getElementById("age").value
    
    if(age==0) {
        document.getElementById("text").textContent = `bro, u either typed a 0 or not a number >:(`
    }
    else if(age>0 && age<5) { //'&&' è un 'and'
        document.getElementById("text").textContent = `u are a baby.`
    }
    else if(age>4 && age<13) {
        document.getElementById("text").textContent = `u are a child.`
    }
    else if(age>13 && age<20) {
        document.getElementById("text").textContent = `u are a teenager.`
    }
    else if(age>19) {
        document.getElementById("text").textContent = `u are cool.`
    }
    else if(age<0 || age>100) { //'||' è un 'or'
        document.getElementById("text").textContent = `u are not a human.`
    }
}

// Un'alternativa all'if-else è l'operatore ternario, si utilizza così: 'condizione ? codice-True : codice-False'

number = 5
number > 5 ? console.log("Number is higher than 5") : console.log("Number is less than 5") //La condizione è "number>5", se ritorna un bool true allora il primo console.log viene eseguito, in caso ritorni un bool false il secondo console.log viene eseguito.
