const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('get books');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send('get book: ' + id);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json(body);
});

// router.patch('/:id', (req, res) => {
  
// });

// router.delete('/:id', (req, res) => {

// });

module.exports = router;