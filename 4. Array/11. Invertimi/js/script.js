const arrayLenght = prompt("enter a number to generate and choose the size of an array list");
let numbers = [];

for (let x = 0; x < arrayLenght; x++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log("numeri = " + numbers + " invertiti = " + numbers.reverse());