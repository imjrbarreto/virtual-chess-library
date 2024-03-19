const express = require('express');

const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');
const publishersRouter = require('./publishers.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/authors', authorsRouter);
  router.use('/publishers', publishersRouter);
}

module.exports = routerApi;