const diceUser = ["<img src='img/dice1.png'>","<img src='img/dice2.png'>","<img src='img/dice3.png'>","<img src='img/dice4.png'>","<img src='img/dice5.png'>","<img src='img/dice6.png'>"];

const diceComputer = ["<img src='img/dice1.png'>","<img src='img/dice2.png'>","<img src='img/dice3.png'>","<img src='img/dice4.png'>","<img src='img/dice5.png'>","<img src='img/dice6.png'>"];

const userDiceShow = document.getElementById("user-dice");
const computerDiceShow = document.getElementById("computer-dice");
const start = document.querySelector(".start");
const showResult = document.getElementById("result");
const showOverallResult = document.getElementById("overallResult");
const overallUser = document.getElementById("overallPointsUser");
const overallPc = document.getElementById("overallPointsPc");
let counter1 = 0;
let counter2 = 0;

let posDiceUser;
let diceUserRandomized;
let posDiceComputer;
let diceComputerRandomized;


start.addEventListener ('click',

    function game() {
       
        posDiceUser = Math.floor(Math.random() * diceUser.length);
        diceUserRandomized = diceUser[posDiceUser];
        userDiceShow.innerHTML = diceUserRandomized;
        counter1 += posDiceUser + 1;
        overallUser.innerHTML = counter1;

        posDiceComputer = Math.floor(Math.random() * diceComputer.length);
        diceComputerRandomized = diceComputer[posDiceComputer]
        computerDiceShow.innerHTML = diceComputerRandomized;
        counter2 += posDiceComputer + 1;
        overallPc.innerHTML = counter2;

        if (diceUserRandomized == diceComputerRandomized) {
            showResult.innerHTML = "This round ended in a Tie";
        }
        else if(diceUserRandomized > diceComputerRandomized){
            showResult.innerHTML = "The User wins this round";
        }
        else {
            showResult.innerHTML = "The Computer wins this round";

        }

        if (counter1 == counter2){
          showOverallResult.innerHTML = "Overall Result : Tie";
        }
        else if(counter1 > counter2){
          showOverallResult.innerHTML = "Overall Result: the User is winning";
        }
        else {
          showOverallResult.innerHTML = "Overall Result: the Computer is winning";
        
        }
    }

)


