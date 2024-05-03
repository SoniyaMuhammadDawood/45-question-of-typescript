/* 3. Name Cases: Store a person’s name in a variable, and then print that person’s
 name in lowercase, uppercase, and titlecase.*/
var personName = "Soniya dawood";
//In lowercase
console.log(personName.toLowerCase());
//In upppercase
console.log(personName.toUpperCase());
//In titlecase
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
