// This is where all the practise code from the Introduction to Javascript tutorial goes

console.log('hello world');


function hello(person) {
	console.log (greeting (person));
}

function conversation(person, topic) {
	hello (person);
	console.log ("How are you?");
	console.log ("Goodbye");
	console.log ("Do you like " + topic + "?")
} 

// This (above) doesn't work fully!!


// This is a function with a return
// It works

function greeting(person) {
	return 'Hello ' + person + '!';
}



var person_a = {
	first_name: "Jessica",
	likes: "Owls",
};

var person_b = person_a;

console.log("Before");
console.log(person_a.first_name);
console.log(person_b.first_name);

person_a.first_name = "Poopy";

console.log("After");
console.log(person_a.first_name);
console.log(person_b.first_name);


