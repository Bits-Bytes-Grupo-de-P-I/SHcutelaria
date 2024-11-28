function initCarousel() {
  const carousel = document.getElementById('carousel');

  // Salva a instância de Flickity
  const flkty = new Flickity(carousel, {
    wrapAround: true,
    resize: true,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
    imagesLoaded: true
  });

  // Adiciona um evento para retomar o autoPlay após a interação manual
  flkty.on('dragEnd', function() {
    setTimeout(() => {
      flkty.playPlayer(); // Retoma o rolamento automático
    }, 1000); // Tempo de espera para retomar o autoPlay após a interação
  });
  initCarousel(); // Inicializa a nova instância do Flickity
};
