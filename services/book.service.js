const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

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

  async create(data) {
    const newBook = {
      id: faker.string.uuid(),
      ...data
    }
    this.books.push(newBook);
    return newBook;
  }

  async find() {
    return this.books;
  }

  async findOne(id) {
    const book = this.books.find(item => item.id === id);
    if (!book) {
      throw boom.notFound('Book Not Found');
    }
    return book;
  }

  async update(id, changes) {
    const index = this.books.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Book not found');
    }
    const bookUpdate = this.books[index];
    this.books[index] = {
      ...bookUpdate,
      ...changes
    }
    return this.books[index];
  }

  async delete(id) {
    const index = this.books.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Book not found');
    }
    this.books.splice(index, 1);
    return { id }
  }
}

module.exports = BookService;
