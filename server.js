const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { RegistrarUsuario, Loggear } = require("./Controller/ControllerUsuario");
const { AltaProducto } = require("./Controller/ControllerProducto");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen({ port }, async () => {
  app.post("/registrarse", async function registrarse(req, res) {
    res.send(await RegistrarUsuario(req.body.registro));
  });

  app.post("/loguearse", async function loggearse(req, res) {
    res.send(await Loggear(req.body.login));
  });

  app.post("/altaProducto"),
    async function AltaProducto(req, res) {
      res.send(await AltaProducto(req.body.producto));
    };
});
