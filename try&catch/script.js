console.log("one");
// setInterval(()=>{
//     console.log("fooooor");
    
// },2000)
console.log("two");
console.log("three");

let count = 1;
const id = setInterval(()=>{
    console.log(`${count}`);
    if(count == 15){
        clearInterval(id)
    }
    count ++
},2000)