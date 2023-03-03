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

const check1 = document.getElementById('tema1');

        check1.addEventListener('click', () => {


        document.getElementById("num").removeAttribute('style');
        document.getElementById("res").removeAttribute('style');
        document.getElementById("main").removeAttribute('style');
        document.getElementById('calc').removeAttribute('style');
        document.getElementById('theme').removeAttribute('style');
        document.getElementById('seltema').removeAttribute('style');
        document.getElementsByClassName('.del').removeAttribute('style');
        document.getElementsByClassName('.reset').removeAttribute('style');
        document.getElementsByClassName('.igual').removeAttribute('style');


    });

const check2 = document.getElementById("tema2");

    check2.addEventListener('click', () => {
        document.getElementById('main').style.background = 'hsl(0, 0%, 90%)';
        document.getElementById('calc').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('theme').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('seltema').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('num').style.background = 'hsl(35, 11%, 61%)';
        document.getElementById('res').style.background = 'hsl(0, 0%, 93%)';
        document.getElementById('res').style.color = 'black';
        document.getElementsByClassName('.tcl').style.color = 'hsl(60, 10%, 19%)';
        document.getElementsByClassName('.del').style.background = 'hsl(185, 42%, 37%)';
        document.getElementsByClassName('.reset').style.background = 'hsl(185, 42%, 37%)';
        document.getElementsByClassName('.igual').style.background = 'hsl(25, 98%, 40%)';

    });
    
    const check3 = document.getElementById('tema3');
    
    check3.addEventListener('click', () => {
        document.getElementById('main').style.background = 'hsl(268, 75%, 9%)';
        document.getElementById('calc').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('theme').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('seltema').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('num').style.background = 'hsl(268, 71%, 12%)';
        document.getElementById('res').style.color = 'hsl(52, 100%, 62%)';
        document.getElementById('res').style.background = 'hsl(268, 71%, 12%)';
        document.getElementsByClassName('.del').style.background = 'hsl(268, 47%, 21%)';
        document.getElementsByClassName('.tcl').style.color = 'hsl(52, 100%, 62%)';
        document.getElementsByClassName('.reset').style.background = 'hsl(268, 47%, 21%)';
        document.getElementsByClassName('.igual').style.background = 'hsl(176, 100%, 44%)';
       

});