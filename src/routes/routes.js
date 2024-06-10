const express = require('express');
const router = express.Router();

// Rota para a página principal
router.get('/', (req, res) => {
  res.render('index'); // Renderiza a página principal
});

// Rota para a página de login
router.get('/login', (req, res) => {
  res.render('login'); // Renderiza a página de login
});

// Rota para a página de cadastro de usuário
router.get('/cadastro', (req, res) => {
  res.render('cadastro'); // Renderiza a página de cadastro
});

// Outras rotas...

module.exports = router;
