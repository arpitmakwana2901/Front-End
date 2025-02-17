// Count Vowels in a Name:
// A user enters their name "Rahul". Write a function to count how many vowels are in the name.
// Hint: Check for vowels (a, e, i, o, u).

// run with loop ---------->>>>>>>>

// let array = "Rahul";
// let count = 0;

// for(i=0;i<=array.length;i++){
//     if(array[i] == 'a' || 
//         array[i] == 'e' || 
//         array[i] == 'i' || 
//         array[i] == 'u' ||
//         array[i] == 'o')
//         {
//         count ++;
//     }
// }


// console.log(`there are ${count} vowels`);



// simple run   --------------->>>>>>>>>>>>>>>>>>>>

const vowels = [
    "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

let result = vowels.filter((element)=>{
    if(
        element == 'a' ||
        element == 'e' ||
        element == 'i' ||
        element == 'o' ||
        element == 'u'
    ){
        return element;
    }
})

console.log(result,result.length);
