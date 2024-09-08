let inputDistancia = document.getElementById("distancia");
let inputAutonomia = document.getElementById("autonomia");
let inputValorPedagio = document.getElementById("valorPedagio");
let inputPrecoCombustivel = document.getElementById("precoCombustivel");
let botaoCalcular = document.getElementById("calcularex3");
let divSaida = document.getElementById("saida");

botaoCalcular.onclick = calcularCustoViagem;

function calcularCustoViagem() {
    let distancia = parseFloat(inputDistancia.value);
    let autonomia = parseFloat(inputAutonomia.value);
    let valorPedagio = parseFloat(inputValorPedagio.value);
    let precoCombustivel = parseFloat(inputPrecoCombustivel.value);

    let litrosNecessarios = distancia / autonomia;
    let custoCombustivel = litrosNecessarios * precoCombustivel;
    let custoTotal = custoCombustivel + valorPedagio;
    
    divSaida.innerHTML = `<h2>Saída</h2> <p>O custo total da viagem é: R$ <span>${custoTotal.toFixed(2)}</span></p>`;
}
