const express = require ('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoControllers')

const Produto = require('../models/Produto')



router.post('/produtos', ProdutoController.create)

module.exports = router