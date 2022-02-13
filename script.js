//Input e constantes

const inputAdultos = document.getElementById("adultos");
const inputCrianças = document.getElementById("crianças");
const inputDuração = document.getElementById("duração");

const inputCalcular = document.getElementById("calcular");
const inputReset = document.getElementById("reset");

const resultado = document.getElementById("resultado");

//Função (Carne por Pessoa)

function carnePP(duração) {
  if (duração > 6) {
    return 650;
  } else {
    return 400;
  }
}

//Função (Cerveja por Pessoa)

function cervejaPP(duração) {
  if (duração > 6) {
    return 2000;
  } else {
    return 1200;
  }
}

//Função (Bebida por Pessoa)

function bebidaPP(duração) {
  if (duração > 6) {
    return 1500;
  } else {
    return 1000;
  }
}

//Inicio do evento

onload = function () {
  calcular = inputCalcular;
  reset = inputReset;

  calcular.addEventListener("click", calc);
  reset.addEventListener("click", resetar);
};

//Fórmula do cálculo

function calc() {
  let adultos = inputAdultos;
  let crianças = inputCrianças;
  let duração = inputDuração.value;

  let qtdCarne =
    (carnePP(duração) * adultos.value +
      (carnePP(duração) / 2) * crianças.value) /
    1000;
  let qtdCerveja = (cervejaPP(duração) * adultos.value) / 1000;
  let qtdBebida =
    (bebidaPP(duração) * adultos.value +
      (bebidaPP(duração) / 2) * crianças.value) /
    1000;

  resultado.innerHTML = ` <div class="resultado">
                          <h2 class="result-info">Você vai precisar:</h2>
                          <div class="imagens-script">
                          <img src="./assets/beef.svg">
                          <p id="p-carne">${qtdCarne}Kg</p>
                          <img src="./assets/beer.svg">
                          <p>${qtdCerveja}L</p>
                          <img src="./assets/juice.svg">
                          <p>${qtdBebida}L</p>
                          </div>
                          </div>`;
}

//Evento para resetar as informações

function resetar() {
  resultado.innerHTML = null;
  adultos.value = null;
  crianças.value = null;
  duração.value = null;
}
