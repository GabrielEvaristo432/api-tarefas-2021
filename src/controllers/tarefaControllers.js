const Tarefa = require('../models/Tarefa')

exports.listarTodas = (req, res) => {
    
    try {

        Tarefa.find().then((dados) =>{
            res.status(200)
            res.send(dados)
        })

    } catch (erro) {
        res.status(500)
        res.send({ mensagem: erro.messaeg })
    }

}

exports.listarPorId = (req, res) => {

    try {

        const id = req.params.id

        Tarefa.findById(id, (erro, dados) => {
            if (dados) {
                res.status(200)
                res.send(dados)
            } else {
                res.status(404)
                res.send({ mensagem: "Nenhuma tarefa encontrada para este ID." })
            }
        })

    } catch (erro) {
        res.status(500)
        res.send({ menasagem: erro.message })
    }
}

exports.inserir = (req, res)  => {

    try {

        const tarefa = new Tarefa ({
            descricao: req.body.descricao,
            data: req.body.data,
            realizado: req.body.realizado
        })

        tarefa.save((erro, dados) => {
            res.status(201)
            res.send(dados)
        })

    } catch (erro) {
        res.status(500)
        res.send({ menasagem: erro.message })        
    }
}

exports.alterar = (req, res) => {
    try {

        const tarefaAtualizada = {
            descricao: req.body.descricao,
            data: req.body.data,
            realizado: req.body.realizado
        }

        const id = req.params.id

        Tarefa.findByIdAndUpdate(id, tarefaAtualizada, (erro, dados) => {
            Tarefa.findById(id, (erro, dados) => {
                res.status(200)
                res.send(dados)
            })
        })

    } catch (erro) {
        res.status(500)
        res.send({ menasagem: erro.message })
    }
}

exports.deletar = (req, res) => {
    try {

        const id = req.params.id

        Tarefa.findByIdAndDelete(id, (erro, dados) => {
            if (dados) {
                res.status(200)
                res.send({ mensagem: 'Tarefa deletada com sucesso' })
            } else {
                res.status(404)
                res.send({ mensagem: 'Essa tarefa não existe' })
            }
        })

    } catch (erro) {
        res.status(500)
        res.send({ menasagem: erro.message })
    }
}