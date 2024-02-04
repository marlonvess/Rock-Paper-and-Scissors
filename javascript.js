
const playerSelection = 0;
const computerSelection = Math.floor(Math.random() * 3); 

//0-Rock 1-Paper 2-Scissor 
function playRound() {
    if (playerSelection == computerSelection) {
        console.log("Tie!");
    }
    else if (playerSelection == 0 && computerSelection ==2 || playerSelection == 1 && computerSelection == 0 || playerSelection == 2 && computerSelection == 1){
        console.log ("You Win!");
    }

    else {
        console.log ("You Lose!")
    }
}



console.log (computerSelection)
 console.log (playRound());


//| 