// Check for Available Seats:
// A movie theater has an array of available seat numbers: [3, 5, 7, 9, 12]. Write a function to check if seat number 7 is available.
// Hint: Use .includes() or a loop.

function main(){
    let number = [3, 5, 7, 9, 12];

const storeNumber = number.includes(7);
console.log(storeNumber);

}

main()