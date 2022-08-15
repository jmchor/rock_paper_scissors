function computerHand() {
	let choices = ['rock', 'paper', 'scissors'];
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];

	return computerChoice;
}

function playerHand(i) {
	let playerChoice = prompt(`This is round ${i}. Rock, Paper or Scissors?`);
	return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	let result = computerSelection[0].toUpperCase() + computerSelection.substring(1);

	if (playerSelection === computerSelection) {
		console.log(`The Computer played ${result}. It's a tie!`);
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		console.log(
			`The Computer played ${result}. The Computer Wins for some reason! (I mean, sure, paper envelops rock, but ever hear of a paper weight? seems like a lose-lose-kinda thing)`
		);
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		console.log(`The Computer played ${result}. The Computer Wins! (What if it's a whetstone though...)`);
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		console.log(`The Computer played ${result}. The Computer Wins! (No argument there.)`);
	} else if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
		console.log('No valid input!');
	} else {
		playerScore++;
		console.log(`The Computer played ${result}. The Player Wins! No Terminator Scenario Approaching (for now)!`);
	}
}
