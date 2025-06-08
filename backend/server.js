require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const CONTEXT = `Você é um assistente especializado em festivais de música eletrônica. Responda perguntas sobre eventos, artistas, estilos, história, dicas de viagem, ingressos, equipamentos, cultura, experiências, line-ups, locais e tudo relacionado ao universo dos festivais de música eletrônica. Seja detalhado, atualizado, amigável e objetivo.`;

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'A pergunta é obrigatória.' });
  }

  const prompt = `${CONTEXT}\n\nPergunta: ${question}`;

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemma-3n-e4b-it:free',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`, 
        },
      }
    );

    const answer = response.data.choices?.[0]?.message?.content;

    if (!answer) {
      return res.status(500).json({ error: 'Resposta vazia da API.' });
    }

    res.json({ answer: answer.trim() });
  } catch (error) {
    console.error('Erro na chamada da API OpenRouter:', error.response?.data || error.message);
    res.status(500).json({ error: 'Erro ao consultar a API OpenRouter', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
