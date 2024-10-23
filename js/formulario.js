// Função para desmarcar todos os botões de rádio ao carregar a página
window.onload = function() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function(radio) {
    radio.checked = false; // Remove a seleção de todos os botões de rádio
  });
};


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


  function enviarWhatsApp() {
    const tipoFerramenta = document.querySelector('input[name="tipo-ferramenta"]:checked')?.value;
    const facaEstilo = document.querySelector('input[name="faca-estilo"]:checked')?.value;
    const cuteloEstilo = document.querySelector('input[name="cutelo-estilo"]:checked')?.value;
    const machadoEstilo = document.querySelector('input[name="machado-estilo"]:checked')?.value;
    const materialLamina = document.querySelector('input[name="material-lamina"]:checked')?.value;
    const materialCabo = document.querySelector('input[name="material-cabo"]:checked')?.value;
    const tipoBainha = document.querySelector('input[name="tipo-bainha"]:checked')?.value;
    const couroTipo = document.querySelector('input[name="couro-tipo"]:checked')?.value;
    const madeiraTipo = document.querySelector('input[name="madeira-tipo"]:checked')?.value;

    // Monta a mensagem
    let mensagem = `Olá! Gostaria de fazer um pedido:\n\n`;
    if (tipoFerramenta) mensagem += `Tipo de ferramenta: ${tipoFerramenta}\n`;
    if (facaEstilo) mensagem += `Estilo de faca: ${facaEstilo}\n`;
    if (cuteloEstilo) mensagem += `Estilo de cutelo: ${cuteloEstilo}\n`;
    if (machadoEstilo) mensagem += `Estilo de machado: ${machadoEstilo}\n`;
    if (materialLamina) mensagem += `Material da lâmina: ${materialLamina}\n`;
    if (materialCabo) mensagem += `Material do cabo: ${materialCabo}\n`;
    if (tipoBainha) mensagem += `Tipo de bainha: ${tipoBainha}\n`;
    if (couroTipo) mensagem += `Tipo de couro: ${couroTipo}\n`;
    if (madeiraTipo) mensagem += `Tipo de madeira: ${madeiraTipo}\n`;

    const telefone = "553499443790"; // seu número de telefone no formato correto
    const urlWhatsApp = `whatsapp://send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

    // Abre o link no WhatsApp Desktop
    window.open(urlWhatsApp, '_blank');
}






// Limpar seleções dos botões radio
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('formulario-1').reset();
    document.getElementById('formulario-2').reset();
    document.getElementById('formulario-3').reset();
    document.getElementById('formulario-4').reset();
    document.getElementById('formulario-5').reset();
    document.getElementById('formulario-6').reset();
  });
