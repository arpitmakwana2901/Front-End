
// Create an object to represent your favorite movie.
// Include properties like title, director, year, and genre.
// Add a method to display the movie details.

// const movie = {
//         "title": "Inception",
//         "director": "Christopher Nolan",
//         "year": 2010,
//         "genre": "Science Fiction",

//         print : function(){
//             console.log(`title:${this.title}`);
//             console.log(`director:${this.director}`);
//             console.log(`year:${this.year}`);
//             console.log(`genere:${this.genre}`);
//         }
// }

// movie.print();

const movie = {
    "title":"inception",
    "author":"nolan",
    "year":"2012",
    "director":"rohit",

    print : function(){
        console.log(`title:${this.title}`);
        console.log(`author:${this.author}`);
        console.log(`year:${this.year}`);
        console.log(`dir:${this.director}`);
    }
}

movie.print();
