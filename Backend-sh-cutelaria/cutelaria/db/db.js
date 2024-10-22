const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config(); // Carrega as variáveis de ambiente do .env

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

module.exports = client;



