const { Router } = require('express');

const productsRouter = require('./products.route');
// const usersRouter = require('./users.route');
// const categoriesRouter = require('./categories.route');

function routes(app) {
  const router = Router();
  router.use('/products', productsRouter);
  // router.use('/users', usersRouter);
  // router.use('/categories', categoriesRouter);

  app.use('/api/v1', router);
}

module.exports = routes;
