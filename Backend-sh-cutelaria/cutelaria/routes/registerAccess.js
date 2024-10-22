const client = require('../db/db'); // Ajuste para refletir a pasta 'db'


const registrarAcesso = async (origem) => {
    const query = 'INSERT INTO acessos (origem, data) VALUES ($1, NOW())';
    await client.query(query, [origem]);
};

module.exports = registrarAcesso;
