// A form received some invalid values: [0, "A", "", null, "B", undefined]. 
// Write a function to remove all falsey values (like 0, null, undefined) from the list.
// Hint: Use .filter().


let numbersData = [0, "A", "", null, "B", undefined];

const storeNumbers = numbersData.filter((element)=>{
    return element;
  })
console.log(storeNumbers);
  