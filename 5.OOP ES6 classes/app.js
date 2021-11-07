// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }
//   greetings() {
//     return `Hello there  ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date();
//     return Math.abs(ageDate.getFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }
//   //create a standalone method (we can use it just with the class constructor, not with the instantiations)
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// console.log(mary.getsMarried('Mommo'));
// console.log(mary);

// // use the static method
// console.log(Person.addNumbers(2, 7));
// // instanciate an object = create an object from a class constructor

class Bookstore {
  // your code here
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  storeBook(book) {
    this.books.push(book);
  }

  getBook(title) {
    return this.books.includes(title) ? title : false;
  }

  getAllBooks() {
    return this.books;
  }
}

class Book {
  // your code here
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}

let book = new Bookstore();
book.storeBook('mamma');
console.log(book.getBook('mamma'));

/////////////////
class Bookstore {
  // your code here
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  storeBook(book) {
    this.books.push(book);
  }

  getBook(title) {
    return this.books.includes(title) ? title : false;
  }

  getAllBooks() {
    return this.books;
  }
}

class Book {
  // your code here
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
  }

  changeTitle(newTitle) {
    this.title = newTitle;
  }
}
