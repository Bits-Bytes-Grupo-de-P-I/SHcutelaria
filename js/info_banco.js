// Função para ler o valor do cookie
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    console.log(match);
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

window.onload = async function (e) {
        e.preventDefault();

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/rifa/1', {
                method: 'GET',
            });
            const data = await response.json();
            console.log(data);
            document.getElementById('estiloFaca').innerText = data.estilo;
            document.getElementById('tamanhoFaca').innerText = data.tamanho;
            document.getElementById('materialLamina').innerText = data.material_lamina;
            document.getElementById('materialCabo').innerText = data.material_cabo;
            document.getElementById('materialBainha').innerText = data.material_bainha;
            const dataInicial = data.data.split('T')[0]; // "2024-11-13"
            const partesData = dataInicial.split('-'); // ["2024", "11", "13"]
            const dataFormatada = `${partesData[2]}-${partesData[1]}-${partesData[0]}`; // "13-11-2024"
            document.getElementById('dataFinal').innerText = dataFormatada;


        } catch (error) {
            alert(error.message);
        }
    };


