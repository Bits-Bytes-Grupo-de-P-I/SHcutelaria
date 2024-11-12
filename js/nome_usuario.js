// Função para ler o valor do cookie
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

// Quando a página carregar, exibe o userName armazenado no cookie
window.onload = function() {
    const userName = getCookie('userName'); // Lê o valor do cookie 'userName'
    console.log(getCookie('userName'));
    
    if (userName) {
        document.getElementById('usuario').innerText = `Olá, ${userName}`;
        document.getElementById('usuario-reduzido').innerText = `Olá, ${userName}`;
        link = document.getElementById('link-login');
        link.href = '#'
    } else {
        document.getElementById('usuario').innerText = `Entrar`;
        document.getElementById('usuario-reduzido').innerText = `Entrar`;
    }
};
