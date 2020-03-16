import Lista from "../src/Lista";
import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada";


class Questao8 {

    constructor() {
        this.lista_Dupla = new ListaDuplamenteLigada();


    }

    add(dado) {
        this.lista.add(dado);

    }


    moverLista(list) {
        let aux = list.size();
        while (aux > 0) {
            this.lista_Dupla.add(list.removeBeginning());

            aux--;
        }
        return this.lista_Dupla.toString();
    }



}

export default Questao8;
