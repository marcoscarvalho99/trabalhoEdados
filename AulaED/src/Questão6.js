import Lista from "../src/Lista";


class Questao6 {

    constructor() {
        this.lista = new Lista();
    }

    add(dado) {

        var str = dado;
        for (let i = dado.length; i >= 0; i--)
            this.lista.add(dado.charAt(i));

    }

    substring(a, b) {
        let aux = "";
        for (let i = 0; i < this.lista.size(); i++) {

            if (i >= a && i <= b) {
                aux += this.lista.return_dado(i);
            }
        }

        return aux.toString();

    }

}


export default Questao6;