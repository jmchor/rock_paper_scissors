let announceBox = document.querySelector('.outcome');

function computerHand() {
	let choices = ['rock', 'paper', 'scissors'];
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];

	return computerChoice;
}

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
	button.addEventListener('click', function () {
		let playerSelection = button.id;
		let computerSelection = computerHand();

		let para = document.createElement('p');

		if (playerSelection === computerSelection) {
			para.textContent = `The Computer played ${computerSelection}. It's a tie!`;
		} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
			computerScore++;
			para.textContent = `The Computer played ${computerSelection}. Computer Wins! ${playerScore} to ${computerScore}`;
		} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
			computerScore++;
			para.textContent = `The Computer played ${computerSelection}. The Computer Wins! (No argument there.) ${playerScore} to ${computerScore}`;
		} else if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
			computerScore++;
			para.textContent = 'No valid input!';
		} else {
			playerScore++;
			para.textContent = `The Computer played ${computerSelection}. The Player Wins! No Terminator Scenario Approaching (for now)! ${playerScore} to ${computerScore}`;
		}

		if (announceBox.hasChildNodes()) {
			announceBox.removeChild(announceBox.childNodes[0]);
			announceBox.appendChild(para);
		} else {
			announceBox.appendChild(para);
		}

		if (playerScore === 5 || computerScore === 5) {
			para.textContent = `End of Game! Player: ${playerScore}, Computer ${computerScore}`;
		}
	});
});
