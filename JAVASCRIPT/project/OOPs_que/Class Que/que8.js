class Animal{
    constructor(species,sound){
        this.species = species;
        this.sound = sound;
    }
}

class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound)
        this.color = color;
    }
    show(){
        console.log(`Spices:${this.species}, Sound:${this.sound}, color:${this.color}`)
    }
}

const animal1 = new Dog("spice","meow","black")
animal1.show()