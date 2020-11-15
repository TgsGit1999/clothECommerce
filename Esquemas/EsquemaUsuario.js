const mongoose = require('mongoose')


const EsquemaUsuario = new mongoose.Schema({
    email:{
        type: String,
        required:[true,"el email es requerido"]
    },
    nombreCompleto:{
        type: String,
        required:[true,"el nombre es requerido"]
    },
    password:{
        type: String,
        required:[true,"el password es requerido"]
    },
    fechaNacimiento:
    {
        type:String,
        required:[true,"la fecha de nacimiento es requerida"]
    },
    direccionCalle:{
        type: String,
        required:[true,"la direccion (calle) es requerida"]
    },
    direccionNumero:{
        type: Number,
        required:[true,"la direccion (numero) es requerida"]
    },
    codigoPostal:{
        type: Number,
        required:[true,"el codigo postal es requerido"]
    },
    documento:{
        type: Number,
        required:[false]
    },
    telefonoCelular:{
        type: Number,
        required:[true,"el numero de celular es requerido"]
    },
    registro:{
        type: Date,
        default:Date.now
    },
})

module.exports = User =  mongoose.model('user',EsquemaUsuario)