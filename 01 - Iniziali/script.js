/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.
// Funzione tradizionale
function firstCharOfEveryWord (array) {

    let firstLetters = []  // Creo una variabile con il nuovo array, che si riempirà dopo il ciclo for

    for (let i = 0; i < names.length; i++) {
        const firstChar = names[i][0]  // Prendo il primo carattere di ogni indice di ogni elemento dell'array names
        firstLetters.push(firstChar)  // Pusho la prima lettera dentro l'array vuoto
    }

    return firstLetters  // ritorniamo il nuovo array alla fine della funzione
}

function firstCharOfEveryWord (array) {
    return array.map(name => name[0]);  // Restituisce un nuovo array con le prime lettere con il metodo map
}

// //  arrow function con ritorno ESPLICITO
const firstCharOfEveryWord = (array) => {
    let firstLetters = [];
    for (let i = 0; i < array.length; i++) {
        const firstletter = array[i][0];
        firstLetters.push(firstletter);
    }
    return firstLetters;  // Risultato esplicito
}

//  Arrow function con ritorno IMPLICITO
const firstCharOfEveryWord = array => array.map(name => name[0])



// Invoca la funzione qui e stampa il risultato in console
const firstLettersArray = firstCharOfEveryWord(names)
console.log(firstLettersArray)  //Risultato atteso: ["A", "L", "M", "A", "G", "A"]

