// let numero_cartas = prompt("quantas cartas gostaria de jogar, sendo entre 2 á 14 cartas");
const selecao = ["brasil.jpg","alemanha.png","argentina.png","australia.png", "franca.jpg","portugal.jpg","senegal.png"];
let jogadores = 0;
function adicionar() {
    const ul = document.querySelector("ul");
    ul.innerHTML += `
    <li><div class="cartinha" ><img class="capinha" onclick="virar(this)" src="capa.jpg"><img class="capinha" src="${selecao[0]}"></div></li>
    <li><div class="cartinha" onclick="virar(this)"><img class="capinha" src="capa.jpg"><img class="escondido" src="${selecao[0]}"></div></li>
  `;

}
function virar(elemento){
    elemento.classlist.toggle("escondido")
}