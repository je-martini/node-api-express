const express = require('express');
const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler');
const { updateCustomerSchema, createCustomerSchema, getCustomerSchema } = require('../schemas/customer.schema')

const { faker } = require('@faker-js/faker');
const { required } = require('joi');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async(req, res, next ) => {
    try {
      const {id} = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

  router.patch('/:id',
    validatorHandler(getCustomerSchema, 'params'),
    validatorHandler(updateCustomerSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body;
        const category = await service.update(id, body);
        res.json(category);
      } catch (error) {
        next(error);
      }
    }
  );

    router.delete('/:id',
      validatorHandler(getCustomerSchema, 'params'),
      async (req, res, next) => {
        try {
          const { id } = req.params;
          await service.delete(id);
          res.status(201).json({ id });
        } catch (error) {
          next(error);
        }
      }
    )


router.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset})
  }else{
    res.send('ho hay parametros')
  }
})

module.exports = router;
