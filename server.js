const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { RegistrarUsuario, Loggear } = require("./Controller/ControllerUsuario");
const { AltaProducto } = require("./Controller/ControllerProducto");
const { RegistrarTienda } = require("./Controller/ControllerTienda");

const config = require("./configs");

app.set("key", config.key);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.listen({ port }, async () => {
  app.post("/registrarUsuario", async function (req, res) {
    res.send(await RegistrarUsuario(req.body.data));
  });

  app.post("/registrarTienda", async function (req, res) {
    res.send(await RegistrarTienda(req.body.data));
  });

  app.post("/loguearse", async function loggearse(req, res) {
    res.send(await Loggear(req.body.login));
  });

  app.post("/altaProducto", async function productoAlta(req, res) {
    res.send(await AltaProducto(req.body.producto));
  });

  app.post("/altaTienda", async function tiendaAlta(req, res) {
    res.send(await AltaTienda(req.body.tienda));
  });

  app.post("/verProducto", async (req, res) => {
    res.send(await getProducto(req.body));
  });
});
