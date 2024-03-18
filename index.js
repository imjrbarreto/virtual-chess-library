const express = require('express');
const routerApi = require('./routes');
const { logError, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();
const PORT= 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, express...');
});

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('server escuchando en: http://localhost:' + PORT);
});
