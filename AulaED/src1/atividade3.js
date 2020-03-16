class exe3 {




    constructor(t) {
        this.dados = [];
        this.inicio = 0;
        this.fim = -1;
        this.tamanhoMaximo = t;
    }

    push(newData) {
        if (this.isFull()) {
            throw new Error("Fila cheia impossivel preeencher");

        } else {
            this.dados[this.fim++] = newData;
        }
    }

    pop(fila, fila2) {
        if (fila.isEmpty()) {
            throw new Error("vazia impossivel retirar algo");
        } {

            for (let i = 0; i < fila.tamanhoMaximo; i++) {
                fila2.push(fila.dados[i]) fila.dados[i];

            } let aux = fila.dados;


        }
        return fila2;
    }

    //frente da fila
    front() {
        if (this.isEmpty()) {
            throw new Error("Underflow");
        } else {
            return this.dados[this.inicio];
        }
    }

    size() {
        return this.fim + 1 - this.inicio;
    }

    isEmpty() {
        return this.fim < this.inicio;

    }

    isFull() {

        return this.size() === this.tamanhoMaximo;
    }


}

export default exe3;