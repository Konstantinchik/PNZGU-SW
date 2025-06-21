const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3002;

const apiKey = "0fe99ee6-36a6-4632-8ff5-a7e251ef5213:fx";

app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api-free.deepl.com/v2/translate',
            {
                text: req.body.texts,
                target_lang: req.body.targetLanguageCode,
            },
            {
                headers: {
                    'Authorization': `DeepL-Auth-Key ${apiKey}`, // Замените на ваш API ключ
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при переводе текста' });
    }
});

app.listen(port, () => {
    console.log(`Прокси-сервер запущен на http://localhost:${port}`);
});
