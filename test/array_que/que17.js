// Split Attendees into Groups:
// An event has 10 attendees: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]. Write a function to split them into groups of 3.
// Hint: Loop and use slice().

// let array =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// for(i=0; i<array.length-1; i=i+3)
//     {

//     console.log(array.slice(i,i+3))    
// }

let array =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

for(i=0;i<array.length-1;i=i+3)
    
    {
    console.log(array.splice(i,i+3));
    }