// Count Occurrences of an Item:
// A library has multiple copies of books in its inventory: ["Book A", "Book B", "Book A", "Book C", "Book A"].
//  Write a function to count how many times "Book A" appears.
// Hint: Use a loop or filter().


    let inventory = ["Book A", "Book B", "Book A", "Book C", "Book A"];
    let storeInventory = inventory.filter((element)=>{
        return element == "Book A";
    })
    console.log(storeInventory.length);
