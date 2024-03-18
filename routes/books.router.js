const express = require('express');
const BookService = require('./../services/book.service');

const router = express.Router();

const service = new BookService();

router.get('/', (req, res) => {
  const books = service.find();
  res.json(books);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const book = service.findOne(id);
  res.send(book);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newBook = service.create(body)
  res.json(newBook);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const bookUpdate = service.update(id, body);
  res.json(bookUpdate);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const bookDelete = service.delete(id);
  res.json(bookDelete);
});

module.exports = router;
