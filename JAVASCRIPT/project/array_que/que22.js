// Remove Spaces from a Message:
// A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
// Hint: Use .replace() or .split() and .join().

// let question = "Hello World 2024";
// const storeQue = question.split("").join("-");
// console.log(storeQue);



// let message = "Hello World 2024";
// const newMessage = removeSpaces(message);

// function removeSpaces(message){
//     return message.split(" ").join("");
// }
// console.log("Message without spaces:", newMessage);


let message = "Hello World 2024";

const storeMsg = message.split("").join("");

console.log(storeMsg);
