function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}

function toggleInfo() {
    const infoMessage = document.getElementById('info-message');
    infoMessage.style.display = 'block';

    document.getElementById("info-icon").style.color = "#F05E1B";
}

function closeInfo() {
    const infoMessage = document.getElementById('info-message');
    infoMessage.style.display = 'none';

    document.getElementById("info-icon").style.color = "#C0C0C0";
}
