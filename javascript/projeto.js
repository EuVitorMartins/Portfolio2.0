const containerCard = document.querySelector(".projetos-cards");
const botoes = document.querySelectorAll(".btn");


botoes.forEach(btn => btn.addEventListener(("click"), filterProjeto))

function filterProjeto(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let projetosFiltrados = projetos.filter(tec => tec.tecnologias.includes(categoria))
    if (categoria =="todos") {
       return exibirProjetos(projetos)
    }
    exibirProjetos(projetosFiltrados)
}

function exibirProjetos(listaProjetos) {
    containerCard.innerHTML = ''
    listaProjetos.forEach((projeto) => {
        containerCard.innerHTML += `
        <article class="card-projeto">
            <img src="${projeto.imagem}" alt="${projeto.nome}">
            <h2 class="card-titulo">${projeto.nome}</h2>
            <ul class="card-tec">
                ${projeto.tecnologias.map((tec) => {
                    return (`<li id="${tec}">${tec}</li>`)
                }).join('')}
            </ul>
            <div class="card-links">
                <a href="${projeto["link-on"]}" target="_blank" class="link">Acessar</a>
                <a href="${projeto["link-git"]}" target="_blank" class="link" link-code">Code</a>
            </div>
        </article>
        `
    })    
};


exibirProjetos(projetos)
