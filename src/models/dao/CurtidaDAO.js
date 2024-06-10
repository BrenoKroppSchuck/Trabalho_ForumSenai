const Curtida = require('../Curtidas'); // Importe o modelo da curtida

class CurtidaDAO {
  // Cria e persiste uma curtida
  async create({ idUsuario, idPostagem }) {
    let newCurtida;
    try {
      newCurtida = await Curtida.create({ idUsuario, idPostagem });
    } catch (error) {
      console.error('Erro ao criar curtida:', error);
    } finally {
      return newCurtida; // Retorne a curtida criada
    }
  }
}

module.exports = new CurtidaDAO();
