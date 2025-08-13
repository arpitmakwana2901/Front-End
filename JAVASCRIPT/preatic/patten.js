// *
// **
// ***
// ****
// *****

// for(let i=1;i<=5;i++){
//      str =""
//      for(let j=1;j<i;j++){
//         str += "*"
//      }
//      console.log(str)
// }

// *****
// ****
// ***
// **
// *
// for(let i = 5;i>=1;i--){
//     str=""
// for(let j=1;j<=i;j++){
//     str+="*"
// }
// console.log(str)

// }

//     *
//     *
// * * * * *
//     *
//     *

// for(let i = 1; i<=5;i++){
//     let str= "";
//     for(let j = 1 ; j<=5;j++){
//        if(i===3||j===3){
//          str +="* "
//        }else{
//          str += "  "
//        }
//     }
//     console.log(str)
// }

// 

// [advance]
// // 56789
// 4567
// 345
// 23
// 1

// for(let i=5;i>0;i--){
//     let str=""
//     for(let j=i;j<(i*2);j++){
//         str += j
//     }
//     console.log(str)
// }


// * * * * *
//       *
//     *
//   *
// * * * * *

// let num =5;
// for(let i=1;i<=num;i++){
//     let str ="";
//     for(let j=1;j<=num+1;j++){
//         if(i+j ===num+1 || i == num || i == 1){
//             str += "*"
//         }else{
//             str +=" "
//         }
       
//     } 
//     console.log(str)
// }



// ******
//  *
//   *
//    *
// ******

// for(let i=1;i<=5;i++){
//     let str ="";
//     for(let j=1;j<=5+1;j++){
//         if(i===j || i === 5|| i===1){
//             str += "*"
//         }else{
//             str +=" "
//         }
       
//     } 
//     console.log(str)
// }



// for(let i=1;i<=5;i++){
//      let str=""
//     for(let j=1;j<=5;j++){
//         if(i%2==0){
//             str="*"
//         }else {
//             str+="*"
//         }
//     }
//     console.log(str)
// }


var myObject = {
    foo:"bar",
    func:function(){
        var self = this;
        console.log("outer func : this.foo = " + this.foo);
        console.log("outer func : this.foo = " + self.foo);
        (
            function(){
                console.log("inner func : this.foo = "+this.foo)
                console.log("inner func : this.foo = "+self.foo)
            }()
        )
    }
}

myObject.func();