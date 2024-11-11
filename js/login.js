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


// Funções para manipulação de cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

// Obtém o token do cookie, se existir
let authToken = getCookie('authToken') || '';

// Registro de usuário
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
        if (data.success) {
            setCookie('userName', name, 7); // Salva o nome no cookie
            document.getElementById('output').innerText = 'Registro bem-sucedido!';
        } else {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        }
    } catch (error) {
        document.getElementById('output').innerText = 'Erro: ' + error.message;
    }
};

// Login de usuário
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
            window.location.href = 'index.html';

            // Recupera o nome do usuário e salva no cookie
            const name = data.name || ''; // Caso a resposta contenha o nome do usuário
            if (name) {
                setCookie('userName', name, 7); // Salva o nome do usuário no cookie por 7 dias
            }

            document.getElementById('output').innerText = 'Login bem-sucedido! Token armazenado.';
            console.log(data)
        } else {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        }
    } catch (error) {
        document.getElementById('output').innerText = 'Erro: ' + error.message;
    }
};

// Função para salvar o nome do usuário no cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}


// Carregar o nome do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const userName = getCookie('userName');
    if (userName) {
        document.getElementById('usuario').innerText = `Bem-vindo, ${userName}!`;
    }
});

// Perfil de usuário
document.getElementById('profileButton').onclick = async function () {
    authToken = getCookie('authToken'); // Obtém o token do cookie, se existir
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
        document.getElementById('output').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById('output').innerText = 'Erro: ' + error.message;
    }
};


// let authToken = localStorage.getItem('authToken') || ''; // Obtém o token do localStorage, se existir

// document.getElementById('registerForm').onsubmit = async function (e) {
//     e.preventDefault();
//     const name = document.getElementById('registerName').value;
//     const email = document.getElementById('registerEmail').value;
//     const password = document.getElementById('registerPassword').value;

//     try {
//         const response = await fetch('https://sh-cutelaria.onrender.com/register', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, email, password })
//         });
//         const data = await response.json();
//         if (data.success) {
//         localStorage.setItem('userName', name); // Salva o nome no localStorage
//     }
//         document.getElementById('output').innerText = JSON.stringify(data, null, 2);
//     } catch (error) {
//         document.getElementById('output').innerText = 'Erro: ' + error.message;
//     }
// };

// document.getElementById('loginForm').onsubmit = async function (e) {
//     e.preventDefault();
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     try {
//         const response = await fetch('https://sh-cutelaria.onrender.com/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ email, password })
//         });
//         const data = await response.json();
//         if (data.token) {
//             authToken = data.token; // Aqui que deve colocar o código pra redirecionar pra página inicial
//             window.location.href = 'index.html';
            
//             // Recupera o nome do usuário e exibe no elemento com o id 'usuario'
//             const name = localStorage.getItem('userName'); // Obtém o nome do localStorage
//             if (name) {
//                 document.getElementById('usuario').innerText = name;
//             }

//             document.getElementById('output').innerText = 'Login bem-sucedido! Token armazenado.';
//             console.log(data)
//         } else {
//             document.getElementById('output').innerText = JSON.stringify(data, null, 2);
//         }
//     } catch (error) {
//         document.getElementById('output').innerText = 'Erro: ' + error.message;
//     }
// };

// document.getElementById('profileButton').onclick = async function () {
//     if (!authToken) {
//         document.getElementById('output').innerText = 'Erro: Por favor, faça login primeiro.';
//         return;
//     }

//     try {
//         const response = await fetch('https://sh-cutelaria.onrender.com/profile', {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + authToken }
//         });
//         const data = await response.json();
//         console.log(data)
//         document.getElementById('output').innerText = JSON.stringify(data, null, 2);
//     } catch (error) {
//         document.getElementById('output').innerText = 'Erro: ' + error.message;
//     }
// };
