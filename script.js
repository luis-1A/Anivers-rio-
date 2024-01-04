

function mostrarConteudo() {
  var audio = document.getElementById("playerMusica");


  if (audio.src.endsWith("música.mp3")) {
    audio.src = "outraMusica.mp3";
  } else {
    audio.src = "música.mp3";
  }


  audio.play();


  document.getElementById('botaoMusica').style.display = 'none';
  document.getElementById('conteudo').style.display = 'block';
}

const animationText = "Quatro anos atrás, nós nos conhecemos e eu nunca imaginei que nossa amizade fosse crescer tanto. O que começou como um simples encontro para jogar se transformou em uma amizade duradoura. Estou muito feliz por termos chegado até aqui e mal posso esperar para ver o que mais o futuro reserva para nós. Feliz 4 anos de amizade, e que venham muitos mais!
  🥳🥳🥳";

function animateText() {
  const animationElement = document.getElementById("animation");
  let index = 0;

  function addText() {
    if (index < animationText.length) {
      animationElement.innerHTML += animationText.charAt(index);
      index++;
      setTimeout(addText, 70);
    }
  }

  addText();
}

window.onload = function () {

  document.getElementById('conteudo').style.display = 'none';

  document.getElementById('botaoMusica').addEventListener('click', function () {
    mostrarConteudo();
  });

  animateText();
};

