// Verifica se há um nome de usuário salvo no localStorage
const nomeSalvo = localStorage.getItem('userName');
        
// Se houver um nome salvo, substitui o texto "Entrar" pelo nome do usuário
if (nomeSalvo) {
    document.getElementById('usuario').innerText = nomeSalvo;
}