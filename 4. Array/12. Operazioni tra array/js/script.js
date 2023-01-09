const array1 = [];
const array2 = [];

for (let x = 1; x <= 10; x++) {
  array1.push(Math.floor(Math.random() * 10) + 1);
  array2.push(Math.floor(Math.random() * 10) + 1);
}

console.log("array1 : " + array1);
console.log("array2 : " + array2);

const addizione = [];
const sottrazione = [];
const moltiplicazione = [];
const divisione = [];

for (let i = 0; i < array1.length; i++) {
  addizione.push(array1[i] + array2[i]);
  sottrazione.push(array1[i] - array2[i]);
  moltiplicazione.push(array1[i] * array2[i]);
  divisione.push(array1[i] / array2[i]);
}

console.log("addizione = " + addizione);
console.log("sottrazione = " + sottrazione);
console.log("moltiplicazione = " + moltiplicazione);
console.log("divisione = " + divisione);