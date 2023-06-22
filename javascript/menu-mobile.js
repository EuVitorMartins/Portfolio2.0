const btn = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-menu");
const linhas = document.querySelector(".linha");

function abrirMenu() {
    nav.classList.toggle("ativo");
    linhas.classList.toggle("ativo");

}

btn.addEventListener("click", abrirMenu);