const tecnologias = ["iguana", "suricato", "minhoca", "tamandua", "pelicano","siri","lula","ornintorrinco","lebre","capivara","hipopotamo","morcego","polvo","lhama","alce","dromedario","enguia","hiena","javali"];
const palavraSecreta = tecnologias[Math.floor(Math.random() * tecnologias.length)]; //Função math.radom para sortear a palavra dentro do array.
const letrasErradas = []; // array para armazenar as letras erradas.
const letrasCorretas = []; // array para armazenar as letras certa.
let palavra;
atualizarJogo();
document.addEventListener("keydown", (evento) => {
  const codigo = evento.keyCode; 
  if (isLetra(codigo)) { // Se a tecla apertada for uma letra entra no if.
    atualizarBotoes(codigo);
  }
});

function atualizarJogo() {
  mostrarLetrasErradas();
  mostrarLetrasCertas();
  desenharForca();
  checarJogo();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letras-erradas-container");
  div.innerHTML = "<h3><u>Letras erradas</u></h3>";
  letrasErradas.forEach((letra) => { // forEach para ir interando as letras no array.
    div.innerHTML += `<span>${letra.toUpperCase()}</span>-`; // Esse span é só para ter um espaçamento entre as letras. E o cifrão para ele entre que é uma string.
  });
}

function mostrarLetrasCertas() {
  const container = document.querySelector(".palavra-secreta-container");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((letra) => { // o split pega a palavra e divide num array, separando letra por letra. 
    if (letrasCorretas.includes(letra)) { // Se o array de letras corretas possuir essa letra que eu estou interando, vai mostrar a letra na tela.
      container.innerHTML += `<span>${letra.toUpperCase()}</span>`;
    } else { // Se não mostra o tracinho.
      container.innerHTML += `<span>_</span>`;
    }
  });
}

function checarJogo() {
  let mensagem = "";
  const container = document.querySelector(".palavra-secreta-container");
  const partesCorpo = document.querySelectorAll(".forca-parte");
  palavra = palavraSecreta.toUpperCase();//passa a palavra secreta para maiuscula para comparar com o container.innerText que tambem é maiusculo.
  
  if (letrasErradas.length === partesCorpo.length) { // Se as letras erradas for igual as quantidades do corpo que tem, mostra a mensagem.
    mensagem = 'Fim de jogo! Você perdeu! <br><br>A palavra era ';
    document.querySelector("#mensagem").innerHTML = mensagem + palavra;
    document.querySelector(".popup-container").style.display = "flex";
  }

  if (container.innerText === palavra) { // Se o texto que for formado dentro do array de letras corretas for igual a palavra secreta, mostra a mensagem.
    mensagem = "Parabéns! Você ganhou!<br><br>A palavra era ";
    document.querySelector("#mensagem").innerHTML = mensagem + palavra;
    document.querySelector(".popup-container").style.display = "flex";
    document.querySelector(".popup").style.backgroundColor ='#1b923f';
    document.querySelector("#btn-jogar").style.backgroundColor ='#0fdf4d';
  }
}

function desenharForca() {
  const partesCorpo = document.querySelectorAll(".forca-parte");
  for (let i = 0; i < letrasErradas.length; i++) { //Para cada letra errada vai desenhando uma parte do corpo.
    partesCorpo[i].style.display = "block";
  }
}

function mostrarAvisoLetraRepetida() {
  const aviso = document.querySelector(".aviso-palavra-repetida");
  aviso.classList.add("show"); // Aviso aparece e some depois do tempo determinado.
  setTimeout(() => {
    aviso.classList.remove("show");
  }, 1500);
}

function isLetra(codigo) {// 65 - 90 (intervalo entre as letras do teclado).
  return codigo >= 65 && codigo <= 90;
}

function reiniciarJogo() { // Recarregar a pagina
  window.location.reload();
}

//-----Logica do tecleado-----//
function botoes(btn, btnletra){
  if (letrasErradas.includes(btnletra)) {// se for uma letra errada e repitida mostra um aviso na tela.
    mostrarAvisoLetraRepetida();
  } 
  else {
    if (palavraSecreta.includes(btnletra)) {
      if(letrasCorretas.includes(btnletra)){
        mostrarAvisoLetraRepetida();
      }
      letrasCorretas.push(btnletra); // push para armezenar a letra.
    } 
    else {
      letrasErradas.push(btnletra);
    }
  }

    if(palavraSecreta.includes(btnletra)) { //Caso possua a letra na palavra secreta, a cor do botão mudará para verde.
      btn.style.backgroundColor = '#1b923f';
      btn.style.transition = '.5s ease';
    }
    else{ //Caso não possua mudará para um tom mais escuro.
      btn.style.backgroundColor = '#835d21';
      btn.style.transition = '.5s ease';
    }
    atualizarJogo(); 
}

