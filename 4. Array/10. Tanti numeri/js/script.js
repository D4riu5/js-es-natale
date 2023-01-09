const input = prompt("enter a list of numbers, separated by a space");
const numbersArray = input.split(" ");

let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum += Number(numbersArray[i]); 
}

let average = sum / numbersArray.length;
let smallNumbers = [];

for (let i = 0; i < numbersArray.length; i++) {
 
  if (numbersArray[i] < average) {
    smallNumbers.push(numbersArray[i]);
  }
  if (numbersArray[i] == 0) {
    smallNumbers.splice(numbersArray[i]);
  }
}

console.log("media " + average + ";" + " valori minori della media = " + smallNumbers.join(", "));


