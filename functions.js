var tripleFive = function () {

	for ( i=0 ; i <=2 ; i++) {
		console.log("Five!")
	}
}

//tripleFive()

var lastLetter = function (string) {
		lLetter = string[string.length-1]			
		return lLetter
	}
		
//console.log(lLetter)

var square = function (n) {

	var answer = n*n
	return answer
}


 //console.log(square(4))

 var negate = function (n) {
 	var output = n - (n*2)
 	return output
 }

 //console.log(negate(5))

 var toArray = function (x, y, z) {
 	var output = [x, y, z]
 	return output

}

//console.log(toArray(4, 6, 2))

var startsWithA = function (string) {
	
	 if ( string.charAt[0]=='a') {
		return true
	}
	else {
		return false
	}
}
//console.log(startsWithA('banana'))

var excite = function(word) {
	output = word + '!!!'
	return output
}

//console.log(excite('banana'))

var sun = function(word) {
	if (word.indexOf('sun') !== -1){
		return true
	}
	else {
		return false
	}
}

//console.log(sun('sunday'))

var tiny = function(n) {

	if ( n>0 && n<1) {
		return true
	}
	else {
		return false
	}

}

//console.log(tiny(.2))

var letterCapitalize = function(string){
	var words = string.split(' ')

	for ( i=0 ; i<words.length ; i++) {
		var letters = words[i].split('')
		console.log(letters)
		letters[0]= letters[0].toUpperCase()
		console.log(letters)
		words[i] = letters.join('')
		console.log(words)
		}

		string = words.join(' ')
		return string
	}
//console.log(letterCapitalize('this is a sentance'))
	

var wordCount = function(string) {
	var words = string.split(' ')
	var answer = words.length	
	return answer
	}	
	
	
var primeTime = function(number) {

	for ( var i=2 ; i<number ; i++) {
		if (number%i === 0) {
			return true
		}
		else {
			return false

		}
	}
	
}


var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

var probmlem1 = function(array) {

	for(var i=0; i<animals.length-1; i++) {
 		console.log(animals[i]);
	}
}

var problem2 = function(array) {
	for(var i=0; i<animals.length; i++) {
 		if (i%2 == 0 ) {
 			console.log(animals[i])
 		}
	}	
}

var problem3 = function(array) {
	for(var i=animals.length-1; i>=0; i--) {
 		console.log(animals[i]);
	}
}

var problem4 = function() {
	 for(var i=0 ; i<animals.length ; i++) {
	 	if (i === 0 || i === animals.length-1) {
	 		console.log(animals[i])
	 	}
	 	else {
	 		console.log(animals[i])
	 		console.log(animals[i])
	 	}
	 }

}


var getName = function(object) {

	return object.name

}

//console.log(getName({ name: 'Luisa', age: 25 }))

var totalLetters = function(array) {
	var total = 0
	for(var i=0 ; i<array.length ; i++) {
		 total += array[i].length
		console.log(total)
	}
		return total

}


var negativeIndex = function(array, n) {
	var i = array.length+n
	return array[i]

}

//var keyValue = function(key, value)

var removeM = function(string) {
	var replace = string.replace("m", "")
	return replace
}





















