
// Alternar o display entre cadastro e login
function alternarDisplay() {
    const login = document.getElementById("login");
    const cadastro = document.getElementById("cadastro");

    if (login.style.display === "none") {
        login.style.display = "block";
        cadastro.style.display = "none";
    } else {
        login.style.display = "none";
        cadastro.style.display = "block";
    }
}