function logError(err, req, res, next) {
  console.log('Console Log Error');
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Error Handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  console.log('Boom Error Handler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = {
  logError,
  errorHandler,
  boomErrorHandler,
}
