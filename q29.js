"use strict";
/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["mango", "strawbery", "kiwi"];
//using 5 dependents if statements
if (favorite_fruits.includes("mango")) {
    console.log(" I really like to eat mango");
}
if (favorite_fruits.includes("pineapple")) {
    console.log(" I really like to eat pineapple");
}
if (favorite_fruits.includes("kiwi")) {
    console.log(" I really like to eat kiwi");
}
if (favorite_fruits.includes("strawbery")) {
    console.log(" I really like to eat strawbery");
}
if (favorite_fruits.includes("palm")) {
    console.log("I really like to eat palm");
}
