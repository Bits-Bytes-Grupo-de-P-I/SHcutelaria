const express = require('express');
const router = express.Router();
const { Pool } = require('pg'); // Ou outro cliente que você estiver usando para o PostgreSQL

// Configuração do banco de dados
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Rota para registrar o acesso
router.post('/access', async (req, res) => {
    const { userIp, referrer } = req.body; // Supondo que você envie o IP do usuário e o referenciador

    try {
        const query = 'INSERT INTO accesses (user_ip, referrer) VALUES ($1, $2)';
        await pool.query(query, [userIp, referrer]);
        res.status(201).send('Acesso registrado com sucesso!');
    } catch (error) {
        console.error('Erro ao registrar acesso:', error);
        res.status(500).send('Erro ao registrar acesso');
    }
});

module.exports = router;
