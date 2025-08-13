// let count = 0;

// for (let i = 0; i <= 5; i++) {
//   for (let count = 0; count <= i; count++) {
//     count++;
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     count++;
//   }
// }

// 1. OUTPUT ==
// *
// **
// ***
// ****
// *****

// let str = "";

// for (let i = 1; i <= 5; i++) {
//   str += "*";
//   for (let j = 1; j <= i; j++) {
//     str += "";
//   }

//   console.log(str);
// }
// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let j = 1; j <= 5; j++) {
//     if (  i + j == 4 || i + j == 6 || i + j == 8) {
//       str += "*";
//     } else {
//       str += " ";
//     }
//   }
//   console.log(str);
// }

// 2.

//     *
//    **
//   ***
//  ****
// *****

// let k = 5;

// // for (i = 1; i <= 5; i++) {
// //   let str = "";
// //   for (let j = 1; j <= k - i; j++) {
// //     str += " ";
// //   }
// //   for (let m = 1; m <= i; m++) {
// //     str += "*";
// //   }
// //   console.log(str);
// // }

//3
// *****
//  ****
//   ***
//    **
//     *

let k = 5;

for (let i = 5; i >= 5; i--) {
  let str = "";
  for (let j = 1; j <= k - i; j++) {
    str += " ";
  }
  for (let m = 1; m <= i; m++) {
    str += "*";
  }
  console.log(str);
}
