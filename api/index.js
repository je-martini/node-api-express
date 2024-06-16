const express = require('express');
const routerApi = require('./routes')
const {logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const whitelist = ['https://je-martini.github.io/intro-react-vite/', 'https://node-api-express-nine.vercel.app/']
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null,true)
    } else {
      callback(new Error('no permitido en vercel'))
    }
  }
}

app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('holaaaaa')
})

app.get('/api/nueva-ruta', (req, res) => {
  res.send('holaaaaa esto es nueva-ruta')
})

app.listen(port, ()=>{
  console.log(`mi port ${port}`)
})

routerApi(app)

app.use(logError);
app.use(boomErrorHandler)
app.use(errorHandler);
