var victims = []
var volunters = []


var victimNumber = prompt("How many victims need assistance?")

for ( i=0 ; i<=victimNumber ; i++) {

		var vicName = prompt("What is your victims name?")
		var vicNumber = prompt("what is your victims number?")
		var vicStreet = prompt("What is your victims street?")

		var vicObject = {
			name: vicName, 
			number: vicNumber,
			street: vicStreet,
		}

		victims.push(vicObject) 

	}

console.log(victims)