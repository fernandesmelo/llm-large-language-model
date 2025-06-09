# Assistente de Festivais de Música Eletrônica

Este projeto é um assistente virtual especializado em festivais de música eletrônica. Ele possui um backend em Node.js que recebe perguntas do usuário, consulta uma API de IA (OpenRouter) e retorna respostas detalhadas sobre eventos, artistas, estilos, dicas de viagem, ingressos, equipamentos e tudo relacionado ao universo dos festivais eletrônicos. 

[screen-capture.webm](https://github.com/user-attachments/assets/2d7bdd4f-4784-40c1-94f6-8905a6803bc1)


## 🛠️ Construído com

<div style="display: inline-block"><br/>
  <img align="center" alt="html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
   <img align="center" alt="html5" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img align="center" alt="html5" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> 
</div><br/>

## 👨🏽‍💻 Versão das Tecnologias
* HTML5
* CSS3
* JavaScript ECMAScript 6 (ES6)
* Node.js v22.12.0

## ✒️ Autor

* **Laércio Fernandes** - [LinkedIn](https://www.linkedin.com/in/laercio-fernandes/)

## 🚀 Guia de Como Baixar e Rodar o Projeto

### 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/pt)

Além disso, é recomendado usar um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código.

---

### 🛠️ Como rodar o projeto

Siga os passos abaixo para clonar o repositório e iniciar o projeto localmente:

#### 1. Clone o repositório
```bash
git clone https://github.com/fernandesmelo/llm-large-language-model.git
```

#### 2. Acesse a pasta do backend
```bash
cd llm-large-language-model/backend
```

#### 3. Instale as dependências do backend
```bash
npm install
```

#### 4. Gere uma nova chave de API na OpenRouter
1. Acesse https://openrouter.ai/keys
2. Faça login ou crie uma conta.
3. No menu do usuário (geralmente no canto superior direito), clique em "API Keys" ou acesse diretamente: https://openrouter.ai/keys
4. Clique em "Create new key" ou "Generate new key". Dê um nome para identificar a chave e confirme.
5. Copie a nova chave e substitua no seu arquivo .env


#### 5. Crie o arquivo .env na pasta backend
Crie um arquivo chamado .env dentro da pasta backend e adicione a seguinte linha, substituindo SUA_CHAVE_AQUI pela chave copiada:
```bash
OPENROUTER_API_KEY=SUA_CHAVE_AQUI
```

#### 6. Inicie o backend
```bash
npm start
```

#### 7. Rode o frontend
Abra o arquivo frontend/index.html no seu navegador para acessar a interface do assistente.

## ⚙️ Executando os Testes
Próximos passos...
