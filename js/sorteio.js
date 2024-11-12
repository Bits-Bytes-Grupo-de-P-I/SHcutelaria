// Exemplo básico de condicional em JS para alternar exibição com base na existência de sorteios
let sorteioAtivo = true; // Exemplo, puxado do backend ou banco de dados

if (!sorteioAtivo) {
    document.querySelector('.sorteio-principal').innerHTML = "<p>Nenhum sorteio ativo no momento. Fique atento para novidades!</p>";
    document.querySelector('.sorteio-detalhes').style.display = "none";
}