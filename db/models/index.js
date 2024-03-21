const { BookSchema, Book } = require('./book.model');

function setupModels(sequelize) {
  Book.init(BookSchema, Book.config(sequelize));
}

module.exports = setupModels;
