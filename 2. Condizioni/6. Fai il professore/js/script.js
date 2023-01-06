const voto = parseInt(prompt("inserisci il voto"));
let converted = ""

switch (true) {
    case (voto >= 0 && voto < 18):
        converted = "insufficiente";
        break;
    case (voto >= 18 && voto < 21):
        converted = "sufficiente";
        break;
    case (voto >= 21 && voto < 24):
        converted = "buono";
        break;
    case (voto >= 24 && voto < 27):
        converted = "distinto";    
        break;
    case (voto >= 27 && voto <= 29):
        converted = "ottimo";
        break;
    case (voto == 30):
        converted = "eccellente";
        break;
    default:
       converted = "nessun voto valido inserito";
        break;
}

console.log(converted);