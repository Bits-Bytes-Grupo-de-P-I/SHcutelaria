// Função pro carrossel funcionar
window.onload = function() {
  const carousel = document.querySelector('.carousel');
  const flickityOptions = {
      wrapAround: true,
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: 5000,
      pauseAutoPlayOnHover: false,
      // pageDots: false,
      imagesLoaded: true
  };
  new Flickity(carousel, flickityOptions);
};

// Função de TESTE do timer
function startTimer() {
  let totalTime = 1 * 60 * 60; // 1 hora
  const timerElements = document.querySelectorAll("#timer"); // Seleciona todos os elementos com o ID 'timer'

  const countdown = setInterval(() => {
    // Calcula horas, minutos e segundos restantes
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;

    // Formata o tempo como hh:mm:ss
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Atualiza o texto de cada elemento com o tempo formatado
    timerElements.forEach(timerElement => {
      timerElement.textContent = formattedTime;
    });

    // Reduz o tempo total
    totalTime--;

    // Quando o tempo acabar, para o contador
    if (totalTime < 0) {
      clearInterval(countdown);
      timerElements.forEach(timerElement => {
        timerElement.textContent = "Tempo Esgotado!";
      });
    }
  }, 1000);
}


// Inicia o timer automaticamente ao carregar a página
startTimer();

document.addEventListener('DOMContentLoaded', () => {
  const displayEstilo = document.getElementById('display-estilo');
  const displayTamanho = document.getElementById('display-tamanho');
  const displayMaterialLamina = document.getElementById('display-material-lamina');
  const displayMaterialCabo = document.getElementById('display-material-cabo');
  const displayMaterialBainha = document.getElementById('display-material-bainha');
  const displayImagem = document.getElementById('display-imagem');

  // Verifica se há dados salvos no localStorage
  if(localStorage.getItem('faca')) {
      const faca = JSON.parse(localStorage.getItem('faca'));

      // Atualiza a área de visualização com os dados
      displayEstilo.textContent = faca.estilo;
      displayTamanho.textContent = faca.tamanho + " cm";
      displayMaterialLamina.textContent = faca.materialLamina;
      displayMaterialCabo.textContent = faca.materialCabo;
      displayMaterialBainha.textContent = faca.materialBainha;

      // Atualiza a imagem da faca
      if (faca.imagem) {
          displayImagem.src = faca.imagem;
      }
  } else {
      // Caso não haja dados, exibe valores padrões
      displayEstilo.textContent = 'Chef';
      displayTamanho.textContent = '25 cm';
      displayMaterialLamina.textContent = 'Aço';
      displayMaterialCabo.textContent = 'Leopard Wood';
      displayMaterialBainha.textContent = 'Couro de jacaré';
      displayImagem.src = 'default-image.jpg';
  }
});
