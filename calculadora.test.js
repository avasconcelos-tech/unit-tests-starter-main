const {
  soma,
  subtrai,
  multiplica,
  divide,
  ehPar,
  raiz,
  media,
} = require("./calculadora");

describe("soma", () => {
  test("Soma com dois números positivos", () => {
    expect(soma(2, 3)).toBe(5);
  });
});

describe("subtrai", () => {
  test("Subtração com dois números positivos", () => {
    expect(subtrai(5, 6)).toBe(-1);
  });
});

describe("multiplica", () => {
  test("Retorna o produto correto de dois números", () => {
    expect(multiplica(5, 4)).toBe(20);
  });

  test("Retorna 0 quando um dos resultados for 0", () => {
    expect(multiplica(5, 0)).toBe(0);
  });

  test("Retorna o resultado maior do que cada um dos fatores", () => {
    expect(multiplica(4, 4)).toBeGreaterThan(4);
  });
});

describe("divide", () => {
  test("Retorna o valor correto da divisão", () => {
    expect(divide(4, 2)).toBe(2);
  });
  test("Lançar erro quando a divisão for por 0", () => {
    expect(() => divide(2, 0)).toThrow("Nao e possivel dividir por zero");
  });
});

describe("ehPar", () => {
  test("Retorna um valor verdadeiro para um número par", () => {
    expect(ehPar(2)).toBe(true);
  });

  test("Retorna um valor falso para número impar", () => {
    expect(ehPar(1)).toBe(false);
  });
});

describe("media", () => {
  test("Calcula a media de uma lista de inteiros", () => {
    expect(media([1, 2, 3, 4, 5])).toBe(3);
  });

  test("Calcular a media quando o resultado for um número decimal", () => {
    expect(media([1.5, 1.5, 3])).toBeCloseTo(2);
  });
k
  test("Lançar erro quando a lista de números for vazia", () => {
    expect(() => media([])).toThrow("A lista de numeros nao pode ser vazia");
  });

  test("Lançar erro quando a lista de números não for um array", () => {
    expect(() => media("não é um array")).toThrow(
      "A lista de numeros nao pode ser vazia",
    );
  });
});

describe("raiz", () => {
  test("Calcula a Raiz de número não exato com precisão", () => {
    expect(raiz(2)).toBeCloseTo(1.414);
  });

  test("Lançar erro para número negativo", () => {
    expect(() => raiz(-4)).toThrow(
      "Nao e possivel calcular raiz de numero negativo",
    );
  });
});
