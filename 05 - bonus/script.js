/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario'


// Dichiara la funzione qui.
function sayHiTo (string) {
    let date = new Date()  // Questo crea un nuovo oggetto Data che rappresenta il momento attuale.
    let time = date.getHours()  // Ottengo l'ora corrente (in un formato a 24 ore) dal nostro oggetto Data.
    let greeting   // dichiaro la variabile per il saluto che cambierà in base all'orario

    if ((time >= 0) && (time < 13)) {
        greeting = 'Buongiorno'
    } else if ((time >= 13) && (time < 17)) {
        greeting = 'Buon pomeriggio'
    } else {
        greeting = 'Buonasera'
    }

    return `${greeting} ${name}`
}


// Invoca la funzione qui e stampa il risultato in console
const greetings = sayHiTo(name)
console.log(greetings)  //Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


