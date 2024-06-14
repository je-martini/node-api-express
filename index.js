const express = require('express');
const routerApi = require('./routes')
const {logError, errorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('holaaaaa')
})

app.get('/nueva-ruta', (req, res) => {
  res.send('holaaaaa esto es nueva-ruta')
})

app.listen(port, ()=>{
  console.log(`mi port ${port}`)
})

routerApi(app)

app.use(logError);
app.use(errorHandler);
