const http = require("http");
const url = require("url");
const Product = require("./Product");

const productManager = new Product("products.json");

// Crear servidor
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  res.setHeader("Content-Type", "application/json");

  // GET /
  if (req.method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido a mi servidor de productos 🚀");
  }

  // GET /products
  else if (req.method === "GET" && path === "/products") {
    res.writeHead(200);
    res.end(JSON.stringify(productManager.getProducts(), null, 2));
  }

  // GET /products/:id
  else if (req.method === "GET" && path.startsWith("/products/")) {
    const id = parseInt(path.split("/")[2]);
    const product = productManager.getProductById(id);

    if (product) {
      res.writeHead(200);
      res.end(JSON.stringify(product, null, 2));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Producto no encontrado" }));
    }
  }

  // Ruta no válida
  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Ruta no válida" }));
  }
});

// Escuchar en el puerto
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
