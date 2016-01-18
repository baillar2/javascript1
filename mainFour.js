var victims = []
var volunteers = []


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

var volunteers = prompt("How many volunteers do you have?")

for (i=0 ; i<=volunteers ; i++) {

	var volName = prompt("What is your volunteers name?")
	var volNumber = prompt("What is your volunteers number?")
	var volStreet = prompt("What is your volunteers street?")

	var volObject = {
		name: volName,
		number: volNumber,
		street: volStreet,
	}

	volunteers.push(volObject)
}

