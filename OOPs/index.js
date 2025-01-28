
    
function UserData (userName,age,password,address,organization){
    object = {}
    object.userName = userName;
    object.age = age;
    object.password = password;
    object.address = address;
    object.organization = organization;
    object.print = function (run){
        console.log(
            `Name:${this.userName},Age:${this.age},Password:${this.password},Organization:${this.organization} run: ${run}`
        );
    };
    
    return object;
}

let rohit = UserData(
    "Rohit Sharma",
    36,
    "rohit45",
    "Cricket",
    "Edan Garden"
)

console.log(rohit)
rohit.print("1000000")