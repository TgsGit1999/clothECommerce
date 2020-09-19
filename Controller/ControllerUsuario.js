const { db } = require("./../database");

async function RegistrarUsuario(Usuario) {
  db.ref("Usuarios/Clientes")
    .push(Usuario)
    .then(() => {
      return Usuario;
    })
    .catch((error) => {
      console.log(`fijate... ${error}`);
      return false;
    });
}

async function Loggear({ email, password, tipo }) {
  if (tipo === 1) {
    const Usuario = await db
      .ref("Usuarios/Tiendas")
      .orderByChild("email")
      .equalTo(email)
      .once("value", (data) => {
        return data.val();
      });
    var key = Object.keys(Usuario.val())[0];
    var contrasenia = Usuario.val()[`${key}`].password;
    return contrasenia === password ? Usuario.val()[`${key}`] : false;
  } else {
    const Usuario = await db
      .ref("Usuarios/Clientes")
      .orderByChild("email")
      .equalTo(email)
      .once("value", (data) => {
        return data.val();
      });
    var key = Object.keys(Usuario.val())[0];
    var contrasenia = Usuario.val()[`${key}`].password;
    return contrasenia === password ? Usuario.val()[`${key}`] : false;
  }
}

async function buscarUsuarios() {
  const Usuarios = await db
    .ref("Usuarios")
    .child("cliente")
    .once("value", (data) => {
      return data.val();
    });
  return Usuarios.val();
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
  buscarUsuarios,
};

module.exports = FuncionesDeUsuario;
