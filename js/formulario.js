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
    // Obtém os valores selecionados nos formulários
    const tipoFerramenta = document.querySelector('input[name="tipo-ferramenta"]:checked').value;
    const facaEstilo = document.querySelector('input[name="faca-estilo"]:checked')?.value || 'N/A';
    const cuteloEstilo = document.querySelector('input[name="cutelo-estilo"]:checked')?.value || 'N/A';
    const machadoEstilo = document.querySelector('input[name="machado-estilo"]:checked')?.value || 'N/A';
    const materialLamina = document.querySelector('input[name="material-lamina"]:checked').value;
    const materialCabo = document.querySelector('input[name="material-cabo"]:checked').value;
    const tipoBainha = document.querySelector('input[name="tipo-bainha"]:checked').value;
    const couroTipo = document.querySelector('input[name="couro-tipo"]:checked')?.value || 'N/A';
    const madeiraTipo = document.querySelector('input[name="madeira-tipo"]:checked')?.value || 'N/A';

    // Monta a mensagem
    const mensagem = `
        Tipo de Ferramenta: ${tipoFerramenta}
        Estilo de Faca: ${facaEstilo}
        Estilo de Cutelo: ${cuteloEstilo}
        Estilo de Machado: ${machadoEstilo}
        Material da Lâmina: ${materialLamina}
        Material do Cabo: ${materialCabo}
        Tipo de Bainha: ${tipoBainha}
        Tipo de Couro: ${couroTipo}
        Tipo de Madeira: ${madeiraTipo}
    `;

    // Formata a mensagem para URL
    const mensagemFormatada = encodeURIComponent(mensagem);
    const numeroTelefone = '553499443790';
    const linkWhatsApp = `whatsapp://send?phone=${numeroTelefone}&text=${mensagemFormatada}`;

    // Abre o link do WhatsApp
    window.location.href = linkWhatsApp;
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
