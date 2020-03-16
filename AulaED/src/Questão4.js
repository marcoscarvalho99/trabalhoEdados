import Lista from "../src/Lista"

class Questao4 {

    constructor() {
        this.list = new Lista();
        this.aux = new Lista();

    }

    append(num) {
        this.list.append(num);

    }

    inverter() {

        let cont = this.list.size()
        let c = 0
        while (c < cont) {
            c++;
            this.aux.add(this.list.removeBeginning());

        }
        return this.aux.head.proximo;
    }

    toString() {
        return this.aux.toString();
    }


} export default Questao4;