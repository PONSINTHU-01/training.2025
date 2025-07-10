 let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

let valid=20
if (valid>18) 
{
  var greeting = "can vote";
}
else{
    greeting= "Not eligibile"
}
console.log(greeting);

let num = 7;
let result = (num % 2 == 0) ? "Even" : "Odd";
console.log(result);

let uname = "admin";
let pass = "1234";

if (uname === "admin") {
    if (pass === "1234") {
        console.log("successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
