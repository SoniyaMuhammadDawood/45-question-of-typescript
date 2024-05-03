/*43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
//Define the function to show magicians names
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magicians_name = ["Harry poter", "Criss Angel", "Derren Brown"];
//Making a copy of original array through .slice() function
var copy_magicians_name = magicians_name.slice();
//Modify the copy array to include "The Great" with thier names
var copy_great_magicians = make_great(copy_magicians_name);
//show both arrays original and copied
//original
console.log("\nOriginal Array:");
show_magicians(magicians_name);
// //copied
console.log("\nCopied Array:");
show_magicians(copy_great_magicians);
