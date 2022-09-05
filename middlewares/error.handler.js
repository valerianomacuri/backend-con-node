function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

/* eslint-disable no-unused-vars */
function boomErrorHandler(err, req, res, next) {
  /* eslint-enable no-unused-vars */
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
};
