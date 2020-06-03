const mongoose = require('mongoose')


const EsquemaUsuario = new mongoose.Schema({
    password:{type: String,required:[true,"el password es requerido"]},
    email:{type: String,required:[true,"el email es requerido"]},
    nombreCompleto:{type: String,required:[true,"el nombre es requerido"]},
    age:{type:String,required:[true,"la edad es requerida"]},
    registro:{type: Date,required:[true,"la fecha de registro de usuario es requerida"]},
    direccion:{type: String,required:[false]},
    celular:{type: String,required:[true,"el numero de celular es requerido"]},
    telefono:{type: String,required:[false]},
    documento:{type: String,required:[false]}
})

module.exports = EsquemaUsuario