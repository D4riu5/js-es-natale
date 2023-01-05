const cats = prompt("Inserisci numero gatti");
const catsEachRow = prompt("Inserisci quanti gatti vuoi per fila");
let rows = cats / catsEachRow;

if (rows < 2 && rows >= 1){
  console.log("c'e " + Math.floor(rows) + " row");
}
else if (rows < 1){
  console.log("ci sono " + Math.floor(rows) + " row");
}

else {
  console.log("ci sono " + Math.floor(rows) + " row");
}


let extraCats = cats % catsEachRow;

if (cats % catsEachRow == 0) {
  console.log("non ci sono gatti rimasti fuori dalle row");
}
  else if (extraCats == 1){
    console.log("c'e " + extraCats + " gatto rimasto fuori");
  }
  else{
    console.log("ci sono " + extraCats + " gatti rimasti fuori");
  }