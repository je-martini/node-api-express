const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    return newCustomer;
  }

  async find() {
    const rta = await models.Customer.findAll(
      {
        include: ['user']
      }
    );
    // const query = 'SELECT * FROM task';
    // const rta = await this.pool.query(query);
    return rta
    // const client = await getConnection();
    // const rta = await client.query('SELECT * FROM task')
    // return rta.rows;
  }

  async findOne(id) {
    const user = await models.Customer.findByPk(id);
    if(!user){
      throw boom.notFound('customer not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = CustomerService;
