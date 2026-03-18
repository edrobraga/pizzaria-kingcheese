let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toogle');

menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show
})

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const botoes = document.querySelectorAll('.pedir');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        carrinho.push({ nome, preco });

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Produto adicionado!");
    });
});