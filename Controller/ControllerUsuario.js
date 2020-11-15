const { db } = require("./../database");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const config = require("../configs");

app.set("key", config.key);

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
  try {
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
      if (contrasenia === password) {
        const payload = {
          check: true,
        };
        const token = jwt.sign(payload, app.get("key"), {
          expiresIn: 1440,
        });
        return {
          mensaje: "Autorizacion Correcta",
          token: token,
          status: 200,
        };
      } else {
        return {
          mensaje: "Usuario o contraseña incorrecta",
          status: 500,
        };
      }
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
      if (contrasenia === password) {
        const payload = {
          check: true,
        };
        const token = jwt.sign(payload, app.get("key"), {
          expiresIn: 1440,
        });
        return {
          mensaje: "Autorizacion Correcta",
          token: token,
          status: 200,
        };
      } else {
        return {
          mensaje: "Usuario o contraseña incorrecta",
          status: 500,
        };
      }
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

async function buscarUsuarios() {
  let Usuarios = await db
    .ref("Usuarios")
    .child("Clientes")
    .once("value", (data) => {
      return data.val();
    });
  const keys = Object.keys(Usuarios.val());
  return keys.map((key) => {
    return Usuarios.val()[key];
  });
}

const FuncionesDeUsuario = {
  RegistrarUsuario,
  Loggear,
  buscarUsuarios,
};

module.exports = FuncionesDeUsuario;
