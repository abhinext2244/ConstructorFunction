function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}


function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}


Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log('------------------------');
};


const author1 = new Author('Shashi Tharoor', 2023, 'indian');
const author2 = new Author('Ma. Subramanian', 2023, 'indian');


const book1 = new Book("Ambedkar: A Life", author1, 'good', 6.99);
const book2 = new Book("Come! Let's Run", author2, 'excellent', 4.99);

book1.getBookInfo();
book2.getBookInfo();
