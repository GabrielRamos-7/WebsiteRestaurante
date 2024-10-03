let categoria1 = document.getElementById("categoria1");
let itens1 = document.getElementById("itens-container1");
let categoria2 = document.getElementById("categoria2");
let itens2 = document.getElementById("itens-container2");
let categoria3 = document.getElementById("categoria3");
let itens3 = document.getElementById("itens-container3");
let categoria4 = document.getElementById("categoria4");
let itens4 = document.getElementById("itens-container4");

itens1.style.display = "none";
itens2.style.display = "none";
itens3.style.display = "none";
itens4.style.display = "none";

const togglePrimeiraTabela = (target) => {
    if (target.style.display === "none") {
        target.style.display = "flex";
    } else {
        target.style.display = "none";
    }
};

categoria1.addEventListener('click', () => togglePrimeiraTabela(itens1));
categoria2.addEventListener('click', () => togglePrimeiraTabela(itens2));
categoria3.addEventListener('click', () => togglePrimeiraTabela(itens3));
categoria4.addEventListener('click', () => togglePrimeiraTabela(itens4));






let total = 0

let confirmarBox = document.getElementById("confirmar-box")
let confirmarButton = document.getElementById("confirmar-btn");
let cancelarButton = document.getElementById("cancelar-btn");
let pedido = document.getElementById("nome-pedido");
let pedidos = [];

const fecharConfirmarBox = () => {
    confirmarBox.style.display = "none";
}
const abrirConfirmarBox = (produto,preco) =>{
    fecharConfirmarBox();
    produtoSelecionado = produto
    precoSelecionado = preco
    pedido.innerHTML = `${produtoSelecionado}`
    confirmarBox.style.display = "block";
}


confirmarButton.addEventListener("click", () => {
    total += precoSelecionado
    pedidos.push(produtoSelecionado)
    fecharConfirmarBox();
    alert(`Pedido confirmado!`);
});
confirmarBox.style.display = "none";

let pedidosBox = document.getElementById("pedidos-box");
pedidosBox.style.display = "none";

document.getElementById("ver-pedidos").addEventListener('click', ()=> {
    if (pedidosBox.style.display === 'none') {
        pedidosBox.style.display = 'block'
    } else {
        pedidosBox.style.display = 'none'
    }
    document.getElementById("pedidos").innerHTML = `Pedidos: ${pedidos}`
    document.getElementById('total').innerHTML = `Total: R$${total}`
})

