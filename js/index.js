// Tempo inicial em segundos (1 hora neste exemplo)
let totalTime = 1 * 60 * 60; // 1 hora

const timerElement = document.getElementById("timer");

function startTimer() {
  const countdown = setInterval(() => {
    // Calcula horas, minutos e segundos restantes
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;

    // Exibe o tempo formatado como hh:mm:ss
    timerElement.textContent = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Reduz o tempo total
    totalTime--;

    // Quando o tempo acabar, para o contador
    if (totalTime < 0) {
      clearInterval(countdown);
      timerElement.textContent = "Tempo Esgotado!";
    }
  }, 1000);
}

// Inicia o timer automaticamente ao carregar a página
startTimer();