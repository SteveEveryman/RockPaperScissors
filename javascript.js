function computerPlay(){
    let computerMove = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerMove.length);
    console.log("Computer Move: " + computerMove[randomIndex]);
    return computerMove[randomIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock')
    {
        if(computerSelection == 'rock')
        {
            return 'Two rocks is a draw!';
        }
        else if (computerSelection == 'paper')
        {
            return 'Paper beats rock you failure!';
        }
        else
        {
            return 'Rock beats scissors, you win!'
        }
    }
    else if (playerSelection == 'paper')
    {
        if(computerSelection == 'rock')
        {
            return 'Paper beats rock, you kick ass!';
        }
        else if (computerSelection == 'paper')
        {
            return 'Two papers is a draw!';
        }
        else
        {
            return 'Paper is sliced in twain by scissors. FATALITY!';
        }
    }
    else if (playerSelection == 'scissors')
    {
        if(computerSelection == 'rock')
        {
            return 'Your puny scissors have been crushed';
        }
        else if (computerSelection == 'paper')
        {
            return 'You rip apart their fragile paper';
        }
        else
        {
            return 'Two scissors bounce harmlessly off each other. It is a draw!';
        }
    }
    else
    {
        return 'Something went horribly wrong. Check your spelling.';
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerPlay())); 
    }
}

playerSelection = window.prompt('Please enter your move for Rock Paper Scissors. Use correct spelling.');
computerSelection = computerPlay();
game();
