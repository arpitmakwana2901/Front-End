// Remove Duplicate Phone Numbers:
// A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. 
// Write a function to remove duplicates.
// Hint: Use Set or a loop.


function main(phone){
    return[...new Set(phone)]
}
main();

const phone = [9876543210, 9123456789, 9876543210, 9000000000];
console.log(main(phone));

