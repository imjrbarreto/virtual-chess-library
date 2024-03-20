const express = require('express');
const routerApi = require('./routes');
const { config } = require('./config/config');
const { logError, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();
const port= config.port;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, express...');
});

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('server escuchando en: http://localhost:' + port);
});
