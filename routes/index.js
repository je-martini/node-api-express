const productsRouter = require('./products.router')
// const usersRouter = require('./user.router');

function routerApi(app) {
  app.use('/products', productsRouter)
}

module.exports = routerApi
