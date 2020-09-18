const { db } = require("./../database");

async function RegistrarTienda(tienda) {
  db.ref("Usuarios/Tiendas")
    .push(tienda)
    .then(() => {
      return tienda;
    })
    .catch((error) => {
      return `fijate... ${error}`;
    });
}

const funcionesDeTiendas = {
  RegistrarTienda,
};

module.exports = funcionesDeTiendas;
