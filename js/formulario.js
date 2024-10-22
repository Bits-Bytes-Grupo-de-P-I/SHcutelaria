// Função para esconder todos os sub-formulários e limpar as opções
function hideAllSubForms() {
  const subForms = document.querySelectorAll('.estilo-faca, .estilo-cutelo, .estilo-machado, .tipo-couro, .tipo-madeira');
  
  subForms.forEach(form => {
    form.style.display = 'none';
    // Limpa as seleções dos inputs dentro do sub-formulário
    const inputs = form.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false;
    });
  });
}

// Adiciona um listener ao formulário principal (formulario-1)
document.getElementById('formulario-1').addEventListener('change', (event) => {
  // Verifica se o input alterado é do tipo radio
  if (event.target.type === 'radio') {
      // Esconde todos os sub-formulários e limpa suas opções
      hideAllSubForms();

      // Pega o valor da opção selecionada e mostra o sub-formulário correspondente
      const selectedValue = event.target.nextElementSibling.querySelector('h3').textContent.toLowerCase();
      const subFormToShow = document.querySelector(`.estilo-${selectedValue}`);
      
      if (subFormToShow) {
          subFormToShow.style.display = 'block';
      }
  }
});

// Adiciona um listener ao novo formulário principal (formulario-5)
document.getElementById('formulario-5').addEventListener('change', (event) => {
  // Verifica se o input alterado é do tipo radio
  if (event.target.type === 'radio') {
      // Esconde todos os sub-formulários e limpa suas opções
      hideAllSubForms();

      // Pega o valor da opção selecionada e mostra o sub-formulário correspondente
      const selectedValue = event.target.nextElementSibling.querySelector('h3').textContent.toLowerCase();
      const subFormToShow = document.querySelector(`.tipo-${selectedValue}`);
      
      if (subFormToShow) {
          subFormToShow.style.display = 'block';
      }
  }
});





document.getElementById('submitBtn').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="material"]:checked');
    
    if (selectedOption) {
      document.getElementById('resultado').textContent = `Você selecionou: ${selectedOption.value}`;
    } else {
      document.getElementById('resultado').textContent = "Nenhuma opção foi selecionada.";
    }
  });
  
  // Limpar seleções dos botões radio
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('formulario-1').reset();
    document.getElementById('formulario-2').reset();
    document.getElementById('formulario-3').reset();
    document.getElementById('formulario-4').reset();
    document.getElementById('formulario-5').reset();
    document.getElementById('formulario-6').reset();
  });
  
  
