/*25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
//Passing version
var alien_color = "gree";
if (alien_color === "green") {
    console.log("Congratulations! you earned 5 points!");
}
//Failing version
if (alien_color === "yellow") {
    console.log("alien color is red");
}
