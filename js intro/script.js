// This is where all the practise code from the Introduction to Javascript tutorial goes

console.log('hello world');


function hello(person) {
	console.log ("Hello " +person+"!");
}

function conversation(person) {
	hello ();
	console.log ("How are you?");
	console.log ("Goodbye");
} 

// This (above) doesn't work fully!!




// This is a function with a return
// It works

function greeting(person) {
	return 'Hello ' + person + '!';
}

// Now I'm supposed to call the function in side the function named hello, 
// but I'm not sure of the syntax

// And then check that conversation still works
// But it never did!
