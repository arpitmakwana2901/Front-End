// Create an array of objects to represent products in an e-commerce store.
// Include properties like name, price, and stock.
// Write a loop to display all product details.

const store = [
    {
        
    name : 'car',
    price : 3000000,
    stock : 'new',

    name : 'bus',
    price : 4000000,
    stock : 'new'
    }

]

store.forEach((store) => {
    console.log(`Name: ${store.name}`);
    console.log(`Price: $${store.price}`);
    console.log(`Stock: ${store.stock}`);
  });



