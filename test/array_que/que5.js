function main(){
    let number = ["John", "Aman", "Rita", "Raj"];
    let sum = [];

    for(let i = number.length-1;i>=0;i--){
        sum.push(number[i]);
    }
    console.log(sum);
    
}

main();