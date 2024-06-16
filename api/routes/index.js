const productsRouter = require('./products.router')
const usersRouter = require('./user.router');
const categoriesRouter = require('./categories.router');
const express = require('express');
const { faker } = require('@faker-js/faker')


function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/user', usersRouter);
  router.use('/categories', categoriesRouter);

}

module.exports = routerApi
