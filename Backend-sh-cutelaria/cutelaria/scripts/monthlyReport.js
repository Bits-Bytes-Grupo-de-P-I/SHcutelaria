const { Client } = require('pg');
const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMonthlyReport() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();

        // Adicione aqui a lógica para coletar dados que você deseja incluir no relatório
        const res = await client.query('SELECT * FROM acessos'); // Exemplo de consulta
        const reportData = JSON.stringify(res.rows, null, 2);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Certifique-se de que esta senha está correta
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: 'Relatório Mensal',
            text: `Dados do Relatório:\n\n${reportData}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Relatório mensal enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar relatório mensal:', error);
    } finally {
        await client.end();
    }
}

sendMonthlyReport();


