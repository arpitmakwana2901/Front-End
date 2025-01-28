function Animal(animalName,color = "nocolor"){
    this.animalName = animalName;
    this.color = color;
}

Animal.prototype.show = function(){
    console.log(`${this.animalName}`)
}

Dog.prototype = Object.create(Animal.prototype);

function Dog(animalName, type, color) {
    Animal.call(this, animalName, color);
    this.type = type;
  }

  function Cat(animalName, type, color) {
    Animal.call(this, animalName, color);
    this.type = type;
  }

  let data = new Dog("pug","street","black")
  console.log(data);

  let cat = new Cat("pug","street","black")
  console.log(cat)