
const express = require("express");
const app = express();
const connectDB = require('./database')
var cors = require('cors') 


app.use(cors())
app.use(express.json({extended:false}))

const PORT = process.env.PORT || 8080;

connectDB()

app.get('/',(req,res) => {
  res.send("server running")
})

app.use('/post',require('./routes/postRoute'))

app.use('/user',require('./routes/userRoute'))

app.listen(PORT, () => {
  console.log("Server activo")
})
