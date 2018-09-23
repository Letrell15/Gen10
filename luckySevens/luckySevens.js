function rollDice()
{
	var rollOne = Math.floor(Math.random() * 6) + 1;
	var rollTwo = Math.floor(Math.random() * 6) + 1;
	var rollSum = rollOne + rollTwo;
	return rollSum;

}

function betGame()
{	
	var startingBet = document.forms["numberGame"]["startingBet"].value;
	var newAmount = 0;
	var rollCount = 0;
	var resultArray = new Array();
	resultArray[0] = startingBet;
	var highestAmount = 0;
	if (startingBet === "" || startingBet == 0) 
	{
		alert("Starting bet field invalid.");
 		document.forms["numberGame"]["startingBet"].focus();
		return false;
	}

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
	highestAmount = Math.max.apply(null, resultArray);
	var found = resultArray.indexOf(highestAmount);
	
	document.getElementById("results").style.display = "block";
	
	document.getElementById("startingBet1").innerText = startingBet;
	document.getElementById("rollCount").innerText = rollCount;
	document.getElementById("highestAmount").innerText = highestAmount;
	document.getElementById("rollCountAfterHigh").innerText = found + 1;
	
	return false;

}

/* var found = array1.find(function(element) {
  return element > 10;
});
 
 var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1*/