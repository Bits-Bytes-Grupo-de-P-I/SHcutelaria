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
  
  
