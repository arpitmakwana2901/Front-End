class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print(){
        return `${this.make}, ${this.model}, ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year)
        this.doors = doors;
    }
    display(){
        console.log(`Car: ${this.year} ${this.make} ${this.model}, Doors: ${this.doors}`);
    }
}

const car1 = new Vehicle("Skoda", "Slavia",2024);
console.log(car1);

const car = new Car("Toyota","Fortuner",2025,5);
console.log(car)