
// SCHEMA ESERCIZIO

// MileStone 1 (Creazione richieste base e calcoli):

// -Chiedo (Senza prompt) il numero di chilometri da percorrere:

//     Creo un imput type number per inserire il numero desiderato dall'utente;
//         -Definisco il prezzo base di 0.2762 euro al km
//         -Calcolo il prezzo base del biglietto, moltiplicando il prezzo di 0.2762 euro per i km inseriti

// -Chiedo (Senza prompt) l'età del passeggero:

//     Creo un input type number per inserire il numero di anni dell'utente;
//         -Applico un possibile sconto in base all'età del passeggero:
//             -Se il passeggero ha meno di 18 anni, allora verrà applicato uno sconto del 17.5% sul prezzo base del biglietto
//                 Altrimenti non verrà applicato lo sconto
            
//             -Se il passeggero ha un'età >= di 65 anni, allora verrà applicato uno sconto del 33.3% sul prezzo base del biglietto
//                 Altrimenti non verrà applicato lo sconto

// -Creo un button da cliccare per ottenere il risultato del prezzo totale:


const priceForKm = 0.2762;

console.log("Il prezzo base al Km è di: " + priceForKm + " €" );

const inputUserKm = document.querySelector("input#userKm");

const inputUserAge = document.querySelector("input#userAge")

const output = document.getElementById("output");

const button = document.querySelector("div.buttons .btn");

let ticketPrice;

button.addEventListener("click", function() {
    console.log( parseInt(inputUserKm.value) );
    ticketPrice = (priceForKm * inputUserKm.value);
    console.log("Il prezzo del biglietto base è di: " + ticketPrice.toFixed(2) + " €");

    console.log( parseInt(inputUserAge.value) );
    
    if(parseInt(inputUserAge.value) < 18){
        const underAgeDiscount = 17.5 * ticketPrice / 100;
        ticketPrice = ticketPrice - underAgeDiscount;
        console.log("Il prezzo del biglietto scontato è di: " + ticketPrice.toFixed(2) + " €")
    } else if(parseInt(inputUserAge.value) >= 65) {
        const overAgeDiscount = 33.3 * ticketPrice / 100;
        ticketPrice = ticketPrice - overAgeDiscount;
        console.log("Il prezzo del biglietto scontato è di: " + ticketPrice.toFixed(2) + " €")
    }
})