function atualizarBotoes(codigo){ //função que verifica o numero da letra do teclado e chama a função botões.
    if(codigo == 65){
      botoes(btnA,'a');
    }
    if(codigo == 66){
      botoes(btnB,'b');
    }
    if(codigo == 67){
      botoes(btnC,'c');
    }
    if(codigo == 68){
      botoes(btnD,'d');
    }
    if(codigo == 69){
      botoes(btnE,'e');
    }
    if(codigo == 70){
      botoes(btnF,'f');
    }
    if(codigo == 71){
      botoes(btnG,'g');
    }
    if(codigo == 72){
      botoes(btnH,'h');
    }
    if(codigo == 73){
      botoes(btnI,'i');
    }
    if(codigo == 74){
      botoes(btnJ,'j');
    }
    if(codigo == 75){
      botoes(btnK,'k');
    }
    if(codigo == 76){
      botoes(btnL,'l');
    }
    if(codigo == 77){
      botoes(btnM,'m');
    }
    if(codigo == 78){
      botoes(btnN,'n');
    }
    if(codigo == 79){
      botoes(btnO,'o');
    }
    if(codigo == 80){
      botoes(btnP,'p');
    }
    if(codigo == 81){
      botoes(btnQ,'q');
    }
    if(codigo == 82){
      botoes(btnR,'r');
    }
    if(codigo == 83){
      botoes(btnS,'s');
    }
    if(codigo == 84){
      botoes(btnT,'t');
    }
    if(codigo == 85){
      botoes(btnU,'u');
    }
    if(codigo == 86){
      botoes(btnV,'v');
    }
    if(codigo == 87){
      botoes(btnW,'w');
    }
    if(codigo == 88){
      botoes(btnX,'x');
    }
    if(codigo == 89){
      botoes(btnY,'y');
    }
    if(codigo == 90){
      botoes(btnZ,'z');
    }
}
const btnQ = window.document.querySelector('.btn-teclaQ');
btnQ.addEventListener('click',() => {
    botoes(btnQ,'q');
})
const btnW = window.document.querySelector('.btn-teclaW');
btnW.addEventListener('click',() => {
    botoes(btnW,'w');
})
const btnE = window.document.querySelector('.btn-teclaE');
btnE.addEventListener('click',() => {
    botoes(btnE,'e');
})
const btnR = window.document.querySelector('.btn-teclaR');
btnR.addEventListener('click',() => {
    botoes(btnR,'r');
})
const btnT = window.document.querySelector('.btn-teclaT');
btnT.addEventListener('click',() => {
    botoes(btnT,'t');
})
const btnY = window.document.querySelector('.btn-teclaY');
btnY.addEventListener('click',() => {
    botoes(btnY,'y');
})
const btnU = window.document.querySelector('.btn-teclaU');
btnU.addEventListener('click',() => {
    botoes(btnU,'u'); 
})
const btnI = window.document.querySelector('.btn-teclaI');
btnI.addEventListener('click',() => {
    botoes(btnI,'i');
})
const btnO = window.document.querySelector('.btn-teclaO');
btnO.addEventListener('click',() => {
    botoes(btnO,'o');
})
const btnP = window.document.querySelector('.btn-teclaP');
btnP.addEventListener('click',() => {
    botoes(btnP,'p');
})
const btnA = window.document.querySelector('.btn-teclaA');
btnA.addEventListener('click',() => {
    botoes(btnA,'a');
})
const btnS = window.document.querySelector('.btn-teclaS');
btnS.addEventListener('click',() => {
    botoes(btnS,'s');
})
const btnD = window.document.querySelector('.btn-teclaD');
btnD.addEventListener('click',() => {
    botoes(btnD,'d');
})
const btnF = window.document.querySelector('.btn-teclaF');
btnF.addEventListener('click',() => {
    botoes(btnF,'f');
})
const btnG = window.document.querySelector('.btn-teclaG');
btnG.addEventListener('click',() => {
    botoes(btnG,'g');
})
const btnH = window.document.querySelector('.btn-teclaH');
btnH.addEventListener('click',() => {
    botoes(btnH,'h');
})
const btnJ = window.document.querySelector('.btn-teclaJ');
btnJ.addEventListener('click',() => {
    botoes(btnJ,'j');
})
const btnK = window.document.querySelector('.btn-teclaK');
btnK.addEventListener('click',() => {
    botoes(btnK,'k');
})
const btnL = window.document.querySelector('.btn-teclaL');
btnL.addEventListener('click',() => {
    botoes(btnL,'l');
})
const btnZ = window.document.querySelector('.btn-teclaZ');
btnZ.addEventListener('click',() => {
    botoes(btnZ,'z');
})
const btnX = window.document.querySelector('.btn-teclaX');
btnX.addEventListener('click',() => {
    botoes(btnX,'x');
})
const btnC = window.document.querySelector('.btn-teclaC');
btnC.addEventListener('click',() => {
    botoes(btnC,'c');
})
const btnV = window.document.querySelector('.btn-teclaV');
btnV.addEventListener('click',() => {
    botoes(btnV,'v');
})
const btnB = window.document.querySelector('.btn-teclaB');
btnB.addEventListener('click',() => {
    botoes(btnB,'b');
})
const btnN = window.document.querySelector('.btn-teclaN');
btnN.addEventListener('click',() => {
    botoes(btnN,'n');
})
const btnM = window.document.querySelector('.btn-teclaM');
btnM.addEventListener('click',() => {
    botoes(btnM,'m');
})