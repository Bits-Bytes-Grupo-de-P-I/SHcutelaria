function toggleDropdown(id, button) {
    const content = document.getElementById(id);
    const icon = button.querySelector(".icon");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "-"; // Muda o ícone para "-"
    } else {
        content.style.display = "none";
        icon.textContent = "+"; // Muda o ícone para "+"
    }
}

window.onload = function() {
    // Ativa o primeiro passo ao carregar a página
    const firstContent = document.getElementById('step1-content');
    const firstIcon = document.querySelector('.step button .icon');

    firstContent.style.display = "block"; // Exibe o conteúdo
    firstIcon.textContent = "-"; // Muda o ícone para "-"
};