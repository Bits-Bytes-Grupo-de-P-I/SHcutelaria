function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal.style.display === "none") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}
