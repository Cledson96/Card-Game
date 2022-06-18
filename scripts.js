let numero_cartas = prompt("quantas cartas gostaria de jogar, sendo entre 2 á 14 cartas");
let cartasViradas = 0;
let cartaCapa;
let cartaLogo;
const selecao = ["brasil.jpg", "alemanha.png", "argentina.png", "australia.png", "franca.jpg", "portugal.jpg", "senegal.png"];
let mesa = [];
let embaralha = [];

if (numero_cartas > 1 && numero_cartas < 15 && numero_cartas % 2 == 0) {
}
else {
  while (numero_cartas < 2 || numero_cartas > 14 || numero_cartas % 2 != 0) {
    numero_cartas = prompt("Numero de cartas invalido,digite novamente!");
  }
}
function comparador() {
  return Math.random() - 0.5;
}

selecao.sort(comparador);

for (let i = 0; i < numero_cartas / 2; i++) {
  let referencia = `
  <li><div onclick="virar(this)"class="cartinha"  ><div class="carta_capa" ><img src="capa.jpg" ></div><div class="carta_emblema escondido"><img class="cartaum" src="${selecao[i]}"></div></div></li>`
  embaralha.push(referencia);
 let referencia2 = `<li><div onclick="virar(this)" class="cartinha"  ><div class="carta_capa" ><img src="capa.jpg" ></div><div class="carta_emblema escondido"><img class="cartadois" src="${selecao[i]}"></div></div></li>`
  embaralha.push(referencia2);
}
embaralha.sort(comparador);

for (let i = 0; i < numero_cartas ; i++) {
  const ul = document.querySelector("ul");
  ul.innerHTML += embaralha[i]
}

alert(selecao);


function virar(ref) {

  cartacapa1 = cartaCapa;
  cartalogo1 = cartaLogo;
  cartaCapa = ref.querySelector(".carta_capa");
  console.log(cartaCapa)
  cartaLogo = ref.querySelector(".carta_emblema");
  console.log(cartaLogo)

  if (cartaCapa.classList.contains("escondido")) {
    cartaCapa.classList.remove("escondido");
    cartaLogo.classList.add("escondido");
    cartasViradas = 0;
    mesa = [];
    alert("Esta clicando na mesma carta!");

    alert(cartasViradas);
  } else {
    cartaLogo.classList.remove("escondido");
    cartaCapa.classList.add("escondido");
    cartasViradas++;
    let img_ref = { imagem: cartaLogo.querySelector("img").src, carta: cartaLogo.querySelector("img") }
    mesa.push(img_ref);
    console.log(mesa);
    alert(cartasViradas);

  }
  if (cartasViradas == 2) {
    if (mesa[0].imagem == mesa[1].imagem) {
      alert("acerto mizeravi")
      cartaLogo.parentNode.onclick = null;
      cartalogo1.parentNode.onclick = null;
      console.log(cartaLogo.parentNode);
      console.log(cartalogo1.parentNode);
      mesa=[];
      cartasViradas=0;
    } else {
      alert("Erouuuuuuuu")
      cartalogo1.classList.add("escondido");
      cartaLogo.classList.add("escondido");
      cartacapa1.classList.remove("escondido");
      cartaCapa.classList.remove("escondido");
      mesa= [];
      cartasViradas=0;

    }
  }

}