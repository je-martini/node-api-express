const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('holaaaaa')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('holaaaaa esto es nueva-ruta')
})

// app.get('/products', (req, res) => {
//   const products = [];
//   const { size } = req.query;
//   const limit = size || 10;

//   for(let index = 0; index < limit; index++) {
//     products.push({
//       name: faker.commerce.productName(),
//       price: parseInt(faker.commerce.price(), 10),
//       image: faker.image.imageUrl(),

//     })
//   }

//   res.json(products)
// })



// app.get('/products/:productId', (req,res)=>{
//   const { productId } = req.params;
//   res.json(
//     {
//       productId,
//       name: 'product 1',
//       price: 1000
//     })
// })

// app.get('/categories/:categoryId/products/:productId', (req,res) => {
//   const { categoryId, productId } = req.params
//   res.json(
//     {
//       categoryId,
//       productId,

//     })
// })

// app.get('/users', (req, res) => {
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset})
//   }else{
//     res.send('ho hay parametros')
//   }
// })

app.listen(port, ()=>{
  console.log(`mi port ${port}`)
})

routerApi(app)
