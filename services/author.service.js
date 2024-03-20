const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom")

class AuthorService {
  constructor() {
    this.authors = [];
    this.generate();
  }

  generate() {
    const authorsList = [
      {
        name: "Jeremy Silman",
        country: "United States",
        description: "Jeremy Silman is a well-known American chess author, best known for his instructional books and articles.",
        image: "https://fakeurl.com/silman.jpg"
      },
      {
        name: "John Nunn",
        country: "United Kingdom",
        description: "John Nunn is a British grandmaster, author, and problem solver, renowned for his contributions to chess literature.",
        image: "https://fakeurl.com/nunn.jpg"
      },
      {
        name: "Mark Dvoretsky",
        country: "Russia",
        description: "Mark Dvoretsky was a highly respected Russian chess trainer and author, known for his insightful books on various aspects of the game.",
        image: "https://fakeurl.com/dvoretsky.jpg"
      },
      {
        name: "Yasser Seirawan",
        country: "United States",
        description: "Yasser Seirawan is an American chess grandmaster, author, and commentator, renowned for his instructional books and engaging writing style.",
        image: "https://fakeurl.com/seirawan.jpg"
      },
      {
        name: "Susan Polgar",
        country: "United States",
        description: "Susan Polgar is a Hungarian-American chess grandmaster, author, and former Women's World Chess Champion, known for her contributions to chess literature.",
        image: "https://fakeurl.com/polgar.jpg"
      },
      {
        name: "Jonathan Rowson",
        country: "United Kingdom",
        description: "Jonathan Rowson is a Scottish grandmaster, author, and philosopher, known for his insightful books on chess and psychology.",
        image: "https://fakeurl.com/rowson.jpg"
      },
      {
        name: "Artur Yusupov",
        country: "Germany",
        description: "Artur Yusupov is a Russian-German grandmaster, author, and renowned chess trainer, known for his comprehensive series of training manuals.",
        image: "https://fakeurl.com/yusupov.jpg"
      },
      {
        name: "Lev Alburt",
        country: "United States",
        description: "Lev Alburt is a Soviet-American grandmaster and chess author, known for his instructional books on various aspects of the game.",
        image: "https://fakeurl.com/alburt.jpg"
      },
      {
        name: "Andy Soltis",
        country: "United States",
        description: "Andy Soltis is an American chess grandmaster, author, and journalist, known for his numerous books and columns on chess.",
        image: "https://fakeurl.com/soltis.jpg"
      },
      {
        name: "Daniel King",
        country: "United Kingdom",
        description: "Daniel King is a British grandmaster, chess author, and commentator, known for his instructional videos and books.",
        image: "https://fakeurl.com/king.jpg"
      }
    ]
    this.authors = authorsList.map(author => ({ id: faker.string.uuid() , ...author}));

  }

  async create(data) {
    const newAuthor = {
      id: faker.string.uuid(),
      ...data
    }
    this.authors.push(newAuthor);
    return newAuthor;
  }

  async find() {
    return this.authors;
  }

  async findOne(id) {
    const author = this.authors.find(author => author.id === id);
    if(!author){
      throw boom.notFound('Author Not Found');
    }
    return author;
  }

  async update(id, updatedData) {
    const index = this.authors.findIndex(author => author.id === id);
    if(index === -1){
      throw boom.notFound('Author not found');
    }
    const author = this.authors[index];
    this.authors[index] = {
      ...author,
      ...updatedData
    }
    return this.authors[index]
  }

  async delete(id) {
    const index = this.authors.findIndex(author => author.id === id);
    if(index === -1){
      throw boom.notFound('Author not found');
    }
    this.authors.splice(index, 1);
    return { id };
  }
}

module.exports = AuthorService;
