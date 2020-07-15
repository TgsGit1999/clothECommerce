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
  db.ref("Usuarios")
    .orderByChild("email")
    .equalTo(email)
    .on("child_added", (data) => {
      if (password === data.val().password) {
        return data.val();
      } else {
        return false;
      }
    });
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
};

module.exports = FuncionesDeUsuario;
