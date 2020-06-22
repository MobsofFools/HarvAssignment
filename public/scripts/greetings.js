const greetings = ["Good Morning", "Welcome to our page", "Hello", "Henlo", "Bork", "SQUAWK"];

exports.greet = function getGreeting()
{
	let rand = Math.floor(Math.random() * greetings.length);
	return greetings[rand];
}
