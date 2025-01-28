
function UserData(userName,age,password,address,organization){
    this.userName = userName;
    this.age = age;
    this.password = password;
    this.address = address;
    this.organization = organization;

    // this.print = function (){
    //     console.log(`name:${this.userName},age:${this.age},password:${this.password},address:${this.address},organization:${this.organization}`)
    // }
}

UserData.prototype.print = function(){
    return `Name:${this.userName},age:${this.age},password:${this.password},organization:${this.organization}`
}

let elonmusk = new UserData(
    "elonMusk",
    55,
    "password123",
    "123 main",
    "Space"
)

let rohit = new UserData(
    "Rohit Sharma",
    36,
    "rohit45",
    "Cricket",
    "Edan Garden"
)

console.log(elonmusk.print());
console.log(rohit)
