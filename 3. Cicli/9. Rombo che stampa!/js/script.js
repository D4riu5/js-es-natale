const size = parseInt(prompt("Enter the size of the diamond:"));

// top
for (let i = 1; i <= size; i += 2) {
  let row = "";

  // spaces
  for (let x = 1; x <= (size - i) / 2; x++) {
    row += " ";
  }

  // letters
  for (let x = 1; x <= i; x++) {
    row += "X";
  }

  console.log(row);
}

// bottom
for (let i = size - 2; i >= 1; i -= 2) {
  let row = "";

  // spaces
  for (let x = 1; x <= (size - i) / 2; x++) {
    row += " ";
  }

  // letters
  for (let x = 1; x <= i; x++) {
    row += "X";
  }

  console.log(row);
}