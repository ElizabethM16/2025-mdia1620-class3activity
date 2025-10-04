

// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Title for the bot
const title = "THE ELY STORY BOT";

// Initialize variables
let myName = "Hero#1";  // Default name if user doesn't provide one
let storyCount = 0;

/**
 * Function that repeatedly asks the user for input (chatting loop)
 */
function TellStory() {
  // Prompt the user to say something (or type "exit" to quit)
  readline.question('They ' + myName + ' ! Type anything to continue to this story!. (type "exit" to quit): ', input => {


    if (storyCount === 0) {
      console.log("Once upon an time in the Land of Ely,");
    }
    if (storyCount === 1) {
      console.log("There was a hero named " + myName + ".");
    }
    if (storyCount === 2) {
      console.log(myName + " fought the scary dragon.");
    }
    if (storyCount === 3) {
      console.log(" The dragon was defeated and peace returned.");
    }
    if (storyCount === 4) {
      console.log(myName + " lived happily ever after.");
    }


    storyCount = storyCount + 1;

    if (storyCount === 5) {
      console.log("THE END")
      readline.close();
      return;
    }

    TellStory();
  });
}
/**
 * Function to ask for the user's name before starting the conversation
 */
function AskName() {
  console.log("WELCOME TO THE " + title); // Display the bot title
  // Ask the user for their name (or to type "exit" to quit)
  readline.question('What is your name? hero? (type "exit" to quit): ', input => {

    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks for chatting with me, BYE!"); // Farewell message
      readline.close(); // Close the input stream to end the program
      return;
    }

    // Assign the input string (user's name) to the myName variable
    myName = input;

    // After getting the name, start the conversation loop
    TellStory();
  });
}
// Start the program by asking for the user's name
AskName();

// Step 1: made a const that reads the input/output from the console via keyboard input.
// Step 2: made on const that named the bot "THE CHATTER BOT" 
// Step 3: made the initialized varibles for the name of user and provonding one if they don't input. Also a variable that count to keep track of how many times the user chatted
// Step 4: then their is a function that asks for user input repeatedly kinda like is a chatting loop asking there name and giving the user the option to leave the conversation.
//  If user type "exit" then there is an if statement that Acknowledge the user's input and says "You owe me X dollars" x depeding on how much they chat.
// If they did keep chatting then it will run a console.log that will attach an automatted  saying "you said:" + whatever you responded wiht then three strings to autmated
//  one from previous input to saying "that's great " my name I said previuosly with  an "! Tell me more." After that is also says  "We've spoken to each other " and # of times spoken to plus " the word "times"
// Step 5: when the user chats  5 times, there will be an end the conversation and prompt for payment
// Step 6 : at the bottom of the page there is a function that controlls the start of the conversation the askfunction. you do node init.js to resart everything.
// Import the readline module and create an interface for reading input/output from the console
// const readline = require('readline').createInterface({
//   input: process.stdin,   // Take input from the standard input (keyboard)
//   output: process.stdout  // Output text to the console
// });

// // Title for the bot
// const title = "THE ELY STORY BOT";

// // Initialize variables
// let myName = "Hero#1";  // Default name if user doesn't provide one
// let chatCount = 0;          // Counter to track how many times the user has chatted

// /**
//  * Function that repeatedly asks the user for input (chatting loop)
//  */
// function AskFunction() {
//   // Prompt the user to say something (or type "exit" to quit)
//   readline.question('Hello ' + myName + '! You are the hero to this story!. (type "exit" to quit): ', input => {

//     // If user types "exit", end the program
//     if (input.toLowerCase() === 'exit') {
//       console.log("Thanks for chatting with me, " + myName + ". BYE!"); // Farewell message
//       console.log("You owe me " + chatCount + " dollars."); // Show how many times they've chatted
//       readline.close(); // Close the input stream to end the program
//       return;
//     }

//     // If the user didn't type "exit", keep chatting
//     console.log("You said: " + input);
//     console.log("That's great", myName, "! Then there was "); // Acknowledge the user's input

//     // Increment chatCount by 1 each time the user chats
//     chatCount = chatCount + 1;
//     console.log("We've spoken to each other " + chatCount + " times"); // Show how many chats have happened

//     // If the user has chatted 5 times, end the conversation and prompt for payment
//     if (chatCount === 5) {
//       console.log("You've already exceeded the maximum amount. " + chatCount); // Alert user they've hit the limit
//       console.log("Please pay for the premium service before you continue."); // Prompt for payment
//       readline.close(); // End the chat
//       return;
//     }

//     // Recursively call the AskFunction() to keep the chat going
//     AskFunction();
//   });
// }

// /**
//  * Function to ask for the user's name before starting the conversation
//  */
// function AskName() {
//   console.log("WELCOME TO THE " + title); // Display the bot title
//   // Ask the user for their name (or to type "exit" to quit)
//   readline.question('Hello, what is your name? Fellow hero? (type "exit" to quit): ', input => {

//     // If user types "exit", end the program
//     if (input.toLowerCase() === 'exit') {
//       console.log("Thanks for chatting with me, BYE!"); // Farewell message
//       readline.close(); // Close the input stream to end the program
//       return;
//     }

//     // Assign the input string (user's name) to the myName variable
//     myName = input;

//     // After getting the name, start the conversation loop
//     AskFunction();
//   });
// }

// // Start the program by asking for the user's name
// AskName();