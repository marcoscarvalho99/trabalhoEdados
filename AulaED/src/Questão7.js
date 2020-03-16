import ListaDuplamenteLigada from "../src/ListaDuplamenteLigada"
import Lista from "../src/Lista";




class Circulo {
    constructor() {
        let contador = 0;
        this.circulo = new Lista();
    }


    add(soldado) {

        this.circulo.add(soldado);

    }
    Posicionar() {
        let c = this.circulo.size();
        let cont = 1;
        let vetor = [];
        for (let i = c; i > 0; i--) {
            vetor[i] = this.circulo.removeBeginning();
        }

        // for (let i = 0 ) {

        // }

        return vetor;
    }


}
export default Circulo;