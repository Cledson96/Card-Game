let numero_cartas = prompt("quantas cartas gostaria de jogar, sendo entre 2 á 14 cartas");
let cartasViradas = 0;
let cartaCapa;
let cartaLogo;
let cartalogo1 = "";
let cartacapa1 = "";
let jogadas = 0;
let tempo = 0;
let concluido = 0;
let jogarnovamente = "";
let ref ;
const selecao = ["brasil.jpg", "alemanha.png", "argentina.png", "australia.png", "franca.jpg", "portugal.jpg", "senegal.png"];
let mesa = [];
let embaralha = [];


setInterval(temporizador, 1000);

function temporizador() {
  if (jogarnovamente == "não" || jogarnovamente == "Não" || jogarnovamente == "nao" || jogarnovamente == "não") {
    console.log("Jogo encerrado,rumo ao hexa!")
    clearInterval(2);
  } else {
    tempo++
    document.querySelector(".tempo").innerHTML = `Tempo : ${tempo}`;
  }
}

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
  <li><div onclick="virar(this)" class="cartinha"  ><div class="carta_capa" ><img src="capa.jpg" ></div><div class="carta_emblema escondido"><img class="cartaum" src="${selecao[i]}"></div></div></li>`
  embaralha.push(referencia);
  let referencia2 = `<li><div onclick="virar(this)" class="cartinha"  ><div class="carta_capa" ><img src="capa.jpg" ></div><div class="carta_emblema escondido"><img class="cartadois" src="${selecao[i]}"></div></div></li>`
  embaralha.push(referencia2);
}
embaralha.sort(comparador);

for (let i = 0; i < numero_cartas; i++) {
  const ul = document.querySelector("ul");
  ul.innerHTML += embaralha[i]
}

function virar(ref) {
  jogadas++;
  document.querySelector(".jogadas").innerHTML = `Jogadas : ${jogadas}`;
  ref.classList.toggle("virada");
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


  } else {
    cartaLogo.classList.remove("escondido");
    let enfeite = cartaLogo.querySelector("img")
    enfeite.classList.add("escolhido");
    cartaCapa.classList.add("escondido");
    cartasViradas++;
    let img_ref = { imagem: cartaLogo.querySelector("img").src, carta: cartaLogo.querySelector("img") }
    mesa.push(img_ref);
    console.log(mesa);

  }
  if (cartasViradas == 2) {
    if (mesa[0].imagem == mesa[1].imagem) {
      concluido++
      cartaLogo.parentNode.onclick = null;
      cartalogo1.parentNode.onclick = null;
      cartaLogo.querySelector("img").classList.add("confirmado");
      cartalogo1.querySelector("img").classList.add("confirmado");
      console.log(cartaLogo.parentNode);
      console.log(cartalogo1.parentNode);
      mesa = [];
      cartasViradas = 0;
    } else {
      cartaCapa.classList.add("escondido");
      cartaLogo.classList.remove("escondido");
      setTimeout(erouuu, 1000);
    }

  }
}

  function erouuu() {
    cartalogo1.classList.add("escondido");
    cartaLogo.classList.add("escondido");
    cartacapa1.classList.remove("escondido");
    cartaCapa.classList.remove("escondido");
    mesa = [];
    cartasViradas = 0;

  }

  if (numero_cartas / 2 == concluido) {
    alert(`Ganho mizeravi!
           Jogadas feitas: ${jogadas} jogadas 
           Tempo jogado: ${tempo} segundos`) ;
    jogarnovamente = prompt("Quer jogar novamanete? Digite sim ou não!");
    if (jogarnovamente == "sim" || jogarnovamente == "Sim") {
      window.location.reload()


    }
  }
