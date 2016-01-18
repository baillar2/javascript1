//var phoneNumber = prompt("Please enter your phone number as  555-555-5555", "")

//if (phoneNumber.charAt(3)=== "-" && phoneNumber.charAt(7) === "-") {
//	console.log("You have entered a valid phone number")
//}
//else {
//	alert("Please enter a valid number as 555-555-5555")
//	var phoneNumber = prompt("Please enter your phone number as  555-555-5555","" )
//}

var birthDate = prompt("enter birth date as xx/xx/xxxx", "")

if (birthDate.charAt(2)==="/" && birthDate.charAt(5)==="/") {
	console.log("Thank you")
}
else {
	console.log("please enter a valid birth date as xx/xx/xxxx")
	var birthDate = prompt("enter birth date as xx/xx/xxxx", "")
}

