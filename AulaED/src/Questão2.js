import Lista from "../src/Lista";


class Questao2 {

    constructor() {
        this.fila = new Lista();

    }

    enqueue(num) {
        this.fila.append(num);

    }

    dequeue() {
        return (this.fila.removeBeginning());
    }

    size() {
        return (this.fila.size());

    }


}
export default Questao2;