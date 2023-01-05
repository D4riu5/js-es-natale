const cats = prompt("Inserisci numero gatti");
const catsEachRow = prompt("Inserisci quanti gatti vuoi per fila");
let rows = Math.ceil(cats / catsEachRow);
let extraCatsNeeded = rows * catsEachRow - cats; 

if (rows < 2 && rows >= 1){
  console.log("c'e " + Math.ceil(rows) + " row");
}

else {
  console.log("ci sono " + Math.ceil(rows) + " row");
}

if (cats % catsEachRow == 0) {
  console.log("non ci sono gatti da aggiungere per completare l'ultima row");
}
  else{
    console.log("ci sono " + extraCatsNeeded  + " gatti mancanti");
  }

  // Im using math.floor() cuz it makes more sense