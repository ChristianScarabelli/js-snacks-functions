/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript'


// Dichiara la funzione qui.

// Funzione tradizionale
// Dichiaro la per contare il numero di vocali
function howManyVocals(string) {
    string = string.toLowerCase();  // Uniformiamo la stringa in minuscolo

    let vocals = 0  // Variabile per contare le vocali impostata a 0, per poi incrementarsi

    // Ciclo per attraversare ogni carattere della stringa
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);  // Prendiamo il carattere alla posizione i

        // Se il carattere è una vocale, incrementiamo il conteggio
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            vocals++;
        }
    }
    return vocals;  // Restituiamo il numero di vocali
}

// Invoca la funzione e stampa il risultato in console
const numberOfVocals = howManyVocals(word);
console.log('Numero di vocali:', numberOfVocals);  // Risultato atteso: 3 (a, a, i)
