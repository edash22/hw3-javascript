/* Create objects for the five most recent presidents */

var presidentObama = {
	firstName: "Barack",
	lastName: "Obama",
	termLength: "2 terms",
	party: "Democrat",
	yearsOfPresidency: "2009 - present"
};

var presidentBush1 = {
	firstName: "George",
	lastName: "Bush",
	termLength: "2 terms",
	party: "Republican",
	yearsOfPresidency: "2001 - 2009"
};

var presidentClinton = {
	firstName: "William",
	lastName: "Clinton",
	termLength: "2 terms",
	party: "Democrat",
	yearsOfPresidency: "1993 - 2001"
};

var presidentBush2 = {
	firstName: "George",
	lastName: "Bush",
	termLength: "1 term",
	party: "Republican",
	yearsOfPresidency: "1989 - 1993"
};

var presidentReagan = {
	firstName: "Ronald",
	lastName: "Reagan",
	termLength: "2 terms",
	party: "Republican",
	yearsOfPresidency: "1981 - 1989"
};

var presidents = [presidentObama, presidentBush1, presidentClinton, 
	presidentBush2, presidentReagan];
	
/* write out the first and last name of the third president in the array */
console.log(presidents[2].firstName + " " + presidents[2].lastName);
