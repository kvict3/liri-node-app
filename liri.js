// Grabs the keys variables
var keys = require('./keys.js');

// Gets all of twitterKeys bands from the keys file.
var keyList = keys.twitterKeys;

// Grabs the genre information
if (process.argv[2]) {
	var genre = process.argv[2];
}

for (var key in keyList) {

	// If the genre matches the key then print that band.
	if (key === genre || genre === undefined) {
		console.log("A " + key + " band is " + keyList[key] + ".");
	}
}