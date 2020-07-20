const { db } = require("./../database");

async function AltaProducto(producto) {
  db.ref("Productos")
    .push(producto)
    .then(() => {
      return producto;
    })
    .catch((error) => {
      return `fijate... ${error}`;
    });
}

async function TraerProductos(producto) {}

const funcionesDeProductos = {
  AltaProducto,
};

module.exports = funcionesDeProductos;
