// Importando as dependências necessárias
const db = require('../../config/database');
const { Model, DataTypes } = require('sequelize');

// Definindo a classe Resposta que estende Model do Sequelize
class Resposta extends Model {
  // Associação com a classe Usuario
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' });
    this.belongsTo(models.Postagem, { foreignKey: 'idPostagem', as: 'postagem' });
  }
}

// Inicializando a classe Resposta com o esquema do banco de dados
Resposta.init({
  idUsuario: { type: DataTypes.INTEGER, allowNull: false },
  idPostagem: { type: DataTypes.INTEGER, allowNull: false },
  conteudo: { type: DataTypes.TEXT, allowNull: false },
  dataHora: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize: db.sequelize, // Conexão com o banco de dados
  modelName: 'Resposta', // Nome do modelo
  tableName: 'respostas', // Nome da tabela no banco de dados
});

// Exportando a classe Resposta
module.exports = Resposta;

