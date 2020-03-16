let denom1;
let numera1;
let denom2;
let numera2;

class atividade {

    constructor(cont = 2) {
        this.tam = cont,
            this.denominador = [],
            this.numerador = [];
    }
    mult(obj) {
        let numera = obj.numerador[0] * obj.numerador[1];
        let denomi = obj.denominador[0] * obj.denominador[1];

        return numera + "/" + denomi;
    }

    divisao(obj) {
        //questão 1
        let numera = obj.numerador[0] * obj.denominador[1];
        let denomi = obj.denominador[0] * obj.numerador[1];

        return numera + "/" + denomi;
    }


}
export default atividade;
