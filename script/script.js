'use strict'
const res = document.querySelector('#res')
const numeros = document.querySelectorAll('[id*=tlc]')
var opercao = document.querySelector('.oper')
const atualizarDisplay = (texto) => {
    res.textContend += texto
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContend)

numeros.forEach (numero => numero.addEventListener('click', inserirNumero))