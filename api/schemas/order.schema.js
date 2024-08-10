const Joi = require('joi')

const id = Joi.number().integer();
const customerId = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);


// const name = Joi.string().min(3).max(30);
// const lastName = Joi.string().min(3).max(30);
// const phone = Joi.string().min(7);
// const userId = Joi.number().integer();
// const email = Joi.string().email();
// const password = Joi.string().min(8);

const createOrderSchema = Joi.object({
  customerId: customerId.required()
});

const getOrderSchema = Joi.object({
  id: id.required(),
})

const addItemSchema = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required(),
});


module.exports = {createOrderSchema, getOrderSchema, addItemSchema}
