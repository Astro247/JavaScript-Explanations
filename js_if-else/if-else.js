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

let stats = 70
approval = stats > 50 ? "hired" : "not hired"
console.log(approval)

// Un'altra alternativa ancora agli if-else sono gli switch che prendono una variabile da analizzare e la fanno passare attraverso diverse comparazioni dette 'case', con un case chiamato 'default' che esegue un codice qualora nessuno dei case abbia un match con la variabile selezionata nello switch. 

let day = 4
switch(day){ //Viene selezionato il valore della variabile "day"
    case 1: //La domanda qui è la seguente: day == 1? uguale per tutti gli altri case
        console.log("first day")
        break //Il break è importante poiché possono esserci più di un match nello stesso switch.
    case 2:
        console.log("second day")
        break
    case 3:
        console.log("third day")
        break
    case 4:
        console.log("fourth day")
        break
    case 5:
        console.log("five day")
        break
    default: //Il case 'default' viene considerato solo se tutti gli altri case non hanno alcun match.
        console.log("no day")
        break
}