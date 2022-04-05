//chamar dependências

const express = require('express');
const path = require('path') //dependencia nativa do node


// fazer logica do servidor web

console.log('Iniciando servidor');
const app = express();

const port = 80;

//servidor tem que ficar ouvindo possíveis requisições

app.listen(port, () => {
    console.log('Servidor iniciado')
})

//ouvir requisições get na rota / (trabalhar cada uma das rotas)

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

//outra rota com get /boasVindas (exemplo) --> https://localhost/boasVindas (isso é uma rota)

app.get('/boasVindas', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/boasVindas.html'))
})

app.post('/usuario', (req, res) => {
    res.send('Cheguei no post')
})

app.put('/usuario', (req, res) => {
    res.send('Cheguei no put')
})

app.delete('/usuario', (req, res) => {
    res.send('Cheguei no delete')
})