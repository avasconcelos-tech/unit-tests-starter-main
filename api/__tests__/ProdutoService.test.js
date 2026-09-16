const ProdutoService = require("../services/ProdutoService");

describe("ProdutoService - Testes Unitarios com Mocks", () => {
  let service;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    };
    service = new ProdutoService(mockRepository);
  });

  describe("Listar", () => {
    test("Chama repository.findAll uma vez e retorna o resutado", () => {
      const produtos = [{ id: 1, nome: "Coxinha", preco: 5 }];
      mockRepository.findAll.mockReturnValue(produtos);

      const resutado = service.listar();

      expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
      expect(resutado).toEqual(produtos);
    });

    //Criar caso de teste para: buscar por Id
  });
  describe("Buscar por Id", () => {
    test("Chama repository.findById uma vez e retorna o resultado", () => {
      const produto = { id: 1, nome: "Coxinha", preco: 5 };
      mockRepository.findById.mockReturnValue(produto);

      const resultado = service.buscarPorId(1);

      expect(mockRepository.findById).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(produto);
    });
  });

  describe("Criar produtos", () => {
    test("Chama repository.create uma vez e retorna o resultado", () => {
      const produto = { id: 1, nome: "Coxinha", preco: 5 };
      mockRepository.create.mockReturnValue(produto);

      const resultado = service.criar(produto);

      expect(mockRepository.create).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(produto);
    });

    test("Lanca erro quando o produto nao for valido", () => {
      const produtoInvalido = { nome: "", preco: -5 };
      expect(() => service.criar(produtoInvalido)).toThrow("Produto invalido");
    });
  });

  describe("Remover produtos", () => {
    test("Chama repository.delete com o id correto quando o produto existe", () => {
      mockRepository.delete.mockReturnValue(true);

      expect(() => service.remover(1)).not.toThrow();

      expect(mockRepository.delete).toHaveBeenCalledTimes(1);
      expect(mockRepository.delete).toHaveBeenCalledWith(1);
    });

    test("Lanca erro quando o produto nao existe", () => {
      mockRepository.delete.mockReturnValue(false);

      expect(() => service.remover(1)).toThrow("Produto nao encontrado");
    });
  });
});
