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

const getProducto = async (body) => {
  const response = db.ref("");
};

const funcionesDeProductos = {
  AltaProducto,
  getProducto,
};

module.exports = funcionesDeProductos;
