document.getElementById('sendBtn').addEventListener('click', async () => {
    const questionField = document.getElementById('question');
    const answerDiv = document.getElementById('answer');
    const question = questionField.value.trim();
  
    if (!question) {
      answerDiv.textContent = 'Por favor, digite uma pergunta.';
      return;
    }
  
    answerDiv.textContent = 'Carregando...';
  
    try {
      const response = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        throw new Error('Erro na resposta do servidor.');
      }
  
      const data = await response.json();
      answerDiv.textContent = data.answer || 'Nenhuma resposta recebida.';
    } catch (err) {
      answerDiv.textContent = 'Erro ao conectar com o servidor.';
      console.error(err);
    }
  });
  