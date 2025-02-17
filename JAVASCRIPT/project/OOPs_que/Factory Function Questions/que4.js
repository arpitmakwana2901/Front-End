function createBook (title,author,ASBN,availableCopies){
    let object = {};
    object.title = title;
    object.author = author;
    object.ASBN = ASBN;
    object.availableCopies = availableCopies;
    object.print= function(){
        console.log(`title:${this.title}, author:${this.author}, ASBN:${this.ASBN}, availableCopies:${this.availableCopies}`)
    }
    return object
}

const data  =  createBook("abcd","author","ASBN","avalibale")
console.log(data)