+const fs = require('fs');
const path = require('path');

class Product {
    constructor(jsonFile = 'products.json') {
        this.products = [];
        // La ruta absoluta dentro de la carpeta semana2
        this.jsonPath = path.resolve(__dirname, jsonFile);

        // Cargar productos desde el JSON si existe
        this.loadFromJSON();
    }

    saveToJSON() {
        fs.writeFileSync(this.jsonPath, JSON.stringify(this.products, null, 2));
    }

    loadFromJSON() {
        if (fs.existsSync(this.jsonPath)) {
            const data = fs.readFileSync(this.jsonPath, 'utf-8');
            try {
                this.products = JSON.parse(data);
            } catch (error) {
                console.error('Error leyendo JSON:', error);
                this.products = [];
            }
        }
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
        this.saveToJSON();
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

    deleteProductById(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error("Not found");
            return;
        }
        this.products.splice(index, 1);
        this.saveToJSON();
    }

    updateProductById(id, updatedProduct) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            console.error("Not found");
            return {};
        }
        this.products[index] = { id, ...updatedProduct };
        this.saveToJSON();
        return this.products[index];
    }
}

module.exports = Product;
