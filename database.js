require("dotenv").config();
var admin = require("firebase");

var configUrl = {
  apiKey: "AIzaSyDMCeZ5rMEqXuoLN6yKXzMSl-tdcQxxrAc",
  authDomain: "ropalandia-f8d02.firebaseapp.com",
  databaseURL: "https://ropalandia-f8d02.firebaseio.com/",
  storageBucket: "gs://ropalandia-f8d02.appspot.com",
};

admin.initializeApp(configUrl);

const db = admin.database();

const Database = {
  db,
};

module.exports = Database;
