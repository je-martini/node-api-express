const { ValidationError } = require("sequelize");

function logError (err, req,res,next){
  console.log('logerror')
  console.error(err);
  next(err);
}

function errorHandler (err,req,res,next){
  console.log('errorhandler')

  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler (err,req,res,next){
  console.log('boomErrorHandler')
  if(err.isBoom){

    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }else{

    next(err)
  }

}

function ormErrorHandler(err, req, res, next) {
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }
  next(err)
}

module.exports = { logError, errorHandler, boomErrorHandler, ormErrorHandler}
