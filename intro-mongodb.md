## Mostras os bancos de dados
show dbs

## Utilizar (entrar em um) banco de dados
use 'nome do banco'

## Collections (colções de documentos)
Exemplo de documento:

db.tarefas.insertOne ({
    "descrição": "Pagar conta de energia",
    "Feito": false
})

db.tarefas.insertOne ({
    "descrição": "Entregar a tarefa de matemática",
    "Feito": true
})

db.tarefas.find()
db.tarefas.find({ 'parâmetro/atributo pelo qual se deseja filtrar a consulta' })

Ex: db.tarefas.find({ "Feito": false })

db.tarefas.insertOne ({
    "descrição": "Trabalho de banco de dados",
    "Subtarefas": [
        { "item": "Ler capítulo do livro", "feito": false },
        { "item": "Codificar estrutura das tabelas", "feito": false },
        { "item": "Testar", "feito": false },
        { "item": "Enviar no AVA", "feito": false }
    ]
})