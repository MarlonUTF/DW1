let inputCapital = document.getElementById("capital");
let inputTxJuros = document.getElementById("txjuros");
let inputPerido = document.getElementById("periodo");

let divSaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcularex1");

botaoCalcular.onclick = calcularJuros;

function calcularJuros() {
    let capital = Number(inputCapital.value);
    let txjuros = Number(inputTxJuros.value / 100);
    let periodo = Number(inputPerido.value);

    let montante = capital * ((1 + txjuros) ** periodo);

    divSaida.innerHTML = `<h2>Saída:</h2> <p>Montante: ${montante.toFixed(2)}</p> <p>Capital: ${capital}</p> <p>Montante - Capital: ${(montante - capital).toFixed(2)}</p>`;
}
