const express = require('express');

const routerApi = require('./routes');

const app = express();
const PORT= 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, express...');
});

routerApi(app);

app.listen(PORT, () => {
  console.log('server escuchando en: http://localhost:' + PORT);
});