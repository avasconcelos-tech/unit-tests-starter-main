const request = require("supertest");
const createApp = require("../app");

describe("API /produtos testes de integracao", () => {
  let app;

  beforeEach(() => {
    app = createApp();
  });

  describe("GET /produtos", () => {
    test("retorna 200 e um array com os produtos iniciais", async () => {
      const res = await request(app).get("/produtos");

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(3);
    });

    //Criar caso de teste do GET /produtos/:id
  });

  describe("GET /produtos/:id", () => {
    test("retorna 200 e o produto com o id especificado", async () => {
      const res = await request(app).get("/produtos/1");

      expect(res.status).toBe(200);
      expect(res.body).toEqual({ id: 1, nome: "Coxinha", preco: 5 });
    });
  });

  describe("POST /produtos", () => {
    test("retorna 201 e o produto criado", async () => {
      const novoProduto = { nome: "Pastel", preco: 7 };
      const res = await request(app).post("/produtos").send(novoProduto);

      expect(res.status).toBe(201);
      expect(res.body).toEqual({ id: 4, ...novoProduto });
    });

    test("retorna 400 quando o produto nao for valido", async () => {
      const produtoInvalido = { nome: "", preco: -5 };
      const res = await request(app).post("/produtos").send(produtoInvalido);

      expect(res.status).toBe(400);
    });
  });

  describe("DELETE /produtos/:id", () => {
    test("retorna 204 quando o produto for removido com sucesso", async () => {
      const res = await request(app).delete("/produtos/1");

      expect(res.status).toBe(204);
    });

    test("retorna 404 quando o produto nao for encontrado", async () => {
      const res = await request(app).delete("/produtos/999");

      expect(res.status).toBe(404);
    });
  });
});
