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
        linkReduzido = document.getElementById('link-login-reduzido');
        link.href = '#';
        linkReduzido.href = '#'
    } else {
        document.getElementById('usuario').innerText = `Entrar`;
        document.getElementById('usuario-reduzido').innerText = `Entrar`;
        link = document.getElementById('link-login');
        linkReduzido = document.getElementById('link-login-reduzido');
        link.href = 'login.html';
        linkReduzido.href = 'login.html';
    }
};


// Função para pegar as informações do sorteio

window.onload = function() {
    let isAdmin = false;

    // A função que será chamada no evento onsubmit do formulário
    async function enviarRifa(e) {
        e.preventDefault();

        // Verificar se o usuário tem permissão de administrador
        if (!isAdmin) {
            alert('Acesso negado. Apenas administradores podem cadastrar rifas.');
            return;
        }

        // Obter os dados do formulário
        const formData = {
            estilo: document.getElementById('estilo').value,
            tamanho: document.getElementById('tamanho').value,
            material_lamina: document.getElementById('material_lamina').value,
            material_cabo: document.getElementById('material_cabo').value,
            material_bainha: document.getElementById('material_bainha').value,
            data: document.getElementById('data').value
        };

        // Recuperar o token JWT do localStorage
        const token = localStorage.getItem('jwtToken');
        console.log(token);
        if (!token) {
            alert('Token de autenticação não encontrado.');
            return;
        }

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Rifa cadastrada com sucesso!');
                document.getElementById('rifa-form').reset();
            } else {
                const error = await response.json();
                alert(error.error || 'Erro ao cadastrar a rifa');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao cadastrar a rifa');
        }
    }
};


