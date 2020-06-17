const mongoose = require('mongoose')


const EsquemaUsuario = new mongoose.Schema({
    email:{type: String,required:[true,"el email es requerido"]},
    nombreCompleto:{type: String,required:[true,"el nombre es requerido"]},
    password:{type: String,required:[true,"el password es requerido"]},
    fechaNacimiento:{type:String,required:[true,"la edad es requerida"]},
    direccionCalle:{type: String,required:[true,"la direccion (calle) es requerida"]},
    direccionNumero:{type: String,required:[true,"la direccion (numero) es requerida"]},
    codigoPostal:{type: String,required:[true,"el codigo postal es requerido"]},
    documento:{type: String,required:[false]},
    telefonoCelular:{type: String,required:[true,"el numero de celular es requerido"]},
    registro:{type: Date,required:[true,"la fecha de registro de usuario es requerida"]},
})

module.exports = EsquemaUsuario