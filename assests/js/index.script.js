class Book {
    constructor(title, autor, ndp){
        this.title = title;
        this.autor = autor;
        this.ndp = ndp;
    }
    }
    
    class User {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.booksBorrowed = []
        }
    
        getBookBorrewed(book) {
    this.booksBorrowed.push(book);
        }
    }
    
    class Libary {
        constructor(){
            this.book = [];
            this.user = [];
        }
        getBooks(book){
    this.book.push(book);
        }
        getUser(user){
    this.user.push(user);
        }
    }
    
    
    
    
    const book1 = new Book(`HP`, `J.K. Rolling`, `300`);
    const book2 = new Book(`HP2`, `J.K. Rolling`, `350`);
    const book3 = new Book(`Scarabook`, `Jonh Kenedy`, `10000000`);
    const book4 = new Book(`Android`, `Alberto Ainsten`, `5`);
    const user1 = new User(`Scara`, 17);
    const user2 = new User(`Andrey`, 16);
    
    let users = [user1.name, user2.name];
    let books = [book1.title, book2.title, book3.title, book4.title]
    
    const libary = new Libary();
    
    libary.getBooks(books);
    libary.getUser(users);
    
    user1.getBookBorrewed(book1.title);
    user1.getBookBorrewed(book2.title);
    
    user2.getBookBorrewed(book3.title);
    user2.getBookBorrewed(book4.title);
    
    console.log(`O(a) ${user1.name} pegou os livros ${user1.booksBorrowed}`);
    console.log(`O(a) ${user2.name} pegou os livros ${user2.booksBorrowed}`);
    
    
    console.log(`Os usuarios são: ${libary.user}`);
    console.log(`Os livros são: ${libary.book}`);
    console.log(libary);
    