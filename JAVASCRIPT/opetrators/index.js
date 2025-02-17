// Types Of Operator
// Arithmetic operators  [ Addition + , Subscration -, Multiplication *, Division /]
// Assignment operators     [//compound assignment operators] [=,+=,-=,*=,/=,]
// Comparison operators
// Logical operators


// 1 Arethmetic operator
    
// Addititon
// let a = 12;
// let b = 12;
// let c = a+b;
// console.log(c);
// console.log(a+b);

// Substration
// let a = 12;
// let b = 12;
// let c = a-b;
// console.log(c);
// console.log(a-b);

// Multiplication
// let a = 12;
// let b = 12;
// let c = a*b;
// console.log(c);
// console.log(a*b);

// Division
let a = 12;
let b = 12;
// let c = a/b;
// console.log(c);
// console.log(a/b);

// console.log(Math.floor(a / b));
// console.log(Math.ceil(a / b));
// console.log(Math.round(a / b));


// 2... Assignment Operator

// Compound Addition Assignment Operator
// let sum  = 8;
// sum += b;
// console.log(sum);

// Compound Substration Assignment Operator
let sub = 2;
sub -= b;
console.log(sub); 

// Compound Multiplication Operator
// let mul  = 2;
// mul **= b;
// console.log(mul,"exponment")
// console.log(!!true)  -----------------

// Compound Devision Operator
// let div = 12;
// div /= a;
// console.log(div)

// 3.. Comparision Operator
// >
console.log(45>5)

// <
console.log(45<5)

// >=
console.log(15>=45)

// <=
console.log(15<=45)

// !=
console.log(45!=45)

// ==
console.log(45 == 45)

// !==
console.log("45" != 45);


// Logical Opeartor
// && and return always false values false and comparision
// || and return always return values false and comparision

console.log(45 > 6 && 55 < 76 && 3 < 45 && 44 == 44, "logical of &&")
console.log(45 < 6 || 55 > 76 || 3 < 45 || 44 != 44, "logical of ||");
console.log(43!="44")



// Coversion ----// Implicit ---- // Explicit

let string = "1ab23";
console.log(typeof string);
string = Number(string);
console.log(string);

// Implicit
let boolean = true;
boolean = Number(boolean);
console.log(boolean);

// expicit
let number2 = -45;
number2 = Boolean(number2);
console.log(number2);

let string2 = "5";
string2 = Number(string2);
console.log(string2);

let number3 = 0;
number3 = Boolean(number3);
console.log(number3);

console.log("123a" - 5); // implicit
console.log("1111" + (1111 + 2222));
console.log("1111"+(2222-2222)+"1111");
console.log("1111"*"1111"*"5555");
console.log(111*(555)+222-"444");

console.log("111" == String || 111 == Number || (111 >= 111 && "222" - 111 === 222 - 111) );
