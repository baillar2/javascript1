//alert('hello boulder!');


//var userName = prompt ("what is your name", "")

//console.log ("Hello " + userName + "!")

for (var i = 0; i < 600; i+=100) {
	console.log(i)
}

for (var i = 1; i < 65; i *= 2) {
	console.log(i)
}

for (var i = 1; i <= 3; i++) {
	for(var j = 1; j <=3; j++) {
		console.log(i)
	}
}

for (var i=0; i <=10; i+=2){
	console.log(i)
}

for (var i=3; i<=15; i+=3){
	console.log(i)
}

for (var i=9; i>=0; i--){
	console.log(i)
}

for (var i = 0; i <= 4; i++) {
	for(var j = 0; j <=3; j++) {
		console.log(j)
	}
}

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

for (var i=0 ; i<students.length ; i++) {
	if(students[i].age > 25) {
		console.log(students[i].name+' is older than 25')
	}
}




















