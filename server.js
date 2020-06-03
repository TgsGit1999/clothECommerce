const express = require('express')
const app = express()
require('dotenv').config();
const {initDatabase} = require('./database')


const port = process.env.PORT


app.listen({port}, () => {
    initDatabase()
})