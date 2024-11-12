window.onload = function() {
  const carousel = document.getElementById('carousel');
  
  // Salva a instância de Flickity
  const flkty = new Flickity(carousel, {
      wrapAround: true,
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: 5000,
      pauseAutoPlayOnHover: false,
      // pageDots: false,
      imagesLoaded: true
  });

  // Adiciona um evento para retomar o autoPlay após a interação manual
  flkty.on('dragEnd', function() {
    setTimeout(() => {
      flkty.playPlayer(); // Retoma o rolamento automático
    }, 1000); // Tempo de espera para retomar o autoPlay após a interação
  });
};

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
