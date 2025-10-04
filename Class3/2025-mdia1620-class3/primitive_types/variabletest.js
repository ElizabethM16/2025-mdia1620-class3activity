//const - making a variable that can not be changed


//let making a varible that can be changed


//var - not used anymore cause it sucks


const greetings = "MI my name is...";
const myName = "Ely";

console.log(greetings, myName);

let numTimes = 0;

console.log("You've talked", numTimes, "times");
numTimes = 1;

console.log("You've talked", numTimes, "times");
numTimes = numTimes + 1;
console.log("You've talked", numTimes, "times");
numTimes++; //exact same thing as numTimes + 1
console.log("You've talked", numTimes, "times");