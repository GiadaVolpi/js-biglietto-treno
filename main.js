// richiesta anni
var anni = parseInt (prompt ("Quanti anni hai? (Devi scrivere un numero intero non negativo)"));
console.log (anni);

if (isNaN (anni)) {
    // la variabile anni non contiene un numero
    alert ("Hai sbagliato a scrivere la tua età");
} else if (anni < 18) {
    // sei minorenne quindi hai il 20% di sconto
    alert ("Sul costo del tuo biglietto è applicato il 20% di sconto");
} if (anni >= 65) {
    // hai già compiuto i 65 anni quindi hai il 40% di sconto
    alert ("Sul costo del tuo biglietto è applicato il 40% di sconto");
}

document.getElementById ("eta").innerHTML = anni;


// richiesta km
var km = parseInt (prompt("Quanti km devi percorrere? (Attenzione: non usare numeri decimali)"));
console.log (km);

if (isNaN (anni)) {
    // la variabile km non contiene un numero
    alert ("Hai sbagliato a scrivere il numero dei kilometri");
}
document.getElementById ("tot-km").innerHTML = km + " " + "km";


// calcolo costo
    // biglietto senza sconto
var bigliettoIntero = 0.21 * km;
    // biglietto con sconto del 20%
var bigliettoMinorenni = 0.21 * km / 100 * 80;
    // biglietto con sconto del 40%
var bigliettoAnziani = 0.21 * km / 100 * 60;
console.log (bigliettoIntero);
console.log (bigliettoMinorenni);
console.log (bigliettoAnziani);

if (anni < 18) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " " + bigliettoMinorenni;
} else if (anni > 18 < 65) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " "  + bigliettoIntero;
} if (anni >= 65) {
    document.getElementById ("costo-biglietto").innerHTML = "€" + " "  + bigliettoAnziani;
}

document.getElementById("calcolatore").setAttribute("class", "visible");
