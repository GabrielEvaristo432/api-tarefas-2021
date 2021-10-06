const express = require ('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rotas

app.get('/produtos', (req, res) => {

    const dados = [
        {'id': 1, 'descrição': 'Espada reta de Astora', 'quantidade': 2},
        {'id': 2, 'descrição': 'Espada grande', 'quantidade': 1},
        {'id': 3, 'descrição': 'Espada quebrada', 'quantidade': 3}
    ]

    res.status(200)
    res.send(dados)
    console.log('Consultando na rota /produtos')
})

const port = 3007

app.listen(port, () => {

    console.log(`Servidor em funcionamento na porta ${port}`)
})