function computerPlay(){
    let computerMove = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * computerMove.length);
    return computerMove[randomIndex];
}
