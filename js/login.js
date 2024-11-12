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

// FUNCIONAMENTO DO LOGIN
let authToken = '';

    document.getElementById('registerForm').onsubmit = async function (e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (usuario.success) {
            //localStorage.setItem('userName', name); // Salva o nome no localStorage
        }
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        } catch (error) {
            document.getElementById('output').innerText = 'Erro: ' + error.message;
        }
    };

    document.getElementById('loginForm').onsubmit = async function (e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.token) {
                authToken = data.token;
                
                document.getElementById('output').innerText = 'Login bem-sucedido! Token armazenado.';
                console.log(data)
            } else {
                document.getElementById('output').innerText = JSON.stringify(data, null, 2);
            }
        } catch (error) {
            document.getElementById('output').innerText = 'Erro: ' + error.message;
        }
    };

    document.getElementById('profileButton').onclick = async function () {
        if (!authToken) {
            document.getElementById('output').innerText = 'Erro: Por favor, faça login primeiro.';
            return;
        }
    
        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/profile', {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + authToken }
            });
            const data = await response.json();
            
            // Salva o nome do usuário nos cookies
            document.cookie = `userName=${data.user.name}; path=/; max-age=60`; // Cookie expira em 1 minuto
            
            console.log(getCookie('userName')); // Exibe o nome armazenado no cookie
    
            window.location.href = 'index.html';
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        } catch (error) {
            document.getElementById('output').innerText = 'Erro: ' + error.message;
        }
    };
    
    // Função para ler cookies
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    
