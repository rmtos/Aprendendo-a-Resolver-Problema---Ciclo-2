// Curso de Engenharia de Software - UniEVANGÉLICA
// Disciplina de Programação Web
// Dev:  RENAN OLIVEIRA MATOS
// 20/05/2023
// Atividade Individual

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Simulação de banco de dados (em memória)
let agenda = [];

// Rota para cadastrar um novo evento na agenda
app.post('/agenda', (req, res) => {
  const evento = req.body;

  // Validar os dados do evento antes de cadastrar
  // ...

  // Cadastrar o evento na agenda
  agenda.push(evento);

  res.json({ message: 'Evento cadastrado na agenda com sucesso!' });
});

// Rota para listar todos os eventos da agenda
app.get('/agenda', (req, res) => {
  res.json(agenda);
});

// Inicie o servidor
app.listen(3001, () => {
  console.log('API de Cadastro e Listagem de Agenda iniciada na porta 3001');
});
