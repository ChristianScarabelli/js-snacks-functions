/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
// Funzione tradizionale
function namesWithAFirstChar (array, letter) {
    let namesWithA = []  // Creo una variabile con il nuovo array, che si riempirà dopo il ciclo for

    for (let i = 0; i < names.length; i++) {
        const firstChar = array[i][0]  // Prendo il primo carattere di ogni nome dell'array names
        if (firstChar === letter) {    // Controllo se il primo carattere è uguale alla lettera passata come parametro
            namesWithA.push(array[i])  // Pusho il nome dentro l'array vuoto
        }
    }
    return namesWithA  // ritorniamo il nuovo array alla fine della funzione
}

// Arrow function con corpo implicito usando filter
const namesWithAFirstChar = (array, letter) => 
    array.filter(name => name[0] === letter);

// Invoca la funzione
const onlyNamesWithA = namesWithAFirstChar(names, 'A');
console.log(onlyNamesWithA);  // Risultato atteso: ["Anna", "Adele", "Alessandra"]

// Arrow function con metodo esplicito
const namesWithAFirstChar = (array, letter) => {
    let namesWithA = []  // Creo una variabile con il nuovo array, che si riempirà dopo il ciclo for

    for (let i = 0; i < names.length; i++) {
        const firstChar = array[i][0]  // Prendo il primo carattere di ogni nome dell'array names
        if (firstChar === letter) {    // Controllo se il primo carattere è uguale alla lettera passata come parametro
            namesWithA.push(array[i])  // Pusho il nome dentro l'array vuoto
        }
    }
    return namesWithA  // ritorniamo il nuovo array alla fine della funzione
}

// Invoca la funzione qui e stampa il risultato in console
const onlyNamesWithA = namesWithAFirstChar(names, 'A')   // passo l'array names e la lettera 'A' come parametro per la funzione
console.log(onlyNamesWithA)   //Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]