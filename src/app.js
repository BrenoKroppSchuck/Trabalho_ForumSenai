// src/app.js

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const postController = require('./controllers/postController');
const routes = require('./routes/routes'); // Importe as rotas corretamente

const app = express();

// Definindo o diretório de views
app.set('views', path.join(__dirname, 'views'));

// Configuração do Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Usar as rotas
app.use('/', routes);

// Rota para renderizar a página de registro
app.get('/register', (req, res) => {
    res.render('register');
});

// Rota para lidar com o registro de usuários
app.post('/register', (req, res) => {
    // Lógica para processar o registro de usuários
    // Extrair os dados do formulário de registro (por exemplo, nome de usuário, senha, etc.)
    const { username, password } = req.body;

    // Aqui você pode adicionar a lógica para salvar o usuário no banco de dados
    // Por exemplo, usando um ORM como Sequelize ou diretamente com um banco de dados

    // Redirecionar o usuário para a página inicial após o registro bem-sucedido
    res.redirect('/');
});

// Rotas para postagens
app.get('/', postController.getAllPosts);
app.post('/create', postController.createPost);
app.get('/like/:id', postController.likePost);

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    // Importações e configurações iniciais...
const db = require('../config/database');

// Verificar conexão com o banco de dados durante a inicialização do aplicativo
db.sequelize.authenticate()
    .then(() => {
        console.log('Conexão bem-sucedida ao banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1); // Encerrar o aplicativo em caso de erro de conexão
    });

// Definição de rotas e outras configurações...

});
