// Função para desmarcar todos os botões de rádio ao carregar a página
window.onload = function() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(function(radio) {
    radio.checked = false; // Remove a seleção de todos os botões de rádio
  });
};

// Função para deixar o scroll no meio
window.addEventListener('load', () => {
  let scrollElements = document.querySelectorAll('form');
  scrollElements.forEach((scrollElement) => {
    scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
  });
});


// Função para esconder os sub-formulários dos tipos de facas e limpar as opções
function EsconderTipoFaca() {
  const subForms = document.querySelectorAll('.estilo-faca');
  
  subForms.forEach(label => {
    label.style.display = 'none';
    // Limpa as seleções dos inputs dentro do sub-formulário
    const inputs = label.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      input.checked = false;
    });
  });
}

// Função para esconder os sub-formulários dos tipos de facas e limpar as opções
function EsconderTipoCouro() {
  const subForms = document.querySelectorAll('.tipo-couro');
  
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
        EsconderTipoFaca();

        // Pega o valor da opção selecionada e mostra o sub-formulário correspondente
        const selectedValue = event.target.nextElementSibling.querySelector('h3').textContent.toLowerCase();
        const subFormToShow = document.querySelector(`.estilo-${selectedValue}`);
        
        if (subFormToShow) {
            subFormToShow.style.display = 'block';
        }
    }
  });

  // Adiciona um listener ao formulário da bainha de couro
  document.getElementById('formulario-7').addEventListener('change', (event) => {
    // Verifica se o input alterado é do tipo radio
    if (event.target.type === 'radio') {
        // Esconde todos os sub-formulários e limpa suas opções
        EsconderTipoCouro();

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
    
    // Obtém o campo de comentários
    const comentarios = document.getElementById('comentarios');
  
    // Verifica se o tipo de ferramenta foi selecionado
    if (!tipoFerramenta || !materialLamina || !materialCabo || !tipoBainha) {
        mostrarAviso();
        return;
    }
  
    // Verifica o estilo com base na ferramenta selecionada
    if (tipoFerramenta.value === "faca" && !facaEstilo) {
        mostrarAviso();
        return;
    }
  
    // Verifica se couro ou madeira foi selecionado
    // E faz com que tipos de couro/madeira sejam opcionais se "tipo-bainha" for "madeira"
    if (tipoBainha.value === "couro" && !couroTipo) {
        mostrarAviso();
        return;
    }
  
    // Monta a mensagem somente com os valores selecionados
    let mensagem = `---------------------------\n\n`
    mensagem += `Tipo de Ferramenta: *${tipoFerramenta.value.toUpperCase()}*\n\n`;

    // Adiciona o estilo da ferramenta se selecionado
    if (facaEstilo) {
        mensagem += `Estilo de Faca: *${facaEstilo.value.toUpperCase()}*\n\n`;
    }
    if (cuteloEstilo) {
        mensagem += `Estilo de Cutelo: *${cuteloEstilo.value.toUpperCase()}*\n\n`;
    }
    if (machadoEstilo) {
        mensagem += `Estilo de Machado: *${machadoEstilo.value.toUpperCase()}*\n\n`;
    }

    mensagem += `Material da Lâmina: *${materialLamina.value.toUpperCase()}*\n\n`;
    mensagem += `Material do Cabo: *${materialCabo.value.toUpperCase()}*\n\n`;
    mensagem += `Tipo de Bainha: *${tipoBainha.value.toUpperCase()}*\n\n`;
  
  
    // Adiciona o tipo de couro se selecionado
    if (couroTipo) {
        mensagem += `Tipo de Couro: *${couroTipo.value.toUpperCase()}*\n\n`;
    } else if (tipoBainha.value === "madeira" && madeiraTipo) {
        mensagem += `Tipo de Madeira: *${madeiraTipo.value.toUpperCase()}*\n\n`;
    }
  
    // Adiciona comentários se houver algum
    if (comentarios && comentarios.value.trim()) {
      mensagem += `Comentários: *${comentarios.value.trim().toUpperCase()}*\n\n`;
    }
  
    mensagem += `---------------------------\n`
  
    // URL encode da mensagem
    const urlMensagem = encodeURIComponent(mensagem);
  
    // URL do WhatsApp API
    //const whatsappURL = `https://api.whatsapp.com/send?phone=553498812829&text=${urlMensagem}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=553499690102&text=${urlMensagem}`;
  
    // Abrir a URL no WhatsApp
    window.open(whatsappURL, '_blank');
  }
  


function mostrarAviso() {
  const aviso = document.getElementById('msg-aviso');
  aviso.style.display = 'block';
}

function fecharAviso() {
  const aviso = document.getElementById('msg-aviso');
  aviso.style.display = 'none';
}


document.getElementById('resetBtn').addEventListener('click', function() {
  for (let i = 1; i <= 9; i++) {
      const formulario = document.getElementById(`formulario-${i}`);
      if (formulario) {
          // Seleciona todos os inputs do tipo radio dentro do formulário
          const radios = formulario.querySelectorAll('input[type="radio"]');
          // Desmarca cada radio
          radios.forEach(radio => {
              radio.checked = false;
          });
      }
  }
});
