var victims = []
var volunteers = []

 do {

		var vicName = prompt("What is your victims name?")
		var vicNumber = prompt("what is your victims number?")
		var vicStreet = prompt("What is your victims street?")

		var vicObject = {
			name: vicName, 
			number: vicNumber,
			street: vicStreet,
		}

		victims.push(vicObject)

		var i = confirm("Would you like to add a victim?") 
		}

while (i)

	
do {

	var volName = prompt("What is your volunteers name?")
	var volNumber = prompt("What is your volunteers number?")
	var volStreet = prompt("What is your volunteers street?")

	var volObject = {
		name: volName,
		number: volNumber,
		street: volStreet,
	}

	volunteers.push(volObject)

	var j = confirm("Would you like to add a/another Volunteer?")
}

while (j)

var needHelp = prompt("Which victim needs help now?")

console.log(victims[0].name)


for (i=0 ; i<=volunteers.length ; i++) {

	if (victims[i].street === volunteers[i].street && needHelp === victims[i].name) {
		console.log(volunteers[i].name + " is on the same street as you and will help.")
	}
	else {
		console.log("There are no volunteer on the same street.")
	}

}



console.log(victims)
console.log(volunteers)