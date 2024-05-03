/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
//making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = " I love Typescript"; }
    console.log("You select a ".concat(size, " size of shirt that print a message ").concat(message));
}
// calling a function of by default values
make_shirt();
//calling a function of medium size shirt with default message
make_shirt("medium");
//calling a function of any size and different message
make_shirt("small", "I love coding");
