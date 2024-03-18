const { faker } = require('@faker-js/faker');

class BookService {
  constructor() {
    this.books = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.books.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        year: faker.date.anytime()
      });
    }
  }

  create(data) {
    const newBook = {
      id: faker.string.uuid(),
      ...data
    }
    this.books.push(newBook);
    return newBook;
  }

  find() {
    return this.books;
  }

  findOne(id) {
    const book = this.books.find(item => item.id === id);
    // validar...
    return book;
  }

  update(id, changes) {
    const index = this.books.findIndex(item => item.id === id);
    const bookUpdate = this.books[index];
    this.books[index] = {
      ...bookUpdate,
      ...changes
    }
    return this.books[index];
  }

  delete(id) {
    const index = this.books.findIndex(item => item.id === id);
    this.books.splice(index, 1);
    return { id }
  }
}

module.exports = BookService;
