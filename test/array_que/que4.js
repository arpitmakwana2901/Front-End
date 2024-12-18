let salary = [45000, 55000, 30000, 70000, 60000];
let sum = 0;

const storeSalary = salary.forEach((ele)=>{
    console.log(ele);
    sum += ele;
})

console.log(sum);
console.log(storeSalary);
console.log(sum/salary.length);


