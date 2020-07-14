const { db } = require("./../database");

async function RegistrarUsuario(Usuario) {
  db.ref("Usuarios")
    .push(Usuario)
    .then(() => {
      return Usuario;
    })
    .catch((error) => {
      console.log(`fijate... ${error}`);
      return false;
    });
}

async function Loggear({ email, password }) {
  const ref2 = db.ref("usuarios");
  ref2.on("value", (snapshot) => {
    ref2
      .child(Object.key(snapshot))
      .orderByChild("codigoPostal")
      .equalTo(123)
      .on("value", (snapshot) => {
        console.log(snapshot.val());
      });
  });
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
};

module.exports = FuncionesDeUsuario;
