const db = require('../config/database');
const PostagemDAO = require('./models/dao/PostagemDAO');
const UsuarioDAO = require('./models/dao/UsuarioDAo');
const CurtidaDAO = require('./models/dao/CurtidaDAO');
const RespostaDAO = require('./models/dao/RespostaDAO');

// Sincronize os modelos com o banco de dados
db.sequelize.sync({ force: true }).then(async () => {

  console.log('Inserindo dados de exemplo.');

  // Adicionando os usuários
  const usuario1 = await UsuarioDAO.create({
    nome: 'Matthew Hettinger',
    email: 'matthewh@example.com',
    senha: 'senha123',
  });

  const usuario2 = await UsuarioDAO.create({
    nome: 'Kristin Sykes',
    email: 'kristins@example.com',
    senha: 'senha123',
  });

  const usuario3 = await UsuarioDAO.create({
    nome: 'Clement Merrifield',
    email: 'clementm@example.com',
    senha: 'senha123',
  });

  const usuario4 = await UsuarioDAO.create({
    nome: 'Tommy Blackburn',
    email: 'tommyb@example.com',
    senha: 'senha123',
  });

  const usuario5 = await UsuarioDAO.create({
    nome: 'Agnes Walker',
    email: 'agnesw@example.com',
    senha: 'senha123',
  });

  const usuario6 = await UsuarioDAO.create({
    nome: 'Breno',
    email: 'breno@example.com',
    senha: 'senha123',
  });

  const usuario7 = await UsuarioDAO.create({
    nome: 'Jao',
    email: 'Joao@example.com',
    senha: 'senha123',
  });
  const usuario8 = await UsuarioDAO.create({
    nome: 'Lucas',
    email: 'Lucas@example.com',
    senha: 'senha123',
  });
  const usuario9 = await UsuarioDAO.create({
    nome: 'Dionathan',
    email: 'Dion@example.com',
    senha: 'senha123',
  });
  const usuario10 = await UsuarioDAO.create({
    nome: 'Gerson',
    email: 'gerson@example.com',
    senha: 'senha123',
  });

  // Adicionando postagens
  const postagem1 = await PostagemDAO.create({
    idUsuario: usuario1.id,
    titulo: "Primeira Postagem",
    conteudo: "Conteúdo da primeira postagem",
    dataHora: new Date('2022-06-30T10:00:00')
  });

  const postagem2 = await PostagemDAO.create({
    idUsuario: usuario2.id,
    titulo: "Segunda Postagem",
    conteudo: "Conteúdo da segunda postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem3 = await PostagemDAO.create({
    idUsuario: usuario3.id,
    titulo: "Terceira Postagem",
    conteudo: "Conteúdo da Terceira postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem4 = await PostagemDAO.create({
    idUsuario: usuario4.id,
    titulo: "Quarta Postagem",
    conteudo: "Conteúdo da Quarta postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem5 = await PostagemDAO.create({
    idUsuario: usuario5.id,
    titulo: "Quinta Postagem",
    conteudo: "Conteúdo da Quinta postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem6 = await PostagemDAO.create({
    idUsuario: usuario6.id,
    titulo: "Sexta Postagem",
    conteudo: "Conteúdo da sexta postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem7 = await PostagemDAO.create({
    idUsuario: usuario7.id,
    titulo: "Setima Postagem",
    conteudo: "Conteúdo da setima postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem8 = await PostagemDAO.create({
    idUsuario: usuario8.id,
    titulo: "Segunda Postagem",
    conteudo: "Conteúdo da segunda postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem9 = await PostagemDAO.create({
    idUsuario: usuario9.id,
    titulo: "Segunda Postagem",
    conteudo: "Conteúdo da segunda postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  const postagem10 = await PostagemDAO.create({
    idUsuario: usuario10.id,
    titulo: "Segunda Postagem",
    conteudo: "Conteúdo da segunda postagem",
    dataHora: new Date('2022-06-30T11:30:00')
  });

  // Adicionando curtidas
  await CurtidaDAO.create({
    idUsuario: usuario3.id,
    idPostagem: postagem1.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario4.id,
    idPostagem: postagem1.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario5.id,
    idPostagem: postagem2.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario7.id,
    idPostagem: postagem10.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario3.id,
    idPostagem: postagem5.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario9.id,
    idPostagem: postagem4.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario6.id,
    idPostagem: postagem8.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario10.id,
    idPostagem: postagem5.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario9.id,
    idPostagem: postagem6.id,
  });

  await CurtidaDAO.create({
    idUsuario: usuario4.id,
    idPostagem: postagem7.id,
  });

  // Adicionando respostas
  await RespostaDAO.create({
    idUsuario: usuario2.id,
    idPostagem: postagem1.id,
    conteudo: "Resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:00:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario3.id,
    idPostagem: postagem1.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario5.id,
    idPostagem: postagem7.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario8.id,
    idPostagem: postagem1.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario9.id,
    idPostagem: postagem4.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario5.id,
    idPostagem: postagem7.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario4.id,
    idPostagem: postagem10.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario10.id,
    idPostagem: postagem8.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario7.id,
    idPostagem: postagem10.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  await RespostaDAO.create({
    idUsuario: usuario6.id,
    idPostagem: postagem3.id,
    conteudo: "Outra resposta à primeira postagem",
    dataHora: new Date('2022-06-30T12:30:00')
  });

  console.log('Dados de exemplo criados com sucesso.');
  process.exit(0);
});
