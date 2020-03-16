import Lista from "../src/Lista";


class Questao1 {
    constructor() {
        this.list = new Lista();

    }

    push(num) {
        this.list.add(num);
    }

    pop() {
        return (this.list.removeBeginning());


    }


}
export default Questao1;

