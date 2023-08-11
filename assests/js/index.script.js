class Book {
    constructor(title, autor, ndp) {
        this.title = title;
        this.autor = autor;
        this.ndp = ndp;
    }
}

class User {
    constructor(name, age, ndlp) {
        this.name = name;
        this.age = age;
        this.booksBorrowed = [];
        this.ndlp = []
    }

    getBookBorrewed(book) {
        this.booksBorrowed.push(book);
    }
}

class Libary {
    constructor() {
        this.book = [];
        this.user = [];
    }
}



const libary = new Libary();

const book1 = new Book(`HP`, `J.K. Rolling`, `300`);
const book2 = new Book(`HP2`, `J.K. Rolling`, `350`);
const book3 = new Book(`HP3`, `J.K. Rolling`, `350`);
const book4 = new Book(`HP4`, `J.K. Rolling`, `350`);
const user5 = new User(`Andrey Botero`, 17);

user1.getBookBorrewed(book1);

console.log(book1);
console.log(user1);
console.log(libary);    
