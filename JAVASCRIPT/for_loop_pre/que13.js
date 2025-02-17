// Using a while loop, create a program that finds and prints the first 5 numbers divisible by both 3 and 7.

let i = 1;
let counter = 0;
while(i<500){
    if(i%3==0 && i % 7 == 0 ){
        console.log(i);
        counter++;
    }
    if(counter==5){
        break;
    }
    i++;
}


// let number = 1; 
// let count = 0;

// console.log("First 5 numbers divisible by both 3 and 7:");

// while (count < 5) {
//     if (number % 3 === 0 && number % 7 === 0) {
//         console.log(number); 
//         count++; 
//     }
//     number++;
// }


// let i = 1;
// let counter = 0;

// while(i<=500){
//     if( i % 3 == 0 && i % 7 == 0){
//         console.log(i);
//         counter++;
//     }
//     if(counter==5){
//         break;
//     }    
//     i++;
// }