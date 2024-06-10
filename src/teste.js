const UsuarioDAO = require('./models/dao/UsuarioDAo');
const PostagemDAO = require('./models/dao/PostagemDAO');
const CurtidaDAO = require('./models/dao/CurtidaDAO');
const RespostaDAO = require('./models/dao/RespostaDAO');

// Função para criar usuários de exemplo
async function criarUsuariosDeExemplo() {
  try {
    // Criando usuários de exemplo
    await UsuarioDAO.create({
      nome: 'Exemplo 1',
      email: 'exemplo1@example.com',
      senha: 'senha123',
    });
    await UsuarioDAO.create({
      nome: 'Exemplo 2',
      email: 'exemplo2@example.com',
      senha: 'senha123',
    });
    // Adicione mais usuários de exemplo conforme necessário

    console.log('Usuários de exemplo criados com sucesso.');
  } catch (error) {
    console.error('Erro ao criar usuários de exemplo:', error);
  }
}

// Função para criar postagens de exemplo
async function criarPostagensDeExemplo() {
  try {
    // Criando postagens de exemplo
    await PostagemDAO.create({
      idUsuario: 1,
      titulo: 'Título da Postagem 1',
      conteudo: 'Conteúdo da postagem 1',
      dataHora: new Date(),
    });
    await PostagemDAO.create({
      idUsuario: 2,
      titulo: 'Título da Postagem 2',
      conteudo: 'Conteúdo da postagem 2',
      dataHora: new Date(),
    });
    // Adicione mais postagens de exemplo conforme necessário

    console.log('Postagens de exemplo criadas com sucesso.');
  } catch (error) {
    console.error('Erro ao criar postagens de exemplo:', error);
  }
}

// Função para criar curtidas de exemplo
async function criarCurtidasDeExemplo() {
  try {
    // Criando curtidas de exemplo
    await CurtidaDAO.create({
      idUsuario: 1,
      idPostagem: 1,
    });
    await CurtidaDAO.create({
      idUsuario: 2,
      idPostagem: 1,
    });
    // Adicione mais curtidas de exemplo conforme necessário

    console.log('Curtidas de exemplo criadas com sucesso.');
  } catch (error) {
    console.error('Erro ao criar curtidas de exemplo:', error);
  }
}

// Função para criar respostas de exemplo
async function criarRespostasDeExemplo() {
  try {
    // Criando respostas de exemplo
    await RespostaDAO.create({
      idUsuario: 1,
      idPostagem: 1,
      conteudo: 'Conteúdo da resposta 1',
      dataHora: new Date(),
    });
    await RespostaDAO.create({
      idUsuario: 2,
      idPostagem: 1,
      conteudo: 'Conteúdo da resposta 2',
      dataHora: new Date(),
    });
    // Adicione mais respostas de exemplo conforme necessário

    console.log('Respostas de exemplo criadas com sucesso.');
  } catch (error) {
    console.error('Erro ao criar respostas de exemplo:', error);
  }
}

// Chamar as funções para criar os dados de exemplo
criarUsuariosDeExemplo();
criarPostagensDeExemplo();
criarCurtidasDeExemplo();
criarRespostasDeExemplo();
