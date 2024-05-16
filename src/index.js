const express = require('express')
const app = express()
const porta = 3000

const DBConection = require ('./database/connection')



// Middleware
app.use(express.json())

const router = require ('./router/router')

app.use(router)

app.listen(porta, () => {
    DBConection() // conexão com o banco de dados
    console.log(`Servidor rodando na porta ${porta}`)
    })
    

