require("dotenv").config();
const admin = require("firebase-admin");
const token = require("./ropaLandiToken.json");

admin.initializeApp({
  credential: admin.credential.cert(token),
  databaseURL: "https://ropalandia-f8d02.firebaseio.com/",
});

const db = admin.database();

const Database = {
  db,
};

module.exports = Database;
