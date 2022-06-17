let numero_cartas = prompt("quantas cartas gostaria de jogar, sendo entre 2 á 14 cartas");
const selecao = ["brasil.jpg", "alemanha.png", "argentina.png", "australia.png", "franca.jpg", "portugal.jpg", "senegal.png"];
const mesa = [];

if (numero_cartas > 1 && numero_cartas < 15 && numero_cartas % 2 == 0) {
}
else {
  while (numero_cartas < 2 || numero_cartas > 14 || numero_cartas % 2 != 0) {
    numero_cartas = prompt("Numero de cartas invalido,digite novamente!");
  }
}

function adicionar() {
  const ul = document.querySelector("ul");
  ul.innerHTML += `
    <li><div class="cartinha" ><img class="capinha" onclick="virar(this)" src="capa.jpg"><img class="capinha" src="${selecao[0]}"></div></li>
    <li><div class="cartinha" onclick="virar(this)"><img class="capinha" src="capa.jpg"><img class="escondido" src="${selecao[0]}"></div></li>
  `;
}

function virar(elemento) {
  elemento.classlist.toggle("escondido")
}