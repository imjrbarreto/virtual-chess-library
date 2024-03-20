const express = require('express');
const AuthorService = require('./../services/author.service');
const { getAuthorSchema, createAuthorSchema, updateAuthorSchema } = require("./../schemas/author.schema")
const validatorHandler = require('./../middleware/validator.handler');

const router = express.Router();

const authorService = new AuthorService();

router.get('/',
  async (req, res) => {
    const books = await authorService.find();
    res.json(books);
  }
);

router.get('/:id', 
  validatorHandler(getAuthorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const author = await authorService.findOne(id);
      res.send(author);
    } catch (err) {
      next(err)
    }
  }
);

router.post('/', 
  validatorHandler(createAuthorSchema, 'body'),
  async (req, res) => {
    const authorRequest = req.body;
    const newAuthor = await authorService.create(authorRequest);
    res.status(201).json(newAuthor);
  }
);

router.patch('/:id',
  validatorHandler(getAuthorSchema, 'params'),
  validatorHandler(updateAuthorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const author = await authorService.update(id, updatedData);
      res.json(author);
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', 
  validatorHandler(getAuthorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedAuthorId = await authorService.delete(id);
      res.json(deletedAuthorId)
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router;