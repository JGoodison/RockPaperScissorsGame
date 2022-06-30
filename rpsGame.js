let rps = ["rock", "paper", "scissor"]; 
function computerPlay(){
    let random = Math.floor(Math.random() * rps.length);
    return rps[random];
}
// console.log(computerPlay());

let playerScore = 0; 
let playRound = (playerSelection, computerSelection) =>{
    let lowerCasePlayer = playerSelection.toLowerCase();
    console.log("slection after case chnge: " + lowerCasePlayer);
    let lowerCaseComputer = computerSelection.toLowerCase();
    console.log("computer selction after: " + lowerCaseComputer);
    if(lowerCasePlayer == "rock" && lowerCaseComputer == "paper"){
        playerScore = 0;
        return "You lose! Paper beats Rock";
    }
    else if(lowerCasePlayer == "paper" && lowerCaseComputer == "rock"){
        playerScore = 1;
        return "You win! Rock beats Paper";
        
    }
    else if(lowerCasePlayer == "scissor" && lowerCaseComputer == "paper"){
        playerScore = 1;
        return "You win! Scissors beats Paper";
    }
    else if(lowerCasePlayer == "paper" && lowerCaseComputer == "scissor"){
        playerScore = 0;
        return "You lose! Scissors beats Paper";
    }
    else if(lowerCasePlayer == "rock" && lowerCaseComputer == "scissor"){
        playerScore = 1;
        return "You win! Rock beats Scissors";
    }
    else if(lowerCasePlayer == "scissor" && lowerCaseComputer == "scissor"){
        playerScore = -1;
        return "It's a tie! Play again";
    }
    else if(lowerCasePlayer == "paper" && lowerCaseComputer == "paper"){
        playerScore = -1
        return "It's a tie! Play again";
    }
    else if(lowerCasePlayer == "rock" && lowerCaseComputer == "rock"){
        playerScore = -1;
        return "It's a tie! Play again";
    }
    else{
        return "invalid input. Try again";
    }
}



let game = () => {
    let count = 0;
    for(let i = 0; i < 5; i++){
        playRound(prompt("What's your move?"), computerPlay());
        if(playerScore == -1){
            playRound(prompt("Draw! What's your move?"), computerPlay());
        }
        console.log("playerScore is: " + playerScore);
        if(playerScore == 1){
            count++;
            console.log("count is now " + count);
        }
    }
    if (count >= 3){
        return "Game over, YOU WIN. Your score is: " + count;
    }
    else{
        return "Game over, YOU LOSE. Your score is: " + count;
    }

    
}



