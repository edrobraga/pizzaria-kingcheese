const lista = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let total = 0;

carrinho.forEach(produto => {
    const li = document.createElement("li");
    li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    lista.appendChild(li);

    total += produto.preco;
});

totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

function removerItem(index) {
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload();
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    carrinho = []
    location.reload();
}

carrinho.forEach((produto, index) => {
    const li = document.createElement("li");
    li.classList.add("item-carrinho");

    li.innerHTML = `
        <span>${produto.nome} - R$ ${produto.preco.toFixed(2)}</span>
        <button onclick="removerItem(${index})">X</button>
    `;

    lista.appendChild(li);
});

function finalizarPedido() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "🛒 *Pedido - Pizzaria KingCheese* \n\n";

    let total = 0;

    carrinho.forEach((produto) => {
        mensagem += `🍕 ${produto.nome} - R$ ${produto.preco.toFixed(2)}\n`;
        total += produto.preco;
    });

    mensagem += `\n💰 *Total: R$ ${total.toFixed(2)}*`;

    const telefone = "5521998802757"; // seu número com DDD

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}

setInterval(() => {
    atualizarCarrinho();
}, 1000);