const mongoose = require('mongoose')

const EsquemaProducto = new mongoose.Schema({
    nombre:{type: String,required:[true,"el nombre del articulo es requerido"]},
    descripcion:{type: String,required:[false]},
    precio:{type: String,required:[true,"el precio del articulo es requerido"]},
    stock:{type: String,required:[false]},
    codigoPostal:{type: String,required:[false]},
    envio:{type: Boolean,required:[true,"el estado de envio es requerido"]},
    publicacion:{type:Date,required:[true,"la fecha de publicacion del articulo es requerida"]}
}) 