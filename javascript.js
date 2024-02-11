let choices=['rock','paper','scissors'];


function playGame(playerChoice) {
    
    let cpuChoices=choices[Math.floor(Math.random()*3)]

    if (playerChoice==cpuChoices) {
        console.log("Tie");
    } 
    else if (playerChoice=='rock' && cpuChoices=='scissors' || 
             playerChoice=='paper' && cpuChoices=='rock' ||
             playerChoice=='scissors' && cpuChoices=='paper'   
                                        )                      
                                    {
        console.log("You win");
    }
    else {
        console.log ("You lose!");
    }
    console.log (choices)
    console.log (playerChoice);
    console.log (cpuChoices);
}
