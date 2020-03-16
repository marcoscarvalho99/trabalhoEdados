import Pilha4 from "../src/4-FilaComPilha";
import Pilha from "./2-TrocaPilha";

class Conversor {
    constructor() {

    }

    converter(num) {
        let p = new Pilha();
        let aux = new Pilha();

        while (num != 1 && num != 0) {
            p.push(num % 2);
            num = Math.floor(num / 2);
        }

        p.push(num);

        //console.log(p.toString());

        while (p.size() != 0) {
            aux.push(p.pop());
        }

        return aux.toString();
    }
}

export default Conversor;