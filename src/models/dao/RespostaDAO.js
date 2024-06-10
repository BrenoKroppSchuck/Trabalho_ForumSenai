const Resposta = require('../Respostas'); // Importe o modelo da resposta

class RespostaDAO {
  // Cria e persiste uma resposta
  async create({ idUsuario, idPostagem, conteudo, dataHora }) {
    let newResposta;
    try {
      newResposta = await Resposta.create({ idUsuario, idPostagem, conteudo, dataHora });
    } catch (error) {
      console.error('Erro ao criar resposta:', error);
    } finally {
      return newResposta; // Retorne a resposta criada
    }
  }
}

module.exports = new RespostaDAO();
