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
let pacientes = [];

// Rota para cadastrar um novo paciente
app.post('/pacientes', (req, res) => {
  const paciente = req.body;

  // Validar os dados do paciente antes de cadastrar
  // ...

  // Cadastrar o paciente no banco de dados
  pacientes.push(paciente);

  res.json({ message: 'Paciente cadastrado com sucesso!' });
});

// Rota para listar todos os pacientes
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('API de Cadastro de Paciente iniciada na porta 3000');
});
