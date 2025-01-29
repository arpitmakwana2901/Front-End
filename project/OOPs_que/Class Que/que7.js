class Book {
    constructor( title, author,publication_year){
        this.title = title;
        this.author = author;
        this.publication_year = publication_year;
    }
}

class Ebook extends Book {
    constructor(title,author,publication_year,price) {
        super(title,author,publication_year)
        this.price = price;
    }
    showBook(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear}, Price: ${this.price}`)
    }
    
}

const book1 = new Ebook("javascript","author",2010,500.25);
book1.showBook();