// Função para esconder todos os sub-formulários
function hideAllSubForms() {
  document.querySelector('.estilo-faca').style.display = 'none';
  document.querySelector('.estilo-cutelo').style.display = 'none';
  document.querySelector('.estilo-machado').style.display = 'none';
}

// Adiciona um listener ao formulário principal
document.getElementById('formulario-1').addEventListener('change', (event) => {
  // Verifica se o input alterado é do tipo radio
  if (event.target.type === 'radio') {
      // Esconde todos os sub-formulários
      hideAllSubForms();

      // Pega o valor da opção selecionada e mostra o sub-formulário correspondente
      const selectedValue = event.target.nextElementSibling.querySelector('h3').textContent.toLowerCase();
      const subFormToShow = document.querySelector(`.estilo-${selectedValue}`);
      
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
  
  
