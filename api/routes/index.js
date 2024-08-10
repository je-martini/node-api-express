const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router');
const usersRouter = require('./user.router');
const customersRouter = require('./customer.router')
const orderRouter = require('./orders.router')
const express = require('express');
const { faker } = require('@faker-js/faker')


function routerApi(app) {

  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter)
  router.use('/orders', orderRouter);


}

module.exports = routerApi
