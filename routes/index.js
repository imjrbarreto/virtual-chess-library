const express = require('express');

const booksRouter = require('./books.router');
const authorsRouter = require('./authors.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/books', booksRouter);
  router.use('/authors', authorsRouter);
}

module.exports = routerApi;