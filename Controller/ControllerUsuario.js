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
  var key = Object.keys(Usuario.val())[0];
  var contrasenia =  Usuario.val()[`${key}`].password;
  return contrasenia === password ? Usuario.val()[`${key}`] : false;
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
};

module.exports = FuncionesDeUsuario;
