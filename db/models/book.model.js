const { Model, DataTypes } = require('sequelize');

const BOOK_TABLE = 'books';

const BookSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,

  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING
  },
  year: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Book extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: BOOK_TABLE,
      modelName: 'Book',
      timestamps: false
    }
  }
}

module.exports = { BOOK_TABLE, BookSchema, Book }
