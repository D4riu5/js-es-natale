const lunedi = parseInt(prompt("inserisci la temperatura di lunedi"));
const martedi = parseInt(prompt("inserisci la temperatura di martedi"));
const mercoledi = parseInt(prompt("inserisci la temperatura di mercoledi"));
const giovedi = parseInt(prompt("inserisci la temperatura di giovedi"));
const venerdi = parseInt(prompt("inserisci la temperatura di venerdi"));
const sabato = parseInt(prompt("inserisci la temperatura di sabato"));
const domenica = parseInt(prompt("inserisci la temperatura di domenica"));

let hottest = -Infinity;
let coldest = Infinity;

if (lunedi > hottest) {
    hottest = lunedi;
}
if (lunedi < coldest) {
    coldest = lunedi;
}

if (martedi > hottest) {
    hottest = martedi;
}
if (martedi < coldest) {
    coldest = martedi;
}

if (mercoledi > hottest) {
    hottest = mercoledi;
}
if (mercoledi < coldest) {
    coldest = mercoledi;
}

if (giovedi > hottest) {
    hottest = giovedi;
}
if (giovedi < coldest) {
    coldest = giovedi;
}

if (venerdi > hottest) {
    hottest = venerdi;
}
if (venerdi < coldest) {
    coldest = venerdi;
}

if (sabato > hottest) {
    hottest = sabato;
}
if (sabato < coldest) {
    coldest = sabato;

}if (domenica > hottest) {
    hottest = domenica;
}
if (domenica < coldest) {
    coldest = domenica;
}

console.log("giornata piu calda = " + hottest + ", giornata piu fredda = " + coldest)