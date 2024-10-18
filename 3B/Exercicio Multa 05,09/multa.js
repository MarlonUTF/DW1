let inputMaxVia = document.getElementById("maxVia");
let inputVelocidade = document.getElementById("velocidade");

let divSaida = document.getElementById("saida");

let botaoCalcular = document.getElementById("calcular");

botaoCalcular.onclick = calcularMulta;

function calcularMulta() {
    let maxVia = Number(inputMaxVia.value);
    let velocidade = Number(inputVelocidade.value);
    let velocidadeExd = velocidade - maxVia;

    let vinte = maxVia * 0.2;
    let cinquenta = maxVia * 0.5;
    porcExd = (velocidadeExd / maxVia) * 100;

    let multa = "R$0";

    if (porcExd < vinte){
        multa = "R$130,16"
    }   else if(porcExd >= vinte && porcExd <= cinquenta){
        multa = "R$195,33"
    }   else if(porcExd > cinquenta) {
        multa = "R$880,41"
    }

    if (velocidadeExd <= 0){
        divSaida.innerHTML = `<span class= "verde"> <p>Que beleza!! Você não possui nenhuma multa</p> </span>`;
    } else{
        divSaida.innerHTML = `<span class="vermelho"<p>Você exedeu ${porcExd}% da velocidade máxima. Sua multa é de <b>${multa}</b></p> </span>`;
    }
}
