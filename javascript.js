//  ROCK PAPER SCISSORS
//      1) Understand the problem:
//          - Game played by two.
//          - Each player chooses between rock, paper, scissors at the same time
//          - Rock wins over scissors, paper wins over rock, scissors wins over paper
//          - Same object means draw
//      2) Plan:
//          INPUT player choice
//          Computer randomly return either "Rock","Paper" or "Scissors"
//          Compare the results and declare the winner

//      3) Divide in sub problems

// Declare the game options and variables
const optionsArr = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let playerLoss = 0;



// Create a function that will will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function computerPlay(arr){
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];
    return item;

}


// function that will take computer choice and player choice and declare the round winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const result = "Draw!";
        return result;
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        const result = "You lose! Paper wins over rock!";
        playerLoss++;
        return result; 
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        const result = "You Win! Rock wins over Scissors!";
        playerWins++;
        return result; 
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        const result = "You Win! Paper wins over rock!";
        playerWins++;
        return result; 
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        const result = "You Lose! Paper loses over scissors!";
        playerLoss++;
        return result; 
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        const result = "You Win! Scissors wins over paper!";
        playerWins++;
        return result; 
    } else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        const result = "You Lose! Scissors loses over rock!";
        playerLoss++;
        return result; 
    }
  }


//  function that count rounds 
function game(){    
    for (let i = 1; i < 6; i++) {
        // INPUT player choice into variable and Treat the input and 
        // make it case-insensitive (so users can input rock, ROCK, RocK or any other variation).
        let playerSelection = prompt("Enter Rock Paper or Scissors, Round: " + i).toLowerCase();      
        console.log(playRound(playerSelection, computerPlay(optionsArr)));
     }

    if (playerWins > playerLoss){
        prompt("Player wins!")
    }else if(playerWins==playerLoss){
        prompt("Draw!")
    }else{
        prompt("Player loses!")
    }

}

game();



