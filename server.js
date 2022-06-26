const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const paths = require('path')

const routes =  require('./src/routes')

const app = express()

app.use(cors())
app.use(cookie-parser())
app.use(express.json())
app.use(routes)

app.listen(3003, function(){
    console.log("Servidou iniciado!")
})
