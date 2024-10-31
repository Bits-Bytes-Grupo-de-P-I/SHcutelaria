function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}

function toggleInfo(blockName, infoText) {
    const infoMessage = document.getElementById('info-message');
    const infoIcon = document.getElementById(`info-icon-${blockName}`);
    
    // Atualiza o conteúdo do aviso e mostra a mensagem
    infoMessage.querySelector('p').textContent = infoText;

    // Ajusta a posição em relação ao ícone clicado
    const rect = infoIcon.getBoundingClientRect();
    infoMessage.style.top = `${rect.bottom + window.scrollY + 10}px`;
    infoMessage.style.left = `${rect.left + window.scrollX}px`;

    // Alterna entre exibir e ocultar
    infoMessage.style.display = infoMessage.style.display === 'block' ? 'none' : 'block';

    // Altera a cor do ícone
    infoIcon.style.color = infoMessage.style.display === 'block' ? "#F05E1B" : "#C0C0C0";
}

function closeInfo() {
    const infoMessage = document.getElementById('info-message');
    infoMessage.style.display = 'none';

    // Restaura a cor de todos os ícones ao padrão
    document.querySelectorAll('.info-icon').forEach(icon => {
        icon.style.color = "#C0C0C0";
    });
}
