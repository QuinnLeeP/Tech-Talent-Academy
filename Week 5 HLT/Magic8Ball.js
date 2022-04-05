let userName = "Jane";
/* User can enter their name if they want to so the variable will be an empty string until then */             

if (userName == "Jane") {
    console.log(`Hello ${userName}!`);
} else {
    console.log("Hello!")
}
/* if statement to check if the username is equal to something */
var userQuestion = "Will I be successful?"

console.log(`${userName} asked, ${userQuestion}`)
/* the username is interpolated with the user question to state what question is asked */
var randomNumber = Math.floor(Math.random() * 11);
/* using the math.floor method and math.random method with the number 11 will return a number between 0 and 10 */
let eightBall = "";
/* the eightball variable is set to a blank string until the if function assigns a value to the varible */
if (randomNumber == 1) {
    eightBall = "It is certain";
} else if (randomNumber == 2) {
    eightBall = "It is decidedly so";
} else if (randomNumber == 3) {
    eightBall = "Reply hazy, try again";
} else if (randomNumber == 4) {
    eightBall = "Do not count on it";
} else if (randomNumber == 5) {
    eightBall = "My sources say no";
} else if (randomNumber == 6) {
    eightBall = "Outlook not so good";
} else if (randomNumber = 7) {
    eightBall = "Signs point to yes";
} else if (randomNumber == 8) {
    eightBall = "Soon a possibility";
} else if (randomNumber == 9) {
    eightBall = "I wouldn't count on it"
} else {
    eightBall = "Check back later";
}

console.log(eightBall);
