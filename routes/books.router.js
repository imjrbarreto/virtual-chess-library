const express = require('express');
const BookService = require('./../services/book.service');
const { getBookSchema, createBookSchema, updateBookSchema } = require('./../schemas/book.schema');
const validatorHandler = require('./../middleware/validator.handler');

const router = express.Router();

const service = new BookService();

router.get('/',
  async (req, res) => {
    const books = await service.find();
    res.json(books);
  }
);

router.get('/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const book = await service.findOne(id);
      res.send(book);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newBook = await service.create(body)
      res.json(newBook);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getBookSchema, 'params'),
  validatorHandler(updateBookSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const bookUpdate = await service.update(id, body);
      res.json(bookUpdate);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getBookSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const bookDelete = await service.delete(id);
      res.json(bookDelete);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
