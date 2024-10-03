const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
                    "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

let dataAtual = new Date();

function atualizarData() {
  const diaDaSemana = diasDaSemana[dataAtual.getDay()];
  const dia = dataAtual.getDate();
  const mes = meses[dataAtual.getMonth()];
  document.getElementById('data').value = `${diaDaSemana} , ${dia} ${mes}`;
}

document.getElementById('anterior').addEventListener('click', () => {
  dataAtual.setDate(dataAtual.getDate() - 1);
  atualizarData();
});

document.getElementById('proximo').addEventListener('click', () => {
  dataAtual.setDate(dataAtual.getDate() + 1);
  atualizarData();
});

atualizarData();

let diminuirButton = document.getElementById("diminuir_pessoas")
let aumentarButton = document.getElementById("aumentar_pessoas")
let qtdDePessoas = document.getElementById("qtd-de-pessoas")

qtdDePessoas.value = 0
if (qtdDePessoas.value == 0) {
  document.getElementById("diminuir_pessoas").style.opacity  = 0.3
  document.getElementById("diminuir_pessoas").style.pointerEvents = "none"
  document.getElementById("diminuir_pessoas").style.cursor = "default"
}
const atualizarPessoasButton = () => {
  if (qtdDePessoas.value > 0) {
    document.getElementById("diminuir_pessoas").style.opacity  = 1
    document.getElementById("diminuir_pessoas").style.pointerEvents = "auto"
    document.getElementById("diminuir_pessoas").style.cursor = "pointer"
  } else {
    document.getElementById("diminuir_pessoas").style.opacity  = 0.3
    document.getElementById("diminuir_pessoas").style.pointerEvents = "none"
    document.getElementById("diminuir_pessoas").style.cursor = "default"
  }
}

const diminuir = () => {
  qtdDePessoas.value --
  atualizarPessoasButton()
}
const aumentar = () => {
  qtdDePessoas.value ++
  atualizarPessoasButton()
}
diminuirButton.addEventListener("click",diminuir)
aumentarButton.addEventListener("click",aumentar)

let procurar = document.getElementById("procurar")
let voltar = document.getElementById("voltar-button")
document.getElementById("pagamento-box").style.display = 'none'
const mudarDisplay = () => {
  if (document.getElementById('pagamento-box').style.display === 'none') {
    document.getElementById('reservas-box').style.display === 'none'
    document.getElementById("pagamento-box").style.display = 'block'
  } else {
    document.getElementById("pagamento-box").style.display = 'none'
    document.getElementById('reservas-box').style.display === 'block'
  }
}
procurar.addEventListener('click',mudarDisplay )
voltar.addEventListener('click', mudarDisplay)

let aumentarHoraButton = document.getElementById("aumentar-hora")
let diminuirHoraButton = document.getElementById("diminuir-hora")

dataAtual.setHours(19, 0, 0); 

const atualizarHora = () => {
  document.getElementById("hora").value = dataAtual.toTimeString().slice(0, 5); 
};

const aumentarHora = () => {
  dataAtual.setMinutes(dataAtual.getMinutes() + 15);
  atualizarHora();
};

const diminuirHora = () => {
  dataAtual.setMinutes(dataAtual.getMinutes() - 15);
  atualizarHora();
};

atualizarHora();
aumentarHoraButton.addEventListener('click', aumentarHora);
diminuirHoraButton.addEventListener('click', diminuirHora);
