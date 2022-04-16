function computerPlay(){
    let computerMove = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerMove.length);
    console.log("Computer Move: " + computerMove[randomIndex]);
    return computerMove[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function scoreWatcher(){
    if (playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            gameResults.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}. You won!`;
            playerScore = 0;
            computerScore = 0;
        }
        else{
            gameResults.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}. You lost!`;
            playerScore = 0;
            computerScore = 0;
        }
    }
    else{
        gameResults.textContent = `Player Score: ${playerScore}  Computer Score: ${computerScore}`;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock')
    {
        if(computerSelection == 'rock')
        {
            results.textContent = 'Two rocks is a draw!';
            return 'Two rocks is a draw!';
        }
        else if (computerSelection == 'paper')
        {
            results.textContent = 'Paper beats rock you failure!';
            return 'Paper beats rock you failure!';
        }
        else
        {
            results.textContent = 'Rock beats scissors, you win!'
            return 'Rock beats scissors, you win!'
        }
    }
    else if (playerSelection == 'paper')
    {
        if(computerSelection == 'rock')
        {
            results.textContent = 'Paper beats rock, you kick ass!';
            return 'Paper beats rock, you kick ass!';
        }
        else if (computerSelection == 'paper')
        {
            results.textContent = 'Two papers is a draw!';
            return 'Two papers is a draw!';
        }
        else
        {
            results.textContent = 'Paper is sliced in twain by scissors. FATALITY!';
            return 'Paper is sliced in twain by scissors. FATALITY!';
        }
    }
    else if (playerSelection == 'scissors')
    {
        if(computerSelection == 'rock')
        {
            results.textContent = 'Your puny scissors have been crushed';
            return 'Your puny scissors have been crushed';
        }
        else if (computerSelection == 'paper')
        {
            results.textContent = 'You rip apart their fragile paper';
            return 'You rip apart their fragile paper';
        }
        else
        {
            results.textContent = 'Two scissors bounce harmlessly off each other. It is a draw!';
            return 'Two scissors bounce harmlessly off each other. It is a draw!';
        }
    }
    else
    {
        results.textContent = 'Something went horribly wrong. Check your spelling.';
        return 'Something went horribly wrong. Check your spelling.';
    }
}
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const gameResults = document.querySelector('#gameResults');

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
});
paper.addEventListener('click', () => {
    playRound('paper', computerPlay());
});
scissors.addEventListener('click', () => {
    playRound('scissors', computerPlay());
});




//function game(){
   //for (let i = 0; i < 5; i++){
   //     console.log(playRound(playerSelection, computerPlay())); 
   // }
//}

