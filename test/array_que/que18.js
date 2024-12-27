// Rotate the Line of Cars:
// A parking lot has cars in a line: ["Car1", "Car2", "Car3", "Car4"]. Write a function to rotate the cars so "Car4" comes to the front.
// Hint: Use .pop() and .unshift().


// let car = ["Car1", "Car2", "Car3", "Car4"];
// const storeCar = car.pop();
// car.unshift("Car4");
// console.log(car);


let car = ["Car1", "Car2", "Car3", "Car4"];
car.unshift(car.pop());
console.log(car);