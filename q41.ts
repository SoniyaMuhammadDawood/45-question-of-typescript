/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

function show_magicians(magician:string[]){
    magician.forEach((name) => console.log(name));
}

//Define an array of magicians names
let magician_name:string[]= ["Herry potter", "cris angel", "derren brown"]

//callingb a function
show_magicians(magician_name);

