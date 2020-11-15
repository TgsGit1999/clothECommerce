const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Post = require('../Esquemas/EsquemaPost')
const User = require('../Esquemas/EsquemaUsuario')


//traer todos los post
//Publico
router.get('/', async (req,res)=> {
    try {
        let posts = await Post.find()
        res.json(posts)
        
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }

})

// postear un producto
// Privado
router.post('/',auth,async (req,res) => {

    let user = await User.findById(req.user.id).select('-password')

    try {
        
        const post = new Post ({
            titulo: req.body.titulo,
            precio: req.body.precio,
            tipoProducto: req.body.tipoProducto,
            subTipoProducto : req.body.subTipoProducto,
            genero : req.body.genero,
            nombre: user.nombreCompleto,
            user: req.user.id
        }) 

        await post.save();

        res.json(post)
        
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }


})


module.exports = router