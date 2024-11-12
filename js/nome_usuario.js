// document.addEventListener('DOMContentLoaded', () => {
//     // Função para exibir o nome do usuário se ele estiver logado
//     function exibirNomeUsuario() {
//         const name = getCookie('userName'); // Obtém o nome do usuário do cookie
//         const usuarioElement = document.getElementById('usuario'); // Referência à <span id="usuario">

//         if (name && usuarioElement) {
//             usuarioElement.innerText = `Bem-vindo, ${name}`; // Substitui o texto "Entrar" pelo nome do usuário
//         }
//         else {
//             console.log(`ERRO`)
//         }
//     }

//     // Função para recuperar o valor de um cookie
//     function getCookie(name) {
//         const nameEQ = name + "=";
//         const ca = document.cookie.split(';');
//         for (let i = 0; i < ca.length; i++) {
//             let c = ca[i];
//             while (c.charAt(0) === ' ') c = c.substring(1, c.length);
//             if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
//         }
//         return null;
//     }

//     // Chama a função para atualizar o nome do usuário ao carregar a página
//     exibirNomeUsuario();
// });


