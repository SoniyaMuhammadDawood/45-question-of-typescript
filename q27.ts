/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//if and else if statement
//version 1

let alien_color: string = "green";

if(alien_color === "green"){ console.log("version 1: Congratulations! You earned 5 points for shooting the green alien.");
} 
else if (alien_color === "yellow"){
    console.log(" Congratulations! you earned 10 points for shooting the yellow alie");
}
else if(alien_color === " green"){
    console.log("Congratulations! you earned 15 points for shooting the red alien.")
}

//version 2

let alien_color2: string = "yellow";

if(alien_color2 === "green"){ console.log(" Congratulations! You earned 5 points for shooting the green alien.");
} 
else if (alien_color2 === "yellow"){
    console.log("version 2: Congratulations! you earned 10 points for shooting the yellow alien");
}
else if(alien_color2 === " green"){
    console.log("Congratulations! you earned 15 points for shooting the red alien.")
}

//version 3

let alien_color3: string = "red";

if(alien_color3 === "green"){ console.log(" Congratulations! You earned 5 points for shooting the green alien.");
} 
else if (alien_color3 === "yellow"){
    console.log(" Congratulations! you earned 10 points for shooting the yellow alien");
}
else if(alien_color3 === "red"){
    console.log("version 3: Congratulations! you earned 15 points for shooting the red alien");
}