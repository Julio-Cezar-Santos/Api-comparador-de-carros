const express = require('express')
const { cadastrarCarro, compararCarros } = require('./controladores/carros')
const rotas = express()

rotas.get('/carros/cadastrar', cadastrarCarro )
rotas.get('/carros/comparar', compararCarros)


module.exports = rotas