const Produto = require('../models/Produto')

async function create(req, res) {

    try {
        const produto = new Produto(req.body)
        const produtoCriado = await produto.save
        res.status(201).json(produtoCriado)
    } catch (error) {
        console.log(error)
        res.status(400).json(


            {

                mensagem: "Ocorreu um erro ao cadastrar produto",
                erro: error
            }

        )
    }


}

module.exports = {
    create
}