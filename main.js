// richiesta anni
var anni = parseInt (prompt ("Quanti anni hai? (Devi scrivere un numero intero non negativo)"));
console.log (anni);

if (isNaN (anni)) {
    // la variabile anni non contiene un numero
    alert ("Hai sbagliato a scrivere la tua età");
    document.getElementById ("eta").innerHTML = " ...ERRORE!... ";
} else if (anni < 0) {
    // non sei ancora nato
    alert ("Le cicogne sono gratis!");
} else if (anni > 0 && anni < 18) {
    // sei minorenne quindi hai il 20% di sconto
    alert ("Sul costo del tuo biglietto è applicato il 20% di sconto");
} else if (anni >= 65 && anni < 120) {
    // hai già compiuto i 65 anni quindi hai il 40% di sconto
    alert ("Sul costo del tuo biglietto è applicato il 40% di sconto");
} else if (anni > 120) {
    // hai superato i 120 anni
    alert ("Dovresti partecipare al Guinness Wordl Record!");
    document.getElementById ("eta").innerHTML = " ...ERRORE!... ";
}

document.getElementById ("eta").innerHTML = anni;


// richiesta km
var km = parseInt (prompt("Quanti km devi percorrere? (Attenzione: non usare numeri decimali)"));
console.log (km);

if (isNaN (km)) {
    // la variabile km non contiene un numero
    alert ("Hai sbagliato a scrivere il numero dei kilometri");
    document.getElementById ("tot-km").innerHTML = " ...ERRORE!...";
} else if (km <= 0) {
    alert ("Non hai bisogno di un biglietto");
    document.getElementById ("tot-km").innerHTML = " ...ERRORE!...";
}

document.getElementById ("tot-km").innerHTML = km + " " + "km";


// calcolo costo biglietto
    // biglietto senza sconto
var bigliettoIntero = (0.21 * km).toFixed(2);
    // biglietto con sconto del 20%
var bigliettoMinorenni = (0.21 * km / 100 * 80).toFixed(2);
    // biglietto con sconto del 40%
var bigliettoAnziani = (0.21 * km / 100 * 60).toFixed(2);
console.log (bigliettoIntero);
console.log (bigliettoMinorenni);
console.log (bigliettoAnziani);

if (anni <= 0) {
    document.getElementById ("eta").innerHTML = " ...ERRORE!... ";
} else if (anni <= 0 && km > 0) {
    document.getElementById ("costo-biglietto").innerHTML = "ERRORE!";
} else if (anni < 18) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " " + bigliettoMinorenni;
} else if (anni < 18 && km <= 0) {
    document.getElementById ("costo-biglietto").innerHTML = "NON HAI BISOGNO DI UN BIGLIETTO!";
} else if (anni > 18 && anni < 65) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " "  + bigliettoIntero;
} else if (anni > 18 && anni < 65 && km <= 0) {
    document.getElementById ("costo-biglietto").innerHTML = "NON HAI BISOGNO DI UN BIGLIETTO!";
} else if (anni >= 65 && anni < 120) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " "  + bigliettoAnziani;
} else if (anni >= 65 && anni < 120 && km <= 0) {
    document.getElementById ("costo-biglietto").innerHTML = "NON HAI BISOGNO DI UN BIGLIETTO!";
} else  if (anni > 120) {
    document.getElementById ("eta").innerHTML = " ...ERRORE!... ";
} else  if (anni > 120 && km <= 0) {
    document.getElementById ("costo-biglietto").innerHTML = "NON HAI BISOGNO DI UN BIGLIETTO!";
}

document.getElementById("calcolatore-container").setAttribute("class", "visible");
