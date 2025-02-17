class Person{
    constructor(name,age,country){
        this.name = name;
        this.age =age;
        this.country = country;
    }

    display(per){
        console.log(`${this.name} display ${per}`)
    }
}

let per1 = new Person("Arpit",21,"india")
console.log(per1);

let per2 = new Person("dhruv",22,"india")
console.log(per2)


// class arpit extends Person{
//     constructor(name,age,country){
//         super(name,age)
//     }
// }