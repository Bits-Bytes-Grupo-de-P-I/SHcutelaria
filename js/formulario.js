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
  
  subForms.forEach(label => {
    label.style.display = 'none';
    // Limpa as seleções dos inputs dentro do sub-formulário
    const inputs = label.querySelectorAll('input[type="radio"]');
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
  document.getElementById('formulario-7').addEventListener('change', (event) => {
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

//CÓDIGO FUNFANDOC TOTALMENTE
// function enviarWhatsApp() {
//   // Obtém os valores selecionados nos formulários
//   const tipoFerramenta = document.querySelector('input[name="tipo-ferramenta"]:checked').value;
//   const facaEstilo = document.querySelector('input[name="faca-estilo"]:checked')?.value;
//   const cuteloEstilo = document.querySelector('input[name="cutelo-estilo"]:checked')?.value;
//   const machadoEstilo = document.querySelector('input[name="machado-estilo"]:checked')?.value;
//   const materialLamina = document.querySelector('input[name="material-lamina"]:checked').value;
//   const materialCabo = document.querySelector('input[name="material-cabo"]:checked').value;
//   const tipoBainha = document.querySelector('input[name="tipo-bainha"]:checked').value;
//   const couroTipo = document.querySelector('input[name="couro-tipo"]:checked')?.value;
//   const madeiraTipo = document.querySelector('input[name="madeira-tipo"]:checked')?.value;

//   // Monta a mensagem somente com os valores selecionados
//   let mensagem = `Tipo de Ferramenta: ${tipoFerramenta}\n`;
//   mensagem += `Material da Lâmina: ${materialLamina}\n`;
//   mensagem += `Material do Cabo: ${materialCabo}\n`;
//   mensagem += `Tipo de Bainha: ${tipoBainha}\n`;

//   if (facaEstilo) {
//     mensagem += `Estilo de Faca: ${facaEstilo}\n`;
//   }
//   if (cuteloEstilo) {
//     mensagem += `Estilo de Cutelo: ${cuteloEstilo}\n`;
//   }
//   if (machadoEstilo) {
//     mensagem += `Estilo de Machado: ${machadoEstilo}\n`;
//   }
//   if (couroTipo) {
//     mensagem += `Tipo de Couro: ${couroTipo}\n`;
//   }
//   if (madeiraTipo) {
//     mensagem += `Tipo de Madeira: ${madeiraTipo}\n`;
//   }

//   // URL encode da mensagem
//   const urlMensagem = encodeURIComponent(mensagem);

//   // URL do WhatsApp API
//   const whatsappURL = `https://api.whatsapp.com/send?phone=553498812829&text=${urlMensagem}`;

//   // Abrir a URL no WhatsApp
//   window.open(whatsappURL, '_blank');
// }


function enviarWhatsApp() {
  // Obtém os valores selecionados nos formulários
  const tipoFerramenta = document.querySelector('input[name="tipo-ferramenta"]:checked');
  
  // Variáveis para os estilos
  const facaEstilo = document.querySelector('input[name="faca-estilo"]:checked');
  const cuteloEstilo = document.querySelector('input[name="cutelo-estilo"]:checked');
  const machadoEstilo = document.querySelector('input[name="machado-estilo"]:checked');
  
  // Obtém materiais e tipo de bainha
  const materialLamina = document.querySelector('input[name="material-lamina"]:checked');
  const materialCabo = document.querySelector('input[name="material-cabo"]:checked');
  const tipoBainha = document.querySelector('input[name="tipo-bainha"]:checked');
  
  // Obtém couro e madeira (pode escolher apenas um)
  const couroTipo = document.querySelector('input[name="couro-tipo"]:checked');
  const madeiraTipo = document.querySelector('input[name="madeira-tipo"]:checked');
  
  // Verifica se o tipo de ferramenta foi selecionado
  if (!tipoFerramenta || !materialLamina || !materialCabo || !tipoBainha) {
      mostrarAviso();
      return;
  }

  // Verifica o estilo com base na ferramenta selecionada
  if (tipoFerramenta.value === "faca" && !facaEstilo) {
      mostrarAviso();
      return;
  } else if (tipoFerramenta.value === "cutelo" && !cuteloEstilo) {
      mostrarAviso();
      return;
  } else if (tipoFerramenta.value === "machado" && !machadoEstilo) {
      mostrarAviso();
      return;
  }

  // Verifica se couro ou madeira foi selecionado
  if (!couroTipo && !madeiraTipo) {
      mostrarAviso();
      return;
  }

  // Monta a mensagem somente com os valores selecionados
  let mensagem = `Tipo de Ferramenta: ${tipoFerramenta.value}\n`;
  mensagem += `Material da Lâmina: ${materialLamina.value}\n`;
  mensagem += `Material do Cabo: ${materialCabo.value}\n`;
  mensagem += `Tipo de Bainha: ${tipoBainha.value}\n`;

  // Adiciona o estilo da ferramenta se selecionado
  if (facaEstilo) {
      mensagem += `Estilo de Faca: ${facaEstilo.value}\n`;
  }
  if (cuteloEstilo) {
      mensagem += `Estilo de Cutelo: ${cuteloEstilo.value}\n`;
  }
  if (machadoEstilo) {
      mensagem += `Estilo de Machado: ${machadoEstilo.value}\n`;
  }

  // Adiciona o tipo de couro ou madeira se selecionado
  if (couroTipo) {
      mensagem += `Tipo de Couro: ${couroTipo.value}\n`;
  } else if (madeiraTipo) {
      mensagem += `Tipo de Madeira: ${madeiraTipo.value}\n`;
  }

  // URL encode da mensagem
  const urlMensagem = encodeURIComponent(mensagem);

  // URL do WhatsApp API
  const whatsappURL = `https://api.whatsapp.com/send?phone=553498812829&text=${urlMensagem}`;

  // Abrir a URL no WhatsApp
  window.open(whatsappURL, '_blank');
}

function mostrarAviso() {
  const aviso = document.getElementById('aviso');
  aviso.style.display = 'block';
}

function fecharAviso() {
  const aviso = document.getElementById('aviso');
  aviso.style.display = 'none';
}




// Limpar seleções dos botões radio
  document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('formulario-1').reset();
    document.getElementById('formulario-2').reset();
    document.getElementById('formulario-3').reset();
    document.getElementById('formulario-4').reset();
    document.getElementById('formulario-5').reset();
    document.getElementById('formulario-6').reset();
    document.getElementById('formulario-7').reset();
    document.getElementById('formulario-8').reset();
    document.getElementById('formulario-9').reset();
  });
