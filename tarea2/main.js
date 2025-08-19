const Product = require('./index.js'); 

const manager = new Product();

manager.addProduct({
    id: 1,
    name: 'Teclado',
    description: 'Teclado Inalambrico',
    price: 25000,
    stock: 25
});

manager.addProduct({
    id: 2,
    name: 'Mouse',
    description: 'Mouse Inalambrico',
    price: 12000,
    stock: 50
});

manager.addProduct({
    id: 1,
    name: 'Monitor',
    description: 'Monitor LED',
    price: 50000,
    stock: 10
}); // Debe mostrar error

console.log("Todos los productos:");
console.table(manager.getProducts());

console.log("Producto con id 2:");
console.log(manager.getProductById(2));

console.log("Producto con id 99:");
console.log(manager.getProductById(99)); // Debe mostrar "Not found"
