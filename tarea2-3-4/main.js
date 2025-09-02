const Product = require('./Product.js');

const manager = new Product(); // usa products.json 

manager.addProduct({
    id: 1,
    name: 'Teclado',
    description: 'Teclado Mecánico',
    price: 25000,
    stock: 25
});

manager.addProduct({
    id: 2,
    name: 'Mouse',
    description: 'Mouse Óptico',
    price: 12000,
    stock: 50
});

console.log("Todos los productos:");
console.table(manager.getProducts());

console.log("Actualizar producto id 2:");
manager.updateProductById(2, {
    name: 'Mouse Gamer',
    description: 'Mouse Óptico RGB',
    price: 15000,
    stock: 45
});
console.table(manager.getProducts());

console.log("Eliminar producto id 1:");
manager.deleteProductById(1);
console.table(manager.getProducts());

manager.deleteProductById(99); // Mostrará "Not found"
