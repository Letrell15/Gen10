// Create a function that simulates the rolling of two dice and gathering the sum
function rollDice()
{
	var rollOne = Math.floor(Math.random() * 6) + 1;
	var rollTwo = Math.floor(Math.random() * 6) + 1;
	var rollSum = rollOne + rollTwo;
	return rollSum;

}
// Create a function that actually plays the game
function betGame()
{	
	var startingBet = document.forms["numberGame"]["startingBet"].value;
	var newAmount = 0;
	var rollCount = 0;
	
	// Create an array so I can gather the number of rolls once I get to the max value
	var resultArray = new Array();
	resultArray[0] = startingBet;
	var highestAmount = 0;
	
	// Displays an error if the bet value hasn't been entered or it equals zero
	if (startingBet === "" || startingBet == 0) 
	{
		alert("Starting bet field invalid.");
 		document.forms["numberGame"]["startingBet"].focus();
		return false;
	}

	// EVery game will have at least one roll so I set code up for the inital roll
	console.log(rollDice());
	rollCount = 1;
    	newAmount = startingBet;
	if (rollDice() == 7)
	{
		newAmount = newAmount + 4;
		resultArray.push(newAmount);
	}
	else
	{
		newAmount = newAmount - 1;
		resultArray.push(newAmount);
	}
	
	// Execute a loop of rolls as long as the bet value is greater than 0
	while (newAmount > 0)
	{
		console.log(rollDice());		
			if (rollDice() == 7)
			{
				newAmount = newAmount + 4;
				resultArray.push(newAmount);
			}
			else
			{
				newAmount = newAmount - 1;
				resultArray.push(newAmount);
			}
		rollCount++;
	}
	
	// Gets the max value from the array of results
	highestAmount = Math.max.apply(null, resultArray);
	
	// Locates the position of the max value in the array to find out the number of rolls up to that point
	var found = resultArray.indexOf(highestAmount);
	
	document.getElementById("results").style.display = "block";
	
	document.getElementById("startingBet1").innerText = startingBet;
	document.getElementById("rollCount").innerText = rollCount;
	document.getElementById("highestAmount").innerText = highestAmount;
	
	// Adds one to the max value position to find the number of rolls up to that point
	document.getElementById("rollCountAfterHigh").innerText = found + 1;
	
	return false;

}

/* var found = array1.find(function(element) {
  return element > 10;
});
 
 var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1*/
