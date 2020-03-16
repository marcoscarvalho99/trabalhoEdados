import atividade from "../src/atividade"
//questão 1

let t;
beforeEach(() => {
    t = new atividade();

});

test("multiplicacao", () => {
    t.numerador[0] = 2;
    t.denominador[0] = 3;
    t.numerador[1] = 3;
    t.denominador[1] = 3;
    expect(t.mult(t)).toBe(6 + '/' + 9);

});
t = new atividade(2);
test("fracaodivisao", () => {
    t.numerador[0] = 2;
    t.denominador[0] = 3;
    t.numerador[1] = 2;
    t.denominador[1] = 3;

    expect(t.divisao(t)).toBe(6 + "/" + 6);


})