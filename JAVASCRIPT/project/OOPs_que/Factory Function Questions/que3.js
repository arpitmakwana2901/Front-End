function createCar (model, rentalRate, availability){
    let object = {}
    object.model = model;
    object.rentalRate = rentalRate;
    object.availability = availability;
    object.print = function(){
        console.log(`Model:${this.model}, RentalRate:${object.rentalRate}, Availability:${this.availability}`)
    }
    return object;
}

let car1 = createCar("BMW",90000,"Yes");
console.log(car1);

let car2 = createCar("Fortuner",90000,"Yes");
console.log(car2)