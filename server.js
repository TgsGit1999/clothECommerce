const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const { initDatabase } = require("./database");
const { RegistrarUsuario, Loggear } = require("./Controller/ControllerUsuario");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;

app.listen({ port }, async () => {
  await initDatabase();

  app.post("/registrarse", async function registrarse(req, res) {
    res.send(await RegistrarUsuario(req.body.registro));
  });

  app.post("/loguearse", async function loggearse(req, res) {
    res.send(await Loggear(req.body.login));
  });
});
