const mongoose = require("mongoose");
const EsquemaUsuario = require("./../Esquemas/EsquemaUsuario");
const Usuario = mongoose.model("Usuario", EsquemaUsuario, "Usuarios");

async function RegistrarUsuario({
  email,
  nombreCompleto,
  password,
  fechaNacimiento,
  direccionCalle,
  direccionNumero,
  codigoPostal,
  documento,
  telefonoCelular,
  ciudad,
}) {
  if ((await Usuario.findOne({ email: email, documento: documento })) != null) {
    console.log("usuario ya existente");
    return false;
  } else {
    new Usuario({
      email,
      nombreCompleto,
      password,
      fechaNacimiento,
      direccionCalle,
      direccionNumero,
      codigoPostal,
      documento,
      telefonoCelular,
      ciudad,
      registro: Date.now(),
    })
      .save()
      .then(() => {
        return true;
      })
      .catch((error) => {
        return error;
      });
  }
}

async function Loggear({ email, password }) {
  return await Usuario.findOne({ email: email, password: password });
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
};

module.exports = FuncionesDeUsuario;
