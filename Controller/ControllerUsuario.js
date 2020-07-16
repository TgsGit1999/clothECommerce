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
  const Usuario = await db
    .ref("Usuarios")
    .orderByChild("email")
    .equalTo(email)
    .once("value", (data) => {
      return data.val();
    });
  console.log(Usuario.val());
  console.log(password);
  return Usuario.val().password == password ? Usuario.val() : false;
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
};

module.exports = FuncionesDeUsuario;
