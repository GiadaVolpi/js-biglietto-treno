var anni = parseInt (prompt ("Quanti anni hai? (Devi scrivere un numero intero non negativo)"));
console.log (anni);

/*if (isNaN (anni)) {
    // la variabile anni non contiene un numero
    console.log ("Hai sbagliato a scrivere la tua età");
} else if (anni < 18) {
    // sei minorenne quindi hai il 20% di sconto
    console.log ("Sul costo del tuo biglietto è applicato il 20% di sconto");
} if (anni >= 65) {
    // hai già compiuto i 65 anni quindi hai il 40% di sconto
    console.log ("Sul costo del tuo biglietto è applicato il 40% di sconto");
}*/

document.getElementById ("eta").innerHTML = anni;


var km = parseInt (prompt("Quanti km devi percorrere? (Attenzione: non usare numeri decimali)"));
console.log (km);
document.getElementById ("tot-km").innerHTML = km + " " + "km";

var costoViaggio = 0.21 * km;
console.log (costoViaggio);
document.getElementById ("costo-biglietto").innerHTML = "€" + costoViaggio;




/*var costoViaggio = "€" + 0.21 * km;
console.log (costoViaggio);

if (isNaN (km)) {
    // la variabile km non contiene un numero
    console.log ("Hai sbagliato a scrivere il numero di km che devi percorrere");
} else if {

}*/
