const mongoose = require('mongoose')

const EsquemaVendedor = new mongoose.Schema({
    cuit:{type: String,required:[true,"el cuit es requerido"]},
    nombreTienda:{type: String,required:[true,"el nombre de la tienda es requerido"]},
    tipoPago:{
        credito:{type:Boolean,required:[true,"medio de pago (credito) disponible es requerido"]},
        debito:{type:Boolean,required:[true,"medio de pago (debito) disponible es requerido"]},
        transferencia:{type:Boolean,required:[true,"medio de pago (transferencia) disponible es requerido"]},
        efectivo:{type:Boolean,required:[true,"medio de pago (efectivo) disponible es requerido"]},
    },
    registro:{type:Date,required:[true,"la fecha de registro del vendedor es requerida"]}
})