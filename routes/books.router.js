const express = require('express');
const BookService = require('./../services/book.service');

const router = express.Router();

const service = new BookService();

router.get('/',
  async (req, res) => {
    const books = await service.find();
    res.json(books);
  }
);

router.get('/:id',
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
  async (req, res) => {
    const body = req.body;
    const newBook = await service.create(body)
    res.json(newBook);
  }
);

router.patch('/:id',
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
  async (req, res) => {
    const { id } = req.params;
    const bookDelete = await service.delete(id);
    res.json(bookDelete);
  }
);

module.exports = router;
