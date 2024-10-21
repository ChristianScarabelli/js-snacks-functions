/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario'


// Dichiara la funzione qui.
// Funzione tradizionale 
function sayHiTo (string) {
    return `Ciao ${name}`
}

// Arrow function ritorno implicito
const sayHiTo = (name) => `Ciao ${name}`
console.log(sayHiTo(name))  //Risultato atteso se si passa 'Mario': // ciao Mario

// Invoca la funzione qui e stampa il risultato in console
const greetings = sayHiTo(name)
console.log(greetings)  //Risultato atteso se si passa 'Mario': // ciao Mario

