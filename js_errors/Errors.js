/*
Il blocco try serve per eseguire del codice che potrebbe generare un errore. Se durante l'esecuzione si verifica un errore, l'esecuzione del try si interrompe e passa automaticamente al blocco catch, che riceve l'errore come parametro.

Il blocco catch entra in gioco solo se nel try si verifica un errore. In quel caso, possiamo gestire l'errore in modo controllato, evitando che l'intero programma si blocchi. Una volta gestito l'errore, l'esecuzione del codice prosegue normalmente dopo il blocco try-catch.

Infine, il blocco finally viene eseguito sempre, indipendentemente dal fatto che si sia verificato un errore oppure no. Questo è utile per eseguire operazioni finali, come chiudere connessioni o liberare risorse, che devono avvenire in ogni caso.
*/

function main() {
    document.getElementById("submit").onclick = function() {
        const dividend = Number(document.getElementById("dividend").value)
        const divisor = Number(document.getElementById("divisor").value)

        try {
                if(isNaN(dividend) || isNaN(divisor)) {
                    throw new Error("You must insert numbers!") // "throw" genera un'errore volontariamente, assegnando come positional argument il valore della key "error" nella classe Error, che poi viene richiamato nel catch.
                }
                else if(divisor === 0 && dividend !== 0) {
                    throw new Error("You can't divide by zero!")
                }
                else if(divisor === 0 && dividend === 0) {
                    throw new Error("stop >:(")
                }
                const result = dividend/divisor
                document.getElementById("result").textContent = `Result: ${result}` 
            }
        catch(error) {
                document.getElementById("result").textContent = error
                
            }
        finally {
            console.log("finally block has been read")
        }
    }
}
main()