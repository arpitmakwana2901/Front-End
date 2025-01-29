
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    print(){
        return this.width * this.height
    }
    perameter(){
        return 2* this.width+this.height
    }
}

const rectangle = new Rectangle(10,15);
console.log(rectangle.print())  
console.log(rectangle.perameter())