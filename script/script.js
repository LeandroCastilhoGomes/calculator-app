function numeros(num){
    // var res = document.querySelector('#res')
    var numeros = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numeros + num
    // dentro da div res, que é o visor da calculadora, quando acionada a função numeros com o parameto num, irá aparecer o os numeros que estão dentro de cada parametro num que corresponde ao numero colocado dentro do parametro, que é o numero que será apertado no teclado da calculadora.

}

function limpar() {

    document.getElementById('res').innerHTML = ''
}
    // Quando acionada a função limpar(), que é o botão reset, dentro da div res, o innerHTML irá limpar a div res que é o nosso visor, as aspás vazias limpam a div.

    function del(){

    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
    //neste comando acima, quando acionada a função del, ela apagará um caractere por vez. 
}
function calcular() {
    var res = document.getElementById('res').innerHTML
    if(res){
        document.getElementById('res').innerHTML = eval(res)
    } else {
        document.getElementById('res').innerHTML = 'INSIRA O CÁLCULO!'
    }

    //Na função calcular que está associada ao nosso botão de igual, colocamos um if e um else, que siginifica, se(if) dentro da div res estiver algo, como estamos trabalhando só com numeros, usando a função eval a gente já consegue fazer os cálculos e dar o resultado
}

