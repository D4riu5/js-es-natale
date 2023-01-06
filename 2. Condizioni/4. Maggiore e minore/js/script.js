const a = parseInt(prompt("inserisci il primo numero"));
const b = parseInt(prompt("inserisci il secondo numero"));
const c = parseInt(prompt("inserisci il terzo numero"));
const d = parseInt(prompt("inserisci il quarto numero"));

if (a > b && a > c && a > d) {
    console.log("maggiore = " + a)
}
else if (b > a && b > c && b > d) {
    console.log("maggiore = " + b)
}
else if (c > a && c > b && c > d) {
    console.log("maggiore = " + c)
}
else if (d > a && d > b && d > c) {
    console.log("maggiore = " + d)
}

if (a < b && a < c && a < d) {
    console.log("minore = " + a)
}
else if (b < a && b < c && b < d) {
    console.log("minore = " + b)
}
else if (c < a && c < b && c < d) {
    console.log("minore = " + c)
}
else if (d < a && d < b && d < c) {
    console.log("minore = " + d)
}