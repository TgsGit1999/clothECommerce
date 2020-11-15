const mongoose = require('mongoose')

const url = `mongodb+srv://fantarta:atlas31199@ropalandiacluster.h9jud.mongodb.net/RopalandiaCluster?retryWrites=true&w=majority`

const connectDB = () => {
  mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(() => {
    console.log("conectado a db")
  })
}


module.exports = connectDB