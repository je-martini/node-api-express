const { faker } = require('@faker-js/faker')

class ProductsService {
  constructor(){
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 100;

    for(let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),

      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.products)
      }, 5000)
    })

    return this.products

  }

  async findOne(id){
    const name = this.getlll()
    return this.products.find(item => item.id === id)
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product no found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw new Error('product no found')
    }
    this.products.splice(index, 1);
    return{ id };
  }

}

module.exports = ProductsService
