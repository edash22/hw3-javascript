// JavaScript assorted functions

function howdy() {
	console.log("Ellen Dash says hi!");
}

howdy();

var numba = function(string) {
	if (string.length < 7) {
		console.log("What a short little word!");
	}
	else if (string.length == 7) {
		console.log("7 what a perfect choice!");
	}
	else {
		console.log("I'm sorry, but that's too many to count.");
	}
};

numba("7");
numba("seventy");
numba("university");

function inception(callback, value) {
	callback(value);
}

inception(function(someStr){console.log(someStr);},"Wild is a fantastic movie.");