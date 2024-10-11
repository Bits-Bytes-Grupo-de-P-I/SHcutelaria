document.getElementById('submitBtn').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="material"]:checked');
    
    if (selectedOption) {
      document.getElementById('result').textContent = `Você selecionou: ${selectedOption.value}`;
    } else {
      document.getElementById('result').textContent = "Nenhuma opção foi selecionada.";
    }
  });
  