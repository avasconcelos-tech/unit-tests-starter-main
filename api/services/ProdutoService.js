class ProdutoService {
  constructor(repository) {
    this.repository = repository;
  }

  listar() {
    return this.repository.findAll();
  }

  buscarPorId(id) {
    const produto = this.repository.findById(id);
    if (!produto) throw new Error('Produto nao encontrado');
    return produto;
  }

  criar(dados) {
    if (
      !dados ||
      typeof dados.nome !== 'string' ||
      dados.nome.trim() === '' ||
      typeof dados.preco !== 'number' ||
      dados.preco <= 0
    ) {
      throw new Error('Produto invalido');
    }

    return this.repository.create(dados);
  }

  remover(id) {
    const removido = this.repository.delete(id);
    if (!removido) throw new Error('Produto nao encontrado');
  }
}

module.exports = ProdutoService;