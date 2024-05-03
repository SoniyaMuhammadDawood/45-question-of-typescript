/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//Array if current_user
let user_name: string[]= ["admin", "soniya", "hiba", "maheen", "talha"];

//Array if new_user
let new_users: string[]= ["talha", "hamza", "soniya", "a.haseeb", "yahya"];

//loop through user_name to check fir userNames availability
new_users.forEach((new_one_user) => {
    let our_condition = user_name.some(
        (current_user)=>
            current_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase()
    )
    if (our_condition){
        console.log(` sorry ${new_one_user} is alredy taken`)
    }
    else { 
        console.log(` This ${new_one_user} is availible `)
    }
})
