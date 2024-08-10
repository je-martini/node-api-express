const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class OrderService {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem  = await models.OrderProduct.create(data);
    return newItem ;
  }

  async find() {
    const rta = await models.Order.findAll(
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
    const order = await models.Order.findByPk(id,{
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if(!order){
      throw boom.notFound('Order not found')
    }
    return order;
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

module.exports = OrderService;
