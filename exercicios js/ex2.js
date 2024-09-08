let inputTroco = document.getElementById("troco");
let divSaida = document.getElementById("saida");
let botaoCalcular = document.getElementById("calcularex2");

botaoCalcular.onclick = calcularTroco;

function calcularTroco() {
    let troco = parseInt(inputTroco.value);
    let cedVinte = Math.floor(troco / 20);
    let resto = troco % 20;
    let cedDez = Math.floor(resto / 10);
    resto = resto % 10;
    let moedasUm = resto;

    divSaida.innerHTML = `<h2>Saída:</h2> 
        <p>Cédulas de <b>R$20</b>: <span> ${cedVinte} </span> </p> 
        <p>Cédulas de <b>R$10</b>: <span> ${cedDez} </span> </p> 
        <p>Moedas de <b>R$1</b>: <span> ${moedasUm} </span> </p>`;
}
