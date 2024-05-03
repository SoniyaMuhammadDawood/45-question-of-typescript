/*15. Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else 
to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your 
program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of 
the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your 
list*/

let guestArray: string [] = ["soniya", "hiba", "maheen"];
let cannotAttend: string = "maheen";
//console.log(cannotAttend + " cannot attend the dinner"); 


let newGuest: string = "ayesha";
guestArray[guestArray.indexOf(cannotAttend)] = newGuest;
// console.log(guestArray);


guestArray.map((items) => console.log( " Dear " + items + " You're invited to dinner."))