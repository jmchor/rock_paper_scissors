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

function game() {
	for (let i = 1; i < 1000; i++) {
		// the loop starts and the first thing it calls is the playerHand function which
		// prompts the player for input and returns that input to the variable playerChoice in
		//all lower case. The functions value gets stored in the variable playerSelection.

		playerSelection = playerHand(i);

		// next, the function computerHand is called, which generates a random number with the Math.random
		// and Math.floor functions and multiplies it with the number of items in the array to get a number
		// between 1 and 3. Then it declares the variable computerChoice, matching the number to an element in
		// the array and returning a string. The functions value gets stored in the variable computerSelection.

		computerSelection = computerHand();

		// and finally, the game. The function playRound gets called and passed the variables playerSelection
		// (which stores as value the players input) and computerSelection (stores the computers choice) as
		//parameters.
		//The function passes the parameters to a conditional statement, comparing the string values with
		//varying conditions. If true, the condition increases the variable playerScore (or computerScore)
		// by 1.

		playRound(playerSelection, computerSelection);

		// The for-loop will loop through the whole code block in its curly brackets until its condition is
		// met. The for loop has the condition i < 6, with the initialization of i = 1, and the expression to
		//  increment i by 1 after each loop.

		// The following conditional statement is optional code, it will present an alert box to the user
		// after one round to
		//engage him to Pick Again as long as the index i is NOT 5 (so rounds 1 through 4). After round 5
		// (when i has become 5) the user gets the message Thanks for playing. The loop then breaks if neither
		// of the other two conditions can be met (since i already was 5 it cant be again, but it could be
		// not-5. The loop-condition that i<6 determines that i can't be any other number though.)
	}
	//The else statement in the loop-conditional can be empty, but could also contain break to break the loop.
	//
	// The loop itself is one part of the function game(). The second part is another conditional statement
	// which compares the last values of two variables from the playRound function after 5 loops. Those
	// variables are playerScore and computerScore, either of which have been increased by 1 in each loop.

	// The conditional statements compares the values with different outcomes if true and presents them in an
	// alert box. The alert-content is written in backticks so they can take variable values an print them.

	if (playerScore > computerScore) {
		console.log(`Player wins the Game with a score of ${playerScore} to ${computerScore}`);
	} else if (computerScore > playerScore) {
		console.log(`Computer wins the Game with a score of ${computerScore} to ${playerScore}`);
	} else {
	}
}

// So far, everything written is a function which declare their own variables. The starting points for the
// score values have to be set outside of the functions (globally) to be accessed by multiple functions.

let playerScore = 0;
let computerScore = 0;

//  last, the function that contains the whole game, calling all functions in order, needs to be called to
// start the game. So far, opening the webpage in the browser is the trigger for the script to start since its
// a loose script tag in the html body.
game();

// credits to Quail58/John Gibson for helping me getting the f*** out of the loop-loop and giving me something to learn.
