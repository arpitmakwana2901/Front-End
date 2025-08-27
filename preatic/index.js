// ## Arithmetic Operators

// addition (+), subtraction (-), multiplication (*), division (/),  modulus (%).

// 1. Write a JavaScript code snippet that uses arithmetic operators to calculate the area of a circle given its radius. Assume the radius is 7. Display the result using `console.log`.

// let radius = 7;

// let area = 3.14159 * radius * radius;

// console.log(area);

// 2. Given the variables `a = 10`, `b = 20`, and `c = 5`, write a JavaScript code to find the value of `(a * b) / c + (b - a)`. Use `console.log` to display the result.

// let a = 10;
// let b = 20;
// let c = 5;

// let result = (a * b) / c + (b - a);
// console.log(result);

// 3. Given the variables `x = 5` and `y = 10`, use assignment operators to increment `x` by 2 and multiply `y` by `x`. Display the new values of `x` and `y` using `console.log`.

// let x = 5;
// let y = 10;

// x += 2;
// y *= x;

// console.log(x);
// console.log(y);

// 4. Write a JavaScript code snippet that uses the compound assignment operators to perform the following operations:
//     - Add 15 to `num`
//     - Subtract 5 from `num`
//     - Multiply `num` by 3
//     - Divide `num` by 2
//   Initialize `num` to 10, and log the result after each operation.

// let num = 10;

// num += 15;
// console.log("After Adding", num);

// num -= 5;
// console.log("After Sub", num);

// num *= 3;
// console.log("Mul", num);

// num /= 2;
// console.log("Div", num);

// console.log(num);

// ## Comparison Operators

// 5. Given the variables `score1 = 85` and `score2 = 90`, write a JavaScript code using comparison operators to check if both scores are greater than 80 and display the result using `console.log`.

// let score1 = 85;
// let score2 = 90;

// let result = score1 > 80 && score2 > 80;
// console.log(result);

// 6. Write a JavaScript code snippet to compare two strings, `"apple"` and `"banana"`, using comparison operators to check if the first string is less than the second string. Display the result using `console.log`.

// let str1 = "apple";
// let str2 = "banana";

// let result = str1 < str2;
// console.log(`Is "${str1}" less than "${str2}"? : ${result}`);

// ## Logical Operators

// 7. Given `age = 25` and `hasDrivingLicense = true`, use logical operators to write a condition that checks if the person is eligible to drive. Print the result using `console.log`.

// let age = 18;

// let hasDrivingLicense = true;

// let eligible = age >= 18 && hasDrivingLicense;

// console.log(eligible);

// 8. Write a JavaScript code snippet that checks if a number is between 10 and 50 (inclusive) or is a multiple of 5 using logical operators. Display the result using `console.log`

// let num = 25;

// let result = (num >= 10 && num <= 50) || num % 5 === 0;
// console.log(result);

// ## Type Conversion

// 9. Write a JavaScript code snippet that converts a string `"123.45"` to a number and adds 10 to it. Display the result using `console.log`.

// let str = "123.45";
// let num = Number(str);
// console.log(num);

// num += 10;

// console.log(num);

// 10. Write a JavaScript code snippet to convert a boolean value `true` to a string and concatenate it with `" is the value"`. Use `console.log` to display the result.

// let boolean = true;
// let result = String(boolean);

// console.log(result);

// ## `console.log` and `innerHTML`

// 11. Write a JavaScript code snippet that updates the content of a `<div>` with id `output` to show the result of `15 * 3` using `innerHTML`.

// 12. Write a JavaScript code snippet that uses `console.log` to display the values of variables `a = 5`, `b = 10`, and the result of their addition.

// ## `if` Statement

// 13. Write a JavaScript code snippet that checks if a given number is positive. Use an `if` statement and display the result using `console.log`.
// let num = 1;

// if (num >= 1) {
//   console.log("number is positive", num);
// } else if (num === 0) {
//   console.log("number is zero", num);
// } else {
//   console.log("Number is negetive", num);
// }

// 14. Given the variable `temperature = 30`, write an `if` statement that checks if the temperature is above 25. If true, log `"It's a hot day"` to the console.

// let temperature = 30;

// if (temperature > 25) {
//   console.log("It is hot day");
// }

// ## Nested `if-else` Statement

// 15.  Write a JavaScript code snippet that checks if a number is positive, negative, or zero using nested `if-else` statements. Display the appropriate message using `console.log`.

// 16. Write a JavaScript code using nested `if-else` statements to determine the grade of a student based on the following conditions:
//     - Grade "A" if score is 90 or above
//     - Grade "B" if score is between 80 and 89
//     - Grade "C" if score is between 70 and 79
//     - Grade "D" if score is below 70
//   Assume the score is 75.

// ## Combination Questions

// 17.  Write a JavaScript code snippet that uses arithmetic, comparison, and logical operators to determine if a number is both even and greater than 10. Display the result using `console.log`.

// let num = 13;

// let result = num % 2 === 0 && num > 10;
// console.log(result);

// 18. Write a code snippet that assigns a value to a variable `marks`, then checks if the marks are greater than or equal to 75. If true, assign "Passed" to another variable `result`, otherwise assign "Failed". Display `result` using `innerHTML`.

// 19. Given `num1 = 8` and `num2 = 3`, use a combination of arithmetic, assignment, and comparison operators to find if `num1` is a multiple of `num2` after incrementing `num1` by 1. Log the result.

let num1 = 8;
let num2 = 3;
num1 += 1;

let isMultiple = num1 % num2 === 0;
console.log(isMultiple);

// 20. Write a JavaScript code snippet that checks if a given variable `age` is either less than 18 or greater than 60 using logical operators, and displays the message `"Not eligible"` using `console.log`. If neither condition is met, display `"Eligible"`.

let age = 25;

if (age < 18 || age > 60) {
  console.log("Not Eligible");
} else {
  console.log("Eligible");
}
