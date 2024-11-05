
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

// Funcionamento do Login
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
                authToken = data.token; // Aqui que deve colocar o código pra redirecionar pra página inicial
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
            console.log(data)
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        } catch (error) {
            document.getElementById('output').innerText = 'Erro: ' + error.message;
        }
    };