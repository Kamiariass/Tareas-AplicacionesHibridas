const fs = require("fs");

class Product {
  constructor(filePath) {
    this.filePath = filePath;
    this.products = this.loadProducts();
  }

  // Leer productos desde JSON
  loadProducts() {
    try {
      const data = fs.readFileSync(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  // Guardar productos en JSON
  saveProducts() {
    fs.writeFileSync(this.filePath, JSON.stringify(this.products, null, 2));
  }

  // Listar todos
  getProducts() {
    return this.products;
  }

  // Buscar por ID
  getProductById(id) {
    return this.products.find(p => p.id === id);
  }
}

module.exports = Product;
