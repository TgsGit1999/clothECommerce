const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EsquemaPost = mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    titulo:{
        type:String,
        required:[true,'colocale nombre al post']
    },
    precio:{
        type:String,
        required:[true,'el articulo debe tener un precio']
    },
    envio:{
        type:Boolean,
        default:false
    },
    genero:{
        type:String,
        default:"U"
    },
    valoracion:{
        type:Number,
        default:0
    },
    tipoProducto:{
        type:String,
        required:true
    },
    subTipoProducto:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    comentarios:[
        {
            user:{
                type:Schema.Types.ObjectId,
                ref:'user'
            },
            texto:{
                type:String,
                required:false
            },
            name:{
                type:String,
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
    ],
    like: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
          },
        },
    ],
})

module.exports = User = mongoose.model('post', EsquemaPost)