function main(){
    let prices= [1000, 2000, 1500, 2500];

const storePrices = prices.map((element)=>{
    return element * 0.9;    
})
console.log(storePrices);

}

main()