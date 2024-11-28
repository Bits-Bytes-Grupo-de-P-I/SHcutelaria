let isAdmin = false;
// const cadastro = document.getElementById('cadastro');
//     cadastro.style.display = 'none';

    // Função para realizar o login e armazenar o token JWT
    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('jwtToken', data.token);
                isAdmin = JSON.parse(atob(data.token.split('.')[1])).isAdmin;

                alert('Login realizado com sucesso!');
                document.getElementById('login-form').reset();

                if (isAdmin) {
                    document.getElementById('rifa-form').style.display = 'block';
                }
            } else {
                alert('Falha no login. Verifique o email e senha.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao realizar login.');
        }
    });

    // Função para cadastrar rifa (acessível apenas para administradores)
    document.getElementById('rifa-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!isAdmin) {
            alert('Acesso negado. Apenas administradores podem cadastrar rifas.');
            return;
        }

        const formData = {
            estilo: document.getElementById('estilo').value,
            tamanho: document.getElementById('tamanho').value,
            material_lamina: document.getElementById('material_lamina').value,
            material_cabo: document.getElementById('material_cabo').value,
            material_bainha: document.getElementById('material_bainha').value,
            data: document.getElementById('data').value
        };
        const token = localStorage.getItem('jwtToken');

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
    });

    // Função para buscar os dados do perfil do usuário autenticado
    async function fetchProfile() {
        const token = localStorage.getItem('jwtToken');

        try {
            const response = await fetch('https://sh-cutelaria.onrender.com/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const profile = await response.json();
                displayProfile(profile.user);
            } else {
                alert('Erro ao buscar o perfil.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao buscar o perfil.');
        }
    }

    // Função para exibir os detalhes do perfil do usuário
    function displayProfile(user) {
        const profileDetails = document.getElementById('profile-details');
        profileDetails.innerHTML = `
            <h3>Detalhes do Perfil</h3>
            <p><strong>Nome:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Administrador:</strong> ${user.isAdmin ? 'Sim' : 'Não'}</p>
        `;
    }