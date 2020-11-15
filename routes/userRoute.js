const express = require('express')
const router = express.Router()
const User = require('../Esquemas/EsquemaUsuario')
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

router.get('/', (req,res)=> {
    res.send('coso')
})

// registrar usuario
router.post('/registrarse',[
  check('email','ingrese un email valido').isEmail(),
  check('nombreCompleto','ingrese su nombre').not().isEmpty(),
  check('password','ingrese un password con al menos 6 caracteres').isLength({min:6}),
  check('fechaNacimiento').not().isEmpty(),
  check('direccionCalle', 'ingrese la calle de su domicilio').not().isEmpty(),
  check('direccionNumero','ingrese el numero de su domicilio').not().isEmpty(),
  check('codigoPostal','ingrese su codigo postal').not().isEmpty(),
  check('documento','ingrese un documento').not().isEmpty(),
  check('telefonoCelular','ingrese un numero de contacto').not().isEmpty()
], async (req,res) => {

  //compruebo si hay errores con el express validator
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const {
    email,
    nombreCompleto,
    password,  
    fechaNacimiento,
    direccionCalle,
    direccionNumero,
    codigoPostal,
    documento,
    telefonoCelular,
    ciudad,
    numeroPiso}  = req.body
 
    //checkeo si el usuario existe en la base
    let user = await User.findOne({email})
    if(user) {
      return res.status(400).json({errors:[{msg:'el usuario ya esta registrado'}]})
    }
    
    try {
      //Creo el usuario con los datos del req
      user = new User({
        email,
        nombreCompleto,
        password,
        fechaNacimiento,
        direccionCalle,
        direccionNumero,
        codigoPostal,
        documento,
        telefonoCelular,
        ciudad,
        numeroPiso
      })

      //encripto password
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password,salt)
      
      await user.save();

      //creo el payload para el json web token
      const payload = {
        user:{
          id:user.id
        }
      }
      // creo el token basado en el id del usuario
      jwt.sign(
        payload,
        process.env.JWTSECRET,
        {expiresIn:400000},
        (err,token) => {
          if (err) {throw new Error(err) }
          res.json({token})
        }
      )

    } catch (err) {
      console.error(err)  
      res.status(500).send('Error en el servidor')
    }
    
})


//Logear un usuario
//publico
router.post('/login',[
  check('email','Ingresar un email valido').isEmail(),
  check('password','el password es requerido').not().isEmpty()
], async (req,res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()){
      return res.status(400).json({errors:errors.array()})
    }


    const {
      email,
      password
    } = req.body

    let user = User.findOne({email:email})

    if(!user){
      return res.status(400).json({errores: [{msg:'credenciales erroneas'}]})
    }

    let match = bcrypt.compare(password,user.password)

    if(!match){
      return res.status(400).json({errores: [{msg:'credenciales erroneas'}]})
    }

    const payload = {
      user:{
        id:user.id
      }
    }

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      {expiresIn:400000},(err,token)=> {
        if (err) {throw err}
        res.json({token:token})
      })

})

module.exports = router