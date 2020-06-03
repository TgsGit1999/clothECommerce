const mongoose = require('mongoose')
const db = mongoose.connection
require('dotenv').config()



async function initDatabase() {
    mongoose.connect(process.env.URL_DATABASE,{useNewUrlParser:true,useUnifiedTopology:true})
    return await db.once('open',() => console.log("open"))
}

const Database ={
    initDatabase
}

module.exports = Database

