const express = require('express')
const router = express.Router()
const tarefaControllers = require('./controllers/tarefaControllers')

router.get('/tarefas', tarefaControllers.listarTodas)
router.get('/tarefas/:id', tarefaControllers.listarPorId)
router.post('/tarefas', tarefaControllers.inserir)
router.put('/tarefas/:id', tarefaControllers.alterar)
router.delete('/tarefas/:id', tarefaControllers.deletar)

module.exports = router