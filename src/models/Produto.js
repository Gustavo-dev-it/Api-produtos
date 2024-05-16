const mongoose = require('mongoose')

//estrutura da coleção

const schema = new mongoose.Schema({
nome:{
type: String,
required: true
}
},
{
    timestamps: true
}


)

const Produto = mongoose.model('produto', schema)
module.exports = Produto