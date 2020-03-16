import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";
import Lista from "../src/Lista";
import Questao1 from "../src/Questão1"
import Questao2 from "../src/Questão2"
import Questao4 from "../src/Questão4"
import Embaralhar from "../src/Questão5"
import Questao6 from "../src/Questão6"
import Questao8 from "../src/Questão8"
import Questao9 from "../src/Questão9"
import Arranjo from "../src/Questão3"
import Circulo from "../src/Questão7"
let l;
let p;
let q;
let cinco;
let seis;
let list;
let oito;
let nove;
let lista;
let soldado;

beforeEach(() => {

    l = new Questao1();
    p = new Questao2();
    q = new Questao4();
    cinco = new Embaralhar();
    seis = new Questao6();
    list = new Lista();
    oito = new Questao8();
    nove = new Questao9();
    lista = new Arranjo();
    soldado = new Circulo();
});


test("questão 1", () => {

    l.push(4);
    l.push(5);
    l.pop();
    l.push(6);
    expect(l.pop()).toBe(6);
});

test("questao2", () => {
    p.enqueue(5);
    p.enqueue(6);
    p.enqueue(7);
    p.enqueue(8);
    p.enqueue(9);
    p.dequeue();
    expect(p.dequeue()).toBe(6);

})

test("questão3", () => {
    //para colocar o valor de um elemento o menor indice é 1, e depois vem o dado que quer se colocado;

    lista.addfinal(4);
    lista.addfinal(5);
    lista.addinit(1);
    //lista.addfinal(2);
    //lista.addfinal(3);

    //primeiro o indice que é considerado é o 1 como primeiro elemento.
    //lista.addlocal(2, 6);

    //lista.removeFinal();
    //lista.removeInicio();

    // o indice que é considerado é o "1" como primeiro elemento.
    //lista.removeLocal(3);
    //funcionando
    expect(lista.toString()).toBe("1,4,5,");

})

test("Questão4", () => {

    q.append(1);
    q.append(2);
    q.append(3);
    q.append(4);
    q.append(5);
    q.inverter();

    expect(q.toString()).toBe("5->4->3->2->1");

})
test("Questão5", () => {

    cinco.add(1);
    cinco.add(2);
    cinco.add(3);
    cinco.add(4);
    cinco.add(6);



    // deixei comentado porque sempre sai um resultado diferente(embaralhar) .
    // expect(cinco.Embaralhar()).toBe(5);
})

test("Questão6", () => {

    seis.add("marcos");

    //recebe o inicio depois o fim considerando que o inicio é 1.
    expect(seis.substring(1, 4)).toBe("marc");
})

test("Questão7", () => {

    soldado.add(1);
    soldado.add(2);
    soldado.add(3);
    soldado.add(4);
    soldado.add(5);
    soldado.add(6);
    soldado.add(7);

    //não terminada
    //   expect(soldado.Posicionar()).toBe("marc");
})




test("Questão8", () => {

    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.add(6);
    list.add(7);


    expect(oito.moverLista(list)).toBe("1->2->3->4->5->6->7");
})



test("Questão9", () => {
    nove.cadastrar(48, "marcos");
    nove.cadastrar("george", 37);
    nove.cadastrar(26, "yuri");
    nove.cadastrar(55, "magno");
    nove.cadastrar(14, "gerlan")
    //não terminada
    //    expect(nove.cadastrar(14, "gerlan")).toBe("nome");
})