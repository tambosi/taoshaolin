var faixa = document.getElementById("faixa");
var shaolin = document.getElementById("shaolin");
var shuai = document.getElementById("shuai");
var especial = document.getElementById("especial");
var turma = document.getElementById("turma");
var pagamento = document.getElementById("pagamento");
var mensagem = document.getElementById("mensagem");

function validarFaixa() {
    if(faixa.value=='branca') {        
        turma.style.display = 'block'; 
        var opt = document.createElement('option');
        opt.value = 'branca';
        opt.innerHTML = 'Shaolin Branca';
        shaolin.appendChild(opt);
        var opt1 = document.createElement('option');
        opt1.value = 'branca';
        opt1.innerHTML = 'Shuaijiao Branca';
        shuai.appendChild(opt1);
        var opt2 = document.createElement('option');
        opt2.value = 'branca';
        opt2.innerHTML = 'Especial Branca';
        especial.appendChild(opt2);
    }
}

function calcular() {
    if(shaolin.value=='branca') {
        mensagem.style='font-family:verdana;color:red;';
        mensagem.innerHTML='R$100,00';
        pagamento.style.display = 'block';
    }
    if(shuai.value=='branca') {
        mensagem.style='font-family:verdana;color:red;';
        mensagem.innerHTML='R$120,00';
        pagamento.style.display = 'block';
    }
    if(especial.value=='branca') {
        mensagem.style='font-family:verdana;color:red;';
        mensagem.innerHTML='R$150,00';
        pagamento.style.display = 'block';
    }
}