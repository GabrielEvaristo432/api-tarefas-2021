const express = require ('express')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas
const router = require('./routes')
app.use('/api/v1/', router)

app.listen(process.env.PORT, () => {

    console.log(`Servidor em funcionamento na porta ${process.env.PORT}`)
})