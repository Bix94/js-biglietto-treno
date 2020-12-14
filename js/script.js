// domandare numero di km da percorrere
// domandare età passeggero
// 0.21 x km prezzo
// sconto 20% U18
// sconto 40% O65


var eta = parseInt(prompt('Inserisci qui la tua età'));
document.getElementById('eta').innerHTML = eta;

var km = parseInt(prompt("Inserisci i km da percorrere."));
document.getElementById('km').innerHTML = km;


var prezzo = km * 0.21;
var prezzoScontato1 = prezzo - prezzo * 20 / 100;
var prezzoScontato2 = prezzo - prezzo * 40 / 100;

if ( eta < 18) {
  prezzo = prezzoScontato1
} else if ( eta > 65) {
  prezzo = prezzoScontato2
} else {
  prezzo = prezzo
}

var tot = prezzo;

// document.getElementById('tot').innerHTML = Math.trunc(tot: 2) + " $" ;
// document.getElementById('tot').innerHTML = Math.round(prezzo) + " $" ;
document.getElementById('tot').innerHTML = tot.toFixed(2);
// meglio trunc che non converte i numeri in stringa
