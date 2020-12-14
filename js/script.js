// domandare numero di km da percorrere
// domandare età passeggero
// 0.21 x km prezzo
// sconto 20% U18
// sconto 40% O65

var eta = parseInt(prompt("Inserisci la tua età.""));
var km = parseInt(prompt("Inserisci i km da percorrere."))




var prezzo = km * 0.21;
var prezzoScontato1 = prezzo - prezzo * 20 / 100
var prezzoScontato2 = prezzo - prezzo * 40 / 100
