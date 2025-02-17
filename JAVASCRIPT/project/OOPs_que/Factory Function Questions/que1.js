function createProduct(name,price,category){
    object = {};
    object.name = name;
    object.price = price;
    object.category = category;
    object.print= function(text){
        console.log(`Name:${this.name}, Price:${this.price}, Category:${this.category} Text:${text}`)
    }
    return object;
}

let data = createProduct("VIvo",50000,"Mobile")
console.log(data)
data.print("Blueprint")
