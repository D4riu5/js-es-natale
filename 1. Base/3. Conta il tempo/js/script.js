const seconds = parseInt(prompt("Inserisci numero di secondi"));

const hours = Math.trunc(seconds / 3600);
const minutes = Math.trunc((seconds % 3600) / 60);
const remainingSeconds = seconds % 60;

console.log(hours + " ore, " + minutes + " minuti " + " e " + remainingSeconds + " secondi.")