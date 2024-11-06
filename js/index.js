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