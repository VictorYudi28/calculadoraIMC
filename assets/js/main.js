const form = document.querySelector('#form');
const buttonCalcImc = document.querySelector('.button-calc-imc');

form.addEventListener('submit', (event)=> {

    event.preventDefault();

    const inputPeso = document.querySelector('#input-peso');
    const inputAltura = document.querySelector('#input-altura');

    let imcCalculado = calculaImc(inputPeso.value,inputAltura.value);

    mostrarResultado(imcCalculado);

});

function calculaImc(peso,altura){

    let imcCalculado = parseFloat( peso / ( altura * altura )).toFixed(2);

    return imcCalculado;

}; // Função calcula IMC

function mostrarResultado(imcCalculado){

    const boxResultadoImc = document.querySelector('#box-resultado-imc');
    const informacaoResultado = document.querySelector('#informacaoResultado');
    const valueImc = document.querySelector('#valueImc');
    const btnLimpar = document.querySelector('#btnLimpar');
    const valueDescricao = document.querySelector('#valueDescricao');

    boxResultadoImc.classList.remove('hidden');
    informacaoResultado.classList.remove('hidden');
    btnLimpar.classList.remove('hidden');

    valueImc.textContent = `Seu IMC: ${imcCalculado}`;

    verificaImc(imcCalculado,valueDescricao);

    btnLimpar.addEventListener('click', ()=> {
        form.reset();
        boxResultadoImc.classList.add('hidden');
        valueDescricao.classList.add('hidden');
    });

}// Função mostrar resultado

function verificaImc(imcCalculado,valueDescricao){

    if(imcCalculado < 18.5){
        valueDescricao.innerHTML = `Abaixo do peso`;
        valueDescricao.className = "red";
    }else if(imcCalculado >= 18.5 && imcCalculado < 25){
        valueDescricao.innerHTML = `Peso normal`;
        valueDescricao.className = "green";
    }else if(imcCalculado >= 25 && imcCalculado < 30){
        valueDescricao.innerHTML = `Sobrepeso`
        valueDescricao.className = "red";
    }else if(imcCalculado >= 30 && imcCalculado < 35){
        valueDescricao.innerHTML = `Obesidade grau I`;
        valueDescricao.className = "red";
    }else if(imcCalculado >= 35 && imcCalculado < 40){
        valueDescricao.innerHTML = `Obesidade grau II`;
        valueDescricao.className = "red";
    }else if(imcCalculado >= 40){
        valueDescricao.innerHTML = `Obesidade grau III`;
        valueDescricao.className = "red";
    }else{
        valueDescricao.innerHTML = `Erro`;
        valueDescricao.className = "yellow";
    }

}// Função verifica Imc

