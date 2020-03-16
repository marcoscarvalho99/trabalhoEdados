import atividade2 from "../src/atividade2";
import Pilha from "../src/2-TrocaPilha";
import Fila from "../src/3-PilhaComFila";
import Pilha4 from "../src/4-FilaComPilha";
import Conversor from "../src/5-Conversor";
import FilaComCauda from "../src/6-FilaComCauda";
import Atendimento from "../src/7-atendimento";
//obj usado na questão 1
let p;
//obj usado na questão 2
let f;
//na q4
let p4;
//na q5
let conv;
//na quest 6
let fc;
//quest 7
let fil;

//criaacao de tres pilhas;
beforeEach(() => {
    p = new Pilha();
    f = new Fila();
    p4 = new Pilha4();
    conv = new Conversor();
    fc = new FilaComCauda();
    fil = new Atendimento(10);

});
//questao 2
test("Teste 2", () => {
    p.push(1);
    p.push(2);
    p.push(3);
    p.push(4);
    p.push(5);
    p.push(6);

    expect(p.trocar()).toBe("[ 6  2  3  4  5  1 ]");


});
//questao 3
test("Teste 3", () => {
    f.enqueue(1);
    f.enqueue(2);
    f.enqueue(3);
    f.enqueue(4);
    f.enqueue(5);
    f.pilhaFila();
    f.enqueue(6);

    //questao 3
    expect(f.pilhaFila()).toBe(6);
});
//questao 4
test("Teste 4", () => {
    p4.push(1);
    p4.push(2);
    p4.push(3);
    p4.push(4);
    p4.push(5);
    p4.filaPilha();
    p4.push(6);
    expect(p4.filaPilha()).toBe(2);
});
//questao 5
test("Decimal para binario", () => {
    expect(conv.converter(10)).toBe("[ 1  0  1  0 ]");
});
//questao 6
test("Fila com cauda", () => {
    fc.inserirFim(1);
    fc.inserirFim(2);
    fc.inserirFim(3);
    fc.inserirFim(4);
    fc.inserirFim(5);
    fc.inserirInicio(8);
    fc.inserirInicio(7);
    expect(fc.inserirInicio(9)).toBe(9);
});

//questao 7
test("filaclinica", () => {
    fil.add(1);
    fil.add(2);
    fil.add(3);
    fil.add(4);
    fil.add(5);
    fil.add(6)

    expect(fil.twofila()).toBe(0);
});

