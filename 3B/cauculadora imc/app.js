let inputPeso = document.getElementById("peso");
let inputAltura = document.getElementById("altura");
let divSaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcular");

botaoCalcular.onclick = calcularImc;

function calcularImc(){

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let imc = peso / (altura ** 2);

    divSaida.innerText = imc;
};
