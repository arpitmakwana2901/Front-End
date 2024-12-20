// ind Second Largest Sale Amount:
// A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.
// Hint: Sort the array or find the largest, then exclude it.

let number = [200, 400, 100, 700, 500];
let sum = 0;

function main(){
    number.sort((a,b) =>b-a);
    // console.log(number);
    console.log(number[0]);
    
}

main();