const mongoose = require('../connections')
const Schema = mongoose.Schema

const tarefaSchema = new Schema({
    descricao: {
        type: String,
        requires: true
    },
    data: {
        type: Date,
        require: false
    },
    realizado: {
        type: Boolean,
        required: false
    }
})

const Tarefa = mongoose.model("Tarefa", tarefaSchema)
module.exports = Tarefa