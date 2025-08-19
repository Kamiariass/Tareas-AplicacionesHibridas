// Product.js

class Product {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const { id, name, description, price, stock } = product;

        if (id == null || !name || !description || price == null || stock == null) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        if (this.products.find(p => p.id === id)) {
            console.error(`El producto con id ${id} ya existe`);
            return;
        }

        this.products.push({ id, name, description, price, stock });
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.error("Not found");
            return null;
        }
        return product;
    }
}

module.exports = Product;
