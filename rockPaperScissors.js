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

//Math.floor(math.random) will always put out zero, since math.floor returns the the largest integer less than or equal to a given number.

//In order to get a number greater than zero, but not higher than the number of items in the group, we need to multiply the result of math.random by the number of items in the group before math.flooring that outcome.

// The number of items in a group can be fetched by using

//Array.length

// To get a random number from the group

//randomNumber = math.floor( math.random() * choices.length)

// in order to use the random number to get an element from the group, we need to use

//groupname[random number]

//the value of computerChoice needs to be returned

// The Computer's Choice is printed into the JavaScript console to view.

//console.log(getComputerChoice)

//The whole shebang then would look like this

function getComputerChoice(choices) {
	let randomNumber = Math.floor(Math.random() * choices.length);

	return choices[randomNumber];
}

const choices = ['Rock', 'Paper', 'Scissors'];

const result = getComputerChoice(choices);
