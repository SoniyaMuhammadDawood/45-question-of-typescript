/*31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
var user_name = ["admin", "soniya", "hiba", "maheen", "qirat"];
user_name = [];
if (user_name.length === 0) {
    console.log("We need to find some users!");
}
else {
    user_name.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("Hello ".concat(oneuser, ",  would you like see a status report?"));
        }
        else {
            console.log("thank you ".concat(oneuser, ", for loggin again"));
        }
    });
}
