const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {

    const caminhoDoArquivo = path.join(
        __dirname,
        'public',
        'index.html'
    );

    res.sendFile(caminhoDoArquivo);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});