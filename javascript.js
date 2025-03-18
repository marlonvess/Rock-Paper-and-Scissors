//Array to select a number and output game results
let choices=['rock','paper','scissors'];

let playerPoints=0;
let computerPoints=0;

function playGame(playerChoice) {
    //Variable to randomly choose a number from 0 to 2 inside an array
    let cpuChoices=choices[Math.floor(Math.random()*3)]
    
    //Output Player and Computer Choices
    document.getElementById("playerChoice").innerHTML = "Player choice:"+playerChoice;
    document.getElementById("computerChoice").innerHTML="Computer choice:"+cpuChoices;

    //Make comparation between Player choices and computer choices to output results to player
    if (playerChoice==cpuChoices) {
        document.getElementById("result").innerHTML="Tie!";
    } 
    else if (playerChoice=='rock' && cpuChoices=='scissors' || 
             playerChoice=='paper' && cpuChoices=='rock' ||
             playerChoice=='scissors' && cpuChoices=='paper'   
            )                      
     {
        document.getElementById("result").innerHTML="You Win!";
        playerPoints++;
    }
    else {
        document.getElementById("result").innerHTML="You Lose!";
        computerPoints++;
    }
   
        if (playerPoints>=5) {
            document.getElementById("result").innerHTML="Computer was defeated!";
             computerPoints=0;
             playerPoints=0;
        }
    
        if (computerPoints>=5)
        {
            document.getElementById("result").innerHTML="You were defeated!";
            playerPoints=0;
            computerPoints=0;     
        }
    //Game score
    document.getElementById("playerPoints").innerHTML="Player Points: "+playerPoints;
    document.getElementById("computerPoints").innerHTML="Computer Points: "+computerPoints;
}


