function numeros(num){
    // var res = document.querySelector('#res')
    var numeros = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numeros + num


    console.log(numeros)
}

function limpar() {
    document.getElementById('res').innerHTML = ' '
}


