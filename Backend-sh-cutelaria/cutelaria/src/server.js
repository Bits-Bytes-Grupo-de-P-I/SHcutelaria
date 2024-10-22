require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const app = express();
const collectAccess = require('./routes/collectAccess');

app.use(express.json()); // Para analisar JSON no corpo das requisições

app.use('/api', collectAccess); // Usar a rota de coleta de acessos

// Código para iniciar o servidor aqui...

const fastify = require('fastify')({ logger: true });
const { Pool } = require('pg'); // Certifique-se de que você está usando o pacote correto para PostgreSQL

// Conexão com o banco de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // URL do banco de dados
    ssl: {
        rejectUnauthorized: false, // Mude isso se você não estiver usando SSL
    },
});

// Rota de exemplo
fastify.get('/', async (request, reply) => {
    return { message: 'Servidor rodando!' };
});

// Iniciar o servidor
const PORT = Number(process.env.PORT) || 8080; // Garantindo que PORT é um número
fastify.listen({ port: PORT }, (err) => { // Corrigido para passar como objeto
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Exemplo de como usar o pool de conexões
pool.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

const cron = require('node-cron');
const { exec } = require('child_process');

// Função para executar o script de relatório mensal
function runMonthlyReport() {
    exec('node scripts/monthlyReport.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script: ${error}`);
            return;
        }
        console.log(`Saída do script: ${stdout}`);
        console.error(`Erros do script: ${stderr}`);
    });
}

// Agende o script para rodar no primeiro dia de cada mês às 09:00
cron.schedule('* * * * *', () => {
    console.log('Enviando relatório mensal...');
    runMonthlyReport();
});    

console.log('Scheduler iniciado. O relatório mensal será enviado no primeiro dia de cada mês às 09:00.');
    