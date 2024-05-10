//botão fora do modal, para abrir popUp
let buttonModal = document.querySelector('#msgError')
let modal = document.querySelector('dialog')
let buttonBack = document.querySelector('dialog button')

let buttonReject = document.querySelector('#buttonReject')

var newText = document.createElement('div');
newText.id = 'revealText';

document.getElementById('revealButton').addEventListener('click', function() {
  var contentSection = document.querySelector('.content');
  contentSection.innerHTML = ''; // Limpa todo o conteúdo da seção
  

  newText.innerHTML = `
    <p class="texto-convidando">Um misto de emoção e momentos afobados (da sua parte) óbvio. "Será? Mas ela mora tão longe..." na época que você morava em um lugar tão tão distante e eu buchuda aqui em São Paulo. Porém você nos mostrou de todas as formas a sua presença, preocupação, o seu carinho (bruto claro), felicidade e parceria tanto na gravidez quanto após o nascimento da nossa pacotinho de leite. Ficamos felizes por cada momento ao seu lado e ligação sua, "Dada". Uma amiga incrível, sempre te falei isso temos uma conexão de amizade forte. E nunca cheguei de fato a fazer um pedido oficial para ser madrinha de batismo da nossa branquela, Tia Na você esteve presente em todos os momentos especiais dela. Não tinha nenhuma outra razão para eu não te chamá-la de forma formal para ser a madrinha da minha filha.
    Você sabe que é minha irmã, e como dizemos daqui até depois da velhice.  
    Confio e entrego essa missão de cuidar, me ajudar a guia-la, através de respeito, cuidado, responsabilidade e proteção pela vida dela. Tenho certeza em meu coração que Deus está abençoando essa escolha.
    <br>
    Que tal promover esse título formalmente para Dinda da Luna?</p>

    <button onclick="aceitou()">LÓGICO QUE ACEITO, TONTA</button>
    <button onclick="naoAceitou()">NÃO, VSFD</button>
  `;
  contentSection.appendChild(newText);
});


buttonModal.onclick = function() {
    modal.showModal();
}

buttonBack.onclick = function() {
    modal.close();
}

function naoAceitou() {
  console.log("Funcionou!")
  newText.innerHTML = `
    <p class="texto-convidando">
    ????VAI ACEITAR SIM OX</p>

    <button id="buttonReject" onclick="aceitou()">LÓGICO QUE ACEITO, TONTA</button>
  `;
}

function aceitou() {
  window.location.href = "./contadorDeCliques.html"
}
