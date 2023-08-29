const express = require('express')
const { cadastrarCarro, compararCarros } = require('./controladores/carros')
const rotas = express()

rotas.post('/carros/cadastrar', cadastrarCarro )
rotas.post('/carros/comparar', compararCarros)


module.exports = rotas