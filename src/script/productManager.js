// Exemplo de classe ProductManager
export default class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  }
  