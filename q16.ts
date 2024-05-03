/*16. More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to
the end of your list. 
• Print a new set of invitation messages, one for each person in your list.*/

//part 1 start
let guestArray: string []= ["soniya", "hiba", "maheen"];
let cannotAttend: string = "maheen";
let newGuest: string = "ayesha";

guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
console.log(guestArray);

// guestArray.map((items) => console.log("Dear " + items + " I found bigger dinner table so I am invited more peoples.")
// )

//part 2 begin
let guestbegg: string = "nisha";
guestArray.unshift(guestbegg);
console.log(guestArray);


//part 3 middle
let middleGuest: string = "huzaifa";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex, 0, middleGuest);
console.log(guestArray);


//part 4 append
guestArray.push("talha");
console.log(guestArray);

//part 5 invitation to all 
guestArray.map((items) => console.log("Dear " + items + " , you are invited in the more people catogory on dinner"))