const Joi = require('joi')

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string().min(7);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);


const createCustomerSchema = Joi.object({
  name : name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
})

module.exports = {updateCustomerSchema, createCustomerSchema, getCustomerSchema}
