
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

    document.getElementById("output").innerHTML = `Il prezzo totale del suo biglietto è di: ${ticketPrice.toFixed(2)} &euro;`;
})