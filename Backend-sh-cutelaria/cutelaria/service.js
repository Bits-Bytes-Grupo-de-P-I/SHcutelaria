const Service = require('node-windows').Service;

// Criando um novo serviço
const svc = new Service({
  name: 'CutelariaServer',
  description: 'Meu servidor de cutelaria rodando como serviço',
  script: 'C:\\Users\\Ricardo\\Privado\\Programação\\Aplicativos\\Visual Studio\\Aulas\\HTML_CSS\\Backend-sh-cutelaria\\cutelaria\\src\\server.js' // Substitua pelo caminho completo do seu script
});

// Ouve o evento de instalação do serviço
svc.on('install', () => {
  svc.start();
});

// Instala o serviço
svc.install();
