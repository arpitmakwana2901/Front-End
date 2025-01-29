class Product{
    constructor(productId, name, price){
        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    totalPrice(quantity){
        return this.price*quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    totalPrice(quantity) {
        const basePrice = super.totalPrice(quantity);

        const warrantyCost = this.warrantyPeriod * 10;
        return basePrice + warrantyCost;
    }
}

const product = new PersonalCareProduct(50, 'TV', 1000, 2);

const newPrice = product.totalPrice(1);
console.log(`The total price is: ${newPrice}`);

