// Write the function getComputerChoice that generates a random outcome.

//function getComputerChoice() = Random choice between {Rock, Paper, Scissors}

//The only choices are the three above, no others. They are always the same and constant.

//const choices = ["Rock", "Paper", "Scissors"]

// The function enables the Computer to choose between Rock, Paper and Scissors and make a random selection.

//Random choice between choice 1, choice 2 and choice 3

// The choice is between 1, 2 and 3, so get a random number from all numbers in the choices group

//random number (number of items in group)

// random numbers between 0 and 1 are found with math.random()

// Since eg 0.5 is not a valid answer, we need something that will put out a non-floating point number (a full integer). math.floor() does that

//Math.floor(math.random) will always put out zero, since math.floor alert(s the the largest integer less than or equal to a given number.

//In order to get a number greater than zero, but not higher than the number of items in the group, we need to multiply the result of math.random by the number of items in the group before math.flooring that outcome.

// The number of items in a group can be fetched by using

//Array.length

// To get a random number from the group

//randomNumber = math.floor( math.random() * choices.length)

// in order to use the random number to get an element from the group, we need to use

//groupname[random number]

//the value of computerChoice needs to be alert(ed

// The Computer's Choice is printed into the JavaScript console to view.

//alert((getComputerChoice)

//The whole shebang then would look like this

function computerHand() {
	let choices = ['rock', 'paper', 'scissors'];
	let computerChoice = choices[Math.floor(Math.random() * choices.length)];

	return computerChoice;
}

//Add function for the players choice, which will be manually put in with

//let playerSelection = prompt('Rock, Paper or Scissors?');

//to make the user input case-insensitive, convert all the letters to lowercase for comparison with the computers choice

//.toLowerCase can do that

// Spell out scenarios where the two selections are compared and the regular rules applied

// if the playerSelection equals the computerSelection, nobody wins

// else if the playerSelection is Rock AND the computerSelection is PAper, computerSelection wins

// else if the playerSelection is Scissors and the computerSelection is Rock, computerSelection wins

// else if the playerSelection is Paper and the computerSelection is Scissors, computerSelection wins

// else if the input is neither rock, paper nor scissors, show error MessageChannel

// else the playerSelection wins

// Rock > Scissors, Paper > Rock, Scissor > Paper

// to keep score, a variable for score is needed that increases with every win for computer or human

// that variable start at 0

function playerHand() {
	let playerChoice = prompt('Rock, Paper or Scissors?');
	return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
	let result = computerSelection[0].toUpperCase() + computerSelection.substring(1);

	if (playerSelection === computerSelection) {
		alert("It's a tie!");
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		computerScore++;
		alert('Paper beats Rock, the Computer wins!');
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		computerScore++;
		alert('Rock beats Scissors, the Computer Wins');
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		alert('Scissors beats Paper, the Computer wins!');
	} else if (!['rock', 'paper', 'scissors'].includes(playerSelection)) {
		alert('No valid input!');
	} else {
		playerScore++;
		alert(`The Computer played ${result}. The Player Wins! No Terminator Scenario Approaching!`);
	}
}

function game() {
	for (let i = 1; i < 6; i++) {
		playerSelection = playerHand();
		computerSelection = computerHand();
		playRound(playerSelection, computerSelection);

		console.log('Next round!');

		if (playerScore === 3) {
			alert('Player wins the Game!');
			break;
		} else if (computerScore === 3) {
			alert(`Computer wins the Game with ${computerScore} to $ {playerScore}`);
			break;
		} else {
			alert('Player score: ' + playerScore + ' Computer Score:' + computerScore);
			alert('Pick again');
		}
	}
}

let playerScore = 0;
let computerScore = 0;
console.log(game());

// credits to Quail58/John Gibson for helping me getting the f*** out of the loop-loop and giving me something to learn.
