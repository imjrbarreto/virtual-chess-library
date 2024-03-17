const express = require('express');

const app = express();
const PORT= 3000;

app.get('/', (req, res) => {
  res.send('Hola, express...')
});

app.listen(PORT, () => {
  console.log('server escuchando en: http://localhost:' + PORT);
});