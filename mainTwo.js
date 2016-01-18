 var anyWord = prompt("Enter any word", "")

 console.log(anyWord.length)
 console.log(anyWord)
 console.log(anyWord.charAt(2))
 console.log(anyWord.toLowerCase())
 console.log(anyWord.toUpperCase())
 console.log("Here is your word in a " + anyWord + " sentance!")
 
 for (var i=1; i<=3; i++) {
	console.log(anyWord.charAt(i))
}
console.log(anyWord.substr(1,3))
